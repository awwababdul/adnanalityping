
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const DhaPage = () => {
  const services = [
    {
      title: "DHA Licensing",
      items: [
        "New License Application",
        "License Renewal",
        "License Modification",
        "Document Attestation",
        "Status Verification"
      ]
    },
    {
      title: "Medical Fitness",
      items: [
        "Medical Fitness Test",
        "Certificate Issuance",
        "Express Service",
        "Home Service",
        "Result Verification"
      ]
    },
    {
      title: "Health Insurance",
      items: [
        "Insurance Registration",
        "Policy Renewal",
        "Coverage Update",
        "Claims Assistance",
        "Card Issuance"
      ]
    }
  ];

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-secondary mb-4">Dubai Health Authority Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete range of DHA services including licensing, medical fitness, and health insurance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default DhaPage;
