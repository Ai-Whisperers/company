# AI Whisperers — Company Repository Index

> The single source of truth for the company. Staff, services, pricing, competitive landscape, opportunities, portfolio, and research — all in one place.
> Last updated: 2026-06-15

---

## 🚀 Quick Links

| I want to... | Go here |
|---|---|
| Understand who we are (one-liner, capability map) | [`docs/company-narrative.md`](docs/company-narrative.md) |
| See the website copy | [`docs/portfolio-narrative.md`](docs/portfolio-narrative.md) |
| Find all 28 services we offer | [`Company/services/README.md`](Company/services/README.md) |
| See the 20-competitor analysis | [`Company/competitors/README.md`](Company/competitors/README.md) |
| See what we offer that 20 competitors don't | [`Company/competitors/our-whitespace.md`](Company/competitors/our-whitespace.md) |
| See pricing benchmarks vs competitors | [`Company/competitors/pricing-benchmarks.md`](Company/competitors/pricing-benchmarks.md) |
| See the 8 highest-value gaps in our offering | [`Company/opportunities/README.md`](Company/opportunities/README.md) |
| See our 3 ICPs | [`Company/icps/README.md`](Company/icps/README.md) |
| See flagship case studies | [`docs/case-studies/`](docs/case-studies/) |
| Cite a research source | [`docs/research-sources.md`](docs/research-sources.md) |
| See a staff CV | [`Company/Staff/`](Company/Staff/) |
| Run CI/CD locally | [`docs/CI_CD_LOCAL.md`](docs/CI_CD_LOCAL.md) |

---

## 📁 Repository Structure

```
company/
├── README.md                              # Top-level overview (rewrite needed)
├── CLAUDE.md                              # AI-agent context for coding
├── INDEX.md                               # This file
├── LICENSE
│
├── Company/                               # The company (single source of truth)
│   ├── Staff/                             # People
│   │   ├── 01-Ivan-Weiss-van-der-Pol/     # Founder & CEO
│   │   ├── 02-Kyrian-Weiss-van-der-Pol/   # Co-Founder & Technical Director
│   │   ├── 03-Jonathan-Verdun/            # [ARCHIVED] Former co-founder
│   │   ├── analysis/
│   │   │   ├── Competency-Matrix.md
│   │   │   ├── Skills-Inventory.md
│   │   │   └── Team-Structure.md
│   │   └── templates/                     # CV/Resume/Profile templates
│   │
│   ├── services/                          # What we sell (28-item menu)
│   │   └── README.md
│   │
│   ├── competitors/                       # 20-competitor market analysis
│   │   ├── README.md                      # Master table
│   │   ├── pricing-benchmarks.md          # Rate card
│   │   ├── our-whitespace.md              # What we offer that 20 don't
│   │   └── profiles/                      # (TBD) 20 detailed profiles
│   │
│   ├── opportunities/                     # 8 gaps + 8 LATAM opportunities
│   │   └── README.md
│   │
│   └── icps/                              # 3 ICPs + 3 Paraguay-specific
│       └── README.md
│
├── docs/                                  # External-facing docs
│   ├── company-narrative.md               # The one-liner + capability pitch
│   ├── portfolio-narrative.md             # Website copy
│   ├── research-sources.md                # Every URL we cited
│   ├── case-studies/                      # 5 flagship project case studies
│   │   ├── 01-taller-ocampos.md
│   │   ├── 02-agentic-schemas.md
│   │   ├── 03-telescope-ai.md
│   │   ├── 04-paragu-ai-builder.md
│   │   └── 05-Vete.md                     # (TBD)
│   └── CI_CD_LOCAL.md                     # Pre-commit hooks and CI
│
├── scripts/                               # Build, test, deploy scripts
└── backlog/                               # Deferred work
```

---

## 👥 The Team (current)

- **Ivan Weiss van der Pol** — Founder & CEO
  - 📧 weissvanderpol.ivan@gmail.com
  - 📞 +595 981 324 569
  - [CV](Company/Staff/01-Ivan-Weiss-van-der-Pol/Ivan_Weiss_Van_Der_Pol_CV.md) | [Resume](Company/Staff/01-Ivan-Weiss-van-der-Pol/Ivan_Weiss_Van_Der_Pol_Resume_1Page.md) | [Analysis](Company/Staff/01-Ivan-Weiss-van-der-Pol/Ivan_Weiss_Van_Der_Pol_Analysis.md) | [Profile](Company/Staff/01-Ivan-Weiss-van-der-Pol/Profile.md)

