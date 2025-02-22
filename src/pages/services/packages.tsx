
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const PackagesPage = () => {
  const packages = [
    {
      title: "Business Setup Package",
      items: [
        "Trade License",
        "Immigration Card",
        "Establishment Card",
        "Partner/ Investor Visa",
        "Office Space"
      ],
      price: "Starting from AED 15,000"
    },
    {
      title: "Family Visa Package",
      items: [
        "Entry Permit",
        "Change Status",
        "Medical Fitness Test",
        "Emirates ID",
        "Visa Stamping"
      ],
      price: "Starting from AED 3,000"
    },
    {
      title: "Document Clearing Package",
      items: [
        "Document Translation",
        "Document Attestation",
        "Document Typing",
        "PRO Services",
        "Government Services"
      ],
      price: "Starting from AED 500"
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Our Packages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of service packages designed to meet your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">{pkg.title}</h3>
              <ul className="space-y-2 mb-4">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mb-4">{pkg.price}</p>
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

export default PackagesPage;
