
import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import { Shield, Clock, UserCheck } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in document and government services with our expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Licensed & Certified",
                description: "Fully licensed and certified service provider in Dubai"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Quick Turnaround",
                description: "Fast and efficient processing of your documents"
              },
              {
                icon: <UserCheck className="w-8 h-8 text-primary" />,
                title: "Expert Team",
                description: "Experienced professionals at your service"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