- **Kyrian Weiss van der Pol** — Co-Founder & Technical Director
  - 📧 kyrianweiss.vdp@gmail.com
  - [CV](Company/Staff/02-Kyrian-Weiss-van-der-Pol/CV.md) | [Resume](Company/Staff/02-Kyrian-Weiss-van-der-Pol/Resume-1Page.md) | [Profile](Company/Staff/02-Kyrian-Weiss-van-der-Pol/Profile.md)

> ⚠️ **Note:** Jonathan Verdun (`Company/Staff/03-Jonathan-Verdun/`) is no longer with the company. The folder is kept for historical reference.

---

## 🎯 What This Repo Is (and isn't)

### IS
- ✅ The single source of truth for AI Whisperers as a company
- ✅ Staff CVs, profiles, competency matrices
- ✅ The 28-item service menu with pricing
- ✅ The 20-competitor market analysis
- ✅ The 8 highest-value gaps in our current offering
- ✅ 3 ICPs and how to reach them
- ✅ 5 flagship case studies
- ✅ Every research URL we cited

### ISN'T
- ❌ The code for any of our products (lives in their own repos)
- ❌ A blog (use the marketing-strategy repo or a separate content site)
- ❌ A pricing calculator (the rate card is in `Company/competitors/pricing-benchmarks.md`)
- ❌ The deployed website (lives at ai-whisperers.org)

---

## 📊 By the Numbers (as of 2026-06-15)

- **Team size:** 2 founders
- **Public repos on GitHub:** 42
- **Live client sites in production:** 28
- **Languages served:** 4 (es / en / nl / pt)
- **Open-source agentic patterns published:** 20 (MIT-licensed)
- **Paraguay supermarket products indexed:** 50,000+
- **Domains under management:** 30+
- **Org size on GitHub:** 2 founders
- **Founded:** November 2025
- **HQ:** San Lorenzo, Central, Paraguay

---

## 🔄 Update Cadence

| Doc | Update frequency | Owner |
|---|---|---|
| `Company/services/README.md` | Quarterly or when adding services | Ivan |
| `Company/competitors/README.md` | Bi-annually (competitor landscape changes) | Ivan |
| `Company/competitors/our-whitespace.md` | When we ship a new unique capability | Ivan |
| `Company/opportunities/README.md` | Quarterly or when priorities change | Ivan |
| `Company/icps/README.md` | Annually or when target market shifts | Ivan |
| `docs/company-narrative.md` | When the one-liner changes | Ivan |
| `docs/portfolio-narrative.md` | When the website changes | Ivan |
| `docs/research-sources.md` | When new research is done | Ivan |
| `docs/case-studies/` | When a new flagship project ships | Ivan |
| `Company/Staff/*/CV.md` | When career changes | Each person |

---

## 🛠️ For AI Coding Agents

If you are an AI agent (Claude, GPT, etc.) working on AI Whisperers code:
1. **Read `CLAUDE.md`** first for repo context
2. **Read `docs/company-narrative.md`** for who we are
3. **Read `Company/services/README.md`** for what we build
4. **Update this INDEX.md** if you add new files
5. **Update `docs/research-sources.md`** if you add new citations

---

## 📚 Related Repositories in the Org

- [`Ai-Whisperers/marketing-strategy`](https://github.com/Ai-Whisperers/marketing-strategy) — Marketing playbook, ICPs, positioning, pricing (the original source)
- [`Ai-Whisperers/infrastructure`](https://github.com/Ai-Whisperers/infrastructure) — Infra docs, org audit, Hermes ecosystem
- [`Ai-Whisperers/agentic-schemas`](https://github.com/Ai-Whisperers/agentic-schemas) — 20-pattern open-source framework
- [`Ai-Whisperers/paragu-ai-builder`](https://github.com/Ai-Whisperers/paragu-ai-builder) — Multi-tenant SaaS
- [`Ai-Whisperers/telescope-ai`](https://github.com/Ai-Whisperers/telescope-ai) — MCP server for telescope
- [`Ai-Whisperers/sessions`](https://github.com/Ai-Whisperers/sessions) — Production session archives
- 36 more repos at https://github.com/Ai-Whisperers
