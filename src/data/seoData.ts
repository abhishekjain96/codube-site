export interface SeoService {
  id: string;
  name: string;
  shortName: string;
  category: "web" | "ai" | "custom" | "industry";
  headline: string;
  subheadline: string;
  description: string;
  features: string[];
  deliverables: string[];
  startingPrice: string;
  deliveryDays: string;
  faqs: { question: string; answer: string }[];
}

export interface SeoLocation {
  id: string;
  city: string;
  state?: string;
  country: string;
  region: "jaipur" | "india" | "global";
  currency: "USD" | "INR" | "AED";
  localHubName: string;
  businessContext: string;
  phoneCode: string;
}

export interface GeneratedSeoPage {
  slug: string;
  title: string;
  metaDescription: string;
  service: SeoService;
  location: SeoLocation;
  h1: string;
  subheadline: string;
  localTrustNote: string;
  targetKeywords: string[];
  faqs: { question: string; answer: string }[];
}

export const SEO_SERVICES: SeoService[] = [
  {
    id: "website-development-company",
    name: "Website Development Company",
    shortName: "Web Development",
    category: "web",
    headline: "High-Speed, Conversion-Engineered Websites Built to Turn Visitors into Clients",
    subheadline: "Ultra-fast Next.js 14 websites with 99+ Google PageSpeed, built-in lead funnels, and 24/7 WhatsApp AI integration. Launch in 7 days.",
    description: "Looking for a reliable website development partner? Codube designs and engineers award-winning, conversion-focused websites that load in under 1 second, capture maximum customer leads, and rank on Google.",
    features: [
      "Ultra-Fast Next.js 14 & Tailwind CSS Architecture",
      "99+ Google PageSpeed & Core Web Vitals Optimization",
      "24/7 WhatsApp AI Receptionist Lead Bot Integration",
      "Interactive Booking & Dynamic Appointment Forms",
      "Google Maps Local SEO & Schema Markup",
      "Full Source Code & 100% GitHub IP Ownership",
    ],
    deliverables: [
      "5 to 10 Custom Designed Responsive Pages",
      "Mobile-First Responsive Layout (iOS/Android)",
      "Automated WhatsApp Lead Notification System",
      "Custom Admin Dashboard for Content & Image Updates",
      "Complete SSL, CDN & Edge Hosting Setup",
    ],
    startingPrice: "$999 (₹19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch our website?",
        answer: "Our turnkey business growth websites are engineered and launched within 7 business days, including full design, mobile optimization, and WhatsApp lead integration.",
      },
      {
        question: "Do I own 100% of the website code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage, Codube transfers 100% GitHub repository ownership and hosting credentials directly to you upon delivery.",
      },
      {
        question: "Will the website be optimized for mobile phones and Google ranking?",
        answer: "Yes. Every website is built mobile-first with clean semantic HTML5, JSON-LD Schema markup, and instant Core Web Vitals performance for top Google search visibility.",
      },
      {
        question: "Can I easily update text, images, and prices myself?",
        answer: "Yes, you get an easy-to-use custom admin panel allowing you to upload images, update service details, and manage customer inquiries without writing any code.",
      },
    ],
  },
  {
    id: "ai-chatbot-development-company",
    name: "AI Chatbot Development Company",
    shortName: "AI Chatbots",
    category: "ai",
    headline: "Intelligent 24/7 AI Customer Support & Lead Generation Chatbots",
    subheadline: "Custom-trained LLM chatbots powered by OpenAI, Claude & Gemini that answer customer questions, book appointments, and close sales automatically.",
    description: "Automate your customer conversations and stop losing qualified leads. Codube builds intelligent AI chatbots that understand your product catalog, integrate with your CRM, and operate around the clock.",
    features: [
      "Custom Fine-Tuned LLM & Knowledge Base Training",
      "Multi-Channel: Web, WhatsApp, Telegram & CRM",
      "Automated Appointment Booking & Lead Qualification",
      "Zero Human Staff Dependency for Level-1 Inquiries",
      "Instant 2-Second Natural Language Response Times",
      "End-to-End Enterprise Privacy & Data Encryption",
    ],
    deliverables: [
      "Custom Embedded Web Chatbot Widget",
      "Trained Knowledge Base on your PDFs & FAQs",
      "Google Sheets & CRM Auto-Sync Webhook",
      "Full Conversation History Analytics Dashboard",
    ],
    startingPrice: "$499 (₹14,999 for India)",
    deliveryDays: "3 to 5 Days",
    faqs: [
      {
        question: "Can the AI chatbot answer complex questions about my business?",
        answer: "Yes. We ingest your existing service documentation, pricing sheets, and past customer inquiries to build a proprietary knowledge base that delivers accurate, hallucination-free answers.",
      },
      {
        question: "Does the chatbot work on both mobile websites and WhatsApp?",
        answer: "Yes, our bots are omnichannel. We can deploy directly to your website as a lightweight widget or connect directly to your Official WhatsApp Business API number.",
      },
      {
        question: "How does the bot capture leads and notify my sales team?",
        answer: "Whenever a user provides their phone number, email, or requests a quote, the bot instantly syncs the data to Google Sheets, sends an instant alert to your phone, or forwards it to your CRM.",
      },
      {
        question: "What happens if a customer asks something out of scope?",
        answer: "The AI politely acknowledges the query and smoothly offers to connect the visitor directly with a human specialist via WhatsApp or phone call.",
      },
    ],
  },
  {
    id: "whatsapp-ai-agent-development",
    name: "WhatsApp AI Agent & Chatbot Services",
    shortName: "WhatsApp AI Agents",
    category: "ai",
    headline: "Official WhatsApp Cloud API 24/7 AI Receptionist That Converts Leads While You Sleep",
    subheadline: "Turn WhatsApp into your #1 revenue channel. Automated appointment booking, instant pricing answers, and automated follow-up sequences.",
    description: "90% of customers prefer chatting over WhatsApp. Codube sets up official WhatsApp Cloud API automation and custom AI agents that reply within 2 seconds, qualify prospects, and book paid consultations.",
    features: [
      "Official Meta WhatsApp Cloud API Green-Tick Setup",
      "Instant Automated 2-Second Inquiry Replies",
      "Dynamic Calendar & Slot Confirmation Bot",
      "Automated Follow-Up Sequences & Payment Links",
      "Direct Sync with Google Sheets, Zoho & HubSpot",
      "Zero Monthly Retainer Agency Model",
    ],
    deliverables: [
      "Verified WhatsApp API Setup & Phone Number Config",
      "Custom Natural Language Booking Flow",
      "CRM & Google Calendar Webhook Integrations",
      "Testing, Launch & Staff Handover Training",
    ],
    startingPrice: "$499 (₹14,999 for India)",
    deliveryDays: "3 Days",
    faqs: [
      {
        question: "Do I need a new phone number for the WhatsApp AI Agent?",
        answer: "You can use an existing phone number (as long as it is disconnected from normal WhatsApp consumer apps) or register a fresh dedicated business number.",
      },
      {
        question: "Is this compliant with official WhatsApp Business policies?",
        answer: "Yes, 100%. We utilize the official Meta WhatsApp Cloud API platform, ensuring full compliance and zero risk of phone number bans.",
      },
      {
        question: "Can the WhatsApp bot send location maps and PDFs?",
        answer: "Yes! The bot can dynamically dispatch your clinic location map, product catalog PDFs, fee breakdowns, and payment QR codes based on user intent.",
      },
      {
        question: "How long does setup take?",
        answer: "Standard WhatsApp AI agent configurations are fully tested and live on your official number within 3 business days.",
      },
    ],
  },
  {
    id: "custom-software-development-company",
    name: "Custom Software Development Company",
    shortName: "Custom Software",
    category: "custom",
    headline: "Scalable Enterprise Software Engineered by Hackathon-Winning Architects",
    subheadline: "Robust full-stack web and cloud systems built with Next.js, Node.js, Python, PostgreSQL, and AWS. Built for reliability, security, and exponential scale.",
    description: "From complex enterprise workflow tools to multi-tenant SaaS architectures, Codube crafts bulletproof custom software tailored to your exact business specifications.",
    features: [
      "Enterprise Multi-Role Admin & Customer Portals",
      "High-Throughput REST & GraphQL API Engineering",
      "PostgreSQL, Redis & Cloud Serverless Databases",
      "Stripe, Razorpay & International Payment Gateways",
      "Automated CI/CD Pipelines with 99.9% Cloud Uptime",
      "Engineered by 1st Rank National Hackathon Winner",
    ],
    deliverables: [
      "Complete Architecture Blueprint & Database Schema",
      "Front-End & Backend Application Source Code",
      "Automated Unit & Integration Test Suites",
      "Production Cloud Deployment & Documentation",
    ],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 4 Weeks",
    faqs: [
      {
        question: "Who will architect and code our custom software?",
        answer: "Your platform is led directly by Abhishek Jain, founder of Codube and 1st Rank National Hackathon winner, along with our senior full-stack engineering team.",
      },
      {
        question: "How do you handle milestone payments and project transparency?",
        answer: "We structure projects into clear milestone deliverables. You inspect and approve working software at every stage before releasing milestone payments.",
      },
      {
        question: "Do you sign Non-Disclosure Agreements (NDAs)?",
        answer: "Yes, we execute formal mutual NDAs prior to discussing proprietary architecture and business logic. Your idea and intellectual property remain 100% confidential.",
      },
      {
        question: "Can you take over and modernize existing legacy codebases?",
        answer: "Yes, we regularly perform architecture audits, refactor legacy code, and migrate outdated systems to modern Next.js and cloud microservices.",
      },
    ],
  },
  {
    id: "clinic-website-and-appointment-system",
    name: "Clinic Website & Doctor Appointment Booking System",
    shortName: "Clinic & Healthcare Websites",
    category: "industry",
    headline: "Healthcare Websites & 24/7 WhatsApp AI Receptionists for Doctors & Multi-Branch Clinics",
    subheadline: "Stop losing patients to unanswered calls. High-converting clinic websites with instant OPD slot booking, doctor profiles, and WhatsApp token confirmations.",
    description: "Built specifically for dental clinics, multispeciality hospitals, and healthcare practices. Codube delivers high-trust medical websites that book 3x more patient appointments automatically.",
    features: [
      "Doctor Profile & Speciality Showcase Pages",
      "24/7 WhatsApp AI Receptionist for Appointment Tokens",
      "Automated Patient Consultation Fee Reminders",
      "Google Maps Local Healthcare SEO & Review Funnels",
      "HIPAA-Conscious Data Privacy & Encryption",
      "Proven on Real Diagnostic & Hospital Platforms",
    ],
    deliverables: [
      "Turnkey 5-Page Clinic Website (Home, About, Doctors, Services, Contact)",
      "Automated WhatsApp OPD Booking Bot",
      "Direct Google Sheets Patient Sync",
      "Local Doctor SEO & Map Schema Configuration",
    ],
    startingPrice: "$999 (₹19,999 Complete)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "Can patients book appointments without calling the clinic reception?",
        answer: "Yes! Patients can pick their preferred time slot and doctor directly on your website or chat with your WhatsApp AI receptionist in under 30 seconds.",
      },
      {
        question: "Does the system support multiple doctors and clinic branches?",
        answer: "Yes. Our enterprise tier allows multiple doctor schedules, branch selector (e.g. Clinic Branch A vs B), and individual doctor calendar sync.",
      },
      {
        question: "How does this help our clinic rank on Google Maps?",
        answer: "We configure Local Medical Business JSON-LD schema, embed optimized Google Maps directions, and add one-click Google review capture buttons.",
      },
      {
        question: "What experience does Codube have in healthcare technology?",
        answer: "Codube engineered ScanTaker (diagnostic imaging platform managing hospital scans) and MedLearnings (medical education ecosystem with 50,000+ doctors).",
      },
    ],
  },
  {
    id: "real-estate-website-development",
    name: "Real Estate Website & Lead Generation System",
    shortName: "Real Estate Websites",
    category: "industry",
    headline: "Luxury Real Estate Websites with Interactive Floor Plans & 24/7 VIP WhatsApp Sales Bot",
    subheadline: "Designed for property builders, real estate agencies, and brokers. Showcase property listings, capture high-net-worth buyer leads, and automate site tour bookings.",
    description: "Real estate buyers expect instantaneous responses. Codube builds high-end luxury property websites integrated with an automated WhatsApp sales bot that sends floor plans, brochures, and schedules site tours.",
    features: [
      "Luxury Architectural & Floor Plan Showcase Gallery",
      "Automated WhatsApp Site Visit Booking Bot",
      "Instant Digital Brochure & Price Sheet Delivery",
      "Interactive EMI & Loan Eligibility Calculator",
      "High-Converting Landing Pages for Google & Meta Ads",
      "Lead Routing to Senior Property Advisors",
    ],
    deliverables: [
      "Custom Property Showcase Website with Virtual Tours",
      "WhatsApp Sales Assistant with Instant Brochure Send",
      "Facebook & Google Ads Lead Webhook Integration",
      "Agent & Property Management Admin Panel",
    ],
    startingPrice: "$999 (₹19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "Can the website send official brochures and price sheets automatically?",
        answer: "Yes! When a visitor requests pricing, the system instantly sends the verified PDF brochure to their WhatsApp number while notifying your sales desk.",
      },
      {
        question: "Is the real estate website fast enough for ad campaigns?",
        answer: "Yes, our pages achieve sub-second load times on mobile 4G/5G connections, which cuts bounce rates and reduces Meta & Google Ad cost-per-lead by 30-50%.",
      },
      {
        question: "Can we add new property listings ourselves?",
        answer: "Yes, you get a clean admin console where you can upload property photos, add specs, price ranges, and toggle listings as Available or Sold.",
      },
      {
        question: "Does it support virtual 360 walkthroughs and video tours?",
        answer: "Yes, we can embed YouTube/Vimeo walkthroughs, Matterport 3D virtual tours, and interactive drone footage seamlessly.",
      },
    ],
  },
  {
    id: "saas-product-development-company",
    name: "SaaS Product Development & MVP Studio",
    shortName: "SaaS & MVP Studio",
    category: "custom",
    headline: "Turn Your Startup Idea Into a Production-Ready SaaS Platform in 3 Weeks",
    subheadline: "Full-stack SaaS architecture with multi-tenant auth, subscription billing, interactive dashboards, and scalable edge deployment.",
    description: "Building a software startup? Don't waste 6 months with slow agencies. Codube is an elite MVP studio that designs, builds, and launches revenue-ready SaaS products in weeks.",
    features: [
      "Multi-Tenant User Auth (Clerk, NextAuth, OAuth)",
      "Stripe / LemonSqueezy Recurring Subscription Billing",
      "Interactive Analytics & Metric Dashboards",
      "Scalable Serverless Backend (Supabase / PostgreSQL / AWS)",
      "Clean Reusable Component Architecture",
      "Production-Grade Security & Role-Based Permissions",
    ],
    deliverables: [
      "High-Converting SaaS Marketing Landing Page",
      "Customer App Portal with Billing & Settings",
      "Admin Super-User Monitoring Console",
      "Automated Stripe Webhooks & Transactional Emails",
    ],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 3 Weeks",
    faqs: [
      {
        question: "How fast can you deliver an MVP for our startup?",
        answer: "We scope and deliver fully functional, user-tested MVPs ready for initial customers and investor demos within 2 to 4 weeks.",
      },
      {
        question: "What tech stack do you recommend for high-growth SaaS?",
        answer: "We build with Next.js 14 App Router, TypeScript, Tailwind CSS, PostgreSQL, Prisma/Drizzle ORM, and Stripe for rapid performance and low hosting costs.",
      },
      {
        question: "Do you help with investor pitch decks and technical due diligence?",
        answer: "Yes, our founder Abhishek Jain assists founders with system architecture diagrams, technical documentation, and roadmap planning.",
      },
      {
        question: "Can you scale the platform once we get 10,000+ users?",
        answer: "Yes, our architectures run on edge serverless networks (Vercel, AWS, Cloudflare) designed to handle spikes of 100,000+ active users without crashing.",
      },
    ],
  },
  {
    id: "nextjs-development-company",
    name: "Next.js Web Application Development",
    shortName: "Next.js Development",
    category: "web",
    headline: "High-Performance Next.js 14 & React Web Applications",
    subheadline: "Fast server-side rendered (SSR), static site generated (SSG), and edge-computed web applications that outrank competitors on Google.",
    description: "Next.js is the gold standard of modern web engineering. Codube leverages React Server Components, Turbopack, and Edge API routes to build web applications with zero lag and exceptional SEO.",
    features: [
      "Next.js 14 App Router & React Server Components",
      "Dynamic Incremental Static Regeneration (ISR)",
      "Sub-200ms Largest Contentful Paint (LCP)",
      "Complete TypeScript Type Safety",
      "Integrated Headless CMS or Supabase Backend",
      "100% SEO Friendly with Automatic Sitemaps & Schema",
    ],
    deliverables: [
      "Production-Optimized Next.js Source Code",
      "Vercel or AWS Amplify Deployment",
      "Lighthouse 95+ Audit Report",
      "Documentation & Developer Handover",
    ],
    startingPrice: "$999 (₹19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "Why should we choose Next.js over traditional WordPress?",
        answer: "WordPress is bloated, slow, vulnerable to plugin hacks, and requires heavy server maintenance. Next.js is 5x faster, completely unhackable via static architecture, and ranks dramatically higher on Google Core Web Vitals.",
      },
      {
        question: "Can we still have an admin panel to change content with Next.js?",
        answer: "Yes! We build a custom modern admin dashboard or connect to headless systems so your team can edit content with zero code.",
      },
      {
        question: "Is Next.js suitable for high-traffic websites?",
        answer: "Yes. Giants like TikTok, Hulu, Twitch, and Target run on Next.js. It scales automatically on CDN edge servers worldwide.",
      },
      {
        question: "Do you migrate existing WordPress or PHP sites to Next.js?",
        answer: "Yes, we specialize in migrating outdated websites to Next.js while preserving all existing SEO URL rankings and backlink authority.",
      },
    ],
  },
  {
    id: "ecommerce-website-development",
    name: "E-Commerce Website & Direct-To-Consumer Store",
    shortName: "E-Commerce Development",
    category: "web",
    headline: "High-Converting Headless E-Commerce Websites That Drive Repeat Sales",
    subheadline: "Lightning-fast shopping experience with instant cart checkouts, localized payment gateways, and automated WhatsApp order tracking.",
    description: "Every 100ms of checkout lag costs 1% in lost sales. Codube builds custom modern e-commerce stores engineered for frictionless purchasing, mobile optimization, and high average order value.",
    features: [
      "Sub-Second Product Browsing & Instant Search",
      "Frictionless 1-Click Mobile Checkout Funnel",
      "Stripe, Razorpay, UPI & Apple Pay Integration",
      "Automated WhatsApp Order Confirmation & Tracking",
      "Inventory & Order Management Dashboard",
      "Abandoned Cart Recovery Automation",
    ],
    deliverables: [
      "Custom E-Commerce Store with Product Catalog",
      "Payment Gateway & Shipping Integration",
      "WhatsApp Notification Webhook",
      "Admin Inventory & Sales Dashboard",
    ],
    startingPrice: "$1,499 (₹29,999 for India)",
    deliveryDays: "10 Days",
    faqs: [
      {
        question: "Which payment gateways do you support?",
        answer: "We support Stripe, Razorpay, Cashfree, PayPal, Apple Pay, Google Pay, and UPI depending on whether your store targets domestic or international shoppers.",
      },
      {
        question: "Can customers receive order updates directly on WhatsApp?",
        answer: "Yes! As soon as an order is placed, an automated WhatsApp confirmation message with order details and tracking link is sent automatically.",
      },
      {
        question: "Can we sell international products in multiple currencies?",
        answer: "Yes, we can enable automatic geo-currency switching (USD, EUR, GBP, INR, AED) based on the shopper's location.",
      },
      {
        question: "How do we manage product stock and coupons?",
        answer: "You get a dedicated admin portal to add products, upload high-res images, manage discount coupon codes, and monitor fulfillment status.",
      },
    ],
  },
  {
    id: "hire-dedicated-developers",
    name: "Hire Dedicated Full-Stack & AI Developers",
    shortName: "Hire Developers",
    category: "custom",
    headline: "Hire Senior Full-Stack & AI Engineers on Demand — Zero Recruitment Hassle",
    subheadline: "Get top 1% engineers skilled in Next.js, Node.js, Python, AI Agents, and AWS. Direct communication, daily standups, and transparent hourly/monthly retainers.",
    description: "Need specialized engineering firepower without high recruitment agency fees? Hire dedicated developers from Codube led by hackathon-winning talent for your custom project.",
    features: [
      "Top 1% Vetted Full-Stack & AI Developers",
      "Direct Slack / WhatsApp Communication & Daily Standups",
      "Flexible Engagement: Full-Time, Part-Time, or Fixed Sprint",
      "Zero Overhead: We Handle Infrastructure, Equipment & Taxes",
      "Fast Onboarding: Developer Starts Within 48 Hours",
      "Strict Code Reviews & CI/CD Quality Control",
    ],
    deliverables: [
      "Dedicated Full-Time or Part-Time Software Engineer",
      "Daily Git Commits & Agile Sprint Reports",
      "100% Intellectual Property Assigned to You",
      "Flexible 2-Week Trial Period",
    ],
    startingPrice: "$1,999 / month or Milestone Quote",
    deliveryDays: "Start in 48 Hours",
    faqs: [
      {
        question: "How quickly can a dedicated developer join our team?",
        answer: "We can match and onboard a dedicated engineer aligned with your tech stack within 48 to 72 hours.",
      },
      {
        question: "What technologies do your developers specialize in?",
        answer: "Our engineers specialize in Next.js, React, Node.js, TypeScript, Python, FastAPI, PostgreSQL, LangChain, WhatsApp Cloud API, and AWS cloud architecture.",
      },
      {
        question: "What if the developer is not a good cultural or technical fit?",
        answer: "We offer a 2-week risk-free trial. If you are not completely satisfied, we replace the developer immediately with zero exit penalties.",
      },
      {
        question: "What time zone do your developers work in?",
        answer: "Our engineers provide flexible timezone overlap for US (EST/PST), UK (GMT), UAE (GST), and India (IST) working hours.",
      },
    ],
  },
  {
    id: "dental-clinic-website-development",
    name: "Dental Clinic Website & Patient Booking AI",
    shortName: "Dental Websites",
    category: "industry",
    headline: "High-Converting Dental Practice Websites with 24/7 WhatsApp AI Appointment Booking",
    subheadline: "Attract high-value implant, cosmetic, and orthodontic dental patients. Automated smile consultation bookings, before/after showcases, and Google Maps Local SEO.",
    description: "Dental patients want fast, reassuring answers on treatment costs and timings. Codube engineers modern dental websites equipped with automated 24/7 WhatsApp AI bots that book consultations in 30 seconds.",
    features: [
      "Smile Transformation & Before/After Treatment Showcase",
      "24/7 WhatsApp AI Dental Receptionist for Consultation Booking",
      "Doctor Credentials & Specialized Dentistry Profiles",
      "Google Maps Local Dental SEO & Review Aggregator",
      "Mobile-First 1-Click Call & Directions Buttons",
      "100% IP & Source Code Ownership",
    ],
    deliverables: [
      "Custom 5-Page Dental Clinic Website",
      "Official WhatsApp Booking Assistant",
      "Google Business Profile Map Schema",
      "Admin Portal for Patient Reviews & Photo Uploads",
    ],
    startingPrice: "$999 (₹19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "Can patients view cosmetic treatment fees and book slots?",
        answer: "Yes, the AI chatbot and website showcase treatment fees and allow patients to select and lock preferred appointment slots instantly.",
      },
      {
        question: "How does this help our dental clinic get more local patients?",
        answer: "We implement DentalClinic Schema markup, optimize your Google Maps presence, and build conversion funnels designed to convert local searchers into patients.",
      },
      {
        question: "Can we showcase patient testimonial videos and smile transformations?",
        answer: "Yes, we integrate high-speed before/after interactive sliders and video testimonial galleries that load with zero buffering.",
      },
      {
        question: "Is there any monthly fee?",
        answer: "No mandatory monthly fees. You pay once for the turnkey build and own 100% of your website and code forever.",
      },
    ],
  },
  {
    id: "full-stack-web-developer",
    name: "Full-Stack Web Developers & Software Engineers",
    shortName: "Full-Stack Developers",
    category: "custom",
    headline: "Hire Senior Full-Stack Engineers Led by Hackathon Champions",
    subheadline: "End-to-end full-stack web and mobile application engineering using Next.js 14, Node.js, Python, PostgreSQL, and AWS.",
    description: "Whether you need a complete web application from scratch or an elite developer to accelerate your existing roadmap, Codube delivers top-tier engineering with zero recruitment friction.",
    features: [
      "Full-Stack Frontend & Backend Architectural Mastery",
      "Next.js, React, Node.js, Python, FastAPI & GraphQL",
      "PostgreSQL, Supabase, Redis & Edge Data Caching",
      "Enterprise CI/CD Pipelines & Clean Code Standards",
      "Direct Founder Architecture Oversight by Abhishek Jain",
      "Fast 48-Hour Onboarding & Transparent Milestones",
    ],
    deliverables: [
      "Production-Ready Application Codebase",
      "Comprehensive API Documentation & Schemas",
      "Automated Testing Suites (Unit & E2E)",
      "Cloud Deployment on Vercel, AWS, or GCP",
    ],
    startingPrice: "$2,499 (Milestone Quote)",
    deliveryDays: "2 to 4 Weeks",
    faqs: [
      {
        question: "Who oversees the quality of full-stack code?",
        answer: "Every architecture and pull request is reviewed directly by our founder Abhishek Jain (1st Rank National Hackathon winner).",
      },
      {
        question: "Can your full-stack developers integrate with third-party APIs?",
        answer: "Yes, we have deep experience integrating payment gateways (Stripe, Razorpay), CRMs (Salesforce, HubSpot, Zoho), AI models (OpenAI, Anthropic), and cloud webhooks.",
      },
      {
        question: "Do you offer post-launch support and bug warranties?",
        answer: "Yes, every custom project includes a 30-day post-launch warranty with instant bug fixes and performance monitoring.",
      },
      {
        question: "Can we hire for fixed-scope projects or monthly retainers?",
        answer: "We offer both: transparent fixed-price milestone delivery or dedicated monthly engineer arrangements.",
      },
    ],
  },
  {
    id: "b2b-portal-and-web-application",
    name: "B2B Portal & Enterprise Web Application Development",
    shortName: "B2B Portals",
    category: "custom",
    headline: "Custom B2B Client Portals, Vendor Systems & Internal Business Dashboards",
    subheadline: "Eliminate manual spreadsheets and messy emails. Streamline operations with secure multi-role portals, real-time analytics, and automated invoicing.",
    description: "Modern businesses run on custom portals. Codube engineers bespoke B2B client and vendor platforms with role-based access control, automated invoice generation, and real-time operational tracking.",
    features: [
      "Multi-Role Granular Permission Controls (Admin, Vendor, Client)",
      "Real-Time Data Visualization & Exportable Reports",
      "Automated Invoice Generation & Payment Tracking",
      "Secure Document Vault & File Sharing (AWS S3 / Cloudflare)",
      "Custom Workflows & Order Approval Pipelines",
      "Encrypted Authentication with Multi-Factor Support",
    ],
    deliverables: [
      "Fully Functional B2B Portal Web Application",
      "Interactive Client & Vendor Dashboards",
      "PDF Invoicing & Accounting Integration",
      "Complete Admin Configuration System",
    ],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 3 Weeks",
    faqs: [
      {
        question: "Can clients upload documents and download invoices securely?",
        answer: "Yes, each client gets a private, encrypted dashboard to upload files, sign agreements, and download automated PDF invoices.",
      },
      {
        question: "Can our team manage vendor approvals and order statuses?",
        answer: "Yes, the admin panel features custom workflow pipelines (Pending, Approved, In Review, Completed) with automatic email and WhatsApp alerts.",
      },
      {
        question: "How secure is the portal data?",
        answer: "We use enterprise-grade AES-256 encryption, secure row-level database security (RLS), and SSL/TLS communication protocols.",
      },
      {
        question: "Can the portal integrate with our existing ERP or CRM?",
        answer: "Yes, we build bi-directional REST and webhook integrations with SAP, Zoho, Tally, Salesforce, and custom SQL databases.",
      },
    ],
  },
  {
    id: "mvp-development-for-startups",
    name: "MVP Development for Startups & Funded Founders",
    shortName: "MVP for Startups",
    category: "custom",
    headline: "Launch Your Startup MVP in 14 Days — Built to Impress Users & Investors",
    subheadline: "Rapid prototyping and production MVP engineering. High-velocity Next.js 14 architectures engineered to validate your market and secure initial traction.",
    description: "Speed is everything for a startup. Codube takes founders from wireframe to live production MVP in 2 weeks with clean scalable code, frictionless onboarding, and built-in monetization.",
    features: [
      "14-Day Rapid MVP Turnaround Guarantee",
      "Core Feature Scoping & Frictionless User Experience",
      "Stripe / Global Payment Integration on Day 1",
      "Investor-Ready Architecture & Tech Due-Diligence",
      "100% Source Code & GitHub IP Assignment",
      "Mentorship from Hackathon-Winning Founder Abhishek Jain",
    ],
    deliverables: [
      "Live Production Web or Mobile Application",
      "Landing Page Engineered for User Acquisition",
      "Analytics & User Session Recording Setup",
      "Technical Architecture Pitch Deck Documentation",
    ],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "14 Days",
    faqs: [
      {
        question: "How do you define the scope of a 14-day MVP?",
        answer: "We ruthlessly prioritize the 2-3 killer features that solve your customer's primary pain point, eliminating fluff so you can launch and validate revenue immediately.",
      },
      {
        question: "Is the MVP code modular enough to scale after fundraising?",
        answer: "Yes! We build with clean TypeScript and modular component architecture on serverless databases, so your future in-house engineering team can scale effortlessly.",
      },
      {
        question: "Do you sign NDAs before discussing our startup concept?",
        answer: "Yes, mutual NDAs are executed before any concept or wireframe discussion to ensure your intellectual property is 100% protected.",
      },
      {
        question: "What happens after the MVP is launched?",
        answer: "We provide launch support, monitor real user analytics, and can continue iterating on product roadmap sprints as your user base expands.",
      },
    ],
  },
];

