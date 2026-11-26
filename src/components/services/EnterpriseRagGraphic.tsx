import React from "react";

export default function EnterpriseRagGraphic() {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-gradient-to-b from-slate-50 via-white to-slate-50 p-2.5 flex flex-col justify-between overflow-hidden select-none text-left">
      {/* Top Banner (Derived from user uploaded screenshot) */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
        <div>
          <div className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
            <span>Enterprise RAG &amp; AI Agents</span>
          </div>
          <div className="text-[8px] font-mono text-slate-500">Document-to-AI Knowledge Pipeline</div>
        </div>

        <div className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[8px] font-mono font-bold text-emerald-800">
          Agent: 98.4% Confidence
        </div>
      </div>

      {/* Main 2-Side Ingestion & Copilot Interface */}
      <div className="my-auto py-1 grid grid-cols-2 gap-2 items-center">
        {/* Left Side: Document OCR & Vector Embeddings */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1 text-[8.5px] font-mono">
          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">
            Ingestion Pipeline
          </div>

          <div className="p-1 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
            <span className="truncate text-slate-700">Q4_Financials.pdf</span>
            <span className="text-emerald-600 font-bold">Vectorized ✓</span>
          </div>

          <div className="p-1 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
            <span className="truncate text-slate-700">SOP_Manual_v2.docx</span>
            <span className="text-emerald-600 font-bold">Synced ✓</span>
          </div>

          {/* 1536-dim Vector Node */}
          <div className="p-1 rounded bg-emerald-50 border border-emerald-200 text-center text-emerald-900 font-bold text-[8px]">
            Vector Embeddings (1536-dim pgvector)
          </div>
        </div>

        {/* Right Side: Copilot Question & Answer */}
        <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-mono font-bold text-slate-900">AI Copilot</span>
            <span className="text-[7.5px] font-mono text-emerald-700">&lt;420ms Private</span>
          </div>

          {/* User query bubble */}
          <div className="p-1 rounded-lg bg-slate-100 text-[8px] text-slate-800 leading-tight">
            &ldquo;What is our Q4 revenue target?&rdquo;
          </div>

          {/* AI synthesized response bubble */}
          <div className="p-1 rounded-lg bg-emerald-50/80 border border-emerald-200 text-[8px] text-emerald-950 leading-tight">
            Target is <span className="font-bold text-emerald-700">$12.4M</span>. Audit deadline Dec 15.
            <div className="mt-0.5 text-[7px] text-emerald-800 font-mono">
              Source: Q4_Financials.pdf (p.14)
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Security Guarantee */}
      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Private &amp; Encrypted • Zero Data Retention</span>
        </span>
        <span className="text-emerald-700 font-bold">Gemini &amp; Hybrid Search</span>
      </div>
    </div>
  );
}
