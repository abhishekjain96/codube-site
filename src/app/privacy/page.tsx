import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Codube",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
      <div className="glass-panel rounded-3xl p-8 border-white/10 space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>
          At Codube, we take client and visitor privacy seriously. Any information provided to us through contact forms, emails, or discovery sessions is held in strict confidence.
        </p>
        <h2 className="text-lg font-bold text-white text-[#bbfb26]">1. Data Collection</h2>
        <p>
          We only collect information directly provided by you, such as your name, email address, phone number, and project brief, exclusively for the purpose of communicating about digital product development.
        </p>
        <h2 className="text-lg font-bold text-white text-[#bbfb26]">2. Non-Disclosure &amp; IP Protection</h2>
        <p>
          We happily sign Non-Disclosure Agreements (NDAs) prior to discussing proprietary project concepts, wireframes, or business logic. All source code and intellectual property produced under commercial agreements belong 100% to the client.
        </p>
      </div>
    </div>
  );
}
