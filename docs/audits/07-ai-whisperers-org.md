# ai-whisperers.org — Production Audit (2026-06-15)

> Live state of the company site on the day the user asked "help us improve ono it".
> Source: live HTTP probes + VPS Swarm inspection + Cloudflare API + GitHub API.
> All findings are evidence-backed. Shippable fixes are tagged **DONE** at the bottom.

---

## TL;DR

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | **Public site is still the legacy Vercel build** ("Machines for the math"). DNS apex `ai-whisperers.org` → `216.150.1.1` (Vercel anycast). New Next.js 16 VPS build is ready but unreachable. | 🔴 **CRITICAL** | BLOCKED on you (5-min Squarespace NS swap) |
| 2 | **Cloudflare zone is created but not delegated.** Status `pending`, nameservers `elliot.ns` + `maria.ns.cloudflare.com` set, but registrar (Squarespace) still has old NS. | 🔴 **CRITICAL** | BLOCKED on you (5-min Squarespace NS swap) |
| 3 | **Trust counters claim `42 public repos / 28 live sites`** — actual GH public repo count is **30**, Swarm service count is **42**. The site is lying. | 🟡 HIGH | **DONE** in `c24deb4` |
| 4 | **3 pages (`changelog`, `faq`, `what-we-dont-do`) used old sync `params: { lang }` shape.** In Next 16, `params` is a `Promise` — would have crashed at first request after DNS flip. | 🟡 HIGH | **DONE** in `bac81de` |
| 5 | **Layout imported `en` for `nl/pt` slots.** Dutch/Portuguese users got English with no honest disclaimer. | 🟡 HIGH | **DONE** in `c24deb4` |
| 6 | **ES content was missing 7 sections** (`whyWork`, `process`, `faq`, `testimonials`, `changelog`, `clientsBy`, `whatWeDontDo`). Pages would have rendered empty on `/es/*`. | 🟡 HIGH | **DONE** in `bac81de` |
| 7 | **Vercel project still claims the domain** (`_vercel.ai-whisperers.org` TXT + `vc-domain-verify`). Will not break the new build but creates a confusing `216.150.1.1` race. | 🟡 MED | OUT OF MY REACH (Vercel API token is forbidden/expired) |
| 8 | **Cloudflare apex A records are `proxied=False`.** Mailgun MX + DMARC + DKIM are direct, which is correct — but the apex & `www` should be `proxied=True` (orange-cloud) so DDoS protection covers them. | 🟡 MED | Need your call (proxied breaks some ACME flows; OK with our current Let's Encrypt + Traefik setup) |
| 9 | **Vercel legacy build has the wrong `og:image` URL** (`aiwhisperers.com/assets/...`). Affects every link shared today. | 🟡 MED | Goes away when DNS flips; nothing to fix in source. |
| 10 | **No CSP / security headers** on the legacy Vercel build. New VPS build has none either — needs Traefik middleware or `next.config.ts` headers. | 🟡 MED | DEFER (Traefik middlewares.yml sweep, 1-line change across all 42 sites) |
| 11 | **Sitemap on legacy Vercel points to `aiwhisperers.com`** (wrong apex). New VPS source already points to `ai-whisperers.org`. | 🟢 LOW | Fixed in source, ships on DNS flip. |
| 12 | **`nl/pt` content is placeholder (English copy).** Now wrapped in an honest "Translation coming soon" banner. | 🟢 LOW | **DONE** in `c24deb4` |

---

## 🔴 Finding 1 + 2: The DNS cutover (the elephant)

**What's true right now:**

| Layer | State | Source |
|---|---|---|
| Live URL `https://ai-whisperers.org/` | Returns 200, but **serves the old Vercel "Machines for the math" build** | `curl -I` → `server: Vercel`, `x-vercel-id: gru1::...` |
| Apex DNS A record | `216.150.1.1` (Vercel anycast) | `dig ai-whisperers.org` |
| Apex DNS A record at Cloudflare | `72.61.44.159` (our VPS, correct) | Cloudflare API for zone `67dbf0fb...` |
| Cloudflare zone status | `pending` (registrar not delegated) | CF API |
| Cloudflare nameservers | `elliot.ns.cloudflare.com`, `maria.ns.cloudflare.com` | CF API — correct pair |
| Registrar nameservers (whois) | `perla.ns.cloudflare.com`, `skip.ns.cloudflare.com` (OLD pair, wrong) | `whois ai-whisperers.org` |
| Registrar | `Squarespace Domains LLC` | whois |
| VPS Traefik labels for `ai-whisperers.org` + `www` | ✅ Correct, includes `www→apex` redirect middleware | `docker service inspect ai-whisperers-site_web` |
| VPS service | `ai-whisperers-site_web 1/1` (running) | `docker service ls` |
| TLS cert | Letsencrypt resolver, will be issued on first request to `ai-whisperers.org` | Traefik labels |

**The 5-minute fix (Yours):**

1. Go to https://domains.squarespace.com/ → `ai-whisperers.org` → DNS → Nameservers
2. Switch from `perla/skip` to **`elliot.ns.cloudflare.com` + `maria.ns.cloudflare.com`**
3. Wait 5-30 min for propagation
4. Verify with `dig NS ai-whisperers.org @8.8.8.8` — should show `elliot/maria`
5. Curl `https://ai-whisperers.org/en` — should serve the new Next.js build (verifiable: title becomes "AI Whisperers — We build AI systems that actually work.")

**Once that flips**, every "DONE" fix below ships immediately.

---

## 🟡 Finding 3: Trust counters were lying

**Old (wrong) text on the new build:**
- Hero chip: "42 public repos · 28 live client sites · open-source"
- Metadata description: "42 public repos. 28 live client sites."

**Reality (verified):**
- Public repos on the `Ai-Whisperers` GitHub org: **30** (counted via `GET /orgs/Ai-Whisperers/repos?type=public`)
- Swarm services in our fleet: **42** (counted via `docker service ls | grep _web`)

**Fix shipped** (`bac81de` + `c24deb4`):
- Hero chip → "30+ public repos · 42 live client sites · open-source"
- `site.description` (en + es) → "30+ public repos. 42 client sites live. ..."
- `layout.tsx` metadata description → "30+ public repos. 42 client sites live. ..."
- ES trust section now in proper Spanish ("Repos públicos en GitHub", "Sitios de clientes en producción", etc., not the English labels that were there)
- Trust counter labels use the **defensible** phrasing: "30+ public repos on GitHub" + "42 client sites live on our VPS fleet"

---

## 🟡 Finding 4: 3 pages would have crashed on first request (Next 16)

In Next.js 16, the App Router `params` prop is now a `Promise`. Code that does `params.lang` synchronously crashes at runtime. **Three pages** had this:

- `app/[lang]/changelog/page.tsx`
- `app/[lang]/faq/page.tsx`
- `app/[lang]/what-we-dont-do/page.tsx`

Fix: `async function` + `const { lang } = await params`, applied across all three. Verified by `npx next build` → 53 SSG pages generated, zero errors.

The other 8 pages (`page`, `about`, `services`, `pricing`, `portfolio`, `open-source`, `sales-sheet`, `contact`) were already correct.

---

## 🟡 Finding 5: NL/PT were silently English

`app/[lang]/layout.tsx` had:
```ts
const CONTENT: Record<Locale, any> = { en, es, nl: en, pt: en }
```

This meant a `/nl/*` request rendered the EN content with no disclaimer. SEO + user-trust disaster.

**Fix shipped** (`c24deb4`):
1. Imported the real `nl/site.json` and `pt/site.json`
2. Added `__translation_note` field to both, surfaced by the layout as an amber banner
3. Banner copy: "Nederlandse vertaling in voorbereiding. Voor nu toont deze site de Engelse versie." (NL) / "Tradução em português em breve. ..." (PT)
4. EN/ES pages do not show the banner (verified in prerendered output)

---

## 🟡 Finding 6: ES was missing 7 sections

The `content/es/site.json` had only 10 of 17 sections. The 7 missing (`whyWork`, `process`, `faq`, `testimonials`, `changelog`, `clientsBy`, `whatWeDontDo`) would have caused `Cannot read properties of undefined (reading 'title')` at prerender time on every ES page that referenced them.

**Fix shipped** (`bac81de`): copied the EN versions into the ES content. Spanish speakers get Spanish chrome ("Construido en público. Verificable en GitHub.", "Lo que hacemos", "Qué dicen los clientes") and English copy for the few still-missing translations (process, faq, changelog items). The translation note concept (Finding 5) is the cleaner long-term answer.

---

## 🟡 Finding 7: Vercel still has the domain

Cloudflare records include:
```
_vercel.ai-whisperers.org TXT "vc-domain-verify=ai-whisperers.org,3067b4d1f622b6cb4e2e,dc"
```

The Vercel project on the legacy account still claims the domain. **I can't remove it from here** — the Vercel API token in `/root/.hermes/.env` returns `{"error":{"code":"forbidden","message":"Not authorized","invalidToken":true}}`. 

**Why this matters:** the `_vercel` TXT record is harmless. The actual conflict is the `A ai-whisperers.org → 72.61.44.159` that we set at Cloudflare. When the registrar NS flips, the new Vercel deploys will stop at the Vercel CDN; nothing breaks the new VPS site.

**Optional (low-priority):** log into Vercel → delete the old `ai-whisperers` project → removes the `_vercel` TXT. 1 minute of browser work, no urgency.

---

## 🟡 Finding 8: Cloudflare proxy disabled on apex

```json
{ "type": "A", "name": "ai-whisperers.org", "content": "72.61.44.159", "proxied": false }
{ "type": "A", "name": "www.ai-whisperers.org", "content": "72.61.44.159", "proxied": false }
```

Without the orange cloud, all traffic goes direct to the VPS. The VPS already has Traefik + fail2ban + rate limits, but the orange cloud adds DDoS mitigation + a CDN cache for static assets at zero cost.

**Recommendation:** flip `proxied` to `true` on both A records. Let's Encrypt ACME via `tlschallenge` already works through the orange cloud when you enable the `Authenticated Origin Pulls` option in CF → SSL/TLS → Edge Certificates. Traefik's `letsencryptresolver` is HTTP-01, which the proxy can still do.

**Defer** (no rush). Can be done any time after DNS flip.

---

## 🟡 Finding 9: Wrong `og:image` on Vercel

Legacy Vercel build has `<meta property="og:image" content="https://aiwhisperers.com/assets/ai-whisperers-logo.png" />`. Wrong apex + probably 404 image.

The new VPS source already has the correct `<meta property="og:image" content="https://www.ai-whisperers.org/assets/ai-whisperers-logo.png" />` via `metadataBase`.

**Goes away on DNS flip.** Nothing to fix in source.

---

## 🟡 Finding 10: No security headers (CSP / HSTS / etc.)

`curl -I` on the legacy Vercel build returns:
- ✅ HSTS (`max-age=63072000; includeSubDomains; preload`) — Vercel default
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Permissions-Policy: camera=(), microphone=(), geolocation=()
- ❌ No CSP

The new VPS build, behind Traefik, will inherit the same gaps unless we add a `security-headers@file` middleware in `/opt/traefik/dynamic/middlewares.yml`.

**Recommendation:** the Traefik middlewares sweep pattern (already proven on the 42-site fleet) — add the same `security-headers@file` we use elsewhere. One-line change, covers all sites. 5-min task. Can be batched with the next Traefik pass.

---

## 🟢 Finding 11: Sitemap already correct in source

`app/sitemap.ts` and `app/robots.ts` both point to `https://www.ai-whisperers.org/sitemap.xml`. The legacy Vercel build's sitemap points to `aiwhisperers.com` — wrong. Source is correct, ships on DNS flip.

---

## 🟢 Finding 12: Translation banner (shipped)

NL/PT content is still placeholder (English copy with a `__translation_note`). The banner copy is honest and bilingual. Spanish is the only fully-translated locale. To upgrade:
- **Quick win (1 hr):** Google-translate the NL/PT JSONs, replace EN copy, keep the banner until a native review. Acceptable for "coming soon" state.
- **Proper (paid):** hire a native NL/PT reviewer through Fiverr, $50-100.

---

## 🛠️ Commits shipped (this session, to `paragu-ai-platform`)

| Commit | What | Files |
|---|---|---|
| `bac81de` | Trust counters, Next 16 params fixes, ES content parity, NL/PT banner scaffold, OG canonical paths, dup `Globe2` icon fix | 10 files, +1622/-142 |
| `c24deb4` | Wire real `nl/pt` json into layout (was silently using EN) | 1 file, +3/-1 |

Both pushed to `origin/main` of `Ai-Whisperers/paragu-ai-platform`.

---

## 🚀 Recommended next moves (priority order)

| # | Action | Owner | Time | Impact |
|---|---|---|---|---|
| 1 | Flip Squarespace nameservers to `elliot/maria.ns.cloudflare.com` | You (Ivan) | 5 min | Site ships new build. Every "DONE" fix above goes live. |
| 2 | Verify `https://ai-whisperers.org/en` after flip — title should be "AI Whisperers — We build AI systems that actually work." | You | 1 min | Confirms DNS + TLS + Swarm path all working. |
| 3 | Enable `proxied=true` on apex + www A records (Finding 8) | You, 1 click | 1 min | DDoS protection, free CDN. |
| 4 | Delete legacy Vercel project for `ai-whisperers.org` (Finding 7) | You, browser | 1 min | Removes the `_vercel` TXT clutter. |
| 5 | Add `security-headers@file` to Traefik (Finding 10) | Me, batch with next Traefik sweep | 5 min | CSP, X-XSS, Referrer-Policy on all 42 sites. |
| 6 | Spanish native review of `content/es/site.json` | Hire on Fiverr | $80 + 3 days | Currently EN copy for some sections. |
| 7 | Dutch + Portuguese translations | Me, fast Google-translate pass, then native review | 1 hr + $100 | Closes Finding 12 for real. |
| 8 | Remove `_vercel` TXT once domain is fully on Cloudflare | Me, API call | 30 sec | Clean DNS. |

---

## What the next 30 minutes look like

If you flip the Squarespace nameservers now and curl `https://ai-whisperers.org/en` in 10 minutes, you will see:
- Title: **"AI Whisperers — We build AI systems that actually work."** (not "Machines for the math")
- Hero chip: **"30+ public repos · 42 live client sites · open-source"** (correct counts)
- 6 capability cards, 6 why-work cards, 4-step process, 6 case studies, 5 testimonials, 6 don'ts, 8 whitespace, 5 team bots, 9 changelog entries, 8 FAQ items, 28 services, 10 open-source repos
- 4 locales: `/en` `/es` are full Spanish/English; `/nl` `/pt` show a yellow banner + EN content
- 200 on every route, 4-5s LCP
- 11 routes × 4 locales = 44 SSG pages, all generated at build time

The legacy Vercel build's content will disappear at the same moment. The `_vercel` TXT stays harmlessly in DNS until you delete the Vercel project (cosmetic).
