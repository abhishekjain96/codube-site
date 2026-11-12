"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Bot,
  Building2,
  Stethoscope,
  Smile,
  Paperclip,
} from "lucide-react";

type PersonaKey = "clinic" | "realestate";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  isQuickReply?: boolean;
}

const personaConfigs = {
  clinic: {
    name: "Dr. Rajesh Sharma Clinic",
    subtitle: "Verified Healthcare AI • Instant Booking",
    avatar: "🏥",
    initialGreeting:
      "Namaste! 🙏 Welcome to Dr. Rajesh Sharma Multispeciality Clinic.\n\nI am the 24/7 AI Receptionist. I can help you check doctor timings, consult fees, or book an appointment in 30 seconds. How can I help you today?",
    quickReplies: [
      "📅 Book an Appointment",
      "⏰ What are the timings & fees?",
      "📍 Send Clinic Location",
      "🩺 Available Specialists Today",
    ],
    responses: {
      "📅 Book an Appointment":
        "✅ I'd be happy to book that for you! Dr. Rajesh Sharma has 2 slots available today:\n\n1️⃣ 05:30 PM (Evening)\n2️⃣ 07:15 PM (Evening)\n\nConsultation Fee: ₹500.\nReply with your preferred slot number and patient name to lock your priority token instantly!",
      "⏰ What are the timings & fees?":
        "🕒 Clinic OPD Timings:\n• Morning: 10:00 AM - 01:30 PM\n• Evening: 05:00 PM - 08:30 PM\n• Sunday: 10:00 AM - 01:00 PM (Emergency only)\n\n💰 Consultation Fee: ₹500 (Follow-up within 7 days is FREE).\n\nWould you like me to reserve a slot for you?",
      "📍 Send Clinic Location":
        "📍 Apex Healthcare Centre:\nPlot 18, Tonk Road, Near SMS Hospital, Jaipur, Rajasthan 302015.\n\n🗺️ Google Maps: https://maps.google.com/?q=ApexClinicJaipur\n🚗 Free patient parking available on-site.\n\nShall I book an appointment for your visit?",
      "🩺 Available Specialists Today":
        "👨‍⚕️ Specialists on duty today:\n1. Dr. Rajesh Sharma — Senior General Physician & Cardiologist\n2. Dr. Priya Verma — Dermatologist & Cosmetologist\n3. Dr. Ankit Jain — Orthopedic Surgeon\n\nWhich doctor would you like to consult?",
      default:
        "Thank you for your message! Our clinic AI has recorded your request. For urgent medical queries, please call emergency reception or book an immediate OPD slot. Would you like to confirm an appointment?",
    },
  },
  realestate: {
    name: "Skyline Luxury Residences",
    subtitle: "Official Sales AI Assistant • 24/7 Active",
    avatar: "🏢",
    initialGreeting:
      "Hello! Welcome to Skyline Heights Luxury Residences, Jaipur. 🏢✨\n\nLooking for ready-to-move 2 BHK, 3 BHK luxury flats, or exclusive penthouses? I can send you the brochure, price list, or schedule a VIP site visit. What would you like to know?",
    quickReplies: [
      "📑 Send Brochure & Pricing",
      "🏡 Schedule Site Visit this Weekend",
      "🔑 Available 2 BHK & 3 BHK Layouts",
      "💰 Bank Loan & Payment Plans",
    ],
    responses: {
      "📑 Send Brochure & Pricing":
        "📑 Here are the current pricing and unit details for Skyline Heights:\n\n• 2 BHK Luxury (1,280 sq.ft) — ₹68.5 Lakhs*\n• 3 BHK Premium (1,820 sq.ft) — ₹98.0 Lakhs*\n• 4 BHK Royal Penthouse — ₹1.65 Cr*\n\n📄 Official Brochure: https://skyline.codube.client/brochure.pdf\n\nWould you like a sample floor plan or a site tour?",
      "🏡 Schedule Site Visit this Weekend":
        "🎉 Your VIP Site Visit is almost set!\n\n📅 Date: This Saturday / Sunday\n⏰ Preferred Time: 11:30 AM or 04:30 PM\n📍 Location: Skyline Towers, Airport Road, Jagatpura, Jaipur\n\nOur Senior Sales Consultant Amit will keep the sample flat ready. What time suits you best?",
      "🔑 Available 2 BHK & 3 BHK Layouts":
        "📐 Unit Features & Configurations:\n• 100% Vastu Compliant with modular kitchen\n• 2 Large Balconies with Aravalli hills view\n• Clubhouse with Rooftop Infinity Pool & Gym\n• Only 8 units left under inaugural pre-launch discount!\n\nShall I schedule your site visit to view the sample flat?",
      "💰 Bank Loan & Payment Plans":
        "🏦 Financial Details & Flexible Plans:\n• Pre-approved by SBI, HDFC, and ICICI Bank with 8.4% interest\n• 10% Down Payment • 80% Bank Loan • 10% on Possession\n• Zero Brokerage • Direct Developer Booking\n\nWould you like our loan officer to contact you?",
      default:
        "Thank you! Our Real Estate AI has noted your request. Would you like me to connect you with our project relationship manager directly on call or send the layout brochure?",
    },
  },
};

