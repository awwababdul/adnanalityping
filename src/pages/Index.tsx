
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, FileText, Image, Mail, Shield, 
  GraduationCap, Globe2, FileSignature, Camera,
  ScrollText, Printer, UserCheck, Building2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Typing Services",
      description: "All types of typing services including documents, letters, and forms",
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "Legal Translation",
      description: "Professional translation services for legal documents",
    },
    {
      icon: <FileSignature className="w-6 h-6" />,
      title: "PRO Services",
      description: "Professional business and government services",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Visa Services",
      description: "Tourist, business and residence visa services",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Company Formation",
      description: "Business setup and licensing services",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Attestation Services",
      description: "Document attestation and certification",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Photo Services",
      description: "Professional photography for documents",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Printing Services",
      description: "High-quality printing and document services",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Clearing",
      description: "Document processing and clearance services",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Emirates ID",
      description: "Emirates ID application and renewal services",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Mail Services",
      description: "Professional mailing and courier services",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Services",
      description: "All types of insurance services",
    }
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
            Comprehensive document and government services tailored to meet all your needs. Professional, reliable, and efficient solutions for individuals and businesses.
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
