"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "919672660338";
  const defaultMsg = encodeURIComponent(
    "Hello Abhishek! I saw Codube website and would like to discuss a project with you."
  );

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Quick Prompt */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl glass-panel-glow border-[#bbfb26]/40 p-4 shadow-2xl bg-[#0c140f]/95 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Abhishek Jain</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed mb-3">
            Have a project in mind? Message me directly on WhatsApp for instant scope discussions and quick estimates.
          </p>
          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            className="w-full neon-btn py-2 px-3 rounded-xl text-xs font-bold text-black flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <a
          href={`https://wa.me/${phone}?text=${defaultMsg}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat directly on WhatsApp with Abhishek Jain"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20 p-3.5"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-none drop-shadow-md" />
        </a>

        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10" />

        {/* Tooltip on hover */}
        <div className="hidden sm:block pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-black/85 text-xs text-zinc-200 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
          Chat on WhatsApp: +91 96726 60338
        </div>
      </div>
    </aside>
  );
}
