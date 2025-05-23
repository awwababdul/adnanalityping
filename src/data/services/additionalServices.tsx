
import React from 'react';
import { BadgeCheck, ShieldCheck, FileCheck } from "lucide-react";
import { ServiceCategory } from "@/types/serviceCategories";

export const emiratesIdService: ServiceCategory = {
  id: "emirates-id",
  title: "Emirates ID",
  description: "Application, renewal and replacement of Emirates ID cards",
  icon: React.createElement(BadgeCheck, { className: "w-6 h-6" }),
  color: "red",
  subServices: []
};

export const dubaiHealthAuthorityService: ServiceCategory = {
  id: "dubai-health-authority",
  title: "Health Authority",
  description: "DHA card application, insurance approval and medical services",
  icon: React.createElement(ShieldCheck, { className: "w-6 h-6" }),
  color: "teal",
  subServices: []
};

export const tasHeelService: ServiceCategory = {
  id: "tas-heel",
  title: "Tas-Heel Services",
  description: "Labor contracts, work permits and related documentation",
  icon: React.createElement(FileCheck, { className: "w-6 h-6" }),
  color: "sky",
  subServices: []
};
