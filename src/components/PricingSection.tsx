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
      price: "₹14,999",
      billing: "One-Time Setup",
      badge: "FOR EXISTING WEBSITES",
      description:
        "Best for clinics, real estate agencies, and businesses that already have a website but are losing leads to slow replies.",
      popular: false,
      icon: Bot,
      features: [
        "Official WhatsApp Cloud API Setup",
        "24/7 Custom AI Sales / Booking Bot",
        "Auto Lead Sync to Google Sheets / CRM",
        "Automated Follow-up Reminders",
        "Custom FAQ & Pricing Knowledge Training",
        "3-Day Guaranteed Delivery",
      ],
      ctaText: "Get AI Agent",
      whatsappText:
        "Hi Abhishek, I want the AI WhatsApp Automation Agent (₹14,999 One-Time) for my business.",
    },
    {
      id: "growth-kit",
      name: "Complete Business Growth Kit",
      price: "₹19,999",
      billing: "One-Time Complete Build",
      badge: "MOST POPULAR • 10x ROI",
      description:
        "Best for Clinics, Doctors, Real Estate & Local Businesses wanting an automated website + AI booking system.",
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
      ctaText: "Launch My Business",
      whatsappText:
        "Hi Abhishek, I want to launch with the Complete Business Growth Kit (₹19,999 One-Time) including Website + WhatsApp AI Bot!",
    },
    {
      id: "enterprise-saas",
      name: "Custom SaaS / Enterprise Platform",
      price: "Custom Quote",
      billing: "Milestone-Based",
      badge: "FOR SCALE & STARTUPS",
      description:
        "Best for Funded Startups, Hospital Chains & Multi-Location Brands requiring custom full-stack architecture.",
      popular: false,
      icon: Layers,
      features: [
        "Full-Stack Web / Mobile App (like ScanTaker)",
        "Custom Multi-Role Admin & Vendor Portals",
        "Razorpay / Stripe Payment & API Integrations",
        "AWS / Edge Scalable Cloud Infrastructure",
        "Dedicated 1st Rank Architect Support",
        "Full NDA & Complete GitHub IP Ownership",
      ],
      ctaText: "Book Strategy Call",
      isContactPage: true,
      whatsappText:
        "Hi Abhishek, I would like to book a Strategy Call for a Custom SaaS / Enterprise Platform.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#030604] overflow-hidden" id="pricing">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(184,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
              TRANSPARENT PRODUCTIZED PRICING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Zero Hidden Fees.{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
              100% Ownership.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
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
                    ? "bg-gradient-to-b from-[#0E1810] via-[#09110B] to-[#050806] border-2 border-[#B8FF00] shadow-[0_0_50px_rgba(184,255,0,0.22)] lg:-translate-y-4"
                    : "bg-[#080D0A]/90 border border-white/10 hover:border-[#B8FF00]/40"
                }`}
              >
                {/* Floating Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#B8FF00] text-black text-[11px] font-black tracking-wider uppercase shadow-[0_0_25px_rgba(184,255,0,0.6)] whitespace-nowrap flex items-center gap-1.5">
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
                          ? "bg-[#B8FF00]/15 border-[#B8FF00]/40 text-[#B8FF00]"
                          : "bg-white/[0.04] border-white/10 text-zinc-400"
                      }`}
                    >
                      {pkg.badge}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        pkg.popular
                          ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.5)]"
                          : "bg-white/[0.05] text-[#B8FF00] border border-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="text-xl font-black text-white">{pkg.name}</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono text-[#B8FF00] font-semibold">
                        / {pkg.billing}
                      </span>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed min-h-[48px]">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t border-white/[0.08] pt-5 space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-left">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-[#B8FF00]" : "text-emerald-400"
                          }`}
                        />
                        <span className="text-xs sm:text-sm text-zinc-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-8">
                  {pkg.isContactPage ? (
                    <Link
                      href="/contact"
                      className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold bg-white/10 text-white hover:bg-[#B8FF00] hover:text-black border border-white/15 transition-all flex items-center justify-center gap-2 group"
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
                          ? "bg-[#B8FF00] text-black hover:bg-[#ccff00] shadow-[0_0_25px_rgba(184,255,0,0.45)]"
                          : "bg-white/[0.06] text-white hover:bg-[#B8FF00] hover:text-black border border-white/15"
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
        <div className="mt-12 rounded-2xl p-4 sm:p-5 bg-[#080D0A] border border-[#B8FF00]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8FF00]" />
            <span>100% Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#B8FF00]" />
            <span>On-Time 7-Day Launch Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
            <span>Zero Monthly Agency Retainers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
