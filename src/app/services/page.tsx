import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import TechStackGrid from "@/components/TechStackGrid";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "End-to-End Technology Solutions — CODUBE Services",
  description:
    "From high-performing web applications to complex custom software and AI automation — explore CODUBE capabilities, deliverables, and production frameworks.",
};

export default function ServicesPage() {
  const content = getSiteContent();

  return (
    <div className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-wide uppercase">
            END-TO-END CAPABILITIES
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Engineered for Revenue &amp;{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Autonomous Scale.
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge software architecture with conversion engineering and official Meta WhatsApp automation.
        </p>
      </div>

      <ServicesSection content={content} showAll={true} />
      <TechStackGrid content={content} />
      <CtaBanner content={content} />
    </div>
  );
}
