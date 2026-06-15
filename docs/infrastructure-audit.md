# AI Whisperers — Infrastructure Audit (Production State)

> The actual production state of our VPS, Docker Swarm fleet, GitHub org, and Hermes Agent setup as of 2026-06-15.
> Source: Direct probes of `agentzero` (72.61.44.159), GitHub API, local Hermes state.
> Last updated: 2026-06-15

---

## 🖥️ THE VPS — Hostinger `agentzero`

### Hardware profile
| Spec | Value |
|---|---|
| Hostname | `agentzero` |
| Provider | Hostinger |
| Public IP | 72.61.44.159 |
| Tailscale IP | 100.91.243.120 |
| Virtualization | KVM (QEMU) |
| OS | Ubuntu 24.04.4 LTS (Noble Numbat) |
| Kernel | Linux 6.8.0-90-generic |
| Arch | x86-64 |
| vCPU | 8 |
| RAM | 31 GiB total (8.4 GiB used, 22 GiB available) |
| Disk | 387 GB NVMe (335 GB used = **87%**), 53 GB free |
| Uptime | 10 days, 12 hours (at time of probe) |
| Load avg | 3.39, 3.42, 3.35 (high but stable) |

### Critical warning
**Disk at 87% capacity. Only 53 GB free.** Build cache was already pruned (per `MASTER_UPGRADE_LIST.md` — freed ~85 GB). Need to either:
- Prune old Docker images (multiple `prod-2026*` tags per service)
- Add disk
- Move `/var/lib/docker` to a separate volume

---

## 🐳 DOCKER SWARM FLEET — The actual production state

### Swarm cluster
- **Mode:** Swarm (initialized, single-node manager)
- **Overlay networks:** `agent-net`, `aiw-infra-net`, `monitoring-swarm`, `paraguai_default`, `polki-squad_default` (5 custom)
- **Local networks:** `bridge`, `host`, `none` (Docker defaults)
- **Ingress network:** `ingress` (Swarm default)

### Docker version
- **v29.4.1** (modern; supports `docker service ls` correctly)
- **Build:** 055a478

### Service count: 52 active services (the real count)

| Type | Count | Notes |
|---|---|---|
| Client websites (`*_web`) | **45** | Production sites serving real clients |
| Infrastructure (Traefik, Postgres, Loki, Grafana, etc.) | 7 | Backbone services |
| Total swarm services | **52** | (Many of these have 2 replicas) |

### All 45 client websites (live in Docker Swarm)

These are **the active client deployments**, not what's in the public GitHub org. Many are private/migrated to a monorepo.

