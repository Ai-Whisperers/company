# AI Whisperers — The Complete Company

> The single most important document in this repo. Ties together who we are (org), what we've built (repos), what's running (VPS), and how we work (Hermes).
> Last updated: 2026-06-15

---

## 🎯 The One-Liner

**AI Whisperers is a 2-person founder team in Paraguay running a 42-client-site production operation on a single VPS, powered by a 42-public-repo GitHub org, automated by a 119-skill + 273-cron-job Hermes Agent install.**

---

## 🏗️ The 4-Layer Stack (how everything fits together)

```
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 4 — THE CLIENT FACING STACK                                  │
│  55 unique hostnames · 42 live client sites · 4 languages served   │
│  Marketing sites · e-commerce · booking · lead gen · portfolio     │
│  Tracked in: docs/infrastructure-audit.md                          │
└─────────────────────────────┬───────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────────┐
│  LAYER 3 — THE PRODUCTION INFRASTRUCTURE                            │
│  agentzero VPS (72.61.44.159) · 8 vCPU · 32GB RAM · 387GB disk    │
│  52 Docker Swarm services · 5 overlay networks · Traefik v3.5.3    │
│  Postgres 14 · Loki · Grafana · Prometheus · n8n · Open WebUI     │
│  4+ GB volumes (data persistence)                                  │
│  273 cron jobs monitoring it all                                    │
└─────────────────────────────┬───────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────────┐
│  LAYER 2 — THE AI WORKFORCE                                          │
│  Hermes Agent v0.16.0 · 9 profiles · 119 skills · 40+ plugins     │
│  Erebus (this) as AI Workforce Lead                                │
│  8 specialized bots: architect, client-success, closer, copy,      │
│  delivery, explorer, operations-conductor, ops, tony              │
│  MCP servers for: deploys, telescope, WhatsApp (evolution)        │
└─────────────────────────────┬───────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────────┐
│  LAYER 1 — THE PUBLIC GITHUB ORG (PROOF OF WORK)                    │
│  42 public repos · 1.27 GB · 7 languages                          │
│  30 active in last 90 days · 21 archived (cleaned 2026-04-30)     │
│  The 8 unique capabilities: satellite→3D, agentic-schemas, etc.    │
│  4-language production website · MIT-licensed frameworks           │
└─────────────────────────────────────────────────────────────────────┘
```

**The moat:** every layer has public proof on GitHub. The portfolio isn't slides — it's the live infrastructure.

---

## 👥 The Team (2 founders, no third co-founder)

| Person | Role | Stack |
|---|---|---|
| **Ivan Weiss van der Pol** | Founder & CEO · Data Engineer, Automation Architect, QA Specialist | Python, n8n, Next.js, Docker Swarm, full-stack |
| **Kyrian Weiss van der Pol** | Co-Founder & Technical Director · n8n expert, AI integration | n8n, AI integration, automation, technical architecture |

> ⚠️ **Jonathan Verdun is no longer with the company** (archived folder at `Company/Staff/03-Jonathan-Verdun/` is historical only)

**The 8 named AI bots** form the extended team:
- `explorer-bot` — market research
- `closer-bot` — sales proposals
- `copy-bot` — SEO + content
- `architect-bot` — system design
- `client-success-bot` — follow-up
- `delivery-bot` — project delivery
- `ops-bot` — operations
- `operations-conductor` — finance
- `tony-bot` — video production

**+ Erebus** (this session) — AI Workforce Lead. The orchestrator that builds, fixes, and ships.

---

## 🧬 The 6 Capability Tracks (what we sell)

