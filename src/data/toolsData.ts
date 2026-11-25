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
  category: "ai" | "marketing" | "growth" | "seo" | "dev" | "social";
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
    "id": "ai-geo-generator",
    "name": "AI GEO Generator & LLM Visibility Checker",
    "shortName": "AI GEO Checker",
    "category": "ai",
    "badge": "HOT & VIRAL",
    "tagline": "Audit your brand visibility on ChatGPT, Perplexity, Claude & Gemini",
    "description": "Check if AI search engines recommend your business. Instantly audit your Generative Engine Optimization (GEO) score and generate compliant llms.txt context files.",
    "metaTitle": "Free AI GEO Generator & LLM Visibility Checker | Codube",
    "metaDescription": "Free Generative Engine Optimization (GEO) audit tool. Test your brand's AI search visibility and generate a compliant llms.txt in seconds.",
    "keywords": [
      "ai geo generator",
      "generative engine optimization",
      "llm visibility checker",
      "chatgpt seo audit",
      "ai search ranking"
    ],
    "fields": [
      {
        "id": "brandName",
        "label": "Brand / Business Name",
        "placeholder": "e.g. Dr. Joy Dental Clinic",
        "type": "text",
        "required": true,
        "defaultValue": "Dr. Joy Dental Clinic"
      },
      {
        "id": "websiteUrl",
        "label": "Website URL",
        "placeholder": "e.g. https://myclinic.com",
        "type": "text",
        "defaultValue": "https://drjoydental.com"
      },
      {
        "id": "industry",
        "label": "Industry Category",
        "type": "select",
        "options": [
          "Healthcare & Clinics",
          "Real Estate & Housing",
          "Software & SaaS",
          "E-Commerce & Retail",
          "Local Services & Agency"
        ],
        "defaultValue": "Healthcare & Clinics"
      },
      {
        "id": "services",
        "label": "Primary Services / Key Offerings",
        "placeholder": "e.g. Dental Implants, Invisalign, Emergency Dentistry",
        "type": "textarea",
        "defaultValue": "Dental Implants, Invisalign Aligners, Teeth Whitening, Emergency Dental Care"
      },
      {
        "id": "location",
        "label": "Primary City / Service Region",
        "placeholder": "e.g. Dubai, UAE or Jaipur, India",
        "type": "text",
        "defaultValue": "Dubai & Abu Dhabi"
      }
    ],
    "outputLabel": "Verified Generative Engine Optimization (GEO) Diagnostic Report",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I tested our brand on your AI GEO Generator. Our score needs improvement\u2014can your team engineer our Next.js site and llms.txt for ChatGPT/Perplexity?",
    "educationalContent": {
      "heading": "What is Generative Engine Optimization (GEO)?",
      "paragraphs": [
        "Traditional SEO ranks you on 10 blue Google links. Generative Engine Optimization (GEO) ensures your brand is explicitly recommended by conversational LLMs like ChatGPT Search, Perplexity AI, Claude 3.5, and Google Gemini.",
        "When an AI user asks 'Who is the best dental clinic in Dubai?' or 'Recommend a high-speed web agency in Jaipur', LLMs parse structured Schema.org JSON-LD, crawlable knowledge graphs, and standardized /llms.txt files."
      ],
      "tips": [
        "Deploy a standardized /llms.txt file in your website root domain.",
        "Add explicit Schema.org LocalBusiness, Physician, or RealEstateAgent JSON-LD with verified geo coordinates.",
        "Maintain clear pricing, address, doctor credentials, and direct WhatsApp contact endpoints in raw HTML."
      ]
    }
  },
  {
    "id": "llms-txt-generator",
    "name": "Official llms.txt Context File Generator",
    "shortName": "llms.txt Generator",
    "category": "ai",
    "badge": "TRENDING",
    "tagline": "Generate compliant /llms.txt & /llms-full.txt files for AI crawlers",
    "description": "Feed clean, markdown-formatted structured context to AI agents and web scrapers. Increase your brand citation frequency across OpenAI and Anthropic bots.",
    "metaTitle": "Free llms.txt Generator for AI Search Bots | Codube",
    "metaDescription": "Generate compliant, standardized /llms.txt markdown files for ChatGPT, Claude, and Perplexity crawlers. 100% free with instant download.",
    "keywords": [
      "llms txt generator",
      "llms.txt generator",
      "ai search crawler file",
      "chatgpt markdown context",
      "claude llms.txt"
    ],
    "fields": [
      {
        "id": "brandName",
        "label": "Brand Name",
        "placeholder": "e.g. Codube Technologies",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Technologies"
      },
      {
        "id": "websiteUrl",
        "label": "Domain URL",
        "placeholder": "e.g. https://codube.io",
        "type": "text",
        "required": true,
        "defaultValue": "https://codube.io"
      },
      {
        "id": "tagline",
        "label": "One-Line Brand Summary",
        "placeholder": "e.g. Next.js Web Development & 24/7 WhatsApp AI Receptionists",
        "type": "text",
        "defaultValue": "Next.js Web Development & 24/7 WhatsApp AI Receptionists"
      },
      {
        "id": "keyProducts",
        "label": "Key Services / Products (1 per line)",
        "placeholder": "e.g. Web Development\nWhatsApp AI Bots\nSEO Optimization",
        "type": "textarea",
        "defaultValue": "5-Page Ultra-Fast Next.js Websites\n24/7 WhatsApp AI Customer Receptionist\nCloud API Meta Verified CRM Lead Sync\nCustom SaaS & Clinic Management Systems"
      },
      {
        "id": "contactPhone",
        "label": "Direct WhatsApp / Phone",
        "placeholder": "e.g. +91 9672660338",
        "type": "text",
        "defaultValue": "+91 9672660338"
      }
    ],
    "outputLabel": "Compliant /llms.txt Markdown File",
    "outputFormat": "code",
    "codeLanguage": "markdown",
    "whatsappHook": "Hi Abhishek, I generated our official llms.txt file on Codube. How can we deploy this and guarantee our brand ranks on ChatGPT and Perplexity?",
    "educationalContent": {
      "heading": "Why Modern Websites Need an /llms.txt File",
      "paragraphs": [
        "Proposed by the open web community and adopted by Anthropic, OpenAI, and Perplexity, /llms.txt acts like a robots.txt for intelligence\u2014giving AI scrapers a concise, hallucination-free summary of your brand.",
        "Instead of struggling through heavy JavaScript bundles, AI agents read /llms.txt in 0.05 seconds to extract your verified pricing, core services, and contact channels."
      ],
      "tips": [
        "Place your file at yourdomain.com/llms.txt in UTF-8 plain markdown.",
        "Provide direct links to key documentation or booking URLs.",
        "Keep descriptions factual, concise, and devoid of marketing buzzwords."
      ]
    }
  },
  {
    "id": "chatgpt-search-readiness-checker",
    "name": "ChatGPT Search Readiness & Citation Audit",
    "shortName": "ChatGPT Search Audit",
    "category": "ai",
    "badge": "NEW",
    "tagline": "Test if OpenAI SearchGPT can crawl, parse, and cite your website",
    "description": "ChatGPT Search relies on fresh, server-rendered HTML and clear entity data. Audit your website's readiness for OpenAI's search engine.",
    "metaTitle": "ChatGPT Search Readiness Checker | Free AI SEO Tool | Codube",
    "metaDescription": "Audit your website for ChatGPT Search engine readiness. Test crawler accessibility, server-side rendering, and entity clarity for OpenAI bots.",
    "keywords": [
      "chatgpt search checker",
      "searchgpt audit",
      "openai crawler test",
      "ai search optimization",
      "chatgpt ranking checker"
    ],
    "fields": [
      {
        "id": "url",
        "label": "Website URL to Audit",
        "placeholder": "https://example.com",
        "type": "text",
        "required": true,
        "defaultValue": "https://example.com"
      },
      {
        "id": "framework",
        "label": "Website Tech Stack",
        "type": "select",
        "options": [
          "Next.js / SSR React",
          "WordPress / WooCommerce",
          "Shopify",
          "Custom HTML / PHP",
          "Wix / Squarespace"
        ],
        "defaultValue": "Next.js / SSR React"
      },
      {
        "id": "hasSchema",
        "label": "Do you have Schema.org JSON-LD?",
        "type": "select",
        "options": [
          "Yes, fully implemented",
          "Not sure / Default theme",
          "No schema markup"
        ],
        "defaultValue": "Yes, fully implemented"
      },
      {
        "id": "robotsAccess",
        "label": "Is OAI-SearchBot Allowed in robots.txt?",
        "type": "select",
        "options": [
          "Yes, explicitly allowed",
          "Default / Not mentioned",
          "Blocked / Disallowed"
        ],
        "defaultValue": "Default / Not mentioned"
      }
    ],
    "outputLabel": "ChatGPT Search Readiness Report & Action Plan",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I audited our website for ChatGPT Search readiness on Codube. We need your team to migrate us to Next.js SSR so SearchGPT cites us first.",
    "educationalContent": {
      "heading": "How ChatGPT Search Selects Citations",
      "paragraphs": [
        "ChatGPT Search uses OAI-SearchBot to crawl web pages in real-time. If your page relies on heavy client-side JavaScript (like traditional React SPAs or unoptimized WordPress themes), the crawler times out and chooses your competitor.",
        "Websites built on Next.js 14 Server Components deliver pure static/SSR HTML in under 200ms, making them the preferred source for instant conversational citations."
      ],
      "tips": [
        "Allow OAI-SearchBot and ChatGPT-User user-agents in your robots.txt file.",
        "Ensure Largest Contentful Paint (LCP) is under 1.2 seconds.",
        "Include an authoritative Author or Organization schema with verified social profiles."
      ]
    }
  },
  {
    "id": "perplexity-citation-audit",
    "name": "Perplexity AI Citation & Authority Checker",
    "shortName": "Perplexity Citation Audit",
    "category": "ai",
    "badge": "HIGH DEMAND",
    "tagline": "Evaluate how easily Perplexity AI can cite your brand as an authoritative source",
    "description": "Perplexity answers millions of B2B research queries daily. Discover the exact structural steps needed to get featured in Perplexity's citation pill list.",
    "metaTitle": "Perplexity AI Citation Auditor | Free AI SEO Tool | Codube",
    "metaDescription": "Check if Perplexity AI can cite your business. Optimize your content structure, citations, and authority signals for Perplexity search answers.",
    "keywords": [
      "perplexity citation audit",
      "perplexity ai seo",
      "perplexity ranking tool",
      "ai search citations",
      "perplexity source checker"
    ],
    "fields": [
      {
        "id": "brandName",
        "label": "Brand / Company Name",
        "type": "text",
        "required": true,
        "defaultValue": "MedLearnings Healthcare"
      },
      {
        "id": "websiteUrl",
        "label": "Domain URL",
        "type": "text",
        "defaultValue": "https://medlearnings.org"
      },
      {
        "id": "contentType",
        "label": "Primary Content Type",
        "type": "select",
        "options": [
          "Clinical / Healthcare Case Studies",
          "Real Estate Market Reports",
          "SaaS Documentation & Specs",
          "Service Pricing & Reviews",
          "Blog Guides & Tutorials"
        ],
        "defaultValue": "Clinical / Healthcare Case Studies"
      },
      {
        "id": "hasCitations",
        "label": "Does your content cite primary data or studies?",
        "type": "select",
        "options": [
          "Yes, primary verified sources",
          "General industry knowledge",
          "No citations"
        ],
        "defaultValue": "Yes, primary verified sources"
      }
    ],
    "outputLabel": "Perplexity Citation Diagnostic & Optimization Protocol",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I checked our Perplexity Citation score on Codube. We want Codube to restructure our site content so Perplexity features us at #1.",
    "educationalContent": {
      "heading": "Understanding Perplexity's Citation Algorithm",
      "paragraphs": [
        "Perplexity searches the live web, reads top pages, and assigns citation weight based on informational density and consensus agreement with authoritative sources.",
        "Pages with clear heading hierarchies (H1 -> H2 -> H3), bullet points, statistical citations, and Schema.org Article data get cited 4.8x more often than generic blog posts."
      ],
      "tips": [
        "Answer the core question in the first 60 words of each section.",
        "Use tables and bulleted lists for specifications, pricing, and pros/cons.",
        "Ensure your domain has SSL, fast DNS resolution, and zero bot-blocking CAPTCHAs."
      ]
    }
  },
  {
    "id": "ai-crawler-robots-txt",
    "name": "AI Crawler-Friendly Robots.txt Generator",
    "shortName": "AI Robots.txt Tool",
    "category": "ai",
    "badge": "ESSENTIAL",
    "tagline": "Configure rules for GPTBot, PerplexityBot, ClaudeBot, and Google-Extended",
    "description": "Decide exactly which AI search engines can index your site for citations while protecting proprietary training data. Generates clean robots.txt in 1 click.",
    "metaTitle": "AI Crawler Robots.txt Generator | Free SEO Utility | Codube",
    "metaDescription": "Generate compliant robots.txt rules for GPTBot, PerplexityBot, ClaudeBot, Bytespider, and Google-Extended. 1-click copy and download.",
    "keywords": [
      "ai robots txt generator",
      "gptbot robots txt",
      "perplexitybot allow",
      "ai crawler rules",
      "robots txt builder"
    ],
    "fields": [
      {
        "id": "domain",
        "label": "Website Domain",
        "placeholder": "https://mybusiness.com",
        "type": "text",
        "required": true,
        "defaultValue": "https://mybusiness.com"
      },
      {
        "id": "sitemapUrl",
        "label": "Sitemap URL",
        "placeholder": "https://mybusiness.com/sitemap.xml",
        "type": "text",
        "defaultValue": "https://mybusiness.com/sitemap.xml"
      },
      {
        "id": "allowChatGPT",
        "label": "Allow ChatGPT Search (OAI-SearchBot & GPTBot)?",
        "type": "select",
        "options": [
          "Allow Both (Recommended for SEO)",
          "Allow SearchBot only, Block Training",
          "Block All OpenAI Bots"
        ],
        "defaultValue": "Allow Both (Recommended for SEO)"
      },
      {
        "id": "allowPerplexity",
        "label": "Allow Perplexity AI (PerplexityBot)?",
        "type": "select",
        "options": [
          "Allow (Recommended for Citations)",
          "Block"
        ],
        "defaultValue": "Allow (Recommended for Citations)"
      },
      {
        "id": "allowClaude",
        "label": "Allow Anthropic Claude (ClaudeBot & Claude-Web)?",
        "type": "select",
        "options": [
          "Allow",
          "Block"
        ],
        "defaultValue": "Allow"
      },
      {
        "id": "blockAggressive",
        "label": "Block Aggressive Scraping Bots (Bytespider, CCBot)?",
        "type": "select",
        "options": [
          "Yes, block aggressive bandwidth hogs",
          "No, keep open"
        ],
        "defaultValue": "Yes, block aggressive bandwidth hogs"
      }
    ],
    "outputLabel": "Optimized Production robots.txt File",
    "outputFormat": "code",
    "codeLanguage": "txt",
    "whatsappHook": "Hi Abhishek, I generated an AI-friendly robots.txt on Codube. Can your team review our overall site architecture and SEO indexation?",
    "educationalContent": {
      "heading": "Balancing AI Search Citations vs Content Scraping",
      "paragraphs": [
        "Blocking all AI crawlers kills your visibility in conversational search. If you disallow OAI-SearchBot or PerplexityBot, AI engines will tell users your business doesn't exist.",
        "The smart strategy is to allow search and citation crawlers while blocking bulk unauthorized scrapers like Bytespider that waste server bandwidth without sending traffic."
      ],
      "tips": [
        "Differentiate between GPTBot (model training) and OAI-SearchBot (search citations).",
        "Always declare your absolute sitemap URL at the bottom of robots.txt.",
        "Test your robots.txt in Google Search Console after deployment."
      ]
    }
  },
  {
    "id": "ai-hallucination-risk-scanner",
    "name": "Brand AI Hallucination & Sentiment Risk Scanner",
    "shortName": "AI Hallucination Scanner",
    "category": "ai",
    "badge": "CRITICAL",
    "tagline": "Audit ambiguity risks that cause ChatGPT and Claude to hallucinate fake facts about your brand",
    "description": "LLMs hallucinate when website copy is vague or contradictory. Scan your business positioning and get instant clarity corrections.",
    "metaTitle": "Brand AI Hallucination Risk Scanner | Free AI Audit | Codube",
    "metaDescription": "Test if LLMs will hallucinate incorrect pricing, addresses, or services for your brand. Get instant clarity recommendations.",
    "keywords": [
      "ai hallucination scanner",
      "brand sentiment ai",
      "llm accuracy audit",
      "chatgpt brand hallucination",
      "ai brand safety"
    ],
    "fields": [
      {
        "id": "brandName",
        "label": "Brand Name",
        "type": "text",
        "required": true,
        "defaultValue": "Apex Orthopedic Clinic"
      },
      {
        "id": "pricingCopy",
        "label": "Current Pricing Statement on Website",
        "type": "textarea",
        "defaultValue": "We offer affordable rates and custom quotes depending on insurance coverage and consultation details. Contact us for pricing."
      },
      {
        "id": "serviceScope",
        "label": "Service Scope Description",
        "type": "textarea",
        "defaultValue": "Comprehensive joint replacement, sports injury rehab, and general physical therapy for all ages."
      },
      {
        "id": "doctorCredentials",
        "label": "Doctor / Founder Credentials",
        "type": "text",
        "defaultValue": "Led by Dr. Sharma, MS Orthopedics with 15+ years experience in joint preservation."
      }
    ],
    "outputLabel": "Hallucination Risk Diagnostic & Disambiguation Blueprint",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, our brand has hallucination risks on AI search engines. We need Codube to build an unambiguous Next.js site with verified Schema data.",
    "educationalContent": {
      "heading": "Why AI Engines Hallucinate About Small Businesses",
      "paragraphs": [
        "When an AI cannot find concrete numbers, hours, or addresses on your website, it uses statistical probability to guess. This leads to wrong consultation fees or non-existent services being shown to prospective clients.",
        "Providing explicit, structured data points eliminates probabilistic guessing and forces LLMs to quote your exact parameters."
      ],
      "tips": [
        "State transparent baseline pricing (e.g. 'Consultation starts at $150 / \u20b91,500').",
        "List exact clinic hours, emergency phone numbers, and physical coordinates.",
        "Use unambiguous Schema.org medicalSpecialty or serviceType enumerations."
      ]
    }
  },
  {
    "id": "ai-cold-email-generator",
    "name": "High-Converting B2B Cold Email & Sequence Generator",
    "shortName": "Cold Email AI",
    "category": "marketing",
    "badge": "MOST POPULAR",
    "tagline": "Generate personalized 3-step cold email sequences that get 35%+ open rates",
    "description": "Stop using boring templates that land in spam. Generate high-converting cold email sequences with magnetic subject lines, pain-point hooks, and low-friction CTAs.",
    "metaTitle": "Free AI B2B Cold Email Generator | High-Converting Outreach | Codube",
    "metaDescription": "Generate high-converting 3-step B2B cold email sequences with custom subject lines and low-friction CTAs. 100% free cold outreach tool.",
    "keywords": [
      "cold email generator",
      "ai cold email writer",
      "b2b outreach sequence",
      "sales email template ai",
      "cold email subject lines"
    ],
    "fields": [
      {
        "id": "myCompany",
        "label": "Your Company / Offering",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Technologies"
      },
      {
        "id": "targetPersona",
        "label": "Target Decision Maker",
        "type": "select",
        "options": [
          "Clinic Directors & Doctors",
          "Real Estate Founders & Brokers",
          "SaaS Founders & CTOs",
          "E-Commerce Brand Owners",
          "Local Business Owners"
        ],
        "defaultValue": "Clinic Directors & Doctors"
      },
      {
        "id": "targetPain",
        "label": "Prospect's Core Pain Point",
        "type": "textarea",
        "defaultValue": "Losing 40% of after-hours patient inquiries because staff doesn't answer phone calls past 7 PM."
      },
      {
        "id": "valueOffer",
        "label": "Your Core Solution & Guarantee",
        "type": "text",
        "defaultValue": "24/7 automated WhatsApp AI receptionist that books appointments in 30 seconds, deployed in 7 days."
      },
      {
        "id": "ctaStyle",
        "label": "Call To Action (CTA) Style",
        "type": "select",
        "options": [
          "Low-Friction 5-min Loom/Video",
          "WhatsApp Quick Demo Link",
          "Direct 10-min Intro Call",
          "Free Audit / Case Study"
        ],
        "defaultValue": "Low-Friction 5-min Loom/Video"
      }
    ],
    "outputLabel": "Complete 3-Step Cold Email Campaign (Subject Lines + Follow-ups)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated a cold outreach sequence on Codube. Can your team build our landing page and WhatsApp lead capture system?",
    "educationalContent": {
      "heading": "The Anatomy of a 40%+ Response Rate Cold Email",
      "paragraphs": [
        "Great cold emails are never about you\u2014they are 100% focused on a specific, painful problem your prospect experiences every day.",
        "Keep the initial email under 120 words. Never ask for a 30-minute meeting on day one; ask for interest ('Mind if I send over a 60-second video walkthrough of how this works?')."
      ],
      "tips": [
        "Subject lines should look like internal notes (3-5 words, lowercase, no emojis).",
        "Always personalize the opening sentence with their city, niche, or recent announcement.",
        "Follow up twice over 7 business days\u201470% of conversions happen on follow-up email #2."
      ]
    }
  },
  {
    "id": "ai-google-ads-copywriter",
    "name": "High-CTR Google Search Ads Copywriter",
    "shortName": "Google Ads Copywriter",
    "category": "marketing",
    "badge": "HIGH CONVERTING",
    "tagline": "Generate Responsive Search Ads (RSA) with strict character limit checks",
    "description": "Generate 10 high-CTR headlines (<30 chars) and 4 persuasive descriptions (<90 chars) optimized for Google Ads Quality Score.",
    "metaTitle": "Free AI Google Ads Copywriter | Responsive Search Ads Generator | Codube",
    "metaDescription": "Generate high-converting Google Search Ad headlines and descriptions within strict 30 and 90 character limits. Boost Quality Score and CTR.",
    "keywords": [
      "google ads copywriter",
      "rsa headline generator",
      "google search ads ai",
      "high ctr ad copy",
      "google ads character limit checker"
    ],
    "fields": [
      {
        "id": "businessName",
        "label": "Business / Product Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Studio"
      },
      {
        "id": "targetKeyword",
        "label": "Primary Target Keyword",
        "type": "text",
        "required": true,
        "defaultValue": "Web Development Company Jaipur"
      },
      {
        "id": "keyBenefit",
        "label": "Key Differentiator / Offer",
        "type": "text",
        "defaultValue": "7-Day Guaranteed Delivery & Full Source Code Ownership"
      },
      {
        "id": "promotion",
        "label": "Special Offer / Pricing (Optional)",
        "type": "text",
        "defaultValue": "$999 Complete Launch Kit"
      }
    ],
    "outputLabel": "Compliant Google Responsive Search Ad (Headlines & Descriptions)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated Google Ads copy on Codube. We want your team to build a high-speed Next.js landing page to run these ads to.",
    "educationalContent": {
      "heading": "Maximizing Google Ads Quality Score",
      "paragraphs": [
        "Google rewards ads that mirror the exact search intent of the user. Include your primary keyword in Headline 1, followed by a concrete metric in Headline 2.",
        "Google Ads penalizes slow landing pages. Pairing high-CTR copy with a 0.2s Next.js landing page cuts cost-per-click (CPC) by up to 35%."
      ],
      "tips": [
        "Keep headlines under 30 characters and descriptions under 90 characters.",
        "Include numbers, pricing, and guaranteed delivery times in descriptions.",
        "Use title case for headlines and clear call-to-actions ('Get Free Demo Today')."
      ]
    }
  },
  {
    "id": "ai-facebook-ad-copy",
    "name": "Viral Facebook & Instagram Ad Copy Generator",
    "shortName": "FB / IG Ad Copy AI",
    "category": "marketing",
    "badge": "PROVEN",
    "tagline": "Generate scroll-stopping Meta ad hooks, primary text, and headlines",
    "description": "Create direct-response Meta ads using battle-tested copywriting frameworks (Hook-Story-Offer and PAS). Perfect for clinics, real estate, and local agencies.",
    "metaTitle": "Free Facebook & Instagram Ad Copy Generator | Meta Ads AI | Codube",
    "metaDescription": "Generate scroll-stopping Facebook and Instagram ad copy with proven hooks, emotional angles, and direct-response CTAs. Free Meta ads copywriter.",
    "keywords": [
      "facebook ad copy generator",
      "instagram ad copy ai",
      "meta ads copywriter",
      "hook story offer generator",
      "direct response ad copy"
    ],
    "fields": [
      {
        "id": "productName",
        "label": "Product or Service Name",
        "type": "text",
        "required": true,
        "defaultValue": "24/7 Clinic WhatsApp AI Receptionist"
      },
      {
        "id": "targetAudience",
        "label": "Target Audience",
        "type": "text",
        "defaultValue": "Dentists, Doctors, and Private Clinic Owners in Dubai & India"
      },
      {
        "id": "emotionalHook",
        "label": "The Core Frustration",
        "type": "textarea",
        "defaultValue": "Patients calling after 8 PM get a dead dial tone, so they book the next clinic down the street."
      },
      {
        "id": "specialOffer",
        "label": "The Irresistible Offer",
        "type": "text",
        "defaultValue": "Free 14-Day Live Demo on your clinic's WhatsApp number. Zero setup fee."
      }
    ],
    "outputLabel": "Complete Meta Ad Kit (3 Scroll-Stopping Hooks + Primary Copy + Headlines)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I created Meta Ad copy on Codube. We need an ultra-fast Next.js sales funnel and WhatsApp bot to handle the inbound leads.",
    "educationalContent": {
      "heading": "The First 3 Lines Decide Your ROAS",
      "paragraphs": [
        "Over 85% of users scroll past Facebook and Instagram ads without clicking 'See More'. The opening line must call out a specific role and state a counter-intuitive truth.",
        "Never send Meta ad traffic to a generic homepage. Always route visitors directly to a dedicated landing page or WhatsApp Click-to-Chat link with pre-filled context."
      ],
      "tips": [
        "Open with a pattern-interrupt question or bold statement.",
        "Use single-sentence paragraphs and clean bullet points for easy scanning on mobile.",
        "Add urgency without sounding deceptive ('Offer valid for the first 5 clinic setups this month')."
      ]
    }
  },
  {
    "id": "ai-cold-linkedin-dm",
    "name": "High-Response LinkedIn B2B Outreach & Connection Writer",
    "shortName": "LinkedIn Outreach AI",
    "category": "marketing",
    "badge": "HIGH RESPONSE",
    "tagline": "Write non-spammy LinkedIn connection requests and direct messages",
    "description": "Tired of getting ignored on LinkedIn? Generate personalized connection notes (<300 chars) and high-value value-add follow-up messages that start real conversations.",
    "metaTitle": "Free LinkedIn Cold Outreach & DM Generator | B2B Sales AI | Codube",
    "metaDescription": "Generate high-converting LinkedIn connection requests and follow-up DMs that get replies from CEOs, doctors, and marketing directors.",
    "keywords": [
      "linkedin cold outreach generator",
      "linkedin connection note ai",
      "linkedin b2b message template",
      "linkedin dm writer",
      "sales outreach linkedin"
    ],
    "fields": [
      {
        "id": "senderName",
        "label": "Your Name & Role",
        "type": "text",
        "required": true,
        "defaultValue": "Abhishek Jain, Founder @ Codube"
      },
      {
        "id": "targetTitle",
        "label": "Target Profile Title",
        "type": "text",
        "required": true,
        "defaultValue": "Managing Director / Medical Director"
      },
      {
        "id": "nicheTopic",
        "label": "Specific Shared Topic or Common Ground",
        "type": "text",
        "defaultValue": "Expanding clinic patient acquisition and after-hours booking automation"
      },
      {
        "id": "giveFirstAsset",
        "label": "Free Value Asset You Are Offering",
        "type": "text",
        "defaultValue": "A 2-page benchmark breakdown of how top Dubai clinics recover missed calls"
      }
    ],
    "outputLabel": "LinkedIn Outreach Playbook (Connection Note + Follow-Up 1 & 2)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated LinkedIn outreach scripts on Codube. Let's discuss building our B2B lead generation infrastructure.",
    "educationalContent": {
      "heading": "How to Pitch on LinkedIn Without Sounding Like a Spammer",
      "paragraphs": [
        "The #1 mistake on LinkedIn is sending a 4-paragraph sales pitch 2 seconds after someone accepts your connection request.",
        "Lead with zero-friction value. Offer a relevant benchmark report or case study without asking for a call. Once they reply with interest, transition to WhatsApp or a quick demo."
      ],
      "tips": [
        "Keep connection notes under 300 characters.",
        "Never say 'Hope you are doing well'\u2014start immediately with context.",
        "End messages with an open-ended question rather than a scheduling link."
      ]
    }
  },
  {
    "id": "ai-landing-page-copy",
    "name": "5-Section High-Converting Landing Page Copywriter",
    "shortName": "Landing Page Copy AI",
    "category": "marketing",
    "badge": "CRUCIAL",
    "tagline": "Generate full copy for Hero, Pain, Solution, Social Proof, and CTA",
    "description": "Need a landing page that converts traffic at 8-15%? Generate complete section-by-section copy engineered for maximum B2B conversions.",
    "metaTitle": "Free AI Landing Page Copy Generator | High-Converting Copy | Codube",
    "metaDescription": "Generate complete 5-section landing page copy for B2B businesses, clinics, and SaaS. Hero headlines, pain points, feature benefits, and CTAs.",
    "keywords": [
      "landing page copy generator",
      "ai landing page writer",
      "hero headline generator",
      "high converting sales copy",
      "b2b landing page template"
    ],
    "fields": [
      {
        "id": "businessName",
        "label": "Business Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube"
      },
      {
        "id": "coreOffer",
        "label": "Primary Offering",
        "type": "text",
        "required": true,
        "defaultValue": "Conversion-Engineered Websites & 24/7 WhatsApp AI Agents"
      },
      {
        "id": "targetAudience",
        "label": "Ideal Client Profile",
        "type": "text",
        "defaultValue": "Clinics, Doctors, Real Estate Brokers, and Growing Businesses"
      },
      {
        "id": "primaryBenefit",
        "label": "The #1 Concrete Result",
        "type": "text",
        "defaultValue": "Capture 3x more leads and book appointments while you sleep\u2014delivered in 7 days."
      },
      {
        "id": "guarantee",
        "label": "Guarantee / Risk Reversal",
        "type": "text",
        "defaultValue": "100% full source code ownership, zero lock-in, and 7-day turnaround guaranteed."
      }
    ],
    "outputLabel": "Complete 5-Section Landing Page Blueprint & Copy",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated landing page copy on Codube. Can your team code this into a high-speed Next.js 14 website for us?",
    "educationalContent": {
      "heading": "Conversion Rate Optimization (CRO) Blueprint",
      "paragraphs": [
        "A great landing page doesn't describe features; it paints the before-and-after transformation for the customer.",
        "Place your primary call-to-action above the fold, repeat it after the proof section, and ensure there is only ONE primary goal (e.g. 'Book Free Demo on WhatsApp')."
      ],
      "tips": [
        "Use a 3-part hero formula: Badge (for who), Headline (outcome), Subheadline (how + timeframe).",
        "Back claims with real metrics (e.g. '3x more bookings', '0.2s load time').",
        "Add a sticky floating WhatsApp button on mobile screens."
      ]
    }
  },
  {
    "id": "ai-value-proposition-generator",
    "name": "Unique Value Proposition (UVP) & Elevator Pitch AI",
    "shortName": "Value Proposition AI",
    "category": "marketing",
    "badge": "STRATEGIC",
    "tagline": "Craft an irresistible elevator pitch and UVP statement in 3 variations",
    "description": "Clarify what makes your business fundamentally different from competitors. Generate crisp 1-sentence pitches for your website, investor decks, and sales calls.",
    "metaTitle": "Free Unique Value Proposition (UVP) Generator | Codube",
    "metaDescription": "Generate clear, compelling unique value propositions and elevator pitches. Differentiate your business from agencies and freelancers.",
    "keywords": [
      "value proposition generator",
      "elevator pitch ai",
      "uvp generator",
      "business pitch writer",
      "brand positioning statement"
    ],
    "fields": [
      {
        "id": "companyName",
        "label": "Company Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Technologies"
      },
      {
        "id": "targetCustomer",
        "label": "Target Customer",
        "type": "text",
        "defaultValue": "Ambitious Clinic Owners & Real Estate Developers"
      },
      {
        "id": "solution",
        "label": "What do you build?",
        "type": "text",
        "defaultValue": "Sub-second Next.js web systems and automated WhatsApp Cloud AI agents"
      },
      {
        "id": "competitorAlternative",
        "label": "What are they currently using?",
        "type": "text",
        "defaultValue": "Slow WordPress templates and unreliable freelancers who disappear"
      }
    ],
    "outputLabel": "3 Irresistible Value Proposition Frameworks & 30-Second Pitch",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I refined our company pitch on Codube. We want Codube to rebuild our web branding and launch our growth kit.",
    "educationalContent": {
      "heading": "The Steve Blank & Geoff Moore UVP Formulas",
      "paragraphs": [
        "A powerful value proposition explains: 1) Who it is for, 2) The problem it solves, and 3) Why you are distinct from the alternative.",
        "If you can substitute your competitor's name into your headline, your pitch is too generic. Be specific about speed, technology, and guaranteed outcomes."
      ],
      "tips": [
        "Avoid buzzwords like 'synergy', 'innovative', or 'cutting-edge'.",
        "State exact deliverables and timelines.",
        "Test your pitch on actual clients to see if their eyes light up."
      ]
    }
  },
  {
    "id": "ai-review-reply-generator",
    "name": "Google Maps Positive & Negative Review Reply AI",
    "shortName": "Review Reply AI",
    "category": "marketing",
    "badge": "LOCAL SEO",
    "tagline": "Generate professional, empathetic responses to 5-star and 1-star customer reviews",
    "description": "Replying to Google Maps reviews boosts local SEO rankings by up to 28%. Generate warm, compliant responses for medical clinics, restaurants, and local services.",
    "metaTitle": "Free Google Maps Review Reply Generator | Local SEO AI | Codube",
    "metaDescription": "Generate professional, HIPAA-conscious review replies for Google Maps and Trustpilot. Turn negative reviews into trust-building opportunities.",
    "keywords": [
      "google review reply generator",
      "ai review responder",
      "local seo review replies",
      "negative review reply template",
      "clinic review reply"
    ],
    "fields": [
      {
        "id": "businessName",
        "label": "Business Name",
        "type": "text",
        "required": true,
        "defaultValue": "Dr. Joy Dental Clinic"
      },
      {
        "id": "reviewerName",
        "label": "Reviewer's Name",
        "type": "text",
        "defaultValue": "Rahul S."
      },
      {
        "id": "starRating",
        "label": "Star Rating",
        "type": "select",
        "options": [
          "5 Stars (Glowing Praise)",
          "4 Stars (Positive with Minor Feedback)",
          "1-2 Stars (Critical Complaint)"
        ],
        "defaultValue": "5 Stars (Glowing Praise)"
      },
      {
        "id": "reviewText",
        "label": "Customer Review Content",
        "type": "textarea",
        "defaultValue": "Dr. Sharma and the team were fantastic! Got my dental implants done with zero pain and the after-hours WhatsApp support was super responsive."
      }
    ],
    "outputLabel": "3 Customized SEO-Optimized Public Responses",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated Google review replies on Codube. Can your team help us automate our Google Maps local SEO and WhatsApp lead capture?",
    "educationalContent": {
      "heading": "Why Review Replies Impact Google Local Pack Rankings",
      "paragraphs": [
        "Google's local algorithm looks at owner response velocity and keyword reinforcement. Weaving natural location and service keywords into your replies boosts local rank.",
        "For 1-star reviews, never argue publicly. Apologize sincerely, offer an offline resolution channel (e.g. direct phone/email), and show prospective clients that you take accountability."
      ],
      "tips": [
        "Never disclose private patient medical information in public replies.",
        "Include service keywords naturally ('Thank you for trusting us with your dental implants in Dubai').",
        "Respond within 24 hours to signal an active, trustworthy business."
      ]
    }
  },
  {
    "id": "whatsapp-link-generator",
    "name": "WhatsApp Direct Click-to-Chat Link & QR Generator",
    "shortName": "WhatsApp Link Builder",
    "category": "growth",
    "badge": "MOST POPULAR",
    "tagline": "Create pre-filled WhatsApp links with 1-click test and QR code",
    "description": "Eliminate friction for inbound leads. Generate official wa.me short links with encoded pre-filled text so customers can message you with zero typing.",
    "metaTitle": "Free WhatsApp Click-to-Chat Link Generator | Codube",
    "metaDescription": "Create free WhatsApp Click-to-Chat links with pre-filled custom messages. Boost conversion rates on your website, Instagram bio, and ads.",
    "keywords": [
      "whatsapp link generator",
      "wa me link generator",
      "whatsapp chat link with prefilled message",
      "whatsapp qr code generator",
      "whatsapp lead link"
    ],
    "fields": [
      {
        "id": "phoneNumber",
        "label": "Phone Number (with Country Code, no + or spaces)",
        "placeholder": "919672660338",
        "type": "text",
        "required": true,
        "defaultValue": "919672660338"
      },
      {
        "id": "purpose",
        "label": "Link Purpose / Campaign",
        "type": "select",
        "options": [
          "General Inquiries / Demo Request",
          "Clinic Appointment Booking",
          "Real Estate Property Inquiry",
          "Free Strategy Call Booking",
          "Custom Support / Pricing Quote"
        ],
        "defaultValue": "General Inquiries / Demo Request"
      },
      {
        "id": "prefilledText",
        "label": "Pre-filled Message",
        "type": "textarea",
        "defaultValue": "Hi Abhishek, I visited your website and want to see a live demo of the Website + WhatsApp AI Agent for my business."
      }
    ],
    "outputLabel": "Generated WhatsApp Direct Link & Embed Codes",
    "outputFormat": "link",
    "whatsappHook": "Hi Abhishek, I generated a WhatsApp link on Codube. We want your team to connect an official WhatsApp AI Receptionist to this number.",
    "educationalContent": {
      "heading": "Why WhatsApp Links Convert 4x Higher Than Contact Forms",
      "paragraphs": [
        "Traditional web forms ask for names, emails, and phone numbers, creating massive drop-off. A direct WhatsApp click-to-chat button opens an authenticated 2-way conversation in 1 tap.",
        "Over 92% of users in India, the UAE, Europe, and Latin America prefer chatting on WhatsApp over waiting for an email response that takes 2 days."
      ],
      "tips": [
        "Always test the international country code format (e.g. 91 for India, 971 for UAE, 1 for USA).",
        "Pre-fill the message with the exact source context ('Hi, I saw your $999 package on Codube...').",
        "Add a pulsing green badge to your website's floating WhatsApp widget."
      ]
    }
  },
  {
    "id": "whatsapp-flow-script-builder",
    "name": "24/7 WhatsApp AI Chatbot Script & Flow Builder",
    "shortName": "WhatsApp Script Builder",
    "category": "growth",
    "badge": "HIGH VALUE",
    "tagline": "Design complete multi-turn chatbot conversation trees for your business",
    "description": "Map out your automated greeting, qualification questions, appointment booking flow, and human agent handoff logic before deploying your bot.",
    "metaTitle": "WhatsApp Chatbot Script & Flow Builder | Free AI Tool | Codube",
    "metaDescription": "Build multi-turn conversation flows and qualification scripts for 24/7 WhatsApp AI receptionists. Templates for clinics, real estate, and agencies.",
    "keywords": [
      "whatsapp chatbot script",
      "whatsapp bot flow builder",
      "whatsapp automated receptionist script",
      "whatsapp conversation tree",
      "whatsapp lead qualification flow"
    ],
    "fields": [
      {
        "id": "businessType",
        "label": "Business Niche",
        "type": "select",
        "options": [
          "Medical Clinic & Doctor",
          "Real Estate Brokerage",
          "Software / Web Development Agency",
          "Gym & Fitness Studio",
          "Law Firm & Legal Services"
        ],
        "defaultValue": "Medical Clinic & Doctor"
      },
      {
        "id": "botName",
        "label": "AI Assistant Persona Name",
        "type": "text",
        "defaultValue": "Dr. Joy AI Receptionist"
      },
      {
        "id": "primaryGoal",
        "label": "Primary Conversion Goal",
        "type": "select",
        "options": [
          "Book Confirmed Appointment",
          "Capture Qualified Lead (Budget + Timeline)",
          "Send Location / Pricing PDF",
          "Instant Human Callback Request"
        ],
        "defaultValue": "Book Confirmed Appointment"
      },
      {
        "id": "workingHours",
        "label": "Working Hours Context",
        "type": "text",
        "defaultValue": "Monday - Saturday 9 AM to 8 PM (24/7 AI Coverage)"
      }
    ],
    "outputLabel": "Complete WhatsApp AI Interactive Conversation Flow (Production Ready)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I mapped out our WhatsApp conversation script on Codube. Can your team build and deploy this AI bot on the official WhatsApp Cloud API?",
    "educationalContent": {
      "heading": "Engineering High-Converting WhatsApp Conversation Flows",
      "paragraphs": [
        "A great WhatsApp bot feels like a courteous, hyper-responsive human receptionist\u2014not a robotic IVR tree. Keep initial greetings under 30 words and offer clickable quick-reply options.",
        "Always include an automated fallback to human escalation if the patient or customer requests urgent attention."
      ],
      "tips": [
        "Keep each bot message to 2-3 short sentences max.",
        "Sync qualified answers directly to Google Sheets or your CRM via webhooks in real-time.",
        "Send automatic confirmation reminders 2 hours before appointments."
      ]
    }
  },
  {
    "id": "whatsapp-broadcast-copywriter",
    "name": "Meta Cloud API Approved Broadcast Template Copywriter",
    "shortName": "WhatsApp Broadcast Copy",
    "category": "growth",
    "badge": "META VERIFIED",
    "tagline": "Write WhatsApp marketing templates that pass Meta review without getting rejected",
    "description": "Meta strictly rejects overly promotional WhatsApp broadcasts. Generate compliant Marketing and Utility message templates with dynamic variables.",
    "metaTitle": "WhatsApp Cloud API Broadcast Template Copywriter | Codube",
    "metaDescription": "Generate compliant WhatsApp Cloud API broadcast messages with dynamic parameters {{1}}, {{2}} that get approved by Meta in minutes.",
    "keywords": [
      "whatsapp broadcast copywriter",
      "meta approved whatsapp template",
      "whatsapp cloud api message writer",
      "whatsapp marketing template",
      "whatsapp notification copy"
    ],
    "fields": [
      {
        "id": "companyName",
        "label": "Company Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube"
      },
      {
        "id": "category",
        "label": "Template Category",
        "type": "select",
        "options": [
          "Utility (Appointment Reminders, Order Updates)",
          "Marketing (Seasonal Offers, VIP Invites)",
          "Authentication (One-Time Passcodes)"
        ],
        "defaultValue": "Marketing (Seasonal Offers, VIP Invites)"
      },
      {
        "id": "offerDetails",
        "label": "Broadcast Announcement / Offer",
        "type": "textarea",
        "defaultValue": "Exclusive 20% savings on Dental Implants and free 3D digital smile scan for the first 15 appointments this week."
      },
      {
        "id": "buttonText",
        "label": "Quick Reply / CTA Button Label",
        "type": "text",
        "defaultValue": "Claim Free Scan"
      }
    ],
    "outputLabel": "Meta-Compliant WhatsApp Template Payload (with {{Variables}} & Buttons)",
    "outputFormat": "code",
    "codeLanguage": "json",
    "whatsappHook": "Hi Abhishek, I drafted a WhatsApp broadcast template on Codube. We need Codube to set up our official Meta Cloud API verified account.",
    "educationalContent": {
      "heading": "Why Meta Rejects WhatsApp Marketing Templates",
      "paragraphs": [
        "Meta rejects templates with spelling errors, all-caps words, or unclear variable contexts. Every {{1}} variable must have surrounding text indicating what value will be inserted.",
        "Marketing templates also require an explicit opt-out mechanism (e.g. 'Reply STOP to unsubscribe') to maintain high phone number quality ratings."
      ],
      "tips": [
        "Never use shortened URL links (bit.ly) in WhatsApp templates\u2014Meta often flags them as phishing.",
        "Include clear button actions (Quick Reply or URL Button).",
        "Schedule broadcasts during business hours (10 AM to 6 PM) to prevent user blocks."
      ]
    }
  },
  {
    "id": "whatsapp-privacy-policy-generator",
    "name": "Meta Cloud API WhatsApp Privacy Policy Generator",
    "shortName": "WhatsApp Privacy Policy",
    "category": "growth",
    "badge": "LEGAL COMPLIANCE",
    "tagline": "Generate compliant Privacy Policy markdown for Meta Business verification",
    "description": "To get official Meta WhatsApp Business verification and high messaging limits, you must link a valid public Privacy Policy disclosing phone number handling.",
    "metaTitle": "Meta WhatsApp Cloud API Privacy Policy Generator | Codube",
    "metaDescription": "Generate a compliant Privacy Policy for Meta WhatsApp Business verification and WhatsApp Cloud API apps. 100% free with instant download.",
    "keywords": [
      "whatsapp privacy policy generator",
      "meta cloud api privacy policy",
      "whatsapp business verification privacy url",
      "meta developer policy compliance",
      "whatsapp phone data policy"
    ],
    "fields": [
      {
        "id": "companyName",
        "label": "Legal Entity / Business Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Technologies LLP"
      },
      {
        "id": "websiteUrl",
        "label": "Website URL",
        "type": "text",
        "required": true,
        "defaultValue": "https://codube.io"
      },
      {
        "id": "contactEmail",
        "label": "Privacy Support Email",
        "type": "text",
        "defaultValue": "privacy@codube.io"
      },
      {
        "id": "jurisdiction",
        "label": "Governing Law / Country",
        "type": "select",
        "options": [
          "India (IT Act & DPDP Act)",
          "UAE (Federal Decree Law No. 45)",
          "United States (CCPA/State Laws)",
          "European Union (GDPR Compliant)",
          "Global Standard"
        ],
        "defaultValue": "India (IT Act & DPDP Act)"
      }
    ],
    "outputLabel": "Official Privacy Policy Document (Markdown & Text)",
    "outputFormat": "code",
    "codeLanguage": "markdown",
    "whatsappHook": "Hi Abhishek, I generated our Meta compliance Privacy Policy on Codube. We need your team to configure our WhatsApp Cloud API infrastructure.",
    "educationalContent": {
      "heading": "Meta WhatsApp Business Verification Requirements",
      "paragraphs": [
        "Meta rejects app review submissions if your Privacy Policy is behind a login wall, hosted on a free Google Doc, or fails to disclose third-party data transmission.",
        "Host your policy on an HTTPS domain (e.g. yourdomain.com/privacy) with clear contact emails and an explicit explanation of automated messaging."
      ],
      "tips": [
        "State clearly that user phone numbers are never sold or rented to third-party advertisers.",
        "Explain that users can opt out at any time by texting 'STOP'.",
        "Keep the document accessible in plain text without CAPTCHA gates."
      ]
    }
  },
  {
    "id": "roi-calculator",
    "name": "24/7 AI Receptionist & Missed Call ROI Calculator",
    "shortName": "AI Receptionist ROI",
    "category": "growth",
    "badge": "HIGH CONVERTING",
    "tagline": "Calculate lost revenue from after-hours missed inquiries and recovery ROI",
    "description": "Discover exactly how much revenue your business loses every month to slow replies. Calculate the return on investment of deploying a 24/7 WhatsApp AI receptionist.",
    "metaTitle": "24/7 WhatsApp AI Receptionist ROI Calculator | Codube",
    "metaDescription": "Calculate how many thousands of dollars your clinic or business loses to missed after-hours calls. See instant ROI from 24/7 WhatsApp automation.",
    "keywords": [
      "ai receptionist roi calculator",
      "whatsapp chatbot roi",
      "missed call revenue loss calculator",
      "business automation savings",
      "clinic lead recovery calculator"
    ],
    "fields": [
      {
        "id": "monthlyInquiries",
        "label": "Monthly Inquiries / Website Visitors",
        "type": "number",
        "defaultValue": 250
      },
      {
        "id": "dealValue",
        "label": "Average Client / Patient Value ($ or \u20b9)",
        "type": "number",
        "defaultValue": 500
      },
      {
        "id": "afterHoursPercent",
        "label": "Estimated After-Hours % (Evenings & Weekends)",
        "type": "select",
        "options": [
          "30% (Standard Business)",
          "45% (Clinics & Healthcare)",
          "60% (Real Estate & Consumer)",
          "20% (Strict B2B)"
        ],
        "defaultValue": "45% (Clinics & Healthcare)"
      },
      {
        "id": "currentCloseRate",
        "label": "Current Conversion Rate (%)",
        "type": "number",
        "defaultValue": 10
      }
    ],
    "outputLabel": "Comprehensive Financial ROI & Revenue Recovery Breakdown",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I ran our numbers through your AI Receptionist ROI Calculator. We're losing significant revenue every month\u2014let's deploy Codube's WhatsApp AI bot.",
    "educationalContent": {
      "heading": "The Real Cost of Slow Response Times in 2026",
      "paragraphs": [
        "Studies show that businesses that respond within 5 minutes are 21x more likely to qualify a lead than those who wait 30 minutes. After 1 hour, lead qualification rates collapse by 391%.",
        "A 24/7 WhatsApp AI agent replies in 3 seconds, captures contact details, and books appointments while your human staff is asleep."
      ],
      "tips": [
        "Track after-hours website traffic in Google Analytics to see when prospective clients browse.",
        "Automate instant confirmation emails and WhatsApp SMS simultaneously.",
        "Calculate client lifetime value (LTV), not just single transaction fees."
      ]
    }
  },
  {
    "id": "schema-markup-generator",
    "name": "Comprehensive Schema.org JSON-LD Generator",
    "shortName": "Schema Generator",
    "category": "seo",
    "badge": "TECHNICAL SEO",
    "tagline": "Generate verified JSON-LD for LocalBusiness, MedicalClinic, RealEstate, & Organization",
    "description": "Google and AI search engines love structured data. Generate rich snippet markup that unlocks Google Knowledge Panels, review stars, and map cards.",
    "metaTitle": "Free Schema.org JSON-LD Generator | Rich Snippets AI Tool | Codube",
    "metaDescription": "Generate validated Schema.org JSON-LD structured data for LocalBusiness, MedicalClinic, RealEstateAgent, and Organization. Boost Google rich snippets.",
    "keywords": [
      "schema markup generator",
      "schema org json ld builder",
      "localbusiness schema generator",
      "medicalclinic schema",
      "rich snippets generator"
    ],
    "fields": [
      {
        "id": "schemaType",
        "label": "Schema Category",
        "type": "select",
        "options": [
          "MedicalClinic / Physician",
          "RealEstateAgent",
          "LocalBusiness / ProfessionalService",
          "Corporation / Organization"
        ],
        "defaultValue": "MedicalClinic / Physician"
      },
      {
        "id": "businessName",
        "label": "Business Legal Name",
        "type": "text",
        "required": true,
        "defaultValue": "Dr. Joy Dental Clinic"
      },
      {
        "id": "websiteUrl",
        "label": "Website URL",
        "type": "text",
        "required": true,
        "defaultValue": "https://drjoydental.com"
      },
      {
        "id": "telephone",
        "label": "Phone Number",
        "type": "text",
        "defaultValue": "+971 4 328 5332"
      },
      {
        "id": "streetAddress",
        "label": "Street Address",
        "type": "text",
        "defaultValue": "Al Wasl Road, Jumeirah"
      },
      {
        "id": "city",
        "label": "City",
        "type": "text",
        "defaultValue": "Dubai"
      },
      {
        "id": "country",
        "label": "Country Code",
        "type": "text",
        "defaultValue": "AE"
      },
      {
        "id": "priceRange",
        "label": "Price Range",
        "type": "select",
        "options": [
          "$$$ (Premium)",
          "$$ (Moderate)",
          "$ (Affordable)"
        ],
        "defaultValue": "$$$ (Premium)"
      }
    ],
    "outputLabel": "Google-Validated Schema.org JSON-LD Script Tag",
    "outputFormat": "code",
    "codeLanguage": "json",
    "whatsappHook": "Hi Abhishek, I generated Schema.org JSON-LD on Codube. We need your team to audit our full technical SEO and rich snippet eligibility.",
    "educationalContent": {
      "heading": "Why Structured Data is Crucial for 2026 SEO",
      "paragraphs": [
        "Without structured data, search crawlers treat your website like unstructured text. Schema.org JSON-LD explicitly labels your business name, address, doctors, and telephone.",
        "Schema also feeds Google's Knowledge Graph and directly informs conversational search engines like ChatGPT and Gemini."
      ],
      "tips": [
        "Place the generated <script type=\"application/ld+json\"> inside your HTML <head> or body tag.",
        "Verify your code using Google's official Rich Results Test tool.",
        "Keep openingHours and geo coordinates matching your Google Business Profile exactly."
      ]
    }
  },
  {
    "id": "faq-schema-generator",
    "name": "Google Rich Snippet FAQ Accordion Schema Generator",
    "shortName": "FAQ Schema Builder",
    "category": "seo",
    "badge": "HIGH CTR",
    "tagline": "Generate expandable question & answer accordions for Google SERPs",
    "description": "Double your search result visual real estate on Google. Generate validated FAQPage Schema JSON-LD that turns simple search listings into rich interactive answers.",
    "metaTitle": "Free FAQ Schema JSON-LD Generator | Google SERP Rich Results | Codube",
    "metaDescription": "Generate valid FAQPage Schema markup in JSON-LD. Maximize click-through rates and claim massive real estate on Google search results.",
    "keywords": [
      "faq schema generator",
      "faqpage json ld builder",
      "google faq rich snippet",
      "serp accordion generator",
      "structured data faq"
    ],
    "fields": [
      {
        "id": "q1",
        "label": "Question 1",
        "type": "text",
        "required": true,
        "defaultValue": "How much does a custom Next.js website cost?"
      },
      {
        "id": "a1",
        "label": "Answer 1",
        "type": "textarea",
        "defaultValue": "Our Complete Business Growth Kit starts at $999 (one-time), which includes a 5-page sub-second Next.js website, 24/7 WhatsApp AI receptionist, and local SEO setup."
      },
      {
        "id": "q2",
        "label": "Question 2",
        "type": "text",
        "defaultValue": "How fast can you deliver our website and WhatsApp bot?"
      },
      {
        "id": "a2",
        "label": "Answer 2",
        "type": "textarea",
        "defaultValue": "We guarantee complete deployment within 7 business days, including full source code handover."
      },
      {
        "id": "q3",
        "label": "Question 3",
        "type": "text",
        "defaultValue": "Do you provide source code ownership?"
      },
      {
        "id": "a3",
        "label": "Answer 3",
        "type": "textarea",
        "defaultValue": "Yes. Unlike typical agencies with monthly lock-in, you own 100% of your source code and data."
      }
    ],
    "outputLabel": "Google-Validated FAQPage Schema.org JSON-LD",
    "outputFormat": "code",
    "codeLanguage": "json",
    "whatsappHook": "Hi Abhishek, I generated FAQ Schema on Codube. Can your team add this and optimize our service landing pages for Google rich results?",
    "educationalContent": {
      "heading": "Claiming Maximum Screen Real Estate on Mobile SERPs",
      "paragraphs": [
        "On mobile devices, a search result with an expandable FAQ schema can occupy almost the entire viewport, pushing your competitors below the fold.",
        "Ensure answers are direct, helpful, and concise (under 50 words per answer). Linking to deep pages inside your answer also drives secondary page views."
      ],
      "tips": [
        "Only mark up questions that are actually visible on the corresponding web page.",
        "Avoid promotional spam in answers\u2014focus on factual, high-utility explanations.",
        "Test on Google Rich Results Test before publishing."
      ]
    }
  },
  {
    "id": "meta-tag-writer",
    "name": "High-CTR SEO Meta Title & Description Generator",
    "shortName": "SEO Meta Writer",
    "category": "seo",
    "badge": "DAILY USE",
    "tagline": "Write click-magnet titles (<60 chars) and descriptions (<160 chars)",
    "description": "Generate search-optimized meta tags with strict character and pixel length checks. Includes power words, local modifiers, and high-CTR hooks.",
    "metaTitle": "Free SEO Meta Title & Description Generator | Codube",
    "metaDescription": "Generate high-CTR meta titles and descriptions with strict character limits and Google SERP preview. Boost organic search click-through rates.",
    "keywords": [
      "meta tag generator",
      "seo title generator",
      "meta description writer",
      "serp preview tool",
      "high ctr meta tags"
    ],
    "fields": [
      {
        "id": "brandName",
        "label": "Brand Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube"
      },
      {
        "id": "targetKeyword",
        "label": "Target Primary Keyword",
        "type": "text",
        "required": true,
        "defaultValue": "Website Development Company Jaipur"
      },
      {
        "id": "uniqueHook",
        "label": "Unique Value Metric",
        "type": "text",
        "defaultValue": "Sub-Second Speed & 24/7 WhatsApp AI Agents | 7-Day Launch"
      }
    ],
    "outputLabel": "Production HTML Meta Tags & Google SERP Preview",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I optimized our meta tags on Codube. Can your team perform a comprehensive technical SEO overhaul of our website?",
    "educationalContent": {
      "heading": "The 60 / 155 Rule of Modern Search Snippets",
      "paragraphs": [
        "Google truncates titles longer than 60 characters (or ~580 pixels) and descriptions over 155-160 characters on desktop and mobile.",
        "Place your primary search keyword as close to the beginning of the title as possible, followed by a separator and a high-converting emotional hook."
      ],
      "tips": [
        "Include numbers, years, or pricing to stand out visually in SERPs.",
        "Avoid duplicate meta descriptions across different pages.",
        "Always preview how your snippet appears on mobile devices."
      ]
    }
  },
  {
    "id": "open-graph-meta-generator",
    "name": "OpenGraph Social Card & Meta Tag Generator",
    "shortName": "OG Meta Generator",
    "category": "seo",
    "badge": "ESSENTIAL",
    "tagline": "Ensure your website looks stunning when shared on WhatsApp, LinkedIn & X",
    "description": "Never send an ugly, blank link preview again. Generate complete OpenGraph, Twitter Card, and image meta tags with 1-click copy.",
    "metaTitle": "Free OpenGraph & Social Card Meta Tag Generator | Codube",
    "metaDescription": "Generate beautiful OpenGraph and Twitter Card social preview tags for WhatsApp, LinkedIn, and Facebook sharing. 100% free with instant HTML export.",
    "keywords": [
      "opengraph generator",
      "og meta tags generator",
      "twitter card generator",
      "whatsapp link preview tags",
      "social meta tags generator"
    ],
    "fields": [
      {
        "id": "title",
        "label": "Page Title",
        "type": "text",
        "required": true,
        "defaultValue": "Codube | High-Speed Websites & 24/7 WhatsApp AI Agents"
      },
      {
        "id": "description",
        "label": "Social Description",
        "type": "textarea",
        "defaultValue": "We build sub-second Next.js websites and automated WhatsApp AI receptionists that capture leads and book appointments while you sleep."
      },
      {
        "id": "pageUrl",
        "label": "Canonical Page URL",
        "type": "text",
        "defaultValue": "https://codube.io"
      },
      {
        "id": "imageUrl",
        "label": "Social Preview Image URL (1200x630px)",
        "type": "text",
        "defaultValue": "https://codube.io/images/og-preview.png"
      }
    ],
    "outputLabel": "Complete HTML <head> Social Meta Tags",
    "outputFormat": "code",
    "codeLanguage": "html",
    "whatsappHook": "Hi Abhishek, I generated OpenGraph tags on Codube. How can we redesign our website's social sharing and branding assets?",
    "educationalContent": {
      "heading": "Why WhatsApp Link Previews Drive Conversions",
      "paragraphs": [
        "When an existing client shares your link with a colleague on WhatsApp or LinkedIn, the OpenGraph image, title, and description are the very first impression they see.",
        "An optimized 1200x630px high-contrast preview image increases click-through rates by up to 240% compared to a plain raw URL."
      ],
      "tips": [
        "Ensure the og:image URL uses an absolute https:// link.",
        "Keep image dimensions at 1200 x 630 pixels (1.91:1 ratio).",
        "Clear cached social previews using the LinkedIn Post Inspector and Facebook Sharing Debugger."
      ]
    }
  },
  {
    "id": "website-speed-audit",
    "name": "Core Web Vitals & Next.js vs WordPress Speed Estimator",
    "shortName": "Speed & LCP Audit",
    "category": "seo",
    "badge": "PERFORMANCE",
    "tagline": "Calculate bounce rate penalties and conversion lift from sub-second loading",
    "description": "Every 100ms of latency costs 1% in conversions. Estimate your site's Core Web Vitals, bounce rate penalty, and the revenue lift of migrating to Next.js 14.",
    "metaTitle": "Website Speed & Core Web Vitals Estimator | Codube",
    "metaDescription": "Calculate bounce rate losses and conversion penalties from slow website loading. Compare Next.js sub-second speed with traditional WordPress.",
    "keywords": [
      "website speed audit",
      "core web vitals estimator",
      "lcp bounce rate calculator",
      "next js vs wordpress speed",
      "website conversion speed lift"
    ],
    "fields": [
      {
        "id": "currentPlatform",
        "label": "Current Website Platform",
        "type": "select",
        "options": [
          "WordPress / Elementor / Divi",
          "Shopify Store",
          "Custom PHP / HTML",
          "Wix / Squarespace",
          "Next.js / Modern React"
        ],
        "defaultValue": "WordPress / Elementor / Divi"
      },
      {
        "id": "currentLoadTime",
        "label": "Estimated Load Time (Seconds)",
        "type": "number",
        "defaultValue": 4.2
      },
      {
        "id": "monthlyTraffic",
        "label": "Monthly Unique Visitors",
        "type": "number",
        "defaultValue": 3000
      },
      {
        "id": "avgOrderValue",
        "label": "Average Deal or Order Value ($ or \u20b9)",
        "type": "number",
        "defaultValue": 150
      }
    ],
    "outputLabel": "Core Web Vitals Diagnostic & Financial Speed Lift Report",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, our site has high bounce rate and slow load times. We want Codube to migrate us to an ultra-fast Next.js architecture.",
    "educationalContent": {
      "heading": "Why Google Uses Core Web Vitals as a Direct Ranking Signal",
      "paragraphs": [
        "Google's Page Experience update directly penalizes sites with poor Largest Contentful Paint (LCP > 2.5s) or high Cumulative Layout Shift (CLS > 0.1).",
        "Sites built with Next.js 14 Server Components compile static HTML ahead of time, delivering instant First Contentful Paint in under 200ms."
      ],
      "tips": [
        "Replace heavy multi-purpose WordPress plugins with modular serverless endpoints.",
        "Use modern WebP/AVIF images with explicit width and height attributes.",
        "Serve all static assets from global Edge CDNs like Cloudflare or Vercel."
      ]
    }
  },
  {
    "id": "canonical-redirect-generator",
    "name": "Canonical Tag, 301 Redirect & Nginx Rule Generator",
    "shortName": "Redirect & Canonical Tool",
    "category": "seo",
    "badge": "DEVELOPER SEO",
    "tagline": "Generate clean Apache .htaccess, Nginx, and Next.js 301 redirect rules",
    "description": "Stop losing link equity and fix duplicate content penalties. Generate 301 redirects and canonical tags across Apache, Nginx, and Next.js config.",
    "metaTitle": "Free 301 Redirect & Canonical Tag Generator | Codube",
    "metaDescription": "Generate Apache .htaccess, Nginx, and Next.js 301 redirect rules and canonical tags. Prevent duplicate content and preserve SEO rankings.",
    "keywords": [
      "301 redirect generator",
      "htaccess redirect rules",
      "nginx 301 redirect",
      "canonical tag generator",
      "next js redirect config"
    ],
    "fields": [
      {
        "id": "serverType",
        "label": "Server / Framework",
        "type": "select",
        "options": [
          "Next.js (next.config.js)",
          "Nginx (nginx.conf)",
          "Apache (.htaccess)",
          "HTML Canonical Tag Only"
        ],
        "defaultValue": "Next.js (next.config.js)"
      },
      {
        "id": "oldUrl",
        "label": "Old URL / Path",
        "type": "text",
        "required": true,
        "defaultValue": "/old-service-page"
      },
      {
        "id": "newUrl",
        "label": "New Destination URL / Path",
        "type": "text",
        "required": true,
        "defaultValue": "/services/website-development-company-in-jaipur"
      },
      {
        "id": "isPermanent",
        "label": "Redirect Type",
        "type": "select",
        "options": [
          "301 Permanent (SEO Link Equity Transferred)",
          "302 Temporary (No equity transfer)"
        ],
        "defaultValue": "301 Permanent (SEO Link Equity Transferred)"
      }
    ],
    "outputLabel": "Ready-to-Deploy Server Configuration & Canonical Tags",
    "outputFormat": "code",
    "codeLanguage": "typescript",
    "whatsappHook": "Hi Abhishek, I generated redirect rules on Codube. Can your team handle our domain migration without losing our existing Google rankings?",
    "educationalContent": {
      "heading": "Preserving Link Equity During Website Migrations",
      "paragraphs": [
        "When redesigning or migrating a website, failing to map old URLs to new counterparts creates 404 errors, causing an immediate 50-80% collapse in organic rankings.",
        "A 301 Permanent Redirect instructs search bots to transfer 95-99% of accumulated PageRank and backlinks to the new destination."
      ],
      "tips": [
        "Never chain multiple redirects (A -> B -> C); always point directly to the final destination.",
        "Ensure canonical tags are self-referencing on canonical pages.",
        "Monitor 404 error logs in Google Search Console for 60 days following any relaunch."
      ]
    }
  },
  {
    "id": "slug-permalink-optimizer",
    "name": "SEO Clean URL Slug & Keyword Permalink Optimizer",
    "shortName": "SEO Slug Optimizer",
    "category": "seo",
    "badge": "QUICK WIN",
    "tagline": "Turn messy titles into clean, hyphen-separated, keyword-dense URLs",
    "description": "Strip out stop words, special characters, and query strings. Generate clean, programmatic-ready URL slugs optimized for Google rankings.",
    "metaTitle": "Free SEO URL Slug & Permalink Optimizer | Codube",
    "metaDescription": "Generate clean, lowercase, hyphen-separated URL slugs optimized for search engine crawlability and high click-through rates.",
    "keywords": [
      "seo slug generator",
      "url slug optimizer",
      "clean permalink tool",
      "keyword slug generator",
      "friendly url builder"
    ],
    "fields": [
      {
        "id": "pageTitle",
        "label": "Page Title or Raw Keyword Phrase",
        "type": "text",
        "required": true,
        "defaultValue": "Top 10 Best Website Development Companies in Jaipur & Dubai for 2026!"
      },
      {
        "id": "removeStopWords",
        "label": "Strip Stop Words (in, for, and, the, a)?",
        "type": "select",
        "options": [
          "Yes (Recommended for maximum SEO density)",
          "No (Keep natural English phrasing)"
        ],
        "defaultValue": "Yes (Recommended for maximum SEO density)"
      },
      {
        "id": "prefix",
        "label": "Optional Subfolder Prefix",
        "type": "text",
        "defaultValue": "/services/"
      }
    ],
    "outputLabel": "Optimized URL Slug & Next.js Dynamic Route Path",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I optimized URL slugs on Codube. Can your team architect a 1,000+ page programmatic SEO directory for our brand?",
    "educationalContent": {
      "heading": "Why Short, Keyword-Rich Slugs Rank Higher",
      "paragraphs": [
        "Backlinko studies show that shorter URLs consistently outperform longer URLs in Google search results.",
        "Clean slugs like /services/web-development-jaipur are easier for users to remember, share on social channels, and parse for topical relevance."
      ],
      "tips": [
        "Always use hyphens (-) rather than underscores (_).",
        "Keep URLs lowercase to avoid duplicate content issues on case-sensitive web servers.",
        "Never include dates or years in evergreen URL slugs."
      ]
    }
  },
  {
    "id": "youtube-tag-title-optimizer",
    "name": "Viral YouTube Title, Description & High-Search Tag Optimizer",
    "shortName": "YouTube SEO AI",
    "category": "social",
    "badge": "HIGH VIEWS",
    "tagline": "Generate click-magnet titles (<70 chars), SEO descriptions, and ranked tags",
    "description": "Boost your video impressions on YouTube Search and Recommended feeds. Generates 5 high-CTR titles, timestamps structure, and comma-separated tags.",
    "metaTitle": "Free YouTube Title, Description & Tag Generator | Video SEO | Codube",
    "metaDescription": "Generate high-CTR YouTube titles, SEO-optimized video descriptions, and comma-separated tags. Boost organic video views and search rankings.",
    "keywords": [
      "youtube title generator",
      "youtube tag generator",
      "video seo description writer",
      "viral youtube hook",
      "youtube keyword optimizer"
    ],
    "fields": [
      {
        "id": "topic",
        "label": "Video Topic / Core Subject",
        "type": "text",
        "required": true,
        "defaultValue": "How to Automate Clinic Appointments with WhatsApp AI"
      },
      {
        "id": "targetAudience",
        "label": "Target Viewer",
        "type": "text",
        "defaultValue": "Doctors, Clinic Managers, and Healthcare Entrepreneurs"
      },
      {
        "id": "keyAngle",
        "label": "Key Value Angle / Number",
        "type": "text",
        "defaultValue": "Save 15 Hours Weekly and Recover $10,000 in Missed Bookings"
      }
    ],
    "outputLabel": "Complete YouTube Video SEO Package (Titles + Description + Tags)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I optimized our YouTube content on Codube. Let's discuss building our clinic website and WhatsApp lead capture system.",
    "educationalContent": {
      "heading": "Mastering the YouTube Recommendation Algorithm",
      "paragraphs": [
        "The YouTube algorithm cares primarily about two metrics: Click-Through Rate (CTR) and Average View Duration (Watch Time).",
        "Your title and thumbnail must create high curiosity or promise a definitive outcome, while your first 3 lines of description tell YouTube search bots what the video covers."
      ],
      "tips": [
        "Keep titles under 65 characters so they don't truncate on mobile devices.",
        "Add chapter timestamps in your description to unlock Google Video Key Moments.",
        "Include your primary keyword in the first 25 words of your description."
      ]
    }
  },
  {
    "id": "instagram-caption-hashtags",
    "name": "Viral Instagram Reels & Post Caption & Tiered Hashtag Generator",
    "shortName": "Instagram Caption AI",
    "category": "social",
    "badge": "VIRAL GROWTH",
    "tagline": "Generate 3 hook variations, engaging micro-blog copy, and tiered hashtags",
    "description": "Stop struggling with Instagram captions. Generate scroll-stopping opening lines, engaging body copy, and 30 tiered hashtags (niche, industry, and broad).",
    "metaTitle": "Free Instagram Caption & Hashtag Generator | Viral Social AI | Codube",
    "metaDescription": "Generate viral Instagram Reels captions and tiered hashtags for business owners, clinics, and creators. 100% free with 1-click copy.",
    "keywords": [
      "instagram caption generator",
      "reels hook generator",
      "instagram hashtag builder",
      "viral ig caption ai",
      "tiered hashtags generator"
    ],
    "fields": [
      {
        "id": "topic",
        "label": "Post or Reel Topic",
        "type": "text",
        "required": true,
        "defaultValue": "Why 70% of dental patients leave without rebooking"
      },
      {
        "id": "industry",
        "label": "Niche / Industry",
        "type": "select",
        "options": [
          "Healthcare & Dental Clinics",
          "Real Estate & Architecture",
          "Software & Startups",
          "Fitness & Gym Studios",
          "E-Commerce & Fashion"
        ],
        "defaultValue": "Healthcare & Dental Clinics"
      },
      {
        "id": "ctaGoal",
        "label": "Call To Action Goal",
        "type": "select",
        "options": [
          "Comment 'DEMO' to get a direct DM",
          "Click link in bio to book",
          "Save this post for later",
          "Tag a clinic owner below"
        ],
        "defaultValue": "Comment 'DEMO' to get a direct DM"
      }
    ],
    "outputLabel": "Instagram Viral Caption Kit (3 Hooks + Body + 30 Tiered Hashtags)",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated Instagram captions on Codube. Can your team set up automated WhatsApp DMs when followers comment on our posts?",
    "educationalContent": {
      "heading": "How the 2026 Instagram Algorithm Ranks Reels",
      "paragraphs": [
        "Instagram's algorithm rewards two key user behaviors: Saves and Shares. If your caption delivers actionable educational steps, viewers bookmark the post.",
        "Using comment automation (e.g. 'Comment DEMO') drives massive engagement signals to Instagram's ranking engine, pushing your Reel to Explore."
      ],
      "tips": [
        "The first 125 characters must hook the viewer before the '...more' link.",
        "Use 3 to 5 hyper-specific niche hashtags rather than generic tags like #love or #business.",
        "Always tell viewers exactly what action to take at the end of the caption."
      ]
    }
  },
  {
    "id": "twitter-x-thread-writer",
    "name": "High-Engagement Twitter / X Thread Hook & Outline Builder",
    "shortName": "Twitter Thread AI",
    "category": "social",
    "badge": "AUTHORITY",
    "tagline": "Turn complex case studies into viral 7-tweet educational threads",
    "description": "Build high-converting founder authority on X. Generate magnetic opening hook tweets, value-packed body tweets, and a high-converting conversion CTA.",
    "metaTitle": "Free Twitter / X Thread Hook & Outline Builder | Codube",
    "metaDescription": "Turn case studies, technical lessons, and business wins into viral Twitter / X threads. High-engagement hooks, body outlines, and conversion CTAs.",
    "keywords": [
      "twitter thread generator",
      "x thread hook writer",
      "viral tweet generator",
      "founder authority twitter",
      "educational thread builder"
    ],
    "fields": [
      {
        "id": "topic",
        "label": "Thread Subject / Case Study",
        "type": "text",
        "required": true,
        "defaultValue": "How we built an AI WhatsApp receptionist that generated $42,000 in clinic bookings in 30 days"
      },
      {
        "id": "keyLessons",
        "label": "Key 3 Lessons or Steps",
        "type": "textarea",
        "defaultValue": "1. Replace long forms with instant WhatsApp chat\n2. Hook up Google Sheets for instant staff alerts\n3. Send automated reminder 2 hours before appointment"
      },
      {
        "id": "finalOffer",
        "label": "Final CTA / Lead Magnet",
        "type": "text",
        "defaultValue": "Link to our free $999 Growth Kit and interactive WhatsApp demo on Codube"
      }
    ],
    "outputLabel": "Complete 7-Tweet Educational Viral Thread",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I outlined an X thread on Codube. We want Codube to engineer our complete tech stack and automated lead capture.",
    "educationalContent": {
      "heading": "The Anatomy of a Viral Twitter / X Hook",
      "paragraphs": [
        "Over 90% of a thread's impressions are determined by Tweet #1. The hook must state a specific timeframe, concrete revenue or metric, and a counter-intuitive insight.",
        "Use clean formatting with bullet points and whitespace. Never drop an external link in Tweet #1; always place links in the final CTA or reply."
      ],
      "tips": [
        "Use the formula: 'Here is how [Actor] achieved [Desirable Result] in [Timeframe] without [Painful Obstacle] (a breakdown):'.",
        "Retweet your top threads every 4-6 weeks to capture new followers.",
        "Engage with every comment in the first 60 minutes after posting."
      ]
    }
  },
  {
    "id": "tiktok-reels-hook-generator",
    "name": "3-Second Viral Video Hooks & Script Outline Generator",
    "shortName": "Video Hook Generator",
    "category": "social",
    "badge": "HIGH RETENTION",
    "tagline": "Generate 5 psychological pattern-interrupt hooks for Shorts, Reels & TikTok",
    "description": "If viewers don't stop scrolling in 3 seconds, your video fails. Generate visual and auditory pattern-interrupt hooks designed for 70%+ retention.",
    "metaTitle": "Free 3-Second Viral Video Hooks Generator | Reels & TikTok | Codube",
    "metaDescription": "Generate high-retention 3-second opening hooks and script outlines for TikTok, YouTube Shorts, and Instagram Reels. 100% free.",
    "keywords": [
      "video hook generator",
      "tiktok hooks ai",
      "reels opening hooks",
      "viral video script outline",
      "high retention shorts hook"
    ],
    "fields": [
      {
        "id": "topic",
        "label": "Video Topic / Pitch",
        "type": "text",
        "required": true,
        "defaultValue": "Why most clinic websites fail to get new patients"
      },
      {
        "id": "targetViewer",
        "label": "Target Viewer",
        "type": "text",
        "defaultValue": "Private Practice Doctors and Dentists"
      },
      {
        "id": "theBigMistake",
        "label": "The Mistake They Make",
        "type": "text",
        "defaultValue": "Using a 5-page slow WordPress site with a contact form that nobody fills out"
      }
    ],
    "outputLabel": "5 Pattern-Interrupt Video Hooks & 60-Second Video Script Outline",
    "outputFormat": "text",
    "whatsappHook": "Hi Abhishek, I generated video hooks on Codube. Can your team build our Next.js landing page to convert our viral traffic?",
    "educationalContent": {
      "heading": "Auditory & Visual Pattern Interrupts",
      "paragraphs": [
        "The human brain decides whether to swipe within 1.2 seconds. A successful hook pairs a provocative verbal statement with an unexpected physical or visual action.",
        "Avoid slow intro greetings ('Hey guys, welcome back'). Dive directly into the conflict with zero warm-up."
      ],
      "tips": [
        "Start with 'Stop doing X' or 'Most [Target] are losing $1,000s because...'.",
        "Show the end result in the first 2 seconds of the video.",
        "Keep total video length under 45 seconds for maximum completion rate."
      ]
    }
  },
  {
    "id": "api-payload-formatter",
    "name": "JSON to TypeScript Interface & Zod Schema Converter",
    "shortName": "JSON to TS & Zod",
    "category": "dev",
    "badge": "DEV FAVORITE",
    "tagline": "Instantly convert raw API payloads into typed TypeScript & Zod schemas",
    "description": "Save hours of manual typing. Paste any JSON response and generate clean, nested TypeScript interfaces and runtime Zod validation schemas.",
    "metaTitle": "Free JSON to TypeScript Interface & Zod Schema Converter | Codube",
    "metaDescription": "Convert raw JSON API payloads into strict TypeScript interfaces and Zod schemas. 1-click copy for Next.js, React, and Node.js developers.",
    "keywords": [
      "json to typescript",
      "json to zod schema",
      "api payload to ts interface",
      "typescript type generator",
      "json formatter to typescript"
    ],
    "fields": [
      {
        "id": "interfaceName",
        "label": "Root Interface Name",
        "type": "text",
        "required": true,
        "defaultValue": "AppointmentPayload"
      },
      {
        "id": "jsonInput",
        "label": "Raw JSON Payload",
        "type": "textarea",
        "required": true,
        "defaultValue": "{\n  \"patientId\": \"pt_9823\",\n  \"fullName\": \"Sarah Jenkins\",\n  \"phoneNumber\": \"+971501234567\",\n  \"serviceRequired\": \"Dental Implants\",\n  \"confirmed\": true,\n  \"bookingFee\": 250,\n  \"preferredDate\": \"2026-12-01T10:30:00Z\",\n  \"notes\": [\"Emergency tooth pain\", \"Prefers morning\"]\n}"
      }
    ],
    "outputLabel": "Generated TypeScript Interfaces & Zod Runtime Schema",
    "outputFormat": "code",
    "codeLanguage": "typescript",
    "whatsappHook": "Hi Abhishek, I used your JSON to TS tool on Codube. We want Codube to architect our full-stack web and mobile application.",
    "educationalContent": {
      "heading": "Why Runtime Validation with Zod is Essential in Next.js",
      "paragraphs": [
        "TypeScript types disappear at runtime. If an external API or webhook sends unexpected nulls, your server crashes silently.",
        "Pairing static TypeScript interfaces with runtime Zod schemas guarantees that every inbound payload is validated before hitting your database."
      ],
      "tips": [
        "Use z.infer<typeof schema> to automatically extract TypeScript types from Zod schemas.",
        "Handle optional fields with .optional() or .nullable() gracefully.",
        "Validate API route inputs in Next.js Server Actions."
      ]
    }
  },
  {
    "id": "regex-generator-explainer",
    "name": "Natural Language to Regex Generator & Plain English Explainer",
    "shortName": "Regex AI Generator",
    "category": "dev",
    "badge": "POPULAR",
    "tagline": "Turn human descriptions into verified Regular Expressions with cheat sheets",
    "description": "Never struggle with regex syntax again. Describe what you want to validate in plain English and generate battle-tested regex with step-by-step breakdown.",
    "metaTitle": "Free AI Regex Generator & Explainer | Regular Expressions AI | Codube",
    "metaDescription": "Generate verified regular expressions from plain English descriptions. Includes explanation breakdown and test strings. 100% free.",
    "keywords": [
      "regex generator",
      "ai regex builder",
      "natural language to regex",
      "regular expression explainer",
      "email regex generator"
    ],
    "fields": [
      {
        "id": "requirement",
        "label": "What do you want to match / validate?",
        "type": "select",
        "options": [
          "International Phone Number (with Country Code)",
          "Strict Email Address Validation",
          "Strong Password (8+ chars, upper, lower, number, symbol)",
          "Slug / URL Path (lowercase, numbers, hyphens)",
          "Custom Description (type below)"
        ],
        "defaultValue": "International Phone Number (with Country Code)"
      },
      {
        "id": "customPrompt",
        "label": "Custom Pattern Description (if selected above)",
        "type": "textarea",
        "defaultValue": "Match an international phone number starting with + followed by 10 to 14 digits, optional spaces or dashes."
      },
      {
        "id": "languageTarget",
        "label": "Programming Language",
        "type": "select",
        "options": [
          "JavaScript / TypeScript",
          "Python (re module)",
          "PHP / PCRE",
          "Golang"
        ],
        "defaultValue": "JavaScript / TypeScript"
      }
    ],
    "outputLabel": "Verified Regular Expression & Step-by-Step Breakdown",
    "outputFormat": "code",
    "codeLanguage": "javascript",
    "whatsappHook": "Hi Abhishek, I generated regex on Codube. Can your team engineer our custom full-stack web portal?",
    "educationalContent": {
      "heading": "Preventing ReDoS (Regular Expression Denial of Service)",
      "paragraphs": [
        "Poorly constructed regular expressions with nested quantifiers can trigger catastrophic backtracking, locking your Node.js or Python event loop.",
        "Always test your regex patterns against malicious or excessively long strings to ensure polynomial time execution."
      ],
      "tips": [
        "Avoid catastrophic backtracking patterns like (a+)+.",
        "Use atomic groups or possessive quantifiers where supported.",
        "Validate format client-side for UX, but always re-validate server-side."
      ]
    }
  },
  {
    "id": "sql-query-builder",
    "name": "Natural English to SQL Query Generator (PostgreSQL / MySQL)",
    "shortName": "Text to SQL AI",
    "category": "dev",
    "badge": "DATABASE TOOL",
    "tagline": "Turn plain English questions into optimized, injection-safe SQL queries",
    "description": "Write complex SQL joins, aggregations, and window functions without headaches. Supports PostgreSQL, MySQL, Supabase, and SQLite.",
    "metaTitle": "Free Text to SQL Query Generator | PostgreSQL & MySQL AI | Codube",
    "metaDescription": "Convert natural English instructions into production-ready SQL queries. Supports JOINs, GROUP BY, indexes, and window functions.",
    "keywords": [
      "text to sql generator",
      "ai sql query builder",
      "natural language to sql",
      "postgres query generator",
      "mysql query builder ai"
    ],
    "fields": [
      {
        "id": "databaseType",
        "label": "Database Engine",
        "type": "select",
        "options": [
          "PostgreSQL / Supabase",
          "MySQL / MariaDB",
          "SQLite / Turso",
          "MS SQL Server"
        ],
        "defaultValue": "PostgreSQL / Supabase"
      },
      {
        "id": "tableSchema",
        "label": "Table Name & Columns Context",
        "type": "textarea",
        "required": true,
        "defaultValue": "Tables:\nappointments(id, patient_id, clinic_id, appointment_date, status, fee_paid)\npatients(id, name, phone, city, created_at)\nclinics(id, name, city)"
      },
      {
        "id": "queryIntent",
        "label": "What do you want to query?",
        "type": "textarea",
        "required": true,
        "defaultValue": "Find the top 5 clinics in Dubai with the highest total appointment revenue in the last 30 days, showing clinic name, total bookings, and total revenue."
      }
    ],
    "outputLabel": "Optimized Production SQL Query & Index Recommendation",
    "outputFormat": "code",
    "codeLanguage": "sql",
    "whatsappHook": "Hi Abhishek, I generated SQL on Codube. We want Codube to architect our database and Next.js backend infrastructure.",
    "educationalContent": {
      "heading": "Database Indexing for High-Performance Next.js Backends",
      "paragraphs": [
        "A slow database query blocks serverless functions. Adding compound indexes on (clinic_id, appointment_date) speeds up reporting queries by 100x.",
        "Always use parameterized queries or ORMs (Prisma, Drizzle) to prevent dangerous SQL injection attacks."
      ],
      "tips": [
        "Use EXPLAIN ANALYZE on PostgreSQL to inspect the query execution plan.",
        "Avoid SELECT *; always specify exact column names to reduce network payload.",
        "Add indexes on columns used frequently in WHERE and JOIN clauses."
      ]
    }
  },
  {
    "id": "markdown-to-html",
    "name": "Markdown to Clean HTML & Tailwind/JSX Converter",
    "shortName": "Markdown to HTML/JSX",
    "category": "dev",
    "badge": "CLEAN CODE",
    "tagline": "Convert raw Markdown text into semantic HTML or Tailwind CSS React JSX",
    "description": "Convert markdown documentation and blog posts into beautiful semantic HTML5 or ready-to-paste Tailwind CSS styled React components.",
    "metaTitle": "Free Markdown to Clean HTML & Tailwind JSX Converter | Codube",
    "metaDescription": "Convert Markdown text into semantic HTML5 or styled Tailwind CSS JSX elements with 1 click. Clean, production-ready code generator.",
    "keywords": [
      "markdown to html converter",
      "markdown to jsx",
      "markdown to tailwind",
      "md to html generator",
      "html code from markdown"
    ],
    "fields": [
      {
        "id": "outputFormat",
        "label": "Target Output Syntax",
        "type": "select",
        "options": [
          "Clean Tailwind CSS React JSX",
          "Standard Semantic HTML5",
          "Clean Plain HTML without classes"
        ],
        "defaultValue": "Clean Tailwind CSS React JSX"
      },
      {
        "id": "markdownInput",
        "label": "Markdown Text to Convert",
        "type": "textarea",
        "required": true,
        "defaultValue": "# 24/7 WhatsApp AI Receptionist\n\nAutomate clinic bookings and capture customer leads in real-time.\n\n### Key Benefits:\n- **Instant Response**: Replies in under 3 seconds\n- **24/7 Coverage**: Never miss an after-hours patient inquiry\n- **Direct Sync**: Automatically logs appointments to Google Sheets and CRM\n\n> Delivered and live in 7 days guaranteed by Codube."
      }
    ],
    "outputLabel": "Generated Semantic HTML / Tailwind JSX Code",
    "outputFormat": "code",
    "codeLanguage": "html",
    "whatsappHook": "Hi Abhishek, I converted Markdown on Codube. Can your team build our custom blog and documentation engine on Next.js 14?",
    "educationalContent": {
      "heading": "Semantic HTML & Accessibility (a11y)",
      "paragraphs": [
        "Using proper semantic tags (<h1>, <p>, <ul>, <blockquote>) rather than nested generic <div> elements allows screen readers and search bots to understand document structure.",
        "In Next.js, rendering clean semantic markup boosts your PageSpeed score and improves your site's SEO readability score."
      ],
      "tips": [
        "Ensure there is only one <h1> tag per page.",
        "Use Tailwind's @tailwindcss/typography (prose class) for automated blog styling.",
        "Always provide alt attributes on converted image tags."
      ]
    }
  },
  {
    "id": "curl-to-fetch-converter",
    "name": "cURL Command to JavaScript fetch() & Axios Code Generator",
    "shortName": "cURL to Fetch AI",
    "category": "dev",
    "badge": "TIME SAVER",
    "tagline": "Convert command-line cURL commands into clean Next.js fetch() & Axios calls",
    "description": "Copying API documentation cURL commands? Paste them here to instantly generate async/await fetch() and Axios code with headers and JSON body.",
    "metaTitle": "Free cURL to JavaScript fetch() & Axios Converter | Codube",
    "metaDescription": "Convert raw cURL terminal commands into async/await JavaScript fetch() or Axios requests for Next.js, Node.js, and React apps.",
    "keywords": [
      "curl to fetch converter",
      "curl to axios",
      "convert curl to javascript",
      "curl to nodejs request",
      "api curl converter"
    ],
    "fields": [
      {
        "id": "library",
        "label": "Output Syntax",
        "type": "select",
        "options": [
          "Native JavaScript fetch() (Async/Await)",
          "Axios (TypeScript)",
          "Next.js Server Action"
        ],
        "defaultValue": "Native JavaScript fetch() (Async/Await)"
      },
      {
        "id": "curlInput",
        "label": "Raw cURL Command",
        "type": "textarea",
        "required": true,
        "defaultValue": "curl -X POST https://api.codube.io/v1/leads \\\n  -H \"Authorization: Bearer sk_live_982347102938\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\": \"Dr. Sarah\", \"phone\": \"+919672660338\", \"service\": \"Growth Kit\"}'"
      }
    ],
    "outputLabel": "Production-Ready JavaScript / TypeScript API Client Code",
    "outputFormat": "code",
    "codeLanguage": "typescript",
    "whatsappHook": "Hi Abhishek, I converted cURL to Fetch on Codube. We want Codube to integrate our third-party APIs and build our custom dashboard.",
    "educationalContent": {
      "heading": "Handling API Authentication Securely in Next.js",
      "paragraphs": [
        "Never expose secret API keys or bearer tokens in client-side code. Always wrap third-party API calls inside Next.js Server Actions or Route Handlers (/api/...).",
        "This keeps your credentials secure on the server while delivering instant responses to the frontend."
      ],
      "tips": [
        "Store secret keys in .env.local without the NEXT_PUBLIC_ prefix.",
        "Implement exponential backoff retry logic for critical webhook endpoints.",
        "Set strict request timeout limits using AbortController."
      ]
    }
  },
  {
    "id": "dark-mode-palette-generator",
    "name": "Cyberpunk Dark Mode Color Palette & Tailwind Config Generator",
    "shortName": "Dark Mode Palette",
    "category": "dev",
    "badge": "DESIGN SYSTEM",
    "tagline": "Generate modern high-converting dark UI hex codes and Tailwind configs",
    "description": "Stop using muddy grays. Generate high-contrast, glowing cyberpunk and glassmorphic dark color palettes with ready-to-paste Tailwind CSS tokens.",
    "metaTitle": "Free Cyberpunk Dark Mode Palette & Tailwind Config Generator | Codube",
    "metaDescription": "Generate high-contrast dark mode color palettes with electric neon accents. Export ready-to-paste Tailwind CSS theme config tokens.",
    "keywords": [
      "dark mode palette generator",
      "cyberpunk color palette",
      "tailwind dark theme config",
      "electric lime palette",
      "high contrast dark ui"
    ],
    "fields": [
      {
        "id": "accentColor",
        "label": "Primary Accent Neon",
        "type": "select",
        "options": [
          "Electric Lime (#B8FF00 - Codube Signature)",
          "Cyber Cyan (#00F0FF)",
          "Neon Violet (#A855F7)",
          "Matrix Emerald (#10B981)",
          "Solar Orange (#FF6B00)"
        ],
        "defaultValue": "Electric Lime (#B8FF00 - Codube Signature)"
      },
      {
        "id": "baseTone",
        "label": "Background Darkness Depth",
        "type": "select",
        "options": [
          "Deep Void Black (#030604 - Pure AMOLED)",
          "Obsidian Charcoal (#0B0F0C)",
          "Titanium Carbon (#121614)"
        ],
        "defaultValue": "Deep Void Black (#030604 - Pure AMOLED)"
      }
    ],
    "outputLabel": "Production Tailwind CSS Config & CSS Variables",
    "outputFormat": "code",
    "codeLanguage": "javascript",
    "whatsappHook": "Hi Abhishek, I generated a dark mode palette on Codube. We love your website's cyber aesthetic\u2014can you design our site with this look?",
    "educationalContent": {
      "heading": "The Science of Premium High-Converting Dark UI",
      "paragraphs": [
        "Modern B2B tech buyers associate sleek, high-contrast dark themes with technical sophistication and speed. True AMOLED blacks paired with an electric neon accent (#B8FF00) create instant visual authority.",
        "Use subtle borders (border-white/[0.08]) and glassmorphism (backdrop-blur-xl) rather than heavy drop shadows to create spatial depth."
      ],
      "tips": [
        "Never use pure white (#FFFFFF) for body text; use zinc-300 or zinc-400 to prevent eye fatigue.",
        "Reserve your neon accent (#B8FF00) strictly for primary call-to-actions and key metric highlights.",
        "Ensure WCAG AA contrast ratio of at least 4.5:1 for text readability."
      ]
    }
  },
  {
    "id": "cron-job-expression-builder",
    "name": "Human Plain Text to Cron Job Expression & Schedule Generator",
    "shortName": "Cron Job Builder",
    "category": "dev",
    "badge": "HANDY TOOL",
    "tagline": "Turn English phrases into 5-field cron syntax with next run timetable",
    "description": "Never guess crontab syntax again. Convert phrases like 'Every day at 9 AM' or 'Every 15 minutes on weekdays' into standard 5-part cron expressions.",
    "metaTitle": "Free Cron Job Expression Generator | Human Text to Crontab | Codube",
    "metaDescription": "Convert natural English text into 5-part cron job expressions. Includes timetable explanation and next execution timestamps.",
    "keywords": [
      "cron job generator",
      "crontab builder",
      "cron expression ai",
      "text to cron schedule",
      "cron schedule builder"
    ],
    "fields": [
      {
        "id": "schedulePreset",
        "label": "Desired Execution Schedule",
        "type": "select",
        "options": [
          "Every day at 9:00 AM",
          "Every Monday morning at 8:00 AM",
          "Every 15 minutes",
          "Every hour at minute 0",
          "First day of every month at midnight",
          "Custom Schedule (type below)"
        ],
        "defaultValue": "Every day at 9:00 AM"
      },
      {
        "id": "customText",
        "label": "Custom Schedule Description (if selected above)",
        "type": "text",
        "defaultValue": "Every weekday from Monday to Friday at 6:30 PM"
      }
    ],
    "outputLabel": "Crontab Expression & Verified Execution Schedule",
    "outputFormat": "code",
    "codeLanguage": "txt",
    "whatsappHook": "Hi Abhishek, I generated cron schedules on Codube. We need your team to build background worker automations and serverless cron jobs.",
    "educationalContent": {
      "heading": "Understanding the Standard 5-Field Cron Syntax",
      "paragraphs": [
        "Standard UNIX cron consists of 5 fields: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-6 where 0 is Sunday).",
        "Modern cloud platforms (AWS EventBridge, Google Cloud Scheduler, Vercel Cron) utilize standard cron expressions to trigger scheduled serverless functions."
      ],
      "tips": [
        "Always account for Server Timezone (UTC vs local IST or GST).",
        "Avoid running heavy batch jobs at the exact top of the hour when server load spikes.",
        "Add idempotency keys so repeated cron executions don't duplicate database entries."
      ]
    }
  },
  {
    "id": "clinic-roi-calculator",
    "name": "Clinic & Doctor WhatsApp Booking & Lifetime Value Calculator",
    "shortName": "Clinic Patient ROI",
    "category": "growth",
    "badge": "HEALTHCARE",
    "tagline": "Calculate patient retention and annual clinic revenue unlocked by AI booking",
    "description": "Designed specifically for dental clinics, dermatologists, and private doctors in Dubai, India, and the US. Calculate incremental patient bookings.",
    "metaTitle": "Clinic & Doctor Patient ROI Calculator | Healthcare AI | Codube",
    "metaDescription": "Calculate the annual revenue lift of deploying a 24/7 WhatsApp AI receptionist for your dental or medical clinic. See exact patient conversion numbers.",
    "keywords": [
      "clinic patient roi calculator",
      "dental clinic whatsapp bot",
      "doctor appointment automation revenue",
      "healthcare patient lifetime value",
      "clinic conversion rate calculator"
    ],
    "fields": [
      {
        "id": "monthlyCalls",
        "label": "Monthly Inquiries / Phone Calls",
        "type": "number",
        "defaultValue": 180
      },
      {
        "id": "avgTreatmentFee",
        "label": "Average Patient Initial Fee ($ or \u20b9)",
        "type": "number",
        "defaultValue": 350
      },
      {
        "id": "repeatVisits",
        "label": "Average Annual Visits Per Patient",
        "type": "number",
        "defaultValue": 3
      },
      {
        "id": "missedCallEstimate",
        "label": "Estimated Missed / Slow Replies %",
        "type": "select",
        "options": [
          "35% (Evenings, Lunch & Sundays)",
          "50% (High Missed Rate)",
          "20% (Low Missed Rate)"
        ],
        "defaultValue": "35% (Evenings, Lunch & Sundays)"
      }
    ],
    "outputLabel": "Clinic Revenue Lift & Patient Lifetime Value (LTV) Forecast",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I calculated our clinic's potential revenue lift on Codube. We want to implement Codube's 24/7 WhatsApp AI Receptionist this week.",
    "educationalContent": {
      "heading": "Why Healthcare Patients Switch Providers Instantly",
      "paragraphs": [
        "When a patient is suffering from acute tooth pain or seeking an urgent pediatric consult, they never leave a voicemail and wait 4 hours. They hang up and call the next clinic on Google Maps.",
        "Deploying an automated WhatsApp booking agent that confirms time slots in 30 seconds instantly captures 30-45% of previously lost patients."
      ],
      "tips": [
        "Include directions and Google Maps pins directly in the automated booking confirmation.",
        "Send pre-appointment preparation instructions (e.g. fasting guidelines) automatically.",
        "Collect post-treatment Google reviews automatically 24 hours after their visit."
      ]
    }
  },
  {
    "id": "real-estate-roi-calculator",
    "name": "Real Estate WhatsApp Lead & Broker Commission ROI Calculator",
    "shortName": "Real Estate ROI",
    "category": "growth",
    "badge": "REAL ESTATE",
    "tagline": "Calculate broker commission gains by qualifying buyer leads in 30 seconds",
    "description": "In luxury real estate, slow replies destroy deals. Calculate the commission impact of auto-qualifying buyer budgets and delivering property brochures on WhatsApp.",
    "metaTitle": "Real Estate WhatsApp Lead & Broker Commission Calculator | Codube",
    "metaDescription": "Calculate how much commission real estate developers and brokers gain by qualifying leads instantly on WhatsApp. Boost property viewing conversions.",
    "keywords": [
      "real estate lead calculator",
      "broker commission roi",
      "real estate whatsapp bot",
      "property lead conversion calculator",
      "developer lead qualification"
    ],
    "fields": [
      {
        "id": "adSpendOrLeads",
        "label": "Monthly Property Inquiries (Meta/Google Ads)",
        "type": "number",
        "defaultValue": 200
      },
      {
        "id": "avgPropertyPrice",
        "label": "Average Property Value ($ or \u20b9)",
        "type": "number",
        "defaultValue": 500000
      },
      {
        "id": "commissionRate",
        "label": "Broker Commission %",
        "type": "number",
        "defaultValue": 2
      },
      {
        "id": "currentQualificationRate",
        "label": "Current Qualified Lead Rate %",
        "type": "select",
        "options": [
          "15% (Typical Manual Follow-up)",
          "25% (Fast Follow-up)",
          "10% (Slow / Overwhelmed Staff)"
        ],
        "defaultValue": "15% (Typical Manual Follow-up)"
      }
    ],
    "outputLabel": "Brokerage Commission & Lead Velocity Forecast",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I ran our brokerage numbers through your Real Estate Lead Calculator. Let's build a dedicated property portal with instant WhatsApp qualification.",
    "educationalContent": {
      "heading": "Speed to Lead in Luxury Real Estate",
      "paragraphs": [
        "High-net-worth property buyers in Dubai, Mumbai, and London research properties late at night. If an inquiry isn't answered with a brochure and floor plan in 60 seconds, they move on.",
        "A WhatsApp AI bot asks budget, preferred bedrooms, and citizenship status, delivering the exact brochure PDF and booking a site tour automatically."
      ],
      "tips": [
        "Never send raw uncompressed PDFs; send a fast-loading Next.js digital brochure link.",
        "Tag leads by readiness (Ready to Buy vs 6 Months out) automatically in your CRM.",
        "Alert senior sales agents on WhatsApp immediately when a high-budget buyer qualifies."
      ]
    }
  },
  {
    "id": "website-cost-estimator",
    "name": "Custom Next.js vs WordPress Agency Cost & 3-Year TCO Calculator",
    "shortName": "Website Cost Estimator",
    "category": "growth",
    "badge": "FINANCIAL",
    "tagline": "Compare plugin subscriptions, hosting fees, and agency maintenance vs Next.js",
    "description": "WordPress looks cheap upfront but costs thousands in plugin renewals, security cleanups, and slow hosting. Calculate your exact 3-year total cost of ownership.",
    "metaTitle": "Custom Next.js vs WordPress Cost Calculator | 3-Year TCO Tool | Codube",
    "metaDescription": "Calculate the true 3-year cost of ownership of WordPress vs custom Next.js websites. Compare hosting, plugin fees, developer maintenance, and security.",
    "keywords": [
      "website cost calculator",
      "next js vs wordpress cost",
      "agency website pricing calculator",
      "total cost of ownership website",
      "custom software pricing estimator"
    ],
    "fields": [
      {
        "id": "siteScale",
        "label": "Project Scope",
        "type": "select",
        "options": [
          "5-Page Business / Clinic Website",
          "10-20 Page Lead Generation Portal",
          "Custom Web / Mobile Application (SaaS)",
          "High-Traffic E-Commerce Store"
        ],
        "defaultValue": "5-Page Business / Clinic Website"
      },
      {
        "id": "currentPlugins",
        "label": "Annual Paid Plugin & Tool Costs ($ or \u20b9)",
        "type": "number",
        "defaultValue": 600
      },
      {
        "id": "hostingMonthly",
        "label": "Monthly Hosting / Server Cost ($ or \u20b9)",
        "type": "number",
        "defaultValue": 50
      },
      {
        "id": "devRetainer",
        "label": "Monthly Developer Retainer / Maintenance ($ or \u20b9)",
        "type": "number",
        "defaultValue": 200
      }
    ],
    "outputLabel": "3-Year Total Cost of Ownership (TCO) & Savings Breakdown",
    "outputFormat": "score",
    "whatsappHook": "Hi Abhishek, I compared our website costs on Codube. We want to switch from our expensive WordPress setup to your $999 Complete Growth Kit.",
    "educationalContent": {
      "heading": "The Hidden Tax of Legacy WordPress Sites",
      "paragraphs": [
        "Traditional CMS sites require constant plugin updates (Elementor, WP Rocket, Form plugins) that frequently break after core updates, requiring expensive developer fixes.",
        "A custom Next.js 14 static/SSR site deployed on Vercel or Cloudflare requires zero plugin renewals, costs $0 to $20/month in hosting, and is virtually unhackable."
      ],
      "tips": [
        "Ask your agency who owns the source code and IP before signing any contract.",
        "Factor in security vulnerabilities\u2014WordPress accounts for 90% of all hacked CMS sites.",
        "Invest upfront in speed and clean code to eliminate ongoing monthly technical debt."
      ]
    }
  },
  {
    "id": "b2b-invoice-generator",
    "name": "Free Professional B2B Invoice & Estimate Text/Markdown Generator",
    "shortName": "B2B Invoice Builder",
    "category": "growth",
    "badge": "BUSINESS UTILITY",
    "tagline": "Generate clean, professional B2B invoices and proposals in seconds",
    "description": "Need to send a fast, professional invoice or estimate to a corporate client? Generate itemized invoices with tax calculations, payment terms, and bank transfer notes.",
    "metaTitle": "Free B2B Invoice & Estimate Generator | Business Utility | Codube",
    "metaDescription": "Generate professional B2B invoices and project estimates with tax calculation and payment details. 100% free with 1-click copy and download.",
    "keywords": [
      "b2b invoice generator",
      "freelance invoice builder",
      "project estimate generator",
      "markdown invoice template",
      "simple invoice generator free"
    ],
    "fields": [
      {
        "id": "invoiceNumber",
        "label": "Invoice Number",
        "type": "text",
        "defaultValue": "INV-2026-0042"
      },
      {
        "id": "sellerName",
        "label": "Your Business Legal Name",
        "type": "text",
        "required": true,
        "defaultValue": "Codube Technologies"
      },
      {
        "id": "clientName",
        "label": "Client Legal / Company Name",
        "type": "text",
        "required": true,
        "defaultValue": "Apex Healthcare Group"
      },
      {
        "id": "item1Desc",
        "label": "Line Item 1 Description",
        "type": "text",
        "defaultValue": "Complete Business Growth Kit (Next.js 14 Website + 24/7 WhatsApp AI Receptionist)"
      },
      {
        "id": "item1Amount",
        "label": "Line Item 1 Price ($ or \u20b9)",
        "type": "number",
        "defaultValue": 999
      },
      {
        "id": "taxPercent",
        "label": "Tax Rate % (GST / VAT, 0 if none)",
        "type": "number",
        "defaultValue": 0
      },
      {
        "id": "paymentTerms",
        "label": "Payment Terms & Bank / UPI Details",
        "type": "textarea",
        "defaultValue": "50% upfront milestone, 50% upon final production deployment. Transfer via Wire/ACH or UPI."
      }
    ],
    "outputLabel": "Itemized Professional B2B Invoice (Formatted Document)",
    "outputFormat": "code",
    "codeLanguage": "markdown",
    "whatsappHook": "Hi Abhishek, I generated an invoice on Codube. We're ready to proceed with the $999 Growth Kit for our business.",
    "educationalContent": {
      "heading": "B2B Invoicing Best Practices for Fast Payment",
      "paragraphs": [
        "Unclear invoices with missing bank account numbers or vague line items delay corporate payments by an average of 18 days.",
        "Always state the exact milestone scope, due date (e.g. 'Due upon receipt' or 'Net 15'), and provide multiple payment options (Wire transfer, UPI, Stripe)."
      ],
      "tips": [
        "Include reference numbers on both the proposal and final invoice.",
        "Send invoices in both PDF and plain text formats for corporate accounting departments.",
        "Follow up politely on WhatsApp 24 hours before payment is due."
      ]
    }
  }
];

// Helper to get tool by slug
export function getToolBySlug(slug: string): FreeTool | undefined {
  return FREE_TOOLS.find((t) => t.id === slug);
}

export const FREE_AI_TOOLS = FREE_TOOLS;
