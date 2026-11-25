"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "How fast can Codube launch our website or AI bot?",
    a: "Our Complete Business Growth Kit ($999) and AI WhatsApp Automation Agent ($499) are delivered in 7 days guaranteed. Custom SaaS and multi-branch systems typically launch in 2 to 4 weeks with weekly live staging previews.",
  },
  {
    q: "Who leads the development of our project?",
    a: "Founder Abhishek Jain (1st Rank National Hackathon Winner) personally architects every system and reviews every line of code. You have direct WhatsApp access to founder-level engineering leadership throughout the project.",
  },
  {
    q: "Do we get 100% full source code and intellectual property ownership?",
    a: "Yes, 100%. All GitHub source repositories, database structures, cloud credentials, and intellectual property belong entirely to you from day one under our mutual commercial agreement.",
  },
  {
    q: "How does the WhatsApp AI Receptionist work?",
    a: "We configure the official Meta WhatsApp Cloud API under your business name. We train the AI on your exact services, doctor/consultant timings, location, and fees. It replies to incoming customer queries in 2 seconds and automatically confirms bookings into Google Sheets or your CRM.",
  },
  {
    q: "Are there any mandatory monthly retainers?",
    a: "No! Unlike traditional agencies that charge $2,000+ per month indefinitely, our core packages are 100% fixed one-time setups ($499 - $999). We offer optional maintenance (+ $99/mo) only if you want hands-off cloud monitoring.",
  },
  {
    q: "What warranty and post-launch support do you provide?",
    a: "Every project includes 30 days of comprehensive post-launch warranty and bug-fixing support free of charge to guarantee seamless production operations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-wide uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Got Questions? We&apos;ve Got{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Direct Answers.
            </span>
          </h2>
        </div>

        <div className="space-y-3.5 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-50"
                    : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-emerald-600 text-white rotate-180 shadow-sm"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
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
