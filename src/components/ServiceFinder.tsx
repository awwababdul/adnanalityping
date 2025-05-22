
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Building, CreditCard, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'visa',
    title: 'Visa & Immigration',
    icon: <User className="h-6 w-6 text-blue-500" />,
    description: 'All visa types, stamping, status change',
    link: '/services/immigration'
  },
  {
    id: 'business',
    title: 'Business Setup',
    icon: <Building className="h-6 w-6 text-indigo-500" />,
    description: 'Company registration, trade license, renewals',
    link: '/services/business-setup'
  },
  {
    id: 'documents',
    title: 'Document Services',
    icon: <FileText className="h-6 w-6 text-green-500" />,
    description: 'Legal typing, translation, attestation',
    link: '/services/document-services'
  },
  {
    id: 'id',
    title: 'Emirates ID & Personal',
    icon: <CreditCard className="h-6 w-6 text-orange-500" />,
    description: 'Emirates ID, medical tests, certificates',
    link: '/services/emirates-id'
  }
];

const ServiceFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Solution</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Select a category to find the services that match your needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className={`cursor-pointer h-full border-2 transition-all ${
                  selectedCategory === category.id ? 'border-primary shadow-lg' : 'border-transparent hover:border-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="bg-gray-50 p-4 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <Link 
                    to={category.link}
                    className="mt-auto text-primary flex items-center font-medium"
                  >
                    View Services
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/needs-wizard">
            <Button size="lg" className="rounded-full px-8">
              Take Our Service Finder Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFinder;
