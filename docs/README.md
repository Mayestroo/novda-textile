# How to Use These Files with AI

This folder contains 6 specification files for your textile company website.
Feed them into any AI (Claude, ChatGPT, Gemini, GitHub Copilot, Cursor, etc.)
to generate production-ready HTML/CSS/JS code.

---

## File Map

| File | Purpose |
|---|---|
| `00-overview.md` | Global design system, colors, fonts, shared components (Navbar, Footer, Buttons) |
| `01-home.md` | Home page (`index.html`) |
| `02-about.md` | About Us page (`about.html`) |
| `03-products.md` | Products page (`products.html`) |
| `04-careers.md` | Careers page (`careers.html`) |
| `05-contact.md` | Contact page (`contact.html`) |

---

## Step-by-Step AI Generation Workflow

### Step 1 — Generate the Global CSS & JS

**Paste this prompt into your AI:**

```
Read the following specification and generate:
1. `css/style.css` — containing all CSS custom properties (design tokens),
   global resets, typography, button styles, navbar, and footer components.
2. `js/main.js` — containing: mobile menu toggle, navbar scroll behavior,
   scroll-triggered fade-in animations, and smooth scroll for anchor links.

[Paste contents of 00-overview.md here]
```

---

### Step 2 — Generate Each Page

Repeat this prompt for each page file:

```
Using the global design system from 00-overview.md, generate a complete,
production-ready HTML file for the following page. Link to css/style.css
and js/main.js. Include the shared Navbar and Footer. Use placeholder
images from picsum.photos as specified.

[Paste contents of 01-home.md here]   ← change file per page
```

**Recommended order:**
1. `01-home.md` → `index.html`
2. `02-about.md` → `about.html`
3. `03-products.md` → `products.html`
4. `04-careers.md` → `careers.html`
5. `05-contact.md` → `contact.html`

---

### Step 3 — Review & Customize

After generating each file, ask the AI to refine specific sections:

```
Examples of follow-up prompts:
- "Make the hero section taller and add a parallax scroll effect"
- "Change the company name from [placeholder] to [Your Brand Name] throughout"
- "Add a WhatsApp floating button in the bottom-right corner on all pages"
- "Replace the placeholder map with an actual Google Maps embed for [address]"
- "Add a cookie consent banner at the bottom"
```

---

## Customization Checklist

Before going live, update these placeholders across all files:

- [ ] **Company name** — replace `[Company Name]` / `[COMPANY NAME]`
- [ ] **Tagline** — update if different from "Woven with precision. Worn with pride."
- [ ] **Address** — replace address fields in Contact page and Footer
- [ ] **Phone number** — replace `+998 XX XXX XX XX`
- [ ] **WhatsApp number** — update wa.me link in Contact page
- [ ] **Email addresses** — update info@, sales@, careers@ addresses
- [ ] **Social media links** — add real LinkedIn, Instagram, Facebook URLs
- [ ] **Founding year** — currently set to 2005
- [ ] **Google Maps embed** — replace placeholder iframe src with real embed URL
- [ ] **Real photos** — swap picsum.photos URLs with your actual factory/product images
- [ ] **Team member names** — update About Us team section
- [ ] **Founder name** — update About Us story section
- [ ] **Certifications** — confirm which certifications you actually hold
- [ ] **Product details** — review and adjust fabric weights, MOQs, lead times
- [ ] **Job roles** — update Careers page to reflect actual open positions

---

## Hosting Options (Free to Low-Cost)

| Platform | Best For | Cost |
|---|---|---|
| **Netlify** | Drag & drop HTML folder upload | Free tier available |
| **Vercel** | GitHub-connected deployment | Free tier available |
| **GitHub Pages** | Simple static hosting | Free |
| **Hostinger** | Domain + hosting bundle | ~$3–5/month |
| **cPanel Hosting** | Traditional web hosting | ~$5–10/month |

---

## Form Backend Options (for Contact Page)

The contact form needs a backend to actually send messages. Options:

| Service | How | Cost |
|---|---|---|
| **Formspree** | Change `<form action="https://formspree.io/f/YOUR_ID">` | Free (50/mo) |
| **Netlify Forms** | Add `netlify` attribute to `<form>` tag | Free (100/mo) |
| **EmailJS** | JS SDK, no backend needed | Free (200/mo) |
| **WhatsApp only** | Remove form, use WhatsApp button instead | Free |

---

## Tips for Best AI Output

1. **Always include `00-overview.md`** in every prompt — it's the design foundation
2. **Generate one page at a time** for better quality output
3. **Ask for mobile-responsive code** explicitly if the AI doesn't include media queries
4. **Review the HTML** before hosting — check all links between pages are correct
5. **Use Claude** for best results with long, detailed specifications like these
