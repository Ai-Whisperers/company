# ai-whisperers.org — DNS Cutover Runbook (2026-06-15)

> **Status:** All the platform work is done. The only thing standing between
> the live public and the new build is a 5-minute Squarespace + Vercel
> task list. This doc is the exact step-by-step.

---

## 0. Current state (read first)

| Layer | Now | Target | Status |
|---|---|---|---|
| Public URL `https://ai-whisperers.org/` | 200 from Vercel legacy "Machines for the math" build | 200 from VPS Next.js 16 build | ❌ |
| Apex DNS A record | `216.150.1.1` (Vercel anycast) | `72.61.44.159` (our VPS, behind Cloudflare) | ❌ |
| Cloudflare zone | `pending` (not delegated to Cloudflare) | `active` | ❌ |
| Registrar NS (Squarespace) | `perla/skip.ns.cloudflare.com` (old pair) | `elliot/maria.ns.cloudflare.com` | ❌ |
| Cloudflare `proxied=true` on apex+www | ✅ Just set today | n/a | ✅ |
| Vercel `_vercel` TXT | ✅ Deleted today | n/a | ✅ |
| VPS Traefik labels for `ai-whisperers.org` | ✅ Correct, security-headers wired | n/a | ✅ |
| VPS service `ai-whisperers-site_web` | 1/1, image `ai-whisperers-site:prod` | n/a | ✅ |
| Letsencrypt | Will issue on first request to `ai-whisperers.org` (HTTP-01 via Traefik) | n/a | ⏳ |

**Estimated total cutover time: 5-10 minutes for the registrar swap, then 5-30 minutes for DNS propagation.**

---

## 1. Flip Squarespace nameservers (THE BLOCKER)

Time: **2 minutes**.

