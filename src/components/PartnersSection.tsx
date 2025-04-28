
import React from 'react';
import AnimatedSection from "@/components/AnimatedSection";

const partners = [
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
];

const PartnersSection = () => {
  return (
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
          {partners.map((partner, index) => (
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
  );
};

export default PartnersSection;
