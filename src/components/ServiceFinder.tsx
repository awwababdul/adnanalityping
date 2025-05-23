
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Building, CreditCard, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const categories = [
  {
    id: 'visa',
    title: 'Visa & Immigration',
    icon: <User className="h-6 w-6 text-blue-500" />,
    description: 'All visa types, stamping, status change',
    link: '/services/immigration',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hover: 'hover:border-blue-300 hover:bg-blue-50/80'
  },
  {
    id: 'business',
    title: 'Business Setup',
    icon: <Building className="h-6 w-6 text-indigo-500" />,
    description: 'Company registration, trade license, renewals',
    link: '/services/business-setup',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    hover: 'hover:border-indigo-300 hover:bg-indigo-50/80'
  },
  {
    id: 'documents',
    title: 'Document Services',
    icon: <FileText className="h-6 w-6 text-green-500" />,
    description: 'Legal typing, translation, attestation',
    link: '/services/document-services',
    bg: 'bg-green-50',
    border: 'border-green-100',
    hover: 'hover:border-green-300 hover:bg-green-50/80'
  },
  {
    id: 'id',
    title: 'Emirates ID & Personal',
    icon: <CreditCard className="h-6 w-6 text-orange-500" />,
    description: 'Emirates ID, medical tests, certificates',
    link: '/services/emirates-id',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    hover: 'hover:border-orange-300 hover:bg-orange-50/80'
  }
];

const ServiceFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Service Finder</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Solution</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Not sure what service you need? Use our smart finder to discover the perfect solution
          </p>
        </motion.div>

        {/* Search box */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for a service (e.g., visa renewal, Emirates ID, business license...)"
              className="w-full pl-12 h-14 rounded-full bg-white border-gray-200 shadow-sm focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full px-6">
              Find Services
            </Button>
          </div>
        </div>
        
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
                className={`cursor-pointer h-full transition-all duration-300 ${category.hover} ${
                  selectedCategory === category.id 
                    ? `border-2 border-primary shadow-md ${category.bg}` 
                    : `border ${category.border}`
                }`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`${category.bg} p-4 rounded-xl mb-4`}>
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
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/20">
              Take Our Service Finder Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="mt-3 text-sm text-gray-500">Answer a few questions to get personalized recommendations</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFinder;
