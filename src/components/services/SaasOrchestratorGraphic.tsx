import React from "react";

export default function SaasOrchestratorGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-slate-50 via-white to-slate-50 p-2.5 flex flex-col justify-between overflow-hidden select-none text-left">
      {/* SaaS Cluster Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-slate-900">
            Multi-Tenant SaaS Cluster
          </span>
        </div>
        <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
          AWS &amp; Cloudflare Edge
        </span>
      </div>

      {/* Tenant Nodes & Topology */}
      <div className="my-auto py-1 space-y-1.5">
        <div className="grid grid-cols-3 gap-1.5">
          {/* Tenant A */}
          <div className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <div className="text-[8px] font-mono text-slate-500">Tenant A</div>
            <div className="text-[10px] font-bold text-slate-800 truncate">ClinicPro DB</div>
            <div className="text-[7.5px] font-mono text-emerald-600 font-semibold">Isolated AES</div>
          </div>

          {/* Tenant B */}
          <div className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <div className="text-[8px] font-mono text-slate-500">Tenant B</div>
            <div className="text-[10px] font-bold text-slate-800 truncate">RealtyHub</div>
            <div className="text-[7.5px] font-mono text-emerald-600 font-semibold">Edge CDN ✓</div>
          </div>

          {/* Tenant Enterprise */}
          <div className="p-1.5 rounded-lg bg-emerald-50/60 border border-emerald-200 shadow-2xs">
            <div className="text-[8px] font-mono text-emerald-700 font-bold">Enterprise</div>
            <div className="text-[10px] font-bold text-emerald-950 truncate">Custom VPC</div>
            <div className="text-[7.5px] font-mono text-emerald-700 font-semibold">99.99% SLA</div>
          </div>
        </div>

        {/* Central Database & Stripe Metrics Card */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-[8px] font-mono text-slate-500">PostgreSQL High Concurrency</div>
            <div className="text-[10px] font-mono font-bold text-slate-900">
              Sub-12ms Query • 0 Latency
            </div>
          </div>
          <div className="text-right">
            <div className="text-[8px] font-mono text-slate-500">Stripe MRR</div>
            <div className="text-[11px] font-extrabold text-emerald-600">$48,200/mo</div>
          </div>
        </div>
      </div>

      {/* Event Stream Log */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-slate-700 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>event: tenant_b.sub_renewed (200 OK • 14ms)</span>
        </span>
        <span className="text-emerald-700 font-bold shrink-0">1,240 Subs</span>
      </div>
    </div>
  );
}
