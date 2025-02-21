
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
    icon: React.createElement(Building2, { className: "w-6 h-6" }),
    title: "Business Setup and Trade Licensing",
    description: "Complete business formation and licensing solutions in Dubai",
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
    icon: React.createElement(ScrollText, { className: "w-6 h-6" }),
    title: "Document Clearing and PRO Services",
    description: "Professional document processing and government liaison services",
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
    icon: React.createElement(UserCheck, { className: "w-6 h-6" }),
    title: "Visa and Immigration Services",
    description: "Comprehensive visa and immigration solutions",
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
    icon: React.createElement(FileSignature, { className: "w-6 h-6" }),
    title: "Attestation and Translation",
    description: "Professional document attestation and translation services",
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
    id: "additional-services",
    icon: React.createElement(Globe2, { className: "w-6 h-6" }),
    title: "Additional Services",
    description: "Various essential services for businesses and individuals",
    subServices: [
      {
        id: "ejari",
        title: "Dubai Ejari Registration",
        description: "Assist in registration and renewal of tenancy contracts",
        requirements: [
          "Tenancy contract",
          "Landlord documents",
          "Tenant documents"
        ],
        governmentLink: "https://www.ejari.ae/"
      },
      {
        id: "typing-services",
        title: "Document Typing Services",
        description: "Professional typing services for all types of documents",
        requirements: [
          "Content details",
          "Format requirements",
          "Additional specifications"
        ],
        governmentLink: "https://www.dubai.ae/"
      }
    ]
  }
];
