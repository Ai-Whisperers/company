# AI Whisperers — Complete Service Menu

> The 28 things we can do for businesses today, organized by demand × fit × revenue potential.
> Sources: `marketing-strategy/02-PRICING.md` (our canonical rates), 20-competitor analysis (`Company/competitors/`), market research from Vellum, Aisera, Creole Studios, OECD, IDC.
> Last updated: 2026-06-15

---

## 📊 Quick Reference

| Tier | Count | Time to ship | Avg revenue/project |
|---|---|---|---|
| **Tier 1 — Ship now** | 11 services | 2-8 weeks | $500-15,000 + $20-1,000/mo |
| **Tier 2 — Next quarter** | 11 services | 4-12 weeks | $5,000-30,000 + $300-3,000/mo |
| **Tier 3 — Strategic** | 6 services | 8-24 weeks | $10,000-100,000 |

---

## 🏆 TIER 1: HIGH DEMAND + HIGH FIT (ship these in 60 days)

These are our highest-ROI plays. Demand is proven, our fit is strong, and revenue is fast.

### 1. AI Readiness Audit
- **What:** 1-week diagnostic. Workflow mapping, AI opportunity matrix (30-50 candidate automations), ROI model, 30-day roadmap.
- **Format:** Free 30-min call → Paid $500-2,000 full report
- **Market standard:** $5-15K (Neurons Lab "Executive AI Workshop", Markovate "Discovery Phase", Neoteric "Workshops → Report")
- **Our edge:** Paraguay-first language, faster turnaround, free tier for lead-gen
- **Build effort:** Low (templates + checklists)
- **Repos involved:** `marketing-strategy/AI-Whisperers-Marketing-Hub/` (existing audit framework)

### 2. WhatsApp AI Agent (Paraguay-first)
- **What:** Lead capture, FAQ, appointment booking, order-taking, multi-language. Built on our infra (not BotPenguin/Gallabox).
- **Pricing:** $1-3K setup + $300-1,000/mo per client
- **Market standard:** $200-2,000/mo platform fee + $1-10K setup (BotPenguin, Gallabox, Kommunicate)
- **Our edge:** Paraguay-Spanish-first, no-English-OK stack, 28 existing client sites as distribution
- **Build effort:** Medium (4-6 weeks for MVP, then template-ize)
- **Repos involved:** `paragu-ai-builder` (multi-tenant infra), MCP servers

### 3. AI Agent for Sales
- **What:** Lead scoring, CRM auto-update, personalized outreach, deal forecasting. Integrates with HubSpot/Pipedrive/Notion.
- **Pricing:** $5-25K setup + $500-2K/mo
- **Market standard:** $5-30K (LeewayHertz, Master of Code, Intuz)
- **Our edge:** ParaguAI Builder already has CRM integrations wired
- **Build effort:** Medium (template per CRM)

### 4. AI Agent for Customer Service
- **What:** 24/7 support, ticket routing, FAQ, escalation. Multi-channel (WhatsApp + web + Instagram).
- **Pricing:** $5-30K setup + $500-3K/mo
- **Market standard:** $5-30K (every Tier 2 competitor)
- **Our edge:** Multi-tenant infra to deploy fast, multi-language (es/en/nl/pt)
- **Build effort:** Medium
- **Reference:** H&M case study (70% auto-resolution, 25% conversion lift) — source: Creole Studios 2026

### 5. AI Workflow Automation (n8n-based)
- **What:** Internal process automation: invoice processing, lead routing, data entry, report generation.
- **Pricing:** $2-10K per automation + $200-500/mo maintenance
- **Market standard:** $2-15K (Intuz, Azilen, Neoteric)
- **Our edge:** n8n expertise + Paraguay rate advantage ($50/hr vs US $150/hr)
- **Build effort:** Low (per-automation)

### 6. RAG Knowledge Base for Company Docs
- **What:** Internal AI that answers questions from company documents (PDFs, Notion, Google Drive). 4-6 week build.
- **Pricing:** $5-15K setup + $200-1K/mo
- **Market standard:** $5-30K (LeewayHertz "Document Intelligence", Master of Code "knowledge assistants")
- **Our edge:** `agentic-schemas` Pattern 13 (RAG) is well-documented, ready to deploy
- **Build effort:** Low-Medium (templated)

### 7. AI Training Workshops (corporate)
- **What:** 2-day to 2-week workshops. Claude/Cursor/Copilot/Gemini for specific departments. On-site or virtual.
- **Pricing:** $200-2,000/student or $5-30K/company workshop
- **Market standard:** $500-5,000/student (DeepLearning.AI corporate, Anthropic Academy)
- **Our edge:** Existing FPUNA content (proven curriculum), Spanish-first, 4-language delivery
- **Build effort:** Zero (content already exists)
- **Repos involved:** `Courses-Content`, `Summer-courses`, `education-hooks`

