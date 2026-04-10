# Atelier Mayne — Full SEO/AEO Audit Report
**URL:** https://www.ateliermayne.com  
**Audit Date:** April 10, 2026  
**Auditor:** Claude Code + /seo skill (LLM-first, evidence-backed)  
**Overall Score: 75 / 100 — Good**

---

## Score Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 78/100 | 19.5 |
| Content Quality / E-E-A-T | 20% | 80/100 | 16.0 |
| On-Page SEO | 15% | 72/100 | 10.8 |
| Schema / Structured Data | 15% | 78/100 | 11.7 |
| Performance (CWV) | 10% | 65/100 | 6.5 |
| Image Optimization | 10% | 60/100 | 6.0 |
| AI Search Readiness (GEO/AEO) | 5% | 90/100 | 4.5 |
| **TOTAL** | **100%** | | **75.0 / 100** |

---

## Summary of Findings

| Severity | Count |
|---|---|
| 🔴 Critical | 3 |
| ⚠️ Warning | 7 |
| ✅ Pass | 18 |
| ℹ️ Info | 3 |

---

## 1. Technical SEO — 78/100

### ✅ Passing

| Element | Value |
|---|---|
| Title Tag | `Atelier Mayne — Boutique Interior Design Studio, Mumbai` (52 chars) |
| Meta Description | Present, 158 chars, keyword-rich, descriptive |
| Canonical URL | `https://www.ateliermayne.com` — correctly set |
| Lang Attribute | `en-IN` — correct for Indian English |
| Viewport Meta | Present |
| robots.txt | Present, all crawlers allowed |
| Sitemap | Present, linked in robots.txt, priority 1.0, lastmod Apr 9 2026 |
| HTTPS | Live and serving over HTTPS |
| Mobile Responsive | Confirmed — breakpoints at 1100px, 960px, 680px, 480px |
| Domain Live | GoDaddy connected to Vercel — www.ateliermayne.com resolving correctly |

### ⚠️ Warnings

**Multiple H1 Tags**
- Finding: The page uses H1 for section titles across the entire single-page layout (e.g. "The Practice", "What We Offer", "In their words", "Before You Write" — all H1).
- Evidence: WebFetch extracted 10+ H1 tags from one page.
- Impact: Google prefers a single H1 per document as the primary topic signal. Multiple H1s dilute the signal and can confuse crawlers on the page's primary subject.
- Fix: Demote all section title H1s to H2. Reserve H1 solely for the hero headline: "Designed to feel discovered, not built."

**privacy.html Missing SEO Metadata**
- Finding: privacy.html has no title tag, meta description, or canonical URL.
- Evidence: WebFetch returned "Not explicitly provided" for all three on privacy.html.
- Impact: The page is indexable but will appear as an untitled result in SERPs. Duplicate content risk if canonical is absent.
- Fix: Add `<title>Atelier Mayne — Privacy Policy & Terms of Use</title>`, meta description, and `<link rel="canonical" href="https://www.ateliermayne.com/privacy.html">`.

**privacy.html Not in Sitemap**
- Finding: sitemap.xml contains only the homepage URL.
- Evidence: Sitemap returned a single `<url>` entry for `https://www.ateliermayne.com/`.
- Impact: Crawlers may take longer to discover privacy.html; no lastmod signal for the page.
- Fix: Add `https://www.ateliermayne.com/privacy.html` to sitemap.xml with priority 0.3 and changefreq yearly.

---

## 2. Content Quality / E-E-A-T — 80/100

### ✅ Passing

| Signal | Status |
|---|---|
| Named founder with title and credentials | ✅ Anjali Mayne — Architect & Interior Designer |
| Founder photo | ✅ Present with descriptive alt text |
| Physical location specified | ✅ Mumbai, Maharashtra, India |
| Contact information | ✅ Email, phone, WhatsApp |
| Named real-world clients | ✅ 3 testimonials with full names, professions, locations |
| Service descriptions | ✅ Specific, detailed, non-generic |
| Years in practice | ✅ "5 Years in Practice" |
| Project count | ✅ "60+ Residences Designed" |
| Unique editorial voice | ✅ Consistent luxury tone throughout |
| Legal pages | ✅ Privacy Policy + Terms of Use (DPDP Act 2023 compliant) |

