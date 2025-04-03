
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Trophy, TrendingUp, ArrowRight } from "lucide-react";

const TrendingServices = () => {
  const trendingServices = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Golden Visa Services",
      description: "Specialized assistance for UAE Golden Visa applications for investors, entrepreneurs, and specialized talents",
      link: "/services/immigration"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Business License Setup",
      description: "Premium packages for mainland and free zone business setup with complete documentation support",
      link: "/services/business-setup"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Document Attestation",
      description: "Fast-track attestation services for all types of documents with ministry approvals",
      link: "/services/document-processing"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium inline-block mb-4">TRENDING NOW</span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Our Most Popular Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after services that clients are choosing for their efficiency and value
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trendingServices.map((service, index) => (
            <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button 
                    variant="ghost" 
                    className="group flex items-center text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
