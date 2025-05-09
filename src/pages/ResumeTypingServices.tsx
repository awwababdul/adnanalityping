
import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText, FileCheck, Users, Star, Award, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ResumeTypingServices = () => {
  const benefits = [
    {
      title: "ATS-Friendly Formatting",
      description: "Our resume formats are designed to pass Applicant Tracking Systems, ensuring your application gets seen by hiring managers."
    },
    {
      title: "Industry-Specific Templates",
      description: "We offer specialized resume layouts tailored to different industries and career levels in the UAE job market."
    },
    {
      title: "Multilingual Resume Services",
      description: "Get your resume prepared in Arabic, English, and other languages to maximize your opportunities in Dubai's international job market."
    },
    {
      title: "Fast Turnaround",
      description: "Receive your professionally typed resume within 24 hours, with express same-day service available for urgent job applications."
    },
    {
      title: "Keywords Optimization",
      description: "We strategically include industry and role-specific keywords to help your resume rank higher in employer searches."
    },
    {
      title: "Professional Formatting",
      description: "Clean, modern layouts with proper spacing, consistent fonts, and visual hierarchy to create a powerful first impression."
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We discuss your career goals, target positions, and preferred resume style to understand your needs."
    },
    {
      title: "Information Collection",
      description: "Submit your existing resume or complete our information form with your education, work history, and skills."
    },
    {
      title: "Professional Draft Creation",
      description: "Our specialists craft a tailored resume highlighting your strengths and achievements using ATS-friendly formatting."
    },
    {
      title: "Review & Revision",
      description: "You review the draft and request any changes, which we implement promptly until you're completely satisfied."
    },
    {
      title: "Final Delivery",
      description: "Receive your finalized resume in multiple formats (PDF, Word) ready for immediate use in your job applications."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to create a professional resume in Dubai?",
      answer: "Our standard turnaround time for resume typing and formatting is 24-48 hours. For urgent requirements, we offer express services that can deliver your resume within the same day, often within just 4-6 hours."
    },
    {
      question: "What formats will I receive my resume in?",
      answer: "We provide your resume in both PDF and editable Word formats. The PDF ensures your resume looks consistent across all devices when sent to employers, while the Word version allows you to make future updates as needed."
    },
    {
      question: "Do you offer resume writing services or just typing?",
      answer: "We offer both professional resume typing and complete resume writing services. Our resume writing service includes content development, achievement highlighting, and keyword optimization by experienced HR professionals familiar with UAE job market requirements."
    },
    {
      question: "How much does resume typing cost in Dubai?",
      answer: "Our resume typing services start from AED 100 for standard formatting, while full resume writing and optimization services range from AED 250-500 depending on your career level and requirements. We offer transparent pricing with no hidden costs."
    },
    {
      question: "Can you create CVs for specific industries in Dubai?",
      answer: "Yes, we specialize in creating industry-specific CVs for UAE's key sectors including banking, healthcare, construction, hospitality, IT, oil & gas, education, and government. Our specialists understand the unique requirements and terminology of each industry."
    },
    {
      question: "Will my resume be ATS-friendly?",
      answer: "Absolutely. All our resumes are formatted to be ATS (Applicant Tracking System) friendly, ensuring they pass automated screening software used by most large employers in the UAE. We use the right keywords, formatting, and structure to maximize your chances."
    }
  ];

  const relatedServices = [
    {
      title: "Professional Translation Services",
      description: "Get your resume translated into Arabic, English, or other languages for international applications.",
      link: "/translation-services-dubai",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cover Letter Writing",
      description: "Complement your resume with a compelling, personalized cover letter.",
      link: "/services/document-processing",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Enhance your online professional presence to attract recruiters.",
      link: "/services/document-processing",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Job Application Document Package",
      description: "Complete set of professionally prepared job application documents.",
      link: "/services/packages",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const mainContent = (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Professional Resume Typing Services in Dubai</h2>
        <p className="mb-4">
          In Dubai's competitive job market, your resume is often the first impression employers have of you. At Adnan Ali Typing, we specialize in creating professional, ATS-optimized resumes that help you stand out from the competition and land more interviews.
        </p>
        <p className="mb-4">
          Our professional resume typing services in Dubai go beyond simple formatting. We strategically structure your information, highlight key achievements, and ensure your resume presents your professional story in the most compelling way possible.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Professional Resume Typing Matters in Dubai</h2>
        <p className="mb-4">
          With over 25 years of experience providing document services in the UAE, we understand exactly what Dubai employers are looking for in resumes across different industries. Our expertise includes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>ATS-optimized formatting that passes automated screening systems</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>Strategic keyword placement for higher ranking in employer searches</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>Clean, professional layouts that create strong first impressions</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>Bilingual resume services (Arabic-English) for wider opportunities</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>Industry-specific templates for different career fields in Dubai</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-1" />
            <p>Fast delivery for urgent job applications and opportunities</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Resume Typing Services in Dubai Include:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <FileText className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-bold">Basic Resume Typing</h3>
            </div>
            <p className="text-sm text-gray-600">Professional formatting of your existing content with ATS-friendly structure and layout. Includes both PDF and Word formats.</p>
            <p className="text-primary font-bold mt-2">From AED 100</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-bold">Premium Resume Creation</h3>
            </div>
            <p className="text-sm text-gray-600">Complete resume writing and formatting with achievement highlighting, keyword optimization, and professional content development.</p>
            <p className="text-primary font-bold mt-2">From AED 250</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Users className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-bold">Executive Resume Package</h3>
            </div>
            <p className="text-sm text-gray-600">Comprehensive executive-level resume with cover letter, LinkedIn profile optimization, and multiple tailored versions for different positions.</p>
            <p className="text-primary font-bold mt-2">From AED 450</p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Clock className="w-6 h-6 text-primary mr-2" />
          <h3 className="text-xl font-bold">Express Resume Services Available</h3>
        </div>
        <p className="mb-2">Need your resume urgently for a job application? Our express services ensure you receive your professionally typed resume within hours.</p>
        <ul className="list-disc ml-5 mb-4">
          <li>Same-day delivery (within 6 hours): Additional AED 75</li>
          <li>Express delivery (within 12 hours): Additional AED 50</li>
        </ul>
        <p className="text-sm italic">Contact us now to get your professional resume prepared quickly and efficiently.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Adnan Ali Typing for Resume Services in Dubai?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">25+ Years of Experience</h3>
              <p className="text-sm text-gray-600">Over two decades of document expertise in the UAE market, serving thousands of satisfied clients.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">HR Expertise</h3>
              <p className="text-sm text-gray-600">Our team includes HR professionals who understand what UAE employers are looking for in resumes.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">Standard 24-hour delivery with express options available for urgent job applications.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Guaranteed Results</h3>
              <p className="text-sm text-gray-600">Our resumes are designed to maximize your chances of getting interviews with your target employers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="ml-2 font-medium">Mohammed A.</p>
            </div>
            <p className="text-sm italic text-gray-600">
              "I applied to over 20 jobs with my old resume without any response. After getting my resume redone by Adnan Ali Typing, I received 4 interview calls within the first week! Their expertise in Dubai's job market really shows."
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="ml-2 font-medium">Sarah T.</p>
            </div>
            <p className="text-sm italic text-gray-600">
              "The team provided excellent service with my executive resume package. They perfectly highlighted my achievements and used the right keywords for my industry. Highly recommended for anyone looking for quality resume services in Dubai."
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for this specific page */}
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Resume Typing Services Dubai",
              "description": "Professional CV and resume typing services in Dubai. ATS-optimized resume formatting and expert CV writing to help you stand out in the job market. Multilingual resume services available.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Adnan Ali Typing",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dubai",
                  "addressRegion": "Dubai",
                  "addressCountry": "AE"
                },
                "telephone": "+971552636961"
              },
              "areaServed": {
                "@type": "City",
                "name": "Dubai"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Resume Typing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic Resume Typing",
                      "description": "Professional formatting of your existing content with ATS-friendly structure and layout."
                    },
                    "price": "100",
                    "priceCurrency": "AED"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Resume Creation",
                      "description": "Complete resume writing and formatting with achievement highlighting, keyword optimization, and professional content development."
                    },
                    "price": "250",
                    "priceCurrency": "AED"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Executive Resume Package",
                      "description": "Comprehensive executive-level resume with cover letter, LinkedIn profile optimization, and multiple tailored versions for different positions."
                    },
                    "price": "450",
                    "priceCurrency": "AED"
                  }
                ]
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Mohammed A."
                  },
                  "reviewBody": "I applied to over 20 jobs with my old resume without any response. After getting my resume redone by Adnan Ali Typing, I received 4 interview calls within the first week! Their expertise in Dubai's job market really shows."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah T."
                  },
                  "reviewBody": "The team provided excellent service with my executive resume package. They perfectly highlighted my achievements and used the right keywords for my industry. Highly recommended for anyone looking for quality resume services in Dubai."
                }
              ]
            }
          `}
        </script>
      </Helmet>
    </>
  );

  return (
    <ServicePageTemplate 
      title="Professional Resume Typing Services in Dubai"
      metaTitle="Resume Typing Services Dubai | ATS-Optimized CV Writing | Same-Day Service"
      metaDescription="Professional resume typing services in Dubai with ATS optimization. Get expertly formatted CVs that help you stand out in the UAE job market. Same-day service available."
      canonicalUrl="/resume-typing-services-dubai"
      heroTitle="Professional Resume & CV Typing Services"
      heroDescription="Stand out in Dubai's competitive job market with our expertly formatted, ATS-optimized resumes and CVs that get more interviews"
      mainImage="/placeholder.svg"
      mainContent={mainContent}
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default ResumeTypingServices;
