# Page: Careers (`careers.html`)

> Read `00-overview.md` first for the global design system, components, and technical requirements.

---

## Page Goal
Attract skilled workers, seamstresses, technicians, and management candidates. The page should feel welcoming and human — showcasing real benefits, culture, and open roles. Tone: warm, encouraging, proud.

---

## Sections (in order)

---

### 1. Page Hero

**Layout:** Full-width, 55vh, people-at-work photo with dark overlay  
**Background:** `https://picsum.photos/seed/teamwork/1400/550` + `rgba(26,26,46,0.72)` overlay

**Content (centered, white):**
```
Eyebrow (--color-accent): "JOIN OUR TEAM"

H1 (Playfair Display, 56px desktop / 36px mobile):
  "Grow With Us.
   Stitch Your Future."

P (DM Sans, white 75%, 18px, max-width 580px):
  "We're always looking for talented, dedicated people to join
   our growing family. Whether you sew, manage, or innovate —
   there's a place for you here."

[View Open Positions ↓] → smooth scroll to #openroles  (btn-primary)
```

---

### 2. Why Work With Us

**Layout:** `--color-background`, 3-column benefits grid

**Title (centered):**
```
Eyebrow: "LIFE AT [COMPANY NAME]"
H2: "More Than Just a Job"
P: "We invest in our people the same way we invest in our products — with care, consistency, and a long-term view."
```

**Benefits Cards (6 cards, 3 per row desktop, 1 mobile):**

| Icon | Benefit | Description |
|---|---|---|
| 💰 | Competitive Salary | Above-market wages reviewed annually based on performance and experience. |
| 🏥 | Health Insurance | Full medical coverage for you and your immediate family from day one. |
| 📚 | Skills Training | Regular in-house workshops on sewing techniques, machinery, and soft skills. |
| 🕐 | Flexible Shifts | Morning and afternoon shift options to fit your lifestyle. |
| 🎉 | Seasonal Bonuses | Performance bonuses paid quarterly, plus Eid and New Year bonuses. |
| 🤝 | Supportive Culture | A respectful, harassment-free workplace where every voice is heard. |

**Card style:** White bg, `--shadow-sm`, icon in large size (`--color-accent`), title bold, body in `--color-text-muted`

---

### 3. Our Work Culture (Photo Gallery Row)

**Layout:** `--color-primary`, full-width horizontal photo strip + text

**Title (white, centered):**
```
Eyebrow: "OUR CULTURE"
H2: "A Factory That Feels Like Family"
```

**3-column layout (image | quote | image):**

Left image: `https://picsum.photos/seed/culture1/500/400`  
Center quote (large, italic, white Playfair Display):
```
"We don't just clock in and out. We take pride
in what we make — and that pride shows
in every stitch we deliver."

— [Employee Name], Senior Seamstress, 9 years
```
Right image: `https://picsum.photos/seed/culture2/500/400`

Below: 4 small culture-stat pills (inline, `--color-accent` bg):
```
[95% Employee Retention]  [500+ Team Members]  [3 Daily Shifts]  [10+ Nationalities]
```

---

### 4. Employee Stories (Testimonials)

**Layout:** `--color-background`, alternating left-right rows

**Title (centered):**
```
Eyebrow: "REAL VOICES"
H2: "Hear From Our Team"
```

**Story 1** (image left, quote right):
```
Image: https://picsum.photos/seed/emp1/300/300 (circle, 200px)
Name: Dilnoza M.
Role: Quality Control Inspector
Tenure: 6 years

Quote: "I started as a sewing operator and moved to QC after my
supervisor saw my eye for detail. The company paid for my ISO
training. Now I lead a team of 12. I never expected this kind of
growth from a factory job."
```

**Story 2** (quote left, image right):
```
Image: https://picsum.photos/seed/emp2/300/300
Name: Jasur T.
Role: Production Line Supervisor
Tenure: 4 years

Quote: "The morning shifts work perfectly with my family schedule.
My manager actually listened when I suggested a new pressing
workflow — we cut ironing time by 20%. I feel valued here."
```

---

### 5. Open Positions

**Section id:** `openroles`  
**Layout:** `--color-surface`, accordion-style job listings

**Title (centered):**
```
Eyebrow: "NOW HIRING"
H2: "Open Positions"
P: "We hire based on attitude and potential. Don't see a perfect fit?
    Send us an open application — we review them every week."
```

