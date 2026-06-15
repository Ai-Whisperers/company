# Case Study: Nexa Paraguay

> Flagship multilingual client site — 4-locale (es/en/nl/de) Next.js 16 platform for Sonia Weiss's Paraguay relocation business.

**Live at:** https://nexa.paragu-ai.com
**Repo:** https://github.com/Ai-Whisperers/nexa-paraguay

---

## 🎯 The Project

Sonia Weiss runs a relocation-accompaniment service for Germans, Dutch, and Belgians moving to Paraguay. The site needed to serve four-locale traffic (es/en/nl/de) with a single codebase, integrate WhatsApp/contact forms, drive qualified leads, and reflect the May 11 operating truth: **one standard service, not tiered packages**.

## 🏗️ Architecture

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, locale-prefixed routes) |
| Language | TypeScript 5, React 19 |
| Styling | Tailwind CSS 4 with custom tokens |
| Content | `content/{locale}.json` + `nexa-pages/{slug}.json` + Supabase `site_content` table |
| i18n | Cookie-based + locale-prefixed routing, `src/proxy.ts` |
| Sections | `@ai-whisperers/sections` package + local overrides via `SectionsRenderer.tsx` |
| Cache | In-memory process cache, 30s TTL, max 20 entries |
| Admin | Supabase-backed dashboard for content updates |
| Deployment | Standalone Next.js in Docker, Traefik on `agent-net` |

## 📊 The P0-P3 Sweep (2026-06-15)

A complete honesty + integrity pass that fixed 34 issues across 4 areas. See `NEXA_ISSUES.md` and `NEXA_DECISIONS.md` in the repo for the full audit.

### The 4 honesty fixes (the most important)

| Issue | Before | After |
|---|---|---|
| **P0.1** Pricing | Deprecated 4-tier ($2,900/$4,400/$6,900/Tierras) | ONE standard service, no public prices, CTAs to /contacto |
| **P0.7** Team | 3 fake members with placeholder photos | "📷 Foto referencial" badge + section-level honest notice |
| **P0.8** Testimonials | 5 fabricated with real names + savings amounts | Deleted file; replaced with anonymous "Cliente 1/2/3 — Países Bajos/Bélgica/Alemania" |
| **P0.5** Stats | "+500 familias / 98% / 10 años" (fake) | Empty `home.stats` = {} (no fake numbers) |

### Other categories of fixes

- **P0 Compliance:** Created `ComplianceSection.tsx`, rendered on 6 legal/tax pages with SEPRELAD + AML + disclaimer
- **P1 i18n:** Cleaned 3 of 4 locales of Spanish string leaks; localized SEPRELAD acronym expansion in all 4
- **P2 Repo hygiene:** Removed dead `path` key from `site.json`; documented `chrome`/`is_demo`/`isLiveProduction` flags inline
- **P3 Per-locale content:** Added `deutschlandPage` to DE; verified NL/DE blog structure; aligned final 3 stragglers

## 🛠️ Tech Highlights

- **4-locale routing:** `/es/agenda`, `/en/agenda`, `/nl/agenda`, `/de/agenda` all prerendered as static HTML
- **Dynamic catch-all:** `/[locale]/[slug]` for landing pages (`/es/deutschland`, `/es/holanda`, etc.)
- **Content loader:** `src/lib/page-data.ts` loads Supabase `site_content` first (when env vars exist), falls back to JSON
- **Sections architecture:** `SectionsRenderer.tsx` wraps `@ai-whisperers/sections` and registers local overrides like `compliance`, `team-section`
- **Standalone build:** 464 MB Docker image, runs in 2/2 replicas on agentzero

## 📁 URLs (live)

| Domain | Behavior |
|---|---|
| `https://nexa.paragu-ai.com` | Apex (active) |
| `https://nexa-preview.paragu-ai.com` | Staging / preview env (active) |
| `https://nexa.paraguay.com` | Still on Shopify (DNS cutover pending) |

## 🔗 Repo Highlights

- `docs/CURRENT_STATE.md` — Operating truth (May 11 meeting)
- `NEXA_DECISIONS.md` — 385 lines, every default decision documented
- `NEXA_ISSUES.md` — 437 lines, full P0–P3 audit trail
- `NEXA_UPGRADE_SUMMARY.md` — Before/after one-liner
- `NEXA_POST_UPGRADE_AUDIT.md` — Independent verification of all 34 fixes + 4 new P-UP issues

## 🎯 Why This Project Matters for Our Portfolio

- **Multilingual at scale:** 4 locales, 50+ KB of content per locale, 0 string leaks
- **Honest by design:** No fabricated data, no fake testimonials, no photo placeholders pretending to be real
- **Compliance-aware:** SEPRELAD/AML baked into the right pages
- **Replicable:** Same engine powers 5+ clients via `paragu-ai-builder` multi-tenant pattern
- **Public decision log:** Every choice documented in `NEXA_DECISIONS.md` — unprecedented transparency
- **The "before/after" story** is its own portfolio asset (the new site tells the truth the old site didn't)
