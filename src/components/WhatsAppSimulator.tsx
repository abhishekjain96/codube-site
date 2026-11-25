"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Phone,
  Video,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  CheckCheck,
  Stethoscope,
  Building2,
  Smile,
  Paperclip,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";

type PersonaKey = "clinic" | "realestate";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const personaConfigs = {
  clinic: {
    name: "Dr. Joy Clinic Network",
    subtitle: "Verified Healthcare AI • Instant Booking",
    avatarIcon: "🏥",
    verified: true,
    initialGreeting:
      "Hello! Welcome to Dr. Joy Dental & Medical Clinic. 🏥✨\n\nI am the 24/7 AI Receptionist. I can help you check doctor timings, consultation fees, or confirm an appointment slot in 30 seconds. How can I help you today?",
    quickReplies: [
      "📅 Book an Appointment",
      "⏰ What are the timings & fees?",
      "📍 Send Clinic Location",
      "🩺 Available Specialists Today",
    ],
    responses: {
      "📅 Book an Appointment":
        "✅ I'd be happy to book that for you! Dr. Rajesh Sharma has 2 slots available today:\n\n1️⃣ 04:30 PM (Evening)\n2️⃣ 06:45 PM (Evening)\n\n💰 Consultation Fee: $50.\nReply with your preferred slot number and patient name to lock your priority booking instantly!",
      "⏰ What are the timings & fees?":
        "🕒 Clinic OPD Timings:\n• Mon - Fri: 09:00 AM - 07:30 PM\n• Saturday: 10:00 AM - 04:00 PM\n• Sunday: Emergency & Prior Bookings Only\n\n💰 Consultation Fee: $50 (Follow-up visit within 7 days is FREE).\n\nWould you like me to reserve a priority token for you?",
      "📍 Send Clinic Location":
        "📍 Downtown Medical Centre:\nSuite 402, Healthcare Plaza, Downtown Medical District.\n\n🗺️ Google Maps: https://maps.google.com/?q=DowntownMedicalCentre\n🚗 Free patient valet parking available on-site.\n\nShall I book an appointment for your visit?",
      "🩺 Available Specialists Today":
        "👨‍⚕️ Specialists on duty today:\n1. Dr. Rajesh Sharma — Senior General Physician & Cardiologist\n2. Dr. Sarah Miller — Senior Dental Surgeon & Implantologist\n3. Dr. Ankit Jain — Orthopedic Specialist\n\nWhich doctor would you like to consult?",
      default:
        "Thank you for your message! Our clinic AI has recorded your query. Would you like me to book an appointment slot or check doctor availability?",
    },
  },
  realestate: {
    name: "Skyline Luxury Residences",
    subtitle: "Official Sales AI Assistant • 24/7 Active",
    avatarIcon: "🏢",
    verified: true,
    initialGreeting:
      "Hello! Welcome to Skyline Luxury Residences. 🏢✨\n\nLooking for ready-to-move 2 Bedroom, 3 Bedroom luxury units, or exclusive penthouses? I can send you the brochure, price sheet, or schedule a VIP site visit. What would you like to know?",
    quickReplies: [
      "📑 Send Brochure & Pricing",
      "🏡 Schedule Site Visit this Weekend",
      "🔑 Available Unit Layouts",
      "💰 Bank Loan & Payment Plans",
    ],
    responses: {
      "📑 Send Brochure & Pricing":
        "📑 Current pricing and unit availability for Skyline Residences:\n\n• 2 Bedroom Luxury (1,280 sq.ft) — $350,000*\n• 3 Bedroom Premium (1,820 sq.ft) — $520,000*\n• 4 Bedroom Sky Penthouse (3,400 sq.ft) — $950,000*\n\n📄 Official Brochure: https://skyline.codube.client/brochure.pdf\n\nWould you like to schedule a private site visit?",
      "🏡 Schedule Site Visit this Weekend":
        "🎉 Your VIP Site Visit is almost set!\n\n📅 Date: This Saturday / Sunday\n⏰ Preferred Time: 11:30 AM or 04:30 PM\n📍 Location: Skyline Towers, Prime Avenue\n\nOur Senior Property Consultant will keep the sample luxury suite ready. What time suits you best?",
      "🔑 Available Unit Layouts":
        "📐 Unit Features & Configurations:\n• High-ceiling panoramic glass windows with skyline views\n• Designer Italian modular kitchen & smart home automation\n• Rooftop Infinity Pool, Private Gym & Concierge\n• Exclusive pre-launch incentives currently active!\n\nShall I schedule your site visit to view the sample suite?",
      "💰 Bank Loan & Payment Plans":
        "🏦 Financial Details & Flexible Plans:\n• Pre-approved by leading international and tier-1 banks\n• Flexible 20/80 Construction-Linked Payment Plan\n• Zero Brokerage • Direct Developer Booking\n\nWould you like our private wealth officer to reach out?",
      default:
        "Thank you! Our Real Estate AI has noted your request. Would you like me to connect you with our project director on WhatsApp or send the full digital floor plan?",
    },
  },
};

