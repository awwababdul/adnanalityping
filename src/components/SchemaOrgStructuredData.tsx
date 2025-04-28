
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrgStructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adnan Ali Typing",
    "description": "Professional document processing, visa services, Emirates ID, and business setup services in Dubai.",
    "url": "https://adnanalityping.ae",
    "logo": "https://adnanalityping.ae/logo.png",
    "image": "https://adnanalityping.ae/storefront.jpg",
    "telephone": "+971552636961",
    "email": "info@adnanalityping.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Al Mamzar Center, Hor Al Anz",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.278490",
      "longitude": "55.325132"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/adnanalityping",
      "https://www.instagram.com/adnanalityping"
    ],
    "priceRange": "$$",
    "servesCuisine": "Document Services",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Document Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Processing",
            "description": "Complete visa processing services for all types of visas in Dubai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emirates ID Processing",
            "description": "Efficient Emirates ID application and renewal services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Setup",
            "description": "Comprehensive business setup and licensing services in Dubai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document Translation",
            "description": "Professional translation services for all types of documents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PRO Services",
            "description": "Professional representative services for government transactions."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgStructuredData;
