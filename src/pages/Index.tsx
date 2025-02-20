
import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive document and government services tailored to meet all your needs. Professional, reliable, and efficient solutions for individuals and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
