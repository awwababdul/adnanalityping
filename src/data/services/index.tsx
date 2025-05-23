
import React from 'react';
import { Service } from "@/types/services";
import { ServiceCategory } from "@/types/serviceCategories";
import { businessSetupService } from "./businessSetup";
import { documentClearingService } from "./documentClearing";
import { visaServices } from "./visaServices";
import { certificationAttestationService } from "./certificationAttestation";
import { legalTranslationService } from "./legalTranslation";
import { typingServices } from "./typingServices";
import { emiratesIdService, dubaiHealthAuthorityService, tasHeelService } from "./additionalServices";
import { Building2, ScrollText, UserCheck, Stamp, BookCheck, Printer, BadgeCheck, ShieldCheck, FileCheck } from "lucide-react";

// Export all services
export const services: Service[] = [
  businessSetupService,
  documentClearingService,
  visaServices,
  certificationAttestationService,
  legalTranslationService,
  typingServices
];

// Create a service categories array for the grid display
export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-setup",
    title: "Business Setup",
    description: "Complete business formation and licensing solutions in Dubai",
    icon: React.createElement(Building2, { className: "w-6 h-6" }),
    color: "blue",
    subServices: businessSetupService.subServices
  },
  {
    id: "document-clearing",
    title: "Document Clearing",
    description: "Professional document processing and government relations",
    icon: React.createElement(ScrollText, { className: "w-6 h-6" }),
    color: "indigo",
    subServices: documentClearingService.subServices
  },
  {
    id: "visa-services",
    title: "Visa Services",
    description: "Complete visa solutions for residence, visit, and employment",
    icon: React.createElement(UserCheck, { className: "w-6 h-6" }),
    color: "green",
    subServices: visaServices.subServices
  },
  {
    id: "attestation",
    title: "Certificate Attestation",
    description: "Ministry and embassy attestation services for all documents",
    icon: React.createElement(Stamp, { className: "w-6 h-6" }),
    color: "amber",
    subServices: certificationAttestationService.subServices
  },
  {
    id: "translation",
    title: "Legal Translation",
    description: "Certified translation services in multiple languages",
    icon: React.createElement(BookCheck, { className: "w-6 h-6" }),
    color: "purple",
    subServices: legalTranslationService.subServices
  },
  {
    id: "typing",
    title: "Typing Services",
    description: "Professional typing services for all types of documents",
    icon: React.createElement(Printer, { className: "w-6 h-6" }),
    color: "rose",
    subServices: typingServices.subServices
  },
  emiratesIdService,
  dubaiHealthAuthorityService,
  tasHeelService
];
