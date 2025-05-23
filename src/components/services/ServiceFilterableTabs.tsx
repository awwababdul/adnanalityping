
import React from 'react';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ServiceCategory } from '@/types/serviceCategories';
import ServiceCardEnhanced from '@/components/ServiceCardEnhanced';

interface ServiceFilterableTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  filteredServices: ServiceCategory[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  featuredServices?: ServiceCategory[];
}

const ServiceFilterableTabs: React.FC<ServiceFilterableTabsProps> = ({ 
  activeCategory,
  setActiveCategory,
  filteredServices,
  searchQuery,
  setSearchQuery,
  featuredServices = []
}) => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* Service Categories Tabs */}
        <Tabs defaultValue={activeCategory} className="mb-8" onValueChange={setActiveCategory}>
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
            {searchQuery === '' && featuredServices.length > 0 && (
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
            )}
            
            {searchQuery === '' && featuredServices.length > 0 && (
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">All Service Categories</h2>
              </div>
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
  );
};

export default ServiceFilterableTabs;
