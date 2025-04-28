
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from 'react-helmet';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const faqs = [
  {
    question: "What services does Adnan Ali Typing provide?",
    answer: "Adnan Ali Typing offers a comprehensive range of documentation services including visa processing, Emirates ID applications, business setup assistance, document typing, attestation, legal translation, and Tasheel/Amer services in Dubai."
  },
  {
    question: "Where is Adnan Ali Typing located?",
    answer: "We are conveniently located in Hor Al Anz, Dubai. Our office is easily accessible and we serve clients throughout Dubai and neighboring emirates."
  },
  {
    question: "How long does visa processing take?",
    answer: "Visa processing timeframes vary depending on the type of visa and current government processing times. Tourist visas typically take 24-72 hours, while employment visas may take 5-15 working days. We always strive to complete all applications as quickly as possible."
  },
  {
    question: "Do you offer business setup services?",
    answer: "Yes, we provide comprehensive business setup services including trade license applications, company formation in mainland Dubai and free zones, license renewals, and all related documentation."
  },
  {
    question: "What documents do I need for Emirates ID application?",
    answer: "For Emirates ID application, you typically need your passport with valid visa, passport-sized photographs with white background, and the completed application form. Additional documents may be required based on your visa status."
  },
  {
    question: "Do you provide document translation services?",
    answer: "Yes, we offer professional translation services for all types of documents including legal documents, certificates, contracts, and personal documents. Our translations are legally certified and accepted by all government departments."
  },
  {
    question: "What are your working hours?",
    answer: "Our standard working hours are Saturday to Thursday, 9:00 AM to 9:00 PM. We are closed on Fridays. However, for urgent services, we may accommodate requests outside regular hours by prior appointment."
  },
  {
    question: "Do I need to visit your office for services?",
    answer: "While in-person visits are welcome, many of our services can be initiated online. You can submit documents via WhatsApp or email, and we offer document pickup and delivery services for your convenience."
  },
  {
    question: "How much do your services cost?",
    answer: "Our service fees vary depending on the specific service and requirements. We offer competitive rates in line with market standards. Please contact us directly for a detailed quotation for your specific needs."
  },
  {
    question: "How can I track the status of my application?",
    answer: "Once your application is submitted, we provide regular updates on its progress. You can also contact us directly via phone or WhatsApp for immediate status updates on your application."
  }
];

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
