
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, FileText, CreditCard, BadgeCheck, Building2, FileCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const serviceItems = [
  {
    title: 'Visa & Immigration',
    description: 'Complete visa processing and immigration services through Amer centers',
    icon: Users,
    link: '/services/immigration',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    hoverColor: 'group-hover:bg-blue-600 group-hover:text-white',
    delay: 0.1
  },
  {
    title: 'Document Processing',
    description: 'Fast and accurate legal document typing and processing services',
    icon: FileText,
    link: '/services/document-processing',
    color: 'bg-green-50 text-green-600 border-green-100',
    hoverColor: 'group-hover:bg-green-600 group-hover:text-white',
    delay: 0.2
  },
  {
    title: 'Emirates ID',
    description: 'Application, renewal and replacement of Emirates ID cards',
    icon: CreditCard,
    link: '/services/emirates-id',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    hoverColor: 'group-hover:bg-purple-600 group-hover:text-white',
    delay: 0.3
  },
  {
    title: 'Medical Services',
    description: 'Medical fitness tests, health certifications and DHA services',
    icon: BadgeCheck,
    link: '/services/dubai-health-authority',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    hoverColor: 'group-hover:bg-orange-600 group-hover:text-white',
    delay: 0.4
  },
  {
    title: 'Business Setup',
    description: 'Complete company formation and trade license processing',
    icon: Building2,
    link: '/services/business-setup',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    hoverColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    delay: 0.5
  },
  {
    title: 'Legal Services',
    description: 'Expert assistance with Navakas issues and legal documentation',
    icon: FileCheck,
    link: '/services/document-services',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    hoverColor: 'group-hover:bg-rose-600 group-hover:text-white',
    delay: 0.6
  }
];

const ServiceHighlights = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02]"></div>
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Services</span>
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
              whileHover={{ y: -5 }}
            >
              <Link to={service.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-transparent bg-white shadow-sm hover:border-gray-200 overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`${service.color} border p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300 ${service.hoverColor}`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                    <div className="mt-4 text-primary font-medium flex items-center">
                      <span>Learn more</span>
                      <motion.div 
                        className="ml-2 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-full text-primary font-medium transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
