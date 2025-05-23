
import React from 'react';
import { ScrollText } from "lucide-react";
import { Service } from "@/types/services";

export const documentClearingService: Service = {
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
};
