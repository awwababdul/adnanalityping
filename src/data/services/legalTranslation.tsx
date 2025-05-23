
import React from 'react';
import { BookCheck } from "lucide-react";
import { Service } from "@/types/services";

export const legalTranslationService: Service = {
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
};
