
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const ImmigrationPage = () => {
  const services = [
    {
      title: "New Visa Services",
      items: [
        "Entry Permit Application",
        "Change Status",
        "Medical Test",
        "Emirates ID Registration",
        "Visa Stamping"
      ]
    },
    {
      title: "Visa Renewal Services",
      items: [
        "Visa Renewal Application",
        "Medical Fitness Test",
        "Emirates ID Renewal",
        "Passport Submission",
        "Visa Status Update"
      ]
    },
    {
      title: "Visa Cancellation Services",
      items: [
        "Visa Cancellation Process",
        "Final Settlement",
        "Exit Process",
        "Documentation",
        "Status Update"
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Immigration Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional immigration services for all your visa needs in Dubai
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

export default ImmigrationPage;
