# AI Whisperers — Capabilities & Pricing Sales Sheet

> **The canonical sales artifact.** All 28 capabilities, our pricing, market benchmarks, sources, and internal proof — ready to share with prospects, investors, or partners.

**Last updated: 2026-06-15**

---

## 🚀 The 3 ways to use this

### Option 1: Apps Script (one-click Google Sheet, 60 seconds)
1. Open https://script.google.com/home
2. Click **"+ New Project"**
3. Paste the entire contents of `create-sheet.gs` into the editor
4. From the function dropdown, select **`createCapabilitiesSheet`**
5. Click **▶ Run**
6. Authorize when prompted (Google will warn, click "Review permissions" → your account → "Allow")
7. Wait ~10 seconds. The sheet appears in your Drive root.
8. The sheet URL prints in the "Execution Log" (View → Logs)

**Result:** A formatted Google Sheet with 3 tabs:
- **Capabilities** — all 28 services × 17 columns, color-coded by tier
- **README** — full context, pricing benchmarks, contact info
- **ICP Map** — which services for which customer segment

### Option 2: CSV import (60 seconds, no setup)
1. Open https://sheets.google.com/create
2. Create a new blank sheet, rename to: `AI Whisperers — Capabilities & Pricing (2026-06-15)`
3. **File → Import → Upload** → select `capabilities-sheet.csv`
4. Choose **"Replace current sheet"** → click **Import data**
5. Done. You can then manually apply formatting (tier color-coding, freeze row, etc.)

### Option 3: Just use the CSV / JSON directly
- **`capabilities-sheet.csv`** — 17 columns × 28 rows, ready for any spreadsheet
- **`capabilities-sheet.json`** — same data in JSON, for programmatic use
- **`SHEET-README.html`** — open in browser for a human-readable summary

---

## 📊 What's in the sheet (28 rows × 17 columns)

| Column | What |
|---|---|
| `#` | Row number 1-28 |
| `Tier` | 1 = ship now, 2 = next quarter, 3 = strategic |
| `Category` | Audit & Strategy / Web & SaaS / AI Agents / Customer Engagement / 3D & Satellite / Automation / Training / Content / Data |
| `Service` | Capability name |
| `What it is` | 1-line description |
| `Setup (USD)` | One-time price |
| `Recurring` | Monthly retainer |
| `Our price (summary)` | Total price summary |
| `Market low` | Lowest market rate (USD) |
| `Market high` | Highest market rate (USD) |
| `Market source` | Who charges that range |
| `Build effort` | How long to ship (internal) |
| `Fit (1-5)` | Our capability match |
| `Demand (1-5)` | Market demand |
| `Revenue potential` | MRR/project potential |
| `Our edge` | Why we win |
| `Internal proof` | Repos / skills / VPS services that back this up |

---

## 🎯 Tier summary (the 28 capabilities grouped)

### Tier 1 — Ship now (11 services, highest ROI)

| # | Service | Our price |
|---|---|---|
| 1 | AI Readiness Audit | $500-2,000 |
| 2 | WhatsApp AI Agent (Paraguay-first) | $1-3K setup + $300-1K/mo |
| 3 | AI Agent for Sales | $5-25K + $500-2K/mo |
| 4 | AI Agent for Customer Service | $5-30K + $500-3K/mo |
| 5 | AI Workflow Automation (n8n-based) | $2-10K per automation + $200-500/mo |
| 6 | RAG Knowledge Base for Company Docs | $5-15K + $200-1K/mo |
| 7 | AI Training Workshops (corporate) | $500-2,500/student or $5-30K/company |
| 8 | AI-Powered Website (SMB) | $500-5,000 build + $20-50/mo |
| 9 | Multi-Tenant SaaS for Vertical | $5-50K + $50-500/mo/tenant |
| 10 | AI Integration Sprint (2 weeks) | $5-20K fixed |
| 11 | 3D Photorealistic Render (satellite → Blender) | $500-10,000 per render |

### Tier 2 — Next quarter (11 services, strong demand + good fit)

| # | Service | Our price |
|---|---|---|
| 12 | AI Agent for HR | $5-15K + $300-1K/mo |
| 13 | AI Agent for Finance | $5-25K + $500-2K/mo |
| 14 | AI Agent for DevOps/AIOps | $10-50K |
| 15 | Predictive Analytics Dashboard | $5-20K |
| 16 | Recommendation Engine | $5-20K |
| 17 | Document Processing Automation | $5-15K per process |
| 18 | AI Content Generation Pipeline | $500-2,000/month per client |
| 19 | AI Video Generation Service | $500-5,000/video |
| 20 | AI Agent for E-commerce | $5-25K + $500-2K/mo |
| 21 | Voice AI Agent (Inbound/Outbound) | $5-30K + $500-3K/mo |
| 22 | Custom MCP Server | $3-15K per server |