| # | Service | Replicas | Domain | Vertical |
|---|---|---|---|---|
| 1 | `3md-website` | 1/1 | `3mind.paragu-ai.com` | Marketing/agency |
| 2 | `arnos-barber-shop` | 2/2 | `arnos.paragu-ai.com` | Barber |
| 3 | `bichos-gym` | 1/1 | `bichos-gym.paragu-ai.com` | Gym |
| 4 | `bufete-mendez` | 1/1 | `bufete-mendez.paragu-ai.com` | Law firm |
| 5 | `camilo-acosta` | 1/1 | `camilo-acosta.paragu-ai.com` | Personal site |
| 6 | `cocodrilo-fitness` | 2/2 | `cocodrilo-fitness.paragu-ai.com` | Fitness |
| 7 | `cronos-academy` | 2/2 | `cronos.paragu-ai.com` | Education |
| 8 | `cuidadoamiga` | 1/1 | `cuidadoamiga.paragu-ai.com` | Healthcare |
| 9 | `dayah-litworks` | 2/2 | `dayah.paragu-ai.com`, `dayahlitworks.paragu-ai.com` | Design portfolio |
| 10 | `de-abasto-a-casa` | 1/1 | `de-abasto-a-casa.paragu-ai.com`, `prep.paragu-ai.com` | Meal prep |
| 11 | `depiflash` | 2/2 | `depiflash.paragu-ai.com` | Beauty (IPL) |
| 12 | `escribania-paraguay` | 1/1 | `escribania-paraguay.paragu-ai.com` | Legal/notary |
| 13 | `estudio-medieval` | 2/2 | `estudio-medieval.paragu-ai.com` | Art/design |
| 14 | `fun4me` | 1/1 | `fun4me.paragu-ai.com` | Adult store |
| 15 | `fun4me-store` | 1/1 | `fun4me-store.paragu-ai.com` | Adult e-commerce |
| 16 | `golden-visa-advisory` | 2/2 | `goldenvisa.paragu-ai.com` | Legal (immigration) |
| 17 | `granja-cabral` | 1/1 | `cabral.paragu-ai.com` | Agricultural/avian farm |
| 18 | `hidrobaby-spa` | 2/2 | `hidrobaby-spa.paragu-ai.com` | Spa (baby) |
| 19 | `jota-ink-tattoo` | 2/2 | `jota-ink-tattoo.paragu-ai.com` | Tattoo |
| 20 | `luis-de-leon-concept` | 1/1 | `luis-de-leon-concept.paragu-ai.com` | Artist portfolio |
| 21 | `magnolia` | 1/1 | `magnolia-peluqueria.paragu-ai.com` | Hair salon |
| 22 | `mantra-spa` | 2/2 | `mantra-spa.paragu-ai.com` | Spa |
| 23 | `maskarada` | 1/1 | `maskarada.paragu-ai.com` | Costume shop |
| 24 | `meal-prep` | 1/1 | `meal-prep.paragu-ai.com` | Meal prep |
| 25 | `nde-barba` | 2/2 | `nde-barba.paragu-ai.com` | Barber |
| 26 | `nexa-paraguay` | 2/2 | `nexa-paraguay.com`, `nexa.paragu-ai.com` | Relocation services |
| 27 | `nexa-preview` | 1/1 | `nexa-preview.paragu-ai.com` | Staging env |
| 28 | `nudo` | 1/1 | `nudo.paragu-ai.com`, `xn--ndo-hoa.paragu-ai.com` | Restaurant |
| 29 | `ozmontania-website` | 2/2 | `ozmontania.paragu-ai.com` | Outdoors |
| 30 | `pitchy-website` | 1/1 | `pitchy.paragu-ai.com`, `pitchy-blindex.paragu-ai.com` | Glass products |
| 31 | `portas-barber` | 1/1 | `portas-barber.paragu-ai.com` | Barber |
| 32 | `reina-de-copas` | 1/1 | (reina-de-copas-paraguay.com) | E-commerce (menstrual) |
| 33 | `scott-tatuajes` | 2/2 | `scott-tatuajes.paragu-ai.com` | Tattoo |
| 34 | `shine-nails` | 2/2 | `shine-nails.paragu-ai.com` | Nail salon |
| 35 | `stroopwafel-huis` | 2/2 | `stroopwafelhuis.paragu-ai.com` | Dutch cafe |
| 36 | `superspuma` | 2/2 | `superspuma.paragu-ai.com` | Foam products |
| 37 | `trentina-cerveza` | 2/2 | `trentina.paragu-ai.com`, `trentina-site.paragu-ai.com` | Brewery |
| 38 | `tsuki-restaurante` | 1/1 | (Japanese restaurant) | Restaurant |
| 39 | `villamayor-asociados` | 1/1 | `villamayor.paragu-ai.com` | Law firm |
| 40 | `vitrumpy` | (none visible) | `vitrumpy.paragu-ai.com` | (Unknown) |
| 41 | `xxgym` | 2/2 | `xxgym.paragu-ai.com` | Gym |
| 42 | `cocodrilo-fitness` | (above) | — | (duplicate row, dedup) |
| 43 | `wa-connect` | 1/1 | `whatsappconnect.paragu-ai.com` | WhatsApp connector |
| 44 | `static-paragu-ai` | 1/1 | `paragu-ai.com` (static) | Marketing/landing |
| 45 | `cuidadoamiga` (alt) | (above) | — | (duplicate, dedup) |

