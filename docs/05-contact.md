# Page: Contact (`contact.html`)

> Read `00-overview.md` first for the global design system, components, and technical requirements.

---

## Page Goal
Make it effortless for buyers, partners, and job seekers to reach out. The page should feel approachable and responsive. Every visitor should leave with confidence that someone will reply quickly.

---

## Sections (in order)

---

### 1. Page Hero

**Layout:** Compact, 40vh, clean and focused (no heavy image)  
**Background:** `--color-primary` with a subtle repeating geometric pattern (SVG CSS background, e.g. diagonal lines or dot grid at 5% opacity)

**Content (centered, white):**
```
Eyebrow (--color-accent): "GET IN TOUCH"

H1 (Playfair Display, 52px desktop / 34px mobile):
  "Let's Start a
   Conversation."

P (DM Sans, white 70%, 17px):
  "Whether you're requesting a quote, asking about production,
   or exploring a career — we'd love to hear from you.
   We respond within 24 business hours."
```

---

### 2. Contact Split Section

**Layout:** 2 columns (60% form left | 40% info right), `--color-background`  
**On mobile:** Stack vertically (info first, then form)

---

#### Left Column: Contact Form

**Form title:**
```
H2: "Send Us a Message"
P: "Fill in the details below and we'll get back to you shortly."
```

**Form fields** (styled inputs, `--color-border` border, `--radius-md`):

```
Full Name *                [text input]
Company / Brand Name       [text input]   (optional)
Email Address *            [email input]
Phone / Telegram           [tel input]    (optional, with country flag selector)
Subject *                  [select dropdown]
  Options:
  → Product Inquiry
  → Request a Quote
  → Private Label Inquiry
  → Careers / Job Application
  → General Question
  → Partnership Opportunity

Message *                  [textarea, min 5 rows]
  Placeholder: "Tell us about your requirements — product type,
  quantity, timeline, fabric preferences, etc."

How did you find us?       [select dropdown, optional]
  Options: Google Search, Social Media, Referral, Trade Show, Other
```

**Checkbox (optional):**
```
☐ I'd like to receive updates about new products and services.
```

**Submit Button (full width):**
```
[Send Message →]   (btn-primary, full width, 56px height)
```

**Under button:**
```
🔒 Your information is kept private and never shared with third parties.
```

**Form behavior (JS):**
- Client-side validation: required fields highlighted in `--color-secondary` if empty on submit
- Show inline error messages under invalid fields
- On successful submit (simulate with JS): replace form with success message:
  ```
  ✅ Message Sent!
  "Thank you, [Name]! We've received your message and will
   reply to [email] within 24 business hours."
  [Send Another Message] — resets the form
  ```
- Auto-fill subject if URL contains `?role=` param (for Careers page links) or `?source=careers`

---

#### Right Column: Contact Information

**Card 1 — Main Office:**
```
🏢 Our Factory & Office

[Company Name]
[Full Address Line 1]
[District / City], Tashkent
Uzbekistan, [Postal Code]

Google Maps link: "View on Map →" (opens maps in new tab)
```

**Card 2 — Business Hours:**
```
🕐 Working Hours

Monday – Friday:   08:00 – 18:00 (UZT)
Saturday:          09:00 – 14:00
Sunday:            Closed

Public holidays: Closed
Response time: Within 24 business hours
```

**Card 3 — Direct Contacts:**
```
📧 Email
  info@[company].com          (General)
  sales@[company].com         (Orders & Quotes)
  careers@[company].com       (Job Applications)

📞 Phone / Telegram
  +998 XX XXX XX XX

💬 Telegram (clickable link)
  [Chat on Telegram →] → https://t.me/+998XXXXXXXXX
  (opens Telegram with pre-filled message: "Hi, I'm contacting you from your website...")
```

**Card 4 — Social Media:**
```
Follow & Connect:
[LinkedIn]    [Instagram]    [Facebook]    [YouTube]

(Icon buttons, `--color-primary` bg, white icon, hover `--color-secondary`)
```

