"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Layers,
  Sparkles,
  MessageCircle,
  Cloud,
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface ServicesSectionProps {
  content?: any;
  showAll?: boolean;
}

export default function ServicesSection({
  content,
  showAll = false,
}: ServicesSectionProps) {
  const servicesList = [
    {
      id: "web-dev",
      title: "Conversion-Engineered Web Platforms",
      icon: Monitor,
      category: "NEXT.JS 14 & TYPESCRIPT",
      tagline: "Sub-second, mobile-first websites designed to turn high-intent visitors into booked clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: [
        "0.2s LCP Sub-Second Core Web Vitals",
        "Conversion Funnels & Sticky WhatsApp CTAs",
        "SEO Meta Tags & High-Velocity Architecture",
        "Turnkey 7-Day Guaranteed Launch",
      ],
      href: "/services/web-development",
    },
    {
      id: "whatsapp-ai",
      title: "24/7 WhatsApp AI Receptionists",
      icon: MessageCircle,
      category: "META CLOUD API AUTOMATION",
      tagline: "Automated booking and inquiry bots that reply in 2 seconds and sync leads directly to CRM.",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
      features: [
        "Official Meta WhatsApp Cloud API Setup",
        "Natural Language Slot Booking in 30 Seconds",
        "Instant Google Sheets & Webhook Auto-Sync",
        "Zero Staff Dependency or Nighttime Drops",
      ],
      href: "/services/business-automation",
    },
    {
      id: "clinic-systems",
      title: "Healthcare & Clinic Web Systems",
      icon: Activity,
      category: "MISSION-CRITICAL HEALTHCARE",
      tagline: "Specialized platforms for dental, diagnostic centers, and hospital chains like ScanTaker.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      features: [
        "Online Token Generation & Doctor Scheduling",
        "WhatsApp Diagnostic Report Delivery",
        "Multi-Branch Admin & Staff Roles (RBAC)",
        "Proven on 50,000+ Enrolled Doctors",
      ],
      href: "/services/custom-software",
    },
    {
      id: "custom-software",
      title: "Custom Full-Stack ERP & CRM Software",
      icon: Layers,
      category: "ENTERPRISE WORKFLOWS",
      tagline: "Tailor-made internal business operating systems that eliminate manual spreadsheets.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      features: [
        "Encrypted Cloud Security (AES-256)",
        "Automated Invoicing & Stripe / UPI Gateways",
        "High-Concurrency PostgreSQL & Redis Caching",
        "100% Full IP & GitHub Repository Ownership",
      ],
      href: "/services/custom-software",
    },
    {
      id: "saas-development",
      title: "Multi-Tenant SaaS Platform Engineering",
      icon: Cloud,
      category: "SCALABLE CLOUD ARCHITECTURE",
      tagline: "Product-ready SaaS platforms built to handle millions of requests with edge deployment.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      features: [
        "Isolated Tenant Security & Cloud Storage",
        "Stripe Recurring Subscriptions & Metering",
        "Global Edge CDN on AWS & Cloudflare",
        "Self-Service Customer Analytics",
      ],
      href: "/services/saas-development",
    },
    {
      id: "ai-development",
      title: "Autonomous AI Agents & Enterprise RAG",
      icon: Sparkles,
      category: "GEMINI & LLM PIPELINES",
      tagline: "Domain-specific AI copilots and document OCR extraction pipelines on your proprietary data.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      features: [
        "Custom Vector Knowledge Embeddings",
        "Automated Document OCR & Entity Extraction",
        "Sub-500ms Gemini Model Responses",
        "Bulletproof Privacy & Data Governance",
      ],
      href: "/services/ai-development",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
                OUR CORE CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.14]">
              High-Converting Software &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Autonomous AI Systems.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600">
              From lead-generating websites to 24/7 WhatsApp AI receptionists and custom enterprise SaaS — we build, launch, and scale digital products for your business.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group shrink-0"
          >
            <span>View All Service Specifications</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* CLEAN 6-CARD SERVICES GRID WITH UNSPLASH IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-[0_4px_25px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Service Card Image Header */}
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 left-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs">
                        {srv.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.tagline}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 transition-all"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