| Track | What we ship | Proof points |
|---|---|---|
| **🌐 Web & SaaS** | Multi-tenant platforms, vertical SaaS, e-commerce | `paragu-ai-builder` (467 MB Next.js 15, 5+ live tenants), `Vete` (150 MB, 6 tenants), `Taller_Ocampos` (108 MB), **42 live client sites on VPS** |
| **🤖 AI Agents** | Custom multi-agent systems, RAG, MCP servers | `agentic-schemas` (20 patterns, MIT, D3 graph), `telescope-ai` (MCP server, controls real telescopes), `mcp-for-deploys`, Evolution API in production |
| **📱 WhatsApp + Customer Engagement** | Lead capture, customer service, booking AI agents | Evolution API v2 in production (Docker stack `evolution_`), `wa-connect` service live, 28+ client sites integrate WhatsApp CTAs |
| **🛰️ 3D & Satellite** | Photorealistic renders from real-world satellite + elevation data | Skills: `site-data-acquisition`, `geospatial-site-to-3d-pipeline`, `satellite-to-blender-pipeline`, `blender-mcp`. Active client: Wesley's parcel, Paraguay |
| **⚙️ Automation & Data** | n8n workflows, Python scripts, document processing | `paraguay-supermercados` (5 chains, 50K+ products), `work-hours-automated-reports`, n8n in production (`n8n-data` volume) |
| **🎓 Training & Strategy** | Corporate AI workshops, certifications, free audits | `Courses-Content` (FPUNA configs, MIT), `courses-website` (Rust LMS), live site free 30-min strategy call, free AI audit CTA |

---

## 📊 The Numbers (as of 2026-06-15)

| Layer | Metric | Value |
|---|---|---|
| **People** | Founders | 2 (Ivan, Kyrian) |
| | Named AI bots | 8 (Erebus + 7 specialists) |
| **Public GitHub** | Repos | 42 |
| | Active in last 90 days | 30 |
| | Archived | 21 (cleanup 2026-04-30) |
| | Languages | 7 (Python 11, TS 10, Dockerfile 5, JS 3, Svelte 1, PowerShell 1, HTML 1) |
| | Total storage | 1.27 GB |
| | License (MIT) repos | 5+ (agentic-schemas, Courses-Content, photos-to-kml, aiw-docs, company) |
| **VPS (agentzero)** | vCPU | 8 |
| | RAM | 31 GiB (8.4 used, 22 free) |
| | Disk | 387 GB NVMe (**87% used**, 53 GB free) |
| | Uptime | 10+ days |
| | Public IP | 72.61.44.159 |
| | Tailscale IP | 100.91.243.120 |
| **Docker Swarm** | Active services | 52 |
| | Client websites | 42 unique sites |
| | Infrastructure | 7 backbone services |
| | Overlay networks | 5 custom + 2 default |
| | Volumes | 28+ (4+ GB data) |
| | Traefik hostnames | 55 unique |
| **Hermes Agent** | Version | v0.16.0 (up to date) |
| | Profiles | 9 (1 shared + 8 bots) |
| | Skills | 119 |
| | Plugins | 40+ |
| | Cron jobs | 273 |
| **Web presence** | Live hostnames | 55 |
| | Languages served | 4 (es, en, nl, pt) |
| | Domains | paragu-ai.com (+ subdomains), sunstein.cloud (+ subdomains), nexa-paraguay.com, others |
| **Data products** | Supermarket SKUs indexed | 50,000+ across 5 chains |
| | Open-source agentic patterns | 20 |
| | MCP servers published | 2 (telescope, deploys) |

---

## 🌟 The 8 Unique Capabilities (vs 20 competitors)

None of the 20 competitors we benchmarked have these:

1. **🛰️ Satellite → 3D photorealistic render pipeline** (4 skills, headless Cycles on lean VPS, free public data)
2. **🤖 Open-source 20-pattern agentic framework** (MIT, D3 graph viz, live at ai-whisperers.github.io/agentic-schemas/)
3. **🔌 MCP server for real hardware control** (telescope-AI, Celestron mounts, satellite tracking)
4. **🌐 Multi-tenant SaaS for site generation** (paragu-ai-builder, 5+ live tenants, 23 verticals, 4-locale i18n)
5. **📺 Multi-supermarket data product** (paraguay-supermercados, 50K+ products, 5 chains)
6. **🌍 4-language production website** (es/en/nl/pt, all in production on the same Next.js stack)
7. **🎓 Self-hosted Rust + React video LMS** (courses-website, Coursera-clone, not a SaaS reskin)
8. **📂 42 public repos as proof of work** (every claim verifiable on GitHub)

