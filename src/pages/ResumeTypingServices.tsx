
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText, FileCheck, Users } from 'lucide-react';

const ResumeTypingServices = () => {
  // Minimal placeholder structure
  const benefits = [
    {
      title: "Professional Formatting",
      description: "ATS-friendly resume formatting that helps your application get noticed by employers."
    },
    {
      title: "Industry-Specific Templates",
      description: "Specialized resume layouts tailored to different industries and career levels."
    },
    {
      title: "Multilingual Options",
      description: "Resume preparation in Arabic, English, and other languages for the UAE job market."
    }
  ];

  const process = [
    {
      title: "Career Consultation",
      description: "We discuss your career goals, experience, and target positions."
    },
    {
      title: "Information Collection",
      description: "We gather all details about your education, work history, and skills."
    },
    {
      title: "Professional Drafting",
      description: "Our specialists create a compelling resume highlighting your strengths."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to create a professional resume?",
      answer: "Our standard turnaround time for resume typing and formatting is 24-48 hours. For urgent requirements, we offer express services that can deliver your resume within the same day."
    }
  ];

  const relatedServices = [
    {
      title: "Translation Services",
      description: "Get your resume translated into multiple languages for international applications.",
      link: "/translation-services-dubai",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Document Processing",
      description: "Complete document handling for your job application needs.",
      link: "/services/document-processing",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const mainContent = (
    <p>Content for Resume Typing Services page will go here.</p>
  );

  return (
    <ServicePageTemplate 
      title="Resume Typing Services"
      metaTitle="Resume Typing Services Dubai | Professional CV Writing | Adnan Ali Typing"
      metaDescription="Professional CV and resume typing services in Dubai. ATS-optimized resume formatting and expert CV writing to help you stand out in the job market. Multilingual resume services available."
      canonicalUrl="/resume-typing-services-dubai"
      heroTitle="Professional Resume & CV Typing Services"
      heroDescription="Stand out in the competitive UAE job market with our expertly formatted and professionally written resumes and CVs"
      mainImage="/placeholder.svg"
      mainContent={mainContent}
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default ResumeTypingServices;
