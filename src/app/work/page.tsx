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
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#bbfb26]/30 backdrop-blur-md mb-4">
          <span className="w-2 h-2 rounded-full bg-[#bbfb26] animate-pulse" />
          <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
            Portfolio &amp; Case Studies
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Proven In Production.{" "}
          <span className="text-[#bbfb26] drop-shadow-[0_0_20px_rgba(187,251,38,0.4)]">
            Scalable by Design.
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          We build real-world digital products that handle actual users, complex bookings, transactions, and continuous growth.
        </p>
      </div>

      <FeaturedProjects content={content} />

      <CtaBanner content={content} />
    </div>
  );
}
