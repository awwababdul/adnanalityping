
export interface SubService {
  id: string;
  title: string;
  description: string;
  requirements?: string[];
  process?: string[];
  documents?: string[];
  governmentLink?: string;
  // New properties
  tags?: string[];
  officialService?: boolean;
  timeframe?: string;
  governmentAuthority?: string;
  price?: string | number;
  rating?: number;
  userTypes?: string[]; // business-owner, family-sponsor, job-seeker, etc.
  urgencyLevels?: string[]; // urgent, standard, flexible
  requiredDocuments?: string[];
  partnerService?: boolean;
  partnerName?: string;
  partnerWebsite?: string;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  icon: JSX.Element;
  subServices: SubService[];
}

export interface ServicePartnership {
  name: string;
  website: string;
  logo?: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
}
