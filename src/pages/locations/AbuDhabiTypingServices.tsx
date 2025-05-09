
import React from 'react';
import LocationServicePage from '../../components/LocationServicePage';
import { locationPages } from '../../data/locationPages';

const AbuDhabiTypingServices = () => {
  const abuDhabiData = locationPages.find(location => location.id === 'abu-dhabi');
  
  if (!abuDhabiData) {
    return <div>Location data not found</div>;
  }

  return (
    <LocationServicePage 
      city={abuDhabiData.city}
      title={abuDhabiData.title}
      metaTitle={abuDhabiData.metaTitle}
      metaDescription={abuDhabiData.metaDescription}
      heroTitle={abuDhabiData.heroTitle}
      heroDescription={abuDhabiData.heroDescription}
      mainContent={abuDhabiData.mainContent}
      locationMapLink={abuDhabiData.locationMapLink}
      googleMapEmbed={abuDhabiData.googleMapEmbed}
      benefits={abuDhabiData.benefits}
      specificFeatures={abuDhabiData.specificFeatures}
      testimonials={abuDhabiData.testimonials}
      faqs={abuDhabiData.faqs}
      nearbyAreas={abuDhabiData.nearbyAreas}
      relatedServices={abuDhabiData.relatedServices}
      statistics={abuDhabiData.statistics}
    />
  );
};

export default AbuDhabiTypingServices;