1. Open https://domains.squarespace.com/ in a browser.
2. Sign in (Ivan's account).
3. Click **`ai-whisperers.org`** → **DNS** → **Nameservers** (left nav).
4. Currently shows Squarespace default nameservers. Click **Use custom nameservers**.
5. Replace with:
   - `ns1.elliot.ns.cloudflare.com` (or `elliot.ns.cloudflare.com`)
   - `ns2.maria.ns.cloudflare.com` (or `maria.ns.cloudflare.com`)
   - Some Squarespace UIs split the FQDN — paste exactly:
     - Nameserver 1: `elliot.ns.cloudflare.com`
     - Nameserver 2: `maria.ns.cloudflare.com`
6. Click **Save**. Squarespace will warn that you're delegating away — confirm.
7. Status should change to "Custom nameservers" within a minute.

**Done. Now wait 5-30 min for global propagation.**

---

## 2. Verify propagation (10 sec per check)

Run these in your terminal:

```bash
# Should return elliot/maria within minutes
dig NS ai-whisperers.org @8.8.8.8

# Should return Cloudflare IPs (172.67.x or 104.21.x — NOT 216.150.1.1)
dig A ai-whisperers.org @8.8.8.8

# The kill shot: live response should be the new build, not the Vercel one
curl -I https://ai-whisperers.org/en | head
```

What "done" looks like:

```
$ dig NS ai-whisperers.org @8.8.8.8
ai-whisperers.org.   86400   IN   NS   elliot.ns.cloudflare.com.
ai-whisperers.org.   86400   IN   NS   maria.ns.cloudflare.com.

$ dig A ai-whisperers.org @8.8.8.8
ai-whisperers.org.   300   IN   A   172.67.155.205    (or 104.21.x)
ai-whisperers.org.   300   IN   A   104.21.56.190     (Cloudflare anycast)

$ curl -I https://ai-whisperers.org/en
HTTP/2 200
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' ...
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: SAMEORIGIN
server: cloudflare        # ← THIS LINE is the proof
```

If `server: cloudflare` is in the response headers, **the cutover is live**.

---

## 3. Clean up Vercel (1 min)

Time: **1 minute**. Optional but recommended.

1. Open https://vercel.com/dashboard
2. Find the project that was serving `ai-whisperers.com` (or `ai-whisperers.org`).
3. **Settings → Domains** → remove the `ai-whisperers.com` and `ai-whisperers.org` domains.
4. **Settings → General → Delete Project**.

This stops Vercel from re-issuing the `_vercel` TXT record (we already deleted the one in Cloudflare, but a fresh re-add could happen if the Vercel project is still alive).

---

## 4. Verify the live build matches what we shipped

Once the cutover is live (Section 2), spot-check:

```bash
# Title should be "AI Whisperers — We build AI systems that actually work."
# NOT "Machines for the math. Humans for the magic."
curl -sS https://ai-whisperers.org/en | grep -oE "<title>[^<]+</title>" | head -1

# Hero trust chip should be "30+ public repos · 42 live client sites"
curl -sS https://ai-whisperers.org/en | grep -oE "[0-9]+\+?\s+public repos\s*·[^<]+"

# ES page should have Spanish trust counters
curl -sS https://ai-whisperers.org/es | grep -oE "Repos p[úu]blicos en GitHub"

# NL page should show the translation banner
curl -sS https://ai-whisperers.org/nl | grep -oE "Nederlandse vertaling[^<]+"

# Changelog should have 9 entries
curl -sS https://ai-whisperers.org/en/changelog | grep -c "<time"
# Expected output: 9

# All 4 locales × 11 routes = 44 pages should 200
for l in en es nl pt; do
  for p in / /services /portfolio /process /open-source /pricing /faq /changelog /about /contact /sales-sheet /what-we-dont-do; do
    code=$(curl -sS -o /dev/null -w "%{http_code}" "https://ai-whisperers.org/$l$p")
    [ "$code" != "200" ] && echo "FAIL: /$l$p → $code"
  done
done
# No output = all 48 routes 200
```

If any route fails, check:
- Traefik logs: `docker service logs ai-whisperers-site_web | tail -50`
- Service health: `docker service ps ai-whisperers-site_web`
- Network: `docker network inspect agent-net | grep ai-whisperers`

---

## 5. Post-cutover announcements (1 min)

When the site is live, post in:

1. **Telegram** (the Ai-Whisperers team channel, if there is one) — "ai-whisperers.org is live on the new build"
2. **Twitter** (Ivan's personal, or @ai_whisperers if active) — "Just shipped the new ai-whisperers.org — 4-locale, content-driven, on our own VPS. Built in public, 30+ repos of proof. ai-whisperers.org"
3. **LinkedIn** (Ivan's company page) — "AI Whisperers relaunches its company site on a 4-locale, content-driven Next.js 16 stack running on our own Docker Swarm. Live at ai-whisperers.org."

(Skip these if not in scope — they're listed for completeness.)

---

## What if it breaks?

| Symptom | Likely cause | Fix |
|---|---|---|
| `curl https://ai-whisperers.org/` hangs or refuses connection | DNS not propagated yet | Wait 30 min, retry |
| `curl -I` shows `server: Vercel` | DNS still resolving to old Vercel anycast | Wait for NS propagation, or check `dig NS` at 8.8.8.8 |
| `curl -I` shows `server: cloudflare` but HTTP 502/504 | Traefik can't reach the container | Check `docker service ps ai-whisperers-site_web` — task might be on a dead node |
| `curl -I` shows `server: cloudflare` but HTTP 404 | Traefik routing rule mismatch | Confirm label still says `Host(\`ai-whisperers.org\`)` |
| Letsencrypt challenge fails | Traefik `letsencryptresolver` not running | Check Traefik logs for `acme` errors |
| Mixed content (HTTP on HTTPS page) | `_next/static` or `og:image` references something insecure | Check `view-source:https://ai-whisperers.org/en` |

**If none of the above work, post in #ops with `curl -I https://ai-whisperers.org/en` output and I'll take it from there.**

---

## Files changed today (everything already pushed)

| Repo | Commit | What |
|---|---|---|
| `Ai-Whisperers/paragu-ai-platform` | `bac81de` | Trust counters (30+/42), Next 16 params fixes, ES content parity, NL/PT banner scaffold, OG canonical paths |
| `Ai-Whisperers/paragu-ai-platform` | `c24deb4` | Wire real `nl/pt` json into layout (was silently using EN) |
| `Ai-Whisperers/paragu-ai-platform` | `abf129d` | Traefik label: `security-headers@file` middleware on apex router |
| `Ai-Whisperers/company` (local) | `5532991` | `docs/audits/07-ai-whisperers-org.md` + index update |

The VPS image `ai-whisperers-site:prod` has the trust counters, locale fixes, banner, and security headers all baked in. Service is `1/1` running.

**All that's missing is the registrar NS swap. The rest is paperwork.**
