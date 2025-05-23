
import React from 'react';
import { UserCheck } from "lucide-react";
import { Service } from "@/types/services";

export const visaServices: Service = {
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
};
