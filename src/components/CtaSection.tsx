
import React from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

interface CTASectionProps {
  onGetStarted: () => void;
}

const CTASection = ({ onGetStarted }: CTASectionProps) => {
  return (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Ready to get started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let our team of experts handle all your documentation needs with precision and efficiency.
            </p>
            <Button
              size="xl"
              variant="premium"
              className="text-lg rounded-full flex items-center gap-3 animate-glow"
              onClick={onGetStarted}
            >
              Start Your Documentation Process Now
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
