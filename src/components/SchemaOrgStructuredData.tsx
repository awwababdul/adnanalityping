
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrgStructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adnan Ali Typing",
    "description": "Professional document processing, visa services, Emirates ID, and business setup services in Dubai. Offering certified typing, translation, and legal document services with over 25 years of experience.",
    "url": "https://adnanalityping.com",
    "logo": "https://adnanalityping.com/logo.png",
    "image": "https://adnanalityping.com/storefront.jpg",
    "telephone": "+971552636961",
    "email": "info@adnanalityping.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Al Mamzar Center, Hor Al Anz",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
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
    "areaServed": {
      "@type": "GeoShape",
      "name": "Dubai and surrounding areas",
      "addressCountry": "AE",
      "addressRegion": "Dubai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Document and Typing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Typing Services Dubai",
            "description": "Professional document typing services in Dubai with quick turnaround and high accuracy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Translation Services UAE",
            "description": "Certified Arabic-English translation services for legal and official documents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Processing Dubai",
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
            "name": "Business Setup Dubai",
            "description": "Comprehensive business setup and licensing services in Dubai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Resume Typing Services Dubai",
            "description": "Professional CV and resume typing services for job seekers in Dubai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Legal Document Typing Dubai",
            "description": "Accurate typing services for legal documents and contracts."
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
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mohammed Al Hashimi"
        },
        "datePublished": "2025-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent typing and document services. Very professional and efficient."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2025-02-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Fast and reliable visa processing services. Highly recommend for all documentation needs."
      }
    ]
  };

  // Add FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Adnan Ali Typing provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adnan Ali Typing offers a comprehensive range of documentation services including typing services, visa processing, Emirates ID applications, business setup assistance, document typing, attestation, legal translation, and Tasheel/Amer services in Dubai."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Adnan Ali Typing located in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are conveniently located in Hor Al Anz, Dubai. Our office is easily accessible and we serve clients throughout Dubai and neighboring emirates."
        }
      },
      {
        "@type": "Question",
        "name": "How long does document typing take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard documents are completed within 24 hours. Complex documents may take 1-2 business days depending on length and requirements. We also offer express same-day service for urgent needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer translation services in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide professional translation services for all types of documents including legal documents, certificates, contracts, and personal documents. Our translations are legally certified and accepted by all government departments."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgStructuredData;
