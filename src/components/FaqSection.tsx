"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "How fast can Codube launch our MVP product?",
    a: "Most MVP platforms (like ScanTaker or custom booking engines) are launched in 3 to 6 weeks. Because we operate in milestone-driven agile sprints with modern Next.js and reusable cloud architectures, we deliver 2x faster than traditional agencies with zero legacy tech debt.",
  },
  {
    q: "Who leads the development of our project?",
    a: "Abhishek Jain (Founder & 1st Rank Hackathon Winner) directly architects and supervises every project codebase. You have direct Slack/WhatsApp access to senior engineering leadership without getting handed off to junior interns.",
  },
  {
    q: "Do we get 100% full source code and IP ownership?",
    a: "Yes, 100%. All GitHub repositories, database schemas, cloud infrastructure scripts, and proprietary IP belong entirely to you from day one under signed commercial NDA agreements.",
  },
  {
    q: "Can you integrate WhatsApp automation or AI agents into our existing software?",
    a: "Absolutely. We specialize in retrofitting modern AI automation, WhatsApp Cloud API notification bots, and real-time CRM syncing into existing business systems without causing any operational downtime.",
  },
  {
    q: "What happens after the product is launched?",
    a: "We provide 30 days of comprehensive post-launch warranty and bug-fixing support free of charge. After launch, we offer flexible monthly SLA maintenance contracts covering server monitoring, uptime security, and feature iterations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#070b08]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#bbfb26]/30 backdrop-blur-md shadow-[0_0_15px_rgba(187,251,38,0.15)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#bbfb26]" />
            <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Got Questions? We&apos;ve Got{" "}
            <span className="text-[#bbfb26] drop-shadow-[0_0_20px_rgba(187,251,38,0.4)]">
              Direct Answers.
            </span>
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0d140f] border-[#bbfb26]/50 shadow-[0_10px_30px_rgba(187,251,38,0.12)]"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#bbfb26] text-black rotate-180 shadow-[0_0_12px_#bbfb26]"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
