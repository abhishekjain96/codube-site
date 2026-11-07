# Codube. — Modern Software Development Studio Website

A production-ready, ultra-modern, high-converting agency & software studio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Matches 100% pixel-perfect with the provided dark neon cyber theme, including 3D mockups, interactive project showcases, email lead capture, and an Admin Studio for content & media updates.

---

## 🚀 Key Features

1. **Pixel-Perfect Neon Dark Aesthetic**:
   - Cyber lime `#bbfb26` neon glow effects & ambient dark glassmorphism.
   - Interactive mouse glow tracking on desktop.
   - 3D Laptop on floating rocky pedestal with floating holographic status cards.
   - 100% Mobile-First responsive design with silky-smooth 60fps animations.

2. **Complete Pages & Routes**:
   - **Home (`/`)**: Hero with 3D visuals, Services preview, Modern Tools tech stack, Featured Projects, Process flow, Why Businesses Choose Codube, and CTA banner.
   - **Services (`/services`)**: "End-to-End Technology Solutions", handwritten note with curly neon arrow, deep-dive deliverables, and 10+ projects stats container.
   - **Work / Portfolio (`/work`)**: Real-world showcases of **ScanTaker** (diagnostic booking platform) and **MedLearnings** (medical education platform) with interactive Case Study modals and live project links.
   - **Process (`/process`)**: "From Idea to Launch" 6-step journey with connected dotted timeline and floating laptop on rock graphic.
   - **Why Us (`/why-us` & `/about`)**: Engineering principles, value propositions, and live metrics.
   - **Contact (`/contact`)**: High-converting contact form with service & budget pickers, direct WhatsApp chat integration, and celebration confetti.

3. **Admin Studio (`/admin`)**:
   - Secure PIN authentication (Default: `codube2026`).
   - **Image & Mockup Manager**: Upload new images or set custom URLs for Hero Laptop, ScanTaker Mockup, MedLearnings Mockup, and Process visuals.
   - **Headlines & Text Editor**: Edit hero titles, highlight words, subtitles, and key metrics.
   - **Client Leads Inbox**: Real-time log of every submitted inquiry with export to CSV.

4. **Email & Lead Notifications**:
   - All contact inquiries are stored in `src/data/leads.json`.
   - Built-in SMTP email dispatch via `nodemailer` (configure in `.env.local`).

5. **SEO & Performance**:
   - Auto-generated `sitemap.xml` and `robots.txt`.
   - Full OpenGraph and Twitter card metadata for maximum social reach.

---

## 🛠️ Quick Start

```bash
# Run Development Server
npm run dev

# Or Run Production Server (already built)
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.
Access the Admin Studio at [http://localhost:3000/admin](http://localhost:3000/admin) with PIN `codube2026`.