### 8. AI-Powered Website (SMB)
- **What:** Marketing website with AI features: chatbot, lead scoring, content gen, SEO automation, WhatsApp CTA.
- **Pricing:** $500-5,000 build + $20-50/mo hosting
- **Market standard:** $1,000-10,000 + hosting
- **Our edge:** `paragu-ai-builder` is purpose-built for this; 28 live client sites prove the model
- **Build effort:** Very low (template-driven)

### 9. Multi-Tenant SaaS for Vertical
- **What:** Vete-style platform: vet, gym, salon, restaurant, etc. Each tenant is a config, not code.
- **Pricing:** $5-50K per deployment + $50-500/mo per tenant
- **Market standard:** $10-100K for custom SaaS
- **Our edge:** Proven platform (Vete has 6 tenants, paragu-ai-builder has 5+)
- **Build effort:** Low per new vertical (mostly content)
- **Repos involved:** `paragu-ai-builder`, `Vete`

### 10. AI Integration Sprint (2 weeks)
- **What:** Take existing software (ERP, CRM, ITSM) and embed AI capabilities. Fixed scope, fixed price.
- **Pricing:** $5-20K
- **Market standard:** $5-25K (LeewayHertz, InData Labs, Neontri)
- **Our edge:** MCP server expertise (rare), fast turnaround
- **Build effort:** Low per integration

### 11. 3D Photorealistic Render (satellite → Blender)
- **What:** Real-estate, architecture, tourism, foundation planning. One AOI per project, 0.6 m/px resolution.
- **Pricing:** $500-10,000 per render
- **Market standard:** $1,000-10,000 per render (D5 Render, Twinmotion shops)
- **Our edge:** **No competitor offers this pipeline.** Free public data (DEM, Sentinel-2, OSM), end-to-end automation, headless Cycles on lean VPS
- **Build effort:** Zero (pipeline exists in skills)
- **Repos/skills involved:** `site-data-acquisition`, `geospatial-site-to-3d-pipeline`, `satellite-to-blender-pipeline`, `blender-mcp`
- **Active work:** Wesley's parcel, Paraguay (Cataratas del Monday validation complete)

---

## 🥈 TIER 2: STRONG DEMAND + GOOD FIT (next quarter)

### 12. AI Agent for HR
- Resume screening, interview scheduling, onboarding, employee Q&A bot
- $5-15K setup + $300-1K/mo

### 13. AI Agent for Finance
- Invoice OCR, expense categorization, anomaly detection, financial reporting
- $5-25K setup + $500-2K/mo

### 14. AI Agent for DevOps/AIOps
- Log analysis, alert correlation, incident response, runbook automation
- $10-50K

### 15. Predictive Analytics Dashboard
- Real-time dashboards with forecasting, anomaly detection. Built on Supabase + custom AI
- $5-20K

### 16. Recommendation Engine
- E-commerce product recs, content recs, "people also bought"
- $5-20K

### 17. Document Processing Automation
- OCR + extraction + classification. For legal, insurance, healthcare, accounting
- $5-15K per process

### 18. AI Content Generation Pipeline
- Multi-locale content (es/en/nl/pt) for SEO at scale. We already do this for our own sites
- $500-2,000/month per client

### 19. AI Video Generation Service
- Marketing videos, product demos, training content via AI tools
- $500-5,000/video

### 20. AI Agent for E-commerce
- Personalized shopping assistant, dynamic pricing, inventory prediction
- $5-25K + $500-2K/mo

### 21. Voice AI Agent (Inbound/Outbound)
- Phone call automation, voice bots, IVR replacement
- $5-30K + $500-3K/mo

### 22. Custom MCP Server
- Connect AI to any tool: CRM, ERP, internal API, hardware. Telescope-AI is proof
- $3-15K per server
- Rare capability across the 20 competitors

---

## 🥉 TIER 3: NICHE + STRATEGIC (long-term)

### 23. AI Cybersecurity Agent
- Darktrace-style threat detection, automated response, compliance monitoring
- $10-100K

### 24. Custom Computer Vision
- Object detection, OCR, visual inspection, medical imaging
- $10-50K

### 25. Fine-Tuning Service
- Custom LLM fine-tuning for domain-specific tasks (legal, medical, etc.)
- $10-50K

### 26. AI Procurement / Vendor Selection
- Help companies pick the right AI tools from the 100+ available
- $2-10K engagement
- We know the market deeply

