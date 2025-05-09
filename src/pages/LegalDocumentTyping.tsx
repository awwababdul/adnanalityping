
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck, FileSignature, Clock, Award, Users } from 'lucide-react';

const LegalDocumentTyping = () => {
  const benefits = [
    {
      title: "Accuracy Guarantee",
      description: "Our legal document typing service ensures 100% accuracy in all legal documents, crucial for court filings and legal proceedings."
    },
    {
      title: "Confidentiality",
      description: "All legal documents are handled with strict confidentiality and privacy protection measures as per UAE legal standards."
    },
    {
      title: "Fast Turnaround",
      description: "Expedited service options available for urgent legal documents with same-day delivery in many cases."
    },
    {
      title: "Legal Compliance",
      description: "All documents prepared in accordance with UAE legal requirements and acceptable for court submission."
    },
    {
      title: "Professional Formatting",
      description: "Properly formatted legal documents that meet court standards and professional expectations."
    },
    {
      title: "Multiple Language Support",
      description: "Legal document typing in Arabic, English and other languages commonly used in UAE legal proceedings."
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We discuss your legal document requirements, timelines, and specific formatting needs."
    },
    {
      title: "Document Assessment",
      description: "Our legal typing specialists evaluate your documents and provide guidance on required information."
    },
    {
      title: "Professional Typing",
      description: "Experienced legal typists prepare your documents with precise attention to detail and formatting."
    },
    {
      title: "Quality Control",
      description: "Multiple rounds of proofreading and quality checks to ensure accuracy and compliance."
    },
    {
      title: "Final Delivery",
      description: "Completed documents delivered in your preferred format, ready for submission or signing."
    }
  ];

  const faqs = [
    {
      question: "What types of legal documents can you type in Dubai?",
      answer: "We handle a comprehensive range of legal documents including court pleadings, contracts, agreements, affidavits, power of attorney, memorandums of understanding, legal notices, demand letters, settlement agreements, property documents, and more. Our typing services comply with all UAE legal requirements."
    },
    {
      question: "How quickly can you complete legal document typing?",
      answer: "Our standard turnaround time for legal documents is 24-48 hours depending on complexity and length. We also offer express same-day service for urgent requirements at an additional fee. For large volume documents, we provide customized timelines."
    },
    {
      question: "Are your legal typing services accepted by Dubai courts?",
      answer: "Yes, all our legal documents are prepared in accordance with Dubai Court requirements and standards. We have extensive experience preparing documents that are regularly submitted to and accepted by Dubai Courts, DIFC Courts, and other judicial entities across the UAE."
    },
    {
      question: "Do you provide legal translation along with typing services?",
      answer: "Yes, we offer comprehensive legal translation services between Arabic, English, and other languages commonly used in UAE legal proceedings. All translations are certified and legally acceptable for court submissions and government purposes."
    },
    {
      question: "How much do your legal document typing services cost in Dubai?",
      answer: "Our pricing varies based on document type, complexity, urgency, and length. Basic legal documents start from AED X. We provide transparent quotes upfront with no hidden fees. Contact us for a specific quote based on your requirements."
    },
    {
      question: "Can you handle confidential legal documents?",
      answer: "Absolutely. We maintain strict confidentiality protocols for all legal documents. Our staff sign confidentiality agreements, and we have secure systems in place to protect your sensitive legal information. We can also sign NDAs if required for particularly sensitive matters."
    }
  ];

  const relatedServices = [
    {
      title: "Translation Services",
      description: "Certified translation services for legal documents in multiple languages.",
      link: "/translation-services-dubai",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Business Setup Documentation",
      description: "Complete documentation services for business establishment in UAE.",
      link: "/services/business-setup",
      icon: <FileSignature className="w-6 h-6" />
    },
    {
      title: "Visa Processing",
      description: "Full visa application and processing services for UAE.",
      link: "/services/immigration",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const mainContent = (
    <>
      <p>
        Adnan Ali Typing offers professional <strong>legal document typing services in Dubai</strong> with over 25 years of experience in preparing accurate, compliant, and professionally formatted legal documents for individuals, law firms, and businesses throughout the UAE.
      </p>
      
      <p className="mt-4">
        Our <strong>legal document typing services</strong> cover a comprehensive range of legal paperwork including contracts, agreements, memorandums, court pleadings, affidavits, declarations, powers of attorney, and all types of business and personal legal documents required in Dubai and across the Emirates.
      </p>
      
      <p className="mt-4">
        What sets us apart as the leading provider of <strong>legal document typing in Dubai</strong> is our meticulous attention to detail, understanding of UAE legal document requirements, and commitment to absolute accuracy. Our team of experienced legal document specialists ensures that all documents are properly formatted according to local court standards and legal conventions.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Our Legal Document Typing Services Include:</h3>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Court Documents:</strong> Pleadings, motions, petitions, responses, and all types of court filings for Dubai Courts and DIFC Courts</li>
        <li><strong>Contracts and Agreements:</strong> Employment contracts, service agreements, sales contracts, lease agreements, and all types of business and personal contracts</li>
        <li><strong>Business Legal Documents:</strong> Memorandums of understanding, shareholder agreements, partnership agreements, and corporate legal documentation</li>
        <li><strong>Property Documentation:</strong> Sale and purchase agreements, tenancy contracts, and property transfer documents</li>
        <li><strong>Notarial Documents:</strong> Affidavits, declarations, powers of attorney, and other documents requiring notarization</li>
        <li><strong>Legal Correspondence:</strong> Legal notices, demand letters, cease and desist letters, and formal legal communications</li>
      </ul>
      
      <p className="mt-6">
        All our legal documents are prepared with strict attention to detail, proper legal terminology, and formatting that complies with UAE legal standards. We understand the critical importance of accuracy in legal documentation, where even minor errors can have significant consequences.
      </p>
      
      <p className="mt-4">
        Our <strong>legal document typing service in Dubai</strong> also includes thorough proofreading and quality control to ensure your documents are error-free and professionally presented. We can prepare documents in both Arabic and English, with certified translation available when needed.
      </p>
      
      <p className="mt-4">
        With Adnan Ali Typing, you can trust that your legal documents are in expert hands. Our reputation for excellence in legal document preparation has made us the preferred typing service provider for many law firms, corporate legal departments, and individuals throughout Dubai and the UAE.
      </p>
    </>
  );

  return (
    <ServicePageTemplate 
      title="Legal Document Typing Services"
      metaTitle="Legal Document Typing Dubai | Professional Legal Paperwork Services | Adnan Ali Typing"
      metaDescription="Professional legal document typing services in Dubai with 25+ years experience. Court documents, contracts, agreements & legal paperwork prepared with 100% accuracy and compliance with UAE legal standards."
      canonicalUrl="/legal-document-typing-dubai"
      heroTitle="Professional Legal Document Typing Services in Dubai"
      heroDescription="Accurate and compliant legal document preparation services by experienced specialists with over 25 years of expertise in UAE legal documentation."
      mainImage="/placeholder.svg"
      mainContent={mainContent}
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default LegalDocumentTyping;
