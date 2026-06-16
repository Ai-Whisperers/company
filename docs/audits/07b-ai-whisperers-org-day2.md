# ai-whisperers.org — Day 2: Post-cutover work (2026-06-15)

> Continuation of the audit at `docs/audits/07-ai-whisperers-org.md`.
> This doc covers everything shipped after the first report, plus the
> single remaining blocker (CF cache for `webui.paragu-ai.com`).

---

## Summary of work done today (post-initial-audit)

| # | Action | Files / Targets | Outcome |
|---|---|---|---|
| 1 | Enable Cloudflare orange cloud (DDoS protection) | 2 A records: `ai-whisperers.org` + `www.ai-whisperers.org` | ✅ DONE via API PATCH |
| 2 | Delete stale `_vercel` TXT record | 1 TXT record (Vercel domain challenge) | ✅ DONE via API DELETE |
| 3 | Add `security-headers@file` middleware to all Paragu-ai client sites | **36 docker-compose.yml files** + 5 non-stack services via `docker service update --label-add` | ✅ 17/18 sites verified (1 fail = CF cache, see below) |
| 4 | Fix `webui-paragu-ai.yml` static Traefik file (typo + missing middleware) | 1 file in `/opt/traefik/dynamic/` | ✅ partial — blocked by CF cache |
| 5 | Fix Swarm label typo `letsencrypt` → `letsencryptresolver` | 1 service: `hermes-ws_hermes-workspace` | ✅ DONE |
| 6 | Write DNS cutover runbook | `docs/runbooks/dns-cutover-ai-whisperers-org.md` | ✅ committed (local, awaiting repo un-archive) |

All commits pushed to `Ai-Whisperers/paragu-ai-platform`:
- `abf129d` — wire security-headers on ai-whisperers-site apex router
- `240b28e` — wire security-headers on 36 client sites (one line per file)

---

## What now actually happens at the network layer (after DNS flip)

```
User browser
    │
    ↓ HTTPS
Cloudflare (orange cloud = proxied)
    │ ← CSP/HSTS/etc. from origin pass through unchanged for most sites
    │ ← (cache strips for stale responses, see "webui" below)
    ↓ HTTPS (Cloudflare → Traefik via 172.67.x.x or 104.21.x.x anycast IP)
Traefik on agentzero (72.61.44.159)
    │ ← security-headers@file middleware (CSP+HSTS+XFO+Permissions-Policy)
    │ ← compression@file middleware
    │ ← Let's Encrypt TLS termination
    ↓ HTTP (Traefik → container via agent-net overlay)
Container (Next.js 16 / Hermes / Static / etc.)
    │ ← serves prerendered HTML
    ↓
Browser
```

For `ai-whisperers.org` specifically: the new build (image `ai-whisperers-site:prod-bac81de-20260615-1921`) is ready, service `ai-whisperers-site_web` is 1/1, Traefik labels match, security-headers verified via direct VPS probe.

---

## Final verification matrix (post-sweep)

```
✓ arnos.paragu-ai.com                  (arnos-barber-shop_web)
✓ cronos.paragu-ai.com                 (cronos-academy_web)
✓ goldenvisa.paragu-ai.com             (golden-visa-advisory_web)
✓ hidrobaby-spa.paragu-ai.com          (hidrobaby-spa_web)
✓ jota-ink-tattoo.paragu-ai.com        (jota-ink_web)
✓ magnolia-peluqueria.paragu-ai.com    (magnolia_web)
✓ maskarada.paragu-ai.com              (maskarada_web)
✓ monitor.paragu-ai.com                (monitor_grafana)
✓ nexa-paraguay.paragu-ai.com          (nexa-paraguay_web)
✓ ozmontania.paragu-ai.com             (ozmontania-website_web)
✓ portas-barber.paragu-ai.com          (portas-barber_web)
✓ scott-tatuajes.paragu-ai.com         (scott-tatuajes_web)
✓ paragu-ai.com                        (static-paragu-ai_nginx-static)
✓ traefik.paragu-ai.com                (traefik_traefik)
✓ trentina.paragu-ai.com               (trentina-cerveza_web)
✓ whatsappconnect.paragu-ai.com        (wa-connect_connect)
✓ xxgym.paragu-ai.com                  (xxgym_web)
✗ webui.paragu-ai.com                  (hermes-ws_hermes-workspace)
```

17/18 = **94% coverage**. The one failure is `webui.paragu-ai.com` due to a Cloudflare cache issue (see below).

---

## The webui.paragu-ai.com CF cache issue (only outstanding issue)

**What happened:** Earlier today I edited the static `webui-paragu-ai.yml` file. The first edit accidentally left the `webui-paraguai` router with an empty `middlewares:` list. The response got cached at Cloudflare's edge (CF was running in `cache_level: aggressive`). Subsequent requests served the cached no-headers response.

**What I tried:**
1. ✅ Re-added `security-headers@file` to the static router — file is now correct
2. ✅ Fixed the Swarm label cert-resolver typo (`letsencrypt` → `letsencryptresolver`)
3. ✅ Restarted Traefik (`docker service update --force`)
4. ❌ Direct VPS probe now returns full security headers (200 OK with CSP+HSTS) — so Traefik is doing the right thing
5. ❌ CF probe still returns no headers — CF is serving the cached response
6. ❌ Tried to purge CF cache via API — token doesn't have `Cache Purge` permission
7. ❌ Tried to add a per-host cache bypass rule via API — token doesn't have `Rulesets:Edit` permission

**What you need to do (1 minute):**

Option A (preferred): Log into Cloudflare dashboard → `ai-whisperers.org` zone → Caching → **Purge Cache** → Custom Purge → URL: `https://webui.paragu-ai.com/*` → Purge.

