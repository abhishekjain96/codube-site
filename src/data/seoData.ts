export interface SeoService {
  id: string;
  name: string;
  shortName: string;
  category: "web" | "ai" | "custom" | "industry" | "dev";
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
    features: ["Ultra-Fast Next.js 14 and Tailwind CSS Architecture", "99+ Google PageSpeed and Core Web Vitals Optimization", "24/7 WhatsApp AI Receptionist Lead Bot Integration", "Interactive Booking and Dynamic Appointment Forms", "Google Maps Local SEO and Schema Markup", "Full Source Code and 100% GitHub IP Ownership"],
    deliverables: ["5 to 10 Custom Designed Responsive Pages", "Mobile-First Responsive Layout (iOS/Android)", "Automated WhatsApp Lead Notification System", "Custom Admin Dashboard for Content and Image Updates", "Complete SSL, CDN and Edge Hosting Setup"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Web Development?",
        answer: "Our turnkey Web Development packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "ai-chatbot-development-company",
    name: "AI Chatbot Development Company",
    shortName: "AI Chatbots",
    category: "ai",
    headline: "Intelligent 24/7 AI Customer Support and Lead Generation Chatbots",
    subheadline: "Custom-trained LLM chatbots powered by OpenAI, Claude and Gemini that answer customer questions, book appointments, and close sales automatically.",
    description: "Automate your customer conversations and stop losing qualified leads. Codube builds intelligent AI chatbots that understand your product catalog, integrate with your CRM, and operate around the clock.",
    features: ["Custom Fine-Tuned LLM and Knowledge Base Training", "Multi-Channel: Web, WhatsApp, Telegram and CRM", "Automated Appointment Booking and Lead Qualification", "Zero Human Staff Dependency for Level-1 Inquiries", "Instant 2-Second Natural Language Response Times", "End-to-End Enterprise Privacy and Data Encryption"],
    deliverables: ["Custom Embedded Web Chatbot Widget", "Trained Knowledge Base on your PDFs and FAQs", "Google Sheets and CRM Auto-Sync Webhook", "Full Conversation History Analytics Dashboard"],
    startingPrice: "$499 (INR 14,999 for India)",
    deliveryDays: "3 to 5 Days",
    faqs: [
      {
        question: "How fast can you build and launch AI Chatbots?",
        answer: "Our turnkey AI Chatbots packages are fully engineered and delivered within 3 to 5 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "whatsapp-ai-agent-development",
    name: "WhatsApp AI Agent and Chatbot Services",
    shortName: "WhatsApp AI Agents",
    category: "ai",
    headline: "Official WhatsApp Cloud API 24/7 AI Receptionist That Converts Leads While You Sleep",
    subheadline: "Turn WhatsApp into your #1 revenue channel. Automated appointment booking, instant pricing answers, and automated follow-up sequences.",
    description: "90% of customers prefer chatting over WhatsApp. Codube sets up official WhatsApp Cloud API automation and custom AI agents that reply within 2 seconds, qualify prospects, and book paid consultations.",
    features: ["Official Meta WhatsApp Cloud API Green-Tick Setup", "Instant Automated 2-Second Inquiry Replies", "Dynamic Calendar and Slot Confirmation Bot", "Automated Follow-Up Sequences and Payment Links", "Direct Sync with Google Sheets, Zoho and HubSpot", "Zero Monthly Retainer Agency Model"],
    deliverables: ["Verified WhatsApp API Setup and Phone Number Config", "Custom Natural Language Booking Flow", "CRM and Google Calendar Webhook Integrations", "Testing, Launch and Staff Handover Training"],
    startingPrice: "$499 (INR 14,999 for India)",
    deliveryDays: "3 Days",
    faqs: [
      {
        question: "How fast can you build and launch WhatsApp AI Agents?",
        answer: "Our turnkey WhatsApp AI Agents packages are fully engineered and delivered within 3 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "custom-software-development-company",
    name: "Custom Software Development Company",
    shortName: "Custom Software",
    category: "custom",
    headline: "Scalable Enterprise Software Engineered by Hackathon-Winning Architects",
    subheadline: "Robust full-stack web and cloud systems built with Next.js, Node.js, Python, PostgreSQL, and AWS. Built for reliability, security, and exponential scale.",
    description: "From complex enterprise workflow tools to multi-tenant SaaS architectures, Codube crafts bulletproof custom software tailored to your exact business specifications.",
    features: ["Enterprise Multi-Role Admin and Customer Portals", "High-Throughput REST and GraphQL API Engineering", "PostgreSQL, Redis and Cloud Serverless Databases", "Stripe, Razorpay and International Payment Gateways", "Automated CI/CD Pipelines with 99.9% Cloud Uptime", "Engineered by 1st Rank National Hackathon Winner"],
    deliverables: ["Complete Architecture Blueprint and Database Schema", "Front-End and Backend Application Source Code", "Automated Unit and Integration Test Suites", "Production Cloud Deployment and Documentation"],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 4 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch Custom Software?",
        answer: "Our turnkey Custom Software packages are fully engineered and delivered within 2 to 4 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "clinic-website-and-appointment-system",
    name: "Clinic Website and Doctor Appointment Booking System",
    shortName: "Clinic and Healthcare Websites",
    category: "industry",
    headline: "Healthcare Websites and 24/7 WhatsApp AI Receptionists for Doctors and Multi-Branch Clinics",
    subheadline: "Stop losing patients to unanswered calls. High-converting clinic websites with instant OPD slot booking, doctor profiles, and WhatsApp token confirmations.",
    description: "Built specifically for dental clinics, multispeciality hospitals, and healthcare practices. Codube delivers high-trust medical websites that book 3x more patient appointments automatically.",
    features: ["Doctor Profile and Speciality Showcase Pages", "24/7 WhatsApp AI Receptionist for Appointment Tokens", "Automated Patient Consultation Fee Reminders", "Google Maps Local Healthcare SEO and Review Funnels", "HIPAA-Conscious Data Privacy and Encryption", "Proven on Real Diagnostic and Hospital Platforms"],
    deliverables: ["Turnkey 5-Page Clinic Website (Home, About, Doctors, Services, Contact)", "Automated WhatsApp OPD Booking Bot", "Direct Google Sheets Patient Sync", "Local Doctor SEO and Map Schema Configuration"],
    startingPrice: "$999 (INR 19,999 Complete)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Clinic and Healthcare Websites?",
        answer: "Our turnkey Clinic and Healthcare Websites packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "real-estate-website-development",
    name: "Real Estate Website and Lead Generation System",
    shortName: "Real Estate Websites",
    category: "industry",
    headline: "Luxury Real Estate Websites with Interactive Floor Plans and 24/7 VIP WhatsApp Sales Bot",
    subheadline: "Designed for property builders, real estate agencies, and brokers. Showcase property listings, capture high-net-worth buyer leads, and automate site tour bookings.",
    description: "Real estate buyers expect instantaneous responses. Codube builds high-end luxury property websites integrated with an automated WhatsApp sales bot that sends floor plans, brochures, and schedules site tours.",
    features: ["Luxury Architectural and Floor Plan Showcase Gallery", "Automated WhatsApp Site Visit Booking Bot", "Instant Digital Brochure and Price Sheet Delivery", "Interactive EMI and Loan Eligibility Calculator", "High-Converting Landing Pages for Google and Meta Ads", "Lead Routing to Senior Property Advisors"],
    deliverables: ["Custom Property Showcase Website with Virtual Tours", "WhatsApp Sales Assistant with Instant Brochure Send", "Facebook and Google Ads Lead Webhook Integration", "Agent and Property Management Admin Panel"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Real Estate Websites?",
        answer: "Our turnkey Real Estate Websites packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "saas-product-development-company",
    name: "SaaS Product Development and MVP Studio",
    shortName: "SaaS and MVP Studio",
    category: "custom",
    headline: "Turn Your Startup Idea Into a Production-Ready SaaS Platform in 3 Weeks",
    subheadline: "Full-stack SaaS architecture with multi-tenant auth, subscription billing, interactive dashboards, and scalable edge deployment.",
    description: "Building a software startup? Don't waste 6 months with slow agencies. Codube is an elite MVP studio that designs, builds, and launches revenue-ready SaaS products in weeks.",
    features: ["Multi-Tenant User Auth (Clerk, NextAuth, OAuth)", "Stripe / LemonSqueezy Recurring Subscription Billing", "Interactive Analytics and Metric Dashboards", "Scalable Serverless Backend (Supabase / PostgreSQL / AWS)", "Clean Reusable Component Architecture", "Production-Grade Security and Role-Based Permissions"],
    deliverables: ["High-Converting SaaS Marketing Landing Page", "Customer App Portal with Billing and Settings", "Admin Super-User Monitoring Console", "Automated Stripe Webhooks and Transactional Emails"],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 3 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch SaaS and MVP Studio?",
        answer: "Our turnkey SaaS and MVP Studio packages are fully engineered and delivered within 2 to 3 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "nextjs-development-company",
    name: "Next.js Web Application Development",
    shortName: "Next.js Development",
    category: "web",
    headline: "High-Performance Next.js 14 and React Web Applications",
    subheadline: "Fast server-side rendered (SSR), static site generated (SSG), and edge-computed web applications that outrank competitors on Google.",
    description: "Next.js is the gold standard of modern web engineering. Codube leverages React Server Components, Turbopack, and Edge API routes to build web applications with zero lag and exceptional SEO.",
    features: ["Next.js 14 App Router and React Server Components", "Dynamic Incremental Static Regeneration (ISR)", "Sub-200ms Largest Contentful Paint (LCP)", "Complete TypeScript Type Safety", "Integrated Headless CMS or Supabase Backend", "100% SEO Friendly with Automatic Sitemaps and Schema"],
    deliverables: ["Production-Optimized Next.js Source Code", "Vercel or AWS Amplify Deployment", "Lighthouse 95+ Audit Report", "Documentation and Developer Handover"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Next.js Development?",
        answer: "Our turnkey Next.js Development packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "ecommerce-website-development",
    name: "E-Commerce Website and Direct-To-Consumer Store",
    shortName: "E-Commerce Development",
    category: "web",
    headline: "High-Converting Headless E-Commerce Websites That Drive Repeat Sales",
    subheadline: "Lightning-fast shopping experience with instant cart checkouts, localized payment gateways, and automated WhatsApp order tracking.",
    description: "Every 100ms of checkout lag costs 1% in lost sales. Codube builds custom modern e-commerce stores engineered for frictionless purchasing, mobile optimization, and high average order value.",
    features: ["Sub-Second Product Browsing and Instant Search", "Frictionless 1-Click Mobile Checkout Funnel", "Stripe, Razorpay, UPI and Apple Pay Integration", "Automated WhatsApp Order Confirmation and Tracking", "Inventory and Order Management Dashboard", "Abandoned Cart Recovery Automation"],
    deliverables: ["Custom E-Commerce Store with Product Catalog", "Payment Gateway and Shipping Integration", "WhatsApp Notification Webhook", "Admin Inventory and Sales Dashboard"],
    startingPrice: "$1,499 (INR 29,999 for India)",
    deliveryDays: "10 Days",
    faqs: [
      {
        question: "How fast can you build and launch E-Commerce Development?",
        answer: "Our turnkey E-Commerce Development packages are fully engineered and delivered within 10 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "hire-dedicated-developers",
    name: "Hire Dedicated Full-Stack and AI Developers",
    shortName: "Hire Developers",
    category: "custom",
    headline: "Hire Senior Full-Stack and AI Engineers on Demand - Zero Recruitment Hassle",
    subheadline: "Get top 1% engineers skilled in Next.js, Node.js, Python, AI Agents, and AWS. Direct communication, daily standups, and transparent hourly/monthly retainers.",
    description: "Need specialized engineering firepower without high recruitment agency fees? Hire dedicated developers from Codube led by hackathon-winning talent for your custom project.",
    features: ["Top 1% Vetted Full-Stack and AI Developers", "Direct Slack / WhatsApp Communication and Daily Standups", "Flexible Engagement: Full-Time, Part-Time, or Fixed Sprint", "Zero Overhead: We Handle Infrastructure, Equipment and Taxes", "Fast Onboarding: Developer Starts Within 48 Hours", "Strict Code Reviews and CI/CD Quality Control"],
    deliverables: ["Dedicated Full-Time or Part-Time Software Engineer", "Daily Git Commits and Agile Sprint Reports", "100% Intellectual Property Assigned to You", "Flexible 2-Week Trial Period"],
    startingPrice: "$1,999 / month or Milestone Quote",
    deliveryDays: "Start in 48 Hours",
    faqs: [
      {
        question: "How fast can you build and launch Hire Developers?",
        answer: "Our turnkey Hire Developers packages are fully engineered and delivered within Start in 48 Hours with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "dental-clinic-website-development",
    name: "Dental Clinic Website and Patient Booking AI",
    shortName: "Dental Websites",
    category: "industry",
    headline: "High-Converting Dental Practice Websites with 24/7 WhatsApp AI Appointment Booking",
    subheadline: "Attract high-value implant, cosmetic, and orthodontic dental patients. Automated smile consultation bookings, before/after showcases, and Google Maps Local SEO.",
    description: "Dental patients want fast, reassuring answers on treatment costs and timings. Codube engineers modern dental websites equipped with automated 24/7 WhatsApp AI bots that book consultations in 30 seconds.",
    features: ["Smile Transformation and Before/After Treatment Showcase", "24/7 WhatsApp AI Dental Receptionist for Consultation Booking", "Doctor Credentials and Specialized Dentistry Profiles", "Google Maps Local Dental SEO and Review Aggregator", "Mobile-First 1-Click Call and Directions Buttons", "100% IP and Source Code Ownership"],
    deliverables: ["Custom 5-Page Dental Clinic Website", "Official WhatsApp Booking Assistant", "Google Business Profile Map Schema", "Admin Portal for Patient Reviews and Photo Uploads"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Dental Websites?",
        answer: "Our turnkey Dental Websites packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "full-stack-web-developer",
    name: "Full-Stack Web Developers and Software Engineers",
    shortName: "Full-Stack Developers",
    category: "custom",
    headline: "Hire Senior Full-Stack Engineers Led by Hackathon Champions",
    subheadline: "End-to-end full-stack web and mobile application engineering using Next.js 14, Node.js, Python, PostgreSQL, and AWS.",
    description: "Whether you need a complete web application from scratch or an elite developer to accelerate your existing roadmap, Codube delivers top-tier engineering with zero recruitment friction.",
    features: ["Full-Stack Frontend and Backend Architectural Mastery", "Next.js, React, Node.js, Python, FastAPI and GraphQL", "PostgreSQL, Supabase, Redis and Edge Data Caching", "Enterprise CI/CD Pipelines and Clean Code Standards", "Direct Founder Architecture Oversight by Abhishek Jain", "Fast 48-Hour Onboarding and Transparent Milestones"],
    deliverables: ["Production-Ready Application Codebase", "Comprehensive API Documentation and Schemas", "Automated Testing Suites (Unit and E2E)", "Cloud Deployment on Vercel, AWS, or GCP"],
    startingPrice: "$2,499 (Milestone Quote)",
    deliveryDays: "2 to 4 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch Full-Stack Developers?",
        answer: "Our turnkey Full-Stack Developers packages are fully engineered and delivered within 2 to 4 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "b2b-portal-and-web-application",
    name: "B2B Portal and Enterprise Web Application Development",
    shortName: "B2B Portals",
    category: "custom",
    headline: "Custom B2B Client Portals, Vendor Systems and Internal Business Dashboards",
    subheadline: "Eliminate manual spreadsheets and messy emails. Streamline operations with secure multi-role portals, real-time analytics, and automated invoicing.",
    description: "Modern businesses run on custom portals. Codube engineers bespoke B2B client and vendor platforms with role-based access control, automated invoice generation, and real-time operational tracking.",
    features: ["Multi-Role Granular Permission Controls (Admin, Vendor, Client)", "Real-Time Data Visualization and Exportable Reports", "Automated Invoice Generation and Payment Tracking", "Secure Document Vault and File Sharing (AWS S3 / Cloudflare)", "Custom Workflows and Order Approval Pipelines", "Encrypted Authentication with Multi-Factor Support"],
    deliverables: ["Fully Functional B2B Portal Web Application", "Interactive Client and Vendor Dashboards", "PDF Invoicing and Accounting Integration", "Complete Admin Configuration System"],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 3 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch B2B Portals?",
        answer: "Our turnkey B2B Portals packages are fully engineered and delivered within 2 to 3 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "mvp-development-for-startups",
    name: "MVP Development for Startups and Funded Founders",
    shortName: "MVP for Startups",
    category: "custom",
    headline: "Launch Your Startup MVP in 14 Days - Built to Impress Users and Investors",
    subheadline: "Rapid prototyping and production MVP engineering. High-velocity Next.js 14 architectures engineered to validate your market and secure initial traction.",
    description: "Speed is everything for a startup. Codube takes founders from wireframe to live production MVP in 2 weeks with clean scalable code, frictionless onboarding, and built-in monetization.",
    features: ["14-Day Rapid MVP Turnaround Guarantee", "Core Feature Scoping and Frictionless User Experience", "Stripe / Global Payment Integration on Day 1", "Investor-Ready Architecture and Tech Due-Diligence", "100% Source Code and GitHub IP Assignment", "Mentorship from Hackathon-Winning Founder Abhishek Jain"],
    deliverables: ["Live Production Web or Mobile Application", "Landing Page Engineered for User Acquisition", "Analytics and User Session Recording Setup", "Technical Architecture Pitch Deck Documentation"],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "14 Days",
    faqs: [
      {
        question: "How fast can you build and launch MVP for Startups?",
        answer: "Our turnkey MVP for Startups packages are fully engineered and delivered within 14 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "mobile-app-development-company",
    name: "Mobile App Development Company",
    shortName: "Mobile Apps",
    category: "custom",
    headline: "Cross-Platform iOS and Android Apps Built with React Native and Flutter",
    subheadline: "High-performance, app store-ready mobile applications with offline sync, push notifications, and payment gateways.",
    description: "From initial UX prototyping to App Store and Google Play deployment, Codube engineers native-speed cross-platform mobile apps for startups and high-growth brands.",
    features: ["React Native and Flutter Native-Speed Performance", "Offline Data Sync with SQLite / WatermelonDB", "Push Notifications and WhatsApp Webhooks", "Biometric Auth (FaceID / Fingerprint)", "Stripe, Apple Pay and Google Pay Integration", "App Store and Play Store Approval Guarantee"],
    deliverables: ["iOS and Android Production App Builds", "Figma Design System and Interactive Prototype", "Backend API Endpoints and Admin Console", "Store Listing and Submission Management"],
    startingPrice: "$2,999 (Milestone-Based)",
    deliveryDays: "3 to 5 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch Mobile Apps?",
        answer: "Our turnkey Mobile Apps packages are fully engineered and delivered within 3 to 5 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "ai-workflow-automation-services",
    name: "AI Workflow Automation Agency",
    shortName: "AI Workflow Automation",
    category: "ai",
    headline: "Automate Repetitive Business Tasks with Custom Python and AI Agents",
    subheadline: "Eliminate manual data entry, automate lead qualification, and connect your CRM with custom LLMs, n8n, and webhooks.",
    description: "Stop paying staff to copy-paste between spreadsheets. Codube engineers autonomous AI workflows that run 24/7 without fatigue or human error.",
    features: ["Multi-Step Autonomous AI Agent Workflows", "Custom Document and PDF Data Extraction", "Bi-Directional CRM and ERP Auto-Sync", "WhatsApp and Email Trigger Automations", "Zero-Staff Dependency for Operations", "Detailed Execution and Error Logging"],
    deliverables: ["Custom n8n / Python Automation Scripts", "Secure Cloud Webhook Infrastructure", "Executive Monitoring Dashboard", "Complete Workflow Documentation"],
    startingPrice: "$799 (INR 17,999 for India)",
    deliveryDays: "5 Days",
    faqs: [
      {
        question: "How fast can you build and launch AI Workflow Automation?",
        answer: "Our turnkey AI Workflow Automation packages are fully engineered and delivered within 5 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "shopify-to-nextjs-migration",
    name: "Shopify to Next.js Headless Migration",
    shortName: "Headless Commerce",
    category: "web",
    headline: "Transform Your Slow Shopify Store Into a Sub-Second Next.js Powerhouse",
    subheadline: "Keep your Shopify backend and inventory while upgrading to a lightning-fast custom React/Next.js storefront that doubles mobile checkout conversions.",
    description: "Shopify app bloat kills conversion rates. Codube migrates your storefront to Headless Next.js, slashing load times to under 300ms while keeping your existing Shopify inventory, payments, and fulfillment intact.",
    features: ["Sub-Second Instant Product Browsing", "Zero App-Bloat or Render Lag", "Complete Shopify Storefront API Integration", "Custom 1-Click Checkout Funnel", "Preserved SEO Rankings and Backlink Authority", "Mobile Conversion Rate Optimization"],
    deliverables: ["Headless Next.js Custom Storefront", "Shopify Storefront API Webhook Setup", "Vercel Edge Global CDN Deployment", "Zero Downtime Cutover Guarantee"],
    startingPrice: "$1,999 (Milestone-Based)",
    deliveryDays: "10 Days",
    faqs: [
      {
        question: "How fast can you build and launch Headless Commerce?",
        answer: "Our turnkey Headless Commerce packages are fully engineered and delivered within 10 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "figma-to-nextjs-tailwind-code",
    name: "Figma to Next.js and Tailwind CSS Conversion",
    shortName: "Figma to Code",
    category: "dev",
    headline: "Pixel-Perfect Figma Designs Converted to Production Next.js 14 Code",
    subheadline: "Clean TypeScript components, fluid responsive breakpoints, and zero AI spaghetti code. Delivered in 48 hours.",
    description: "Designed an award-winning layout in Figma? Codube translates your design into clean, hand-crafted Next.js 14 and Tailwind CSS components with fluid responsive layouts and accessible semantic HTML.",
    features: ["100% Pixel-Perfect Match with Figma Mockups", "Clean Modular React Component Hierarchy", "Full Mobile, Tablet and Desktop Responsiveness", "Fluid Framer Motion Micro-Interactions", "99+ Google Lighthouse Performance Score", "Strict TypeScript and Zero Build Errors"],
    deliverables: ["Production-Ready Next.js 14 Codebase", "Complete Tailwind CSS Styling System", "Reusable UI Component Library", "GitHub Repository and Live Vercel Preview"],
    startingPrice: "$499 (INR 14,999 for India)",
    deliveryDays: "48 Hours",
    faqs: [
      {
        question: "How fast can you build and launch Figma to Code?",
        answer: "Our turnkey Figma to Code packages are fully engineered and delivered within 48 Hours with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "gym-fitness-club-website-system",
    name: "Gym and Fitness Club Website with WhatsApp Booking",
    shortName: "Fitness Websites",
    category: "industry",
    headline: "Fitness Club Websites with Automated Trial Class Booking and WhatsApp CRM",
    subheadline: "Turn local gym searchers into active members. Showcase trainers, membership plans, and automate free trial bookings on WhatsApp.",
    description: "Fitness seekers decide within seconds. Codube builds high-energy fitness club websites with instant 1-click free trial passes, schedule calendars, and automated WhatsApp follow-ups.",
    features: ["Interactive Class Schedule and Trainer Showcase", "24/7 WhatsApp Free Trial Booking Bot", "Membership Tier Comparison and Payment Links", "Google Maps Local Gym SEO and Review Capture", "Direct WhatsApp Lead Sync to Trainer Desk", "Mobile-First Visual Fitness Experience"],
    deliverables: ["High-Impact 5-Page Fitness Website", "Official WhatsApp Trial Booking Assistant", "Google Business Profile Local SEO Setup", "Trainer and Schedule Admin Dashboard"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Fitness Websites?",
        answer: "Our turnkey Fitness Websites packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "restaurant-cloud-kitchen-online-ordering",
    name: "Restaurant and Cloud Kitchen Direct Ordering Website",
    shortName: "Restaurant Ordering",
    category: "industry",
    headline: "Commission-Free Direct Online Ordering Websites for Restaurants",
    subheadline: "Stop paying 25-30% commissions to aggregators. Build a branded online ordering website with instant WhatsApp order routing.",
    description: "Keep 100% of your restaurant profits. Codube builds mouthwatering digital menu websites with instant table booking, takeout ordering, and automated kitchen WhatsApp notifications.",
    features: ["High-Speed Visual Food Menu and Add-On Selection", "0% Commission Direct Ordering Funnel", "Instant Kitchen WhatsApp Order Alerts", "Table Reservation and Private Dining Booking Bot", "Integrated Payment Gateways and Delivery Fees", "Customer Database Ownership for Repeat Promotions"],
    deliverables: ["Custom Branded Restaurant Ordering Website", "Automated WhatsApp Kitchen and Customer Receipts", "Menu and Price Management Admin Portal", "Local Foodie Google Map Schema Setup"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Restaurant Ordering?",
        answer: "Our turnkey Restaurant Ordering packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "car-rental-chauffeur-booking-website",
    name: "Car Rental and Luxury Fleet Booking Website",
    shortName: "Car Rental Booking",
    category: "industry",
    headline: "Luxury Fleet Showcase Websites with 24/7 WhatsApp Rate Quote and Booking Bot",
    subheadline: "Showcase luxury fleets, self-drive rentals, and airport transfers. Instant date selection, deposit payments, and booking confirmations.",
    description: "Designed for car hire agencies and chauffeur services. Codube builds sleek automotive websites where clients can browse fleets, check availability, and lock rental deposits via WhatsApp.",
    features: ["Interactive Fleet Catalog with Specs and Pricing", "Date and Location Pickup/Dropoff Selector", "WhatsApp Rate Quote and ID Verification Bot", "Instant Deposit and Advance Payment Gateway", "Chauffeur Transfer Route Pricing Calculator", "100% Source Code and Fleet Admin Panel"],
    deliverables: ["Custom Luxury Automotive Website", "Automated WhatsApp Booking Desk", "Vehicle Fleet Admin Management Portal", "Google Maps Local Chauffeur SEO"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Car Rental Booking?",
        answer: "Our turnkey Car Rental Booking packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "hotel-resort-direct-booking-website",
    name: "Boutique Hotel and Luxury Resort Direct Booking Website",
    shortName: "Hotel Booking Engine",
    category: "industry",
    headline: "Luxury Hospitality Websites Engineered for Direct, Commission-Free Room Reservations",
    subheadline: "Ditch OTA commission fees. Beautiful room showcases, interactive date pickers, and automated WhatsApp guest concierge bots.",
    description: "Hospitality is about emotion and trust. Codube builds award-winning resort and hotel websites that evoke luxury and convert high-paying travelers directly into direct bookings.",
    features: ["Immersive Full-Screen Suite and Villa Photography", "Direct Date Availability and Room Selection Engine", "24/7 WhatsApp Guest Concierge and Inquiry Bot", "Integrated International Stripe and Domestic UPI", "Zero OTA Booking Commission Fees", "Local Tourist Attraction Guide and Schema"],
    deliverables: ["Turnkey Hospitality Marketing and Booking Website", "WhatsApp Guest Concierge and Tour Bot", "Room Inventory and Tariff Admin Console", "LodgingBusiness Google Rich Schema Setup"],
    startingPrice: "$1,499 (INR 29,999 for India)",
    deliveryDays: "10 Days",
    faqs: [
      {
        question: "How fast can you build and launch Hotel Booking Engine?",
        answer: "Our turnkey Hotel Booking Engine packages are fully engineered and delivered within 10 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "salon-spa-appointment-booking-bot",
    name: "Luxury Salon and Wellness Spa Booking Website and Bot",
    shortName: "Salon and Spa Booking",
    category: "industry",
    headline: "Salon and Spa Websites with Automated Stylist Selection and WhatsApp Scheduling",
    subheadline: "Eliminate phone call scheduling chaos. Showcase service rate cards, stylist portfolios, and automate appointment slot confirmations.",
    description: "Beauty clients expect effortless luxury. Codube builds glamorous salon and spa websites that let clients choose treatments, select senior stylists, and confirm appointments on WhatsApp.",
    features: ["Visual Treatment Rate Card and Service Duration Guide", "Stylist and Therapist Portfolio Galleries", "24/7 WhatsApp Slot Reservation and Token Bot", "Automated 2-Hour Appointment Reminders", "Package Deals and Gift Voucher Checkout", "Google Maps Local Beauty Salon Schema"],
    deliverables: ["High-End Salon and Spa Showcase Website", "WhatsApp Appointment Booking Assistant", "Service Rate and Stylist Admin Console", "Local Review Capture System"],
    startingPrice: "$999 (INR 19,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Salon and Spa Booking?",
        answer: "Our turnkey Salon and Spa Booking packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "law-firm-attorney-website-development",
    name: "Law Firm and Legal Practice Website Development",
    shortName: "Law Firm Websites",
    category: "industry",
    headline: "High-Trust Law Firm Websites Engineered for Confidential Client Consultations",
    subheadline: "Establish immediate legal authority. Showcase partner credentials, practice areas, and streamline confidential case evaluations.",
    description: "Legal clients require unmatched discretion and authority. Codube builds sophisticated law firm websites that convey courtroom mastery, articulate case track records, and capture qualified legal leads.",
    features: ["Partner and Senior Counsel Credential Profiles", "Detailed Practice Area Case Study Breakdown", "Encrypted Confidential Case Evaluation Form", "Direct WhatsApp Legal Intake Routing", "Bar Association Compliance Standard Layouts", "High-Authority Legal Practice Schema Markup"],
    deliverables: ["Sophisticated Corporate Law Firm Website", "Confidential Intake Funnel and Document Vault", "Attorney Profile and Publication Management", "Local Legal Service Google Entity Setup"],
    startingPrice: "$1,299 (INR 24,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Law Firm Websites?",
        answer: "Our turnkey Law Firm Websites packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "architect-interior-designer-website",
    name: "Architect and Interior Design Portfolio Website",
    shortName: "Architect Portfolios",
    category: "industry",
    headline: "Visual Architectural and Interior Design Websites with 3D Walkthrough Galleries",
    subheadline: "Win high-budget commercial and luxury residential clients. High-res imagery, project blueprints, and frictionless consultation booking.",
    description: "For elite architects and interior design studios, your portfolio is your entire reputation. Codube builds museum-quality digital portfolio websites with fluid image galleries that load with zero lag.",
    features: ["Full-Screen High-Res Architectural Project Showcase", "Before/After Interior Transformation Sliders", "Interactive Project Scope and Budget Inquiries", "Matterport 3D and Video Walkthrough Integration", "Sub-Second Image Loading via Edge WebP CDN", "100% Code Ownership and Custom Project Admin"],
    deliverables: ["Custom Luxury Architectural Portfolio Website", "Project Case Study and Gallery Management System", "WhatsApp VIP Consultation Booking Assistant", "Architectural Firm Google Knowledge Graph Setup"],
    startingPrice: "$1,199 (INR 24,999 for India)",
    deliveryDays: "7 Days",
    faqs: [
      {
        question: "How fast can you build and launch Architect Portfolios?",
        answer: "Our turnkey Architect Portfolios packages are fully engineered and delivered within 7 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "landing-page-development-agency",
    name: "High-Converting Landing Page Design Agency",
    shortName: "Landing Page Agency",
    category: "web",
    headline: "Conversion-Engineered Landing Pages That Cut Ad Spend Waste in Half",
    subheadline: "Designed specifically for Google Ads, Meta Ads, and high-velocity B2B sales funnels. Sub-200ms load times and clear outcome-driven copy.",
    description: "Stop sending expensive paid ad clicks to bloated, confusing homepages. Codube engineers razor-sharp, single-purpose landing pages designed to maximize form fills and direct WhatsApp sales calls.",
    features: ["Ruthlessly Optimized Above-The-Fold Value Proposition", "Frictionless 2-Field Mobile Lead Funnels", "Sub-200ms Largest Contentful Paint (LCP)", "A/B Split-Testing Ready Architecture", "Integrated Tracking: Meta Pixel, Google Tag Manager", "Direct WhatsApp CTA with Pre-Filled UTM Tags"],
    deliverables: ["High-Converting Production Landing Page", "Custom Thank You / Booking Confirmation Page", "Analytics and Conversion Tag Configuration", "Speed and CRO Optimization Report"],
    startingPrice: "$499 (INR 14,999 for India)",
    deliveryDays: "3 Days",
    faqs: [
      {
        question: "How fast can you build and launch Landing Page Agency?",
        answer: "Our turnkey Landing Page Agency packages are fully engineered and delivered within 3 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "ui-ux-design-product-studio",
    name: "Linear-Level UI/UX Product Design Studio",
    shortName: "UI/UX Product Design",
    category: "custom",
    headline: "Futuristic Cyber Dark UI/UX Design Engineered for SaaS and Modern Brands",
    subheadline: "Move beyond generic templates. Linear-level simplicity, futuristic dark aesthetics, and mathematically balanced design systems.",
    description: "First impressions determine whether users buy or bounce. Codube crafts international-standard UI/UX design systems that combine Apple-level minimalism with futuristic cyber depth.",
    features: ["Comprehensive Figma Design System and Component Tokens", "Interactive High-Fidelity Desktop and Mobile Prototypes", "Obsidian Cyber Dark and Ambient Neon Accent Aesthetics", "Micro-Interactions and Fluid User Flow Wireframing", "Direct Developer Handover Documentation", "Lead by Award-Winning Product Designers"],
    deliverables: ["Complete Figma Master Design File", "Interactive Clickable Prototype for Usability Testing", "Design Tokens (Colors, Typography, Spacing)", "Assets Export (SVG, PNG, Animations)"],
    startingPrice: "$1,499 (Milestone-Based)",
    deliveryDays: "7 to 10 Days",
    faqs: [
      {
        question: "How fast can you build and launch UI/UX Product Design?",
        answer: "Our turnkey UI/UX Product Design packages are fully engineered and delivered within 7 to 10 Days with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
  {
    id: "api-cloud-infrastructure-engineering",
    name: "API and Cloud Infrastructure Engineering",
    shortName: "Cloud Infrastructure",
    category: "custom",
    headline: "High-Throughput REST/GraphQL APIs and Scalable Cloud Architectures",
    subheadline: "Engineered with Node.js, Python, PostgreSQL, and AWS. Built to handle millions of requests with zero downtime.",
    description: "Scaling your application backend? Codube architectures cloud serverless pipelines, microservices, and high-concurrency database schemas engineered for 99.99% uptime.",
    features: ["High-Concurrency REST and GraphQL API Design", "PostgreSQL Database Indexing and Connection Pooling", "AWS Lambda, S3, CloudFront and Serverless Edge", "Redis In-Memory Caching and Rate Limiting", "Secure JWT / OAuth Authentication Systems", "Automated CI/CD Deployment with Zero Downtime"],
    deliverables: ["Production-Ready Backend Source Code", "OpenAPI / Swagger Interactive Documentation", "Automated Stress and Security Test Scripts", "Cloud Infrastructure-as-Code Setup"],
    startingPrice: "$2,499 (Milestone-Based)",
    deliveryDays: "2 to 4 Weeks",
    faqs: [
      {
        question: "How fast can you build and launch Cloud Infrastructure?",
        answer: "Our turnkey Cloud Infrastructure packages are fully engineered and delivered within 2 to 4 Weeks with guaranteed 100% source code ownership."
      },
      {
        question: "Do I own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. Unlike traditional agencies that hold code hostage with monthly fees, Codube transfers 100% full GitHub repository ownership to you."
      },
      {
        question: "Is it optimized for mobile devices and Google Core Web Vitals?",
        answer: "Yes. Every page is built with Next.js 14 server components, achieving sub-200ms load times and 95+ PageSpeed on mobile devices."
      },
      {
        question: "Can we integrate 24/7 WhatsApp AI automated booking?",
        answer: "Yes! We connect directly with the official Meta WhatsApp Cloud API to confirm appointments and qualify leads in under 2 seconds."
      }
    ]
  },
];

export const SEO_LOCATIONS: SeoLocation[] = [
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    region: "jaipur",
    currency: "INR",
    localHubName: "Jaipur Pink City",
    businessContext: "Rajasthan's leading business capital with booming medical clinics, real estate projects, and innovative startups.",
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
  },
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    state: "Delhi",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "National Capital Region",
    businessContext: "India's highest-grossing business metropolitan territory spanning Delhi, Gurgaon, and Noida corporate hubs.",
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
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
    phoneCode: "+91"
  },
  {
    id: "udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Udaipur Lake City & Tourism Capital",
    businessContext: "Rajasthan's premier hospitality and destination wedding capital requiring high-end direct booking engines.",
    phoneCode: "+91"
  },
  {
    id: "jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Jodhpur Sun City & Export Hub",
    businessContext: "Major industrial, handicraft export, and medical university center with rising demand for modern web systems.",
    phoneCode: "+91"
  },
  {
    id: "kota",
    city: "Kota",
    state: "Rajasthan",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Kota Education & Industrial City",
    businessContext: "India's coaching powerhouse with hundreds of educational academies requiring high-traffic student intake systems.",
    phoneCode: "+91"
  },
  {
    id: "faridabad",
    city: "Faridabad",
    state: "Haryana",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Faridabad Industrial Corridor",
    businessContext: "Leading NCR manufacturing and industrial territory adopting custom ERP, inventory, and B2B vendor portals.",
    phoneCode: "+91"
  },
  {
    id: "ghaziabad",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Ghaziabad Commercial Hub",
    businessContext: "Fast-expanding NCR commercial gateway home to medical centers, real estate projects, and wholesale distributors.",
    phoneCode: "+91"
  },
  {
    id: "navi-mumbai",
    city: "Navi Mumbai",
    state: "Maharashtra",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Vashi & Belapur Corporate District",
    businessContext: "Planned tech, corporate, and port corridor hosting modern corporate offices and health clinics.",
    phoneCode: "+91"
  },
  {
    id: "thane",
    city: "Thane",
    state: "Maharashtra",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Thane West & Ghodbunder Tech Corridor",
    businessContext: "Rapidly expanding Mumbai metropolitan tech and luxury residential hub with high healthcare demand.",
    phoneCode: "+91"
  },
  {
    id: "vadodara",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Alkapuri & OP Road Business Center",
    businessContext: "Gujarat's cultural and industrial capital, home to major pharma, chemical, and engineering headquarters.",
    phoneCode: "+91"
  },
  {
    id: "rajkot",
    city: "Rajkot",
    state: "Gujarat",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Yagnik Road & Kalawad Commercial Corridor",
    businessContext: "Saurashtra's economic hub with flourishing engineering manufacturers, jewelry exporters, and private clinics.",
    phoneCode: "+91"
  },
  {
    id: "nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "MIHAN Multi-Modal Logistics & IT Hub",
    businessContext: "Geographic center of India rapidly transforming into a premier logistics, aerospace, and software destination.",
    phoneCode: "+91"
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Manchester of South India & Avinashi Road",
    businessContext: "Major textile, precision engineering, and tech startup capital with global export clientele.",
    phoneCode: "+91"
  },
  {
    id: "mysore",
    city: "Mysore",
    state: "Karnataka",
    country: "India",
    region: "india",
    currency: "INR",
    localHubName: "Hebbal Industrial Area & IT Hub",
    businessContext: "Karnataka's second IT capital known for clean green growth, educational institutions, and software export units.",
    phoneCode: "+91"
  },
  {
    id: "dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "DIFC, Business Bay & Healthcare City",
    businessContext: "The Middle East's global technology and medical hub with high demand for premium AI WhatsApp receptionists and modern digital products.",
    phoneCode: "+971"
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
    phoneCode: "+971"
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
    phoneCode: "+971"
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
    phoneCode: "+971"
  },
  {
    id: "sharjah",
    city: "Sharjah",
    state: "Sharjah",
    country: "United Arab Emirates",
    region: "global",
    currency: "AED",
    localHubName: "Sharjah Research Technology & Innovation Park",
    businessContext: "UAE's cultural and education hub adopting AI automation and digital services at exponential rates.",
    phoneCode: "+971"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
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
    phoneCode: "+1"
  },
  {
    id: "dallas",
    city: "Dallas",
    state: "Texas",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Dallas Tech Corridor & Uptown",
    businessContext: "Major North American corporate headquarters hub for telecom, finance, and healthcare systems.",
    phoneCode: "+1"
  },
  {
    id: "houston",
    city: "Houston",
    state: "Texas",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Texas Medical Center & Energy Corridor",
    businessContext: "Home to the world's largest medical complex, demanding bulletproof digital patient intake solutions.",
    phoneCode: "+1"
  },
  {
    id: "chicago",
    city: "Chicago",
    state: "Illinois",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Fulton Market & Loop Tech Hub",
    businessContext: "Midwest powerhouse with massive B2B logistics, financial trading firms, and legal enterprises.",
    phoneCode: "+1"
  },
  {
    id: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Midtown Tech Square & Buckhead",
    businessContext: "Premier tech and transaction capital of the Southeast with booming health-tech and fintech firms.",
    phoneCode: "+1"
  },
  {
    id: "boston",
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Kendall Square & Route 128 Biotech Hub",
    businessContext: "Global capital of healthcare, biotech innovation, and elite academic research.",
    phoneCode: "+1"
  },
  {
    id: "denver",
    city: "Denver",
    state: "Colorado",
    country: "United States",
    region: "global",
    currency: "USD",
    localHubName: "Denver Tech Center & LoDo",
    businessContext: "High-growth Mountain West tech corridor with booming SaaS startups and outdoor lifestyle brands.",
    phoneCode: "+1"
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
    phoneCode: "+44"
  },
  {
    id: "birmingham",
    city: "Birmingham",
    state: "West Midlands",
    country: "United Kingdom",
    region: "global",
    currency: "USD",
    localHubName: "Birmingham Colmore Business District",
    businessContext: "UK's second-largest city with thriving digital agencies, healthcare providers, and logistics hubs.",
    phoneCode: "+44"
  },
  {
    id: "manchester",
    city: "Manchester",
    state: "Greater Manchester",
    country: "United Kingdom",
    region: "global",
    currency: "USD",
    localHubName: "MediaCityUK & Northern Tech Hub",
    businessContext: "Dynamic UK innovation hub with booming creative agencies, fintechs, and e-commerce brands.",
    phoneCode: "+44"
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
    phoneCode: "+1"
  },
  {
    id: "vancouver",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada",
    region: "global",
    currency: "USD",
    localHubName: "Yaletown & Silicon Valley North",
    businessContext: "Pacific tech hub home to global software studios, clean-tech, and luxury real estate networks.",
    phoneCode: "+1"
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
    phoneCode: "+61"
  },
  {
    id: "melbourne",
    city: "Melbourne",
    state: "Victoria",
    country: "Australia",
    region: "global",
    currency: "USD",
    localHubName: "Docklands & Cremorne Innovation Precinct",
    businessContext: "Australia's tech and creative capital adopting automated business solutions at record pace.",
    phoneCode: "+61"
  },
  {
    id: "brisbane",
    city: "Brisbane",
    state: "Queensland",
    country: "Australia",
    region: "global",
    currency: "USD",
    localHubName: "Brisbane CBD & Fortitude Valley Tech",
    businessContext: "Booming Asia-Pacific commercial gateway preparing for the 2032 Olympic digital expansion.",
    phoneCode: "+61"
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
    phoneCode: "+65"
  },
];

export const SERVICE_ALIASES: Record<string, string> = {
  "web-development": "website-development-company",
  "business-automation": "whatsapp-ai-agent-development",
  "custom-software": "custom-software-development-company",
  "saas-development": "saas-product-development-company",
  "ai-development": "ai-workflow-automation-services",
};

export const GLOBAL_DEFAULT_LOCATION: SeoLocation = {
  id: "global",
  city: "Global & India",
  state: "Worldwide",
  country: "Global",
  region: "global",
  currency: "USD",
  localHubName: "Global Tech Hub (US, UAE, India)",
  businessContext: "World-class engineering serving clients across the US, UK, UAE, Australia, and India.",
  phoneCode: "+91",
};

export function buildSeoSlug(serviceId: string, locationId: string): string {
  return `${serviceId}-in-${locationId}`;
}

export function getAllSeoSlugs(): string[] {
  const slugs: string[] = [];
  for (const s of SEO_SERVICES) {
    for (const l of SEO_LOCATIONS) {
      slugs.push(buildSeoSlug(s.id, l.id));
    }
  }
  return slugs;
}

export function getSeoPageData(slug: string): GeneratedSeoPage | null {
  // 1. Check if slug is a location-specific SEO combination (e.g. website-development-company-in-jaipur)
  if (slug.includes("-in-")) {
    const parts = slug.split("-in-");
    if (parts.length !== 2) return null;

    const [serviceId, locationId] = parts;
    const service = SEO_SERVICES.find((s) => s.id === serviceId);
    const location = SEO_LOCATIONS.find((l) => l.id === locationId);

    if (!service || !location) return null;

    const isIndia = location.country === "India";
    const displayPrice = isIndia
      ? service.startingPrice.includes("INR") || service.startingPrice.includes("₹")
        ? service.startingPrice.replace("INR ", "₹")
        : "₹19,999 One-Time"
      : service.startingPrice.split("(")[0].trim();

    const title = `${service.name} in ${location.city} | Best Rated Agency | Codube`;
    const metaDescription = `Looking for the best ${service.name.toLowerCase()} in ${location.city}? Codube builds high-speed websites & 24/7 WhatsApp AI agents delivered in ${service.deliveryDays}. Starting at ${displayPrice}. 100% IP Ownership.`;
    const h1 = `${service.name} in ${location.city}`;
    const subheadline = `We help businesses in ${location.city} (${location.localHubName}) grow faster with high-converting digital products and 24/7 WhatsApp AI automation that books appointments while you sleep.`;

    const localTrustNote = `Serving business leaders, clinics, and growth brands across ${location.city} with 100% source code ownership and guaranteed ${service.deliveryDays} delivery.`;

    const targetKeywords = [
      `${service.name.toLowerCase()} in ${location.city.toLowerCase()}`,
      `best ${service.shortName.toLowerCase()} in ${location.city.toLowerCase()}`,
      `${service.shortName.toLowerCase()} agency ${location.city.toLowerCase()}`,
      `hire ${service.shortName.toLowerCase()} ${location.city.toLowerCase()}`,
      `top software company in ${location.city.toLowerCase()}`,
    ];

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

  // 2. Standalone Service Slug (e.g. /services/web-development, /services/saas-development, or direct service ID)
  const resolvedServiceId = SERVICE_ALIASES[slug] || slug;
  const service = SEO_SERVICES.find((s) => s.id === resolvedServiceId);

  if (!service) return null;

  const location = GLOBAL_DEFAULT_LOCATION;
  const displayPrice = service.startingPrice.includes("INR") || service.startingPrice.includes("₹")
    ? service.startingPrice.replace("INR ", "₹")
    : service.startingPrice.split("(")[0].trim();

  const title = `${service.name} | Modern Software & AI Engineering Studio | Codube`;
  const metaDescription = `${service.headline}. ${service.subheadline} Starting at ${displayPrice}. 100% Full Source Code & GitHub Ownership.`;
  const h1 = service.name;
  const subheadline = service.subheadline;
  const localTrustNote = `Engineered for enterprise reliability, high-converting speed, and 100% full GitHub repository ownership.`;

  const targetKeywords = [
    service.name.toLowerCase(),
    service.shortName.toLowerCase(),
    `best ${service.shortName.toLowerCase()} company`,
    `hire ${service.shortName.toLowerCase()}`,
    "codube software studio",
    "top software agency india usa",
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
    faqs: service.faqs,
  };
}

export function getSeoDirectoryData() {
  const jaipurSlugs = SEO_LOCATIONS.filter((l) => l.region === "jaipur");
  const indiaSlugs = SEO_LOCATIONS.filter((l) => l.region === "india");
  const globalSlugs = SEO_LOCATIONS.filter((l) => l.region === "global");

  return {
    services: SEO_SERVICES,
    jaipurLocations: jaipurSlugs,
    indiaLocations: indiaSlugs,
    globalLocations: globalSlugs,
    totalCombinations: SEO_SERVICES.length * SEO_LOCATIONS.length,
  };
}