export const SEO_LOCATIONS: SeoLocation[] = [
  // --- JAIPUR & RAJASTHAN MICRO-MARKETS (High Local Authority) ---
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Jaipur Pink City",
    businessContext: "Rajasthan's leading business capital with booming medical clinics, real estate projects, and innovative startups.",
    phoneCode: "+91",
  },
  {
    id: "tonk-road-jaipur",
    city: "Tonk Road Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Tonk Road & SMS Hospital Healthcare Corridor",
    businessContext: "The premier healthcare and commercial district in Jaipur, home to leading multispeciality clinics, diagnostic centers, and corporate offices.",
    phoneCode: "+91",
  },
  {
    id: "vaishali-nagar-jaipur",
    city: "Vaishali Nagar Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Vaishali Nagar Commercial Hub",
    businessContext: "Jaipur's affluent commercial and residential hotspot packed with dental centers, upscale retailers, and elite service providers.",
    phoneCode: "+91",
  },
  {
    id: "malviya-nagar-jaipur",
    city: "Malviya Nagar Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Malviya Nagar & World Trade Park Area",
    businessContext: "Prime commercial zone near Gaurav Tower and WTP, featuring corporate agencies, clinics, and technology enterprises.",
    phoneCode: "+91",
  },
  {
    id: "mansarovar-jaipur",
    city: "Mansarovar Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Mansarovar Commercial District",
    businessContext: "One of Asia's largest residential and business zones with hundreds of private clinics, coaching academies, and local enterprises.",
    phoneCode: "+91",
  },
  {
    id: "sitapura-jaipur",
    city: "Sitapura Industrial Area Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Sitapura Industrial & Tech Zone",
    businessContext: "Jaipur's premier export and industrial zone, housing manufacturing firms, diamond traders, and hospital complexes.",
    phoneCode: "+91",
  },
  {
    id: "c-scheme-jaipur",
    city: "C-Scheme Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "C-Scheme Central Business District",
    businessContext: "The heart of Jaipur's corporate elite, law firms, high-end clinics, and venture-backed boutique offices.",
    phoneCode: "+91",
  },
  {
    id: "jagatpura-jaipur",
    city: "Jagatpura Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Jagatpura High-Rise Hub",
    businessContext: "Jaipur's fastest-growing luxury real estate and residential township near the international airport.",
    phoneCode: "+91",
  },
  {
    id: "raja-park-jaipur",
    city: "Raja Park Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Raja Park Commercial Center",
    businessContext: "Bustling retail, food, and private healthcare corridor with high local consumer footfall.",
    phoneCode: "+91",
  },
  {
    id: "vidhyadhar-nagar-jaipur",
    city: "Vidhyadhar Nagar Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Vidhyadhar Nagar Business Sector",
    businessContext: "Organized planned sector in North Jaipur with expanding private clinics and trading businesses.",
    phoneCode: "+91",
  },

  // --- TIER 1 & INDIAN TECH METROS ---
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    state: "Delhi",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "National Capital Region",
    businessContext: "India's highest-grossing business metropolitan territory spanning Delhi, Gurgaon, and Noida corporate hubs.",
    phoneCode: "+91",
  },
  {
    id: "gurgaon",
    city: "Gurgaon (Gurugram)",
    state: "Haryana",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Cyber City & Golf Course Road",
    businessContext: "India's Fortune 500 corporate capital, thriving with high-growth SaaS startups and modern medical networks.",
    phoneCode: "+91",
  },
  {
    id: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Noida Electronic City & Sector 62",
    businessContext: "Major IT and software development corridor in Northern India housing global tech and media corporations.",
    phoneCode: "+91",
  },
  {
    id: "bangalore",
    city: "Bangalore (Bengaluru)",
    state: "Karnataka",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Silicon Valley of India",
    businessContext: "India's premier tech capital where startups, VC firms, and global enterprises build cutting-edge software.",
    phoneCode: "+91",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "BKC & Financial Capital",
    businessContext: "Financial and entertainment headquarters of India with massive demand for enterprise systems and digital platforms.",
    phoneCode: "+91",
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Hinjawadi & Koregaon Park IT Hub",
    businessContext: "Renowned technology and automotive engineering center with a dense ecosystem of IT companies and startups.",
    phoneCode: "+91",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "HITEC City & Gachibowli",
    businessContext: "Dynamic technological center hosting Microsoft, Google, and thousands of healthcare and AI startups.",
    phoneCode: "+91",
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "OMR IT Corridor",
    businessContext: "Major industrial, SaaS, and healthcare destination known for high engineering talent and hospital chains.",
    phoneCode: "+91",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "SG Highway Business Hub",
    businessContext: "Gujarat's commercial hub with thriving manufacturing, pharmaceutical, and growing technology agencies.",
    phoneCode: "+91",
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Salt Lake Sector V & New Town",
    businessContext: "The economic powerhouse of Eastern India with growing IT parks, clinics, and professional services.",
    phoneCode: "+91",
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "Punjab/Haryana",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "IT Park Chandigarh & Mohali",
    businessContext: "High-income tri-city territory with rapid growth in export software agencies, medical tourism, and luxury real estate.",
    phoneCode: "+91",
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Gomti Nagar Corporate Hub",
    businessContext: "Fast-growing state capital with significant investments in medical infrastructure, IT parks, and retail.",
    phoneCode: "+91",
  },
  {
    id: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Super Corridor & Vijay Nagar",
    businessContext: "Commercial heart of Central India with growing technology parks, pharma firms, and educational hubs.",
    phoneCode: "+91",
  },
  {
    id: "surat",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Surat Commercial Trade Center",
    businessContext: "Global diamond and textile hub rapidly adopting automation and custom digital operations software.",
    phoneCode: "+91",
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Infopark & SmartCity Kochi",
    businessContext: "Kerala's financial and technology capital with expanding startup ecosystems and maritime trade platforms.",
    phoneCode: "+91",
  },

  // --- GLOBAL HIGH-VALUE BUSINESS HUBS (USA, UAE, UK, CAN, AUS, SG) ---
  {
    id: "dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "DIFC, Business Bay & Healthcare City",
    businessContext: "The Middle East's global technology and medical hub with high demand for premium AI WhatsApp receptionists and modern digital products.",
    phoneCode: "+971",
  },
  {
    id: "abu-dhabi",
    city: "Abu Dhabi",
    state: "Abu Dhabi",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "Abu Dhabi Global Market (ADGM)",
    businessContext: "UAE capital with immense investment in artificial intelligence, government innovation, and healthcare networks.",
    phoneCode: "+971",
  },
  {
    id: "new-york",
    city: "New York City",
    state: "New York",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Silicon Alley & Manhattan Tech Corridor",
    businessContext: "Global business capital where medical practices, real estate developers, and startups demand cutting-edge digital experiences.",
    phoneCode: "+1",
  },
  {
    id: "san-francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Bay Area & Silicon Valley",
    businessContext: "The world's epicenter of artificial intelligence, high-velocity SaaS companies, and venture capital innovation.",
    phoneCode: "+1",
  },
  {
    id: "los-angeles",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Silicon Beach & Beverly Hills",
    businessContext: "Premier market for high-ticket dental and cosmetic clinics, luxury real estate brokerage, and creative studios.",
    phoneCode: "+1",
  },
  {
    id: "austin",
    city: "Austin",
    state: "Texas",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Silicon Hills Technology Corridor",
    businessContext: "Fastest-growing tech and startup hub in the United States, attracting top talent and tech ventures.",
    phoneCode: "+1",
  },
  {
    id: "miami",
    city: "Miami",
    state: "Florida",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Brickell & Downtown Miami",
    businessContext: "Rapidly expanding international gateway for real estate investment, tech founders, and luxury medical practices.",
    phoneCode: "+1",
  },
  {
    id: "london",
    city: "London",
    state: "England",
    country: "United Kingdom",
    region: "global",
    currency: "USD",
    localHubName: "Tech City & City of London",
    businessContext: "Europe's leading financial and tech powerhouse with strong appetite for automated AI systems and modern websites.",
    phoneCode: "+44",
  },
  {
    id: "toronto",
    city: "Toronto",
    state: "Ontario",
    country: "Canada",
    region: "global",
    currency: "USD",
    localHubName: "Downtown Toronto & Waterloo Tech Corridor",
    businessContext: "Canada's financial and technology capital home to elite AI research and thriving commercial enterprises.",
    phoneCode: "+1",
  },
  {
    id: "sydney",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    region: "global",
    currency: "USD",
    localHubName: "Sydney CBD & Tech Central",
    businessContext: "Australia's economic capital with high demand for turnkey digital products, healthcare scheduling, and custom software.",
    phoneCode: "+61",
  },
  {
    id: "singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    region: "global",
    currency: "USD",
    localHubName: "Marina Bay & One-North Tech Precinct",
    businessContext: "Asia's premier business and fintech hub, adopting automation and cutting-edge software at world-record speed.",
    phoneCode: "+65",
  },
  {
    id: "dubai-marina",
    city: "Dubai Marina & JLT",
    state: "Dubai",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "Dubai Marina & Jumeirah Lake Towers",
    businessContext: "Thriving waterfront corporate and luxury hub with hundreds of clinics, brokerage firms, and high-growth businesses.",
    phoneCode: "+971",
  },
  {
    id: "dubai-healthcare-city",
    city: "Dubai Healthcare City",
    state: "Dubai",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "DHCC Medical Free Zone",
    businessContext: "The world's largest healthcare free zone where top dental clinics and medical centers require 24/7 AI WhatsApp booking receptionists.",
    phoneCode: "+971",
  },
  {
    id: "san-jose",
    city: "San Jose (Silicon Valley)",
    state: "California",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Capital of Silicon Valley",
    businessContext: "Global tech hub home to the world's most demanding tech leaders, founders, and innovative enterprises.",
    phoneCode: "+1",
  },
  {
    id: "seattle",
    city: "Seattle",
    state: "Washington",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "South Lake Union & Pacific Northwest Tech",
    businessContext: "Major enterprise cloud and AI capital home to Amazon and Microsoft headquarters.",
    phoneCode: "+1",
  },
];

