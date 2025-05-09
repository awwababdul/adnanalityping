
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import RelatedServices from "@/components/RelatedServices";

interface ServicePageTemplateProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  heroTitle: string;
  heroDescription: string;
  mainImage: string;
  mainContent: React.ReactNode;
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}

const ServicePageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  canonicalUrl,
  heroTitle,
  heroDescription,
  mainImage,
  mainContent,
  benefits,
  process,
  faqs,
  relatedServices
}: ServicePageTemplateProps) => {
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
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=971552636961', '_blank')}
                  >
                    Get Started Now
                  </Button>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full text-white border-white hover:bg-white/10"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-10">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white">Certified Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white">Fast Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white">25+ Years Experience</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={mainImage || "/placeholder.svg"} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-4xl font-bold text-primary">25+</div>
                    <div className="text-sm">Years of<br />Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">{title}</h2>
                <div className="prose prose-lg max-w-none">
                  {mainContent}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gradient">Benefits of Our {title}</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why choose Adnan Ali Typing for your documentation needs
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gradient">Our Process</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  How we deliver exceptional document services
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                  <div className="flex mb-8">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="ml-6 border-l-2 border-dashed border-gray-300 h-10"></div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-8">
                  Contact us today to discuss your document requirements and how we can assist you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=971552636961', '_blank')}
                  >
                    WhatsApp Us Now
                  </Button>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFaqSection faqs={faqs} />

        {/* Related Services */}
        <RelatedServices services={relatedServices} />
      </div>
    </>
  );
};

export default ServicePageTemplate;
