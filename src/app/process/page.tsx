import React from "react";
import type { Metadata } from "next";
import ProcessFlow from "@/components/ProcessFlow";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "From Idea to Launch — Codube Development Process",
  description:
    "A simple, transparent and result-driven development process that turns your idea into a real, scalable product. Clear milestones, collaborative sprints, and fast delivery.",
};

export default function ProcessPage() {
  const content = getSiteContent();

  return (
    <div className="pt-20">
      {/* Process Flow with Hero Graphic enabled (matching Image 4) */}
      <ProcessFlow content={content} showHeroGraphic={true} />

      <CtaBanner content={content} />
    </div>
  );
}
