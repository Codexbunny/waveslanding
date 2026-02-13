# Waves Logix Website — Active Version Summary

## 1. Overview

- **Domain:** https://waveslogix.space
- **Entity:** Waves Logix Ltd. (Saint Lucia, Company No. 2025-00384, incorporated 23 May 2025)
- **Positioning:** Independent analytical and advisory firm for Forex, gold, and oil markets using Elliott Wave theory, quantitative research, and automated systems. Non-custodial: no execution, no access to client funds.

---

## 2. Tech Stack

| Layer      | Technology                                                 |
| ---------- | ---------------------------------------------------------- |
| Framework  | Next.js 16.1.1 (App Router, Turbopack)                     |
| React      | 19.2.3                                                     |
| i18n       | next-intl 4.7 (EN / RU)                                    |
| Styling    | Tailwind CSS 4                                             |
| Animations | Framer Motion 12.x, GSAP 3.14 (ScrollTrigger in Hero)      |
| Forms      | react-hook-form, zod, @hookform/resolvers                  |
| Fonts      | Geist Sans, Geist Mono (Google)                            |
| Build      | React Compiler enabled in next.config.ts                   |

---

## 3. Site Structure and Routes

- **Landing** (src/app/page.tsx): Header, Hero, ServiceBlockAccountManagement, ServiceBlockAnalytics, MiniAbout, Partners, Testimonials, ContactForm, Footer.
- **Service pages:** /services/account-management, /services/analytics — full-page layouts with Header/Footer; Analytics has CTA under hero description; both have JSON-LD Service schema.
- **About:** /about/company (business model, methodology, compliance, disclaimer), /about/leadership (Dr. Georg Gershinski).
- **FAQ:** /faq — accordion by category (from src/messages/en.json).
- **Research:** /research (list) + /research/[slug] for posts; slugs: elliott-wave-introduction, forex-market-structure, risk-management-principles.

---

## 4. Main Components (Active)

| Component | Role |
| --------- | ---- |
| Header | Fixed nav, Logo, Services/About dropdowns, Research, FAQ, Contact, LanguageSwitcher, Telegram CTA; mobile menu |
| Logo | SVG: "WAVES" + "LOGIX LTD.", compact wave over W–S, light/dark variant, highlight animation, link to / |
| Hero | Headline + tagline, scroll-driven subheadline/CTA appear–disappear (GSAP); floating spheres (desktop); wave decoration |
| ServiceBlockAccountManagement | Dark block: $300k+ advisory, transparency, payment, CTA to service page |
| ServiceBlockAnalytics | Light block: Advanced Analysis, features grid, CTA to service page |
| MiniAbout | Two columns: about copy + certificate preview (image: /certificates/incorporation.webp), links to About Company / Leadership |
| Partners | Grid: 8 partners, cut-corner cards, staggered entrance, hover; mobile 2-col |
| Testimonials | Testimonial section on landing |
| ContactForm | Form (name, email, phone, message) + Telegram link |
| Footer | Logo (dark), description, Services/About/Contact links, Telegram, company/certificate info |
| CTAButton | Primary/secondary, cut-corner, shimmer; primary adds arrow icon |
| FAQAccordion | Categories, clip-corner container, open state accent bar |
| CursorFollower | Blur dot following cursor with lerp (desktop only); used via ClientProviders in layout |
| Lightbox | Certificate/image fullscreen view |

---

## 5. Internationalization (i18n)

- **Locales:** en, ru (src/i18n/config.ts); default en.
- **Messages:** src/messages/en.json, src/messages/ru.json — all UI, SEO, FAQ, research posts.
- **Usage:** next-intl (getLocale, getMessages in server components; useTranslations in client).
- **Middleware:** src/middleware.ts passes through (no URL locale prefix); locale effectively cookie/session-based.
- **Alternates:** layout and page metadata set languages.en / languages.ru and canonical URLs per page.

---

## 6. Content Highlights (from EN)

- **Hero:** "Where market science meets automated intelligence"; subheadline on Elliott Wave, quantitative research, automated systems; "Not signals. Not speculation."
- **Account Advisory:** $300,000+ capital; full transparency, no custody; performance-based fees; Forex, gold, oil.
- **Advanced Analysis:** Structure, scenarios, levels, macro, risk; for traders, desks, brokerages, asset managers; delivery: reports, annotated charts, updates.
- **Certificate:** Incorporation, Saint Lucia, 2025-00384, 23 May 2025, IBC Act Cap 12.14.
- **Leadership:** Dr. Georg Gershinski, Founder & Managing Director; law + markets background; defines methodology and standards.
- **Research:** Three posts (Elliott Wave intro, Forex structure, risk management) with author, date, read time, category.

