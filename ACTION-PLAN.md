# Atelier Mayne — SEO/AEO Action Plan
**Based on:** Full Audit — April 10, 2026  
**Current Score:** 75/100  
**Target Score:** 88/100

---

## 🔴 Critical — Fix Immediately (Estimated gain: +6 pts)

### 1. Create og-image.jpg
- **What:** 1200×630px branded social share image
- **Why:** og:image URL is live in code but file returns 404 — all social shares render with no preview
- **How:** Design a 1200×630px image (hero photo + logo overlay + studio name), save as `og-image.jpg` in `Website Build/`, push to GitHub
- **Impact:** Fixes social previews on LinkedIn, Facebook, WhatsApp, iMessage, X

### 2. Add Full Open Graph Tags
- **What:** Add og:title, og:description, og:type, og:url to `<head>` of index.html
- **Why:** Only og:image is present — social platforms use heuristics as fallback, resulting in unpredictable card rendering
- **How:**
```html
<meta property="og:title" content="Atelier Mayne — Boutique Interior Design Studio, Mumbai" />
<meta property="og:description" content="A bespoke interiors practice drawing from the depth of Indian craft tradition — creating spaces of quiet authority for a discerning few." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.ateliermayne.com" />
<meta property="og:image" content="https://www.ateliermayne.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### 3. Add Twitter Card Tags
- **What:** Add twitter:card, title, description, image to `<head>` of index.html
- **Why:** No Twitter card tags — shares on X render as plain links with no engagement
- **How:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Atelier Mayne — Boutique Interior Design Studio, Mumbai" />
<meta name="twitter:description" content="A bespoke interiors practice drawing from the depth of Indian craft tradition." />
<meta name="twitter:image" content="https://www.ateliermayne.com/og-image.jpg" />
```

---

## ⚠️ Warnings — Fix Within 2 Weeks (Estimated gain: +5 pts)

### 4. Fix H1 Tag Structure
- **What:** Demote all section-level H1s to H2 throughout index.html
- **Why:** 10+ H1 tags dilute the primary topic signal Google uses for ranking
- **Sections to demote:** "The Practice", "Rooted in tradition", "The World We Draw From", "What We Offer", "Our services", "How We Work", "The process", "Client Voices", "In their words", "Before You Write", "A few things worth knowing", "Begin a Commission", "Let us create a space that remains"
- **Keep as H1:** Only "Designed to feel discovered, not built."

### 5. Add Meta Tags to privacy.html
- **What:** Add title, meta description, and canonical to privacy.html `<head>`
- **How:**
```html
<title>Privacy Policy & Terms of Use — Atelier Mayne</title>
<meta name="description" content="Atelier Mayne's Privacy Policy (DPDP Act 2023) and Terms of Use, governing the use of our website and interior design services. Mumbai, India." />
<link rel="canonical" href="https://www.ateliermayne.com/privacy.html" />
```

### 6. Add privacy.html to sitemap.xml
- **What:** Add second `<url>` entry for privacy.html
- **How:**
```xml
<url>
  <loc>https://www.ateliermayne.com/privacy.html</loc>
  <lastmod>2026-04-10</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.3</priority>
</url>
```

### 7. Add Monogram Alt Text
- **What:** Add `alt="Atelier Mayne monogram"` to the Logo 4 monogram image in index.html
- **Why:** Missing alt text is an accessibility violation and minor image SEO gap

### 8. Fix Pinterest Short URL
- **What:** Replace `pin.it/3uWBlJ2iT` with `https://www.pinterest.com/ateliermayne/` in index.html, privacy.html, and llms.txt
- **Why:** Short URLs reduce crawler trust signals

### 9. Add Hero Image Preload
- **What:** Add `<link rel="preload" as="image" href="website_images/1.jpg">` to `<head>`
- **Why:** Hero background is the LCP element — preloading it reduces LCP time

---

## ℹ️ Medium Term — Within 1 Month (Estimated gain: +4 pts)

### 10. Add AggregateRating Schema
- **What:** Add AggregateRating block to the LocalBusiness schema
- **Why:** Enables star rating display in SERPs — high CTR impact
- **How (add inside LocalBusiness schema):**
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "3",
  "bestRating": "5"
}
```

### 11. Convert Portfolio Images to WebP
- **What:** Convert website_images/1-6.jpg and founder_photo.jpeg to WebP
- **Why:** ~30% file size reduction — improves LCP and overall load performance
- **How:** Use Squoosh (squoosh.app — free), save as `.webp`, serve via `<picture>` element with JPEG fallback

### 12. Add Width/Height to All Images
- **What:** Add explicit `width` and `height` attributes to all `<img>` tags
- **Why:** Prevents Cumulative Layout Shift (CLS) — a Core Web Vitals metric

---

## 🏆 Longer Term — As Business Grows

### 13. Earn E-E-A-T Signals
- Get listed in India Design Council, Institute of Indian Interior Designers, or similar bodies
- Seek press coverage from Architectural Digest India, Elle Decor India, Vogue Living India
- Add any media mentions, award logos, or association badges to the website

### 14. Add Individual Portfolio/Project Pages
- Create dedicated pages for completed projects (e.g. `/projects/chatterjee-residence`)
- Add BreadcrumbList schema when multi-page structure is in place
- Each page becomes an independent SEO asset that can rank for location + style queries

### 15. Set Up Google Business Profile
- Register at google.com/business with Mumbai address, phone, and website
- Add photos of work, services, and founder
- Request reviews from clients (Chatterjee, Karak, Roy are already satisfied clients)
- Critical for local search: "interior designer Mumbai", "luxury interior design Mumbai"

---

## Score Projection

| Milestone | Score |
|---|---|
| Current | 75/100 |
| After Criticals (#1–3) | ~81/100 |
| After Warnings (#4–9) | ~86/100 |
| After Medium Term (#10–12) | ~90/100 |
