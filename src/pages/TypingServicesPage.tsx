
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck, FileSignature, Clock, Award, Users } from 'lucide-react';

const TypingServicesPage = () => {
  const benefits = [
    {
      title: "Fast Turnaround",
      description: "Get your documents typed quickly with our efficient service - most standard documents completed within 24 hours."
    },
    {
      title: "Professional Formatting",
      description: "Perfectly formatted documents that meet all UAE standards and requirements for government and business use."
    },
    {
      title: "Multilingual Service",
      description: "Document typing in Arabic, English, and other languages to serve Dubai's diverse community."
    },
    {
      title: "Experienced Staff",
      description: "Our document specialists have over 25 years of experience with UAE documentation requirements."
    },
    {
      title: "Accuracy Guarantee",
      description: "Triple-checked documents to ensure 100% accuracy in all your important paperwork."
    },
    {
      title: "Complete Document Solutions",
      description: "From typing to printing, translation, and submission - we handle the entire document process."
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We discuss your document requirements and specifications to understand exactly what you need."
    },
    {
      title: "Document Information Collection",
      description: "We gather all necessary information and details required for your documents."
    },
    {
      title: "Professional Typing",
      description: "Our expert typists prepare your documents with meticulous attention to formatting and details."
    },
    {
      title: "Quality Verification",
      description: "Each document undergoes thorough proofreading and quality checks to ensure perfection."
    },
    {
      title: "Final Review and Delivery",
      description: "You review the completed documents before final delivery in your preferred format."
    }
  ];

  const faqs = [
    {
      question: "What types of documents can you type in Dubai?",
      answer: "We offer comprehensive typing services for all document types in Dubai including legal contracts, agreements, visa applications, government forms, business documents, personal statements, CVs and resumes, NOCs, authorization letters, memorandums, and all types of official and unofficial correspondence. Our typing services comply with all UAE formatting and presentation standards."
    },
    {
      question: "How quickly can you complete document typing?",
      answer: "Our standard turnaround time for most documents is 24 hours or less. For simple documents, we often provide same-day service, sometimes within just a few hours. Complex or lengthy documents may require 1-2 business days. We also offer express and priority services for urgent requirements at an additional fee."
    },
    {
      question: "Do you offer typing services in languages other than English and Arabic?",
      answer: "Yes, besides our core Arabic and English typing services, we also offer document typing in several other languages including Hindi, Urdu, French, German, Russian, Chinese, and Filipino. For languages we don't directly support, we can arrange specialized typing through our partner network."
    },
    {
      question: "Can you help format my document according to specific requirements?",
      answer: "Absolutely! We specialize in formatting documents according to specific requirements, whether for government submissions, court filings, corporate standards, or academic purposes. Our team is familiar with various formatting styles and can adapt your document to any required specifications."
    },
    {
      question: "What is the cost of document typing services in Dubai?",
      answer: "Our typing service rates depend on factors such as document type, complexity, length, language, and urgency. Basic document typing starts from AED 30-50, while complex documents with special formatting or multilingual requirements may cost more. We provide transparent pricing with no hidden fees and can give you a precise quote after reviewing your specific requirements."
    },
    {
      question: "Can you assist with document submission after typing?",
      answer: "Yes, we offer complete document solutions. Beyond typing, we can assist with printing, binding, scanning, translation, notarization, attestation, and even submission to relevant authorities through our PRO services. This end-to-end approach saves you time and ensures your documents are properly processed."
    }
  ];

  const relatedServices = [
    {
      title: "Translation Services",
      description: "Professional translation of documents between multiple languages with certification.",
      link: "/translation-services-dubai",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Legal Document Typing",
      description: "Specialized typing services for legal documents and court submissions.",
      link: "/legal-document-typing-dubai",
      icon: <FileSignature className="w-6 h-6" />
    },
    {
      title: "Business Setup Documentation",
      description: "Complete document preparation for business establishment in UAE.",
      link: "/services/business-setup",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const mainContent = (
    <>
      <p>
        At Adnan Ali Typing, we provide comprehensive <strong>typing services in Dubai</strong> with over 25 years of experience helping residents, businesses, and visitors with their document needs. Our professional typing center offers fast, accurate, and reliable typing for all types of documents required in the UAE.
      </p>
      
      <p className="mt-4">
        Our <strong>typing services</strong> encompass a wide range of document types, from personal and business correspondence to government forms, legal documents, and applications. Whether you need simple text typing or complex document formatting, our team delivers precise results that meet all UAE standards and requirements.
      </p>
      
      <p className="mt-4">
        What distinguishes our <strong>typing center in Dubai</strong> is our deep understanding of local documentation requirements and formats. Our experienced typists are well-versed in preparing documents for various government departments, courts, and private entities throughout the UAE, ensuring your documents are accepted the first time.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Our Comprehensive Typing Services Include:</h3>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Personal Documents</strong> - Letters, applications, CVs and resumes, personal statements</li>
        <li><strong>Business Documents</strong> - Corporate letters, reports, proposals, presentations, memos</li>
        <li><strong>Government Forms</strong> - Visa applications, license applications, government submissions</li>
        <li><strong>Legal Documents</strong> - Contracts, agreements, legal notices, court submissions</li>
        <li><strong>Academic Documents</strong> - Thesis, dissertations, research papers, assignments</li>
        <li><strong>Technical Documents</strong> - Manuals, specifications, technical reports</li>
      </ul>
      
      <p className="mt-6">
        We offer typing services in multiple languages, primarily <strong>Arabic and English typing services</strong>, but also supporting other languages commonly used in the UAE. Our multilingual typing specialists ensure your documents are perfectly formatted and error-free in any required language.
      </p>
      
      <p className="mt-4">
        Our <strong>fast typing services in Dubai</strong> are designed to meet urgent deadlines without compromising quality. With our efficient processes and experienced team, we can complete most standard documents within 24 hours, with express same-day service available for urgent requirements.
      </p>
      
      <p className="mt-4">
        Beyond basic typing, we also provide comprehensive document solutions including printing, scanning, photocopying, binding, and digital document delivery. For clients who need complete document processing, we offer additional services such as translation, notarization, and document submission through our PRO services.
      </p>
      
      <p className="mt-4">
        With Adnan Ali Typing, you can trust that your documents are in expert hands. Our reputation for excellence in document services has made us the preferred typing service provider for individuals, businesses, and government entities throughout Dubai and the UAE.
      </p>
    </>
  );

  return (
    <ServicePageTemplate 
      title="Professional Typing Services"
      metaTitle="Typing Services Dubai | Fast & Accurate Document Typing | Adnan Ali Typing"
      metaDescription="Professional typing services in Dubai with 25+ years experience. Fast, accurate document typing in Arabic, English & multiple languages. Same-day service available for all document types."
      canonicalUrl="/typing-services-dubai"
      heroTitle="Professional Typing Services in Dubai"
      heroDescription="Fast, accurate, and reliable document typing services for all your personal, business, and government documentation needs"
      mainImage="/placeholder.svg"
      mainContent={mainContent}
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default TypingServicesPage;