### ⚠️ Warnings

**No Press, Awards, or Professional Associations**
- Finding: No mentions of media features, industry awards, or body memberships (e.g. Institute of Indian Interior Designers).
- Impact: E-E-A-T for competitive luxury queries benefits from third-party validation signals.
- Fix: Add any press features, award recognitions, or professional memberships to the about section or footer when available.

---

## 3. On-Page SEO — 72/100

### ✅ Passing

| Element | Status |
|---|---|
| Title tag optimised | ✅ Studio name + category + location |
| Meta description | ✅ Includes brand, founder, specialisms, location |
| Primary H1 | ✅ "Designed to feel discovered, not built." |
| Internal linking | ✅ Nav + footer link all key sections |
| Footer nav | ✅ Complete with Privacy Policy link |
| Social profiles linked | ✅ Instagram, Pinterest, LinkedIn |
| WhatsApp CTA | ✅ Float button present |
| FAQ section | ✅ 4 questions with detailed answers |

### ⚠️ Warnings

**Monogram Image Missing Alt Text**
- Finding: `Logo 4 (monogram)_white.png` (used as hero watermark) has no alt attribute.
- Evidence: WebFetch returned "(none provided)" for this image.
- Impact: Minor accessibility and image SEO signal gap.
- Fix: Add `alt="Atelier Mayne monogram"`.

**Pinterest Link is a Short URL**
- Finding: Pinterest link uses `pin.it/3uWBlJ2iT` (short redirect) rather than the canonical `https://www.pinterest.com/ateliermayne/`.
- Impact: Short URLs obscure destination and reduce trust signals for crawlers.
- Fix: Replace with the full canonical Pinterest URL.

---

## 4. Schema / Structured Data — 78/100

### ✅ Passing

| Schema Type | Status | Notes |
|---|---|---|
| LocalBusiness + ProfessionalService | ✅ | Dual type — correct for a design studio |
| WebSite | ✅ | Correct canonical URL |
| Person | ✅ | Anjali Mayne with jobTitle and affiliation |
| speakable | ✅ | Present — helps AI assistants surface key content |
| Geo coordinates | ✅ | Mumbai lat/lng included |
| priceRange | ✅ | ₹₹₹₹ included |
| FAQPage schema | ✅ ABSENT | Correctly excluded — restricted to gov/healthcare since Aug 2023 |

### ⚠️ Warnings

**No Review / AggregateRating Schema**
- Finding: Three named testimonials present in HTML but not marked up with Review or AggregateRating schema.
- Impact: Google cannot surface star ratings or review snippets in SERPs — a high-visibility SERP enhancement.
- Fix: Add AggregateRating to the LocalBusiness schema (minimum 3 reviews — already met by testimonials).

---

## 5. Performance / Core Web Vitals — 65/100

> Python unavailable in this environment — CWV scores not measured via PageSpeed API. Assessment is code-review based.

### ✅ Passing

| Element | Status |
|---|---|
| Lazy loading (below-fold images) | ✅ `loading="lazy"` on all below-fold images |
| No render-blocking scripts in `<head>` | ✅ |
| Mobile-first layout | ✅ |

### ⚠️ Warnings

**No Hero Image Preload**
- Finding: `website_images/1.jpg` (hero background, above-fold LCP candidate) has no `<link rel="preload">` in `<head>`.
- Impact: LCP score at risk — browser must discover and download the image after parsing the CSS.
- Fix: Add `<link rel="preload" as="image" href="website_images/1.jpg">` to `<head>`.

