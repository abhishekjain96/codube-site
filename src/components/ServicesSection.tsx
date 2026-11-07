"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Layers,
  Sparkles,
  MessageCircle,
  Cloud,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import ServiceVisuals from "./ServiceVisuals";

interface ServicesSectionProps {
  content?: any;
  showAll?: boolean;
}

export default function ServicesSection({
  content,
  showAll = false,
}: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>("web-dev");

  const servicesData = content?.services || {
    badge: "OUR CAPABILITIES",
    heading: "End-to-End Technology Solutions",
    headingHighlight: "Technology",
    subheading:
      "From high-converting web applications to complex custom software and AI automation — we build, integrate and scale digital products for your business.",
  };

  const servicesList = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: Monitor,
      tagline: "High-performing, modern websites that convert visitors into buyers.",
      badge: "100/100 Lighthouse",
      features: [
        "Next.js 14 & React Architecture",
        "Sub-Second 0.2s LCP Load Speed",
        "Mobile-First Responsive Layouts",
        "Dynamic Framer Motion Interactions",
      ],
    },
    {
      id: "custom-software",
      title: "Custom Software",
      icon: Layers,
      tagline: "Enterprise ERP, CRM, and operational systems tailored to your workflows.",
      badge: "Zero Legacy Bloat",
      features: [
        "Tailored Internal Workflows",
        "Role-Based Dashboards (RBAC)",
        "High-Concurrency PostgreSQL & Redis",
        "Encrypted Cloud Security (AES-256)",
      ],
    },
    {
      id: "ai-development",
      title: "AI Development",
      icon: Sparkles,
      tagline: "Autonomous AI agents, smart assistants, and intelligent RAG workflows.",
      badge: "Gemini & LLM Powered",
      features: [
        "Custom Enterprise RAG on Company Data",
        "Autonomous Multi-Agent Pipelines",
        "Intelligent Document OCR & Extraction",
        "Sub-500ms Vector Embeddings",
      ],
    },
    {
      id: "business-automation",
      title: "Business Automation",
      icon: MessageCircle,
      tagline: "Official WhatsApp Business Cloud API & automated CRM pipelines.",
      badge: "Meta Verified",
      features: [
        "24/7 WhatsApp Booking & Alerts",
        "Instant Lead Sync to Google Sheets & CRM",
        "85% Drop in Manual Overhead",
        "Automated Payment & Invoice Links",
      ],
    },
    {
      id: "saas-development",
      title: "SaaS Development",
      icon: Cloud,
      tagline: "Product-ready, multi-tenant SaaS platforms built to scale to millions.",
      badge: "Full Stack Cloud",
      features: [
        "Isolated Multi-Tenant Databases",
        "Stripe & Razorpay Recurring Billing",
        "Self-Service Customer Analytics",
        "Global Edge CDN on AWS & Cloudflare",
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030604]" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(112,255,0,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
                {servicesData.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              End-to-End{" "}
              <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
                Technology Solutions.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400">
              {servicesData.subheading}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B8FF00] hover:text-[#ccff00] transition-colors group shrink-0"
          >
            <span>Explore Full Architecture &amp; Deliverables</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* INTERACTIVE SPLIT SHOWCASE: Left Selector Cards + Right Framed Mockup Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {servicesList.map((srv) => {
              const Icon = srv.icon;
              const isSelected = activeServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveServiceId(srv.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 text-left ${
                    isSelected
                      ? "bg-[#080D0A] border-[#B8FF00] shadow-[0_0_25px_rgba(184,255,0,0.2)] -translate-x-0 sm:translate-x-2"
                      : "bg-[#080D0A]/60 border-white/[0.08] hover:border-white/20 hover:bg-[#080D0A]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#B8FF00] text-black shadow-[0_0_15px_#B8FF00]"
                            : "bg-white/5 border border-white/10 text-zinc-300"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {srv.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#B8FF00]">
                          {srv.badge}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-all ${
                        isSelected
                          ? "text-[#B8FF00] translate-x-1"
                          : "text-zinc-600 opacity-50"
                      }`}
                    />
                  </div>

                  <p className="mt-3 text-xs text-zinc-400 line-clamp-2">
                    {srv.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Framed Interactive Screen Mockup */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="rounded-3xl p-3 sm:p-5 bg-[#080D0A] border border-[#B8FF00]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Device Frame Top Pills */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] text-xs font-mono">
                <span className="text-[#B8FF00] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-ping" />
                  LIVE ARCHITECTURE PREVIEW
                </span>
                <span className="text-zinc-500 text-[11px]">CODUBE FRAMEWORK v2.4</span>
              </div>

              {/* Dynamic Service Visual Inside Frame */}
              <div className="pt-3">
                <ServiceVisuals serviceId={activeServiceId} />
              </div>

              {/* Active Service Deliverables Row Below Visual */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 justify-between items-center">
                <div className="flex flex-wrap gap-1.5">
                  {servicesList
                    .find((s) => s.id === activeServiceId)
                    ?.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] text-zinc-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#B8FF00]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(
                    servicesList.find((s) => s.id === activeServiceId)?.title || ""
                  )}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] transition-all"
                >
                  <span>Build This</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
