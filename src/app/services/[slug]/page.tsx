import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  getSeoPageData,
  getAllSeoSlugs,
  SEO_SERVICES,
  SEO_LOCATIONS,
  buildSeoSlug,
} from "@/data/seoData";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Award,
  Bot,
  MapPin,
  HelpCircle,
  MessageCircle,
  Code2,
  ChevronRight,
  Star,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static parameters for key high-traffic slugs while serving all 560+ dynamically
export async function generateStaticParams() {
  const topServices = ["website-development-company", "ai-chatbot-development-company", "whatsapp-ai-agent-development", "clinic-website-and-appointment-system"];
  const topLocations = ["jaipur", "delhi-ncr", "bangalore", "mumbai", "dubai", "new-york", "tonk-road-jaipur", "vaishali-nagar-jaipur"];
  
  const params: { slug: string }[] = [];
  for (const s of topServices) {
    for (const l of topLocations) {
      params.push({ slug: buildSeoSlug(s, l) });
    }
  }
  return params;
}

// Dynamic SEO Metadata Generation for Google & Social Media
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getSeoPageData(params.slug);
  if (!data) return {};

  const canonicalUrl = `https://codube.com/services/${data.slug}`;

  return {
    title: data.title,
    description: data.metaDescription,
    keywords: data.targetKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: canonicalUrl,
      siteName: "Codube",
      images: [
        {
          url: "/images/hero-laptop.png",
          width: 1200,
          height: 630,
          alt: `${data.service.name} in ${data.location.city} - Codube`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
      images: ["/images/hero-laptop.png"],
    },
  };
}

