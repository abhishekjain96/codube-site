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
        <div className="mb-1 w-72 sm:w-80 rounded-2xl glass-panel-glow border-[#25D366]/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#0A110C]/95 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
              <div>
                <span className="text-xs font-bold text-white block">Abhishek Jain</span>
                <span className="text-[10px] font-mono text-[#25D366]">Replies in 2 mins</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed mb-3">
            Want a live Website + WhatsApp AI Receptionist for your clinic or business? Let&apos;s chat directly!
          </p>
          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center justify-center gap-1.5 transition-all"
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
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#080D0A]/90 hover:bg-[#B8FF00] text-zinc-200 hover:text-black border border-[#B8FF00]/40 backdrop-blur-xl text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer group"
        >
          <Bot className="w-3.5 h-3.5 text-[#B8FF00] group-hover:text-black transition-colors" />
          <span>Book Free Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Main WhatsApp Trigger Button with Permanent Pulsing Dot & Hover Tooltip */}
        <div className="relative group flex items-center">
          {/* Sleek Persistent Mini Tooltip / Label on Desktop or Hover */}
          <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-[#080D0A]/95 border border-[#25D366]/40 text-xs font-semibold text-white shadow-xl backdrop-blur-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat with Abhishek (Replies in 2 mins)</span>
          </div>

          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Abhishek (Replies in 2 mins)"
            title="Chat with Abhishek (Replies in 2 mins)"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/25"
          >
            <MessageCircle className="w-7 h-7 fill-white stroke-none drop-shadow-md" />
            
            {/* Pulsing Green Indicator Dot on Top Corner */}
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B8FF00] border-2 border-[#030604]"></span>
            </span>
          </a>

          {/* Ambient Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none -z-10" />
        </div>
      </div>
    </aside>
  );
}