### Tier 3 — Strategic (6 niche/specialty services)

| # | Service | Our price |
|---|---|---|
| 23 | AI Cybersecurity Agent | $10-100K |
| 24 | Custom Computer Vision | $10-50K |
| 25 | Fine-Tuning Service | $10-50K |
| 26 | AI Procurement / Vendor Selection | $2-10K engagement |
| 27 | Data Engineering / ETL Pipelines | $5-30K |
| 28 | AI Compliance / Governance Consulting | $5-20K |

---

## 💰 Our pricing benchmark vs market (the headline)

| Service | Our rate | Market low | Market high | Position |
|---|---|---|---|---|
| Web dev | $50/hr | $25/hr (Voypost) | $100/hr (Master of Code) | Mid-market |
| Custom microservices | $80/hr | $50/hr (Voypost) | $150/hr (Itransition) | Mid-market |
| AI consulting | $100/session | $100 | $300/hr | **Below market** |
| AI agent dev | Custom | $50/hr (Maruti) | $200/hr (Neurons Lab) | **Below market** |
| 3D render | $500-10K | $1K | $10K | **No competitor (we set price)** |
| Multi-tenant SaaS | $10-50K | $50K | $500K | **Premium (scarce capability)** |
| Workshops | $500-2,500/student | $200/student | $2,000/student | Mid-market |
| WhatsApp AI Agent | $1-3K + $300-1K/mo | $200/mo platform | $2K/mo + $10K setup | New product, can set price |

**8 places we have pricing power currently underused:**

1. 3D / satellite visualization — no competitor, we set the price
2. Multi-tenant SaaS — high value, premium tier
3. AI agent products (WhatsApp, etc.) — subscription, recurring revenue
4. Workshops / training — $5.5T skills gap = high demand
5. AI compliance / governance — EU AI Act 2025+
6. Custom MCP server — rare capability
7. 30-Day AI Kickstart — fixed-price product (not in this sheet, see opportunities)
8. Multi-supermarket data product (B2B API) — 50K+ products, no local competitor

**4 places we're priced below market** (room to raise):
1. AI consulting ($100/session vs $150-300/hr)
2. AI agent development (custom vs $80-200/hr)
3. Generative AI integration (custom vs $80-200/hr)
4. Data engineering ($80/hr vs $100-150/hr)

---

## 📁 Files in this folder

| File | Size | Purpose |
|---|---|---|
| **`README.md`** | this file | The full context, the 3 ways to use this |
| **`create-sheet.gs`** | 25 KB | Google Apps Script to create the sheet in 60 seconds |
| **`capabilities-sheet.csv`** | 12 KB | 28 capabilities in CSV, importable to any spreadsheet |
| **`capabilities-sheet.json`** | 21 KB | 28 capabilities in JSON, for programmatic use |
| **`SHEET-README.html`** | 7 KB | Browser-viewable summary of the sheet |

---

## 🔗 How to share the sheet externally

Once created, you can:
- **Share with specific people:** click "Share" → add emails → choose permission
- **Share with anyone with link:** click "Share" → "Change to anyone with the link"
- **Publish to web (HTML embed):** File → Share → Publish to web → choose sheet → click "Publish"
- **Embed in ai-whisperers.org:** use the published URL in an `<iframe>` on the website

---

## 📊 ICP Map (which services for which customer)

The Apps Script creates a 3rd tab with this:

| ICP | Budget | Best services |
|---|---|---|
| **Solo Entrepreneur** | $500-5,000 | AI Website, Workshops, Content, WhatsApp Agent |
| **SME Operations Manager** | $5,000-50,000 | AI agents, automation, SaaS, integrations, RAG, 3D |
| **Corporate Innovation Lead** | $25,000-500,000 | Custom microservices, AI agents, MCP, compliance, CV |
| **PYME Paraguay** | $300-3,000 | WhatsApp AI, AI Website, Workshops, Content |
| **CORP Paraguay** | $5K-50K | Custom AI agents, RAG, SaaS, integrations |
| **GOV Paraguay** | $50K-500K+ | Modernization, compliance, custom microservices |

---

## 🔗 Related docs in this repo

- **`../services/README.md`** — the source of truth for these 28 capabilities
- **`../../docs/company-narrative.md`** — how to talk about us
- **`../../docs/portfolio-narrative.md`** — website copy
- **`../../docs/the-complete-company.md`** — the deepest synthesis
- **`../competitors/pricing-benchmarks.md`** — the full rate card
- **`../opportunities/README.md`** — the 8 gaps we should close

---

## 📈 How to update this sheet

1. Edit the data in `capabilities-sheet.csv` (and `.json` if doing programmatic)
2. Re-run the Apps Script if you want to re-create the formatted sheet
3. Or import the new CSV over the existing sheet (File → Import → Replace)

**Update cadence:** quarterly or when a new capability is added. Owner: Ivan.
