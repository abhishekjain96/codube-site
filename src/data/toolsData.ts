export interface ToolField {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "textarea" | "select" | "number";
  options?: string[];
  defaultValue?: string | number;
  required?: boolean;
}

export interface FreeTool {
  id: string;
  name: string;
  shortName: string;
  category: "ai" | "seo" | "growth" | "dev";
  badge?: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  fields: ToolField[];
  outputLabel: string;
  outputFormat: "text" | "code" | "score" | "link";
  codeLanguage?: string;
  whatsappHook: string;
  educationalContent: {
    heading: string;
    paragraphs: string[];
    tips: string[];
  };
}

export const FREE_TOOLS: FreeTool[] = [
  {
    id: "ai-geo-generator",
    name: "AI GEO Generator & LLM Visibility Checker",
    shortName: "AI GEO Checker",
    category: "ai",
    badge: "POPULAR",
    tagline: "Audit your brand's visibility on ChatGPT, Perplexity, Claude & Gemini",
    description: "Check if AI search engines recommend your business. Instantly audit your Generative Engine Optimization (GEO) score and generate compliant llms.txt context files.",
    metaTitle: "Free AI GEO Generator & LLM Visibility Checker | Codube",
    metaDescription: "Free Generative Engine Optimization (GEO) audit tool. Test your brand's AI search visibility and generate a compliant llms.txt in seconds.",
    keywords: ["ai geo generator", "generative engine optimization", "llm visibility checker", "chatgpt seo audit", "ai search ranking"],
    fields: [
      { id: "brandName", label: "Brand / Business Name", placeholder: "e.g. Dr. Joy Dental Clinic", type: "text", required: true },
      { id: "websiteUrl", label: "Website URL", placeholder: "e.g. https://myclinic.com", type: "text" },
      { id: "industry", label: "Industry Category", type: "select", options: ["Healthcare & Clinics", "Real Estate & Housing", "Software & SaaS", "E-Commerce & Retail", "Local Services"], defaultValue: "Healthcare & Clinics" },
      { id: "services", label: "Primary Services / High-Intent Keywords", placeholder: "e.g. Dental Implants, Invisalign, Teeth Whitening", type: "textarea" },
      { id: "location", label: "Target City / Region", placeholder: "e.g. Jaipur, Dubai, or New York", type: "text" },
    ],
    outputLabel: "Your AI GEO Visibility Report & llms.txt File",
    outputFormat: "score",
    whatsappHook: "Hi Abhishek, I used the Free AI GEO Generator on Codube. I want Codube to optimize my business for ChatGPT & Perplexity search.",
    educationalContent: {
      heading: "What is Generative Engine Optimization (GEO)?",
      paragraphs: [
        "Millions of users are bypassing traditional Google searches and directly asking ChatGPT, Perplexity, and Claude for business recommendations.",
        "Generative Engine Optimization (GEO) ensures your brand's structured entities, knowledge graph presence, and llms.txt files are properly understood by AI models.",
      ],
      tips: [
        "Include clear, verifiable facts in your public llms.txt file.",
        "Use Schema.org JSON-LD to declare doctors, founders, pricing, and locations.",
        "Provide direct conversational booking pathways like official WhatsApp bots.",
      ],
    },
  },
  {
    id: "llms-txt-generator",
    name: "Official llms.txt & llms-full.txt Generator",
    shortName: "llms.txt Generator",
    category: "ai",
    badge: "STANDARD",
    tagline: "Generate standard markdown context files for OpenAI, Claude, and Perplexity",
    description: "Create an official /llms.txt file following the llmstxt.org specification. Help AI models understand your pricing, APIs, documentation, and services without hallucinations.",
    metaTitle: "Free llms.txt Generator | Create Official AI Context Files | Codube",
    metaDescription: "Generate a valid, standards-compliant llms.txt file for your website. Help ChatGPT, Perplexity, and Claude crawl and cite your business accurately.",
    keywords: ["llms.txt generator", "create llms.txt", "ai context file", "llmstxt specification", "chatgpt crawler guide"],
    fields: [
      { id: "name", label: "Project or Business Name", placeholder: "e.g. Codube Technologies", type: "text", required: true },
      { id: "url", label: "Website URL", placeholder: "https://codube.io", type: "text", required: true },
      { id: "summary", label: "One-Line Purpose / Tagline", placeholder: "A modern software development and 24/7 WhatsApp AI automation studio.", type: "text", required: true },
      { id: "capabilities", label: "Key Services or Documentation Links (1 per line)", placeholder: "Next.js Web Development\nWhatsApp AI Agent Setup\nSaaS MVP Engineering", type: "textarea" },
      { id: "contactEmail", label: "Official Contact / Support Email", placeholder: "hello@codube.com", type: "text" },
    ],
    outputLabel: "Generated llms.txt Content",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I generated an llms.txt file using Codube. I want your team to deploy full AI crawler integration and WhatsApp booking on my site.",
    educationalContent: {
      heading: "Why Every Modern Website Needs an /llms.txt File",
      paragraphs: [
        "The llms.txt proposal is a standard markdown file placed at /llms.txt to help LLMs understand the most critical information about a website.",
        "Without an llms.txt file, AI crawlers scrape bloated HTML, JS scripts, and ads, often hallucinating outdated pricing or incorrect services.",
      ],
      tips: [
        "Place the generated file at public/llms.txt on your root domain.",
        "Keep the summary concise and focused on user-facing outcomes.",
        "Update the file whenever you introduce new services or update pricing.",
      ],
    },
  },
  {
    id: "chatgpt-search-readiness-checker",
    name: "ChatGPT Search Readiness Checker",
    shortName: "ChatGPT SEO Audit",
    category: "ai",
    tagline: "Verify if your website can be indexed and cited by ChatGPT Search & GPTBot",
    description: "Analyze your domain for OpenAI's GPTBot crawler readiness, semantic snippet clarity, and conversational citations.",
    metaTitle: "Free ChatGPT Search SEO Checker | Test GPTBot Readiness | Codube",
    metaDescription: "Audit your website for ChatGPT Search readiness. Test robots.txt permissions for GPTBot, OAI-SearchBot, and semantic citation signals.",
    keywords: ["chatgpt search checker", "gptbot audit", "chatgpt seo tool", "openai crawler checker", "chatgpt citation test"],
    fields: [
      { id: "url", label: "Your Website URL", placeholder: "https://mybusiness.com", type: "text", required: true },
      { id: "targetKeyword", label: "Primary Search Query You Want to Win", placeholder: "e.g. Best dental clinic in Jaipur", type: "text", required: true },
      { id: "hasRobots", label: "Is GPTBot Allowed in your robots.txt?", type: "select", options: ["Yes (Allowed)", "No (Disallowed)", "Not Sure / Check Default"], defaultValue: "Not Sure / Check Default" },
    ],
    outputLabel: "ChatGPT Search Audit & Fix Checklist",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I audited my site for ChatGPT Search on Codube and want to upgrade my website architecture to rank #1 on AI engines.",
    educationalContent: {
      heading: "How ChatGPT Search Selects Citations",
      paragraphs: [
        "ChatGPT Search uses a specialized index powered by OAI-SearchBot and GPTBot to retrieve real-time data for user queries.",
        "Websites that block GPTBot in robots.txt or lack clean semantic markdown miss out on millions of conversational search recommendations.",
      ],
      tips: [
        "Ensure your robots.txt allows User-agent: GPTBot and User-agent: OAI-SearchBot.",
        "Use direct Q&A headers that answer user questions within the first 2 sentences.",
        "Provide transparent pricing to be included in commercial recommendation lists.",
      ],
    },
  },
  {
    id: "perplexity-ai-visibility-checker",
    name: "Perplexity AI Visibility & Citation Audit",
    shortName: "Perplexity AI Audit",
    category: "ai",
    tagline: "Test if Perplexity AI cites your brand when users research your industry",
    description: "Audit your domain's citation authority, Knowledge Graph entity linkage, and PerplexityBot crawlability.",
    metaTitle: "Perplexity AI Visibility Checker | Citation & Knowledge Graph Audit | Codube",
    metaDescription: "Free Perplexity AI visibility test. Discover how to get cited as a primary source in Perplexity AI search results.",
    keywords: ["perplexity ai checker", "perplexity seo tool", "perplexitybot audit", "ai citation checker", "generative search audit"],
    fields: [
      { id: "brandName", label: "Company / Brand Name", placeholder: "e.g. Codube", type: "text", required: true },
      { id: "url", label: "Website URL", placeholder: "https://codube.io", type: "text", required: true },
      { id: "competitors", label: "Main Competitors (Optional)", placeholder: "Competitor A, Competitor B", type: "text" },
    ],
    outputLabel: "Perplexity Citation Optimization Report",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I checked my Perplexity AI visibility on Codube and want to implement structured citations and AI receptionists.",
    educationalContent: {
      heading: "Winning Citations on Perplexity AI",
      paragraphs: [
        "Perplexity AI operates as an answer engine that synthesizes answers from 3 to 10 top authoritative web sources.",
        "To win citations, your pages must feature structured bullet points, clear statistics, and unambiguous author credentials.",
      ],
      tips: [
        "Include founder credentials, national awards, and verifiable client case studies.",
        "Publish comprehensive FAQ sections formatted with Schema.org FAQPage.",
        "Verify your brand across LinkedIn, Crunchbase, and official directories.",
      ],
    },
  },
  {
    id: "schema-markup-generator",
    name: "Rich JSON-LD Schema Markup Generator",
    shortName: "Schema Generator",
    category: "seo",
    badge: "HIGH SEO IMPACT",
    tagline: "Generate validated JSON-LD schema for LocalBusiness, Medical, RealEstate & Services",
    description: "Get Google Rich Snippets and AI entity verification. Generate valid JSON-LD structured data with 1-click copy for your website header.",
    metaTitle: "Free JSON-LD Schema Markup Generator | Rich Snippets Tool | Codube",
    metaDescription: "Generate valid Google JSON-LD schema markup for LocalBusiness, Doctors, Real Estate, and Professional Services. Boost SEO click-through rates.",
    keywords: ["schema markup generator", "json-ld generator", "local business schema", "medical business schema", "google rich snippets"],
    fields: [
      { id: "type", label: "Schema Entity Type", type: "select", options: ["LocalBusiness", "MedicalBusiness (Clinic/Doctor)", "RealEstateAgent", "ProfessionalService", "SoftwareApplication"], defaultValue: "LocalBusiness" },
      { id: "name", label: "Business Name", placeholder: "e.g. Dr. Joy Clinic", type: "text", required: true },
      { id: "url", label: "Website URL", placeholder: "https://example.com", type: "text", required: true },
      { id: "phone", label: "Telephone Number", placeholder: "+91 9672660338", type: "text" },
      { id: "city", label: "City & Country", placeholder: "Jaipur, India", type: "text" },
      { id: "priceRange", label: "Price Range", type: "select", options: ["$ (Budget)", "$$ (Standard)", "$$$ (Premium)", "$$$$ (Luxury)"], defaultValue: "$$ (Standard)" },
    ],
    outputLabel: "Validated JSON-LD Code (Paste in <head>)",
    outputFormat: "code",
    codeLanguage: "json",
    whatsappHook: "Hi Abhishek, I generated JSON-LD Schema on Codube. I want your team to build a high-speed Next.js website with full Schema integration.",
    educationalContent: {
      heading: "Why Structured Data is Vital for 2026 SEO",
      paragraphs: [
        "Schema.org markup tells Google and AI models the exact context of your business — your address, doctor qualifications, phone numbers, and services.",
        "Pages with valid JSON-LD schema frequently win Google Rich Snippet stars, direct phone dials, and higher organic click-through rates.",
      ],
      tips: [
        "Place the generated script tag directly in your website's <head> section.",
        "Ensure phone numbers and addresses match your Google Maps listing.",
        "Test your code using Google's Rich Results Test tool.",
      ],
    },
  },
  {
    id: "whatsapp-chat-link-generator",
    name: "WhatsApp Click-to-Chat Link & QR Generator",
    shortName: "WhatsApp Link Builder",
    category: "growth",
    badge: "CONVERSION",
    tagline: "Create direct WhatsApp links with pre-filled messages and QR codes",
    description: "Convert website visitors into WhatsApp conversations with 1 click. Generate clean wa.me links with custom pre-filled booking inquiries.",
    metaTitle: "Free WhatsApp Link Generator with Pre-Filled Messages | Codube",
    metaDescription: "Generate free custom WhatsApp click-to-chat links and QR codes with pre-filled messages. Increase website lead conversions instantly.",
    keywords: ["whatsapp link generator", "wa.me link builder", "whatsapp click to chat", "whatsapp qr code", "lead conversion link"],
    fields: [
      { id: "phone", label: "WhatsApp Phone Number (with Country Code, no +)", placeholder: "e.g. 919672660338 or 971501234567", type: "text", required: true },
      { id: "message", label: "Pre-Filled Message Text", placeholder: "Hi! I visited your website and would like to book a consultation.", type: "textarea", required: true },
    ],
    outputLabel: "Your WhatsApp Click-to-Chat Link",
    outputFormat: "link",
    whatsappHook: "Hi Abhishek, I used the WhatsApp Link Generator on Codube. Can you build an automated 24/7 AI Receptionist for my WhatsApp number?",
    educationalContent: {
      heading: "The Power of WhatsApp Lead Capture",
      paragraphs: [
        "Traditional contact forms suffer from 80%+ drop-off rates because visitors hate waiting for email replies.",
        "WhatsApp click-to-chat links initiate an immediate conversation where your business can qualify prospects and confirm appointments in minutes.",
      ],
      tips: [
        "Use specific pre-filled messages like 'I want to book an appointment for tomorrow'.",
        "Add the link to your website header, floating button, and Google Business Profile.",
        "Integrate an automated WhatsApp AI Receptionist to reply within 2 seconds.",
      ],
    },
  },
  {
    id: "website-speed-audit",
    name: "Core Web Vitals & PageSpeed Estimator",
    shortName: "Speed Estimator",
    category: "dev",
    tagline: "Estimate mobile performance, Largest Contentful Paint (LCP), and bounce risk",
    description: "Discover how website load lag impacts your Google rankings and advertising costs. Get immediate recommendations to achieve 95+ PageSpeed.",
    metaTitle: "Website Speed & Core Web Vitals Estimator | Codube",
    metaDescription: "Estimate your website speed and Google Core Web Vitals score. Learn how Next.js 14 architecture reduces load time to under 0.5s.",
    keywords: ["website speed audit", "core web vitals estimator", "pagespeed score checker", "lcp audit", "nextjs speed test"],
    fields: [
      { id: "url", label: "Website URL", placeholder: "https://mysite.com", type: "text", required: true },
      { id: "platform", label: "Current Tech Stack", type: "select", options: ["WordPress / WooCommerce", "Shopify", "Custom PHP / Laravel", "Next.js / React", "Wix / Squarespace"], defaultValue: "WordPress / WooCommerce" },
      { id: "monthlyTraffic", label: "Estimated Monthly Visitors", type: "number", defaultValue: 5000 },
    ],
    outputLabel: "Performance & Bounce Loss Audit",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I ran the Website Speed Audit on Codube. I want to migrate my slow website to Next.js 14 for sub-second speeds.",
    educationalContent: {
      heading: "Why 100ms Load Time Equals Millions in Revenue",
      paragraphs: [
        "Google's official benchmark shows that mobile bounce rate increases by 32% as page load time goes from 1 second to 3 seconds.",
        "Traditional CMS platforms like WordPress load 40+ third-party plugins that drag down PageSpeed to 25-45 on mobile devices.",
      ],
      tips: [
        "Migrate to Next.js 14 server components for instant Largest Contentful Paint.",
        "Serve modern WebP / AVIF images through edge CDNs.",
        "Eliminate render-blocking JavaScript and unnecessary external widgets.",
      ],
    },
  },
  {
    id: "ai-prompt-enhancer",
    name: "AI Prompt Enhancer for Business & Code",
    shortName: "Prompt Enhancer",
    category: "ai",
    tagline: "Turn basic prompts into high-precision, production-grade instructions",
    description: "Upgrade your prompts for ChatGPT, Claude 3.5 Sonnet, and Gemini. Adds persona framing, chain-of-thought constraints, and output formatting.",
    metaTitle: "Free AI Prompt Enhancer & Optimizer | Codube",
    metaDescription: "Transform weak prompts into elite, zero-shot instructions for ChatGPT, Claude, and Gemini. Perfect for marketing, coding, and architecture.",
    keywords: ["ai prompt enhancer", "prompt optimizer", "chatgpt prompt builder", "claude prompt engineering", "ai prompt generator"],
    fields: [
      { id: "rawPrompt", label: "Your Rough Idea or Prompt", placeholder: "e.g. Write a marketing email for my dental clinic offering teeth whitening.", type: "textarea", required: true },
      { id: "targetModel", label: "Target AI Model", type: "select", options: ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "Google Gemini Pro", "Perplexity AI"], defaultValue: "ChatGPT (GPT-4o)" },
      { id: "tone", label: "Output Style", type: "select", options: ["Authoritative & High-Converting", "Technical & Precise", "Warm & Reassuring", "Executive & Direct"], defaultValue: "Authoritative & High-Converting" },
    ],
    outputLabel: "Optimized High-Precision Prompt",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I used the AI Prompt Enhancer on Codube. I want to build custom AI automated workflows for my internal business processes.",
    educationalContent: {
      heading: "The Secret to Elite AI Outputs",
      paragraphs: [
        "Vague prompts yield generic, cliché outputs. Elite prompt engineering assigns an authoritative persona, defines strict negative constraints, and enforces structure.",
        "By structuring inputs with context, goals, and step-by-step reasoning triggers, AI models produce 10x higher-quality business assets.",
      ],
      tips: [
        "Always define who the AI is acting as (e.g. 'Senior UI/UX Conversion Designer').",
        "Specify what NOT to do (e.g. 'Avoid corporate buzzwords, write concisely').",
        "Demand structured outputs like markdown tables or valid JSON.",
      ],
    },
  },
  {
    id: "open-graph-meta-generator",
    name: "Open Graph & Social Card Generator",
    shortName: "OG Meta Generator",
    category: "seo",
    tagline: "Generate clean Facebook, Twitter/X, and WhatsApp preview meta tags",
    description: "Ensure your links look irresistible when shared on WhatsApp, LinkedIn, and Twitter. Generate valid Open Graph and Twitter Card tags in seconds.",
    metaTitle: "Free Open Graph Meta Tag Generator | Social Card Preview | Codube",
    metaDescription: "Generate valid Open Graph (OG) and Twitter Card tags. Ensure high-CTR link previews on WhatsApp, LinkedIn, Facebook, and Twitter.",
    keywords: ["open graph generator", "og meta tags tool", "whatsapp preview tag", "twitter card generator", "social metadata builder"],
    fields: [
      { id: "title", label: "Page Title", placeholder: "Turn Visitors Into Paying Customers | Codube", type: "text", required: true },
      { id: "description", label: "Description (Max 150 chars)", placeholder: "We build conversion-engineered websites and 24/7 WhatsApp AI receptionists delivered in 7 days.", type: "textarea", required: true },
      { id: "url", label: "Canonical URL", placeholder: "https://codube.io", type: "text", required: true },
      { id: "imageUrl", label: "Preview Image URL", placeholder: "https://codube.io/images/hero-laptop.png", type: "text" },
    ],
    outputLabel: "Generated Open Graph HTML Tags",
    outputFormat: "code",
    codeLanguage: "html",
    whatsappHook: "Hi Abhishek, I generated Open Graph tags on Codube. I want to redesign my website with high-converting social sharing preview cards.",
    educationalContent: {
      heading: "Why Open Graph Tags Drive Referral Traffic",
      paragraphs: [
        "When someone shares your website on WhatsApp or LinkedIn, the platform looks for Open Graph meta tags to render the headline, description, and preview photo.",
        "Without proper OG tags, your link appears as raw text or displays a broken thumbnail, destroying click-through rates.",
      ],
      tips: [
        "Use an OG image resolution of 1200 x 630 pixels for sharp display on Retina screens.",
        "Keep the title under 60 characters so it doesn't truncate on mobile devices.",
        "Ensure image URLs are absolute (starting with https://).",
      ],
    },
  },
  {
    id: "robots-txt-ai-crawler-generator",
    name: "Robots.txt Generator for AI & Search Crawlers",
    shortName: "AI Robots.txt Tool",
    category: "dev",
    tagline: "Configure crawler rules for Googlebot, GPTBot, ClaudeBot, and Perplexity",
    description: "Generate a modern robots.txt file that allows AI answer engines to index your content while protecting private admin and API routes.",
    metaTitle: "Robots.txt Generator for AI & Search Crawlers | Codube",
    metaDescription: "Generate a validated robots.txt file configured for OpenAI GPTBot, Anthropic ClaudeBot, PerplexityBot, and Googlebot. Free developer tool.",
    keywords: ["robots.txt generator", "ai crawler robots.txt", "allow gptbot", "robots.txt builder", "sitemap robots configuration"],
    fields: [
      { id: "sitemapUrl", label: "Sitemap XML URL", placeholder: "https://codube.io/sitemap.xml", type: "text", required: true },
      { id: "disallowedPaths", label: "Disallowed Paths (Comma separated)", placeholder: "/admin/, /api/, /private/", type: "text", defaultValue: "/admin/, /api/" },
      { id: "aiAccess", label: "AI Answer Engine Access", type: "select", options: ["Allow All AI Crawlers (Recommended for GEO)", "Block AI Crawlers", "Allow Google & OpenAI Only"], defaultValue: "Allow All AI Crawlers (Recommended for GEO)" },
    ],
    outputLabel: "Generated robots.txt File",
    outputFormat: "code",
    codeLanguage: "plaintext",
    whatsappHook: "Hi Abhishek, I generated a robots.txt file on Codube. I want your team to perform a full technical SEO and AI crawlability audit on my site.",
    educationalContent: {
      heading: "Managing AI Crawlers in 2026",
      paragraphs: [
        "Robots.txt controls which user-agents are permitted to fetch pages from your server.",
        "If you want your clinic, agency, or software to be recommended in ChatGPT Search and Perplexity, you must ensure GPTBot and PerplexityBot are not blocked.",
      ],
      tips: [
        "Place your robots.txt at the exact root of your public folder (e.g. domain.com/robots.txt).",
        "Always declare your canonical Sitemap URL at the end of the file.",
        "Never disallow paths containing public landing pages or CSS styling.",
      ],
    },
  },
  {
    id: "ai-faq-schema-generator",
    name: "AI FAQ & Google FAQPage Schema Generator",
    shortName: "FAQ Schema Builder",
    category: "seo",
    tagline: "Convert frequently asked questions into valid FAQPage JSON-LD schema",
    description: "Win expandable rich snippets in Google search results and help AI models quote your direct answers to customer questions.",
    metaTitle: "Free FAQPage Schema Generator | Win Google Rich Snippets | Codube",
    metaDescription: "Turn customer FAQs into valid JSON-LD FAQPage schema markup. Win expandable accordion snippets on Google search results for free.",
    keywords: ["faq schema generator", "faqpage json-ld builder", "google rich snippets faq", "structured data faqs", "seo faq tool"],
    fields: [
      { id: "q1", label: "Question 1", placeholder: "How long does website delivery take?", type: "text", required: true },
      { id: "a1", label: "Answer 1", placeholder: "Our turnkey websites are designed, engineered, and launched in 7 days.", type: "textarea", required: true },
      { id: "q2", label: "Question 2", placeholder: "Do I own 100% of the code?", type: "text" },
      { id: "a2", label: "Answer 2", placeholder: "Yes, you own 100% of the source code and GitHub repository.", type: "textarea" },
      { id: "q3", label: "Question 3", placeholder: "Can I update images and text myself?", type: "text" },
      { id: "a3", label: "Answer 3", placeholder: "Yes, we include a custom admin panel allowing easy updates with zero coding.", type: "textarea" },
    ],
    outputLabel: "Generated FAQPage JSON-LD Script",
    outputFormat: "code",
    codeLanguage: "json",
    whatsappHook: "Hi Abhishek, I generated FAQPage Schema on Codube. I want your team to build high-converting FAQ funnels on my website.",
    educationalContent: {
      heading: "Why FAQPage Schema is an SEO Superpower",
      paragraphs: [
        "Google rewards authoritative answers with rich accordion dropdowns directly on the search engine results page (SERP).",
        "This increases your visual real estate on mobile screens by 200%, pushing competitors down and doubling your organic CTR.",
      ],
      tips: [
        "Keep answers concise, direct, and fact-focused.",
        "Ensure the exact same questions and answers are visible in the body text of the page.",
        "Address primary buying objections like pricing, delivery time, and guarantees.",
      ],
    },
  },
  {
    id: "roi-calculator",
    name: "24/7 AI Receptionist & Website ROI Calculator",
    shortName: "AI ROI Calculator",
    category: "growth",
    tagline: "Calculate how much revenue you lose to slow replies and missed calls",
    description: "Discover how an automated 24/7 WhatsApp AI receptionist and sub-second website increases booked appointments and recovered leads.",
    metaTitle: "AI Receptionist & Website Conversion ROI Calculator | Codube",
    metaDescription: "Calculate your revenue uplift from 24/7 WhatsApp AI appointment automation and high-speed web engineering. Free business calculator.",
    keywords: ["ai roi calculator", "whatsapp chatbot roi", "lost leads calculator", "conversion rate calculator", "booking revenue estimator"],
    fields: [
      { id: "leadsPerMonth", label: "Inquiries / Leads per Month", type: "number", defaultValue: 100, required: true },
      { id: "dealValue", label: "Average Value per Patient / Client ($ or ₹)", type: "number", defaultValue: 250, required: true },
      { id: "currentCloseRate", label: "Current Conversion Rate (%)", type: "number", defaultValue: 15, required: true },
      { id: "replyLagHours", label: "Average Time to Reply to Inquiries (Hours)", type: "select", options: ["Under 5 minutes (Instant)", "1 to 4 hours", "Same day (4 to 12 hours)", "Next day (24+ hours)"], defaultValue: "1 to 4 hours" },
    ],
    outputLabel: "Your Estimated Revenue Growth Potential",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I calculated my revenue loss on the Codube ROI Calculator. I want to launch the $999 Complete Business Growth Kit with 24/7 WhatsApp AI.",
    educationalContent: {
      heading: "The Cost of Slow Inquiries",
      paragraphs: [
        "Lead response studies show that responding to an online inquiry within 5 minutes makes you 21 times more likely to qualify the prospect compared to waiting 30 minutes.",
        "When business owners rely on human receptionists during nights and weekends, up to 40% of inbound leads call a competitor instead.",
      ],
      tips: [
        "Automate instant booking tokens on WhatsApp so prospects commit immediately.",
        "Send automatic follow-up reminders 24 hours prior to consultations to prevent no-shows.",
        "Consolidate web traffic directly into WhatsApp conversations.",
      ],
    },
  },
  {
    id: "healthcare-clinic-roi-calculator",
    name: "Clinic OPD & Patient No-Show Calculator",
    shortName: "Clinic ROI Tool",
    category: "growth",
    tagline: "Estimate revenue recovered from automated WhatsApp patient reminders",
    description: "Designed for dental clinics, cosmetic surgeons, and doctors. Calculate lost consultation revenue from patient no-shows and reception bottlenecks.",
    metaTitle: "Doctor Clinic No-Show & OPD Revenue Calculator | Codube",
    metaDescription: "Calculate how much revenue your clinic loses to patient no-shows. See how WhatsApp automated token booking reduces missed appointments by 80%.",
    keywords: ["clinic roi calculator", "patient no-show calculator", "dental appointment revenue", "doctor opd calculator", "healthcare automation roi"],
    fields: [
      { id: "dailyAppointments", label: "Average Appointments Scheduled per Day", type: "number", defaultValue: 25, required: true },
      { id: "consultationFee", label: "Average Consultation / Procedure Fee ($ or ₹)", type: "number", defaultValue: 60, required: true },
      { id: "noShowRate", label: "Current No-Show Rate (%)", type: "number", defaultValue: 20, required: true },
      { id: "operatingDays", label: "Operating Days per Month", type: "number", defaultValue: 26 },
    ],
    outputLabel: "Annual Revenue Lost to No-Shows & Recovery Potential",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I used the Clinic No-Show Calculator on Codube. I want to deploy a 24/7 WhatsApp AI Receptionist for my clinic.",
    educationalContent: {
      heading: "Eliminating Clinic No-Shows with WhatsApp",
      paragraphs: [
        "Patient no-shows are the #1 profit drain for medical practices. Unattended slots leave high-cost medical equipment and doctors sitting idle.",
        "Automated WhatsApp confirmation tokens with interactive 1-click confirmation or rescheduling reduce no-shows by up to 82%.",
      ],
      tips: [
        "Send an instant WhatsApp booking confirmation with clinic location and token number.",
        "Send a friendly automated reminder 2 hours prior to the appointment slot.",
        "Allow patients to tap a button to reschedule instead of simply ghosting the clinic.",
      ],
    },
  },
  {
    id: "real-estate-lead-calculator",
    name: "Real Estate Ad Spend to WhatsApp Lead Calculator",
    shortName: "Real Estate ROI",
    category: "growth",
    tagline: "Calculate Cost-Per-Lead and Site Visit Conversions for Property Campaigns",
    description: "Designed for property builders and brokers. Calculate how sub-second landing pages and instant WhatsApp brochure delivery slash ad waste.",
    metaTitle: "Real Estate Ad Lead & Site Visit ROI Calculator | Codube",
    metaDescription: "Calculate your cost-per-lead and site visit conversion rate for real estate ad campaigns. Learn how instant WhatsApp bots double bookings.",
    keywords: ["real estate lead calculator", "property cpl calculator", "site visit conversion", "real estate ad roi", "property whatsapp leads"],
    fields: [
      { id: "adBudget", label: "Monthly Meta / Google Ad Budget ($ or ₹)", type: "number", defaultValue: 2000, required: true },
      { id: "costPerClick", label: "Average Cost Per Click (CPC)", type: "number", defaultValue: 1.5, required: true },
      { id: "landingConversion", label: "Landing Page Conversion Rate (%)", type: "number", defaultValue: 3, required: true },
      { id: "averageCommission", label: "Average Profit / Commission per Closed Deal", type: "number", defaultValue: 8000, required: true },
    ],
    outputLabel: "Projected Lead Volume & Revenue Projections",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I calculated my property ad projections on Codube. I want to build a luxury Next.js real estate website with WhatsApp brochure bot.",
    educationalContent: {
      heading: "Why Real Estate Leads Require Instant Delivery",
      paragraphs: [
        "High-net-worth real estate buyers browse listings late at night. If they fill out an inquiry form and receive no reply until 11 AM the next day, their interest has cooled.",
        "An automated WhatsApp bot that instantly dispatches digital brochures, price sheets, and schedules VIP site visits converts up to 3x more visitors.",
      ],
      tips: [
        "Ditch heavy multi-field forms in favor of 1-click WhatsApp brochure downloads.",
        "Include 3D virtual walkthroughs directly on mobile landing pages.",
        "Route qualified site visit bookings directly to senior project advisors.",
      ],
    },
  },
  {
    id: "website-cost-estimator",
    name: "Software & Web Development Scope Estimator",
    shortName: "Cost Estimator",
    category: "dev",
    tagline: "Get a transparent architectural estimate for your website or SaaS build",
    description: "Avoid agency overcharging. Estimate realistic engineering timelines, cloud infrastructure budgets, and transparent delivery costs.",
    metaTitle: "Website & Software Development Cost Estimator | Codube",
    metaDescription: "Estimate realistic costs and timelines for custom websites, SaaS MVPs, and WhatsApp AI bots. Transparent productized agency pricing.",
    keywords: ["website cost estimator", "software development cost", "saas mvp price calculator", "agency cost guide", "transparent software quote"],
    fields: [
      { id: "projectType", label: "Project Classification", type: "select", options: ["High-Converting Business Website (5-10 Pages)", "24/7 WhatsApp AI Receptionist Only", "Complete Growth Kit (Website + AI Bot)", "Custom SaaS / Multi-Branch Platform", "E-Commerce / Direct-To-Consumer Store"], defaultValue: "Complete Growth Kit (Website + AI Bot)" },
      { id: "timelineExpectation", label: "Desired Launch Timeline", type: "select", options: ["Urgent (Within 7 Days)", "Standard (2 to 3 Weeks)", "Enterprise Sprint (4+ Weeks)"], defaultValue: "Urgent (Within 7 Days)" },
      { id: "needsAdmin", label: "Do you need a Custom Admin Portal?", type: "select", options: ["Yes (Free Admin Included)", "No (Static Landing Page)"], defaultValue: "Yes (Free Admin Included)" },
    ],
    outputLabel: "Transparent Scope Breakdown & Budget Guide",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I generated a cost estimate on Codube. I want to discuss building my project with the $999 Growth Kit.",
    educationalContent: {
      heading: "The Danger of Agency Opacity",
      paragraphs: [
        "Traditional software agencies intentionally obfuscate pricing, quoting $15,000 for simple websites and locking clients into $2,000/month retainers.",
        "At Codube, we believe in transparent, productized engineering. Our Complete Business Growth Kit is $999 one-time (₹19,999 in India) with zero retainers.",
      ],
      tips: [
        "Insist on 100% full source code ownership in your contract.",
        "Ensure hosting is on edge networks (Vercel, Cloudflare, AWS) with low running costs.",
        "Avoid proprietary CMS platforms that hold your customer database hostage.",
      ],
    },
  },
  {
    id: "color-palette-generator",
    name: "Cyber Dark & Tech Palette Generator",
    shortName: "Dark Mode Colors",
    category: "dev",
    tagline: "Generate modern dark mode palettes and glassmorphic CSS classes",
    description: "Create award-winning dark theme palettes with electric accents (Lime, Emerald, Cyan) and copy drop-in Tailwind CSS configuration.",
    metaTitle: "Cyber Dark Mode Color Palette & CSS Generator | Codube",
    metaDescription: "Generate premium dark mode color schemes with cyber neon accents and glassmorphism CSS. Drop-in Tailwind CSS hex values.",
    keywords: ["dark mode color generator", "cyberpunk color palette", "glassmorphic css generator", "tailwind dark theme", "neon accent colors"],
    fields: [
      { id: "accent", label: "Primary Accent Hue", type: "select", options: ["Electric Lime (#B8FF00)", "Cyber Emerald (#25D366)", "Hyper Cyan (#00F0FF)", "Vibrant Violet (#A855F7)", "Solar Gold (#FFD600)"], defaultValue: "Electric Lime (#B8FF00)" },
      { id: "bgDepth", label: "Background Depth", type: "select", options: ["Obsidian Black (#030604)", "Deep Space (#080D0A)", "Titanium Dark (#0F1713)"], defaultValue: "Obsidian Black (#030604)" },
    ],
    outputLabel: "Tailwind CSS & Hex Theme Configuration",
    outputFormat: "code",
    codeLanguage: "css",
    whatsappHook: "Hi Abhishek, I used your Dark Mode Palette Generator. I want Codube to design an award-winning dark aesthetic website for my brand.",
    educationalContent: {
      heading: "Mastering Modern Dark Mode UI",
      paragraphs: [
        "Great dark mode design is not just slapping pure black (#000000) on a page. It uses nuanced deep green or blue-tinted blacks with subtle layered glass cards.",
        "Electric neon accents should be used sparingly for high-priority CTA buttons and active badges to guide the user's eye effortlessly.",
      ],
      tips: [
        "Use subtle rgba borders (e.g. border-white/10) to separate cards cleanly.",
        "Add radial gradient glow backdrops behind headline elements for depth.",
        "Maintain high contrast ratios for body text (use zinc-300 or zinc-200, never dark grey).",
      ],
    },
  },
  {
    id: "meta-description-ai-writer",
    name: "CTR-Engineered SEO Title & Meta Description Writer",
    shortName: "SEO Meta Writer",
    category: "seo",
    tagline: "Generate high-click-through Google search titles and descriptions",
    description: "Create search snippets engineered to stand out from competitors on Google. Includes character counter and pixel length constraints.",
    metaTitle: "SEO Title & Meta Description Generator | High CTR Tool | Codube",
    metaDescription: "Generate compelling Google SEO titles and meta descriptions with character count optimization. Increase organic click-through rates.",
    keywords: ["meta description generator", "seo title generator", "google snippet optimizer", "serp ctr tool", "character count meta tags"],
    fields: [
      { id: "pageTopic", label: "Page Topic / Primary Keyword", placeholder: "e.g. Best Dental Clinic in Jaipur", type: "text", required: true },
      { id: "uniqueHook", label: "Unique Value Proposition or Guarantee", placeholder: "e.g. 24/7 WhatsApp Booking • 1st Rank Doctor", type: "text" },
      { id: "brand", label: "Brand Name", placeholder: "e.g. Dr. Joy Dental", type: "text" },
    ],
    outputLabel: "Optimized SEO Titles & Meta Descriptions (Rank 1 Ready)",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I generated SEO Meta Descriptions on Codube. I want your team to rank my business #1 on Google with high-converting pages.",
    educationalContent: {
      heading: "Writing Meta Descriptions That Force Clicks",
      paragraphs: [
        "Ranking on page 1 of Google is useless if nobody clicks your link. Your meta description is your billboard on the SERP.",
        "Winning descriptions feature proof points (e.g. 'Delivered in 7 Days', '1st Rank Hackathon Winner', '500+ Reviews') and clear calls to action.",
      ],
      tips: [
        "Keep the title between 50 to 60 characters to prevent truncation.",
        "Keep the meta description between 140 to 155 characters.",
        "Always place the target keyword near the beginning of the title tag.",
      ],
    },
  },
  {
    id: "markdown-to-clean-html",
    name: "Markdown to Semantic Tailwind HTML Converter",
    shortName: "Markdown to HTML",
    category: "dev",
    tagline: "Convert raw Markdown notes into clean, semantic HTML with Tailwind classes",
    description: "Instantly transform documentation, blog posts, and notes into accessible HTML ready to paste into your Next.js or React templates.",
    metaTitle: "Markdown to Tailwind CSS Semantic HTML Converter | Codube",
    metaDescription: "Convert Markdown into semantic HTML with pre-styled Tailwind CSS classes. Free developer utility for Next.js and React developers.",
    keywords: ["markdown to html", "markdown to tailwind", "clean html converter", "developer markdown tool", "semantic html generator"],
    fields: [
      { id: "markdownInput", label: "Paste Your Markdown Here", placeholder: "# Welcome to Codube\n\n- Feature 1: Fast Next.js\n- Feature 2: 24/7 AI Bot", type: "textarea", required: true },
    ],
    outputLabel: "Semantic HTML Output (Tailwind Ready)",
    outputFormat: "code",
    codeLanguage: "html",
    whatsappHook: "Hi Abhishek, I used the Markdown to HTML tool on Codube. I want to build a content or documentation portal for my business.",
    educationalContent: {
      heading: "Semantic HTML & Developer Productivity",
      paragraphs: [
        "Semantic HTML is critical for web accessibility (a11y) and search engine comprehension.",
        "Converting markdown directly into clean HTML tags (article, section, h1-h3, p) ensures clean DOM rendering without bloated wrappers.",
      ],
      tips: [
        "Always use true heading hierarchies (never skip from h1 to h3).",
        "Use semantic list elements (ul, ol, li) rather than bullet character paragraphs.",
        "Add descriptive alt text to all image tags.",
      ],
    },
  },
  {
    id: "api-payload-formatter",
    name: "JSON to TypeScript Interface & API Formatter",
    shortName: "JSON to TS Formatter",
    category: "dev",
    tagline: "Generate strict TypeScript interfaces from sample API payloads",
    description: "Paste sample JSON responses from Stripe, WhatsApp Cloud API, or custom backends to generate type-safe TypeScript interfaces instantly.",
    metaTitle: "JSON to TypeScript Interface Generator & API Formatter | Codube",
    metaDescription: "Convert raw JSON payloads into strict TypeScript interfaces. Eliminate runtime bugs and speed up Next.js full-stack development.",
    keywords: ["json to typescript", "typescript interface generator", "api payload formatter", "json schema to ts", "developer json tool"],
    fields: [
      { id: "interfaceName", label: "Root Interface Name", placeholder: "e.g. WhatsAppWebhookPayload", type: "text", defaultValue: "ApiResponse" },
      { id: "jsonInput", label: "Paste Raw JSON Payload", placeholder: '{\n  "id": "123",\n  "status": "success",\n  "user": {\n    "name": "Abhishek",\n    "isVerified": true\n  }\n}', type: "textarea", required: true },
    ],
    outputLabel: "Generated Strict TypeScript Interface",
    outputFormat: "code",
    codeLanguage: "typescript",
    whatsappHook: "Hi Abhishek, I formatted API payloads on Codube. Can your team engineer our custom API and backend architecture?",
    educationalContent: {
      heading: "Why Strict TypeScript Matters in Production",
      paragraphs: [
        "In modern full-stack web development, strict TypeScript interfaces catch 90% of runtime data bugs before code ever reaches production.",
        "Type safety is especially vital when integrating third-party webhooks like Stripe payments or WhatsApp Cloud API messaging.",
      ],
      tips: [
        "Never use 'any' in production API handlers.",
        "Mark optional fields with question marks (?) for robust payload tolerance.",
        "Use union types for fixed status strings (e.g. 'pending' | 'completed' | 'failed').",
      ],
    },
  },
  {
    id: "privacy-policy-generator",
    name: "Website & WhatsApp Bot Privacy Policy Generator",
    shortName: "Privacy Policy Builder",
    category: "growth",
    tagline: "Generate compliant privacy policies for websites, analytics, and WhatsApp bots",
    description: "Meet Meta WhatsApp Cloud API and Google Analytics compliance requirements. Generate a clear, straightforward privacy policy in 30 seconds.",
    metaTitle: "Free Privacy Policy Generator for Websites & WhatsApp Bots | Codube",
    metaDescription: "Generate a legally sound privacy policy for your business website and official WhatsApp bot. Comply with Meta and Google guidelines.",
    keywords: ["privacy policy generator", "whatsapp bot privacy policy", "meta api compliance policy", "free website privacy policy", "gdpr privacy generator"],
    fields: [
      { id: "companyName", label: "Company Legal Name", placeholder: "e.g. Codube Technologies LLP", type: "text", required: true },
      { id: "websiteUrl", label: "Website URL", placeholder: "https://codube.io", type: "text", required: true },
      { id: "contactEmail", label: "Privacy / Support Email", placeholder: "privacy@codube.io", type: "text", required: true },
      { id: "usesWhatsApp", label: "Do you use WhatsApp Cloud API for automated messaging?", type: "select", options: ["Yes (WhatsApp Bot Integration Active)", "No (Standard Website Only)"], defaultValue: "Yes (WhatsApp Bot Integration Active)" },
    ],
    outputLabel: "Compliant Privacy Policy Markdown / Text",
    outputFormat: "code",
    codeLanguage: "markdown",
    whatsappHook: "Hi Abhishek, I generated a Privacy Policy on Codube. I want your team to build our official WhatsApp Cloud API verified system.",
    educationalContent: {
      heading: "Meta WhatsApp Cloud API Compliance",
      paragraphs: [
        "To get official Meta WhatsApp Business verification (green tick and official cloud templates), you must link a valid, public Privacy Policy URL.",
        "Your policy must disclose how user phone numbers are processed and confirm that personal data is never sold to third parties.",
      ],
      tips: [
        "Host your privacy policy at a clean URL like yourdomain.com/privacy.",
        "State clearly that users can opt out of automated messages at any time.",
        "Keep privacy contact emails active and monitored.",
      ],
    },
  },
];

// Helper to get tool by slug
export function getToolBySlug(slug: string): FreeTool | undefined {
  return FREE_TOOLS.find((t) => t.id === slug);
}

export const FREE_AI_TOOLS = FREE_TOOLS;
