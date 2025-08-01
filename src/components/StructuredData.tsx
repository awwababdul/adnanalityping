import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'WebSite' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'LocalBusiness', data }) => {
  const getStructuredData = () => {
    const baseUrl = "https://adnanalityping.com";
    
    switch (type) {
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#business`,
          "name": "Adnan Ali Typing",
          "alternateName": "Adnan Ali Document Services",
          "description": "Professional typing services, document processing, visa services, Emirates ID, translation services and business setup services in Dubai with over 25 years of experience.",
          "url": baseUrl,
          "telephone": "+971-55-263-6961",
          "email": "info@adnanalityping.com",
          "foundingDate": "2000",
          "priceRange": "$$",
          "currenciesAccepted": "AED, USD",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Business Bay",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.1877,
            "longitude": 55.2606
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/adnanalityping",
            "https://www.instagram.com/adnanalityping",
            "https://www.linkedin.com/company/adnanalityping"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Document and Visa Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Visa Processing Services",
                  "description": "Complete visa processing for all Emirates and visa types"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Emirates ID Services",
                  "description": "Emirates ID application, renewal, and replacement services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Setup Services",
                  "description": "Complete business license and setup services in UAE"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Document Processing",
                  "description": "Professional typing, translation, and document processing services"
                }
              }
            ]
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Dubai",
              "containedInPlace": {
                "@type": "Country",
                "name": "United Arab Emirates"
              }
            },
            {
              "@type": "City",
              "name": "Abu Dhabi",
              "containedInPlace": {
                "@type": "Country",
                "name": "United Arab Emirates"
              }
            },
            {
              "@type": "City",
              "name": "Sharjah",
              "containedInPlace": {
                "@type": "Country",
                "name": "United Arab Emirates"
              }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "250",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "Adnan Ali Typing - Professional Document Services Dubai",
          "description": "Professional typing services, document processing, visa services, Emirates ID, translation services and business setup services in Dubai with over 25 years of experience.",
          "publisher": {
            "@type": "Organization",
            "@id": `${baseUrl}/#business`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US"
        };

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What document services do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide comprehensive document services including visa processing, Emirates ID services, business setup, PRO services, typing, translation, attestation, and government document processing for all UAE Emirates."
              }
            },
            {
              "@type": "Question",
              "name": "How long does visa processing take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Visa processing time varies by type: Tourist visas (2-3 days), Employment visas (5-7 days), Family visas (7-10 days). Express services available for urgent cases."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer Emirates ID renewal services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer complete Emirates ID services including new applications, renewals, replacements, and updates. We handle all paperwork and coordinate with EIDA offices."
              }
            },
            {
              "@type": "Question",
              "name": "What are your business hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We're open Monday to Friday 8:00 AM to 8:00 PM, and Saturday 9:00 AM to 6:00 PM. We're closed on Sundays and UAE public holidays."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide services outside Dubai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide services across all UAE Emirates including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We have partnerships with PRO services in all Emirates."
              }
            }
          ]
        };

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            ...(data?.breadcrumbs || []).map((crumb: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 2,
              "name": crumb.name,
              "item": `${baseUrl}${crumb.path}`
            }))
          ]
        };

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "Professional Document Services",
          "description": data?.description || "Professional typing and document processing services in Dubai",
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/#business`
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data?.name || "Document Services",
            "itemListElement": data?.offers || []
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;