export default function WhatsAppSimulator() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("clinic");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const config = personaConfigs[activePersona];

  // Initialize chat when persona changes
  useEffect(() => {
    setMessages([
      {
        id: "m0",
        sender: "bot",
        text: config.initialGreeting,
        time: getCurrentTime(),
      },
    ]);
  }, [activePersona]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function getCurrentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

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

    // Simulate realistic AI typing delay
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
    }, 850);
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
    <section className="relative py-20 md:py-28 bg-[#040805] overflow-hidden" id="ai-simulator">
      {/* Background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(37,211,102,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(37,211,102,0.25)]">
            <Bot className="w-4 h-4 text-[#25D366]" />
            <span>PLAYABLE INTERACTIVE DEMO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Test Our 24/7 WhatsApp AI{" "}
            <span className="text-[#25D366] drop-shadow-[0_0_25px_rgba(37,211,102,0.45)]">
              Receptionist Live.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Click any question below to see how our AI receptionist answers pricing, checks availability, and books appointments instantly — zero staff required.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#080D0A] border border-white/10 shadow-xl mt-4">
            <button
              type="button"
              onClick={() => setActivePersona("clinic")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activePersona === "clinic"
                  ? "bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>🏥 Clinic / Doctor Bot</span>
            </button>

            <button
              type="button"
              onClick={() => setActivePersona("realestate")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activePersona === "realestate"
                  ? "bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>🏢 Real Estate / Business Bot</span>
            </button>
          </div>
        </div>

        {/* PHONE MOCKUP CONTAINER */}
        <div className="max-w-md mx-auto relative">
          {/* Subtle Outer Neon Aura */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#25D366]/30 via-[#B8FF00]/15 to-transparent blur-2xl opacity-75 rounded-[48px]" />

          {/* Phone Frame Chassis */}
          <div className="relative rounded-[40px] p-3 sm:p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black shadow-[0_25px_70px_rgba(0,0,0,0.95)] border-2 border-white/15">
            {/* Phone Screen Area */}
            <div className="rounded-[32px] overflow-hidden bg-[#0B141A] flex flex-col h-[580px] sm:h-[620px] border border-white/[0.08] relative">
              
              {/* WhatsApp App Header */}
              <div className="bg-[#1F2C34] px-4 py-3 text-white flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-lg shadow-inner">
                    {config.avatar}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-[190px]">
                        {config.name}
                      </h4>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-[9px] text-black font-black">
                        ✓
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#25D366] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>{isTyping ? "typing..." : "online • 24/7 AI Receptionist"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-4 h-4 opacity-75 hover:opacity-100 cursor-pointer" />
                  <Video className="w-4 h-4 opacity-75 hover:opacity-100 cursor-pointer" />
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

              {/* Chat Messages Body with WhatsApp Subtle Doodle Texture */}
              <div
                className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5 text-left text-xs sm:text-[13px]"
                style={{
                  backgroundImage: `radial-gradient(#128C7E 0.5px, transparent 0.5px)`,
                  backgroundSize: "24px 24px",
                  backgroundColor: "#0B141A",
                }}
              >
                {/* Security encryption pill */}
                <div className="text-center my-1">
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#182229] text-[10px] text-zinc-400 border border-white/5">
                    🔒 Messages are encrypted &amp; powered by Codube AI
                  </span>
                </div>

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 shadow-md relative leading-relaxed whitespace-pre-line ${
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
                    <div className="bg-[#202C33] rounded-2xl rounded-tl-none p-3 shadow-md border border-white/5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick-Reply Suggested Pills */}
              <div className="p-2.5 bg-[#1F2C34]/95 border-t border-white/[0.06] backdrop-blur-md">
                <div className="text-[10px] text-zinc-400 font-mono text-left mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#25D366]" />
                  <span>TAP A QUESTION TO TEST BOT REPLY:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {config.quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-[#25D366] hover:text-black border border-white/10 text-[11px] font-medium text-white transition-all active:scale-95 text-left disabled:opacity-50 cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="bg-[#1F2C34] p-2 flex items-center gap-2 border-t border-white/10"
              >
                <div className="flex items-center gap-1 text-zinc-400 pl-1">
                  <Smile className="w-4 h-4 cursor-pointer hover:text-white" />
                  <Paperclip className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message or tap questions above..."
                  className="flex-1 bg-[#2A3942] text-xs text-white placeholder-zinc-400 px-3.5 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center hover:bg-[#25D366] hover:text-black transition-colors disabled:opacity-40 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION FOR BUSINESS OWNERS */}
        <div className="mt-10 space-y-3">
          <a
            href={whatsappSetupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-[#25D366] text-black hover:bg-[#20bd5a] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Want This AI Bot For Your Business? Book Setup →</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <p className="text-xs text-zinc-400">
            ⚡ Setup delivered in 3 to 7 days • Connects directly with your official WhatsApp number
          </p>
        </div>
      </div>
    </section>
  );
}
