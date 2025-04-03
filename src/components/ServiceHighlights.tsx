
import React from "react";
import { motion } from "framer-motion";
import { CircleCheck, FileCheck, Globe, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ServiceHighlights = () => {
  const highlightItems = [
    {
      icon: <FileCheck className="w-10 h-10 text-primary" />,
      title: "Document Processing",
      description: "Fast and reliable processing of all your important documents"
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Visa Services",
      description: "Comprehensive visa solutions for residents, visitors, and businesses"
    },
    {
      icon: <CircleCheck className="w-10 h-10 text-primary" />,
      title: "Government PRO",
      description: "Expert assistance with all government-related procedures"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: "Business Setup",
      description: "End-to-end support for establishing your business in UAE"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlightItems.map((item, index) => (
            <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
