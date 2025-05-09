
import React from 'react';
import LocationServicePage from '../../components/LocationServicePage';
import { locationPages } from '../../data/locationPages';

const BusinessBayTypingServices = () => {
  const businessBayData = locationPages.find(location => location.id === 'business-bay');
  
  if (!businessBayData) {
    return <div>Location data not found</div>;
  }

  return (
    <LocationServicePage 
      city={businessBayData.city}
      title={businessBayData.title}
      metaTitle={businessBayData.metaTitle}
      metaDescription={businessBayData.metaDescription}
      heroTitle={businessBayData.heroTitle}
      heroDescription={businessBayData.heroDescription}
      mainContent={businessBayData.mainContent}
      locationMapLink={businessBayData.locationMapLink}
      googleMapEmbed={businessBayData.googleMapEmbed}
      benefits={businessBayData.benefits}
      specificFeatures={businessBayData.specificFeatures}
      testimonials={businessBayData.testimonials}
      faqs={businessBayData.faqs}
      nearbyAreas={businessBayData.nearbyAreas}
      relatedServices={businessBayData.relatedServices}
      statistics={businessBayData.statistics}
    />
  );
};

export default BusinessBayTypingServices;
