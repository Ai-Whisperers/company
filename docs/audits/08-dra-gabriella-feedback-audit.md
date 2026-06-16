# Dra. Gabriella — Client Feedback Audit & Content Map (2026-06-15)

> Sonia's response to Ivan (relayed to us) on the dentist project
> review. Maps every point she raised to the current state of
> `apps/dra-gabriela/` and identifies what's missing, what's
> pending on her side, and what I can do without further input.

---

## TL;DR for Ivan

| Sonia asks | Current state | What it means | Who does it |
|---|---|---|---|
| 1. Photos (profile + clinic) | ⏳ Awaiting photos from Sonia. Site has 3 hero `image` paths reserved (`/images/hero/dra-gp-hero-{1,2,3}.jpg`) but no files. About page has no profile photo slot. No clinic photo slots. | Site is built to drop in — just need the images. | **Sonia** (sends photos) + **me** (drop in `public/images/`) |
| 2. Services list | ✅ Complete. 5 service categories, each with title, description, highlights, CTA. Pricing is fully populated (14 categories, reference Gs). | Nothing to add. | **DONE** |
| 3a. WhatsApp Option A (continuous presence) | ⏳ Site is set up to show hours. Current hours in content: Mon-Fri 9-18 + Sat 8-12. The **new Friday-only model with 8:30-11:30 + 15:00-18:00** is NOT yet in the content. | I need the new hours + a decision on display (show all 7 days or just Fridays). | **Sonia** confirms hours + I update `openingHours` + `hero.office_hours_short` |
| 3b. WhatsApp Option B (on-demand via WhatsApp Business) | ⏳ Site has `whatsapp` + `whatsappMessage` fields, but value is `PENDING`. WhatsApp CTA buttons point to a `wa.me/595991501444` placeholder (that's our number, not hers). | Need real number + the WhatsApp Business setup (auto-replies, booking template). | **Sonia** gives number + I update all WA links + Luli can help with WA Business auto-replies |
| 4. Social: personal vs professional | ❓ Ivan's call. Sonia's message says: mix (convert personal to professional, keep audience). | The site has an `instagram` field in `site.json` that's `PENDING`. Once Sonia picks a handle, I link it in nav + footer + IG-specific pages. | **Sonia** decides + gives IG handle → **me** wires it |
| 5. Who handles design — Luli or Quique | ❓ Ivan's call. | Either works. Luli is better for visual identity (Dra. GP's brand). Quique for technical review (already knows the stack). | **Ivan** routes |

---

## What we already have in the dentist site

The site is **complete as a content + design + structure product**.
What's missing is *Sonia's personal data* and *Sonia's images*.

### Pages (all live, 4 locales where applicable, 18/18 routes 200)

```
/, /en, /es                                # home (hero, stats, reasons, services, testimonials, process, CTA)
/en/about, /es/nosotros                    # Dra. GP bio + clinical philosophy (6 points) + credentials
/en/services, /es/servicios                # services index (5 categories + 2 bundles with prices)
/en/pricing, /es/precios                  # 14 service categories with reference prices in PYG
/en/contact, /es/contacto                 # WhatsApp/Email/Phone cards (PENDING values) + hours + map
/en/faq                                    # FAQs by group
/en/second-opinion, /es/segunda-opinion    # second-opinion flow with CTA
/en/expat, /es/expat                       # expat-friendly care
/en/process, /es/process                   # 4-step process + what to bring + cancellation
```

Plus the homepage, which has:
- 3-slide hero (with 3 reserved image paths)
- 5 stat cards (Years, Patients, Languages, Written plans, Restorations)
- 4 reason cards
- Service bundles
- Testimonials (5 anonymized)
- Process preview
- Contact CTA

### Content sections present and complete

