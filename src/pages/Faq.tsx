
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from 'react-helmet';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { faqs } from '@/data/faqs';

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Helmet>
        <title>FAQ - Adnan Ali Typing | Document Services Dubai</title>
        <meta name="description" content="Find answers to frequently asked questions about visa processing, Emirates ID, business setup, and document services at Adnan Ali Typing in Dubai." />
        <meta name="keywords" content="Dubai typing center FAQ, visa services Dubai questions, Emirates ID application help, document processing Dubai" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find answers to common questions about our services
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeInUp" delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Have more questions or need assistance?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+971552636961" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call Us
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=971552636961" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default FaqPage;
