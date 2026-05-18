# Page: Products (`products.html`)

> Read `00-overview.md` first for the global design system, components, and technical requirements.
> **This is NOT an e-commerce page.** No prices, no cart, no checkout. The goal is to showcase the product range and direct visitors to request a quote.

---

## Page Goal
Present the full product catalog in a visually compelling, professional way. Each product category should communicate quality and breadth of options. Every section ends with a "Request a Quote" prompt.

---

## Sections (in order)

---

### 1. Page Hero

**Layout:** Full-width, 50vh, fabric texture background with dark overlay  
**Background:** `https://picsum.photos/seed/fabrics/1400/500` + `rgba(26,26,46,0.75)` overlay

**Content (centered, white):**
```
Eyebrow (--color-accent): "OUR PRODUCT RANGE"

H1 (Playfair Display, 56px desktop / 36px mobile):
  "Every Garment,
   Crafted to Spec."

P (DM Sans, white 75%, 18px):
  "Browse our full range of manufactured apparel.
   All products are available for private label,
   custom sizing, and bulk ordering."

[Request a Quote] → /contact.html  (btn-primary)
```

---

### 2. Product Category Filter Bar

**Layout:** Sticky below navbar, `--color-surface` background with `--shadow-sm`  
**Purpose:** Smooth-scroll anchor links to each category section

```
Filter tabs (pill buttons, active = --color-primary filled):
[All]  [T-Shirts]  [Tops & Blouses]  [Underwear & Panties]  [Sportswear]  [Kids' Wear]
```

**Behavior (JS):**
- Clicking a tab smooth-scrolls to that section's `id`
- On scroll, active tab updates to match the visible section (IntersectionObserver)
- Tabs overflow horizontally on mobile with scroll snap

---

### 3. Product Category: T-Shirts

**Section id:** `#tshirts`  
**Layout:** `--color-background`, title left-aligned, then product card grid

**Section Header:**
```
Eyebrow (--color-secondary): "CATEGORY 01"
H2: "T-Shirts"
P: "Our core product. Available in dozens of fits, weights, and fabrics.
    Suitable for casual, workwear, promotional, and fashion applications."
```

**Product Cards Grid:** 3 columns desktop, 2 tablet, 1 mobile

| Product | Description | Details |
|---|---|---|
| Classic Crew Neck Tee | The everyday essential in 180gsm combed cotton. | Sizes: XS–5XL, Colors: 50+ |
| V-Neck Tee | Fitted and relaxed cuts in soft single-jersey. | Fabric: 200gsm cotton |
| Polo Shirt | Piqué cotton polo with 2-button placket, ribbed collar. | Customizable embroidery |
| Oversized Drop-Shoulder | Streetwear-cut tee, 220gsm heavyweight cotton. | Trendy silhouette |
| Kids' T-Shirt | Soft, pre-shrunk, tag-free options for children ages 2–14. | Safety certified |
| Long-Sleeve Tee | Lightweight layering tee, ribbed cuffs, crew or v-neck. | Year-round basic |

**Card design:**
- White bg, `--shadow-sm`, `--radius-lg`
- Top: product image placeholder (16:9, `https://picsum.photos/seed/tee{n}/400/250`)
- Body: product name (bold, `--color-text`), short description, two detail tags (pill badges in `--color-background`)
- Bottom: "Request This Product →" link (`--color-secondary`)
- Hover: `translateY -4px`, `--shadow-md`

---

### 4. Product Category: Tops & Blouses

**Section id:** `#tops`  
**Background:** `--color-surface` (alternating with previous section)

**Section Header:**
```
Eyebrow (--color-secondary): "CATEGORY 02"
H2: "Tops & Blouses"
P: "Woven and knit tops for women's, juniors', and unisex lines.
    From minimalist basics to tailored fashion pieces."
```

**Product Cards (same grid as above):**

| Product | Description | Details |
|---|---|---|
| Ribbed Tank Top | Slim-fit ribbed modal tank, wide strap. | 95% modal, 5% spandex |
| Sleeveless Blouse | Lightweight georgette, relaxed fit, suitable for layering. | Multiple neckline options |
| Fitted Crop Top | Short-cut knit top, elasticated hem. | Fashion & athleisure use |
| Woven Button-Down | Classic poplin shirt, full button front, spread collar. | Formal or casual |
| Cami Top | Thin-strap camisole in satin-finish polyester or cotton. | Innerwear or fashion |
| Puff Sleeve Top | Trendy puffed shoulder blouse, lightweight woven fabric. | Fashion-forward |

---

### 5. Product Category: Underwear & Panties

**Section id:** `#underwear`  
**Background:** `--color-background`

**Section Header:**
```
Eyebrow (--color-secondary): "CATEGORY 03"
H2: "Underwear & Intimate Apparel"
P: "Soft, comfortable, and durable intimate wear manufactured to the
    highest hygiene and quality standards."
```

