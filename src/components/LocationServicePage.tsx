
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { MapPin, Check, ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import RelatedServices from "@/components/RelatedServices";

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  image?: string;
  rating: number;
  text: string;
}

interface LocationServicePageProps {
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  mainContent: React.ReactNode;
  locationMapLink: string;
  googleMapEmbed: string;
  benefits: {
    title: string;
    description: string;
  }[];
  specificFeatures?: {
    title: string;
    description: string;
  }[];
  testimonials: Testimonial[];
  faqs: {
    question: string;
    answer: string;
  }[];
  nearbyAreas?: {
    name: string;
    link: string;
  }[];
  relatedServices: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  statistics?: {
    value: string;
    label: string;
  }[];
}

const LocationServicePage = ({
  city,
  title,
  metaTitle,
  metaDescription,
  heroTitle,
  heroDescription,
  mainContent,
  locationMapLink,
  googleMapEmbed,
  benefits,
  specificFeatures,
  testimonials,
  faqs,
  nearbyAreas,
  relatedServices,
  statistics,
}: LocationServicePageProps) => {
  
  const canonicalUrl = `/typing-services-${city.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Schema.org structured data for this location page
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Adnan Ali Typing Services in ${city}`,
    "description": `Professional typing, translation and document services in ${city}. Fast, accurate, and certified documentation services with over 25 years of experience.`,
    "url": `https://adnanalityping.com${canonicalUrl}`,
    "logo": "https://adnanalityping.com/logo.png",
    "image": "https://adnanalityping.com/storefront.jpg",
    "telephone": "+971552636961",
    "email": "info@adnanalityping.com",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Document and Typing Services in ${city}`,
      "itemListElement": [
        {
          "@type": "Service",
          "name": `Typing Services in ${city}`,
          "description": `Professional document typing services in ${city} with quick turnaround and high accuracy.`,
          "areaServed": {
            "@type": "City",
            "name": city
          }
        },
        {
          "@type": "Service",
          "name": `Translation Services in ${city}`,
          "description": `Certified Arabic-English translation services for legal and official documents in ${city}.`,
          "areaServed": {
            "@type": "City",
            "name": city
          }
        }
      ]
    }
  };

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://adnanalityping.com${canonicalUrl}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://adnanalityping.com${canonicalUrl}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300">Services Available in {city}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {heroTitle}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Button 
                  size="lg" 
                  className="rounded-full"
                  onClick={() => window.open(`https://api.whatsapp.com/send?phone=971552636961&text=I need typing services in ${city}`, '_blank')}
                >
                  Get Started Now in {city}
                </Button>
                <a href="tel:+971552636961">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Call Us
                  </Button>
                </a>
              </div>
              
              {statistics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                  {statistics.map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <AnimatedSection variant="fadeInUp" className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-8">Typing Services in {city}</h2>
                  {mainContent}
                </div>
                
                {specificFeatures && specificFeatures.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold mb-6">
                      <span className="text-gradient">Special Services in {city}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {specificFeatures.map((feature, i) => (
                        <div key={i} className="bg-secondary/5 p-6 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sample Documents */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Sample Documents</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="text-center text-gray-500">
                        <p className="mb-2 font-medium">Sample Legal Document</p>
                        <div className="aspect-[3/4] bg-white border border-gray-300 rounded shadow-sm overflow-hidden flex items-center justify-center">
                          <div className="blur-sm px-4">
                            [Document Preview - Blurred for Confidentiality]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="text-center text-gray-500">
                        <p className="mb-2 font-medium">Sample Translation</p>
                        <div className="aspect-[3/4] bg-white border border-gray-300 rounded shadow-sm overflow-hidden flex items-center justify-center">
                          <div className="blur-sm px-4">
                            [Translation Preview - Blurred for Confidentiality]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-bold mb-6">Trusted & Verified Services</h3>
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Dubai Courts</p>
                        <p className="text-xs text-gray-500">Verified Provider</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Ministry of Justice</p>
                        <p className="text-xs text-gray-500">Recognized Service</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">TASHEEL</p>
                        <p className="text-xs text-gray-500">Authorized Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Sidebar with Map and CTA */}
              <AnimatedSection variant="fadeInUp" delay={0.2} className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Find Us in {city}</h3>
                  
                  {/* Google Map */}
                  <div className="mb-6 aspect-video rounded-lg overflow-hidden border border-gray-200">
                    <iframe 
                      src={googleMapEmbed}
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Adnan Ali Typing in ${city}`}
                    ></iframe>
                  </div>

                  <div className="mb-6">
                    <a 
                      href={locationMapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center w-full bg-secondary/10 hover:bg-secondary/20 transition-colors p-3 rounded-lg text-primary font-medium"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </div>

                  {nearbyAreas && nearbyAreas.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Nearby Areas We Serve:</h4>
                      <ul className="text-sm">
                        {nearbyAreas.map((area, index) => (
                          <li key={index} className="mb-1">
                            <Link 
                              to={area.link} 
                              className="text-primary hover:underline flex items-center"
                            >
                              <ArrowRight className="w-3 h-3 mr-1" />
                              {area.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="p-4 bg-primary rounded-lg text-white mb-6">
                    <h4 className="font-bold text-lg mb-2">Need Documents Urgently?</h4>
                    <p className="text-sm mb-4">Get same-day typing services in {city} with our express service.</p>
                    <Button 
                      className="w-full bg-white text-primary hover:bg-white/90"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=971552636961', '_blank')}
                    >
                      WhatsApp Now
                    </Button>
                  </div>

                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="mr-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">97% of documents</p>
                      <p className="text-sm text-green-600">Delivered within 24 hours</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold mb-4">Contact Us Directly:</h4>
                    <a 
                      href="tel:+971552636961" 
                      className="flex items-center text-primary hover:underline mb-2"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +971 55 263 6961
                    </a>
                    <p className="text-sm text-gray-500">Available 9AM - 9PM daily</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gradient">Benefits of Our Typing Services in {city}</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why choose Adnan Ali Typing for your documentation needs in {city}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection variant="fadeInUp">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="text-gradient">Customer Reviews in {city}</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    See what clients in {city} say about our typing services
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {testimonial.image ? (
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover" 
                              />
                            ) : (
                              <span className="text-lg font-bold text-gray-500">
                                {testimonial.name.charAt(0)}
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          {(testimonial.role || testimonial.company) && (
                            <p className="text-sm text-gray-500">
                              {testimonial.role}{testimonial.company && testimonial.role ? ' at ' : ''}{testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => window.open('https://g.page/r/CWRuXosUqKUoEAI/review', '_blank')}
                >
                  Leave a Review
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <ServiceFaqSection faqs={faqs} />

        {/* Related Services */}
        <RelatedServices services={relatedServices} />

        {/* Lead Magnet CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Free UAE Document Guide</h2>
                <p className="text-gray-600 mb-8">
                  Download our free guide: "Top 5 Mistakes to Avoid in Legal Document Typing (UAE Edition)" and ensure your documents are always properly processed.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="px-4 py-3 rounded-full w-full sm:w-72 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                  <Button className="rounded-full w-full sm:w-auto">
                    Get Free Guide
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationServicePage;
