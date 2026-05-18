# Page: About Us (`about.html`)

> Read `00-overview.md` first for the global design system, components, and technical requirements.

---

## Page Goal
Build emotional trust and credibility. Visitors (buyers, partners, job seekers) should leave feeling: *"This is a real company with real people, a real story, and real values I can trust."*

---

## Sections (in order)

---

### 1. Page Hero

**Layout:** Full-width, 60vh height, dark overlay on background image  
**Background image:** `https://picsum.photos/seed/factory/1400/600` with `rgba(26,26,46,0.7)` overlay  
**Content (centered, white):**
```
Eyebrow (small caps, --color-accent): "OUR STORY"

H1 (Playfair Display, white, 56px desktop / 36px mobile):
  "More Than a Factory.
   A Craft Tradition."

P (DM Sans, white 75%, 18px, max-width 600px, centered):
  "Founded in 2005, we've grown from a small workshop to one of
   Uzbekistan's most trusted garment manufacturers — without
   losing the craft that started it all."
```

---

### 2. Our Story Section

**Layout:** 2 columns — left: text, right: stacked images (2 photos side by side in a grid)  
**Background:** `--color-background`

**Text content (left column):**
```
Eyebrow: "HOW IT BEGAN"
H2: "Started With a Single Sewing Machine"

Paragraph 1:
  In 2005, our founder began with a small team of 12 skilled
  tailors in a modest workshop in Tashkent. The mission was
  simple: produce garments that lasted longer, fit better,
  and were made under fair conditions.

Paragraph 2:
  Today, our 8,000 m² facility houses over 500 employees
  across cutting, sewing, finishing, and QC departments.
  We export to 30+ countries across Europe, the Middle East,
  and Asia — but our core values have never changed.

Paragraph 3:
  Every piece that leaves our factory carries the same
  care and attention it did when we stitched the first one.
  That's not marketing. That's our culture.
```

**Images (right column, 2×2 mosaic):**
- `https://picsum.photos/seed/sewing/400/300`
- `https://picsum.photos/seed/workshop/400/300`
- `https://picsum.photos/seed/garment/400/300`
- `https://picsum.photos/seed/workers/400/300`

Image grid: 2 columns, 8px gap, all images border-radius `--radius-md`

---

### 3. Mission, Vision & Values

**Layout:** `--color-primary` background, 3-column cards (full width)

**Title (white, centered):**
```
Eyebrow: "WHAT DRIVES US"
H2: "Built on Purpose"
```

**Three Cards:**

| Card | Icon | Title | Content |
|---|---|---|---|
| 1 | 🎯 | Our Mission | To deliver precision-manufactured garments that empower brands to offer their customers lasting quality — at competitive prices and reliable timelines. |
| 2 | 🔭 | Our Vision | To become Central Asia's leading garment exporter by 2030, recognized globally for sustainable practices and exceptional craftsmanship. |
| 3 | 💡 | Our Values | **Integrity** in every stitch. **Sustainability** in every decision. **Partnership** in every deal. We don't just make clothes — we build long-term relationships. |

**Card style:** Dark navy card (`rgba(255,255,255,0.05)` bg), `1px solid rgba(255,255,255,0.1)` border, icon in `--color-accent`, title white, body text white 70%

---

### 4. Key Numbers / Milestones

**Layout:** `--color-background`, centered, 4-column stat blocks

**Content:**
```
[2005]          [500+]          [8,000 m²]      [30+]
Year Founded    Employees       Factory Space    Export Countries

[1M+]           [ISO 9001]      [12-Point]      [24hr]
Units/Month     Certified       QC Checklist    Sample Response
```

**Design:** Large number/label in Playfair Display (`--color-secondary`), description below in `--color-text-muted`, separated by thin dividers. On scroll, numbers count up with JS.

---

### 5. Our Factory / Facility Tour

**Layout:** `--color-background`, alternating left-right rows (image | text)

**Title (centered):**
```
Eyebrow: "INSIDE OUR FACILITY"
H2: "Where Every Thread Meets Its Purpose"
```

**Rows:**

**Row 1 — Cutting Department** (image left, text right)
```
Image: https://picsum.photos/seed/cutting/600/400
Title: "Precision Cutting"
Text: Our automated cutting room handles up to 50 layers of fabric
simultaneously, ensuring consistent sizing across every batch.
Equipped with Gerber and Lectra cutting systems.
```

**Row 2 — Sewing Lines** (text left, image right)
```
Image: https://picsum.photos/seed/sewing2/600/400
Title: "Expert Sewing Teams"
Text: 20 dedicated sewing lines, each specialized for different
product categories. Our seamstresses average 8+ years of experience
with a zero-defect culture.
```

**Row 3 — Quality Control** (image left, text right)
```
Image: https://picsum.photos/seed/quality/600/400
Title: "Rigorous QC Process"
Text: Every order goes through inline QC, end-line inspection,
and final audit before packing. Defect rate maintained below 0.5%.
```

**Row 4 — Finishing & Packing** (text left, image right)
```
Image: https://picsum.photos/seed/packing/600/400
Title: "Branded Packaging"
Text: From hang tags to polybags to custom boxes — we handle
all finishing touches so your products arrive shelf-ready.
```

---

### 6. Our Team

**Layout:** `--color-primary` background, centered title, 4-card team grid  
**Title (white):**
```
Eyebrow: "THE PEOPLE BEHIND IT"
H2: "Led by Experience"
```

**4 Team Member Cards:**

| Name | Title | Note |
|---|---|---|
| [Founder Name] | Founder & CEO | 20+ years in garment manufacturing |
| [Name] | Head of Production | Manages 500+ floor staff across 3 shifts |
| [Name] | Quality Director | ISO 9001 lead auditor, 15 years QC experience |
| [Name] | Export Manager | Oversees logistics to 30+ countries |

**Card design:**
- Circular avatar placeholder (120px) using `https://picsum.photos/seed/person{n}/120/120`
- Name in white Playfair Display
- Title in `--color-accent`
- Note in white 60%
- Subtle card background `rgba(255,255,255,0.05)`

---

### 7. Certifications & Partners

**Layout:** `--color-background`, horizontal scrolling logo row

**Title (centered):**
```
H2: "Certifications & Compliance"
P: "We meet international standards so you don't have to worry."
```

**Certification Badges (text-based logo cards):**
```
[ISO 9001:2015]   [OEKO-TEX® Standard 100]   [GOTS Certified]
[SA8000 Compliant]   [BSCI Audited]   [SEDEX Member]
```

Each badge: white card, `--shadow-sm`, border-radius `--radius-md`, centered text with certification name bold and subtitle "Certified" in `--color-text-muted`

---

### 8. CTA

**Layout:** `--color-secondary` banner, centered

```
H2 (white): "Let's Build Something Together"
P (white 80%): "Whether you're a startup brand or an established retailer,
we have the capacity and expertise to support your growth."

[Start a Conversation] → /contact.html   (white btn)
[See Our Products]     → /products.html  (outline white btn)
```