---

## 💰 The Pricing Strategy

| Service | Rate | Source |
|---|---|---|
| Web dev | $50/hr | `marketing-strategy/02-PRICING.md` |
| Custom microservices | $80/hr | `marketing-strategy/02-PRICING.md` |
| Consulting | $100/session | `marketing-strategy/02-PRICING.md` |
| Hosting | $20/mo (includes API tokens) | `marketing-strategy/02-PRICING.md` |
| AI agent setup | $3-10K + $300-1K/mo | `Company/competitors/pricing-benchmarks.md` |
| WhatsApp AI Agent | $1-3K setup + $300-1K/mo | `Company/opportunities/README.md` (new) |
| Multi-tenant SaaS | $10-50K + $50-500/mo/tenant | `Company/opportunities/README.md` (new) |
| 3D render | $500-10K per render | `Company/opportunities/README.md` (new) |
| AI Workshop | $500-2,500/student | `Company/opportunities/README.md` (new) |
| 30-Day AI Kickstart | $5-15K fixed | `Company/opportunities/README.md` (new) |

**The 4 places we have pricing power we're not using:**
1. 3D / satellite visualization (no competitor, we set the price)
2. Multi-tenant SaaS (high value, premium tier)
3. AI agent products (subscription model, recurring revenue)
4. Workshops / training ($5.5T skills gap = high demand)

**The 4 places we're priced below market:**
1. AI consulting ($100/session vs $150-300/hr)
2. AI agent development (custom vs $80-200/hr)
3. Generative AI integration (custom vs $80-200/hr)
4. Data engineering ($80/hr is competitive but could be $100-150)

---

## 🎯 The 3 ICPs (who we serve)

| ICP | Budget | What they buy | Channel |
|---|---|---|---|
| **Solo Entrepreneur** | $500-5,000 | Web, consulting, training | LinkedIn, X, YouTube, Reddit, Indie Hackers |
| **SME Operations Manager** | $5,000-50,000 | AI automation, custom microservices, web | LinkedIn, industry events, B2B |
| **Corporate Innovation Lead** | $25,000-500,000 | Custom microservices, AI, consulting | LinkedIn, exec events, vendor portals |

**+ 3 Paraguay-specific ICPs:**
- **P-PYME** (Asunción small business) — $300-3,000, WhatsApp-first
- **P-CORP** (Paraguay mid-market) — $5K-50K, custom AI agents
- **P-GOV** (Paraguay public sector) — $50K-500K+, modernization

---

## 🚀 The 4-Phase Strategic Roadmap

| Phase | Timeline | Goal | Key deliverables |
|---|---|---|---|
| **1. Foundation** | 0-60 days | Lead-gen engine | AI Readiness Audit (free+paid), pricing page, 5 case studies, 30-Day Kickstart package |
| **2. Revenue** | 60-120 days | First $10K MRR | WhatsApp AI Agent, AI Workshops, 3 training courses, 3 RAG deployments |
| **3. Productize** | 120-180 days | Subscription model | 5 pre-built agent templates, 5 new SaaS verticals, 3D render product, super-mercado app |
| **4. Scale** | 180-365 days | $50K+ MRR | Government pilot, AI compliance service, MCP catalog, LATAM expansion |

---

## 🔧 How We Work (the Hermes + GitHub pipeline)

### The daily flow
1. **Customer inquiry** → WhatsApp/email (`+595 991 501444`, `ai.whisperer.wvdp@gmail.com`)
2. **Discovery** → `closer-bot` drafts proposal, `explorer-bot` does market research
3. **Scoping** → `architect-bot` designs the system
4. **Build** → Ivan + Kyrian ship the code (or `delivery-bot` tracks delegated work)
5. **Deploy** → GitHub → Docker Swarm on `agentzero` (Traefik auto-routes)
6. **Operate** → 273 cron jobs monitor, alert, backup, restart
7. **Follow-up** → `client-success-bot` checks in monthly
8. **Learn** → session archives land in `Ai-Whisperers/sessions` (2,000+ sessions Apr-May 2026)