**Images Served as JPG/PNG — No WebP**
- Finding: All portfolio images are JPEG/PNG with no WebP alternative.
- Impact: WebP offers ~30% smaller file sizes at equivalent quality, improving LCP and overall load time.
- Fix: Convert to WebP and serve via `<picture>` with JPEG fallback, or enable Vercel Image Optimisation.

---

## 6. Image Optimization — 60/100

| Image | Alt Text | Format | Lazy Load |
|---|---|---|---|
| Logo 3_white.png | "Atelier Mayne" | PNG | N/A (above fold) |
| Logo 3_black.png | "Atelier Mayne" | PNG | N/A (above fold) |
| Logo 4 monogram_white.png | ❌ Missing | PNG | — |
| website_images/6.jpg | "Curated interior space — Atelier Mayne" | JPG | ✅ |
| founder_photo.jpeg | "Anjali Mayne — Founder & Principal Designer, Atelier Mayne" | JPG | ✅ |
| website_images/3.jpg | "Cane and teak living space" | JPG | ✅ |
| website_images/4.jpg | "Light-filled interior with arched window" | JPG | ✅ |
| website_images/2.jpg | "Hand-carved craft chairs with Warli inlay" | JPG | ✅ |

**Issues:** Monogram missing alt; all images in JPG/PNG (no WebP); no explicit width/height attributes (CLS risk).

---

## 7. AI Search Readiness (GEO/AEO) — 90/100

### ✅ Passing — Best-in-class for a boutique studio site

| Signal | Status |
|---|---|
| llms.txt | ✅ Present with full business context |
| AI crawler whitelist in robots.txt | ✅ GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot |
| speakable schema | ✅ Implemented |
| Clear entity definition | ✅ Anjali Mayne / Atelier Mayne well-defined in schema and copy |
| FAQ section (natural language) | ✅ 4 detailed Q&As on page |
| Business facts easily extractable | ✅ Location, contact, services all in structured schema |
| llms.txt FAQ content | ✅ Business context, services, philosophy |

### 🔴 Critical

**og:image Returns 404**
- Finding: Schema and og:image tag reference `https://www.ateliermayne.com/og-image.jpg` — file does not exist.
- Evidence: Direct URL fetch returned HTTP 404.
- Impact: Social shares on LinkedIn, Facebook, WhatsApp, iMessage, and X render with no preview image — significantly reducing click-through from social. Also affects AI knowledge graph image association.
- Fix: Create a 1200×630px branded image and deploy as `og-image.jpg` in the Website Build root.

**Missing Open Graph Tags (og:title, og:description, og:type, og:url)**
- Finding: Only og:image is referenced. Core OG tags (title, description, type, url) are absent.
- Impact: Social platforms fall back to page title/description heuristics — unpredictable rendering on shares.
- Fix: Add the full OG tag set to `<head>`.

**Missing Twitter Card Tags**
- Finding: No `twitter:card`, `twitter:title`, `twitter:description`, or `twitter:image` meta tags.
- Impact: Shares on X/Twitter render without a card — significantly lower engagement than a summary_large_image card.
- Fix: Add Twitter card meta tags to `<head>`.

---

## What's Working Well

1. **Domain live** — www.ateliermayne.com fully resolving via Vercel + HTTPS
2. **Three-schema structured data** — LocalBusiness+ProfessionalService, WebSite, Person — correct and comprehensive
3. **AI readiness is best-in-class** — llms.txt + full AI crawler whitelist ahead of most competitors
4. **E-E-A-T signals strong** — named founder with photo and credentials, real client names with professions and locations
5. **Legal pages** — DPDP-compliant Privacy Policy + India-specific Terms of Use add trust signals
6. **robots.txt + sitemap** correctly linked, configured, and discoverable
7. **Contact form** fully integrated with Google Sheet and email notification

---

*Audit conducted via LLM-first analysis on live domain. CWV scores require PageSpeed API run (Python environment needed).*
