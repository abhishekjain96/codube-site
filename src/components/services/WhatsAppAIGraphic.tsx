import React from "react";

export default function WhatsAppAIGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 p-3 flex flex-col justify-between overflow-hidden select-none">
      {/* WhatsApp Header Strip */}
      <div className="flex items-center justify-between pb-2 border-b border-emerald-100/80">
        <div className="flex items-center gap-2">
          <div className="relative w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[11px] font-bold shadow-2xs">
            WA
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
              <span>Codube Receptionist AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[9px] font-mono text-emerald-700">Official Cloud API • &lt;2s Reply</div>
          </div>
        </div>

        <span className="text-[9px] font-mono bg-emerald-100/70 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
          24/7 ACTIVE
        </span>
      </div>

      {/* Simulated WhatsApp Chat Body */}
      <div className="my-auto py-2 space-y-2">
        {/* User Incoming Bubble */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-white border border-slate-200/90 rounded-2xl rounded-tr-xs px-3 py-1.5 shadow-2xs text-left">
            <p className="text-[10px] text-slate-800 leading-tight">
              Hi, do you have an appointment slot tomorrow at 11 AM?
            </p>
            <div className="text-[8px] font-mono text-slate-400 text-right mt-0.5">10:59 AM</div>
          </div>
        </div>

        {/* AI Bot Instant Reply Bubble */}
        <div className="flex justify-start">
          <div className="max-w-[88%] bg-emerald-50/90 border border-emerald-200/90 rounded-2xl rounded-tl-xs px-3 py-1.5 shadow-2xs text-left">
            <p className="text-[10px] text-slate-900 leading-tight">
              Hello! Yes, <span className="font-semibold text-emerald-800">Dr. Priya Mehta</span> has 11:00 AM open.
            </p>
            {/* Interactive Slot Pill */}
            <div className="mt-1.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-emerald-300 text-[9px] font-mono font-bold text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>✓ Slot #08 Reserved (11:00 AM)</span>
            </div>
            <div className="text-[8px] font-mono text-emerald-600 text-right mt-1">11:00 AM ✓✓</div>
          </div>
        </div>
      </div>

      {/* Bottom Sync Banner */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>CRM &amp; Sheets Live Sync</span>
        </span>
        <span className="text-emerald-700 font-bold">0 Drop-off Guarantee</span>
      </div>
    </div>
  );
}