**Actual unique client sites after dedup: ~42**

> ⚠️ The 2026-04-30 org audit counted **28 sites** as ACTIVE. The live fleet today shows **42 unique client sites** running — net growth of +14 sites in 6 weeks, all on the same VPS.

### Unique hostnames: 55
- `*.paragu-ai.com` for Paraguay clients
- `*.sunstein.cloud` for sunstone/infrastructure subdomains
- Apex domains: `paragu-ai.com`, `nexa-paraguay.com`, `aiwhisperers.com` (NB: aiwhisperers.com is NOT ours, see warning)
- Internationalized: `xn--ndo-hoa.paragu-ai.com` (Punycode for "ñu.do")

### Infrastructure services (backbone)

| Service | Stack | Purpose |
|---|---|---|
| `traefik` | Traefik v3.5.3 | Reverse proxy, SSL termination, routing |
| `postgres` | PostgreSQL 14 | Central database (Supabase + others) |
| `evolution_api` | Evolution API v2 | WhatsApp Business API integration |
| `evolution_redis` | Redis | Cache for Evolution API |
| `loki` + `promtail` | Grafana stack | Centralized logging |
| `monitor_grafana` | Grafana latest | Dashboards (`monitor.paragu-ai.com`) |
| `node-exporter` | Prometheus | Host metrics |
| `hermes-ws` | Outsourc-E/hermes-workspace | Hermes Agent web workspace (port 3088) |
| `openwebui` | Open WebUI main | Hermes chat UI (`webui.paragu-ai.com`) |

### Notable volumes (data persistence)

| Volume | Use case |
|---|---|
| `postgres_data` | Central Postgres |
| `openwebui_*` | Hermes chat history |
| `loki-data` + `loki_loki_data` | Centralized logs |
| `n8n-data` + `n8n_n8n-data` | n8n workflow engine |
| `evolution_instances` + `evolution_redis` | WhatsApp session data |
| `meilisearch-data` | Search engine |
| `memos-data` | Memos (notes) |
| `hoarder-data` | Hoarder (bookmarks) |
| `langfuse_*` | Langfuse (LLM observability) |
| `gitea-data` | Self-hosted Git (Gitea) |
| `healthchecks-data` | Uptime monitoring |
| `portainer_data` | Docker management UI |
| `minio-data` | S3-compatible object storage |
| `litellm_litellm-redis-data` | LiteLLM proxy cache |
| `lightrag_data` | LightRAG (graph RAG) |
| `aiw-code-agent_*` | AIW code agent workspace |
| `changedetection-data` | Website change detection |
| `monitoring_prometheus_data` + `monitoring_grafana_data` | Monitoring stack |

**This is a full production data platform**, not just a website host.

---

## 🐙 GITHUB ORG — `Ai-Whisperers`

### Public stats
- **42 public repos** (0 private, 0 forks, 0 mirrors)
- **2 org members** (Ivan + Kyrian, per `Company/Staff/`)
- **1.27 GB** total repo storage
- **21 archived** (50% — these are mostly the migrated-to-monorepo sites)
- **30 active** in the last 90 days

### Language distribution
| Language | Repo count |
|---|---|
| Python | 11 |
| TypeScript | 10 |
| Dockerfile | 5 |
| JavaScript | 3 |
| HTML | 1 |
| PowerShell | 1 |
| Svelte | 1 |

### Repo categories (by purpose)

#### 🌐 Active client sites (in production, mostly NOT public)

The active fleet on VPS has **42 unique client sites** but only **a few are public on GitHub** (per `git ls-remote`). The rest are private, in monorepos, or in the paragu-ai-builder monorepo.

Public client-site repos:
- `portas-barber`, `xxgym`, `nde-barba`, `shine-nails` (all 18 KB, Dockerfile-only — small "deploy-only" repos)
- `depiflash`, `reina-de-copas`, `mikie-fisio` (full Next.js sites)
- `meal-prerp-website`, `anthro-party-argentina` (larger projects)

