
import React from 'react';
import { FileText, Users, FileCheck, Mail, FileSignature, FileEdit, Scale, Shield } from 'lucide-react';
import { Service } from '@/types/services';

export const documentServices: Service[] = [
  {
    id: "document-drafting",
    icon: React.createElement(FileText, { className: "w-8 h-8" }),
    title: "Document Drafting Services",
    description: "Professional drafting of various documents tailored to your specific needs",
    subServices: [
      {
        id: "cv-resume",
        title: "CV & Resume Drafting",
        description: "Professional resume writing services to highlight your skills and experience",
        timeframe: "2-3 days",
        price: "from AED 150",
        userTypes: ["job-seeker", "professional"],
        urgencyLevels: ["standard", "urgent"],
        requiredDocuments: ["Career history details", "Educational qualifications", "Skills and achievements"],
        rating: 4.8
      },
      {
        id: "employment-contracts",
        title: "Employment Contracts",
        description: "Legally compliant employment contracts tailored to UAE labor regulations",
        timeframe: "2-3 days",
        price: "from AED 300",
        userTypes: ["business-owner", "employer"],
        urgencyLevels: ["standard", "urgent"],
        requiredDocuments: ["Company details", "Job description", "Employment terms"],
        governmentAuthority: "MOHRE",
        rating: 4.9
      },
      {
        id: "freelance-agreements",
        title: "Freelance Agreements",
        description: "Comprehensive freelance contracts protecting both parties' interests",
        timeframe: "2-3 days",
        price: "from AED 250",
        userTypes: ["business-owner", "freelancer"],
        urgencyLevels: ["standard", "urgent"],
        requiredDocuments: ["Project details", "Payment terms", "Delivery timeline"],
        rating: 4.7
      },
      {
        id: "legal-notices",
        title: "Legal Notices",
        description: "Formal legal notices for various requirements including termination and disputes",
        timeframe: "1-2 days",
        price: "from AED 200",
        userTypes: ["business-owner", "individual"],
        urgencyLevels: ["urgent", "standard"],
        requiredDocuments: ["Relevant case details", "Previous communications"],
        rating: 4.8
      },
      {
        id: "power-of-attorney",
        title: "Power of Attorney Documents",
        description: "Legally binding power of attorney documents for various purposes",
        timeframe: "2-3 days",
        price: "from AED 350",
        userTypes: ["business-owner", "individual", "family-sponsor"],
        urgencyLevels: ["standard", "urgent"],
        requiredDocuments: ["ID documents", "Details of powers to be granted", "Identification of appointed attorney"],
        rating: 4.9
      },
      {
        id: "mou",
        title: "Memorandums of Understanding (MOUs)",
        description: "Professional MOU drafting outlining business intentions and preliminary agreements",
        timeframe: "3-5 days",
        price: "from AED 450",
        userTypes: ["business-owner"],
        urgencyLevels: ["standard", "flexible"],
        requiredDocuments: ["Proposed agreement details", "Party information", "Terms of understanding"],
        rating: 4.7
      },
      {
        id: "business-plans",
        title: "Business Plans",
        description: "Comprehensive business plans for startups, expansion, or funding purposes",
        timeframe: "5-7 days",
        price: "from AED 1,200",
        userTypes: ["business-owner", "entrepreneur"],
        urgencyLevels: ["flexible", "standard"],
        requiredDocuments: ["Business concept", "Market analysis data", "Financial projections"],
        rating: 4.8
      },
      {
        id: "nda",
        title: "Non-Disclosure Agreements (NDAs)",
        description: "Confidentiality agreements to protect sensitive business information",
        timeframe: "1-2 days",
        price: "from AED 250",
        userTypes: ["business-owner"],
        urgencyLevels: ["urgent", "standard"],
        requiredDocuments: ["Parties involved", "Scope of confidential information", "Duration of agreement"],
        rating: 4.9
      },
      {
        id: "partnership-agreements",
        title: "Partnership Agreements",
        description: "Detailed partnership contracts defining rights, responsibilities, and profit sharing",
        timeframe: "3-5 days",
        price: "from AED 600",
        userTypes: ["business-owner", "entrepreneur"],
        urgencyLevels: ["standard", "flexible"],
        requiredDocuments: ["Partner details", "Capital contributions", "Profit sharing arrangements"],
        rating: 4.8
      },
      {
        id: "shareholder-agreements",
        title: "Shareholder Agreements",
        description: "Comprehensive agreements governing shareholder relationships and company management",
        timeframe: "3-5 days",
        price: "from AED 700",
        userTypes: ["business-owner"],
        urgencyLevels: ["standard", "flexible"],
        requiredDocuments: ["Company details", "Shareholder information", "Share distribution", "Management structure"],
        rating: 4.7
      }
    ]
  }
];

