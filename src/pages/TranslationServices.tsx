
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Globe, FileCheck, FileSignature, Users } from 'lucide-react';

const TranslationServices = () => {
  // Just creating a minimal placeholder structure for now
  const benefits = [
    {
      title: "Certified Translations",
      description: "Legally recognized translations accepted by all UAE government departments and courts."
    },
    {
      title: "Multiple Language Pairs",
      description: "Professional translation between Arabic, English, and many other languages."
    },
    {
      title: "Subject Matter Expertise",
      description: "Specialized translators for legal, medical, technical, and business documents."
    },
    {
      title: "Fast Turnaround",
      description: "Quick translation services with express options for urgent documents."
    },
    {
      title: "Quality Assurance",
      description: "Multi-step quality control process ensuring accurate and contextually appropriate translations."
    },
    {
      title: "Complete Documentation",
      description: "From translation to attestation and submission - we handle the entire process."
    }
  ];

  // More stub data
  const process = [
    {
      title: "Document Evaluation",
      description: "We assess your documents to determine scope, complexity, and requirements."
    },
    {
      title: "Specialist Assignment",
      description: "Your documents are assigned to translators with relevant subject matter expertise."
    },
    {
      title: "Professional Translation",
      description: "Expert translators convert your content while maintaining context and meaning."
    },
    {
      title: "Quality Review",
      description: "Translations undergo thorough review by senior linguists for accuracy and quality."
    },
    {
      title: "Certification",
      description: "When required, we provide certified translations with official stamps and verification."
    }
  ];

  const faqs = [
    {
      question: "Are your translations legally accepted in the UAE?",
      answer: "Yes, our translations are legally recognized and accepted by all government departments, courts, and private institutions throughout the UAE. We provide properly certified translations that comply with local requirements and standards."
    }
  ];

  const relatedServices = [
    {
      title: "Legal Document Typing",
      description: "Specialized typing services for legal documents according to UAE standards.",
      link: "/legal-document-typing-dubai",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Document Processing",
      description: "Complete document handling services from preparation to submission.",
      link: "/services/document-processing",
      icon: <FileSignature className="w-6 h-6" />
    },
    {
      title: "Resume Typing Services",
      description: "Professional CV and resume preparation services for job seekers.",
      link: "/resume-typing-services-dubai",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const mainContent = (
    <p>Content for Translation Services page will go here.</p>
  );

  return (
    <ServicePageTemplate 
      title="Translation Services"
      metaTitle="Translation Services Dubai | Certified Arabic-English Translation | Adnan Ali Typing"
      metaDescription="Professional translation services in Dubai for all document types. Certified Arabic-English translation accepted by all UAE government departments. Fast and accurate translations by qualified linguists."
      canonicalUrl="/translation-services-dubai"
      heroTitle="Professional Translation Services in Dubai"
      heroDescription="Certified document translation services by qualified linguists for all your personal, business, and legal document needs"
      mainImage="/placeholder.svg"
      mainContent={mainContent}
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default TranslationServices;
