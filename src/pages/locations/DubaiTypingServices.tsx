
import React from 'react';
import LocationServicePage from '../../components/LocationServicePage';
import { locationPages } from '../../data/locationPages';

const DubaiTypingServices = () => {
  const dubaiData = locationPages.find(location => location.id === 'dubai');
  
  if (!dubaiData) {
    return <div>Location data not found</div>;
  }

  return (
    <LocationServicePage 
      city={dubaiData.city}
      title={dubaiData.title}
      metaTitle={dubaiData.metaTitle}
      metaDescription={dubaiData.metaDescription}
      heroTitle={dubaiData.heroTitle}
      heroDescription={dubaiData.heroDescription}
      mainContent={dubaiData.mainContent}
      locationMapLink={dubaiData.locationMapLink}
      googleMapEmbed={dubaiData.googleMapEmbed}
      benefits={dubaiData.benefits}
      specificFeatures={dubaiData.specificFeatures}
      testimonials={dubaiData.testimonials}
      faqs={dubaiData.faqs}
      nearbyAreas={dubaiData.nearbyAreas}
      relatedServices={dubaiData.relatedServices}
      statistics={dubaiData.statistics}
    />
  );
};

export default DubaiTypingServices;
