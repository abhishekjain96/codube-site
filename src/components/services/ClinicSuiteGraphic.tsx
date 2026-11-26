import React from "react";

export default function ClinicSuiteGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-emerald-50/30 via-white to-slate-50 p-2.5 flex flex-col justify-between overflow-hidden select-none text-left">
      {/* Top Security Banner (Matches uploaded design) */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-mono font-bold text-emerald-800">
            ABDM &amp; HIPAA Certified Security
          </span>
        </div>
      </div>

      {/* 3 Interactive Grid Panels */}
      <div className="my-auto py-1 grid grid-cols-3 gap-1.5">
        {/* Panel 1: Live Status & Queue */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="text-[9px] font-mono font-bold text-slate-700 flex items-center gap-1">
            <span>Live Status</span>
          </div>

          {/* ECG Pulse Curve */}
          <div className="w-full h-6 flex items-center justify-center overflow-hidden bg-emerald-50/50 rounded border border-emerald-100">
            <svg viewBox="0 0 100 24" className="w-full h-5 stroke-emerald-600 fill-none" strokeWidth="2">
              <path d="M0,12 L20,12 L25,4 L30,20 L35,8 L40,16 L45,12 L100,12" />
            </svg>
          </div>

          <div className="px-1.5 py-0.5 rounded bg-emerald-500 text-white text-[8px] font-mono font-bold text-center">
            Token #08 In Clinic
          </div>

          <div className="text-[8px] font-mono text-slate-500 truncate">
            Dr. Sharma (Cardio)
          </div>
        </div>

        {/* Panel 2: Patient & WhatsApp Slot */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="text-[9px] font-bold text-slate-900 truncate">
            Dr. Priya Mehta
          </div>
          <div className="text-[8px] font-mono text-emerald-700 font-semibold">
            100+ Today
          </div>

          <div className="p-1 rounded bg-emerald-50 border border-emerald-200 text-[8px] font-mono text-emerald-900 leading-tight">
            11:00 AM • WA Confirmed
          </div>

          <div className="text-[8px] font-mono text-slate-600 truncate flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Report Sent ✓</span>
          </div>
        </div>

        {/* Panel 3: Interactive Metrics */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="text-[9px] font-mono text-slate-700">
            Satisfaction
          </div>

          <div className="flex items-center justify-center py-0.5">
            <span className="text-sm font-black text-emerald-600">98%</span>
          </div>

          {/* Growth curve */}
          <div className="h-4 flex items-end">
            <svg viewBox="0 0 50 16" className="w-full h-full stroke-emerald-500 fill-none" strokeWidth="2">
              <path d="M0,14 Q25,12 50,2" />
            </svg>
          </div>

          <div className="text-[8px] font-mono text-slate-500 text-center truncate">
            142 Bookings
          </div>
        </div>
      </div>

      {/* Bottom Integration Tag */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono">
        <span className="text-slate-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>100% WhatsApp Integrated</span>
        </span>
        <span className="text-emerald-700 font-bold">50,000+ Doctors</span>
      </div>
    </div>
  );
}
