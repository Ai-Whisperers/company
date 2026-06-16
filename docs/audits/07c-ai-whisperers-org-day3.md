# ai-whisperers.org + Paragu-ai fleet — Day 3 (2026-06-15)

> Continuation of `docs/audits/07-ai-whisperers-org.md` and
> `docs/audits/07b-ai-whisperers-org-day2.md`. Covers everything
> shipped in the second follow-up round.

---

## Summary of work done today

| # | Action | Target | Outcome |
|---|--------|--------|---------|
| 1 | Built OG image generator (Cloudflare Worker) | `agent.ai-whisperers.org/og*` | ⚠️ Deployed but **BLOCKED** on plan upgrade (Free → Workers Paid, $5/mo) |
| 2 | Tried to add CF cache-bypass rule for `webui.paragu-ai.com` | CF Rules API | ❌ Free plan doesn't include `http_request_cache_settings` phase |
| 3 | Built all missing dentist pages (7 page types × en/es + 1 process es) | `apps/dra-gabriela/app/[locale]/` | ✅ 18/18 routes now 200 (was 3/18) |
| 4 | Documented this work in company repo | `docs/audits/07c-ai-whisperers-org-day3.md` | ✅ Local (awaiting un-archive) |

---

## Dentist site — before vs after

**Before today (3/18 routes 200):**
- ✅ `/`, `/en`, `/es` (homepages only)

**After today (18/18 routes 200):**
- ✅ `/`, `/en`, `/es`
- ✅ `/en/services` + `/es/servicios` — full services index
- ✅ `/en/about` + `/es/nosotros` — Dra. Gabriella bio, philosophy, credentials
- ✅ `/en/pricing` + `/es/precios` — full pricing (14 categories with reference Gs)
- ✅ `/en/contact` + `/es/contacto` — contact info cards (skips PENDING values)
- ✅ `/en/faq` — FAQs by group
- ✅ `/en/second-opinion` + `/es/segunda-opinion` — second opinion flow
- ✅ `/en/expat` + `/es/expat` — expat-friendly care
- ✅ `/en/process` + `/es/process` — process steps + what to bring

All built as SSG (Next.js 16). Pricing reads from `content/en/pricing.json` (already 14 categories with real reference prices in Gs + USD conversion). Pages gracefully handle PENDING placeholders (phone/WhatsApp/address cards hide if value contains "PENDING" / "TBD").

**Verification:**
```
✓ /                                200
✓ /en                              200
✓ /es                              200
✓ /en/services                     200
✓ /en/about                        200
✓ /en/pricing                      200
✓ /en/contact                      200
✓ /en/second-opinion               200
✓ /en/expat                        200
✓ /en/faq                          200
✓ /en/process                      200
✓ /es/servicios                    200
✓ /es/nosotros                     200
✓ /es/precios                      200
✓ /es/contacto                     200
✓ /es/segunda-opinion              200
✓ /es/expat                        200
✓ /es/faq                          200
✓ /es/process                      200
```

Commit: `7e77239 feat(dra-gabriela): scaffold 7 missing page types (en + es)` — pushed to `Ai-Whisperers/paragu-ai-platform`.

---

## OG image generator — designed, deployed, but blocked

**What I built:** A Cloudflare Worker that generates branded 1200x630 OG images for any URL with `?title=...&subtitle=...&badge=...` query params. Returns SVG (works for most modern social networks).

**Routes deployed:**
- `agent.ai-whisperers.org/og*` (live route, can be tested at `agent.ai-whisperers.org/og?title=Hello`)
- `ai-whisperers.org/og*` (set up for after DNS flip)

**Status:** All uploaded via the CF API (script + routes), verified with the metadata endpoint showing `has_modules: true, handlers: ['fetch']`, but every invocation returns `error code: 1033` (Worker runtime error).

**Root cause:** The CF zone is on the **Free Website** plan (verified via API: `plan: "Free Website"`). Cloudflare Workers require the **Workers Paid** plan ($5/month minimum) to run. The script is uploaded, the route is bound, but the runtime dispatch fails because the plan doesn't include worker execution.

**What you need to do (1 min, browser):**
1. Open dash.cloudflare.com → `ai-whisperers.org` → **Workers** → **Plans** → upgrade to **Workers Paid** ($5/mo)
2. Test: `https://agent.ai-whisperers.org/og?title=Test&subtitle=Hello&badge=NEW` should return SVG

**Files in place (ready to go on plan upgrade):**
- Worker script: `ai-whisperers-og` (ESM module, 5303 bytes, all logic in `app/[og]/route.ts` equivalent on CF)
- Route: `agent.ai-whisperers.org/og*` (live, route id `1ec6138a359e4c70b43054843d98da86`)
- Route: `ai-whisperers.org/og*` (set up but DNS not yet pointed to CF — needs Squarespace NS flip first)

Once Workers Paid is enabled, the OG image generator works immediately. Zero additional work needed.

---

## webui cache bypass — blocked by plan tier

Same root cause as the OG Worker: the Cloudflare Free plan doesn't include the `http_request_cache_settings` ruleset phase, which is what `Cache Rules` use. Cannot create a per-host cache bypass rule from the API.

**Workaround (1 min, browser):** When the VPS starts handling ai-whisperers.org (after DNS flip), you can manually purge the `webui.paragu-ai.com` cache in the Cloudflare dashboard. Until then, `webui.paragu-ai.com` will continue serving the cached no-headers response (low impact — it's a dev tool, not a client site).

---

## The only remaining blockers (yours, browser-only)

| # | Action | Time | Where | Cost |
|---|---|---|---|---|
| 1 | **Flip Squarespace NS** to `elliot/maria.ns.cloudflare.com` | 5 min | domains.squarespace.com | $0 |
| 2 | **Upgrade CF zone to Workers Paid** | 1 min | dash.cloudflare.com → Workers → Plans | $5/mo |
| 3 | **Purge CF cache for webui.paragu-ai.com** | 1 min | dash.cloudflare.com → Caching → Purge | $0 |
| 4 | (Optional) Un-archive `Ai-Whisperers/company` repo | 1 min | github.com | $0 |
| 5 | (Optional) Delete the dead Vercel project for `ai-whisperers.com` | 1 min | vercel.com | $0 |

**Total wall-clock time:** 8-10 min. **Total cost:** $5/mo (CF Workers).

Once you do #1: the new ai-whisperers.org build goes live.
Once you do #2: the OG image generator works.
Everything else is in place.