export default function WhatsAppSimulator() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("clinic");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const config = personaConfigs[activePersona];

  function getCurrentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  useEffect(() => {
    setIsTyping(false);
    setMessages([
      {
        id: "m0",
        sender: "bot",
        text: config.initialGreeting,
        time: getCurrentTime(),
      },
    ]);
  }, [activePersona]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: textToSend,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText =
        config.responses[textToSend as keyof typeof config.responses] ||
        config.responses.default;

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: botResponseText,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setIsTyping(false);
    setMessages([
      {
        id: "m0",
        sender: "bot",
        text: config.initialGreeting,
        time: getCurrentTime(),
      },
    ]);
  };

  const whatsappSetupUrl = `https://wa.me/919672660338?text=${encodeURIComponent(
    `Hi Abhishek, I tested the WhatsApp AI Simulator on Codube and want to set this up for my ${
      activePersona === "clinic" ? "Clinic / Healthcare Practice" : "Real Estate / Business"
    }.`
  )}`;

  return (
    <section className="relative py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" id="ai-simulator">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Bot className="w-3.5 h-3.5 text-emerald-600" />
            <span>PLAYABLE INTERACTIVE DEMO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Test Our 24/7 WhatsApp AI{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Receptionist Live.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Click any question below to see how our AI receptionist answers pricing, checks availability, and confirms bookings instantly in real-time.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm mt-3 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActivePersona("clinic")}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activePersona === "clinic"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Stethoscope className="w-4 h-4 shrink-0" />
              <span>🏥 Clinic / Doctor Bot</span>
            </button>

            <button
              type="button"
              onClick={() => setActivePersona("realestate")}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activePersona === "realestate"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>🏢 Real Estate / Business Bot</span>
            </button>
          </div>
        </div>

        {/* REALISTIC iPHONE MOCKUP CONTAINER */}
        <div className="w-full max-w-[340px] sm:max-w-[390px] md:max-w-[410px] mx-auto relative select-none">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-2xl opacity-75 rounded-[56px] pointer-events-none" />

          {/* Titanium iPhone Outer Chassis */}
          <div className="relative rounded-[46px] sm:rounded-[52px] p-[8px] sm:p-[10px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-[0_25px_70px_rgba(15,23,42,0.14)] border border-slate-300">
            {/* iPhone Screen Container */}
            <div className="rounded-[38px] sm:rounded-[44px] overflow-hidden bg-[#EFEAE2] flex flex-col h-[540px] sm:h-[600px] border border-slate-300/80 relative">
              
              {/* TOP iOS STATUS BAR */}
              <div className="bg-[#008069] pt-2 pb-1.5 px-5 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight relative z-20">
                <span className="w-12 text-left font-mono">9:41</span>
                {/* Dynamic Island */}
                <div className="w-22 sm:w-26 h-4 sm:h-5 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <div className="w-1 h-1 rounded-full bg-emerald-950" />
                </div>
                <div className="w-12 flex items-center justify-end gap-1.5 text-white">
                  <span className="text-[10px] font-bold">5G</span>
                  <div className="w-4 h-2.5 border border-white rounded-[3px] p-[1px] flex items-center">
                    <div className="w-full h-full bg-white rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* REALISTIC WHATSAPP APP HEADER */}
              <div className="bg-[#008069] px-3 sm:px-4 py-2.5 text-white flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex items-center text-white cursor-pointer">
                    <ChevronLeft className="w-5 h-5 -mr-1" />
                  </div>

                  <div className="relative">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-base sm:text-lg shadow-sm border border-white/30">
                      {config.avatarIcon}
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#008069]" />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight truncate max-w-[140px] sm:max-w-[170px]">
                        {config.name}
                      </h4>
                      <span className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center text-[9px] text-[#008069] font-black shrink-0">
                        ✓
                      </span>
                    </div>
                    <div className="text-[10px] text-emerald-100 font-normal">
                      {isTyping ? (
                        <span className="font-semibold animate-pulse text-white">typing...</span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-pulse" />
                          <span>online • 24/7 AI Receptionist</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white">
                  <button
                    type="button"
                    onClick={handleReset}
                    title="Restart chat"
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* CHAT MESSAGES BODY */}
              <div
                ref={chatContainerRef}
                className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 text-left text-xs sm:text-[13px] scroll-smooth"
                style={{
                  backgroundColor: "#EFEAE2",
                  backgroundImage: `radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              >
                {/* Security Encryption Pill */}
                <div className="text-center my-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFEECD] text-[10px] text-[#54656F] border border-amber-200/50 shadow-xs">
                    <span>🔒 End-to-end encrypted with Codube AI</span>
                  </span>
                </div>

                {/* Message List */}
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[86%] rounded-2xl p-2.5 sm:p-3 shadow-sm relative leading-relaxed whitespace-pre-line text-xs sm:text-[12.5px] ${
                        m.sender === "user"
                          ? "bg-[#D9FDD3] text-[#111B21] rounded-tr-none border border-emerald-200/50"
                          : "bg-white text-[#111B21] rounded-tl-none border border-slate-200/60"
                      }`}
                    >
                      <p>{m.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781]">
                        <span>{m.time}</span>
                        {m.sender === "user" && (
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Animated Typing Bubble */}
                {isTyping && (
                  <div className="flex items-start">
                    <div className="bg-white rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-sm border border-slate-200/60 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#008069] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#008069] animate-bounce [animation-delay:0.18s]" />
                      <span className="w-2 h-2 rounded-full bg-[#008069] animate-bounce [animation-delay:0.36s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* QUICK-REPLY SUGGESTED PILLS */}
              <div className="p-2 sm:p-2.5 bg-white/95 border-t border-slate-200 backdrop-blur-md">
                <div className="text-[10px] text-slate-500 font-mono text-left mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>TAP A QUESTION TO TEST BOT REPLY:</span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {config.quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white border border-slate-200 text-[10px] sm:text-[11px] font-medium text-slate-800 transition-all active:scale-95 text-left disabled:opacity-50 cursor-pointer shadow-xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* CHAT INPUT BAR */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="bg-[#F0F2F5] p-2 flex items-center gap-1.5 sm:gap-2 border-t border-slate-200"
              >
                <div className="flex items-center gap-1 text-slate-500 pl-1">
                  <Smile className="w-4 h-4 cursor-pointer hover:text-slate-800" />
                  <Paperclip className="w-4 h-4 cursor-pointer hover:text-slate-800" />
                </div>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message or tap above..."
                  className="flex-1 bg-white text-[11px] sm:text-xs text-slate-900 placeholder-slate-400 px-3 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-emerald-500 border border-slate-200"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#008069] text-white flex items-center justify-center hover:bg-emerald-700 transition-colors disabled:opacity-40 cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>

              {/* iOS BOTTOM HOME INDICATOR */}
              <div className="bg-[#F0F2F5] pb-1 pt-0.5 flex justify-center">
                <div className="w-28 sm:w-32 h-1 bg-slate-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION FOR BUSINESS OWNERS */}
        <div className="mt-8 sm:mt-10 space-y-3 px-2">
          <a
            href={whatsappSetupUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
            <span>Want This AI Bot For Your Business? Book Setup →</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </a>

          <p className="text-[11px] sm:text-xs text-slate-500">
            ⚡ Turnkey setup in 3 to 7 days • Directly integrated with your official WhatsApp business number
          </p>
        </div>
      </div>
    </section>
  );
}
