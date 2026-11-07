import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import TechStackGrid from "@/components/TechStackGrid";
import CtaBanner from "@/components/CtaBanner";
import ServiceVisuals from "@/components/ServiceVisuals";
import { getSiteContent } from "@/lib/storage";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End-to-End Technology Solutions — CODUBE Services",
  description:
    "From high-performing web applications to complex custom software and AI automation — explore CODUBE capabilities, deliverables, and production frameworks.",
};

const serviceDetails = [
  {
    id: "web-dev",
    visualId: "web-dev",
    title: "Web Application Engineering",
    tagline: "High-performing, modern web apps that convert visitors into buyers.",
    deliverables: [
      "Custom Next.js 14 App Router & React with 100/100 Lighthouse performance",
      "Full Mobile-First Responsive layouts with sub-second 0.2s LCP load times",
      "Dynamic Framer Motion micro-interactions and smooth scroll animations",
      "Built-in programmatic SEO architecture, OpenGraph meta, schema markup & fast CDN delivery",
    ],
  },
  {
    id: "custom-software",
    visualId: "custom-software",
    title: "Custom Enterprise Software & ERP",
    tagline: "Business software, CRM, ERP and operational dashboards tailored to your exact workflows.",
    deliverables: [
      "Tailored internal workflows and operational automation dashboards",
      "Multi-role user authentication with granular permission controls (RBAC)",
      "High-security database design with audit logging and AES-256 encryption",
      "Seamless REST & GraphQL API integrations with legacy software",
    ],
  },
  {
    id: "ai-dev",
    visualId: "ai-development",
    title: "AI Development & Autonomous Agents",
    tagline: "Custom RAG, autonomous agents, and intelligent workflow automation.",
    deliverables: [
      "Custom Retrieval Augmented Generation (RAG) on proprietary company data",
      "Autonomous conversational AI agents powered by Gemini & GPT models",
      "Automated document processing, invoice OCR, and instant data extraction",
      "Sub-500ms vector database embedding and automated latency monitoring",
    ],
  },
  {
    id: "business-automation",
    visualId: "business-automation",
    title: "Business Automation & WhatsApp Cloud API",
    tagline: "Official WhatsApp Business Cloud API & automated CRM pipelines.",
    deliverables: [
      "Official Meta WhatsApp Business Cloud API integration for 24/7 client booking",
      "Instant push notifications to your sales team whenever a prospect inquires",
      "Automated appointment reminders reducing customer no-shows by 85%",
      "Real-time Google Sheets, Notion & CRM syncing without manual input",
    ],
  },
  {
    id: "saas-dev",
    visualId: "saas-development",
    title: "SaaS Product Development",
    tagline: "From idea to launch — scalable, secure and product-ready multi-tenant SaaS platforms.",
    deliverables: [
      "Multi-tenant database isolation ensuring customer data privacy and zero leak",
      "Stripe, Razorpay, or LemonSqueezy subscription billing with multi-currency support",
      "Self-service customer portal with usage analytics & automated invoice generation",
      "Zero-downtime deployment pipelines on AWS, Vercel, and Cloudflare Edge",
    ],
  },
];

export default function ServicesPage() {
  const content = getSiteContent();

  return (
    <div className="pt-20 bg-[#030604] min-h-screen">
      {/* 1. Main Services Showcase with Interactive Visual Console */}
      <ServicesSection content={content} showAll={true} />

      {/* 2. Deep Dive Into Every Service with Side-by-Side Visual Mockup */}
      <section className="py-20 bg-[#080D0A]/80 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8FF00]">
              DETAILED ARCHITECTURAL CAPABILITIES
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Enterprise Reliability
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Every deliverable is crafted with production rigor, type safety, and clean scalable architecture.
            </p>
          </div>

          <div className="space-y-16">
            {serviceDetails.map((serv, index) => (
              <div
                key={serv.id}
                id={serv.id}
                className="rounded-3xl p-6 sm:p-10 bg-[#030604] border border-white/[0.08] hover:border-[#B8FF00]/40 transition-all shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Deliverables Details */}
                <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-xs font-mono font-bold text-[#B8FF00]">
                    CAPABILITY 0{index + 1}
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {serv.title}
                  </h4>

                  <p className="text-sm text-zinc-300 font-medium">
                    {serv.tagline}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {serv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(serv.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
                    >
                      <span>Request Proposal for {serv.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Framed High-Tech Mockup Screen */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <ServiceVisuals serviceId={serv.visualId} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Modern Tools & High-Impact Stats */}
      <TechStackGrid content={content} />

      {/* 4. Bottom CTA */}
      <CtaBanner content={content} />
    </div>
  );
}
