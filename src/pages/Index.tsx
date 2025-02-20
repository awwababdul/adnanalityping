
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Image, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Services",
      description: "Professional typing, formatting and translation services for all your documentation needs",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Photo Services",
      description: "Expert photo editing and formatting for official documents and visas",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email & Communication",
      description: "Automated client communications and professional email drafting services",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Services",
      description: "Assistance with various government and administrative procedures",
    },
  ];

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
            Professional document services tailored to meet all your needs. From typing and translation to photo editing and government applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
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
