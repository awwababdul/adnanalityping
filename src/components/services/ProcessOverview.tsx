
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessOverview: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Simple Process</h2>
          <p className="text-gray-600">How we help you navigate UAE's documentation requirements with ease</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Select Your Service",
              description: "Choose from our comprehensive list of government services or let us guide you"
            },
            {
              step: 2,
              title: "Submit Documents",
              description: "Upload your documents or visit our office with the required paperwork"
            },
            {
              step: 3,
              title: "Receive Your Documents",
              description: "We process everything and deliver your completed documents"
            }
          ].map((item) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.step * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button size="lg" onClick={() => window.open('https://api.whatsapp.com/send?phone=971552636961', '_blank')}>
            Contact Us for Assistance <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
