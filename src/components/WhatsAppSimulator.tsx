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
  MoreVertical,
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

  // Helper for timestamp
  function getCurrentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  // Initialize chat when persona changes
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

  // Internal-only chat scroll (NEVER scrolls the window)
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

    // Realistic AI reply delay
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
    <section className="relative py-16 sm:py-24 md:py-28 bg-[#040805] overflow-hidden" id="ai-simulator">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-[radial-gradient(circle,rgba(37,211,102,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(37,211,102,0.25)]">
            <Bot className="w-3.5 h-3.5 text-[#25D366]" />
            <span>PLAYABLE INTERACTIVE DEMO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Test Our 24/7 WhatsApp AI{" "}
            <span className="text-[#25D366] drop-shadow-[0_0_25px_rgba(37,211,102,0.45)]">
              Receptionist Live.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2">
            Click any question below to see how our AI receptionist answers pricing, checks availability, and confirms bookings instantly in real-time.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-[#080D0A] border border-white/10 shadow-xl mt-3 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActivePersona("clinic")}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activePersona === "clinic"
                  ? "bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                  : "text-zinc-400 hover:text-white"
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
                  ? "bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>🏢 Real Estate / Business Bot</span>
            </button>
          </div>
        </div>

        {/* REALISTIC iPHONE MOCKUP CONTAINER */}
        <div className="w-full max-w-[360px] sm:max-w-[410px] md:max-w-[430px] mx-auto relative select-none">
          {/* Subtle Outer Neon Aura */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#25D366]/25 via-[#B8FF00]/10 to-transparent blur-2xl opacity-75 rounded-[56px] pointer-events-none" />

          {/* Hardware Side Buttons */}
          <div className="absolute -left-[5px] top-24 w-[3px] h-9 bg-zinc-600 rounded-l-sm hidden sm:block" />
          <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-zinc-600 rounded-l-sm hidden sm:block" />
          <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-zinc-600 rounded-l-sm hidden sm:block" />
          <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-zinc-600 rounded-r-sm hidden sm:block" />

          {/* Titanium iPhone Outer Chassis */}
          <div className="relative rounded-[46px] sm:rounded-[52px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#353A40] via-[#1E2226] to-[#0E1012] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(37,211,102,0.15)] border border-zinc-600/70">
            {/* iPhone Glass Screen */}
            <div className="rounded-[38px] sm:rounded-[44px] overflow-hidden bg-[#0B141A] flex flex-col h-[560px] sm:h-[620px] border border-black/90 relative">
              
              {/* TOP iOS STATUS BAR & DYNAMIC ISLAND */}
              <div className="bg-[#1F2C34] pt-2 pb-1.5 px-5 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight relative z-20">
                {/* Time */}
                <span className="w-12 text-left font-mono">9:41</span>

                {/* iPhone Dynamic Island */}
                <div className="w-24 sm:w-28 h-5 sm:h-5.5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#10141d] border border-zinc-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#051e11]" />
                </div>

                {/* iOS Icons: Signal, 5G, Battery */}
                <div className="w-12 flex items-center justify-end gap-1.5 text-zinc-300">
                  <span className="text-[10px] font-bold">5G</span>
                  <div className="w-4 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
                    <div className="w-full h-full bg-[#25D366] rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* REALISTIC WHATSAPP APP HEADER */}
              <div className="bg-[#1F2C34] px-3 sm:px-4 py-2.5 text-white flex items-center justify-between border-b border-black/30 shadow-md z-10">
                {/* Back Arrow & Avatar & Title */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex items-center text-zinc-300 hover:text-white cursor-pointer">
                    <ChevronLeft className="w-5 h-5 -mr-1" />
                  </div>

                  {/* Company / Clinic Profile Photo */}
                  <div className="relative">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#005C4B] to-[#128C7E] flex items-center justify-center text-base sm:text-lg shadow-md border border-white/20">
                      {config.avatarIcon}
                    </div>
                    {/* Live Online Dot */}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1F2C34]" />
                  </div>

                  {/* Header Title & Subtitle */}
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight truncate max-w-[140px] sm:max-w-[170px]">
                        {config.name}
                      </h4>
                      {/* Verified Badge */}
                      <span className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-[9px] text-black font-black shrink-0">
                        ✓
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-300 font-normal">
                      {isTyping ? (
                        <span className="text-[#25D366] font-semibold animate-pulse">typing...</span>
                      ) : (
                        <span className="text-[#25D366] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
                          <span>online • 24/7 AI Receptionist</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Action Icons & WhatsApp Brand Logo */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-300">
                  <Video className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer hidden sm:block" />
                  <Phone className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer hidden sm:block" />

                  {/* Official WhatsApp Logo Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-black shadow-[0_0_10px_rgba(37,211,102,0.6)]" title="Official WhatsApp Business AI">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.791.88h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.769-5.766zm3.364 8.163c-.146.409-.854.787-1.18.825-.326.038-.727.142-2.385-.536-1.658-.678-2.73-2.366-2.812-2.476-.083-.11-.663-.883-.663-1.683 0-.8.414-1.193.562-1.353.148-.16.326-.201.435-.201.109 0 .217.001.312.006.1.005.234-.038.366.279.136.326.463 1.13.504 1.212.041.082.069.178.014.288-.055.11-.083.178-.163.274-.082.096-.172.214-.246.287-.082.082-.167.172-.072.335.095.163.424.7.91 1.133.626.556 1.154.728 1.317.81.163.082.259.069.355-.041.096-.11.409-.477.518-.641.109-.163.218-.137.368-.082.15.055.952.449 1.116.531.163.082.273.123.313.191.041.069.041.396-.105.805z" />
                    </svg>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    title="Restart chat"
                    className="p-1 rounded-md text-zinc-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* CHAT MESSAGES BODY WITH AUTHENTIC WHATSAPP DOODLE BACKGROUND */}
              <div
                ref={chatContainerRef}
                className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 text-left text-xs sm:text-[13px] scroll-smooth"
                style={{
                  backgroundColor: "#0B141A",
                  backgroundImage: `radial-gradient(rgba(18,140,126,0.12) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              >
                {/* Security Encryption Pill */}
                <div className="text-center my-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#182229] text-[10px] text-zinc-400 border border-white/5 shadow-sm">
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
                      className={`max-w-[86%] rounded-2xl p-2.5 sm:p-3 shadow-md relative leading-relaxed whitespace-pre-line text-xs sm:text-[12.5px] ${
                        m.sender === "user"
                          ? "bg-[#005C4B] text-white rounded-tr-none"
                          : "bg-[#202C33] text-zinc-100 rounded-tl-none border border-white/5"
                      }`}
                    >
                      <p>{m.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-400">
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
                    <div className="bg-[#202C33] rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-md border border-white/5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.18s]" />
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.36s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* QUICK-REPLY SUGGESTED PILLS */}
              <div className="p-2 sm:p-2.5 bg-[#1F2C34]/95 border-t border-white/[0.08] backdrop-blur-md">
                <div className="text-[10px] text-zinc-400 font-mono text-left mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#25D366]" />
                  <span>TAP A QUESTION TO TEST BOT REPLY:</span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {config.quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1.5 rounded-full bg-white/[0.07] hover:bg-[#25D366] hover:text-black border border-white/10 text-[10px] sm:text-[11px] font-medium text-white transition-all active:scale-95 text-left disabled:opacity-50 cursor-pointer"
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
                className="bg-[#1F2C34] p-2 flex items-center gap-1.5 sm:gap-2 border-t border-white/10"
              >
                <div className="flex items-center gap-1 text-zinc-400 pl-1">
                  <Smile className="w-4 h-4 cursor-pointer hover:text-white" />
                  <Paperclip className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message or tap above..."
                  className="flex-1 bg-[#2A3942] text-[11px] sm:text-xs text-white placeholder-zinc-400 px-3 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center hover:bg-[#25D366] hover:text-black transition-colors disabled:opacity-40 cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>

              {/* iOS BOTTOM HOME INDICATOR BAR */}
              <div className="bg-[#1F2C34] pb-1 pt-0.5 flex justify-center">
                <div className="w-28 sm:w-32 h-1 bg-white/40 rounded-full" />
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-bold bg-[#25D366] text-black hover:bg-[#20bd5a] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
            <span>Want This AI Bot For Your Business? Book Setup →</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </a>

          <p className="text-[11px] sm:text-xs text-zinc-400">
            ⚡ Turnkey setup in 3 to 7 days • Directly integrated with your official WhatsApp business number
          </p>
        </div>
      </div>
    </section>
  );
}
