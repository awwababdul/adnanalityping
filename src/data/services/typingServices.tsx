
import React from 'react';
import { Printer } from "lucide-react";
import { Service } from "@/types/services";

export const typingServices: Service = {
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
};
