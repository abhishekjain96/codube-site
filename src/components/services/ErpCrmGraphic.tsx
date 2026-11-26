import React from "react";

export default function ErpCrmGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-slate-50 via-white to-slate-50 p-2.5 flex flex-col justify-between overflow-hidden select-none text-left">
      {/* macOS Window Bar (Derived from user uploaded screenshot) */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-mono text-slate-500 ml-1 truncate">
            ERP &amp; CRM / Operations Hub
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[8px] font-mono font-bold text-emerald-700">
            Real-Time Sync
          </span>
          <span className="text-[8px] font-mono text-slate-400 hidden sm:inline">
            99.98% Uptime
          </span>
        </div>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-3 gap-1.5 my-1.5">
        <div className="p-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="text-[8px] font-mono text-slate-500">Monthly Revenue</div>
          <div className="text-[11px] font-extrabold text-slate-900 leading-tight">₹18,45,000</div>
          <div className="text-[7.5px] font-mono text-emerald-600 font-bold">↗ +24.8%</div>
        </div>

        <div className="p-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="text-[8px] font-mono text-slate-500">Sales Pipeline</div>
          <div className="text-[11px] font-extrabold text-slate-900 leading-tight">412 Deals</div>
          <div className="w-full bg-slate-100 rounded-full h-1 mt-1 overflow-hidden">
            <div className="bg-purple-500 h-full w-[70%]" />
          </div>
        </div>

        <div className="p-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="text-[8px] font-mono text-slate-500">Invoices</div>
          <div className="text-[11px] font-extrabold text-slate-900 leading-tight">1,840 Gen</div>
          <div className="text-[7.5px] font-mono text-emerald-600 font-bold">100% Reconciled</div>
        </div>
      </div>

      {/* Mini Order & Client Table */}
      <div className="rounded-lg bg-white border border-slate-200/90 overflow-hidden shadow-2xs text-[8.5px]">
        <div className="grid grid-cols-3 bg-slate-50 px-2 py-1 font-mono font-bold text-slate-600 border-b border-slate-100">
          <span>Client</span>
          <span>Status</span>
          <span className="text-right">Value</span>
        </div>
        <div className="divide-y divide-slate-100 font-mono">
          <div className="grid grid-cols-3 px-2 py-1 items-center">
            <span className="font-semibold text-slate-800 truncate">Acme Corp</span>
            <span className="text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded w-fit text-[7.5px]">Paid UPI ✓</span>
            <span className="text-right font-bold text-slate-900">₹4,50,000</span>
          </div>
          <div className="grid grid-cols-3 px-2 py-1 items-center">
            <span className="font-semibold text-slate-800 truncate">LogiTech</span>
            <span className="text-blue-700 bg-blue-50 px-1 py-0.2 rounded w-fit text-[7.5px]">Active</span>
            <span className="text-right font-bold text-slate-900">₹3,20,000</span>
          </div>
        </div>
      </div>

      {/* Floating Ledger Sync Status */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span className="truncate">Invoice #INV-2402 auto-synced to GST &amp; Bank ✓</span>
        <span className="text-emerald-700 font-bold shrink-0">Velocity +18%</span>
      </div>
    </div>
  );
}
