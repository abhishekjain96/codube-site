"use client";

import React, { useState } from "react";
import { MessageCircle, X, Bot, Sparkles, ArrowUpRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "919672660338";
  const defaultMsg = encodeURIComponent(
    "Hi Abhishek, I visited Codube.com and want to see a demo of the Website + WhatsApp AI Agent for my business."
  );

  const scrollToDemo = () => {
    const el = document.getElementById("ai-simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#ai-simulator";
    }
  };

  return (
    <aside
      aria-label="Direct WhatsApp Contact & Book Demo"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Pop-up Quick Prompt */}
      {isOpen && (
        <div className="mb-1 w-72 sm:w-80 rounded-2xl bg-white border border-emerald-200 p-4 shadow-xl text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">Abhishek Jain</span>
                <span className="text-[10px] font-mono text-emerald-700">Replies in 2 mins</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Want a live Website + WhatsApp AI Receptionist for your clinic or business? Let&apos;s chat directly!
          </p>
          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      )}

      {/* Sleek Sticky Bar: Book Free Demo Pill + WhatsApp Button */}
      <div className="flex items-center gap-2.5">
        {/* Book Free Demo Floating Pill */}
        <button
          type="button"
          onClick={scrollToDemo}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 hover:bg-emerald-600 text-slate-800 hover:text-white border border-slate-200 backdrop-blur-xl text-xs font-bold shadow-md transition-all duration-300 cursor-pointer group"
        >
          <Bot className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
          <span>Book Free Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Main WhatsApp Trigger Button */}
        <div className="relative group flex items-center">
          {/* Tooltip on Desktop */}
          <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-slate-900 text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat with Abhishek (Replies in 2 mins)</span>
          </div>

          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Abhishek (Replies in 2 mins)"
            title="Chat with Abhishek (Replies in 2 mins)"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
          >
            <MessageCircle className="w-7 h-7 fill-white stroke-none drop-shadow-md" />
            
            {/* Pulsing Green Indicator Dot on Top Corner */}
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
