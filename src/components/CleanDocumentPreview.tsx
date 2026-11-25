"use client";

import React from "react";
import { MessageSquare, Bot, User, CheckCircle2, ChevronRight } from "lucide-react";

interface Props {
  content: string;
}

// Helper to render inline text with bold (**text**), italics (*text*), and code (`code`)
function renderInlineFormatting(text: string): React.ReactNode {
  // Split by bold (**...**)
  const boldParts = text.split(/(\*\*.*?\*\*)/g);

  return boldParts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Split by inline code (`...`)
    const codeParts = part.split(/(`.*?`)/g);
    return codeParts.map((subPart, j) => {
      if (subPart.startsWith("`") && subPart.endsWith("`")) {
        return (
          <code
            key={j}
            className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-xs border border-slate-200 font-medium"
          >
            {subPart.slice(1, -1)}
          </code>
        );
      }

      // Check italics (*...*)
      const italicParts = subPart.split(/(\*.*?\*)/g);
      return italicParts.map((itPart, k) => {
        if (itPart.startsWith("*") && itPart.endsWith("*") && itPart.length > 2) {
          return (
            <em key={k} className="italic text-slate-600 font-medium">
              {itPart.slice(1, -1)}
            </em>
          );
        }
        return <span key={k}>{itPart}</span>;
      });
    });
  });
}

export default function CleanDocumentPreview({ content }: Props) {
  if (!content) return null;

  const rawLines = content.split("\n");

  return (
    <div className="space-y-4 text-slate-800 text-left">
      {rawLines.map((line, idx) => {
        const trimmed = line.trim();

        // Empty line
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // Horizontal Divider (---)
        if (trimmed === "---" || trimmed.startsWith("---")) {
          return <hr key={idx} className="border-t-2 border-slate-200/80 my-5" />;
        }

        // H1 Heading (# Heading)
        if (trimmed.startsWith("# ")) {
          return (
            <h1
              key={idx}
              className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight pt-2 pb-2 border-b border-slate-200"
            >
              {trimmed.slice(2)}
            </h1>
          );
        }

        // H2 Heading (## Heading)
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>{trimmed.slice(3)}</span>
            </h2>
          );
        }

        // H3 Subheading (### Heading)
        if (trimmed.startsWith("### ")) {
          return (
            <div key={idx} className="mt-4 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/70 border border-emerald-300/60 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-700" />
                <span>{trimmed.slice(4)}</span>
              </span>
            </div>
          );
        }

        // Blockquote (> Quote)
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500 my-3 text-slate-700 italic text-sm leading-relaxed"
            >
              {renderInlineFormatting(trimmed.slice(2))}
            </blockquote>
          );
        }

        // Chatbot Dialogue: **Bot**: "..."
        if (trimmed.startsWith("**Bot**:") || trimmed.startsWith("Bot:")) {
          const speech = trimmed.replace(/^\*\*Bot\*\*:\s*/, "").replace(/^Bot:\s*/, "");
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 shadow-sm my-2 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 font-mono block">
                  AI Receptionist
                </span>
                <div className="text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-wrap">
                  {renderInlineFormatting(speech)}
                </div>
              </div>
            </div>
          );
        }

        // User / System Action or Guidance: *(If user...)*
        if (trimmed.startsWith("*(") && trimmed.endsWith(")*")) {
          return (
            <div
              key={idx}
              className="my-2 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 font-medium italic flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{trimmed.slice(2, -2)}</span>
            </div>
          );
        }

        // Bullet point list item (- Item)
        if (trimmed.startsWith("- ")) {
          return (
            <div key={idx} className="flex items-start gap-2.5 my-1.5 text-sm sm:text-base text-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2.5" />
              <div className="leading-relaxed">{renderInlineFormatting(trimmed.slice(2))}</div>
            </div>
          );
        }

        // Numbered list item (1. Item)
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2.5 my-1.5 text-sm sm:text-base text-slate-800">
              <span className="px-1.5 py-0.2 rounded bg-slate-200/80 text-slate-800 font-mono text-xs font-bold shrink-0 mt-1">
                {numMatch[1]}
              </span>
              <div className="leading-relaxed">{renderInlineFormatting(numMatch[2])}</div>
            </div>
          );
        }

        // Key Value Rows (e.g. **Assistant Persona**: Value)
        if (trimmed.startsWith("**") && trimmed.includes("**: ")) {
          const parts = trimmed.split("**: ");
          const label = parts[0].replace(/^\*\*/, "");
          const val = parts.slice(1).join("**: ");

          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 my-2 py-1 border-b border-slate-100 text-sm"
            >
              <span className="font-bold text-slate-900 min-w-[160px] shrink-0 font-mono text-xs uppercase tracking-wider text-slate-600">
                {label}:
              </span>
              <span className="text-slate-800 font-medium">
                {renderInlineFormatting(val)}
              </span>
            </div>
          );
        }

        // Standard Paragraph text
        return (
          <p key={idx} className="text-sm sm:text-base text-slate-800 leading-relaxed my-2">
            {renderInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
