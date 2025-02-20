
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
    icon: <FileText className="w-6 h-6" />,
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
      }
    ]
  },
  {
    id: "legal-translation",
    icon: <ScrollText className="w-6 h-6" />,
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
      }
    ]
  }
];
