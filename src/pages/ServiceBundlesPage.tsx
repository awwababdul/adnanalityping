
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search, Filter, ArrowRight, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { serviceCategories } from '@/data/services';
import ServiceCardEnhanced from '@/components/ServiceCardEnhanced';
import ServiceLayout from '@/layouts/ServiceLayout';

const ServiceBundlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = serviceCategories.filter(service => 
    (activeCategory === 'all' || service.id === activeCategory) &&
    (searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredServices = serviceCategories.filter(service => 
    ['immigration', 'emirates-id', 'business-setup'].includes(service.id)
  );

  return (
    <ServiceLayout 
      title="Complete UAE Government Services"
      description="Find the perfect solution for all your UAE documentation needs - visa processing, Emirates ID, business setup and more with expert assistance."
      canonicalUrl="/services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">UAE Government Services Made Simple</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert assistance with all documentation and government procedures in Dubai and across the UAE
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-5 max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
              <Input
                type="text"
                placeholder="Search for a service (e.g., visa renewal, Emirates ID, business license...)"
                className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-blue-200 h-12 rounded-lg focus-visible:ring-white/30 focus-visible:border-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-lg">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['visa', 'emirates id', 'business license', 'medical', 'tasheel'].map((tag) => (
                <Button 
                  key={tag} 
                  variant="ghost" 
                  className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-full"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          {/* Service Categories Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-4">
              <TabsList className="bg-white/80 backdrop-blur-sm shadow-sm p-1 rounded-full border">
                <TabsTrigger value="all" className="rounded-full px-4">
                  All Services
                </TabsTrigger>
                <TabsTrigger value="immigration" className="rounded-full px-4">
                  Immigration
                </TabsTrigger>
                <TabsTrigger value="emirates-id" className="rounded-full px-4">
                  Emirates ID
                </TabsTrigger>
                <TabsTrigger value="business-setup" className="rounded-full px-4">
                  Business
                </TabsTrigger>
                <TabsTrigger value="document-processing" className="rounded-full px-4">
                  Documents
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Featured Services Section */}
            <TabsContent value="all" className="mt-0">
              {searchQuery === '' && (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                      <span className="bg-primary/10 text-primary p-2 rounded-full mr-2">
                        <Check className="h-5 w-5" />
                      </span>
                      Most Popular Services
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {featuredServices.map((service, index) => (
                        <ServiceCardEnhanced 
                          key={service.id} 
                          service={service}
                          delay={0.1 * index}
                          featured={true}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">All Service Categories</h2>
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service, index) => (
              <ServiceCardEnhanced 
                key={service.id} 
                service={service}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Process Overview Section */}
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
      
      {/* FAQ Teaser */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">Find answers in our comprehensive FAQ section or contact us directly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/faq">View FAQ</a>
            </Button>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ServiceBundlesPage;