**Note box (subtle, bordered):**
```
ℹ️  All intimate apparel is produced in a dedicated clean-room
    environment with OEKO-TEX® certified fabrics.
```

**Product Cards:**

| Product | Description | Details |
|---|---|---|
| Women's Briefs | Full-coverage cotton brief with elastic waistband. | Sizes: XS–4XL |
| Bikini Panties | Low-rise cut, cotton or microfiber options. | 15+ colors per run |
| Thong | Minimal-coverage cut in soft microfiber. | Fashion & comfort lines |
| Boyshorts | Full-coverage, soft waistband, longer leg cut. | Very popular basics |
| Men's Boxers | Woven cotton boxer, elasticated waist, button fly. | Checks & solid options |
| Men's Briefs | Stretch cotton brief with Y-front opening. | 3-pack MOQ available |
| Seamless Underwear | Knitted seamless construction, no-show under clothing. | Microfiber blend |

---

### 6. Product Category: Sportswear

**Section id:** `#sportswear`  
**Background:** `--color-surface`

**Section Header:**
```
Eyebrow (--color-secondary): "CATEGORY 04"
H2: "Sportswear & Activewear"
P: "Performance-first garments using moisture-wicking, 4-way stretch fabrics.
    Ideal for gym, outdoor, and athleisure brands."
```

**Product Cards:**

| Product | Description | Details |
|---|---|---|
| Sports Bra | Medium-support sports bra, seamless or cut-&-sew. | 80% nylon, 20% spandex |
| Athletic Tank Top | Racerback, mesh panel inserts, moisture-wicking. | Unisex & women's cuts |
| Training T-Shirt | Dry-fit polyester tee, flatlock stitching. | Available with sublimation print |
| Compression Shorts | Tight-fit cycling-style shorts, wide waistband. | 4-way stretch fabric |
| Jogger Pants | Elastic waist, tapered leg, side pockets. | Fleece or French terry |

---

### 7. Product Category: Kids' Wear

**Section id:** `#kids`  
**Background:** `--color-background`

**Section Header:**
```
Eyebrow (--color-secondary): "CATEGORY 05"
H2: "Kids' Apparel"
P: "Safe, durable, and comfortable children's basics. Pre-shrunk fabrics,
    flat seams, and safety-certified trims throughout."
```

**Product Cards:**

| Product | Description | Details |
|---|---|---|
| Kids' Crew Tee | Tagless, pre-shrunk, 180gsm cotton. | Ages 2–14, 12 colors |
| Kids' Vest / Tank | Ribbed cotton tank for boys and girls. | Soft elastic trim |
| Kids' Brief | Soft cotton underwear with fun prints. | Safety-certified elastic |
| Kids' Pyjama Set | Top + shorts set in 100% cotton jersey. | Prints available |

---

### 8. Custom & Private Label Section

**Layout:** `--color-primary` background, 2 columns (text left, feature list right)

**Text (left, white):**
```
Eyebrow (--color-accent): "OWN BRAND PRODUCTION"
H2: "Your Label. Our Factory."
P: We handle full private label production — from concept to
   packaged product. Bring us your designs, or work with our
   in-house tech team to develop them.
```

**Feature List (right, white):**
```
✔ Custom woven labels & hang tags
✔ Branded polybag & box packaging
✔ Size label printing (EU, US, UK sizing)
✔ Barcode & SKU management
✔ Embroidery & screen printing
✔ Custom wash care labels
✔ MOQ from 500 pieces per style
✔ Sampling within 7–10 business days
```

---

### 9. Minimum Order & Specifications Table

**Layout:** `--color-background`, centered, responsive table

**Title:**
```
H2: "Order Requirements at a Glance"
P: "Transparent minimums and standard lead times for all categories."
```

**Table:**

| Category | Min. Order Qty | Lead Time | Sample Time | Fabric Options |
|---|---|---|---|---|
| T-Shirts | 500 pcs/style | 30–40 days | 7 days | Cotton, Poly, Blends |
| Tops & Blouses | 300 pcs/style | 35–45 days | 10 days | Woven, Knit, Jersey |
| Underwear | 1,000 pcs/style | 25–35 days | 7 days | Cotton, Modal, Microfiber |
| Sportswear | 500 pcs/style | 40–50 days | 10 days | Nylon, Polyester, Spandex |
| Kids' Wear | 500 pcs/style | 30–40 days | 7 days | Cotton, Jersey |

**Table style:** Alternating row shading (`--color-background` / white), header row in `--color-primary` with white text, border-radius on table container

---

### 10. CTA Banner

**Layout:** `--color-secondary` full-width banner

```
H2 (white): "Found What You're Looking For?"
P (white 80%): "Send us your specs, quantities, and delivery requirements.
We'll get back to you within 24 hours with a custom quote."

[Request a Quote] → /contact.html       (white btn)
[Download Catalog] → #  (outline white btn, placeholder — link to PDF when ready)
```
