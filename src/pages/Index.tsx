
import React from 'react';
import { Helmet } from 'react-helmet';
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
import CTASection from "@/components/CtaSection";

const Index = () => {
  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Typing Services Dubai | Document & Translation Services | Adnan Ali Typing</title>
        <meta name="description" content="Adnan Ali Typing offers professional typing services in Dubai, document processing, visa services, Emirates ID, translation and business setup services with over 25 years of experience." />
        <meta name="keywords" content="Typing Services Dubai, Online Typing Services UAE, Legal Document Typing Dubai, Arabic English Typing Services, Fast Typing Services Dubai, Document Translation Services UAE, Professional Typing Center Dubai, Business Typing Solutions UAE, Resume Typing Services Dubai, Certified Typing Services UAE" />
        <link rel="canonical" href="https://adnanalityping.com" />
      </Helmet>
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
