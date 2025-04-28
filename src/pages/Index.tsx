
import React from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import HeroFeatures from "@/components/HeroFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import TrendingServices from "@/components/TrendingServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceHighlights />
      <HeroFeatures />
      <WhyChooseUs />
      <ProcessSteps />
      <TrendingServices />
      <TestimonialsSection />
      <StatsSection />
      <PartnersSection />
      <CTASection onGetStarted={handleGetStarted} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
