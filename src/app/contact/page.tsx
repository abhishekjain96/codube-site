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
  "Conversion-Engineered Website",
  "24/7 WhatsApp AI Receptionist",
  "Complete Business Growth Kit ($999)",
  "Healthcare & Clinic System",
  "Custom SaaS & ERP Platform",
  "Other Technical Consultation",
];

const budgetOptions = [
  "$499 (AI WhatsApp Bot)",
  "$999 (Complete Growth Kit)",
  "$2,499+ (Custom SaaS)",
  "Enterprise Custom",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Complete Business Growth Kit ($999)",
    budget: "$999 (Complete Growth Kit)",
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

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#059669", "#6366F1", "#0F172A"],
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
    <div className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              START THE CONVERSATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Extraordinary.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Tell us about your product vision. We review every submission personally and respond with an exact architecture proposal in under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Direct Connect & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-emerald-700">
                    Direct WhatsApp Desk
                  </div>
                  <div className="text-lg font-black text-slate-900 tracking-wide">
                    +91 96726 60338
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Need an immediate response? Chat directly with Founder &amp; Lead Architect <strong>Abhishek Jain</strong> on WhatsApp.
              </p>

              <a
                href="https://wa.me/919672660338"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all"
              >
                <span>Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-slate-500">
                    Official Inquiries
                  </div>
                  <a
                    href="mailto:hello@codube.com"
                    className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    hello@codube.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send RFP briefs, architectural requirements, or enterprise proposals directly to hello@codube.com.
              </p>
            </div>

            {/* Response Time & Location */}
            <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Guaranteed response time: <strong>under 2 hours</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Headquartered in Jaipur, India • Delivering Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Free 30-min Technical Architecture Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-xs font-mono text-emerald-700">
                      Status: {emailStatus || "Saved & Sent to hello@codube.com"}
                    </p>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your project proposal has been received. Our team will review your requirements and respond at <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
                    <div className="text-xs text-slate-600">Want an instant conversation on your proposal?</div>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Forward Proposal to WhatsApp (+91 96726 60338)</span>
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
                        service: "Complete Business Growth Kit ($999)",
                        budget: "$999 (Complete Growth Kit)",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Name <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
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
                              ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
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
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {b.split(" ")[0]} {b.split(" ")[1] || ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Project Details &amp; Requirements <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what you are looking to build, expected timelines, key features..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-sm font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-md transition-all duration-300 disabled:opacity-50 active:scale-95"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>{loading ? "Sending Proposal..." : "Submit Project Proposal"}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 Confidential. Mutual Non-Disclosure Agreement (NDA) provided upon request.
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
