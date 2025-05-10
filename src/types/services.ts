
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
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  icon: JSX.Element;
  subServices: SubService[];
}
