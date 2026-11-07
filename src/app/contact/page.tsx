"use client";

import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";
import confetti from "canvas-confetti";

const servicesOptions = [
  "Custom Software Development",
  "AI Automation & Agents",
  "SaaS Platform Engineering",
  "Web Application Development",
  "WhatsApp & Business Automation",
  "API & Cloud Infrastructure",
  "Other Technical Consultation",
];

const budgetOptions = [
  "₹30k - ₹75k (Starter MVP)",
  "₹75k - ₹2 Lakh (Standard)",
  "₹2 Lakh - ₹5 Lakh (Scale)",
  "₹5 Lakh+ (Enterprise)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    budget: "₹75k - ₹2 Lakh (Standard)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailStatus, setEmailStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      setSubmitted(true);
      if (data.emailSent) {
        setEmailStatus(`Delivered to ${data.recipient || "hello@codube.com"}`);
      } else {
        setEmailStatus("Logged into Admin Inbox");
      }

      // Trigger festive neon confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B8FF00", "#70FF00", "#ffffff", "#22c55e"],
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again or message via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/919672660338?text=${encodeURIComponent(
    `Hi Abhishek, I just submitted a proposal on Codube!
Name: ${formData.name}
Service: ${formData.service}
Budget: ${formData.budget}
Message: ${formData.message}`
  )}`;

  return (
    <div className="relative pt-28 pb-20 overflow-hidden bg-[#030604] min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(184,255,0,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(112,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
              START THE CONVERSATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
              Extraordinary.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Tell us about your product vision. We review every submission personally and respond with an exact architecture proposal in under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Connect & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-[#B8FF00]/40 shadow-[0_10px_35px_rgba(184,255,0,0.15)] space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-emerald-400">
                    Direct WhatsApp
                  </div>
                  <div className="text-lg font-black text-white tracking-wide">
                    +91 96726 60338
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Need an immediate response? Chat directly with Founder &amp; Lead Architect <strong>Abhishek Jain</strong> on WhatsApp.
              </p>

              <a
                href="https://wa.me/919672660338"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
              >
                <span>Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className="rounded-3xl p-6 bg-[#080D0A] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B8FF00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-zinc-400">
                    Official Inquiries
                  </div>
                  <a
                    href="mailto:hello@codube.com"
                    className="text-base font-bold text-white hover:text-[#B8FF00] transition-colors"
                  >
                    hello@codube.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Send RFP briefs, architectural requirements, or enterprise proposals directly to hello@codube.com.
              </p>
            </div>

            {/* Response Time & Location */}
            <div className="rounded-3xl p-6 bg-[#080D0A] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-[#B8FF00]" />
                <span>Guaranteed response time: <strong>under 2 hours</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-[#B8FF00]" />
                <span>Headquartered in Jaipur, India • Delivering Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Sparkles className="w-4 h-4 text-[#B8FF00]" />
                <span>Free 30-min Technical Architecture Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#080D0A] border border-[#B8FF00]/30 p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#B8FF00]/20 border border-[#B8FF00] flex items-center justify-center text-[#B8FF00] mx-auto shadow-[0_0_25px_#B8FF00]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-xs font-mono text-[#B8FF00]">
                      Status: {emailStatus || "Saved & Sent to hello@codube.com"}
                    </p>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your project proposal has been received. Our team will review your requirements and respond at <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>

                  {/* Immediate Fast-Track WhatsApp Forward Button */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto space-y-3">
                    <div className="text-xs text-zinc-400">Want an instant conversation on your proposal?</div>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Also Forward Proposal to WhatsApp (+91 96726 60338)</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Custom Software Development",
                        budget: "₹75k - ₹2 Lakh (Standard)",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                        Your Name <span className="text-[#B8FF00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                        Email Address <span className="text-[#B8FF00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-all"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Primary Service Interested In
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {servicesOptions.map((serv) => (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: serv })}
                          className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                            formData.service === serv
                              ? "bg-[#B8FF00]/15 border-[#B8FF00] text-white shadow-[0_0_15px_rgba(184,255,0,0.2)]"
                              : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Expected Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-2.5 rounded-xl text-[11px] font-semibold text-center border transition-all ${
                            formData.budget === b
                              ? "bg-[#B8FF00] text-black border-[#B8FF00] shadow-[0_0_12px_rgba(184,255,0,0.4)]"
                              : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white"
                          }`}
                        >
                          {b.split(" ")[0]} {b.split(" ")[1] || ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Project Details &amp; Requirements <span className="text-[#B8FF00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what you are looking to build, expected timelines, key features..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all duration-300 disabled:opacity-50 active:scale-95"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>{loading ? "Sending Proposal..." : "Submit Project Proposal"}</span>
                  </button>

                  <p className="text-[11px] text-center text-zinc-500">
                    🔒 Confidential. Non-Disclosure Agreement (NDA) respected upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
