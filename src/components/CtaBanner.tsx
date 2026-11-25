"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import CodubeLogo from "./CodubeLogo";

interface CtaBannerProps {
  content?: any;
}

export default function CtaBanner({ content }: CtaBannerProps) {
  const ctaData = content?.cta || {
    title: "Ready to Turn Visitors Into Paying Customers?",
    subtitle: "Let's engineer your conversion-focused web platform and 24/7 WhatsApp AI receptionist — delivered turnkey in 7 days.",
    buttonText: "Schedule Free Consultation",
    buttonUrl: "/contact",
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient inner glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.25)_0%,transparent_70%)] blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[radial-gradient(circle,rgba(99,102,241,0.20)_0%,transparent_70%)] blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left: Text & Badges */}
            <div className="space-y-4 text-center sm:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-400 text-xs font-mono font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LIMITED CAPACITY • 3 NEW CLIENT SLOTS AVAILABLE THIS MONTH</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {ctaData.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {ctaData.subtitle}
              </p>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href={ctaData.buttonUrl || "/contact"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all group active:scale-95"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <a
                href="https://wa.me/919672660338?text=Hi%20Abhishek%2C%20I%20want%20to%20discuss%20launching%20my%20website%20and%20WhatsApp%20AI%20agent."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
