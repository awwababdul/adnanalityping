
import React from 'react';

export interface SubService {
  id: string;
  title: string;
  description: string;
  governmentLink?: string;
  requirements?: string[];
  process?: string[];
  documents?: string[];
  
  // New fields for service categories
  tags?: string[];
  officialService?: boolean;
  timeframe?: string;
  governmentAuthority?: string;
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  subServices: SubService[];
}