**Job Listings (accordion cards, expand on click to show full description):**

---

**Role 1: Sewing Machine Operator**
```
Department: Production
Type: Full-time | Shift: Morning / Afternoon
Location: Tashkent Factory

Requirements:
• Minimum 1 year experience operating industrial sewing machines
• Ability to sew straight seams at production speed
• Knowledge of overlock and flatlock machines a plus
• Team-oriented attitude

Responsibilities:
• Operate single-needle and overlock sewing machines
• Follow production targets and quality standards
• Report fabric defects and machine issues promptly

[Apply for This Role] → /contact.html?role=sewing-operator
```

---

**Role 2: Quality Control Inspector**
```
Department: Quality
Type: Full-time | Shift: Morning
Location: Tashkent Factory

Requirements:
• 2+ years of QC experience in garment manufacturing
• Familiarity with AQL inspection standards
• Good vision, attention to detail
• Basic written reporting skills

Responsibilities:
• Perform inline and end-line garment inspections
• Record defects and escalate recurring issues
• Work with production supervisors to resolve quality problems

[Apply for This Role] → /contact.html?role=qc-inspector
```

---

**Role 3: Cutting Room Technician**
```
Department: Cutting
Type: Full-time | Shift: Morning
Location: Tashkent Factory

Requirements:
• Experience with straight knife or round knife cutting machines
• Ability to read markers and lay plans
• Physical stamina for standing shifts
• Attention to grain lines and fabric direction

Responsibilities:
• Lay up fabric according to cutting orders
• Cut fabric accurately to approved markers
• Maintain cutting equipment and blade sharpness

[Apply for This Role] → /contact.html?role=cutting-tech
```

---

**Role 4: Export Documentation Specialist**
```
Department: Logistics & Export
Type: Full-time | Office-based
Location: Tashkent (Head Office)

Requirements:
• Experience in freight forwarding or export documentation
• Knowledge of commercial invoices, packing lists, certificates of origin
• Proficiency in Russian and English (Uzbek native)
• Organized, deadline-driven

Responsibilities:
• Prepare all export documentation accurately and on time
• Coordinate with freight forwarders and customs agents
• Track shipments and update clients on delivery status

[Apply for This Role] → /contact.html?role=export-docs
```

---

**Role 5: Merchandiser / Account Manager**
```
Department: Sales & Customer Relations
Type: Full-time | Hybrid
Location: Tashkent + occasional travel

Requirements:
• 3+ years in garment merchandising or B2B sales
• Strong communication skills in English (additional languages a plus)
• Experience managing buyer relationships
• Proficient in Excel and order tracking tools

Responsibilities:
• Handle buyer inquiries and sample coordination
• Manage orders from confirmation to delivery
• Communicate proactively with international clients

[Apply for This Role] → /contact.html?role=merchandiser
```

---

**Role 6: Open Application**
```
Don't see your role listed? We're growing fast.

Send us your CV and tell us what you do best.
We review open applications every Monday.

[Send Open Application] → /contact.html?role=open
```

---

**Accordion JS behavior:**
- Each job is a collapsed card showing: Role title + Department + Type badge
- Clicking expands it to show full description and Apply button
- Only one accordion open at a time
- Open state: border-left `4px solid --color-secondary`

---

### 6. Hiring Process

**Layout:** `--color-primary` background, horizontal 4-step flow

**Title (white):**
```
Eyebrow: "HOW TO JOIN"
H2: "Our Hiring Process" (white)
```

**Steps:**
```
① Apply
  Submit your CV via the form or email. Takes 5 minutes.

② Review
  Our HR team reviews within 3 working days and contacts you.

③ Interview
  A short in-person or video call to get to know each other.

④ Welcome Aboard
  Offer letter, onboarding, and your first day on the team.
```

**Design:** Same numbered-step style as Home page process section. White text, `--color-accent` step numbers.

---

### 7. Application CTA

**Layout:** `--color-secondary` banner, centered

```
H2 (white): "Ready to Apply?"
P (white 80%): "Send your CV to careers@[company].com
or use our contact form and mention the role you're interested in."

[Apply via Form] → /contact.html?source=careers   (white btn)

Small text below: "We are an equal opportunity employer.
All applications are reviewed regardless of age, gender, or background."
```
