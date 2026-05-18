# Page: Home (`index.html`)

> Read `00-overview.md` first for the global design system, components, and technical requirements.

---

## Page Goal
Create a strong first impression that communicates quality, scale, and trustworthiness. Visitors should immediately understand: *"This is a serious textile manufacturer I can partner with."*

---

## Sections (in order)

---

### 1. Hero Section

**Layout:** Full-viewport-height (`100vh`), split layout — left text, right image  
**Background:** `--color-primary` (deep navy) on left half; large fabric/textile photo on right half

**Content:**
```
Eyebrow label (small caps, --color-secondary):
  "EST. 2005 · TASHKENT, UZBEKISTAN"

H1 Heading (Playfair Display, white, 72px desktop / 40px mobile):
  "Crafting Quality
   From Thread
   To Wardrobe."

Subtext (DM Sans, white 70% opacity, 18px, max-width 480px):
  "We manufacture premium T-shirts, tops, and intimate apparel
   for brands and retailers worldwide. Built on precision,
   delivered with care."

CTA Buttons (flex row, gap 16px):
  [Explore Products]  → /products.html   (btn-primary)
  [About Our Factory] → /about.html      (btn-outline, white border)
```

**Stats Row** (bottom of hero, horizontal bar, dark overlay):
```
| 1,000,000+ | 18+ Years | 30+ Countries | 500+ Staff |
  Units/Month   Experience   Export Markets   Employees
```
Each stat: large number in `--color-accent` (Playfair Display 48px), label below in white 60% opacity

**Image:** `https://picsum.photos/seed/textile/900/1080` (right panel, cover fit)

**Animation:**
- Text slides in from left (translateX -40px → 0, opacity 0→1, 0.8s)
- Image scales in subtly (scale 1.05→1, 1.2s ease)
- Stats fade up with 0.2s stagger per item

---

### 2. Product Highlights Section

**Layout:** Full-width section, `--color-background`  
**Title:**
```
Eyebrow: "WHAT WE MAKE"
H2: "From Basics to Bestsellers"
Subtitle: "Every item crafted with consistent quality standards, ready for your label."
```

**Product Cards Grid:** 2 columns desktop, 1 column mobile  
Each card is a large horizontal card (image left, text right):

| # | Product | Description | Image seed |
|---|---|---|---|
| 1 | T-Shirts | Classic and fashion-fit tees in 180–220gsm cotton blends. Available in crew, V-neck, and polo styles with custom printing options. | `tshirt` |
| 2 | Tops & Blouses | Lightweight woven and knit tops for women's and kids' lines. Wide range of cuts, fabrics, and finishes. | `fabric` |
| 3 | Panties & Underwear | Soft-touch cotton, modal, and microfiber intimate wear. Seamless and cut-&-sew options available. | `cotton` |
| 4 | Sportswear | Moisture-wicking performance basics including tank tops, leggings liners, and training tees. | `sportswear` |

**Card design:**
- White background, `--shadow-sm`, border-radius `--radius-lg`
- Hover: lift effect (`translateY -4px`, `--shadow-md`)
- "Learn More →" link in `--color-secondary` at card bottom

**Section CTA:**
```
Centered below grid:
[View All Products] → /products.html  (btn-primary)
```

---

### 3. Why Choose Us Section

**Layout:** Dark background (`--color-primary`), full width, centered content  
**Title:**
```
Eyebrow: "OUR STRENGTHS"
H2: "Why Brands Trust Us" (white)
```

**Feature Grid:** 3 columns desktop, 1 column mobile  
Icon + title + text cards (icon in `--color-accent`):

| Icon (emoji or SVG) | Title | Description |
|---|---|---|
| 🏭 | In-House Production | End-to-end manufacturing under one roof — from cutting to quality inspection to packing. |
| 🌿 | Sustainable Materials | We source certified organic cotton and recycled fibers to reduce environmental impact. |
| ✅ | Quality Assured | ISO-compliant processes with multi-stage QC checks before every shipment. |
| 🚀 | Fast Turnaround | Standard lead times of 30–45 days. Rush production available for urgent orders. |
| 📦 | Custom Labeling | Private label, hang tags, woven labels, and packaging tailored to your brand. |
| 🌍 | Global Export | Shipping to 30+ countries with experience navigating international compliance. |

**Card style:** Transparent cards with `1px solid rgba(255,255,255,0.1)` border, subtle glow on hover

---

### 4. Process / How We Work Section

**Layout:** `--color-background`, numbered step flow (horizontal timeline desktop, vertical mobile)  
**Title:**
```
Eyebrow: "THE PROCESS"
H2: "From Inquiry to Delivery"
```

**Steps:**
```
① Inquiry & Consultation
  Share your specs, quantities, and timeline. We respond within 24 hours.

② Sampling
  We produce a pre-production sample for your approval at no extra charge.

③ Production
  Full-scale manufacturing with real-time progress updates.

④ Quality Control
  Every batch goes through our 12-point inspection checklist.

⑤ Packaging & Shipping
  Custom packaging and reliable logistics to your destination.
```

**Design:** Step number in large Playfair Display (80px, `--color-secondary` at 20% opacity as background digit), title + text overlay on top. Connecting line between steps.

---

### 5. Testimonials / Social Proof Section

**Layout:** Off-white, 3-column cards  
**Title:**
```
H2: "What Our Partners Say"
```

**3 Testimonial Cards:**

> Card 1  
> *"ThreadCraft has been our go-to manufacturer for 5 years. Consistent quality and on-time delivery every season."*  
> — **Maria L.**, Sourcing Manager, EU Fashion Brand

> Card 2  
> *"Their sampling process is the fastest we've worked with. New products go from sketch to sample in under 2 weeks."*  
> — **James T.**, Founder, Australian Sportswear Label

> Card 3  
> *"Private label packaging was flawless. Our customers had no idea it was outsourced — that's the level of quality we needed."*  
> — **Sara K.**, Retail Buyer, Gulf Region

**Card design:** White bg, `--shadow-sm`, quote mark icon in `--color-accent`, star rating (5 stars), avatar placeholder circle

---

### 6. Call to Action Banner

**Layout:** Full-width, `--color-secondary` background, centered  
**Content:**
```
H2 (white, Playfair Display): "Ready to Start Your Order?"
P (white 80%): "Get in touch today for a free consultation and custom quote."
[Contact Us Now] → /contact.html  (white background, --color-secondary text)
```

---

## Page-Specific JS

```javascript
// Animate stats counting up on scroll into view
// IntersectionObserver on .stats-bar
// Count from 0 to target number over 2 seconds
```
