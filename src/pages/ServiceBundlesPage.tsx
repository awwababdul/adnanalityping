
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { serviceCategories } from '@/data/services';
import ServiceLayout from '@/layouts/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFilterableTabs from '@/components/services/ServiceFilterableTabs';
import ProcessOverview from '@/components/services/ProcessOverview';
import FaqTeaser from '@/components/services/FaqTeaser';

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
      {/* Hero Section with Search */}
      <ServiceHero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {/* Services Filter & Grid */}
      <ServiceFilterableTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredServices={filteredServices}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        featuredServices={featuredServices}
      />
      
      {/* Process Overview Section */}
      <ProcessOverview />
      
      {/* FAQ Teaser */}
      <FaqTeaser />
    </ServiceLayout>
  );
};

export default ServiceBundlesPage;
