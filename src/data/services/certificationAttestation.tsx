
import React from 'react';
import { Stamp } from "lucide-react";
import { Service } from "@/types/services";

export const certificationAttestationService: Service = {
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
};
