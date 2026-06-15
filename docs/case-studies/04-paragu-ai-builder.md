# Case Study: ParaguAI Builder — Multi-Tenant SaaS Site Generator

> The meta-product. One codebase that serves 5+ live client sites.
> Last updated: 2026-06-15

---

## 🎯 The Project

**paragu-ai-builder** is a multi-tenant marketing-site generator. A single Next.js 15 + Supabase + Cloudflare Workers app renders a library of reusable section components against per-tenant JSON configuration — so new sites are _configured_, not _built_.

```
[ tenant JSON ]  +  [ vertical copy ]  +  [ design tokens ]
        ─────────────────────────────────────────────────►
                          composition engine
                                  │
                                  ▼
                      React sections (shared pool)
                                  │
                                  ▼
                Static HTML / Edge-rendered route
```

---

## 🏗️ Architecture

### `src/` — the data layer (code-free)
- `schemas/` — JSON Schema definitions (base + per-business-type)
- `tokens/` — 31 token files (base + per-vertical overrides)
- `registry/` — Business-type definitions (sections, features, SEO)
- `verticals/` — 23 verticals — each groups related business types
- `content/` — 34 content templates with {{placeholder}} keys
- `compliance/` — 5 legal templates (privacy-py, terms, AML, INAN, cookies)

### `sites/` — the tenant layer
One directory per tenant. Everything a tenant customises lives here; nothing else.
- `site.json` — hostname, locales, businessType, integrations
- `tokens.json` — brand-colour overrides
- `pages/` — page-by-page section ordering
- `content/` — locale-keyed copy (es/en/nl/pt)
- `blog/` — per-locale markdown posts (optional)
- `assets/` — tenant-owned images (optional)

### `web/app/` — Next.js App Router
- **`[business]/`** — legacy flat pattern (`/gymfit-py`, `/salon-maria`)
- **`s/[locale]/[siteSlug]/`** — modern locale-prefixed pattern (`/s/es/nexa-paraguay/programas`)
- `app/admin/` — auth-gated admin
- `app/api/` — 21 routes

### `web/components/sections/` — 83 React components
Every section is a self-contained React component that accepts a typed data shape.

---

## 🌐 Live Tenants

| Tenant | Vertical | Hostname | Locales |
|---|---|---|---|
| Nexa Paraguay | Relocation | nexaparaguay.com | nl, en, de, es |
| Nexa Propiedades | Real estate | nexapropiedades.com | es, en, pt |
| De Abasto a Casa | Meal prep | deabastoacasa.com.py | es |
| Dayah Litworks | Portfolio (design) | dayah-litworks.com | es |
| Demo tenants | Various | localhost/staging | various |

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15 (App Router) |
| Language | TypeScript |
| Hosting | Cloudflare Workers (via @opennextjs/cloudflare) |
| Database | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth |
| Content | JSON-driven, i18n |
| Observability | Sentry, Cloudflare Analytics Engine, Axiom Logpush |
| Tests | Vitest, Playwright |
| Linting | ESLint |

---

## 💡 Why This Project Matters for Our Portfolio

### 1. Meta-product
- We don't just build sites — we built a site generator
- New clients are configured, not coded
- Days to launch, not weeks

### 2. Multi-tenant expertise
- Per-tenant data isolation (Postgres RLS)
- Per-tenant routing (middleware)
- Per-tenant themes (CSS variables)
- Per-tenant content (JSON)
- Per-tenant SEO (hreflang, sitemap)

### 3. Production-scale
- 5+ live tenants
- 30+ domains managed across the broader infra
- Edge rendering on Cloudflare Workers
- Admin dashboard with auth

### 4. Replicable for any vertical
- Same platform can generate sites for vet clinics, gyms, salons, restaurants, real estate, e-commerce
- Each new vertical = add a few JSON files
- Each new tenant = add a few more JSON files
- 23 verticals already supported

### 5. Replaces standard web dev agency model
- Traditional agency: each client = custom code
- Our model: each client = custom config
- Faster delivery, lower cost, easier maintenance

---

## 📁 Links

- **GitHub:** https://github.com/Ai-Whisperers/paragu-ai-builder
- **Size:** 467 MB (includes full app + 5+ tenant configs)
- **Live tenants:** nexaparaguay.com, nexapropiedades.com, deabastoacasa.com.py, dayah-litworks.com
- **Status:** Production, actively maintained

---

## 🎯 How to Use in Sales

> "We built our own site generator so we can launch a new client site in days, not weeks. Same codebase serves 5+ live tenants today. Each new client is a JSON config, not custom code. When you hire us, you're not getting a one-off — you're getting a battle-tested platform."

---

## 💰 Service Tie-In: Vertical SaaS Build ($10-50K + $50-500/mo/tenant)

The productized service derived from this project:

| Engagement | Price | Includes |
|---|---|---|
| New vertical (e.g., gyms) | $10-20K | Business type, 5-10 sections, 1 demo tenant |
| Production deployment (1 tenant) | $5-15K | Production deploy, custom domain, training |
| Multi-tenant SaaS for your vertical | $25-50K | Full platform customization for your niche |
| Per-tenant hosting | $50-500/mo | Hosting, support, content updates |

---

## 📚 Related docs

- `docs/company-narrative.md` — overall positioning
- `docs/portfolio-narrative.md` — website copy
- `Company/competitors/our-whitespace.md` — this is one of the 8 unique capabilities