| Section | EN | ES | What's there |
|---|---|---|---|
| `site.json` | ✅ | ✅ | site metadata, business info, features flag list, openingHours, trust signals |
| `hero.json` | ✅ | ✅ | 3 slides with image paths, badges, CTAs |
| `stats.json` | ✅ | ✅ | 5 stat cards (real data, not placeholder) |
| `reasons.json` | ✅ | ✅ | 4 reason cards |
| `process.json` | ✅ | ✅ | 4-step process + what to bring + cancellation + guarantee |
| `pricing.json` | ✅ | ✅ | 14 service categories, real reference prices in PYG |
| `services/index.json` | ✅ | ✅ | 5 service categories + 2 bundles with prices |
| `services/categories/*.json` | ✅ | ✅ | One per service: title, description, highlights, CTA |
| `second-opinion.json` | ✅ | ✅ | Dedicated flow |
| `expat.json` | ✅ | ✅ | Expat-friendly care flow |
| `faqs.json` | ✅ | ✅ | FAQ groups |
| `testimonials.json` | ✅ | ✅ | 5 anonymized client stories |
| `blog.json` | ✅ | ✅ | (probably placeholder) |
| `about.json` | ✅ | ✅ | Bio, philosophy, credentials |
| `contact.json` / `contacto.json` | ✅ | ✅ | Contact methods (PENDING values) + hours + address |
| `cta.json` | ✅ | ✅ | CTA copy |
| `ld-*.json` | ✅ | ✅ | JSON-LD structured data (local business, FAQ, reviews) |

### What's *not* complete (requires Sonia's data or actions)

| Field | Current value | Source file | Needed from |
|---|---|---|---|
| Phone | `PENDING  | TBD` | `site.json.business.phone` + `contact.json` + `hero.json` | Sonia |
| WhatsApp number | `PENDING` | `site.json.business.whatsapp` + `contact.json` | Sonia |
| Address (final) | `TBD — Luque preferred (pending lease). Current practice at Odontología 3, Asunción.` | `site.json.business.address` | Sonia (confirm Luque lease or update to current address) |
| RUC | `PENDING | Not registered yet` | `site.json.business.ruc` | Sonia (or "not yet" while pending) |
| MSPBS registration | `PENDING` | `site.json.business.mspbs` | Sonia |
| Hours (new Friday-only model) | `mon-fri 9-18, sat 8-12` (current generic) | `site.json.openingHours` + `hero.json.office_hours_short` + `top_bar.hours` | Sonia (the new schedule: Friday 8:30-11:30 + 15:00-18:00) |
| Instagram handle | `PENDING` | `site.json.site.instagram` | Sonia |
| Photo: profile / Dra. GP | (no slot, needs adding) | `public/images/about/dra-gp-profile.{jpg,webp}` + page wiring | Sonia (send photo, ideally 1:1, professional) |
| Photos: clinic exterior + interior | (no slots) | `public/images/clinic/{exterior,interior,consultorio-reception,consultorio-1,consultorio-2}.{jpg,webp}` + page wiring | Sonia (3-5 photos, 16:9 landscape) |
| Logo (optional but recommended) | (no logo slot) | `public/images/logo/dra-gp-logo.svg` + Navbar wiring | Optional, can use text-only for now |
| WhatsApp Business auto-replies | (not set up) | Outside site — WhatsApp Business account | Sonia + Luli |

### What I can do RIGHT NOW without further input

If you want progress before Sonia replies, I can:

1. **Update the openingHours placeholder** in `content/{en,es}/site.json` to show a "Friday-only" badge with the schedule she mentioned (08:30-11:30 + 15:00-18:00) marked as "Fridays only" so visitors see the correct hours immediately.
2. **Update the hero `office_hours_short`** from "Mon–Fri 9–18 | Sat 8–12" to "Fri 08:30-11:30 + 15:00-18:00 (by appointment)" so the new model is visible from the first scroll.
3. **Add a banner at the top of the home page** ("Now accepting Friday appointments for July — book via WhatsApp") so when the site goes public, the message is clear.
4. **Add image-upload drop zones** in the about + contact pages that show a placeholder with the correct aspect ratio, so once Sonia sends photos we can drop them in without re-coding.
5. **Set up a Google Maps embed** in the contact page for Odontología 3, Asunción (or wherever Sonia confirms), with the address and the parking/transport info she provides.
6. **Add a "Reserve your Friday slot" form** (or a WhatsApp deep link with a pre-filled message) so Sonia can hand out a single URL that opens WhatsApp with a ready-to-send booking message in the right language.
7. **Wire the Instagram handle** in nav + footer + JSON-LD `sameAs` once Sonia picks one (5-min PR).
8. **Set up Cloudflare email routing** for `hola@dra-gp.com.py` if she's not using Gmail (free tier, 5-min setup).

