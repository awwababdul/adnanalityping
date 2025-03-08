
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const TasheelPage = () => {
  const services = [
    {
      title: "Labor Contract Services",
      items: [
        "New Contract Registration",
        "Contract Renewal",
        "Contract Modification",
        "Contract Cancellation",
        "Status Update"
      ]
    },
    {
      title: "Work Permit Services",
      items: [
        "New Work Permit",
        "Permit Renewal",
        "Permit Cancellation",
        "Status Change",
        "Document Verification"
      ]
    },
    {
      title: "Employee Services",
      items: [
        "Salary Certificate",
        "NOC Letters",
        "Employment Status",
        "Leave Documentation",
        "Service Letters"
      ]
    }
  ];

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 mt-10 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Tas-heel Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Tas-heel services for all your labor and employment needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-3 md:mb-4">{service.title}</h3>
              <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full text-sm md:text-base"
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

export default TasheelPage;