---

### 3. Embedded Map

**Layout:** Full-width, 400px height, `--color-surface`

**Title (centered):**
```
H3: "Find Our Factory"
```

**Map embed:**
```html
<!-- Embed Google Maps iframe for Tashkent, Uzbekistan -->
<!-- Replace src with actual factory coordinates once known -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191880.56...Tashkent"
  width="100%"
  height="400"
  style="border:0; border-radius: var(--radius-lg);"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

<!-- Placeholder note: Replace the iframe src with the actual 
     Google Maps embed URL from: maps.google.com → Share → Embed a map -->
```

**Below map:** Two pill badges centered:
```
[📍 Tashkent, Uzbekistan]   [✈️ 20 min from Tashkent International Airport]
```

---

### 4. FAQ Section

**Layout:** `--color-background`, 2-column accordion grid

**Title (centered):**
```
Eyebrow: "QUICK ANSWERS"
H2: "Frequently Asked Questions"
```

**FAQ Items (accordion):**

```
Q: What is your minimum order quantity (MOQ)?
A: Our standard MOQ is 500 pieces per style for most categories.
   For underwear, the MOQ is 1,000 pieces per style. We offer
   flexibility for new clients ordering samples.

Q: Do you offer sampling before bulk production?
A: Yes. We produce pre-production samples for approval before
   any bulk run. Standard sampling time is 7–10 business days.
   Sample charges are credited back on bulk orders.

Q: Can you produce under our private label?
A: Absolutely. We offer full private label services including
   custom woven labels, hang tags, branded packaging, and
   size labeling to your specifications.

Q: What payment terms do you offer?
A: Standard terms are 30% deposit on order confirmation and
   70% before shipment. We can discuss alternative terms
   for established clients.

Q: Which countries do you export to?
A: We currently export to 30+ countries across Europe, the
   Middle East, Central Asia, and Southeast Asia. We have
   experience with EU, US, and Gulf import requirements.

Q: How long does production take?
A: Standard lead times are 30–50 days depending on product
   category and order volume. Rush production may be available —
   contact us to discuss your deadline.

Q: Do your fabrics meet international safety standards?
A: Yes. We use OEKO-TEX® certified fabrics and our facility
   is ISO 9001:2015 certified. We can provide full compliance
   documentation on request.

Q: Can I visit your factory?
A: Yes, factory visits are welcome and encouraged! Contact us
   to schedule a visit. We can arrange airport pickup and
   accommodation recommendations in Tashkent.
```

**Accordion style:**
- Question row: bold text + `+` / `−` toggle icon right-aligned
- Answer: appears below with smooth `max-height` transition
- Border-bottom separator between items
- Active item: question text in `--color-secondary`

---

### 5. Response Promise Banner

**Layout:** `--color-primary` background, 3-column icon + text blocks, centered

```
[📬]                    [💬]                    [📞]
Email Response          Telegram                Call Us
Within 24 hours         Instant messaging       Mon–Sat 8am–6pm
business hours          for quick questions     Tashkent time
```

**Design:** White icon/title, muted white body text, thin vertical dividers between columns

---

## Page-Specific JS Notes

```javascript
// 1. Read URL params on page load
//    ?role=sewing-operator → auto-set Subject to "Careers / Job Application"
//                            and append role name to Message textarea
//    ?source=careers       → same as above but generic

// 2. Telegram link
//    href="https://t.me/+998XXXXXXXXX"
//    Opens Telegram chat with the contact number

// 3. Form submit
//    e.preventDefault() → validate → show loading state on button
//    → simulate 1.5s delay → show success message
//    (Replace with real backend/Formspree/Netlify Forms integration later)

// 4. FAQ accordion
//    querySelectorAll('.faq-item') → toggle 'open' class on click
//    Max one open at a time
```
