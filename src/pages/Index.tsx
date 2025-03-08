
import { Button } from "@/components/ui/button";
import { Building2, UserCheck, FileSignature, Printer, BookCheck, ArrowRight, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import TestimonialsSection from "@/components/TestimonialsSection";
import TypewriterText from "@/components/TypewriterText";
import AnimatedSection from "@/components/AnimatedSection";
import DubaiSkylineAnimation from "@/components/DubaiSkylineAnimation";

const Index = () => {
  const mainServices = [
    {
      id: "business-setup",
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Setup",
      description: "Complete service packages for business setup, family visas, and document processing",
      link: "/services/business-setup"
    },
    {
      id: "immigration",
      icon: <UserCheck className="w-8 h-8" />,
      title: "Immigration",
      description: "Comprehensive immigration services including visa processing and status change",
      link: "/services/immigration"
    },
    {
      id: "emirates-id",
      icon: <FileSignature className="w-8 h-8" />,
      title: "Emirates ID",
      description: "Emirates ID application, renewal, and replacement services",
      link: "/services/emirates-id"
    },
    {
      id: "document-processing",
      icon: <Printer className="w-8 h-8" />,
      title: "Document Processing",
      description: "Complete range of document processing services for all your needs",
      link: "/services/document-processing"
    },
    {
      id: "dha",
      icon: <BookCheck className="w-8 h-8" />,
      title: "DHA Services",
      description: "Dubai Health Authority services including medical fitness and licensing",
      link: "/services/dubai-health-authority"
    }
  ];

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10 pt-20 pb-32 md:pt-36 md:pb-40 flex items-center justify-center bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
        {/* Background elements with Dubai animation */}
        <div className="absolute inset-0 overflow-hidden">
          <DubaiSkylineAnimation className="w-full h-full" />
          <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Your Premier Partner for{" "}
                <TypewriterText 
                  texts={[
                    "Business Setup.", 
                    "Document Processing.", 
                    "Visa Services.",
                    "Government PRO Services.",
                    "Emirates ID."
                  ]} 
                  className="text-gradient font-bold"
                  typingSpeed={80}
                />
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Streamlined documentation services tailored for businesses and individuals in the UAE.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full animate-glow"
                  onClick={handleGetStarted}
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full bg-white/10 text-white"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Services Section with glass cards */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">What are you looking for?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive range of professional documentation and business services
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <AnimatedSection key={service.id} variant="fadeInUp" delay={index * 0.1}>
                <div className="service-card glass-card bg-white/5 backdrop-blur-lg p-8 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to={service.link} className="inline-block">
                    <Button 
                      variant="ghost" 
                      className="group w-full justify-between text-primary hover:text-primary/90 p-0"
                    >
                      Learn More 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Latest Offers Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Discover Latest Offers</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take advantage of our special promotional packages and discounted services
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Setup Package",
                description: "Complete business formation package including trade license and all necessary approvals",
                price: "Starting from AED 15,000",
                savings: "Save 20%"
              },
              {
                title: "Visa Services Bundle",
                description: "Family visa package including medical testing and Emirates ID",
                price: "Starting from AED 3,000",
                savings: "Save 15%"
              },
              {
                title: "Document Package",
                description: "Bundle of attestation and translation services at discounted rates",
                price: "Starting from AED 500",
                savings: "Save 25%"
              }
            ].map((offer, index) => (
              <AnimatedSection key={index} variant="zoomIn" delay={index * 0.1}>
                <div className="service-card bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block mb-4">
                      {offer.savings}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <p className="text-primary font-semibold mb-6">{offer.price}</p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleGetStarted}
                    >
                      Get Offer Now
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Esteemed Partners Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Our Esteemed Partners</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work with leading organizations and government entities to provide seamless services
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                name: "Dubai Economic Department",
                logo: "/lovable-uploads/ded-logo.png",
                alt: "Dubai Economic Department Logo"
              },
              {
                name: "UAE Ministry of Foreign Affairs",
                logo: "/lovable-uploads/mofaic-logo.png",
                alt: "UAE Ministry of Foreign Affairs Logo"
              },
              {
                name: "Dubai Courts",
                logo: "/lovable-uploads/dubai-courts-logo.png",
                alt: "Dubai Courts Logo"
              },
              {
                name: "Federal Authority for Identity and Citizenship",
                logo: "/lovable-uploads/ica-logo.png",
                alt: "Federal Authority for Identity and Citizenship Logo"
              },
              {
                name: "Tas-heel",
                logo: "/lovable-uploads/tasheel-logo.png",
                alt: "Tas-heel Logo"
              },
              {
                name: "Dubai Health Authority",
                logo: "/lovable-uploads/dha-logo.png",
                alt: "Dubai Health Authority Logo"
              },
              {
                name: "General Directorate of Residency and Foreigners Affairs",
                logo: "/lovable-uploads/gdrfa-logo.png",
                alt: "GDRFA Logo"
              },
              {
                name: "National Media Council",
                logo: "/lovable-uploads/nmc-logo.png",
                alt: "National Media Council Logo"
              }
            ].map((partner, index) => (
              <AnimatedSection key={index} variant="fadeIn" delay={index * 0.05}>
                <div className="glass-card bg-white/80 p-6 rounded-xl shadow-lg glow-effect transition-all duration-300 hover:scale-105">
                  <div className="h-20 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="max-h-16 max-w-full object-contain transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/200x100/e6f7ff/0070f3?text=${encodeURIComponent(partner.name)}`;
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 bg-secondary relative overflow-hidden text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Success Story</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "5,000,000+", label: "Documents Processed" },
              { number: "350,000+", label: "Satisfied Clients" },
              { number: "25+", label: "Years of Experience" }
            ].map((stat, index) => (
              <AnimatedSection key={index} variant="zoomIn" delay={index * 0.1}>
                <div className="glass-card p-8 rounded-xl text-center group hover:bg-primary/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 text-primary">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedSection 
          variant="fadeIn"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gradient">Ready to get started?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Let our team of experts handle all your documentation needs with precision and efficiency.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 animate-glow"
                onClick={handleGetStarted}
              >
                Start Your Documentation Process Now
                <MessageCircle className="w-6 h-6" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
