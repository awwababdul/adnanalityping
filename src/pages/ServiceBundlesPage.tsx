
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, Award, Tag, FileCheck, CheckCircle, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { services } from '@/data/services';
import useCartStore from '@/store/useCartStore';

const ServiceBundlesPage = () => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Predefined bundles based on customer needs
  const bundles = [
    {
      id: 'visa-renewal-package',
      title: 'Visa Renewal Package',
      description: 'Complete visa renewal with all required documents',
      timeframe: '3-5 working days',
      price: 1250,
      services: [
        { name: 'Visa Application Typing', price: 250 },
        { name: 'Emirates ID Renewal', price: 370 },
        { name: 'Medical Fitness Test Assistance', price: 430 },
        { name: 'Visa Stamping', price: 200 }
      ],
      discountedFrom: 1450,
      tags: ['visa', 'resident', 'renewal'],
      icon: '📄'
    },
    {
      id: 'new-business-setup',
      title: 'Business Setup Package',
      description: 'Everything you need to start your business in Dubai',
      timeframe: '7-10 working days',
      price: 4500,
      services: [
        { name: 'Trade License Application', price: 2000 },
        { name: 'Initial Approval', price: 500 },
        { name: 'Ejari for Office Space', price: 350 },
        { name: 'MOA Preparation', price: 500 },
        { name: 'PRO Assistance', price: 1150 }
      ],
      discountedFrom: 5000,
      tags: ['business', 'startup', 'license'],
      icon: '🏢'
    },
    {
      id: 'family-visa-package',
      title: 'Family Visa Package',
      description: 'Bring your family to live with you in the UAE',
      timeframe: '10-14 working days',
      price: 3200,
      services: [
        { name: 'Family Visa Application', price: 1200 },
        { name: 'Entry Permit Processing', price: 800 },
        { name: 'Status Change (per person)', price: 400 },
        { name: 'Medical Tests Appointment', price: 300 },
        { name: 'Emirates ID Processing', price: 500 }
      ],
      discountedFrom: 3500,
      tags: ['family', 'visa', 'dependent'],
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'new-arrival-package',
      title: 'New to UAE Package',
      description: 'Essential services for newcomers to the UAE',
      timeframe: '5-7 working days',
      price: 1800,
      services: [
        { name: 'Residence Visa Processing', price: 900 },
        { name: 'Emirates ID Application', price: 370 },
        { name: 'Ejari Registration', price: 280 },
        { name: 'DEWA Connection', price: 250 }
      ],
      discountedFrom: 2000,
      tags: ['new resident', 'relocation', 'setup'],
      icon: '✈️'
    },
    {
      id: 'document-package',
      title: 'Document Translation Bundle',
      description: 'Professional translation and attestation services',
      timeframe: '3-4 working days',
      price: 950,
      services: [
        { name: 'Document Translation (up to 5 pages)', price: 500 },
        { name: 'Legal Review', price: 200 },
        { name: 'Document Attestation', price: 250 }
      ],
      discountedFrom: 1100,
      tags: ['translation', 'legal', 'documents'],
      icon: '🗂️'
    }
  ];
  
  // Create flattened service list from all categories for search
  const allServices = services.reduce((acc, category) => {
    return [...acc, ...category.subServices.map(service => ({
      ...service,
      categoryId: category.id,
      categoryTitle: category.title
    }))];
  }, [] as any[]);
  
  // Filter services based on search
  const filteredServices = searchQuery 
    ? allServices.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : allServices.slice(0, 6); // Just show first few if no search
  
  const handleAddToCart = (bundle: any) => {
    addItem({
      id: bundle.id,
      title: bundle.title,
      price: bundle.price,
      isCustomPrice: false,
      categoryId: 'bundles',
      urgency: 'standard'
    });
    
    navigate('/cart');
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>Service Packages | Adnan Ali Typing</title>
        <meta name="description" content="Bundled service packages designed to save you time and money. From visa renewals to business setup." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-6">
        {/* Search bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
        
        <Tabs defaultValue="bundles">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="bundles">Service Bundles</TabsTrigger>
            <TabsTrigger value="individual">Individual Services</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bundles">
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-6 flex items-start gap-3">
                <div className="bg-amber-100 p-1.5 rounded-full flex-shrink-0">
                  <Tag className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Save up to 15% with bundles</h3>
                  <p className="text-sm text-amber-700">
                    Our service packages are designed to handle complete processes, saving you time and money.
                  </p>
                </div>
              </div>
              
              {bundles.map((bundle) => (
                <Card key={bundle.id} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{bundle.icon}</div>
                          <h3 className="font-semibold">{bundle.title}</h3>
                        </div>
                        <div className="bg-green-50 text-green-700 text-xs py-0.5 px-2 rounded-full font-medium">
                          Save AED {(bundle.discountedFrom - bundle.price).toFixed(0)}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{bundle.description}</p>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" /> {bundle.timeframe}
                        </div>
                        <div className="flex items-center text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                          <CheckCircle className="h-3 w-3 mr-1" /> All-inclusive
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <p className="font-medium text-sm mb-2">Includes:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {bundle.services.map((service, idx) => (
                            <li key={idx} className="flex justify-between">
                              <span className="flex items-center">
                                <FileCheck className="h-3 w-3 mr-1 text-primary" />
                                {service.name}
                              </span>
                              <span className="text-gray-500">AED {service.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 line-through">AED {bundle.discountedFrom}</div>
                        <div className="font-bold text-primary">AED {bundle.price}</div>
                      </div>
                      <Button onClick={() => handleAddToCart(bundle)}>
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="individual">
            <div className="space-y-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/services/${service.categoryId}/${service.id}`)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{service.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{service.description}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">{service.categoryTitle}</span>
                        {service.timeframe && (
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                            {service.timeframe}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {service.price ? (
                        <span className="text-sm font-semibold mr-2">
                          AED {typeof service.price === 'number' ? service.price : 'Custom'}
                        </span>
                      ) : null}
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
              
              {searchQuery && filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-3">
                    <Search className="h-12 w-12 mx-auto opacity-20" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">No services found</h3>
                  <p className="text-sm text-gray-500">Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="categories">
            <div className="grid grid-cols-2 gap-3">
              {services.map((category) => (
                <Link
                  key={category.id}
                  to={`/services/${category.id}`}
                  className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <div className="text-primary">{category.icon}</div>
                    </div>
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {category.subServices.length} services
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Stats and social proof */}
        <div className="mt-8 py-6 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">Trusted by thousands of customers</p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="font-bold text-xl">2.5K+</div>
                <div className="text-xs text-gray-500">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">4.9</div>
                <div className="text-xs text-gray-500">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">24h</div>
                <div className="text-xs text-gray-500">Express Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBundlesPage;