export default function SeoServiceLocationPage({ params }: PageProps) {
  const data = getSeoPageData(params.slug);

  if (!data) {
    notFound();
  }

  const { service, location, faqs } = data;
  const isIndia = location.country === "India";
  const displayPrice = isIndia
    ? service.startingPrice.includes("₹")
      ? service.startingPrice
      : "₹19,999 One-Time"
    : service.startingPrice.split("(")[0].trim();

  const whatsappMessage = encodeURIComponent(
    `Hi Abhishek, I found Codube while searching for ${service.name} in ${location.city}. I want to discuss my project requirements and get a demo.`
  );
  const whatsappUrl = `https://wa.me/919672660338?text=${whatsappMessage}`;

  // Structured Data (JSON-LD Schemas)
  const jsonLdSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://codube.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Master Directory",
            "item": "https://codube.com/directory",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Services",
            "item": "https://codube.com/services",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${service.shortName} in ${location.city}`,
            "item": `https://codube.com/services/${data.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "name": `${service.name} in ${location.city}`,
        "serviceType": service.name,
        "description": data.metaDescription,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Codube",
          "image": "https://codube.com/icon.png",
          "telephone": "+919672660338",
          "priceRange": "$$",
          "founder": {
            "@type": "Person",
            "name": "Abhishek Jain",
            "jobTitle": "Founder & Lead Software Architect",
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location.city,
            "addressCountry": location.country,
          },
        },
        "areaServed": {
          "@type": "City",
          "name": location.city,
        },
        "offers": {
          "@type": "Offer",
          "price": displayPrice,
          "priceCurrency": location.currency,
          "availability": "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  // Nearby / Related services for internal SEO spiderweb linking (8 services + 10 nearby locations)
  const relatedServicesInSameCity = SEO_SERVICES.filter((s) => s.id !== service.id).slice(0, 8);
  const nearbyLocationsInSameRegion = SEO_LOCATIONS.filter(
    (l) => l.region === location.region && l.id !== location.id
  ).slice(0, 10);

  return (
    <>
      {/* Inject Structured Data JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      <article className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 pt-28 pb-20">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-slate-500">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <li>
                <Link href="/directory" className="hover:text-emerald-600 transition-colors">
                  Directory
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <li>
                <Link href="/services" className="hover:text-emerald-600 transition-colors">
                  Services
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <li className="text-emerald-700 font-semibold truncate max-w-[280px] sm:max-w-none">
                {service.shortName} in {location.city}
              </li>
            </ol>
          </nav>

          {/* HERO SECTION */}
          <header className="space-y-6 text-left max-w-4xl pb-12 border-b border-slate-200">
            {/* Geo Target Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {location.city}, {location.country} • {location.localHubName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {data.h1}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              {data.subheadline}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs text-xs sm:text-sm text-slate-700 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Local Business Partnership Guarantee:</span>
                <span>{data.localTrustNote}</span>
              </div>
            </div>

            {/* Quick Proof Metrics */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600">
                  Turnaround: <strong className="text-slate-900">{service.deliveryDays}</strong>
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600">
                  Lead Engineer: <strong className="text-slate-900">1st Rank Hackathon Winner</strong>
                </span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600">
                  Pricing: <strong className="text-slate-900">{displayPrice}</strong>
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Abhishek (Instant Reply)</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all"
              >
                <span>Book 15-Min Strategy Call</span>
              </Link>
            </div>
          </header>

          {/* SECTION: WHY BUSINESSES IN THIS LOCATION NEED THIS */}
          <section className="py-14 border-b border-slate-200 text-left">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>MARKET OPPORTUNITY IN {location.city.toUpperCase()}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Why Standard Agency Websites Fail in {location.city}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {location.businessContext} In a market moving at lightning speed, traditional agencies take 2 to 3 months, deliver slow WordPress templates that score 40 on Google PageSpeed, and trap you in perpetual monthly retainer invoices.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Codube is built differently:</strong> We engineer modern Next.js 14 websites with built-in 24/7 WhatsApp AI receptionist bots that capture and qualify leads in real-time. Delivered in <strong>{service.deliveryDays}</strong> with <strong>100% full source code ownership</strong>.
              </p>
            </div>
          </section>

          {/* SECTION: FEATURES & ARCHITECTURAL ADVANTAGES */}
          <section className="py-14 border-b border-slate-200 text-left">
            <div className="space-y-3 mb-10">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                What We Engineer For Your Business in {location.city}
              </h2>
              <p className="text-sm text-slate-600">
                Every component is built for speed, conversion rate optimization (CRO), and frictionless customer interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500/40 hover:shadow-sm transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{feat}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Optimized for Google Core Web Vitals and zero bounce rates across mobile and desktop devices.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: DELIVERABLES & TRANSPARENT PRICING CARD */}
          <section className="py-14 border-b border-slate-200 text-left">
            <div className="rounded-3xl p-6 sm:p-10 bg-white border-2 border-emerald-500 shadow-lg ring-4 ring-emerald-50">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                    TRANSPARENT PRODUCTIZED PACKAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {service.name} Turnkey Kit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Zero hidden agency markups • Guaranteed {service.deliveryDays} turnaround
                  </p>
                </div>

                <div className="text-left lg:text-right">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    Starting Price
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    {displayPrice}
                  </div>
                </div>
              </div>

              {/* Deliverable Checkpoints */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                  What is included in this package:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Full GitHub Source Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Post-Launch Handover &amp; Staff Training</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Started for {location.city} →</span>
                </a>
                <span className="text-xs text-slate-500">
                  ⚡ Direct WhatsApp reply in under 2 minutes
                </span>
              </div>
            </div>
          </section>

          {/* SECTION: LOCALIZED FAQ ACCORDION */}
          <section className="py-14 border-b border-slate-200 text-left">
            <div className="space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Questions About {service.shortName} in {location.city}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-mono text-sm mt-0.5 font-bold">Q{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: INTERNAL SEO SPIDERWEB MESH (RELATED SERVICES & NEARBY CITIES) */}
          <section className="py-14 text-left space-y-8 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 inline-block">
                  INTERNAL SPIDERWEB MESH • {location.city.toUpperCase()}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                  Related Technology &amp; AI Solutions in {location.city}
                </h2>
              </div>
              <Link
                href="/directory"
                className="text-xs font-mono text-emerald-600 hover:underline flex items-center gap-1 shrink-0 font-bold"
              >
                <span>Master Directory Index</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 8 Related Services in Same City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {relatedServicesInSameCity.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${buildSeoSlug(s.id, location.id)}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    {location.city} • {s.category.toUpperCase()}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                    {s.name} in {location.city}
                  </h3>
                  <div className="mt-2 text-[10px] font-mono text-slate-500 group-hover:text-emerald-600 font-bold">
                    View Details →
                  </div>
                </Link>
              ))}
            </div>

            {/* 10 Nearby & Regional Locations for Same Service */}
            <div className="pt-4 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest block">
                Nearby Cities &amp; Tech Hubs for {service.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {nearbyLocationsInSameRegion.map((c) => (
                  <Link
                    key={c.id}
                    href={`/services/${buildSeoSlug(service.id, c.id)}`}
                    className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-emerald-600 hover:text-white border border-slate-200 text-xs text-slate-700 transition-all font-semibold flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-emerald-600 group-hover:text-white" />
                    <span>{service.shortName} in {c.city}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Master Directory Anchor Hub */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-600">
                Looking for other global markets, medical hubs, or developer utilities?
              </span>
              <Link
                href="/directory"
                className="text-emerald-700 font-mono font-bold hover:underline"
              >
                Browse All 1,840+ Locations in Master Directory →
              </Link>
            </div>
          </section>

          {/* FINAL BOTTOM CONVERSION BANNER */}
          <div className="mt-8 rounded-3xl p-8 sm:p-12 bg-slate-900 text-white border border-slate-800 text-center space-y-5 relative overflow-hidden shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Upgrade Your Business in {location.city}?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Skip the agency delays. Get a custom, conversion-engineered website and 24/7 WhatsApp AI receptionist live in 7 days.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start Your Project for {location.city} →</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
