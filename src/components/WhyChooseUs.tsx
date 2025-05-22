
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Globe, Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: '24+ Years of Experience',
      description: 'Trusted by thousands of clients since 2000 for all their UAE documentation needs'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'GDRFA, DHA & EIDA Authorized',
      description: 'Fully authorized by all major government authorities in the UAE'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Fastest Turnaround',
      description: 'Express processing available for urgent requests with same-day options'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Total Confidentiality',
      description: 'Your personal and business information is always protected and secure'
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: 'Multilingual Support',
      description: 'Our team provides assistance in Arabic, English, and Urdu'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Adnan Ali Typing</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            For over two decades, we've been the trusted partner for all government services in the UAE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-500 rounded-full p-4 flex-shrink-0">
              <Check className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Guarantee</h3>
              <p className="text-gray-700">
                We handle every document with precision and care. If any government authority rejects your application due to an error on our part, we'll reprocess it at no additional cost and compensate for any official fees incurred.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