### 27. Data Engineering / ETL Pipelines
- Multi-source data integration, warehouses, real-time pipelines
- $5-30K
- Proof: `paraguay-supermercados` (5 chains, 50K+ products)

### 28. AI Compliance / Governance Consulting
- EU AI Act, Paraguay data law, HIPAA, SOC2 prep
- $5-20K

---

## 💰 Our Canonical Pricing (per `marketing-strategy/02-PRICING.md`)

| Service | Rate | Billing |
|---|---|---|
| Web design/development | **$50/hr** | Hourly |
| Custom microservices | **$80/hr** | Hourly |
| Consulting | **$100/session** (1-2 hr) | Per session |
| AI automation setup | Custom | Fixed price per automation |
| Training | Course fee | Per student or per cohort |
| Hosting | **$20/mo** | Monthly (includes API tokens + maintenance) |

---

## 📈 Market Pricing Benchmarks (consolidated from 20 competitors)

| Service | Market low | Market high | **Our position** |
|---|---|---|---|
| Web dev | $25/hr (Voypost) | $100/hr (Master of Code) | $50/hr (mid) |
| AI agent dev | $50/hr (Maruti) | $200/hr (Neurons Lab) | Custom (below market) |
| Custom microservices | $50/hr (Voypost) | $150/hr (Itransition) | $80/hr (mid) |
| AI consulting | $100/session | $300/hr | $100/session (below market) |
| Generative AI integration | $60/hr (BairesDev) | $200/hr (Neurons Lab) | Custom (below market) |
| Computer vision project | $15K | $150K | Not in menu (gap) |
| Chatbot development | $5K | $50K | Not in menu (gap) |
| 3D / satellite visualization | $5K/render | $50K/render | $500-10K (untapped) |
| Multi-tenant SaaS build | $50K | $500K | Not priced (untapped) |

**Key insight:** We are **priced below market** for AI agent development, consulting, and 3D work — and we don't even list 3D, multi-tenant SaaS, or chatbots on the current website. **Pricing power exists in 4 places we don't currently use.**

---

## 🌍 Paraguay-Specific Opportunities (our home turf)

Per OECD 2025 report + REDIEX + Paraguay economic research:

| # | Opportunity | Why Paraguay | Our fit |
|---|---|---|---|
| P1 | AI for PYMEs (Spanish-first, no-English-OK stack) | 95% of Paraguay businesses are SMBs | ⭐⭐⭐⭐⭐ |
| P2 | WhatsApp-first customer engagement | WhatsApp is the dominant comms channel | ⭐⭐⭐⭐⭐ |
| P3 | AI for agricultural/agro businesses | Paraguay is major soy/cattle exporter; digitalizing fast | ⭐⭐⭐⭐ |
| P4 | Bilingual ES/EN content for cross-border trade | Paraguay is Mercosur hub | ⭐⭐⭐⭐ |
| P5 | AI for government / public sector modernization | $500M+ tech investment, biggest under-digitized market | ⭐⭐⭐⭐ |
| P6 | Satellite + 3D for real estate | Booming real estate market, no other shop does this | ⭐⭐⭐⭐⭐ |
| P7 | Super-mercado data + price comparison | We already have 50K+ products indexed | ⭐⭐⭐⭐ |
| P8 | AI for tourism/hospitality (Cataratas, Itaipu) | Major tourist destinations need multilingual AI | ⭐⭐⭐⭐ |

---

## 📊 Source Citations

- **Vellum AI Agent Use Cases Guide (2025):** 70% of companies use agents as primary automation lever, 66% see productivity gains, 25-47% sales productivity lift
- **Aisera Agentic AI Guide (2026):** 92% of enterprises increasing AI investment, 40% worker productivity gain
- **AI Monk (2026):** Klarna saved $60M / replaced 853 employees, JPMorgan 450+ use cases, 171% avg ROI
- **Creole Studios 9 Case Studies (May 2026):** H&M 70% auto-resolution / 25% conversion, IBM AIOps 40% fewer false alerts, Darktrace 92% threat neutralization
- **Google Cloud ROI of AI (2026):** "Start with proven use cases, but choose strategically"
- **OECD AI Adoption by SMEs (Dec 2025):** AI adoption lower in SMEs than large firms = our ICP sweet spot
- **IDC Skills Gap Report (2026):** $5.5T global cost of AI skills gap by 2026
- **BotPenguin WhatsApp AI Agents (May 2026):** 12 platforms compared, market sizing
- **`marketing-strategy/02-PRICING.md`:** Our canonical rates
- **`marketing-strategy/04-ICPS.md`:** 3 ICPs we serve

See `Company/competitors/README.md` for the 20-competitor pricing data.
