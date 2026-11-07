import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Codube",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Terms of Service</h1>
      <div className="glass-panel rounded-3xl p-8 border-white/10 space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>
          Welcome to Codube. By accessing or using our website and services, you agree to comply with and be bound by the following terms.
        </p>
        <h2 className="text-lg font-bold text-white text-[#bbfb26]">1. Engagement &amp; Milestones</h2>
        <p>
          Software engineering engagements are delivered in milestone-driven sprints as outlined in customized Statement of Work (SOW) documents.
        </p>
        <h2 className="text-lg font-bold text-white text-[#bbfb26]">2. Warranty &amp; Support</h2>
        <p>
          We provide dedicated post-deployment warranty and technical bug-fixing support for all production software delivered by Codube.
        </p>
      </div>
    </div>
  );
}
