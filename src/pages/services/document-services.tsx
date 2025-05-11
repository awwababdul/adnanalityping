
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { FileText, Book } from 'lucide-react';
import { documentServices } from '@/data/documentServices';

const DocumentServicesPage = () => {
  return (
    <div className="container max-w-lg mx-auto px-4 py-6 pb-24">
      <Helmet>
        <title>Document Drafting Services | Adnan Ali Typing</title>
        <meta name="description" content="Professional document drafting services including CV writing, contracts, agreements, and legal documents." />
      </Helmet>

      <div className="mb-8">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">Document Drafting Services</h1>
        <p className="text-gray-600 text-center">
          Professional document drafting services for all your business, legal, and personal needs
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {documentServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} delay={index * 0.1} />
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Book className="w-5 h-5 text-primary" />
          Why Choose Our Document Services
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Professional Quality:</span> Documents drafted by experienced professionals
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Legal Compliance:</span> All documents comply with UAE regulations
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Fast Turnaround:</span> Quick service with options for urgent needs
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Tailored Solutions:</span> Customized to your specific requirements
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Expert Guidance:</span> Support throughout the document creation process
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-3">Partner Services Available</h3>
        <p className="text-sm text-gray-700 mb-4">
          Through our partnerships with Precedential Law, GUVNOR, and AI8TY, we offer additional professional services including legal consultations, digital marketing, and AI-powered business solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium w-full"
          onClick={() => window.location.href = '/services/packages'}
        >
          Explore Partner Services
        </motion.button>
      </div>
    </div>
  );
};

export default DocumentServicesPage;
