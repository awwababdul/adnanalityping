
import React from 'react';
import { 
  FileText, Image, Mail, Shield, 
  GraduationCap, Globe2, FileSignature, Camera,
  ScrollText, Printer, UserCheck, Building2 
} from "lucide-react";
import { Service } from "@/types/services";

export const services: Service[] = [
  {
    id: "typing",
    icon: React.createElement(FileText, { className: "w-6 h-6" }),
    title: "Typing Services",
    description: "All types of typing services including documents, letters, and forms",
    subServices: [
      {
        id: "legal-documents",
        title: "Legal Documents Typing",
        description: "Professional typing services for legal documents and contracts",
        requirements: [
          "Original documents",
          "Valid ID",
          "Power of attorney (if applicable)"
        ],
        documents: [
          "Original document to be typed",
          "Emirates ID",
          "Supporting documents"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "business-documents",
        title: "Business Documents",
        description: "Typing services for business letters, agreements, and contracts",
        requirements: [
          "Company documents",
          "Trade license",
          "Authorization letter"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "personal-documents",
        title: "Personal Documents",
        description: "Typing services for personal letters, CVs, and applications",
        requirements: [
          "Personal identification",
          "Document drafts",
          "Additional requirements based on document type"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  },
  {
    id: "legal-translation",
    icon: React.createElement(ScrollText, { className: "w-6 h-6" }),
    title: "Legal Translation",
    description: "Professional translation services for legal documents",
    subServices: [
      {
        id: "official-documents",
        title: "Official Document Translation",
        description: "Translation of official documents with legal certification",
        requirements: [
          "Original documents",
          "Valid ID",
          "Additional supporting documents"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "court-documents",
        title: "Court Documents Translation",
        description: "Certified translation of court verdicts and legal papers",
        requirements: [
          "Original court documents",
          "Valid identification",
          "Court case reference number"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  },
  {
    id: "printing",
    icon: React.createElement(Printer, { className: "w-6 h-6" }),
    title: "Printing Services",
    description: "High-quality printing services for all document types",
    subServices: [
      {
        id: "digital-printing",
        title: "Digital Printing",
        description: "Modern digital printing for documents and materials",
        requirements: [
          "Digital files",
          "Specifications for printing",
          "Payment for service"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "document-scanning",
        title: "Document Scanning",
        description: "Professional scanning services with high resolution",
        requirements: [
          "Original documents",
          "Scanning specifications",
          "Storage device (if required)"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  },
  {
    id: "attestation",
    icon: React.createElement(FileSignature, { className: "w-6 h-6" }),
    title: "Document Attestation",
    description: "Official attestation services for various documents",
    subServices: [
      {
        id: "certificate-attestation",
        title: "Certificate Attestation",
        description: "Authentication of educational and professional certificates",
        requirements: [
          "Original certificates",
          "Passport copy",
          "Previous attestations (if any)"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "commercial-attestation",
        title: "Commercial Documents Attestation",
        description: "Attestation of business and commercial documents",
        requirements: [
          "Original documents",
          "Trade license",
          "Chamber of Commerce membership"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  },
  {
    id: "visa-services",
    icon: React.createElement(UserCheck, { className: "w-6 h-6" }),
    title: "Visa Services",
    description: "Comprehensive visa application and processing services",
    subServices: [
      {
        id: "tourist-visa",
        title: "Tourist Visa Application",
        description: "Assistance with tourist visa applications",
        requirements: [
          "Valid passport",
          "Passport-size photos",
          "Bank statements",
          "Travel insurance"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "business-visa",
        title: "Business Visa Processing",
        description: "Support for business visa applications",
        requirements: [
          "Company letter",
          "Trade license",
          "Passport with validity",
          "Visa application form"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  },
  {
    id: "company-formation",
    icon: React.createElement(Building2, { className: "w-6 h-6" }),
    title: "Company Formation",
    description: "Complete business setup and licensing services",
    subServices: [
      {
        id: "mainland-company",
        title: "Mainland Company Setup",
        description: "Establishment of mainland companies in UAE",
        requirements: [
          "Passport copies of shareholders",
          "Business plan",
          "Initial capital proof",
          "Proposed company name"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      },
      {
        id: "freezone-company",
        title: "Freezone Company Formation",
        description: "Setup of freezone companies with 100% ownership",
        requirements: [
          "Passport copies",
          "CV of shareholders",
          "Business plan",
          "Application forms"
        ],
        governmentLink: "https://www.dubai.ae/en/Pages/default.aspx"
      }
    ]
  }
];
