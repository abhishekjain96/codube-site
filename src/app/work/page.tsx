import React from "react";
import type { Metadata } from "next";
import FeaturedProjects from "@/components/FeaturedProjects";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "Our Work & Case Studies — Codube Portfolio",
  description:
    "Explore our featured projects including ScanTaker (diagnostic booking platform) and MedLearnings (medical education platform). Real products built for real industries.",
};

export default function WorkPage() {
  const content = getSiteContent();

  return (
    <div className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-wide uppercase">
            PORTFOLIO &amp; CASE STUDIES
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Proven In Production.{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Scalable by Design.
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We build real-world digital products that handle actual users, complex bookings, diagnostic tokens, and continuous scaling.
        </p>
      </div>

      <FeaturedProjects content={content} />

      <CtaBanner content={content} />
    </div>
  );
}