export const partnerServices = [
  {
    name: "Precedential Law",
    website: "https://precedentiallaw.com",
    description: "Leading legal consulting firm in the UAE",
    services: [
      {
        id: "corporate-legal",
        title: "Corporate Legal Advisory",
        description: "Expert legal guidance for businesses operating in the UAE",
        timeframe: "Varies by service",
        price: "Custom quotes",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "Precedential Law",
        partnerWebsite: "https://precedentiallaw.com"
      },
      {
        id: "contract-review",
        title: "Contract Drafting & Review",
        description: "Professional review and drafting of legal contracts",
        timeframe: "3-7 days",
        price: "from AED 800",
        userTypes: ["business-owner", "individual"],
        partnerService: true,
        partnerName: "Precedential Law",
        partnerWebsite: "https://precedentiallaw.com"
      },
      {
        id: "legal-compliance",
        title: "Legal Compliance Services",
        description: "Ensuring businesses meet all UAE regulatory requirements",
        timeframe: "Varies by service",
        price: "Custom quotes",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "Precedential Law",
        partnerWebsite: "https://precedentiallaw.com"
      },
      {
        id: "dispute-resolution",
        title: "Dispute Resolution Support",
        description: "Professional assistance with legal disputes and resolution",
        timeframe: "Varies by case",
        price: "Custom quotes",
        userTypes: ["business-owner", "individual"],
        partnerService: true,
        partnerName: "Precedential Law",
        partnerWebsite: "https://precedentiallaw.com"
      },
      {
        id: "ip-registration",
        title: "Intellectual Property Registration",
        description: "Protection for trademarks, patents, and copyrights in the UAE",
        timeframe: "30-90 days",
        price: "from AED 1,200",
        userTypes: ["business-owner", "entrepreneur"],
        partnerService: true,
        partnerName: "Precedential Law",
        partnerWebsite: "https://precedentiallaw.com"
      }
    ]
  },
  {
    name: "GUVNOR & AI8TY",
    website: "https://gvnr.pro",
    description: "Digital marketing and AI solutions providers",
    services: [
      {
        id: "digital-marketing",
        title: "Digital Marketing Strategies",
        description: "Comprehensive digital marketing solutions for businesses",
        timeframe: "Custom timelines",
        price: "Custom packages",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "GUVNOR",
        partnerWebsite: "https://gvnr.pro"
      },
      {
        id: "seo-services",
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's visibility and ranking in search engines",
        timeframe: "3-6 months ongoing",
        price: "from AED 1,500/month",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "GUVNOR",
        partnerWebsite: "https://gvnr.pro"
      },
      {
        id: "website-development",
        title: "Website Development",
        description: "Custom website design and development services",
        timeframe: "2-8 weeks",
        price: "from AED 5,000",
        userTypes: ["business-owner", "entrepreneur"],
        partnerService: true,
        partnerName: "GUVNOR",
        partnerWebsite: "https://gvnr.pro"
      },
      {
        id: "app-development",
        title: "Mobile App Development",
        description: "Custom mobile application development for iOS and Android",
        timeframe: "8-16 weeks",
        price: "from AED 20,000",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "AI8TY",
        partnerWebsite: "https://ai8ty.com"
      },
      {
        id: "ai-solutions",
        title: "AI-Powered Business Solutions",
        description: "Cutting-edge artificial intelligence solutions for business optimization",
        timeframe: "Custom timelines",
        price: "Custom quotes",
        userTypes: ["business-owner"],
        partnerService: true,
        partnerName: "AI8TY",
        partnerWebsite: "https://ai8ty.com"
      }
    ]
  }
];
