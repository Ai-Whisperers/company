# ai-whisperers.org + fleet — Day 4 (2026-06-15)

> Continuation of `07c-ai-whisperers-org-day3.md`. Day 4 covered
> fleet-wide Next 16 param bug hunt, public decision log, and
> the CF proxy monitoring cron.

---

## Day 4 work summary

| # | Action | Target | Outcome |
|---|--------|--------|---------|
| 1 | Bulk sweep for sync `params: { ... }` in 22 apps | Fleet | ✅ 6 more files found, all fixed |
| 2 | Build `/[lang]/decisions` public decision log | ai-whisperers-site | ✅ Live, 4 locales, 5 deep entries |
| 3 | Build `/[lang]/how-we-work` team explainer | ai-whisperers-site | ✅ Live, 4 locales, 8 named AI bots |
| 4 | Wire Cloudflare proxy monitor cron | `~/.hermes/scripts/cf_proxy_monitor.py` | ✅ Cron `48169dc4c140` every 5m, no-agent |

---

## Fleet-wide Next.js 16 async params sweep

Earlier (day 1) I fixed the params bug in 3 ai-whisperers-site pages. A
broader regex sweep found **6 more files** with the old sync shape:

- `apps/ai-whisperers-site/app/[lang]/process/page.tsx` (would have 500'd
  on first request after DNS flip — found via `grep -rE "params.*:\s*\{\s*[\w]+\s*:\s*string"`)
- `apps/magnolia-peluqueria/app/es/reserva/success/page.tsx` (rewrote
  the file to use useEffect/Promise.all for client-side unwrap)
- `apps/magnolia-peluqueria/app/products/[id]/page.tsx`
- `apps/magnolia-peluqueria/app/blog/[id]/page.tsx`
- `apps/magnolia-peluqueria/app/es/blog/page.tsx` (BlogPage + generateMetadata)
- `apps/builder/app/casos/[slug]/page.tsx` (CasoPage)

All fixed and verified live. Two commits pushed: `7560767` and `21ae347`.

**Lesson baked into the codebase:** the sweep regex itself
(`grep -rE 'params\s*:\s*\{\s*[\w]+\s*:\s*string' apps/*/app/`) is now
documented in the existing audit doc. Future maintainers can
re-run it before any Next.js upgrade.

---

## Public decision log (new page)

`ai-whisperers.org/en/decisions` (and es/nl/pt) is a public log of
**5 deep decisions** with:
- The decision itself
- The reasoning (3-5 sentences)
- Alternatives considered + why each was rejected
- What went wrong (honest retrospective)
- What we learned

Sample entries:
- `stack-nextjs-16-over-15` — why Next 16 and not 15 or 14
- `docker-swarm-no-k8s` — why Swarm for 42-site fleet
- `transparent-pricing` — why publish rates up-front in a country that doesn't
- `no-cms-content-as-code` — why content lives in JSON files, not Sanity/Contentful
- `ai-whisperers-site-full-rebuild` — why we rebuilt from scratch instead of iterating on the Vercel build

This is the highest-trust form of credibility for technical buyers: see
the receipts, the dead ends, the trade-offs, all public. Inspired by
NEXA_DECISIONS.md from the nexa-paraguay work.

The home page now has a "Read our decision log" link next to "Full changelog".

---

## How we work page (new)

`ai-whisperers.org/en/how-we-work` (and es/nl/pt) is a 3-section explainer:

1. **The 2 founders** — Ivan + Kyrian, bios + skills
2. **The 8 named AI bots** — Erebus (orchestrator), explorer-bot, closer-bot, copy-bot, architect-bot, client-success-bot, delivery-bot, ops-bot. Each has icon, role, purpose.
3. **How a project flows between bots** — 8-step pipeline showing how a real engagement moves through the team (prospect → architect → discovery → contracted → delivery → copy → explorer → ops → Erebus)
4. **What this means for you** — the honest sales pitch (more capacity per hour-dollar, transparent, you work with the humans)

---

## Cloudflare proxy monitor (cron)

`cf_proxy_monitor.py` polls the CF DNS API every 5 minutes for the
`ai-whisperers.org` apex and `www` A records. If `proxied` flips to
`false` on either (DDoS protection off), writes an alert file and
sends to ntfy topic `ai-whisperers-alerts`.

- Script: `/root/.hermes/scripts/cf_proxy_monitor.py`
- Schedule: every 5m
- Mode: `no-agent` (zero LLM cost, just script + CF API call)
- Output: stdout delivered verbatim, or alert file if proxy is off

Cron job ID: `48169dc4c140`. Verified at deploy: `OK: apex + www are
orange-cloud proxied`.

---

## Commits pushed this session

- `Ai-Whisperers/paragu-ai-platform`:
  - `7560767 fix(fleet): Next.js 16 async params in ai-whisperers-site + magnolia-peluqueria`
  - `21ae347 fix(fleet): 2 more Next 16 async params + magnolia es/blog`
  - `6eb7bab feat(ai-whisperers-site): /decisions + /how-we-work pages`

---

## What's still pending (for you, 1-5 min each)

1. **Flip Squarespace NS** (the original 5-min task, still the live blocker)
2. **(Optional)** Un-archive `Ai-Whisperers/company` and push the 6 local commits (already pushed as of day 3)
3. **(Optional)** Upgrade CF zone to Workers Paid ($5/mo) for the OG image generator
4. **(Optional)** Purge `webui.paragu-ai.com` cache manually in CF dashboard

Everything I can do from this side is done.