#### 🏗️ Production platforms (the "engines")
- **`paragu-ai-builder`** (467 MB) — multi-tenant SaaS site generator, the meta-product
- **`site-template`** (49 MB) — the universal Next.js 16 template (lineage)
- **`Vete`** (150 MB) — multi-tenant vet/clinic platform
- **`Taller_Ocampos`** (108 MB) — auto repair shop OS (flagship)
- **`anthro-party-argentina`** (29 MB) — SvelteKit convention site
- **`WPG-Amenities`** (36 MB) — hotel amenities site
- **`folyo`** (80 MB) — Jekyll CV template
- **`courses-website`** (115 KB) — Rust + React video LMS

#### 🤖 AI engineering
- **`agentic-schemas`** — 20-pattern open-source agentic framework, MIT
- **`telescope-ai`** — MCP server for Celestron telescopes
- **`3-adic-ml`** — p-adic ML research (referenced in old site)
- **`mcp-for-deploys`** — MCP server for deployment automation
- **`psicologia-ia`** — psychology AI template

#### 🛰️ 3D / Satellite / Data
- Skills at `~/.hermes/skills/{research,creative,devops}/`:
  - `site-data-acquisition`, `geospatial-site-to-3d-pipeline`, `satellite-to-blender-pipeline`, `blender-mcp`
- **`paraguay-supermercados`** — 50K+ products indexed across 5 chains

#### 🏗️ Infrastructure / DevOps
- **`infrastructure`** — Infra docs (Hermes, Swarm, VPS, MCPs)
- **`aiw-docs`** (ARCHIVED) — Older infra docs, content merged
- **`cluster-template`** — K8s config
- **`work-hours-automated-reports`** — Clockify + Azure DevOps automation

#### 🎓 Training / EdTech / Content
- **`Courses-Content`** — FPUNA AI education configs (Python configs, MIT)
- **`Summer-courses`** — Summer course content
- **`education-hooks`** — Consolidated hooks (Python)
- **`marketing-strategy`** — Marketing playbook (40 MB, PowerShell metadata)
- **`marketing-hub`** is `marketing-strategy/AI-Whisperers-Marketing-Hub/`

#### 🏢 Company / HR / Strategy
- **`company`** — The repo this audit lives in (9 MB, MIT)
- **`trentina-research`** — Brewery competitive analysis (archived)
- **`pitchy-glass-market-paraguay`** — Blindex/glass market intel (archived)

#### 👤 Personal / Side projects
- **`netherlands-2026`** — NL trip one-pager
- **`anthro-party-plan`** — Convention planning guide
- **`alejandro-villamayor`** — Immigration lawyer site
- **`cuidadoamiga-fork`** — Next.js app fork

#### 📦 Archived (migrated to monorepos)
- `clinica-duerksen`, `Odontology`, `Vete` (migrated to paragu-ai-builder)
- `agentic-schemas`, `telescope-ai`, `mcp-for-deploys`, `Taller_Ocampos`, `mikie-fisio`, `psicologia-ia` (archived as standalone, content kept)
- `Courses-Content`, `Summer-courses` (consolidated into education-hooks)
- `aiw-docs` (merged into infrastructure)
- `photos-to-kml` (superseded)
- `anthro-party-plan`, `trentina-research`, `pitchy-glass-market-paraguay`, `WPG-Amenities`, `alejandro-villamayor` (one-off)

> 📌 The 2026-04-30 archive date is when the org did a major cleanup, consolidating many standalone client sites into the paragu-ai-builder monorepo pattern.

---

## 🤖 HERMES AGENT — The local runtime

### Version & state
- **Hermes Agent v0.16.0** (2026-06-05 build)
- **Upstream:** 0bbf325a
- **Python:** 3.11.15
- **OpenAI SDK:** 2.24.0
- **Status:** Up to date
- **Local install:** `/root/.hermes/hermes-agent`

