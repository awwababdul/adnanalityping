
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
import LocalServiceAreas from "@/components/LocalServiceAreas";
import SEOContentBlock from "@/components/SEOContentBlock";
import ServiceFinder from '@/components/ServiceFinder';

const Index = () => {
  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Adnan Ali Typing | No More Paperwork Headaches | Dubai Document Services</title>
        <meta name="description" content="Let us handle all your UAE paperwork so you can focus on what matters most. 24+ years of excellence in visa processing, Emirates ID, business setup, and all government services. Fast, accurate and trusted." />
        <meta name="keywords" content="Visa Processing Dubai, Emirates ID Renewal, Tasheel Services, GDRFA Services Dubai, DHA Medical Services, Business License Dubai, Amer Services, UAE Document Services, Navakaz Resolution, Legal Document Services Dubai" />
        <link rel="canonical" href="https://adnanalityping.com" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Adnan Ali Typing | No More Paperwork Headaches | Dubai Document & Visa Services" />
        <meta property="og:description" content="Let us handle all your UAE paperwork so you can focus on what matters most. 24+ years of excellence in visa processing, Emirates ID, and all government services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adnanalityping.com" />
        <meta property="og:image" content="https://adnanalityping.com/og-image.png" />
        
        {/* Twitter Card data */}
        <meta name="twitter:title" content="Adnan Ali Typing - UAE Document Services Experts" />
        <meta name="twitter:description" content="Handling all your UAE paperwork since 2000. Visa, Emirates ID, business setup, and all government services with fast turnaround." />
        <meta name="twitter:image" content="https://adnanalityping.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <HeroSection />
      <ServiceFinder />
      <ServiceHighlights />
      <HeroFeatures />
      <WhyChooseUs />
      <ProcessSteps />
      <TrendingServices />
      <TestimonialsSection />
      <StatsSection />
      <PartnersSection />
      <LocalServiceAreas />
      <SEOContentBlock />
      <CTASection onGetStarted={handleGetStarted} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
