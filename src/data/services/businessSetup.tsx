
import React from 'react';
import { Building2 } from "lucide-react";
import { Service } from "@/types/services";

export const businessSetupService: Service = {
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
};