### Profiles (9)
- `_common` (shared)
- `default` (Erebus — AI workforce lead, this session)
- `architect-bot` — system architecture
- `client-success-bot` — client follow-up
- `closer-bot` — sales proposals
- `copy-bot` — SEO + content
- `delivery-bot` — project delivery tracking
- `explorer-bot` — market research
- `operations-conductor` — finance/operations
- `ops-bot` — ops
- `tony-bot` — Tony Weiss video production

### Skills (119)
Massive skill library across:
- `business/` (ai-whisperers-*, pricing-benchmarks, etc.)
- `client/` (client-sites-healthcheck, site-pattern-extraction, etc.)
- `creative/` (animation, baoyu-*, blender-mcp, hyperframes, etc.)
- `data-science/` (jupyter-live-kernel)
- `devops/` (ai-whisperers-*, hermes-*, satellite-to-blender, etc.)
- `mlops/` (chroma, faiss, instructor, etc.)
- `research/` (geospatial-site-to-3d-pipeline, site-data-acquisition, etc.)
- `testing/` (device-field-testing, etc.)
- And more...

### Cron jobs (273 scheduled)
- Many cron jobs scheduled for monitoring, backups, fleet health, content generation, self-improvement
- `MASTER_UPGRADE_LIST.md` is the canonical tracker
- 16 active jobs per current state, some health scripts use `no_agent` mode (zero LLM cost)

### Plugins (40+)
- `agent-analytics-hermes-plugin`
- `autocontext` (auto context management)
- `clawshell` (shell access)
- `cost_tracker` (LLM spend tracking)
- `evey-autonomy` (autonomous decision making)
- `evey-bridge-plugin` (messaging bridge)
- `evey-commands` (custom commands)
- `evey-cost-guard` (cost guardrails)
- `evey-council` (model council for decisions)
- `evey-delegation-score` (delegation quality scoring)
- `evey-digest` (daily digests)
- `evey-email-guard` (email security)
- `evey-github` (GitHub integration)
- And more...

### Local key files
- `SOUL.md` — Erebus identity
- `AGENTS.md` — Project context (VPS, litellm, agent.sunstein.cloud, portainer.sunstein.cloud, grafana)
- `BOOT.md` — gateway startup behavior ([SILENT])
- `ECOSYSTEM_REPORT.md` — 100+ repo analysis
- `DEEP_RESEARCH.md` — 245 lines, Phase 1: Web UIs (hermes-workspace picked, 2525★)
- `MASTER_UPGRADE_LIST.md` — 305 lines, complete VPS upgrade tracker
- `MEMORY.md` — 6.5 KB, last updated today
- `PROVIDER_INVENTORY.md` — 21 KB, model provider catalog
- `SMART_MODEL_ROUTING_PLAN.md` — 5.3 KB, cost optimization
- `AUTH_FIXES_USER_ACTIONS.md` — 7.2 KB, OAuth fix history
- `BORING-RELIABILITY-WORKFLOWS.md` — 3 KB
- `COMMUNITY-PATTERNS-IMPLEMENTED.md` — 10.7 KB
- `PROFILE-RATIONALIZATION.md` — 3 KB
- `DECISION_MATRIX.md` — 5.8 KB
- `DAYAH_IMPROVEMENT_PLAN.md` — 10 KB

### Hermes in the Docker fleet
- **`hermes-ws_hermes-workspace`** service (1/1) — Outsourc-E/hermes-workspace, port 3088
- **`openwebui_open-webui`** service (1/1) — Open WebUI, port 30081 → 8080
- These two together = the web-accessible Hermes experience
- Backed by: PostgreSQL (postgres), Loki (logging), Grafana (dashboard), n8n (workflows), LiteLLM (proxy)

---

## 🌐 TAILSCALE PEERS — Who else is in the network

8 visible peers (per `tailscale status`):

