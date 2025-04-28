
import React from 'react';
import AnimatedSection from "@/components/AnimatedSection";

const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden text-white">
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
  );
};

export default StatsSection;
