import React from "react";

export default function WebPlatformGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-slate-50 via-white to-slate-50/80 p-3 flex flex-col justify-between overflow-hidden select-none">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)",
          backgroundSize: "16px 16px"
        }}
      />

      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200/70 relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-600 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="truncate max-w-[150px]">https://codube.com/live</span>
        </div>

        <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
          <span>0.2s LCP</span>
        </div>
      </div>

      {/* Mockup Body Content */}
      <div className="my-auto py-2 space-y-2 relative z-10">
        {/* Metric Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-slate-800">4,820 Live Visitors</span>
          </div>

          <div className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-bold text-emerald-700">
            100 Mobile Score
          </div>
        </div>

        {/* Hero Wireframe Visual */}
        <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-32 bg-slate-900 rounded-sm" />
            <div className="h-2 w-12 bg-emerald-500 rounded-sm" />
          </div>
          <div className="h-2 w-48 bg-slate-200 rounded-sm" />

          {/* Conversion Lift Bar */}
          <div className="pt-1 flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-500">Conversion Velocity</span>
            <span className="text-emerald-700 font-bold">+38.4% Lift</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[84%]" />
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] relative z-10">
        <span className="font-mono text-slate-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Next.js 14 SSR Ready</span>
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold font-mono text-[9px]">
          Turnkey Launch →
        </span>
      </div>
    </div>
  );
}
