# Our Whitespace — What We Offer That 20 Competitors Don't

> The sales weapon. Every item on this list is a capability AI Whisperers has that NONE of the 20 competitors we benchmarked against offer.
> Last updated: 2026-06-15

---

## 🏆 The 8 Unique Capabilities (none of the 20 competitors have these)

### 1. 🛰️ Satellite → 3D Photorealistic Render Pipeline
- **What:** End-to-end pipeline that takes a real-world coordinate (lat/lon) and produces a photorealistic 3D render in Blender using free public data (DEM, Sentinel-2 satellite imagery, OSM, hillshade, NDVI, land cover).
- **Who has it:** **Only us.** None of the 20 competitors.
- **Built on:** 4 production skills:
  - `site-data-acquisition` — free, no-auth geospatial pipeline
  - `geospatial-site-to-3d-pipeline` — Blender 4.2+ driver
  - `satellite-to-blender-pipeline` — full workflow
  - `blender-mcp` — Blender MCP server (control Blender from Hermes)
- **Active work:** Wesley's real parcel in Escobar/Paraguarí, Paraguay (validated on Cataratas del Monday as public landmark)
- **Use cases:** Real estate listings, architecture previews, foundation planning, tourism visualization
- **Pricing:** $500-10,000 per render
- **Source:** Skills at `~/.hermes/skills/{research,creative,devops}/`

### 2. 🤖 Open-Source 20-Pattern Agentic AI Framework
- **What:** A knowledge graph of 20 production agentic design patterns with weighted edges, JSON schemas (vertices with metadata: layer, polarity, compute requirements, safety surface), D3.js interactive visualization, Mermaid diagrams, MIT-licensed.
- **Who has it:** **Only us.** None of the 20 competitors publish open-source agentic frameworks.
- **Live at:** https://ai-whisperers.github.io/agentic-schemas/
- **Covers:** Prompt Chaining, Routing, Parallelization, Reflection, Tool Use, Planning, Multi-Agent Collaboration, Memory Management, Learning/Adaptation, Goal Setting, Exception Handling, Human-in-Loop, RAG, Inter-Agent Communication, Resource-Aware Optimization, Reasoning (CoT/ToT/debate), Evaluation/Monitoring, Guardrails/Safety, Prioritization, Exploration
- **Comparable to:** AWS Bedrock Agent docs, Anthropic's cookbook — but **open-source**
- **Repo:** `agentic-schemas` in our org (Nov 2025)

### 3. 🔌 MCP Server for Hardware Control
- **What:** A working MCP (Model Context Protocol) server that controls real Celestron NexStar telescope mounts, with satellite tracking, night scheduler, plate solving, object classification.
- **Who has it:** **Only us.** None of the 20 competitors do MCP + hardware.
- **Repo:** `telescope-ai` in our org
- **Use cases:** Astrophotography automation, satellite tracking demos, MCP server examples for AI engineers
- **Comparable to:** Rare; no major agency has shipped hardware-control MCP

### 4. 🌐 Multi-Tenant SaaS for Site Generation
- **What:** A single Next.js 15 + Supabase + Cloudflare Workers codebase that serves 5+ live client sites from per-tenant JSON configuration. New tenants are configured, not coded. 83 React section components, 23 verticals, 31 design tokens, 4-locale i18n.
- **Who has it:** **Only us.** None of the 20 competitors offer this as a productized multi-tenant platform.
- **Live tenants:** Nexa Paraguay, Nexa Propiedades, De Abasto a Casa, Dayah Litworks + demo tenants
- **Repos:** `paragu-ai-builder` (467 MB), `Vete` (150 MB, 6 tenants)
- **Comparable to:** Webflow (no AI), Wix (no AI), Squarespace (no multi-tenant) — none match

### 5. 📺 Multi-Supermarket Data Product (50K+ products)
- **What:** A live price scraper and comparison engine for 5 Paraguayan supermarket chains: Superseis (7,206 products), Stock (4,373 products), Areté (~16K URLs), Casa Rica (~12K URLs), Supermas (~20K URLs).
- **Who has it:** **Only us.** None of the 20 competitors operate in Paraguay retail data.
- **Use cases:** B2C price comparison app, B2B data API, central ordering, WhatsApp order formatter
- **Repo:** `paraguay-supermercados`
- **Comparable to:** Too narrow for big agencies; only local players might have it

