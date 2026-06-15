/**
 * AI Whisperers — Capabilities & Pricing Sheet Creator
 * -----------------------------------------------
 * Google Apps Script to create a fully-formatted Google Sheet
 * with all 28 capabilities, pricing, market benchmarks, and sources.
 *
 * HOW TO USE (60 seconds):
 * 1. Go to https://script.google.com/home
 * 2. Click "New Project" (or "+")
 * 3. Paste this entire file's contents into the editor (replace the default `function myFunction() {}`)
 * 4. Click the dropdown next to "Run" → select "createCapabilitiesSheet"
 * 5. Click "Run" — you'll be asked to authorize (Google will warn, click "Review permissions" → your account → "Allow")
 * 6. Wait ~10 seconds. A new Google Sheet will appear in your Drive root.
 * 7. The script's "Execution Log" will print the URL of the created sheet.
 *
 * That's it. The sheet will be formatted, color-coded by tier, with frozen header row.
 *
 * MAINTAINED IN: Ai-Whisperers/company/Company/sales/create-sheet.gs
 * GENERATED: 2026-06-15 by Erebus
 */

function createCapabilitiesSheet() {
  // ============= DATA =============
  const services = [
    [1, "1", "Audit & Strategy", "AI Readiness Audit",
     "1-week diagnostic: workflow mapping, AI opportunity matrix (30-50 candidate automations), ROI model, 30-day roadmap",
     "$500-2,000", "—", "$500-2,000",
     "$5,000", "$15,000", "Neurons Lab 'Executive AI Workshop' / Markovate Discovery Phase",
     "Low", 5, 5, "$10-50K/mo",
     "Paraguay-first language, free tier for lead-gen",
     "marketing-strategy/AI-Whisperers-Marketing-Hub/"],

    [2, "1", "Customer Engagement", "WhatsApp AI Agent (Paraguay-first)",
     "Lead capture, FAQ, appointment booking, order-taking, multi-language. Built on our infra (not BotPenguin)",
     "$1,000-3,000", "$300-1,000/mo", "$1-3K setup + $300-1,000/mo",
     "$200/mo platform", "$2,000/mo platform + $10K setup", "BotPenguin, Gallabox, Kommunicate",
     "Medium (4-6 wks MVP)", 5, 5, "$30-100K MRR",
     "Paraguay-Spanish-first, 28 existing client sites as distribution",
     "paragu-ai-builder, MCP servers, evolution_ stack (VPS)"],

    [3, "1", "AI Agents", "AI Agent for Sales",
     "Lead scoring, CRM auto-update, personalized outreach, deal forecasting. Integrates with HubSpot/Pipedrive/Notion",
     "$5,000-25,000", "$500-2,000/mo", "$5-25K setup + $500-2K/mo",
     "$5,000", "$30,000", "LeewayHertz, Master of Code, Intuz",
     "Medium", 4, 5, "Medium-high",
     "ParaguAI Builder already has CRM integrations wired",
     "paragu-ai-builder, agentic-schemas"],

    [4, "1", "AI Agents", "AI Agent for Customer Service",
     "24/7 support, ticket routing, FAQ, escalation. Multi-channel (WhatsApp + web + Instagram)",
     "$5,000-30,000", "$500-3,000/mo", "$5-30K setup + $500-3K/mo",
     "$5,000", "$30,000", "Every Tier 2 competitor",
     "Medium", 5, 5, "High",
     "Multi-tenant infra to deploy fast, multi-language (es/en/nl/pt)",
     "paragu-ai-builder, evolution_ (VPS)"],

    [5, "1", "Automation", "AI Workflow Automation (n8n-based)",
     "Internal process automation: invoice processing, lead routing, data entry, report generation",
     "$2,000-10,000", "$200-500/mo", "$2-10K per automation + $200-500/mo",
     "$2,000", "$15,000", "Intuz, Azilen, Neoteric",
     "Low (per-automation)", 4, 4, "Medium",
     "n8n expertise + Paraguay rate advantage ($50/hr vs US $150/hr)",
     "n8n-data volume (VPS in production)"],

    [6, "1", "AI Agents", "RAG Knowledge Base for Company Docs",
     "Internal AI that answers questions from company documents (PDFs, Notion, Google Drive). 4-6 week build",
     "$5,000-15,000", "$200-1,000/mo", "$5-15K setup + $200-1K/mo",
     "$5,000", "$30,000", "LeewayHertz 'Document Intelligence'",
     "Low-Medium (templated)", 4, 4, "Medium-high",
     "agentic-schemas Pattern 13 (RAG) ready to deploy",
     "agentic-schemas, lightrag_data volume (VPS)"],

    [7, "1", "Training", "AI Training Workshops (corporate)",
     "2-day to 2-week workshops. Claude/Cursor/Copilot/Gemini for specific departments. On-site or virtual",
     "$200-2,000/student or $5-30K/company", "—", "$500-2,500/student or $5-30K/company",
     "$200/student", "$2,000/student", "DeepLearning.AI corporate, Anthropic Academy",
     "Zero (content exists)", 5, 5, "$20-50K/mo",
     "Existing FPUNA content, Spanish-first, 4-language delivery",
     "Courses-Content, Summer-courses, education-hooks, courses-website"],

    [8, "1", "Web & SaaS", "AI-Powered Website (SMB)",
     "Marketing website with AI features: chatbot, lead scoring, content gen, SEO automation, WhatsApp CTA",
     "$500-5,000", "$20-50/mo hosting", "$500-5,000 build + $20-50/mo",
     "$1,000", "$10,000", "Standard web agency rate",
     "Very low (template-driven)", 5, 5, "High",
     "paragu-ai-builder purpose-built; 28 live client sites prove the model",
     "paragu-ai-builder, site-template, Vete"],

    [9, "1", "Web & SaaS", "Multi-Tenant SaaS for Vertical",
     "Vete-style platform: vet, gym, salon, restaurant, etc. Each tenant is a config, not code",
     "$5,000-50,000", "$50-500/mo per tenant", "$5-50K + $50-500/mo/tenant",
     "$10,000", "$100,000", "Custom SaaS standard rate",
     "Low per new vertical", 5, 4, "High",
     "Vete has 6 tenants, paragu-ai-builder has 5+",
     "paragu-ai-builder, Vete"],

    [10, "1", "AI Agents", "AI Integration Sprint (2 weeks)",
     "Take existing software (ERP, CRM, ITSM) and embed AI capabilities. Fixed scope, fixed price",
     "$5,000-20,000", "—", "$5-20K fixed",
     "$5,000", "$25,000", "LeewayHertz, InData Labs, Neontri",
     "Low per integration", 4, 4, "Medium-high",
     "MCP server expertise (rare), fast turnaround",
     "mcp-for-deploys, agentic-schemas"],

    [11, "1", "3D & Satellite", "3D Photorealistic Render (satellite → Blender)",
     "Real-estate, architecture, tourism, foundation planning. One AOI per project, 0.6 m/px resolution",
     "$500-10,000/render", "—", "$500-10,000 per render",
     "$1,000", "$10,000", "D5 Render, Twinmotion shops",
     "Zero (pipeline exists)", 5, 4, "Very high",
     "No competitor offers this. Free public data, headless Cycles on lean VPS",
     "site-data-acquisition, geospatial-site-to-3d-pipeline, satellite-to-blender-pipeline, blender-mcp"],

    [12, "2", "AI Agents", "AI Agent for HR",
     "Resume screening, interview scheduling, onboarding, employee Q&A bot",
     "$5,000-15,000", "$300-1,000/mo", "$5-15K setup + $300-1K/mo",
     "$5,000", "$15,000", "Master of Code HR modules, Intuz",
     "Medium", 4, 4, "Medium",
     "agentic-schemas patterns ready",
     "agentic-schemas"],

    [13, "2", "AI Agents", "AI Agent for Finance",
     "Invoice OCR, expense categorization, anomaly detection, financial reporting",
     "$5,000-25,000", "$500-2,000/mo", "$5-25K setup + $500-2K/mo",
     "$5,000", "$30,000", "Intuz, LeewayHertz, BairesDev",
     "Medium", 4, 4, "Medium",
     "Open-source OCR stack + agentic-schemas",
     "agentic-schemas"],

    [14, "2", "AI Agents", "AI Agent for DevOps/AIOps",
     "Log analysis, alert correlation, incident response, runbook automation",
     "$10,000-50,000", "—", "$10-50K",
     "$10,000", "$100,000", "IBM AIOps case study, Intuz",
     "High", 3, 4, "Medium",
     "Loki + Grafana + Prometheus stack live in our infra",
     "Loki, Promtail, Grafana, node-exporter (VPS)"],

    [15, "2", "Data", "Predictive Analytics Dashboard",
     "Real-time dashboards with forecasting, anomaly detection. Built on Supabase + custom AI",
     "$5,000-20,000", "—", "$5-20K",
     "$5,000", "$30,000", "InData Labs, Azilen, Neoteric",
     "Medium", 4, 4, "Medium",
     "Postgres + Grafana + Supabase already wired",
     "postgres, monitor_grafana (VPS)"],

    [16, "2", "AI Agents", "Recommendation Engine",
     "E-commerce product recs, content recs, 'people also bought' — all verticals",
     "$5,000-20,000", "—", "$5-20K",
     "$5,000", "$25,000", "Neoteric, Intuz, Geniusee",
     "Medium", 4, 3, "Medium",
     "Multi-tenant infra makes A/B testing easy",
     "paragu-ai-builder, agentic-schemas"],

    [17, "2", "Automation", "Document Processing Automation",
     "OCR + extraction + classification. For legal, insurance, healthcare, accounting",
     "$5,000-15,000", "—", "$5-15K per process",
     "$5,000", "$20,000", "Markovate (document-heavy), InData Labs",
     "Medium", 4, 3, "Medium",
     "MCP server for legacy doc systems",
     "agentic-schemas, mcp-for-deploys"],

    [18, "2", "Content", "AI Content Generation Pipeline",
     "Multi-locale content (es/en/nl/pt) for SEO at scale. We already do this for our own sites",
     "$500-2,000/mo", "$500-2,000/mo", "$500-2,000/month per client",
     "$500/mo", "$3,000/mo", "Appinventiv, Maruti Techlabs",
     "Zero (skill exists)", 5, 4, "High",
     "4-language production stack already proven on our own sites",
     "paragu-ai-builder, copy-bot profile"],

    [19, "2", "Content", "AI Video Generation Service",
     "Marketing videos, product demos, training content via AI tools",
     "$500-5,000/video", "—", "$500-5,000/video",
     "$500", "$5,000", "Synthesia, HeyGen via agency",
     "Low", 4, 3, "Medium-high",
     "Tony-bot profile + HyperFrames pipeline",
     "tony-bot, hyperframes"],

    [20, "2", "AI Agents", "AI Agent for E-commerce",
     "Personalized shopping assistant, dynamic pricing, inventory prediction",
     "$5,000-25,000", "$500-2,000/mo", "$5-25K + $500-2K/mo",
     "$5,000", "$30,000", "Master of Code (e-commerce), Intuz",
     "Medium", 4, 4, "Medium-high",
     "42 live e-commerce/lead-gen sites as proof",
     "paragu-ai-builder, Vete, e-commerce client sites (VPS)"],

    [21, "2", "AI Agents", "Voice AI Agent (Inbound/Outbound)",
     "Phone call automation, voice bots, IVR replacement",
     "$5,000-30,000", "$500-3,000/mo", "$5-30K + $500-3K/mo",
     "$5,000", "$30,000", "Bland.ai, Vapi.ai via agency",
     "Medium", 4, 3, "Medium",
     "Multi-tenant infra to deploy fast",
     "paragu-ai-builder, agentic-schemas"],

    [22, "2", "AI Agents", "Custom MCP Server",
     "Connect AI to any tool: CRM, ERP, internal API, hardware. Telescope-AI is proof",
     "$3,000-15,000/server", "—", "$3-15K per server",
     "$3,000", "$20,000", "Anthropic / OpenAI MCP ecosystem (rare as a service)",
     "Low-Medium", 5, 3, "High",
     "Rare capability. Telescope-AI proves the pattern (hardware integration)",
     "telescope-ai, mcp-for-deploys"],

    [23, "3", "AI Agents", "AI Cybersecurity Agent",
     "Darktrace-style threat detection, automated response, compliance monitoring",
     "$10,000-100,000", "—", "$10-100K",
     "$10,000", "$200,000", "Darktrace-style (Creole case study), SOC automation",
     "High", 3, 3, "Medium",
     "TBD (not core competency yet)",
     "—"],

    [24, "3", "AI Agents", "Custom Computer Vision",
     "Object detection, OCR, visual inspection, medical imaging",
     "$10,000-50,000", "—", "$10-50K",
     "$10,000", "$150,000", "Azilen, EffectiveSoft, Master of Code",
     "High", 3, 3, "Medium",
     "Has the Python CV stack + GPU via VPS",
     "telescope-ai (plate solving = CV), 3-adic-ml (research)"],

    [25, "3", "AI Agents", "Fine-Tuning Service",
     "Custom LLM fine-tuning for domain-specific tasks (legal, medical, etc.)",
     "$10,000-50,000", "—", "$10-50K",
     "$10,000", "$100,000", "LeewayHertz, InData Labs, Neurons Lab",
     "Medium", 3, 3, "Medium",
     "LiteLLM proxy in our stack (multi-model routing)",
     "litellm_litellm-redis-data volume (VPS), langfuse (observability)"],

    [26, "3", "Audit & Strategy", "AI Procurement / Vendor Selection",
     "Help companies pick the right AI tools from the 100+ available",
     "$2,000-10,000", "—", "$2-10K engagement",
     "$2,000", "$15,000", "Gartner / Forrester via partner",
     "Low (we know the market)", 5, 3, "High (low cost)",
     "20-competitor analysis + market research is our differentiator",
     "Company/competitors/README.md"],

    [27, "3", "Data", "Data Engineering / ETL Pipelines",
     "Multi-source data integration, warehouses, real-time pipelines",
     "$5,000-30,000", "—", "$5-30K",
     "$5,000", "$50,000", "InData Labs, Neontri, Geniusee",
     "Medium", 4, 3, "Medium",
     "paraguay-supermercados is the proof (5 chains, 50K+ products)",
     "paraguay-supermercados, postgres"],

    [28, "3", "Audit & Strategy", "AI Compliance / Governance Consulting",
     "EU AI Act, Paraguay data law, HIPAA, SOC2 prep",
     "$5,000-20,000", "—", "$5-20K",
     "$5,000", "$50,000", "GAO report findings, EU AI Act consulting",
     "High (specialty)", 4, 3, "Medium",
     "TBD (need to upskill)",
     "—"]
  ];

  // ============= CREATE SHEET =============
  const sheetName = "AI Whisperers — Capabilities & Pricing (2026-06-15)";
  const ss = SpreadsheetApp.create(sheetName);
  const sheet = ss.getActiveSheet();
  sheet.setName("Capabilities");

  // ============= HEADERS =============
  const headers = [
    "#", "Tier", "Category", "Service", "What it is",
    "Setup (USD)", "Recurring", "Our price (summary)",
    "Market low", "Market high", "Market source",
    "Build effort", "Fit (1-5)", "Demand (1-5)", "Revenue potential",
    "Our edge", "Internal proof (repos/skills/VPS)"
  ];

  // Write headers
  const allRows = [headers].concat(services);
  sheet.getRange(1, 1, allRows.length, headers.length).setValues(allRows);

  // ============= FORMATTING =============
  // Header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#0a2540");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 40);

  // Column widths
  sheet.setColumnWidth(1, 30);   // #
  sheet.setColumnWidth(2, 50);   // Tier
  sheet.setColumnWidth(3, 130);  // Category
  sheet.setColumnWidth(4, 220);  // Service
  sheet.setColumnWidth(5, 380);  // What it is
  sheet.setColumnWidth(6, 130);  // Setup
  sheet.setColumnWidth(7, 130);  // Recurring
  sheet.setColumnWidth(8, 220);  // Our price summary
  sheet.setColumnWidth(9, 130);  // Market low
  sheet.setColumnWidth(10, 130); // Market high
  sheet.setColumnWidth(11, 200); // Market source
  sheet.setColumnWidth(12, 130); // Build effort
  sheet.setColumnWidth(13, 80);  // Fit
  sheet.setColumnWidth(14, 100); // Demand
  sheet.setColumnWidth(15, 150); // Revenue potential
  sheet.setColumnWidth(16, 280); // Our edge
  sheet.setColumnWidth(17, 320); // Internal proof

  // Freeze header row + first column
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // Data row formatting
  const dataRange = sheet.getRange(2, 1, services.length, headers.length);
  dataRange.setVerticalAlignment("top");
  dataRange.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  dataRange.setFontSize(10);

  // Tier color coding (entire row tint based on Tier value in column 2)
  for (let i = 0; i < services.length; i++) {
    const tier = services[i][1];
    const row = i + 2; // 1-indexed, +1 for header
    let bg = "#ffffff";
    let tierColor = "#ffffff";
    let tierText = "#000000";
    if (tier === "1") { bg = "#e8f5e9"; tierColor = "#2e7d32"; tierText = "#ffffff"; } // green
    else if (tier === "2") { bg = "#fff8e1"; tierColor = "#f57c00"; tierText = "#ffffff"; } // amber
    else if (tier === "3") { bg = "#fce4ec"; tierColor = "#c2185b"; tierText = "#ffffff"; } // pink

    // Subtle row tint
    sheet.getRange(row, 1, 1, headers.length).setBackground(bg);

    // Tier badge in column 2
    const tierCell = sheet.getRange(row, 2);
    tierCell.setBackground(tierColor);
    tierCell.setFontColor(tierText);
    tierCell.setFontWeight("bold");
    tierCell.setHorizontalAlignment("center");
  }

  // Currency columns right-align + bold
  for (let col of [6, 7, 8, 9, 10]) {
    sheet.getRange(2, col, services.length, 1).setHorizontalAlignment("right");
  }

  // Star columns (Fit, Demand) - center align
  for (let col of [13, 14]) {
    sheet.getRange(2, col, services.length, 1).setHorizontalAlignment("center");
  }

  // ============= SECOND TAB: README =============
  const readmeSheet = ss.insertSheet("README");
  const readme = [
    ["AI Whisperers — Capabilities & Pricing Sales Sheet"],
    [""],
    ["Generated: 2026-06-15 by Erebus"],
    ["Source repo: github.com/Ai-Whisperers/company"],
    ["Internal doc: Company/sales/README.md"],
    [""],
    ["WHAT THIS IS"],
    ["Complete sales sheet with all 28 capabilities, our pricing,"],
    ["market benchmarks, sources, and internal proof points."],
    ["Ready to share with prospects, investors, or partners."],
    [""],
    ["THE 28 CAPABILITIES (grouped by tier)"],
    [""],
    ["Tier 1 — Ship now (11 services, highest ROI)"],
    ["  1. AI Readiness Audit | $500-2,000"],
    ["  2. WhatsApp AI Agent (Paraguay-first) | $1-3K + $300-1K/mo"],
    ["  3. AI Agent for Sales | $5-25K + $500-2K/mo"],
    ["  4. AI Agent for Customer Service | $5-30K + $500-3K/mo"],
    ["  5. AI Workflow Automation (n8n-based) | $2-10K per automation"],
    ["  6. RAG Knowledge Base for Company Docs | $5-15K + $200-1K/mo"],
    ["  7. AI Training Workshops (corporate) | $500-2,500/student"],
    ["  8. AI-Powered Website (SMB) | $500-5,000 build"],
    ["  9. Multi-Tenant SaaS for Vertical | $5-50K + $50-500/mo/tenant"],
    ["  10. AI Integration Sprint (2 weeks) | $5-20K fixed"],
    ["  11. 3D Photorealistic Render (satellite → Blender) | $500-10K/render"],
    [""],
    ["Tier 2 — Next quarter (11 services, strong demand + good fit)"],
    ["  12. AI Agent for HR"],
    ["  13. AI Agent for Finance"],
    ["  14. AI Agent for DevOps/AIOps"],
    ["  15. Predictive Analytics Dashboard"],
    ["  16. Recommendation Engine"],
    ["  17. Document Processing Automation"],
    ["  18. AI Content Generation Pipeline"],
    ["  19. AI Video Generation Service"],
    ["  20. AI Agent for E-commerce"],
    ["  21. Voice AI Agent (Inbound/Outbound)"],
    ["  22. Custom MCP Server"],
    [""],
    ["Tier 3 — Strategic (6 niche/specialty services)"],
    ["  23. AI Cybersecurity Agent"],
    ["  24. Custom Computer Vision"],
    ["  25. Fine-Tuning Service"],
    ["  26. AI Procurement / Vendor Selection"],
    ["  27. Data Engineering / ETL Pipelines"],
    ["  28. AI Compliance / Governance Consulting"],
    [""],
    ["OUR PRICING BENCHMARK vs MARKET"],
    [""],
    ["Service | Our rate | Market low | Market high | Position"],
    ["Web dev | $50/hr | $25/hr (Voypost) | $100/hr (Master of Code) | Mid"],
    ["Custom microservices | $80/hr | $50/hr (Voypost) | $150/hr (Itransition) | Mid"],
    ["AI consulting | $100/session | $100 | $300/hr | Below market"],
    ["AI agent dev | Custom | $50/hr (Maruti) | $200/hr (Neurons Lab) | Below market"],
    ["3D render | $500-10K | $1K | $10K | No competitor (we set price)"],
    ["Multi-tenant SaaS | $10-50K | $50K | $500K | Premium (scarce)"],
    [""],
    ["THE 8 PLACES WE HAVE PRICING POWER (currently underused)"],
    ["1. 3D / satellite visualization — no competitor, we set the price"],
    ["2. Multi-tenant SaaS — high value, premium tier"],
    ["3. AI agent products (WhatsApp etc.) — subscription, recurring revenue"],
    ["4. Workshops / training — $5.5T skills gap = high demand"],
    [""],
    ["THE 4 PLACES WE'RE PRICED BELOW MARKET"],
    ["1. AI consulting ($100/session vs $150-300/hr)"],
    ["2. AI agent development (custom vs $80-200/hr)"],
    ["3. Generative AI integration (custom vs $80-200/hr)"],
    ["4. Data engineering ($80/hr vs $100-150/hr)"],
    [""],
    ["OUR 8 UNIQUE CAPABILITIES (vs 20 competitors)"],
    ["1. Satellite → 3D photorealistic render pipeline"],
    ["2. Open-source 20-pattern agentic AI framework (MIT)"],
    ["3. MCP server for real hardware control"],
    ["4. Multi-tenant SaaS for site generation"],
    ["5. Multi-supermarket data product (50K+ products)"],
    ["6. 4-language production website (es/en/nl/pt)"],
    ["7. Self-hosted Rust + React video LMS"],
    ["8. 42 public repos as proof of work"],
    [""],
    ["INTERNAL PROOF SOURCES"],
    [""],
    ["Repos cited in this sheet (28 capabilities):"],
    ["  - agentic-schemas, agentic-schemas"},
    ["  - paragu-ai-builder, Vete, site-template, Taller_Ocampos"},
    ["  - telescope-ai, mcp-for-deploys, 3-adic-ml"},
    ["  - paraguay-supermercados, Courses-Content, courses-website"},
    ["  - marketing-strategy, education-hooks, Summer-courses"},
    ["  - work-hours-automated-reports, psicologia-ia"},
    [""],
    ["VPS (agentzero) services cited:"],
    ["  - n8n-data, evolution_*, lightrag_data, postgres, loki, prometheus"],
    ["  - monitor_grafana, traefik, hermes-ws, openwebui, portainer"],
    ["  - 42 client websites (depiflash, nexa-paraguay, etc.)"],
    [""],
    ["SKILLS cited (in ~/.hermes/skills/):"],
    ["  - site-data-acquisition, geospatial-site-to-3d-pipeline"],
    ["  - satellite-to-blender-pipeline, blender-mcp"],
    [""],
    ["CONTACT"],
    [""],
    ["WhatsApp: +595 991 501444"],
    ["Email: ai.whisperer.wvdp@gmail.com"],
    ["Web: https://ai-whisperers.org"],
    ["GitHub: https://github.com/Ai-Whisperers"],
    [""],
    ["MAINTAINED BY"],
    [""],
    ["Erebus (AI Workforce Lead)"],
    ["Updated: 2026-06-15"],
    ["Source: Company/sales/README.md in Ai-Whisperers/company"],
  ];
  readmeSheet.getRange(1, 1, readme.length, 1).setValues(readme.map(r => [r[0]]));
  readmeSheet.setColumnWidth(1, 800);
  readmeSheet.getRange(1, 1, 1, 1).setFontSize(16).setFontWeight("bold");
  readmeSheet.getRange(1, 1).setFontColor("#0a2540");

  // ============= THIRD TAB: ICP MAP =============
  const icpSheet = ss.insertSheet("ICP Map");
  icpSheet.getRange(1, 1, 1, 1).setValue("Which services for which ICP");
  icpSheet.getRange(1, 1).setFontSize(16).setFontWeight("bold").setFontColor("#0a2540");

  const icpHeaders = ["#", "Service", "Solo ($500-5K)", "SME ($5K-50K)", "Corp ($25K-500K)", "PYME-PY", "CORP-PY", "GOV-PY"];
  const icpData = [
    [1, "AI Readiness Audit", "✓ free tier", "✓", "✓", "✓", "✓", "✓"],
    [2, "WhatsApp AI Agent", "✓", "✓", "", "✓", "✓", ""],
    [3, "AI Agent for Sales", "", "✓", "✓", "", "✓", ""],
    [4, "AI Agent for Customer Service", "✓", "✓", "✓", "✓", "✓", ""],
    [5, "AI Workflow Automation (n8n)", "", "✓", "✓", "", "✓", ""],
    [6, "RAG Knowledge Base", "", "✓", "✓", "", "✓", "✓"],
    [7, "AI Training Workshops", "✓", "✓", "✓", "", "✓", "✓"],
    [8, "AI-Powered Website (SMB)", "✓", "✓", "", "✓", "✓", ""],
    [9, "Multi-Tenant SaaS for Vertical", "", "✓", "✓", "", "", ""],
    [10, "AI Integration Sprint (2 wks)", "", "✓", "✓", "", "✓", ""],
    [11, "3D Photorealistic Render", "", "✓", "✓", "", "✓", ""],
    [12, "AI Agent for HR", "", "✓", "", "", "✓", ""],
    [13, "AI Agent for Finance", "", "✓", "✓", "", "✓", ""],
    [14, "AI Agent for DevOps/AIOps", "", "✓", "✓", "", "", ""],
    [15, "Predictive Analytics Dashboard", "", "✓", "✓", "", "✓", ""],
    [16, "Recommendation Engine", "", "✓", "", "✓", "✓", ""],
    [17, "Document Processing Automation", "", "✓", "✓", "", "✓", ""],
    [18, "AI Content Generation Pipeline", "✓", "✓", "✓", "✓", "✓", ""],
    [19, "AI Video Generation", "✓", "✓", "✓", "✓", "✓", ""],
    [20, "AI Agent for E-commerce", "", "✓", "", "✓", "✓", ""],
    [21, "Voice AI Agent", "", "✓", "✓", "✓", "✓", ""],
    [22, "Custom MCP Server", "", "", "✓", "", "", "✓"],
    [23, "AI Cybersecurity Agent", "", "", "✓", "", "", "✓"],
    [24, "Custom Computer Vision", "", "✓", "✓", "", "", ""],
    [25, "Fine-Tuning Service", "", "", "✓", "", "", ""],
    [26, "AI Procurement / Vendor Selection", "✓", "✓", "✓", "", "✓", "✓"],
    [27, "Data Engineering / ETL", "", "✓", "✓", "", "✓", ""],
    [28, "AI Compliance / Governance", "", "", "✓", "", "✓", "✓"]
  ];
  const icpAllRows = [icpHeaders].concat(icpData);
  icpSheet.getRange(2, 1, icpAllRows.length, icpHeaders.length).setValues(icpAllRows);
  icpSheet.getRange(2, 1, 1, icpHeaders.length).setBackground("#0a2540").setFontColor("#ffffff").setFontWeight("bold");
  icpSheet.setFrozenRows(2);
  icpSheet.setColumnWidth(1, 30);
  icpSheet.setColumnWidth(2, 280);
  for (let c = 3; c <= 8; c++) icpSheet.setColumnWidth(c, 130);
  icpSheet.getRange(3, 3, icpData.length, 6).setHorizontalAlignment("center");

  // ============= OUTPUT =============
  const url = ss.getUrl();
  Logger.log("========================================");
  Logger.log("AI WHISPERERS SALES SHEET CREATED");
  Logger.log("========================================");
  Logger.log("URL: " + url);
  Logger.log("Name: " + sheetName);
  Logger.log("Tabs: Capabilities, README, ICP Map");
  Logger.log("Rows: 28 capabilities + headers");
  Logger.log("========================================");

  // Make Capabilities the default active sheet
  ss.setActiveSheet(sheet);

  return url;
}
