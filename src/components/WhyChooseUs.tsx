
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Globe, Check, Users, FileText } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: '24+ Years of Experience',
      description: 'Trusted by thousands of clients since 2000 for all their UAE documentation needs'
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: 'Government Authorized',
      description: 'Fully approved by GDRFA, DHA, EIDA and all major UAE government authorities'
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: 'Fastest Turnaround',
      description: 'Express processing available for urgent requests with same-day options'
    },
    {
      icon: <FileText className="h-10 w-10 text-purple-600" />,
      title: 'Total Confidentiality',
      description: 'Your personal and business information is always protected and secure'
    },
    {
      icon: <Globe className="h-10 w-10 text-orange-600" />,
      title: 'Multilingual Support',
      description: 'Our team provides assistance in Arabic, English, and Urdu languages'
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: 'Personalized Service',
      description: 'Dedicated case manager for your specific documentation needs'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto relative z-10">
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
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
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
          className="mt-16 bg-gradient-to-r from-primary/5 to-blue-500/5 p-8 rounded-2xl border border-blue-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-full p-4 flex-shrink-0">
              <Check className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Service Guarantee</h3>
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