### 6. 📚 4-Language Production Website
- **What:** Live production site with full content in 4 languages (es / en / nl / pt), including footer, nav, legal pages, newsletter, contact forms.
- **Who has it:** **Only us** in the Paraguay/LATAM AI agency space.
- **Live at:** https://ai-whisperers.org (apex)
- **Why it matters:** Most "international" agencies do en + 1. We do 4. **Proves we can serve clients across Mercosur + Europe + US simultaneously.**

### 7. 🎓 Rust + React Video Learning Platform
- **What:** A self-hosted Coursera-clone LMS with videos, quizzes, certificates, progress tracking. Rust backend (tokio + axum) + React + Vite frontend + PostgreSQL + Google OAuth + Cloudflare Tunnel.
- **Who has it:** **Only us** as a built-from-scratch platform.
- **Repos:** `courses-website` + `Courses-Content` (FPUNA configs)
- **Use cases:** Corporate training, online courses, certification programs
- **Comparable to:** Teachable (no self-host), Thinkific (no self-host) — but we own the full stack

### 8. 📂 Public GitHub as Proof of Work (42 repos)
- **What:** 42 public repos with full build history, issues, PRs, releases. Every claim we make is verifiable.
- **Who has it:** **Only us.** None of the 20 competitors publish work publicly.
- **What this means:**
  - Customers can read our code before hiring us
  - Prospects can see what we've built without an NDA call
  - Recruits can see the actual codebase before joining
  - Competitors can't see private customer work either, but they also can't show their own
- **Repos at:** https://github.com/Ai-Whisperers (42 public repos, 2 org members)

---

## 🆚 The "Only Us" Summary

| Capability | Us | 20 Competitors |
|---|---|---|
| Satellite → 3D photorealistic render | ✅ | ❌ |
| Open-source 20-pattern agentic framework (MIT) | ✅ | ❌ |
| MCP server for hardware control | ✅ | ❌ |
| Multi-tenant SaaS site generator | ✅ | ❌ |
| Multi-supermarket data product (50K+ products) | ✅ | ❌ |
| 4-language production website (es/en/nl/pt) | ✅ | ❌ |
| Self-hosted Rust + React video LMS | ✅ | ❌ |
| 42 public repos as proof of work | ✅ | ❌ |

**That's 8 out of 8.**

---

## 💡 How to Use This Document

### In sales calls:
- "While other agencies will show you private case studies behind NDAs, we show you our 42 public repos. You can see the actual code, the actual commits, the actual issues."
- "Our satellite-to-3D pipeline is something no other AI agency in LATAM offers. We turn a lat/lon into a photorealistic render of a real place."
- "We published a 20-pattern agentic AI framework as MIT-licensed open source. That's the same depth of content AWS Bedrock publishes — but open."

### In proposals:
- Lead with the unique capability
- Reference the public repo as proof
- Link to the live demo / viz

### On the website:
- Show the unique capabilities prominently
- Link to the public GitHub
- Embed the agentic-schemas D3 visualization
- Show a satellite-render demo

### In marketing content:
- "8 things we do that no other AI agency does"
- "Built in public, verified by GitHub"
- "From satellite data to 3D render in 24 hours"

---

## 📊 Source Citations

- **`Company/competitors/README.md`** — the 20-competitor master analysis
- **`Company/services/README.md`** — our 28-item service menu
- **Skill docs:** `~/.hermes/skills/research/site-data-acquisition/`, `~/.hermes/skills/research/geospatial-site-to-3d-pipeline/`, `~/.hermes/skills/devops/satellite-to-blender-pipeline/`, `~/.hermes/skills/creative/blender-mcp/`
- **Repos:** `agentic-schemas`, `telescope-ai`, `paragu-ai-builder`, `Vete`, `paraguay-supermercados`, `courses-website`, `Courses-Content`
- **Live:** https://ai-whisperers.org, https://ai-whisperers.github.io/agentic-schemas/
