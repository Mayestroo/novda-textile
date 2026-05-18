# Textile Co. — Website Specification Overview

## Brand Identity

**Company Name:** (Replace with your brand name, e.g. "ThreadCraft" or "FabriCore")
**Tagline:** "Woven with precision. Worn with pride."
**Industry:** Garment & Textile Manufacturing
**Products:** T-shirts, Panties, Tops, Underwear, Basic Apparel
**Tone:** Professional, warm, trustworthy, quality-focused
**Target Audience:** B2B buyers, retailers, wholesale partners, job seekers

---

## Website Structure

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Brand intro, hero, highlights |
| About Us | `about.html` | Story, values, factory, team |
| Products | `products.html` | Catalog overview (non-ecommerce) |
| Careers | `careers.html` | Open roles, culture, benefits |
| Contact | `contact.html` | Inquiry form, map, social links |

---

## Design System

### Color Palette
```css
--color-primary:     #1A1A2E;   /* Deep navy — authority & trust */
--color-secondary:   #E94560;   /* Warm red — energy & passion */
--color-accent:      #F5A623;   /* Amber gold — quality & craft */
--color-background:  #F9F6F1;   /* Warm off-white — fabric feel */
--color-surface:     #FFFFFF;   /* Pure white */
--color-text:        #2C2C3E;   /* Near-black text */
--color-text-muted:  #7A7A8C;   /* Secondary text */
--color-border:      #E2DDD6;   /* Soft border */
```

### Typography
```css
/* Display / Headings */
font-family: 'Playfair Display', Georgia, serif;

/* Body / UI */
font-family: 'DM Sans', 'Helvetica Neue', sans-serif;

/* Accent / Labels */
font-family: 'DM Mono', monospace;
```
> Import from Google Fonts: `Playfair+Display:wght@400;700;900` + `DM+Sans:wght@300;400;500;600` + `DM+Mono:wght@400`

### Spacing Scale
```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   48px
2xl:  80px
3xl:  120px
```

### Border Radius
```
sm:   4px
md:   8px
lg:   16px
pill: 9999px
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(26,26,46,0.08);
--shadow-md: 0 8px 32px rgba(26,26,46,0.12);
--shadow-lg: 0 20px 60px rgba(26,26,46,0.16);
```

---

## Shared Components

### Navigation Bar
- Fixed top, background: `--color-primary` with subtle blur on scroll
- Logo left (SVG or text mark), nav links center, CTA button right
- Links: Home · About Us · Products · Careers · Contact
- CTA button: "Get a Quote" → links to Contact page
- Mobile: hamburger menu with full-screen overlay
- Active link underlined with `--color-secondary`

### Footer
- 3-column layout: Logo + tagline | Quick links | Contact info + socials
- Background: `--color-primary`, text: white
- Bottom bar: copyright + "Made with craft & care"
- Social icons: LinkedIn, Instagram, WhatsApp

### Button Styles
```css
/* Primary */
.btn-primary {
  background: var(--color-secondary);
  color: white;
  padding: 14px 32px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Outline */
.btn-outline {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
  /* same padding & radius */
}
```

---

## Global Technical Requirements

- **Pure HTML + CSS + Vanilla JS** (no framework required)
- Fully responsive: mobile-first, breakpoints at 768px and 1200px
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on interactive elements
- Smooth scroll behavior: `scroll-behavior: smooth`
- Page transitions: subtle fade-in on load (`opacity 0→1, translateY 20px→0, 0.6s ease`)
- Image placeholders: use `https://picsum.photos/seed/{keyword}/{w}/{h}` for dev
- Google Fonts loaded in `<head>` via `<link rel="preconnect">`
- Meta tags: `viewport`, `description`, `og:title`, `og:description`

---

## File List to Generate

```
/
├── index.html          ← Home page
├── about.html          ← About Us
├── products.html       ← Products
├── careers.html        ← Careers
├── contact.html        ← Contact
├── css/
│   └── style.css       ← Global styles (design tokens + shared components)
└── js/
    └── main.js         ← Shared JS (navbar scroll, mobile menu, animations)
```

---

## AI Generation Instructions

When generating each page:
1. Always link `css/style.css` and `js/main.js`
2. Include the shared Navbar and Footer components
3. Follow the color palette and typography defined above
4. Use the placeholder image URLs during development
5. Each page has its own `.md` spec — read that file for page-specific content and sections
6. Maintain consistent spacing and component patterns across all pages
