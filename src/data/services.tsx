import React from 'react';
import { 
  Building2, ScrollText, UserCheck, 
  FileSignature, FileText, Building,
  Globe2, BookCheck, Stamp, Printer,
  MailCheck, FileCheck, ShieldCheck, Car,
  BadgeCheck, Scale, GraduationCap, MapPin
} from "lucide-react";
import { Service } from "@/types/services";

export const services: Service[] = [
  {
    id: "business-setup",
    icon: React.createElement(Building2, { className: "w-8 h-8" }),
    title: "Business Setup Services",
    description: "Complete business formation and licensing solutions in Dubai mainland and free zones",
    subServices: [
      {
        id: "company-formation",
        title: "Dubai Company Formation Assistance",
        description: "Guide entrepreneurs through the process of establishing businesses in Dubai, including mainland and free zone setups",
        requirements: [
          "Valid passport copies",
          "Initial approval from DED",
          "Required capital proof",
          "Additional documents based on business activity"
        ],
        governmentLink: "https://ded.ae/"
      },
      {
        id: "trade-license",
        title: "Dubai Trade License Registration and Renewal",
        description: "Manage the issuance and renewal of trade licenses to ensure businesses operate legally",
        requirements: [
          "Existing trade license (for renewal)",
          "Location documents",
          "Owner's documents",
          "NOC if required"
        ],
        governmentLink: "https://ded.ae/"
      },
      {
        id: "license-modification",
        title: "Dubai Business License Modification Services",
        description: "Facilitate amendments to existing business licenses, such as activity additions or partner changes",
        requirements: [
          "Current trade license",
          "Amendment application",
          "Supporting documents for changes"
        ],
        governmentLink: "https://ded.ae/"
      }
    ]
  },
  {
    id: "document-clearing",
    icon: React.createElement(ScrollText, { className: "w-8 h-8" }),
    title: "PRO Services",
    description: "Professional document processing and government relations services",
    subServices: [
      {
        id: "document-clearing",
        title: "Dubai Document Clearing Services",
        description: "Handle the processing and clearance of various governmental documents",
        requirements: [
          "Original documents",
          "Valid ID",
          "Payment for service fees"
        ],
        governmentLink: "https://www.dubai.ae/"
      },
      {
        id: "pro-services",
        title: "Dubai PRO Services",
        description: "Offer liaison services with government departments for document processing",
        requirements: [
          "Required documents",
          "Authorization letter",
          "Valid identification"
        ],
        governmentLink: "https://www.dubai.ae/"
      }
    ]
  },
  {
    id: "visa-services",
    icon: React.createElement(UserCheck, { className: "w-8 h-8" }),
    title: "Visa Services",
    description: "Complete visa solutions for residence, visit, and employment",
    subServices: [
      {
        id: "employment-visa",
        title: "Dubai Employment Visa Processing",
        description: "Assist employers and employees in obtaining and renewing work visas",
        requirements: [
          "Passport copy",
          "Photos",
          "Job offer letter",
          "Educational certificates"
        ],
        governmentLink: "https://www.ica.gov.ae/"
      },
      {
        id: "family-visa",
        title: "Dubai Family Visa Sponsorship",
        description: "Facilitate family visa sponsorship for UAE residents",
        requirements: [
          "Sponsor's documents",
          "Family documents",
          "Housing contract",
          "Salary certificate"
        ],
        governmentLink: "https://www.ica.gov.ae/"
      }
    ]
  },
  {
    id: "attestation",
    icon: React.createElement(Stamp, { className: "w-8 h-8" }),
    title: "Certificate Attestation",
    description: "Ministry and embassy attestation services for all types of documents",
    subServices: [
      {
        id: "document-attestation",
        title: "Dubai Document Attestation Services",
        description: "Authenticate various documents for official use",
        requirements: [
          "Original documents",
          "Copy of ID",
          "Application form"
        ],
        governmentLink: "https://www.mofaic.gov.ae/"
      },
      {
        id: "legal-translation",
        title: "Legal and Normal Translation",
        description: "Certified translation services in multiple languages",
        requirements: [
          "Original document",
          "Purpose of translation",
          "Target language specification"
        ],
        governmentLink: "https://www.dubai.ae/"
      }
    ]
  },
  {
    id: "translation",
    icon: React.createElement(BookCheck, { className: "w-8 h-8" }),
    title: "Legal Translation",
    description: "Certified translation services in multiple languages",
    subServices: [
      {
        id: "document-attestation",
        title: "Dubai Document Attestation Services",
        description: "Authenticate various documents for official use",
        requirements: [
          "Original documents",
          "Copy of ID",
          "Application form"
        ],
        governmentLink: "https://www.mofaic.gov.ae/"
      },
      {
        id: "legal-translation",
        title: "Legal and Normal Translation",
        description: "Certified translation services in multiple languages",
        requirements: [
          "Original document",
          "Purpose of translation",
          "Target language specification"
        ],
        governmentLink: "https://www.dubai.ae/"
      }
    ]
  },
  {
    id: "typing",
    icon: React.createElement(Printer, { className: "w-8 h-8" }),
    title: "Typing Services",
    description: "Professional typing services for all types of documents and applications",
    subServices: [
      {
        id: "document-attestation",
        title: "Dubai Document Attestation Services",
        description: "Authenticate various documents for official use",
        requirements: [
          "Original documents",
          "Copy of ID",
          "Application form"
        ],
        governmentLink: "https://www.mofaic.gov.ae/"
      },
      {
        id: "legal-translation",
        title: "Legal and Normal Translation",
        description: "Certified translation services in multiple languages",
        requirements: [
          "Original document",
          "Purpose of translation",
          "Target language specification"
        ],
        governmentLink: "https://www.dubai.ae/"
      }
    ]
  }
];
