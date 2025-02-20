
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, FileText, Image, Mail, Shield, 
  FileSignature, Book, Translate, Camera,
  FileCheck, Printer, Globe, UserCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Typing",
      description: "Professional typing services for all types of documents",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Photo Services",
      description: "Photo editing and formatting for official documents",
    },
    {
      icon: <FileSignature className="w-6 h-6" />,
      title: "CV Writing",
      description: "Professional CV and resume writing services",
    },
    {
      icon: <Translate className="w-6 h-6" />,
      title: "Translation Services",
      description: "Document translation between Arabic and English",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Services",
      description: "Assistance with government applications and procedures",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Services",
      description: "Professional email drafting and communication",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "E-Book Conversion",
      description: "Convert documents to various e-book formats",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "ID Photo Service",
      description: "Professional ID photos for official documents",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Document Attestation",
      description: "Legal document attestation services",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Printing Services",
      description: "High-quality document printing and binding",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Visa Services",
      description: "Assistance with visa applications and renewals",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "PRO Services",
      description: "Professional PRO services for businesses",
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
