
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, FileText, CreditCard, BadgeCheck, Building2, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const serviceItems = [
  {
    title: 'Amer Services',
    description: 'Visa and immigration processing through Amer centers',
    icon: Users,
    link: '/services/immigration',
    color: 'bg-blue-50 text-blue-600',
    delay: 0.1
  },
  {
    title: 'Tasheel Typing',
    description: 'Fast and accurate document typing services',
    icon: FileText,
    link: '/services/document-processing',
    color: 'bg-green-50 text-green-600',
    delay: 0.2
  },
  {
    title: 'Emirates ID',
    description: 'Application and renewal of Emirates ID cards',
    icon: CreditCard,
    link: '/services/emirates-id',
    color: 'bg-purple-50 text-purple-600',
    delay: 0.3
  },
  {
    title: 'Medical & Visa Processing',
    description: 'Health certifications and visa medical tests',
    icon: BadgeCheck,
    link: '/services/dubai-health-authority',
    color: 'bg-orange-50 text-orange-600',
    delay: 0.4
  },
  {
    title: 'Business Licensing',
    description: 'Company setup and trade license processing',
    icon: Building2,
    link: '/services/business-setup',
    color: 'bg-indigo-50 text-indigo-600',
    delay: 0.5
  },
  {
    title: 'Navakas Resolution',
    description: 'Expert assistance with complex legal issues',
    icon: FileCheck,
    link: '/services/document-services',
    color: 'bg-rose-50 text-rose-600',
    delay: 0.6
  }
];

const ServiceHighlights = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Let us handle your government paperwork so you can focus on what matters most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
            >
              <Link to={service.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`${service.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                    <div className="mt-4 text-primary font-medium flex items-center">
                      <span>Learn more</span>
                      <motion.span 
                        className="ml-2 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
