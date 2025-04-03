
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { PhoneOutgoing, FileCheck, ClipboardCheck, ThumbsUp } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      icon: <PhoneOutgoing className="w-8 h-8 text-white" />,
      title: "Initial Consultation",
      description: "Contact us to discuss your specific requirements and get expert advice"
    },
    {
      number: "2",
      icon: <FileCheck className="w-8 h-8 text-white" />,
      title: "Document Submission",
      description: "Submit the required documents through our convenient channels"
    },
    {
      number: "3",
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      title: "Processing",
      description: "Our team handles all application processing and government interactions"
    },
    {
      number: "4",
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: "Completion",
      description: "Receive your completed documents and approvals promptly"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">How We Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes document processing simple and stress-free
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.2}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                  <div className="absolute top-8 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
