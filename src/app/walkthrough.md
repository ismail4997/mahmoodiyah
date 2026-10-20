# Packmenn International B2B Custom Packaging Platform — Walkthrough

Packmenn has been architected and built as a **premium international B2B custom packaging platform** using **Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS**.

## 🌐 Live Platform Access
Test the live application at:
👉 **[http://localhost:3000](http://localhost:3000)**
👉 Admin Dashboard: **[http://localhost:3000/admin](http://localhost:3000/admin)**

---

## 🏛️ Core Packaging Categories & Structure

### 1. Folding Cartons / Bleached Card Boxes (`/packaging/folding-cartons`)
- **Tuck Boxes:** Straight Tuck End, Reverse Tuck End, Tuck End with Window, Auto Bottom (Crash Lock), Lock Bottom.
- **Sleeve Boxes:** Printed Product Sleeves, Sliding Sleeves.
- **Window Cartons:** Clear Transparent PET & Die-Cut Windows.
- **Substrates:** 14pt–24pt Solid Bleached Sulfate (SBS), Clay Coated Newsback (CCNB), 100% Recycled Kraft.

### 2. Corrugated Boxes (`/packaging/corrugated-boxes`)
- **Standard Cartons:** Regular Slotted Carton (RSC), Half Slotted Carton (HSC), Full Overlap Box (FOL).
- **Mailer Boxes:** E-Commerce Mailers, Subscription Boxes, Die-Cut Mailers.
- **Product Boxes & Specialty:** Retail Display Cartons, Corrugated Trays with Interlocking Dividers.
- **Fluting Grades:** E-Flute (1/16"), B-Flute (1/8"), C-Flute (3/16"), and Double Wall (B+C).

### 3. Rigid Boxes (`/packaging/rigid-boxes`)
- **Lid & Base:** Two-Piece Lift-Off Lid Boxes, Deep Lid & Base.
- **Magnetic:** Book-Style Magnetic Boxes, Foldable/Collapsible Magnetic Boxes.
- **Drawer:** Slide Drawer / Matchbox with Satin Ribbon Pull.
- **Shoulder & Neck:** Three-Piece Boxes with Exposed Metallic Gold/Silver Neck Collar.
- **Specialty & Foam:** Laser-cut high-density EVA foam and velvet cushions.
- **Greyboard Calipers:** 1.5mm (1000gsm), 2.0mm (1400gsm), 2.5mm (1800gsm), 3.0mm (2200gsm).

---

## ⚙️ Interactive 9-Step Quote Configurator (`/quote`)
- **Step 1:** Choose Category (Folding Cartons, Corrugated Boxes, Rigid Boxes)
- **Step 2:** Choose Product Structure
- **Step 3:** Custom Dimensions with live **Unit Conversion** (`in`, `cm`, `mm`)
- **Step 4:** Category-specific Substrate & Caliper Selection
- **Step 5:** Printing (No Printing, CMYK, Pantone PMS, CMYK + Pantone)
- **Step 6:** Multi-Select Luxury Finishes (Matte, Gloss, Soft-Touch, Spot UV, Gold/Silver/Custom Foil, Embossing, Debossing, Foam Inserts)
- **Step 7:** Preset & Custom Quantities (100, 250, 500, 1,000, 2,500, 5,000, 10,000, 25,000+)
- **Step 8:** Vector Dieline & Reference Artwork Attachment
- **Step 9:** Contact Information & Target Delivery Date
- **Live Multi-Currency Pricing:** Supports **USD ($), GBP (£), EUR (€), AED (AED), AUD (A$), and CAD (C$)**
- **3 Pricing Modes:** `INSTANT_ESTIMATE`, `STARTING_PRICE`, `CUSTOM_QUOTE`

---

## 🛠️ Admin Dashboard (`/admin`)
- **KPI Metrics:** Total Quotes, Pipeline Value, Active Samples, Live Production.
- **12 Lifecycle Status Stages:** `New`, `Reviewing`, `Quote Sent`, `Customer Responded`, `Sample Requested`, `Sample Approved`, `Order Confirmed`, `Production`, `Quality Check`, `Shipped`, `Completed`, `Cancelled`.
- **Price Modification Drawer:** Admin can override pricing with custom discounts and internal prepress notes before client dispatch.
- **Sample Requests Manager:** Review physical sample dispatch destinations.
- **Pricing Engine Configurator:** Review backend multipliers and volume curves.

---

## 📄 Platform Sitemap & Routes
- `/` — Homepage (Hero, 3 Category Cards, Build Your Box, Industries, Finishes, 6-Step How It Works, Sample CTA, Final CTA)
- `/packaging/folding-cartons` — Folding Cartons Category Landing
- `/packaging/corrugated-boxes` — Corrugated Boxes Category Landing
- `/packaging/rigid-boxes` — Luxury Rigid Boxes Category Landing
- `/packaging/[category]/[slug]` — Dynamic SEO-optimized Product Detail Pages (e.g. `/packaging/folding-cartons/straight-tuck-end`, `/packaging/corrugated-boxes/ecommerce-mailer`, `/packaging/rigid-boxes/magnetic-closure-rigid`)
- `/quote` — 9-Step Interactive Quotation Configurator
- `/sample-request` — Dedicated Physical Sample Request Form
- `/industries` — Industry Solutions Showcase
- `/how-it-works` — 6-Stage Manufacturing Workflow
- `/about` — International Manufacturing Positioning
- `/contact` — Global Support Desk
- `/admin` — Enterprise Admin Dashboard
- `/api/*` — Backend Pricing Engine & Database API Endpoints