// Helper to generate the unique programmatic slug for any combination
export function buildSeoSlug(serviceId: string, locationId: string): string {
  return `${serviceId}-in-${locationId}`;
}

// Generate all 504 programmatic slugs
export function getAllSeoSlugs(): string[] {
  const slugs: string[] = [];
  for (const s of SEO_SERVICES) {
    for (const l of SEO_LOCATIONS) {
      slugs.push(buildSeoSlug(s.id, l.id));
    }
  }
  return slugs;
}

// Parse slug back to service and location
export function getSeoPageData(slug: string): GeneratedSeoPage | null {
  const parts = slug.split("-in-");
  if (parts.length !== 2) return null;

  const [serviceId, locationId] = parts;
  const service = SEO_SERVICES.find((s) => s.id === serviceId);
  const location = SEO_LOCATIONS.find((l) => l.id === locationId);

  if (!service || !location) return null;

  const isIndia = location.country === "India";
  const currencySymbol = isIndia ? "₹" : "$";
  const displayPrice = isIndia
    ? service.startingPrice.includes("₹")
      ? service.startingPrice
      : "₹19,999 One-Time"
    : service.startingPrice.split("(")[0].trim();

  const title = `${service.name} in ${location.city} | Best Rated Agency | Codube`;
  const metaDescription = `Looking for the best ${service.name.toLowerCase()} in ${location.city}? Codube builds high-speed websites & 24/7 WhatsApp AI agents delivered in 7 days. Starting at ${displayPrice}. 100% IP Ownership.`;
  const h1 = `${service.name} in ${location.city}`;
  const subheadline = `We help businesses in ${location.city} (${location.localHubName}) grow faster with high-converting websites and 24/7 WhatsApp AI automation that books appointments while you sleep.`;

  const localTrustNote = `Serving business leaders, clinics, and growth brands across ${location.city} with 100% source code ownership and guaranteed ${service.deliveryDays} delivery.`;

  const targetKeywords = [
    `${service.name.toLowerCase()} in ${location.city.toLowerCase()}`,
    `best ${service.shortName.toLowerCase()} in ${location.city.toLowerCase()}`,
    `${service.shortName.toLowerCase()} agency ${location.city.toLowerCase()}`,
    `hire ${service.shortName.toLowerCase()} ${location.city.toLowerCase()}`,
    `top software company in ${location.city.toLowerCase()}`,
  ];

  // Tailored localized FAQs
  const localizedFaqs = [
    {
      question: `Why choose Codube as your ${service.shortName} partner in ${location.city}?`,
      answer: `Codube is led directly by Abhishek Jain, a 1st Rank National Hackathon winner. Unlike generic agencies in ${location.city} that trap clients in slow 3-month retainers, we deliver turnkey, production-grade solutions in ${service.deliveryDays} with 100% full source code ownership.`,
    },
    {
      question: `How much does ${service.shortName.toLowerCase()} cost for businesses in ${location.city}?`,
      answer: `We operate on transparent, productized pricing starting at ${displayPrice} with zero hidden agency markups or mandatory monthly retainers.`,
    },
    {
      question: `Do you provide support and maintenance after launching in ${location.city}?`,
      answer: `Yes! Every build includes post-launch monitoring, staff handover training, and optional managed cloud/AI maintenance so your system runs flawlessly 24/7.`,
    },
    ...service.faqs.slice(0, 2),
  ];

  return {
    slug,
    title,
    metaDescription,
    service,
    location,
    h1,
    subheadline,
    localTrustNote,
    targetKeywords,
    faqs: localizedFaqs,
  };
}

// Grouped directory structure for the clean Footer / Sitemaps
export function getSeoDirectoryData() {
  const jaipurSlugs = SEO_LOCATIONS.filter((l) => l.region === "jaipur");
  const indiaSlugs = SEO_LOCATIONS.filter((l) => l.region === "india");
  const globalSlugs = SEO_LOCATIONS.filter((l) => l.region === "global");

  return {
    services: SEO_SERVICES,
    jaipurLocations: jaipurSlugs,
    indiaLocations: indiaSlugs,
    globalLocations: globalSlugs,
    totalCombinations: SEO_SERVICES.length * SEO_LOCATIONS.length, // 10 * 36 = 360 to 14 * 36 = 504
  };
}
