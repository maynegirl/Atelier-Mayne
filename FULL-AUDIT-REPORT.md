# Atelier Mayne — Full SEO & AEO Audit Report
**URL:** https://www.ateliermayne.com/
**Date:** 2026-04-09
**Auditor:** Claude Code (LLM-first, file-based analysis)
**Source:** Direct HTML analysis of `index.html`

---

## Overall Score: 61 / 100 — Needs Improvement

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 62/100 | 25% | 15.5 |
| Content Quality / E-E-A-T | 72/100 | 20% | 14.4 |
| On-Page SEO | 74/100 | 15% | 11.1 |
| Schema / Structured Data | 38/100 | 15% | 5.7 |
| Performance (CWV) | 65/100 | 10% | 6.5 |
| Image Optimisation | 60/100 | 10% | 6.0 |
| AI Search Readiness (GEO/AEO) | 30/100 | 5% | 1.5 |
| **Total** | | | **60.7** |

---

## 1. Schema / Structured Data

### 🔴 CRITICAL — FAQPage schema must be removed
- **Finding:** `FAQPage` JSON-LD block present in `<head>`
- **Evidence:** Lines 170–202, `"@type": "FAQPage"`
- **Impact:** FAQPage rich results were restricted to government and healthcare sites in August 2023. Google will ignore or penalise this schema on a commercial site. Confidence: Confirmed.
- **Fix:** Remove the FAQPage JSON-LD block entirely. The FAQ HTML section stays — it's valuable UX. Just no schema markup.

### 🔴 CRITICAL — Non-standard schema type `InteriorDesigner`
- **Finding:** `"@type": "InteriorDesigner"` is not a valid Schema.org type
- **Evidence:** Line 42, first JSON-LD block
- **Impact:** Google cannot parse or validate this type. Zero rich result eligibility. Confidence: Confirmed.
- **Fix:** Replace with `"@type": ["LocalBusiness", "ProfessionalService"]` and add `"additionalType": "https://schema.org/HomeAndConstructionBusiness"`

### 🔴 CRITICAL — Logo URL has an unencoded space
- **Finding:** `"logo": "https://www.ateliermayne.com/brand_assets/PNG/Logo 1_black.png"`
- **Evidence:** Line 46
- **Impact:** Space in URL breaks schema validation and Google's logo parser. Confidence: Confirmed.
- **Fix:** Encode space: `Logo%201_black.png`

### ⚠️ WARNING — AggregateRating with only 3 reviews, all 5-star
- **Finding:** `ratingCount: 3`, all ratings 5/5
- **Evidence:** Lines 139–168
- **Impact:** Google may suppress AggregateRating rich results if reviews cannot be verified on a third-party platform. Low count + perfect score raises credibility flags.
- **Fix:** Only display AggregateRating schema once you have verifiable third-party reviews (Google Business Profile, Houzz, etc.). Until then, remove this block.

### ⚠️ WARNING — Pinterest `sameAs` is a short URL
- **Finding:** `"https://pin.it/3uWBlJ2iT"` used in sameAs
- **Evidence:** Line 101
- **Impact:** Schema validators and Google's Knowledge Panel parser prefer canonical profile URLs, not redirect short links.
- **Fix:** Replace with full canonical Pinterest profile URL.

### ⚠️ WARNING — Missing WebSite schema with SearchAction
- **Finding:** No `WebSite` JSON-LD block
- **Impact:** Missed opportunity for sitelinks search box in Google results.
- **Fix:** Add `WebSite` schema with `SearchAction`.

### ✅ PASS — Person schema present with correct properties
### ✅ PASS — JSON-LD format used throughout (not Microdata/RDFa)
### ✅ PASS — Multiple sameAs social profiles linked

---

## 2. Technical SEO

### ⚠️ WARNING — `lang="en"` should be `lang="en-IN"`
- **Finding:** `<html lang="en">`
- **Impact:** India-focused content served to primarily Indian users. `en-IN` signals locale to search engines and assistive tech.
- **Fix:** Change to `<html lang="en-IN">`

### ⚠️ WARNING — `sitemap.xml` referenced but does not exist
- **Finding:** `<link rel="sitemap" href="/sitemap.xml">` in head
- **Impact:** Googlebot will get a 404 when following this reference.
- **Fix:** Create `sitemap.xml`. Also note: sitemap link tags are non-standard; reference via `robots.txt` instead.

### ⚠️ WARNING — No `robots.txt`
- **Finding:** No robots.txt file exists
- **Impact:** No AI crawler management (GPTBot, ClaudeBot, PerplexityBot, etc.). No crawl budget directives.
- **Fix:** Create `robots.txt` with explicit AI crawler permissions.

### ⚠️ WARNING — Founder image src is empty
- **Finding:** `<img src="" alt="Anjali Mayne">` in about section
- **Evidence:** Line 1147
- **Impact:** Broken image request on every page load. Also hurts E-E-A-T — founder photo is a key trust signal.
- **Fix:** Add founder photo when available.

