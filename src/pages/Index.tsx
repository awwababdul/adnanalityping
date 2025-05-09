
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

const Index = () => {
  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Typing Services Dubai | Document & Translation Services | Adnan Ali Typing</title>
        <meta name="description" content="Professional typing services in Dubai - legal document typing, Arabic English translation, business document solutions, and certified typing services with 25+ years experience. Fast, accurate and trusted." />
        <meta name="keywords" content="Typing Services Dubai, Online Typing Services UAE, Legal Document Typing Dubai, Arabic English Typing Services, Fast Typing Services Dubai, Document Translation Services UAE, Professional Typing Center Dubai, Business Typing Solutions UAE, Resume Typing Services Dubai, Certified Typing Services UAE" />
        <link rel="canonical" href="https://adnanalityping.com" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Certified Typing & Translation Services in Dubai – Fast, Accurate & Trusted" />
        <meta property="og:description" content="25+ years of excellence in professional document services. UAE's most trusted typing center for all your documentation needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adnanalityping.com" />
        <meta property="og:image" content="https://adnanalityping.com/og-image.png" />
        
        {/* Twitter Card data */}
        <meta name="twitter:title" content="Adnan Ali Typing - Premier Typing Services Dubai" />
        <meta name="twitter:description" content="Professional document processing, visa services, Emirates ID, and business setup services in Dubai with over 25 years of experience." />
        <meta name="twitter:image" content="https://adnanalityping.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
      <LocalServiceAreas />
      <SEOContentBlock />
      <CTASection onGetStarted={handleGetStarted} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