### The observability stack
- **Logs:** Loki + Promtail → Grafana (`monitor.paragu-ai.com`)
- **Metrics:** Prometheus node-exporter
- **Errors:** TBD (no Sentry per `MASTER_UPGRADE_LIST.md`)
- **Cost:** Hermes cost_tracker plugin, LLM spend tracked per session
- **Uptime:** healthchecks-data volume (cron-driven)

### The content engine
- **Marketing:** `marketing-strategy` repo (40 MB, PowerShell metadata)
- **Pricing/ICPs:** `marketing-strategy/AI-Whisperers-Marketing-Hub/SOURCE-OF-TRUTH/`
- **Code docs:** Each public repo has README + AGENTS.md (when present)
- **Sessions:** 277 MB of archived production sessions in `sessions` repo

---

## ⚠️ Critical Findings (action items)

| # | Issue | Severity | Action |
|---|---|---|---|
| 1 | VPS disk at 87% (53 GB free) | HIGH | `docker image prune -a --filter "until=720h"` |
| 2 | 2 stuck Tailscale peers (izt4n7..., srv1396188) sending but not receiving | MEDIUM | Run `tailscale logout` on those machines |
| 3 | VPS load avg 3.4 (high) | MEDIUM | Monitor; consider scaling if persistent |
| 4 | `www.ai-whisperers.org` returns 404 | MEDIUM | Fix Cloudflare DNS or www redirect |
| 5 | No public `marketing/case-studies` page on website | MEDIUM | Add the 4 case studies we have documented |
| 6 | 21 archived repos still in public org | LOW | Either delete or keep as historical record |
| 7 | 273 cron jobs (some may be stale) | LOW | Run `hermes cron list` and prune unused |

---

## 📚 The Complete Doc Index

| Doc | What it covers |
|---|---|
| **`README.md`** | Top-level overview, the pitch in 1 minute |
| **`INDEX.md`** | Master index, all paths |
| **`CLAUDE.md`** | AI agent context for working on this repo |
| **`docs/company-narrative.md`** | The one-liner + 3 pitch versions + 6 capability tracks |
| **`docs/portfolio-narrative.md`** | Website copy (hero, capabilities, CTAs, footer) |
| **`docs/infrastructure-audit.md`** | The VPS + Swarm + GitHub + Hermes deep audit |
| **`docs/research-sources.md`** | Every URL cited |
| **`docs/case-studies/`** | 4 flagship project case studies |
| **`Company/services/README.md`** | 28-item service menu |
| **`Company/competitors/README.md`** | 20-competitor master table |
| **`Company/competitors/our-whitespace.md`** | What we offer that 20 don't |
| **`Company/competitors/pricing-benchmarks.md`** | Rate card vs market |
| **`Company/opportunities/README.md`** | 8 highest-value gaps + 4-phase roadmap |
| **`Company/icps/README.md`** | 3 ICPs + 3 Paraguay-specific |
| **`Company/Staff/`** | CVs, profiles, competency matrices (existing) |

---

## 🎯 The "What To Do Next" List (for Ivan)

Based on everything in this repo, here are the 5 highest-leverage moves:

1. **Un-archive `Ai-Whisperers/company`** so this entire doc set can be pushed (currently blocked)
2. **Add `/pricing` and 4 case studies to `ai-whisperers.org`** (copy is ready in `docs/portfolio-narrative.md`)
3. **Prune old Docker images** to free up disk (87% → 50%)
4. **Build the 30-Day AI Kickstart landing page** — first productized offer
5. **Pick 1 ICP and go all-in for 90 days** (recommendation: SME Operations Manager in Paraguay)

---

*Generated by Erebus on 2026-06-15. Direct probes of: VPS, Docker Swarm, GitHub API, Hermes state, Tailscale peers. Every claim in this document is sourced.*