---

## 7. SEO and Metadata

- **Root metadata:** src/app/layout.tsx — title template, description, keywords, authors, metadataBase (waveslogix.space), alternates (canonical + languages), Open Graph, Twitter, robots, category.
- **Structured data (layout):** Organization, WebSite, ProfessionalService (JSON-LD).
- **Per-page:** generateMetadata() on analytics, account-management, about/company, faq with title, description, keywords, OG, Twitter, canonical, languages.
- **Sitemap:** src/app/sitemap.ts — static pages + research slugs (baseUrl https://waveslogix.space).
- **Robots:** src/app/robots.ts — allow /, disallow /api/, /_next/, /private/ (baseUrl https://waveslogix.space).

---

## 8. Styling and UX (globals)

- **globals.css:** CSS variables (--background, --purple-500, etc.); html/body overflow and overscroll; gradient-text, liquid-glass, glass-effect; clip-corner, glass-morphism, btn-premium, card-asymmetric, pattern-diagonal, animate-float, animate-pulse-glow, gpu-accelerated, content-auto.
- **Single main scroll:** Sections use overflow visible; double-scroll fix applied.

---

## 9. Public Assets

- **Logos:** public/logo.svg, public/logo-icon.svg.
- **Certificate:** public/certificates/incorporation.webp.
- **Partners:** public/partners/ — bloomberg, cme_group, ice, investingcom, metatrader, oanda, refinitiv, tradingview (PNG).
- **OG:** Layout references /og-image.png (ensure file exists for social previews).

---

## 10. Deployment

- **Hosting:** Vercel (production alias: client-landing-smoky.vercel.app; production domain: waveslogix.space).
- **Repo:** GitHub; pushes to main trigger builds.
- **Build:** next build (Next 16, Turbopack); static + server-rendered routes.

---

## 11. Quick Reference — Files

| Purpose | Path |
| ------- | ---- |
| Landing composition | src/app/page.tsx |
| Root layout + metadata + schemas | src/app/layout.tsx |
| EN copy + SEO + FAQ + research | src/messages/en.json |
| Locales | src/i18n/config.ts |
| Sitemap | src/app/sitemap.ts |
| Robots | src/app/robots.ts |

---

## 12. Domain Migration: waveslogix.com

### Checklist

1. **Vercel:** Go to Project → Settings → Domains. Add `waveslogix.com` (and optionally `www.waveslogix.com`). Vercel will display required DNS records (A / CNAME / TXT for verification).

2. **DNS (at waveslogix.com registrar):** Remove or update existing records that point to the old Hyperspace host. Add the records specified by Vercel. Typical setup:
   - A record `@` → `76.76.21.21` (Vercel)
   - CNAME `www` → `cname.vercel-dns.com`

3. **SSL:** Vercel issues SSL automatically once DNS resolves correctly. No manual action needed.

4. **Codebase canonical switch (after DNS propagates):**
   - `src/app/layout.tsx`: change `metadataBase` to `https://waveslogix.com`, update `alternates.canonical` and `alternates.languages`, update `openGraph.url`.
   - `src/app/sitemap.ts`: change `baseUrl` to `https://waveslogix.com`.
   - `src/app/robots.ts`: change `baseUrl` to `https://waveslogix.com`.
   - All page-level `generateMetadata` with hardcoded canonical URLs: update to `waveslogix.com`.

5. **Redirect (optional):** In Vercel Domains, set `waveslogix.space` → 301 redirect to `waveslogix.com` (or keep both). Pick one canonical domain to avoid duplicate content in search engines.

6. **Verify:** After DNS propagates (up to 48h), confirm:
   - `https://waveslogix.com` serves the site with valid SSL.
   - `https://waveslogix.space` either redirects or is removed.
   - `sitemap.xml` and `robots.txt` reference the canonical domain.
   - Google Search Console: add new property for `waveslogix.com` if applicable.

This is the full summary of the active Waves Logix website as implemented in the current codebase.