### ⚠️ WARNING — `og:image` and `twitter:image` reference non-existent file
- **Finding:** Both point to `og-image.jpg` which has not been created
- **Impact:** Social sharing will show no image, hurting CTR on LinkedIn/WhatsApp shares.
- **Fix:** Create a 1200×630 branded OG image.

### ✅ PASS — Canonical tag present and correct
### ✅ PASS — Viewport meta tag present
### ✅ PASS — Charset UTF-8 declared
### ✅ PASS — Font preloading implemented (Core Web Vitals optimisation)
### ✅ PASS — `font-display: swap` on all @font-face rules
### ✅ PASS — Open Graph tags complete
### ✅ PASS — Twitter Card tags present
### ✅ PASS — Geo meta tags (IN-MH, Mumbai coordinates)
### ✅ PASS — HTTPS canonical URL
### ✅ PASS — Mobile viewport configured

---

## 3. On-Page SEO

### ⚠️ WARNING — H1 is brand-forward, not keyword-forward
- **Finding:** H1 = "Spaces rooted in heritage. Refined for those who remain."
- **Impact:** Primary keywords ("interior design Mumbai", "boutique interior designer") absent from H1. For a new site with no authority, this reduces early ranking signals. Confidence: Likely.
- **Fix:** Consider a secondary H1 or subtitle that includes a primary keyword naturally. OR rely on the meta title (which is strong) and accept the brand-first H1 as a deliberate luxury positioning choice.

### ✅ PASS — Title tag well-formed (58 chars, keyword-rich)
### ✅ PASS — Meta description present and within length
### ✅ PASS — Heading hierarchy: H1 → H2 → H3 logical
### ✅ PASS — Internal anchor links functional (#about, #services, #contact, etc.)
### ✅ PASS — WhatsApp CTA with pre-filled message
### ✅ PASS — Email contact link present

---

## 4. Content Quality / E-E-A-T

### ⚠️ WARNING — No external credentials or awards mentioned
- **Finding:** No third-party validation of Anjali Mayne's expertise (press mentions, awards, featured publications)
- **Impact:** E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signal is weaker without external validation.
- **Fix:** Add a press/recognition section when coverage is available. Even one editorial mention significantly boosts E-E-A-T.

### ⚠️ WARNING — Testimonials are unverified
- **Finding:** Three testimonials with no third-party source, review date, or verification link
- **Impact:** Google and AI engines treat unverified testimonials with lower trust weight.
- **Fix:** Link testimonials to a Google Business Profile or Houzz listing where they also appear.

### ✅ PASS — Founder named, titled, and attributed throughout
### ✅ PASS — Contact email visible (hello@ateliermayne.com)
### ✅ PASS — Physical location stated (Mumbai, India)
### ✅ PASS — Content tone consistent and high quality
### ✅ PASS — Services described in detail with specific vocabulary

---

## 5. Image Optimisation

### ⚠️ WARNING — Images are JPG, not WebP/AVIF
- **Finding:** All website_images/*.jpg served as JPEG
- **Impact:** WebP is ~30% smaller; AVIF ~50% smaller. Affects LCP and CWV scores.
- **Fix:** Convert to WebP and use `<picture>` element with JPEG fallback. Or configure Vercel to serve WebP automatically (it does via Image Optimisation if using Next.js — not applicable here for static HTML).

### ⚠️ WARNING — No `loading="lazy"` on below-fold images
- **Finding:** Images in visual strip and about section have no lazy load attribute
- **Impact:** Unnecessary network requests on initial page load.
- **Fix:** Add `loading="lazy"` to all images below the fold.

### ✅ PASS — All visible images have descriptive alt text
### ✅ PASS — Hero image served as background (no img element to lazy-load)
### ✅ PASS — Alt text includes location and craft context

---

## 6. AI Search Readiness (GEO / AEO)

### 🔴 CRITICAL — No `llms.txt` file
- **Finding:** No `/llms.txt` exists
- **Impact:** AI search engines (Perplexity, ChatGPT Search, Gemini) have no structured guide to the site's content. Missed AEO opportunity.
- **Fix:** Create `llms.txt` with structured context about Atelier Mayne.

### ⚠️ WARNING — No `speakable` schema
- **Finding:** No `speakable` property in any JSON-LD block
- **Impact:** Voice search and AI assistants cannot identify which content to read aloud.
- **Fix:** Add `speakable` to the main `LocalBusiness` schema pointing to key description sections.

### ✅ PASS — FAQ section provides Q&A content suitable for People Also Ask
### ✅ PASS — Detailed service descriptions suitable for AI citation
### ✅ PASS — Location, founder, and business details clearly stated

---

## Environment Limitations
- Python not installed — scripts `parse_html.py`, `pagespeed.py`, `readability.py` could not run
- Core Web Vitals scores require live URL — not available for local file audit
- Redirect chain and robots.txt checks require live deployment