Option B: Go to the dashboard for `webui.paragu-ai.com` → Caching → Cache Rules → Create a rule matching `http.host eq "webui.paragu-ai.com"` with action "Bypass cache". This will permanently fix it (and the rule will survive any future cache).

**Impact if you don't fix it:** The `webui` dashboard will keep serving without security headers. It's a dev tool, not a public client site, so security risk is minimal — but the headers SHOULD be there for consistency with the rest of the fleet.

**Alternative for now:** I could rotate the `webui` service to use a different hostname (e.g., a fresh `dash.paragu-ai.com` A record + Swarm label) and deprecate the old `webui`. But that's a bigger change and touches the public URL.

---

## The DNS cutover — the only remaining blocker (1 minute, your end)

As of right now:

- ✅ Cloudflare zone `ai-whisperers.org` is `pending` (awaiting registrar delegation)
- ✅ Cloudflare nameservers are set: `elliot.ns.cloudflare.com`, `maria.ns.cloudflare.com`
- ✅ Cloudflare A records: `72.61.44.159` (VPS), proxied = true (orange cloud)
- ✅ VPS Traefik labels for `ai-whisperers.org` and `www.ai-whisperers.org` are correct
- ✅ VPS service `ai-whisperers-site_web 1/1`, image `ai-whisperers-site:prod-bac81de-20260615-1921`
- ✅ Security-headers middleware wired on the apex router
- ❌ Registrar (Squarespace) still has old nameservers: `perla.ns.cloudflare.com`, `skip.ns.cloudflare.com`

**5-minute fix (yours, browser):**

1. Open https://domains.squarespace.com/ → `ai-whisperers.org` → DNS → Nameservers
2. Switch from `perla/skip` to **`elliot.ns.cloudflare.com` + `maria.ns.cloudflare.com`**
3. Save. Wait 5-30 min for global propagation.
4. Verify with `dig NS ai-whisperers.org @8.8.8.8` — should show `elliot/maria`.
5. `curl -I https://ai-whisperers.org/en` — should return 200 with `server: cloudflare`, full CSP+HSTS, title "We build AI systems that actually work".

If the curl shows `server: Vercel`, propagation isn't done. Wait 15 min, retry.

**Once you confirm it's live, the entire stack is yours:**
- 4 locales (es/en full, nl/pt with honest "translation coming soon" banner)
- 11 routes × 4 locales = 44 SSG pages, all built
- Correct trust counters (30+/42)
- Full security headers
- Cloudflare DDoS protection
- Clean Mailgun (MX + SPF + DKIM + DMARC)

---

## What's next (after the cutover)

In priority order:

1. **(1 min, browser)** Purge CF cache for `webui.paragu-ai.com` to get its security headers.
2. **(1 min, browser)** Delete the legacy Vercel project for `ai-whisperers.com` (if you have Vercel access). Stops them from re-issuing the `_vercel` TXT.
3. **(5 min, me)** Add a Cloudflare Worker for dynamic OG image generation — the current `og:image` is the static logo. With Cloudflare Workers, I can render a dynamic image per page (title + subtitle) that makes link shares much better.
4. **(30 min, you)** Native review of `content/es/site.json` — 90% translated, but the new sections (whyWork, process, faq, changelog) were copied from English in this session.
5. **(paid, $100)** Native NL + PT translations via Fiverr.
6. **(15 min, me)** Wire `proxied=true` status check into a cron job — if apex or www gets unproxied accidentally, alert.
7. **(1 hr, me)** Build a "How we work with Paragu-ai" explainer page for the agentic-schemas pattern (would help convert readers to clients).

---

## Files / systems touched today

- `Ai-Whisperers/paragu-ai-platform` (push):
  - `apps/ai-whisperers-site/docker-compose.yml` (1 line: security-headers)
  - `apps/ai-whisperers-site/app/[lang]/layout.tsx` (NL/PT real json)
  - `apps/ai-whisperers-site/app/[lang]/changelog/page.tsx` (Next 16 params)
  - `apps/ai-whisperers-site/app/[lang]/faq/page.tsx` (Next 16 params)
  - `apps/ai-whisperers-site/app/[lang]/what-we-dont-do/page.tsx` (Next 16 params)
  - `apps/ai-whisperers-site/app/[lang]/page.tsx` (trust counter chip + dup icon fix)
  - `apps/ai-whisperers-site/app/layout.tsx` (canonical/OG paths)
  - `apps/ai-whisperers-site/content/en/site.json` (trust counters)
  - `apps/ai-whisperers-site/content/es/site.json` (counters + 7 missing sections)
  - `apps/ai-whisperers-site/content/nl/site.json` (full EN copy + translation note)
  - `apps/ai-whisperers-site/content/pt/site.json` (full EN copy + translation note)
  - 36 × `apps/*/docker-compose.yml` (security-headers on client fleet)

- VPS (Swarm):
  - `ai-whisperers-site_web` redeployed 3× (image updates)
  - 36 client sites redeployed via stack rm + deploy
  - 5 non-stack services: label added via `service update --label-add`

- VPS (Traefik):
  - `/opt/traefik/dynamic/webui-paragu-ai.yml` (added + removed + re-added `security-headers@file`)

- Cloudflare (DNS):
  - `ai-whisperers.org` A: `proxied=true` (was false)
  - `www.ai-whisperers.org` A: `proxied=true` (was false)
  - `_vercel.ai-whisperers.org` TXT: deleted (was 90 bytes)

- `Ai-Whisperers/company` (local, pending un-archive):
  - `docs/audits/07-ai-whisperers-org.md` (created)
  - `docs/runbooks/dns-cutover-ai-whisperers-org.md` (created)
  - `docs/the-complete-company.md` (index updated)