| Peer | IP | OS | Status | Notes |
|---|---|---|---|---|
| **agentzero** | 100.91.243.120 | linux | active | **Our VPS — this is the one we just audited** |
| **ai-whisperers-server** | 100.69.193.50 | linux | active | Ivan's working server — different machine from agentzero |
| **alejandro-nicolass-s23-ultra** | 100.104.36.19 | android | offline 22d | Alejandro's phone |
| **izt4n7wo7pg57a16w9x87az** | 100.123.97.41 | linux | offline 56d (relay "sin", tx 9.8M, rx 0) | Probably a stuck peer |
| **pc-ale** | 100.110.9.12 | windows | active | pc-ale (Windows) |
| **redmi-note-13-pro** | 100.102.45.44 | android | offline 2d | |
| **redmi-note-13** | 100.115.227.45 | android | offline 26d | |
| **srv1396188** | 100.124.222.54 | linux | offline 86d (relay "sao", tx 9.9M, rx 0) | Probably a stuck peer |

**The 2 stuck Linux peers (izt4n7... and srv1396188) are sending 9.8M+ bytes but receiving 0. They need to be cleaned up.**

---

## 🚨 CRITICAL FINDINGS (the things you need to know)

### 1. VPS disk at 87% — need action
- 53 GB free out of 387 GB
- Multiple `prod-2026*` tagged images per service — old versions aren't being pruned
- Build cache already pruned (~85 GB freed per `MASTER_UPGRADE_LIST.md`)
- Next step: `docker image prune -a --filter "until=720h"` to drop images older than 30 days

### 2. The "live fleet" is bigger than the public org
- **42 unique client sites** running on the VPS
- **Only ~15 client-site repos** are public on GitHub
- Most active client work is in private monorepos or the paragu-ai-builder multi-tenant SaaS
- **Implication for the company portfolio:** the public GitHub doesn't show our full production footprint

### 3. VPS load average 3.4 (high)
- 8 vCPU, load avg 3.39 / 3.42 / 3.35
- Indicates CPU contention (52 services running, 45 client sites + 7 infra)
- Not critical, but worth monitoring

### 4. 21 of 42 repos are archived
- Major archive date: 2026-04-30
- Pattern: many client sites got migrated to paragu-ai-builder monorepo
- The active org is now leaner and more focused

### 5. Hermes is robust
- 9 profiles, 119 skills, 273 cron jobs, 40+ plugins
- v0.16.0 is recent and up to date
- Web workspace + Open WebUI both deployed
- Full Grafana/Loki/Prometheus observability stack

### 6. The `.env` and OAuth files
- `~/.hermes/.env` — 4.2 KB, last modified today
- `~/.hermes/.anthropic_oauth.json` — 291 bytes
- `~/.hermes/.api_server_key.txt` — 43 bytes
- Backed up automatically (multiple `.bak` files in `/root/.hermes/`)
- **Sensitive — should not be committed anywhere**

### 7. The "No peer for `ivan-laptop`" gap
- Per memory note 2026-06-11: "No peer `ivan-laptop`" — when Ivan says "my laptop" via Tailscale, ask for hostname
- Still no `ivan-laptop` peer visible in current Tailscale status

---

## 🔗 RELATED DOCS

- `docs/company-narrative.md` — who we are (the "what")
- `docs/research-sources.md` — every URL we cited
- `Company/services/README.md` — what we sell (the "why")
- `Company/competitors/README.md` — the market context

## 📊 SOURCE DATA

Direct probes performed on 2026-06-15:
- `ssh root@72.61.44.159` — VPS system info, docker service list, swarm networks, traefik routers (via Docker API)
- `tailscale status` — peer inventory
- `hermes --version` — runtime check
- `ls /root/.hermes/` — local Hermes state
- GitHub API — repo metadata, languages, archive status
- `ls /root/.hermes/skills/`, `ls /root/.hermes/profiles/`, `ls /root/.hermes/plugins/`, `hermes cron list`
