
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrgStructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adnan Ali Typing",
    "description": "Professional document processing, typing, translation, visa services, Emirates ID, and business setup services in Dubai. Offering certified typing, translation, and legal document services with over 25 years of experience.",
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
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "100000"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "100000",
      "description": "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Document and Typing Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Typing Services Dubai",
          "description": "Professional document typing services in Dubai with quick turnaround and high accuracy.",
          "url": "https://adnanalityping.com/typing-services-dubai",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai, United Arab Emirates"
          }
        },
        {
          "@type": "Service",
          "name": "Translation Services UAE",
          "description": "Certified Arabic-English translation services for legal and official documents.",
          "url": "https://adnanalityping.com/translation-services-dubai",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          },
          "areaServed": {
            "@type": "Place",
            "name": "United Arab Emirates"
          }
        },
        {
          "@type": "Service",
          "name": "Legal Document Typing Dubai",
          "description": "Accurate typing services for legal documents and contracts in Dubai.",
          "url": "https://adnanalityping.com/legal-document-typing-dubai",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai, United Arab Emirates"
          }
        },
        {
          "@type": "Service",
          "name": "Resume Typing Services Dubai",
          "description": "Professional CV and resume typing services for job seekers in Dubai.",
          "url": "https://adnanalityping.com/resume-typing-services-dubai",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai, United Arab Emirates"
          }
        },
        {
          "@type": "Service",
          "name": "Business Setup Documentation",
          "description": "Comprehensive business setup and licensing document services in Dubai.",
          "url": "https://adnanalityping.com/services/business-setup",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          }
        },
        {
          "@type": "Service",
          "name": "Visa Processing Services",
          "description": "Complete visa processing services for all types of visas in Dubai and UAE.",
          "url": "https://adnanalityping.com/services/immigration",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
          }
        },
        {
          "@type": "Service",
          "name": "Emirates ID Processing",
          "description": "Efficient Emirates ID application and renewal services in UAE.",
          "url": "https://adnanalityping.com/services/emirates-id",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Adnan Ali Typing"
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
        "reviewBody": "Excellent typing and document services. Very professional and efficient. I highly recommend Adnan Ali Typing for all document processing needs in Dubai."
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
        "reviewBody": "Fast and reliable visa processing services. The team at Adnan Ali Typing handled my documentation professionally and quickly. Highly recommend for all typing services in Dubai."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Patel"
        },
        "datePublished": "2025-04-05",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The best business setup documentation services in UAE. Their knowledge of legal requirements saved me time and money. Their typing services are top-notch."
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
        "name": "What typing services does Adnan Ali Typing provide in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adnan Ali Typing offers a comprehensive range of typing services in Dubai including document typing, legal document processing, visa applications, Emirates ID processing, business setup documentation, translation services between Arabic and English, resume and CV preparation, and government form filling services. With over 25 years of experience, we handle all documentation needs with professional accuracy and speed."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Adnan Ali Typing Center located in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our main typing center is conveniently located in Hor Al Anz, Dubai, near Al Mamzar Center. We serve clients throughout Dubai and all emirates of the UAE, offering both in-person and remote document services for your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "How long does document typing take at your Dubai typing center?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Adnan Ali Typing Services Dubai, most standard documents are completed within 24 hours. Complex documents may take 1-2 business days depending on length and requirements. We also offer express same-day typing services for urgent needs. Our fast turnaround times make us one of the most efficient typing centers in Dubai."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer certified translation services in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Adnan Ali Typing provides professional certified translation services in Dubai for all types of documents including legal documents, certificates, contracts, and personal documents. Our translations are legally certified and accepted by all government departments, courts, and foreign embassies in the UAE."
        }
      },
      {
        "@type": "Question",
        "name": "What are your typing service rates in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our typing service rates in Dubai are competitive and depend on the document type, complexity, urgency, and number of pages. We offer transparent pricing with no hidden costs. Contact us directly for a detailed quote for your specific document typing needs in Dubai."
        }
      },
      {
        "@type": "Question",
        "name": "Can Adnan Ali Typing help with business setup documentation in UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Adnan Ali Typing specializes in business setup documentation services throughout the UAE. We assist with trade license applications, MOA preparation, company registration forms, free zone documentation, mainland company setup, and all related business establishment paperwork. Our typing professionals understand UAE business regulations and ensure all documents are properly prepared."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online typing services in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer convenient online typing services in Dubai and throughout the UAE. Simply send your requirements via WhatsApp or email, and our professional typists will prepare your documents. We can deliver completed documents electronically or via courier service across Dubai and all emirates."
        }
      }
    ]
  };

  // Add BreadcrumbList schema for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://adnanalityping.com"
      }
    ]
  };

  // Add WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adnan Ali Typing - Professional Typing Services Dubai",
    "url": "https://adnanalityping.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://adnanalityping.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Premier typing services center in Dubai offering document processing, translation, visa services, business setup assistance and more with 25+ years of experience."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgStructuredData;
