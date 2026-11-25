"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Bot,
  Rocket,
  Layers,
  ShieldCheck,
  Zap,
  MessageCircle,
} from "lucide-react";

export default function PricingSection() {
  const packages = [
    {
      id: "ai-agent",
      name: "AI WhatsApp Automation Agent",
      price: "$499",
      billing: "One-Time Setup",
      subBilling: "Optional: +$99/mo AI & Cloud Maintenance",
      badge: "FOR EXISTING WEBSITES",
      description:
        "Best for clinics, dental practices, real estate & businesses that already have a website but are losing leads to slow replies.",
      popular: false,
      icon: Bot,
      features: [
        "Official WhatsApp Cloud API Setup",
        "24/7 Custom AI Sales / Booking Bot",
        "Auto Lead Sync to Google Sheets / CRM",
        "Automated Follow-up Reminders",
        "Custom FAQ & Service Knowledge Training",
        "3-Day Guaranteed Delivery",
        "Optional: +$99/mo AI & Cloud Maintenance",
      ],
      ctaText: "Get AI Agent ($499)",
      whatsappText:
        "Hi Abhishek, I want the AI WhatsApp Automation Agent ($499 One-Time Setup) for my business.",
    },
    {
      id: "growth-kit",
      name: "Complete Business Growth Kit",
      price: "$999",
      billing: "Complete Launch",
      subBilling: "Turnkey 7-Day Guaranteed Delivery",
      badge: "MOST POPULAR • 10x ROI",
      description:
        "Best for Clinics, Doctors, Real Estate & Local Businesses wanting an automated high-speed website + 24/7 AI booking system.",
      popular: true,
      icon: Rocket,
      features: [
        "5-Page Ultra-Fast Next.js Website",
        "24/7 WhatsApp AI Receptionist Included",
        "Google Maps Local SEO Optimization",
        "Direct WhatsApp Lead Capture Funnels",
        "Free Admin Dashboard & Easy Image Uploads",
        "7-Day Guaranteed Delivery & 100% Ownership",
      ],
      ctaText: "Launch My Business ($999)",
      whatsappText:
        "Hi Abhishek, I want to launch with the Complete Business Growth Kit ($999 Complete Launch) including Website + WhatsApp AI Bot!",
    },
    {
      id: "enterprise-saas",
      name: "Custom SaaS / Multi-Branch Clinic System",
      pricePrefix: "Starting at",
      price: "$2,499",
      billing: "Custom Milestone-Based",
      subBilling: "For Multi-Branch Chains & Scaled Ops",
      badge: "ENTERPRISE & MULTI-BRANCH",
      description:
        "Best for Multi-Branch Clinic Chains (like Dr. Joy), Healthcare Networks & Funded Startups requiring enterprise-grade architecture.",
      popular: false,
      icon: Layers,
      features: [
        "Full-Stack Web / Mobile Platform (like ScanTaker)",
        "Multi-Branch Patient & Doctor Management Portals",
        "Custom Role-Based Admin & Staff Permissions",
        "Stripe / International Payment Integrations",
        "AWS / Edge Scalable Cloud Infrastructure",
        "Dedicated 1st Rank Architect Support & Full NDA",
      ],
      ctaText: "Book Strategy Call",
      isContactPage: true,
      whatsappText:
        "Hi Abhishek, I would like to book a Strategy Call for a Custom SaaS / Multi-Branch Clinic System (Starting at $2,499).",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" id="pricing">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              TRANSPARENT PRODUCTIZED PRICING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Zero Hidden Fees.{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              100% Ownership.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Business owners shouldn&apos;t have to guess pricing or wait weeks for quotes. Pick a turnkey growth system engineered to pay for itself in your first week.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const waUrl = `https://wa.me/919672660338?text=${encodeURIComponent(pkg.whatsappText)}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white border-2 border-emerald-500 shadow-[0_15px_40px_rgba(16,185,129,0.14)] lg:-translate-y-3 ring-4 ring-emerald-50"
                    : "bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:shadow-lg"
                }`}
              >
                {/* Floating Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] font-black tracking-wider uppercase shadow-md whitespace-nowrap flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between pt-2">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border ${
                        pkg.popular
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      {pkg.badge}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        pkg.popular
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{pkg.name}</h3>
                    <div className="mt-3">
                      {"pricePrefix" in pkg && pkg.pricePrefix && (
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                          {pkg.pricePrefix}
                        </div>
                      )}
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-semibold">
                          / {pkg.billing}
                        </span>
                      </div>
                      {"subBilling" in pkg && pkg.subBilling && (
                        <div className="mt-1 text-[11px] font-mono text-slate-500">
                          {pkg.subBilling}
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-left">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-emerald-600" : "text-emerald-600"
                          }`}
                        />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-8">
                  {pkg.isContactPage ? (
                    <Link
                      href="/contact"
                      className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all group ${
                        pkg.popular
                          ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_18px_rgba(16,185,129,0.35)]"
                          : "bg-slate-900 text-white hover:bg-emerald-600 shadow-sm"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{pkg.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Risk-Reversal Guarantee Banner */}
        <div className="mt-12 rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Source Code Ownership Transferred</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>On-Time 7-Day Launch Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Mandatory Monthly Agency Retainers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