---

## Recommendation summary (what I'd do, in order)

**This week (no input needed from Sonia):**
1. ✅ Update openingHours + hero.office_hours_short to reflect the Friday-only July model. Visible to public immediately. (15 min)
2. ✅ Add a "Now accepting July Friday appointments" banner on the home page. (10 min)
3. ✅ Add image drop zones with aspect-ratio-correct placeholders. (30 min)
4. ✅ Add a "Book on WhatsApp" deep-link button with a pre-filled Spanish + English message. (10 min)
5. ✅ Add a Google Maps embed for Odontología 3, Asunción. (15 min)
6. ✅ Wire WhatsApp CTA everywhere to `wa.me/595991501444?text=...` placeholder (will update to her real number later). (5 min)

**When Sonia replies (1 round trip, ~30 min work each):**
7. Update phone + WhatsApp number across all content files
8. Add her profile photo to /about and hero
9. Add clinic photos to /en/about (or new /en/visit section)
10. Add MSPBS / RUC numbers (or remove the field entirely if not needed publicly)
11. Wire her Instagram handle

**For the WhatsApp Business account setup** — this is the part that needs Luli or someone who's done it before. The site can deep-link to a number, but the auto-reply template ("Hola, soy Sonia. Te respondo los viernes de 8:30 a 11:30 y de 15:00 a 18:00. ¿En qué te puedo ayudar?") is set up in WhatsApp Business, not on the site. We can write the template copy; Luli can help her configure the account.

**For Instagram** — the recommendation in her message is correct (convert personal to professional, keep audience). This is her call, not ours. The site will reflect whatever handle she gives us.

---

## What I'm NOT going to do without explicit go-ahead

- Replace the placeholder WhatsApp number with a guessed number — must come from her
- Use a stock photo of "a woman dentist" for the profile — would be dishonest and break the trust signal the site is built around
- Ship the site to public DNS without the PENDING fields resolved — better to launch in "preview" mode (dragabriela.paragu-ai.com only) until her data is in

---

## Bottom line

The site is **ready to launch structurally**. What blocks public launch:

1. **Sonia's data** (phone, WhatsApp, hours-confirmed, address, RUC/MSPBS if she wants them public, IG handle, photos) — all pending her
2. **A "go" on the social/marketing direction** (Luli vs Quique for design) — Ivan's call

Neither blocks me from continuing to harden the site. I can keep making it better until Sonia replies.

---

## Files I can touch immediately (waiting for your green light)

- `apps/dra-gabriela/content/{en,es}/site.json` — openingHours + office_hours_short + instagram
- `apps/dra-gabriela/content/{en,es}/hero.json` — hours + July banner copy
- `apps/dra-gabriela/content/{en,es}/contact.json` / `contacto.json` — address, default WhatsApp message
- `apps/dra-gabriela/app/[lang]/contact/page.tsx` — add Google Maps embed
- `apps/dra-gabriela/app/[lang]/page.tsx` — add July banner at top
- `apps/dra-gabriela/app/[lang]/about/page.tsx` — add profile + clinic image drop zones
- `apps/dra-gabriela/public/images/` — new directories for Sonia's photos
- `apps/dra-gabriela/components/` — add a Banner component if needed

Just say "go" and I'll ship the 6 pre-launch improvements in the next session.
