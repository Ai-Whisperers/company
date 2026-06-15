# CLAUDE.md - AI Whisperers Company Repository

> Context for AI coding agents (Claude, GPT, etc.) working on this `company` repo.
> Read this before making any changes.

---

## Repository Context

**Purpose:** The **single source of truth for AI Whisperers as a company**. Staff, services, pricing, competitive landscape, opportunities, portfolio, and research — all in one place.

**Status:** Active. Last major update 2026-06-15.

**Owner:** Ivan Weiss van der Pol (Founder & CEO)

**Audience:**
- Humans: Ivan, Kyrian, prospective clients, prospective hires
- AI agents: Any AI agent working on AI Whisperers code, marketing, or business

---

## What This Repo Is

This is the **company documentation repo**. It contains:

1. **Staff files** — CVs, resumes, profiles, competency matrices
2. **Services** — the 28 things we offer, with pricing
3. **Competitors** — 20-competitor market analysis
4. **Opportunities** — gaps in our current offering + roadmap
5. **ICPs** — who we serve
6. **Case studies** — flagship projects documented
7. **Research sources** — every URL we cited
8. **Narrative docs** — the one-liner, the pitch, the website copy

It does **NOT** contain:
- ❌ Product code (lives in `agentic-schemas`, `paragu-ai-builder`, `telescope-ai`, etc.)
- ❌ Marketing automation (lives in `marketing-strategy`)
- ❌ Infrastructure config (lives in `infrastructure`)

---

## Repository Structure

```
company/
├── README.md                              # Top-level overview
├── CLAUDE.md                              # This file
├── INDEX.md                               # Master index
│
├── Company/                               # The company
│   ├── Staff/                             # People
│   ├── services/                          # 28-item service menu
│   ├── competitors/                       # 20-competitor analysis
│   ├── opportunities/                     # 8 gaps + roadmap
│   └── icps/                              # 3 ICPs
│
├── docs/                                  # External-facing
│   ├── company-narrative.md               # The pitch
│   ├── portfolio-narrative.md             # Website copy
│   ├── research-sources.md                # Citations
│   ├── case-studies/                      # 5 flagship projects
│   └── CI_CD_LOCAL.md
│
├── scripts/
└── backlog/
```

---

## The Company (for AI agent context)

**AI Whisperers** is a **2-person engineering studio in Paraguay** that ships production AI across 6 capability tracks:

1. **🌐 Web & SaaS** — Multi-tenant platforms, vertical SaaS, e-commerce
2. **🤖 AI Agents** — Custom multi-agent systems, RAG, MCP servers
3. **📱 WhatsApp + Engagement** — Lead capture, customer service AI agents
4. **🛰️ 3D & Satellite** — Photorealistic renders from real-world data
5. **⚙️ Automation & Data** — n8n workflows, Python scripts, ETL
6. **🎓 Training & Strategy** — Corporate AI workshops, certifications

**42 public repos on GitHub. 28 live client sites in production. 1 open-source 20-pattern agentic framework. Zero slide decks.**

**Team (current):**
- **Ivan Weiss van der Pol** — Founder & CEO
- **Kyrian Weiss van der Pol** — Co-Founder & Technical Director

> ⚠️ **Note:** Jonathan Verdun is **no longer with the company** as of 2026. The folder `Company/Staff/03-Jonathan-Verdun/` is kept for historical reference.

**Based:** San Lorenzo, Central, Paraguay
**Contact:** +595 991 501444 · ai.whisperer.wvdp@gmail.com

---

## Key Facts for AI Agents

### What we sell
- Web dev at $50/hr
- Custom microservices at $80/hr
- Consulting at $100/session
- Hosting at $20/month
- AI agent setup: custom ($3-15K + $300-1,000/mo typical)
- 3D renders: $500-10K per render
- Multi-tenant SaaS: $10-50K + $50-500/mo per tenant
- Training: $500-2,500/student

### What we don't sell
- Strategy decks (we ship code)
- Generic chatbot templates
- 6-month enterprise rollouts

### Our positioning
- **Practitioners Who Build in Public** (per `marketing-strategy/03-POSITIONING.md`)
- "Don't believe us? Check our GitHub."

### Our whitespace (what we do that 20 competitors don't)
1. Satellite → 3D photorealistic render pipeline
2. Open-source 20-pattern agentic framework (MIT)
3. MCP server for hardware control
4. Multi-tenant SaaS site generator
5. Multi-supermarket data product
6. 4-language production website
7. Self-hosted Rust + React video LMS
8. 42 public repos as proof of work

See `Company/competitors/our-whitespace.md` for the full breakdown.

---

## Coding Conventions for This Repo

### File naming
- Markdown files: `PascalCase.md` for top-level, `kebab-case.md` for sub-files
- One concept per file
- No `Untitled.md` or `New Document.md` files

### Markdown style
- Use ATX-style headers (`#`, `##`, `###`)
- Tables for structured comparisons
- Code blocks with language tags (` ```bash `, ` ```python `, etc.)
- Internal links as relative paths: `[link](Company/services/README.md)`
- External links as full URLs
- Bold for emphasis, not for emphasis-substitute

