import React from "react";
import HeroSection from "@/components/HeroSection";
import WhatsAppSimulator from "@/components/WhatsAppSimulator";
import MarqueeBanner from "@/components/MarqueeBanner";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackGrid from "@/components/TechStackGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import FounderSection from "@/components/FounderSection";
import ProcessFlow from "@/components/ProcessFlow";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Dynamic for instant updates

export default function HomePage() {
  const content = getSiteContent();

  return (
    <div className="relative">
      {/* 1. Outcome-Driven Hero Section with Typewriter Effect */}
      <HeroSection content={content} />

      {/* 2. Interactive Live WhatsApp AI Receptionist Simulator */}
      <WhatsAppSimulator />

      {/* 3. Marquee Banner */}
      <MarqueeBanner customItems={content?.general?.marqueeText} />

      {/* 4. Transparent Productized Pricing & Packages ($999 Growth Kit) */}
      <PricingSection />

      {/* 5. Featured Healthcare & SaaS Case Studies */}
      <FeaturedProjects content={content} />

      {/* 6. Authenticated Proof Pillars */}
      <TestimonialsSection content={content} />

      {/* 7. Founder Spotlight: Abhishek Jain (1st Rank Hackathon Winner) */}
      <FounderSection content={content} />

      {/* 8. What We Build For You (Services Console) */}
      <ServicesSection content={content} />

      {/* 9. Tech Stack & Impact Stats */}
      <TechStackGrid content={content} />

      {/* 10. From Idea to Launch in 7 Days (Process Flow) */}
      <ProcessFlow content={content} showHeroGraphic={false} />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Bottom Conversion CTA Banner */}
      <CtaBanner content={content} />
    </div>
  );
}
