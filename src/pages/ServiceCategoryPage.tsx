
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MobileAppLayout from '@/components/MobileAppLayout';
import { services } from '@/data/services';
import ServiceSearch from '@/components/services/ServiceSearch';
import ServiceCard from '@/components/services/ServiceCard';
import CustomServiceCta from '@/components/services/CustomServiceCta';
import NoServicesFound from '@/components/services/NoServicesFound';

const ServiceCategoryPage = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const category = services.find(s => s.id === categoryId);
  
  if (!category) {
    return (
      <MobileAppLayout>
        <div className="p-4">Category not found</div>
      </MobileAppLayout>
    );
  }
  
  const filteredServices = category.subServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || 
                         (service.tags && service.tags.some(tag => selectedFilters.includes(tag)));
    
    return matchesSearch && matchesFilters;
  });

  return (
    <MobileAppLayout>
      <Helmet>
        <title>{category.title} | Adnan Ali Typing</title>
        <meta name="description" content={`Professional ${category.title.toLowerCase()} services in UAE. Fast, reliable and officially recognized.`} />
      </Helmet>
      
      <div className="px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-1">{category.title}</h1>
          <p className="text-sm text-gray-600">{category.description || `Browse our range of professional ${category.title.toLowerCase()} services`}</p>
        </div>
        
        <ServiceSearch 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="space-y-4 mb-6">
          {category.subServices && category.subServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                categoryId={categoryId}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No services found in this category.</p>
            </div>
          )}
          
          {filteredServices.length === 0 && searchQuery && (
            <NoServicesFound 
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          )}
        </div>

        <CustomServiceCta />
      </div>
    </MobileAppLayout>
  );
};

export default ServiceCategoryPage;