### When adding new files
- Update `INDEX.md` with a link
- Update the relevant section's README
- Add a "Last updated" date
- Cite sources in `docs/research-sources.md` if applicable

### When updating pricing
- Update `Company/services/README.md`
- Update `Company/competitors/pricing-benchmarks.md`
- Update `README.md` if headline numbers change
- Source the rate from `marketing-strategy/02-PRICING.md` (canonical)

### When adding a new competitor
- Add a row to `Company/competitors/README.md` master table
- Create a profile in `Company/competitors/profiles/`
- Cite the source URL in `docs/research-sources.md`
- Update threat assessment

### When adding a new case study
- Add to `docs/case-studies/` with next number (01-, 02-, etc.)
- Include: client/scope, problem, solution, results, tech stack, links
- Update `INDEX.md`
- Cross-link from `Company/services/README.md` if it ties to a service

### When updating the team
- Update `Company/Staff/XX-Name/` with new CV/resume/profile
- Update `Company/Staff/analysis/Team-Structure.md`
- Update `Company/icps/README.md` if contact info changes
- Update `README.md` if team size changes

---

## What to Update When (update cadence)

| Trigger | What to update |
|---|---|
| New service added | `Company/services/README.md`, `README.md`, `INDEX.md` |
| New competitor analyzed | `Company/competitors/README.md`, `Company/competitors/profiles/` |
| Pricing change | `Company/services/README.md`, `Company/competitors/pricing-benchmarks.md`, `README.md` |
| New flagship project | `docs/case-studies/0N-*.md`, `Company/competitors/our-whitespace.md` (if unique capability) |
| New research cited | `docs/research-sources.md` |
| Team change | `Company/Staff/XX-Name/`, `Company/Staff/analysis/Team-Structure.md` |
| Strategy shift | `Company/opportunities/README.md`, `docs/company-narrative.md` |
| Website copy change | `docs/portfolio-narrative.md` |

---

## Do NOT Do

- ❌ Hardcode personal info that's already in the Staff folders
- ❌ Create duplicate copies of the same doc (update in place)
- ❌ Add new files without updating `INDEX.md`
- ❌ Mix Spanish and English in the same file (English is the canonical language)
- ❌ Make pricing claims without a source
- ❌ Add competitor analysis without citing the source URL
- ❌ Edit historical case study results (those are point-in-time)
- ❌ Remove the Jonathan Verdun folder (kept for history)
- ❌ Use `find/grep` for navigation — use `INDEX.md` and the file tree
- ❌ Add new top-level directories without updating `INDEX.md`

---

## Common Tasks

### "Add a new service"
1. Open `Company/services/README.md`
2. Add to the appropriate tier
3. Update pricing if applicable
4. Update `INDEX.md` only if a new file is created
5. If the service is genuinely unique (no competitor has it), update `Company/competitors/our-whitespace.md`

### "Add a new competitor"
1. Open `Company/competitors/README.md`
2. Add a row to the master table
3. Create `Company/competitors/profiles/NN-name.md` with the standard profile format
4. Update `Company/competitors/pricing-benchmarks.md` if pricing is known
5. Add the source URL to `docs/research-sources.md`

### "Update the one-liner"
1. Edit `docs/company-narrative.md` (single source of truth)
2. Mirror in `README.md`
3. Mirror in `docs/portfolio-narrative.md` if website hero changes

### "Add a case study"
1. Use template in `docs/case-studies/0N-template.md` (create if doesn't exist)
2. Include: client, problem, solution, results, tech stack, links
3. Update `INDEX.md`

### "Generate an ICP-targeted pitch"
1. Read `Company/icps/README.md` for the ICP details
2. Read `docs/company-narrative.md` for the pitch structure
3. Read `Company/competitors/our-whitespace.md` for unique capabilities
4. Compose in the ICP's language (Spanish for Paraguay PYMEs, English for global SMBs, etc.)

---

## Related Repositories

This repo is the canonical source for **company-level** information. For other concerns, see:

- **Code:** https://github.com/Ai-Whisperers (42 public repos)
- **Marketing strategy:** https://github.com/Ai-Whisperers/marketing-strategy
- **Infrastructure:** https://github.com/Ai-Whisperers/infrastructure
- **Agentic patterns:** https://github.com/Ai-Whisperers/agentic-schemas

---

## Anti-Patterns to Avoid

When an AI agent is asked to "improve" or "rewrite" this repo:

- ❌ Don't consolidate docs into a single mega-file (we want grep-able, focused files)
- ❌ Don't add emojis that aren't already in the source (we have a consistent set)
- ❌ Don't change pricing without source backing
- ❌ Don't add competitor analysis without URL citation
- ❌ Don't use "we" to mean "AI Whisperers" if the user asked for an external perspective
- ❌ Don't delete the deprecated `03-Jonathan-Verdun/` folder
- ❌ Don't auto-generate case study numbers (results are real data, not fabricated)

---

## Version

This `CLAUDE.md` was last updated 2026-06-15 by Erebus (AI Workforce Lead) for Ivan Weiss van der Pol. When the company materially changes, update this file first.
