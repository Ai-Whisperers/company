# Case Study: Dra. Gabriella (In Progress)

> Premium dental practice site — strategic repositioning project for Dra. Gabriella González Pane, Odontología 3, Asunción, Paraguay.

**Status:** PREVIEW MODE — built, deployed to VPS, but not public-facing (client data PENDING)
**Repo:** https://github.com/Ai-Whisperers/dentist
**Deployed as:** `apps/dra-gabriela/` in https://github.com/Ai-Whisperers/paragu-ai-platform
**Live preview:** https://dragabriela.paragu-ai.com (Traefik route active, content shows placeholders)

---

## 🎯 The Project

**Strategic repositioning:** Move from insurance-volume (earning Gs 60k per restoration) to private value-based practice (capturing Gs 400-550k). The site is the public face of this repositioning.

**The core business problem (per `dentist/README.md`):** She generates Gs 550k of value. She gets Gs 60k. The gap is 7-9x. The site must attract patients willing to pay market rates for premium work.

**3 options were evaluated:**
- **A — Upsell** inside current clinic (low risk, near zero investment)
- **B — Parallel** private practice alongside current job (medium risk, Gs 1-2M) ← **Recommended**
- **C — Full Exit** leave and open own clinic (high risk, Gs 200-400M)

## 🏗️ Architecture

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, locale-prefixed routes) |
| Language | TypeScript 5.7, React 19 |
| Styling | Tailwind CSS 4 |
| Content | `content/{en,es}/site.json` + section JSONs (hero, stats, reasons, services, testimonials, process, cta, faqs, pricing, contact, blog) |
| Source of truth | `Ai-Whisperers/dentist` repo (canonical content) |
| Deployment | Standalone Next.js in Docker, Traefik on `agent-net` |

## 📊 What was built (P0–P5 in dentist repo, complete)

| Phase | Status |
|---|---|
| P0–P1 Strategy + Research | ✅ Complete (40+ docs in 01_RESEARCH/) |
| P2 Content alignment | ✅ Complete (canonical pricing, FAQs, testimonials, schema) |
| P3 Tools + CI | ✅ Complete (pre-commit hooks, repo-audit.py, GH Actions) |
| P4 Client delivery artifacts | ✅ Complete (status one-pager, Phase 0 binder, investor summary) |
| P5 Growth / next phase | ✅ Complete (sitemap manifest, SLA 1-pager, multi-location scenario) |
| **P6 Site build** | ✅ Complete (this case study) |

## 🟡 What blocks public launch (per `dentist/TODO.md`)

| Block | Owner | Status |
|---|---|---|
| Roque result (Option A viable?) | Sonia + Roque | ❓ Pending |
| Base de datos puede usarse para contactar? | Lawyer | ❓ Pending |
| Non-compete en contrato Odontología 3? | Roque | ❓ Read contract |
| ¿Cuántos pacientes premium-eligible? | Dra. GP | ❓ Data extraction needed |
| ¿3 Luque quotes reales? | Sonia | ❓ Visit spaces |
| ¿6+ meses runway? | Sonia's finance | ❓ Balance last 3 months |

Until these are resolved, the site is in **preview mode** with PENDING | TBD placeholders. The deployment is real, the routing works, but the business is not ready to go public.

## 🛠️ The Strategic Repositioning Toolkit (in dentist repo)

The dentist repo is a **business launch kit**, not just a site. It contains:

- **00_STRATEGIC/** — 12 files: financial model, 3 options analysis, brand positioning premium, multi-location scenarios
- **01_RESEARCH/** — 41 files: market research, competitor battle cards (iPeo, Dra. Boccia, Clínica Codas), legal/compliance, locations
- **02_MEETINGS/** — 11 files: Kiki meeting prep, client prep, data collection
- **03_LAUNCH/** — 46 files: corporate sales playbook, referral program, roadmap, website content
- **04_SALES/** — 3 files: corporate program
- **05_OPERATIONS/** — 25 files: clinical routines, patient communications, service standard
- **06_MARKETING/** — 13 files: blog posts SEO strategy
- **07_DESIGN/** — 19 files: brand assets, website pages
- **08_WHATSAPP/** — 6 files: objection library, automation
- **09_TEMPLATES/** — 6 files
- **docs/** — 12 files: status one-pager, phase 0 binder, investor summary, REPO-WORK-PLAN

## 💰 Canonical Pricing (per `00_STRATEGIC/financial-pricing/canonical-pricing-reference-v2.md`)

| Service | Price (Gs) | USD Equiv. |
|---|---|---|
| Standard consultation | 300,000 | ~$38 |
| Extended consultation | 400,000 | ~$51 |
| Second opinion | 450,000 | ~$58 |
| Second opinion + treatment plan | 600,000 | ~$77 |
| Complex planning session | 800,000 | ~$103 |
| Cleaning / Profilaxis | 280,000 | ~$36 |
| Deep cleaning (curetaje) | 400,000/quadrant | ~$51 |
| *(continued in canonical doc)* | | |

**This is the only source of truth for pricing.** All other docs defer to it.

## 🏆 Why This Project Matters for Our Portfolio

- **Strategic, not tactical:** The site is a single deliverable in a much larger repositioning play
- **Honest about what's done and what isn't:** PENDING | TBD placeholders make the gaps visible
- **Real business problem:** The insurance-volume vs value-based gap is a real, common pattern across Latin America
- **Replicable toolkit:** The 4-tier repo structure (Strategic / Research / Launch / Operations) generalizes to any service business doing a strategic pivot
- **The pricing math is the story:** Gs 60k → Gs 400k is a 7-9x lift that any prospect can understand

## 🚦 Next Actions

1. **Sonia resolves the 6 blockers** (Roque meeting, legal review, financial data, etc.)
2. **Update `content/en/site.json` and `content/es/site.json`** with real phone/WhatsApp/address/RUC
3. **Redeploy:** `cd apps/dra-gabriela && ./deploy.sh`
4. **DNS cutover:** Point `dra-gabriela.com.py` and `www.dra-gabriela.com.py` to VPS
5. **Public launch** with the honest positioning

Until then, the site is the **complete, ready-to-go infrastructure** for a launch that depends on the client.
