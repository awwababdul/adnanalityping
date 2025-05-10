
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import PopularServices from "@/components/PopularServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PartnersSection from "@/components/PartnersSection";
import StatsSection from "@/components/StatsSection";
import SEOContentBlock from "@/components/SEOContentBlock";
import LocalServiceAreas from "@/components/LocalServiceAreas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Typing Services Dubai | Document & Translation Services | Adnan Ali Typing</title>
        <meta name="description" content="Professional typing services in Dubai - legal document typing, Arabic English translation, business document solutions, and certified typing services with 25+ years experience. Fast, accurate and trusted." />
        <link rel="canonical" href="https://adnanalityping.com" />
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <CategoryCards />
        <PopularServices />
        <WhyChooseUs />
        <ProcessSteps />
        <TestimonialsSection />
        <StatsSection />
        <PartnersSection />
        <LocalServiceAreas />
        <SEOContentBlock />
        <CTASection onGetStarted={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")} />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadCaptureModal scrollThreshold={50} timeDelay={10000} />
    </div>
  );
};

export default Home;
