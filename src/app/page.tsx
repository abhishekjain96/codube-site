import React from "react";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import TechStackGrid from "@/components/TechStackGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import FounderSection from "@/components/FounderSection";
import ProcessFlow from "@/components/ProcessFlow";

import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const revalidate = 0; // Dynamic for instant admin updates

export default function HomePage() {
  const content = getSiteContent();

  return (
    <div className="relative">
      {/* 1. Hero Section (Clean modern presentation) */}
      <HeroSection content={content} />

      {/* 2. Infinite Neon Marquee Banner with Programming Languages Loop */}
      <MarqueeBanner customItems={content?.general?.marqueeText} />

      {/* 3. What We Build For You (Services) */}
      <ServicesSection content={content} />

      {/* 4. Tech Stack & High-Impact Stats */}
      <TechStackGrid content={content} />

      {/* 5. Featured Projects (ScanTaker & MedLearnings) */}
      <FeaturedProjects content={content} />

      {/* 6. Founder Showcase: Abhishek Jain (1st Rank Hackathon Winner) */}
      <FounderSection content={content} />

      {/* 7. Interactive Project Cost & Timeline Estimator (Alag Level Feature) */}


      {/* 8. From Idea to Launch (Process Flow) */}
      <ProcessFlow content={content} showHeroGraphic={false} />

      {/* 9. Infinite Animated Testimonials Loop */}
      <TestimonialsSection content={content} />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 11. Why Businesses Choose Codube? */}
      <WhyChooseUs content={content} />

      {/* 12. Bottom CTA Banner */}
      <CtaBanner content={content} />
    </div>
  );
}
