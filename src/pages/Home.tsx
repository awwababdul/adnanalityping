
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, FileText, Clock, Shield } from 'lucide-react';

const Home = () => {
  const serviceCategories = [
    {
      title: 'Visa & Immigration',
      description: 'Visa applications, renewals & immigration services',
      icon: <FileText className="w-6 h-6 text-primary" />,
      path: '/services/immigration'
    },
    {
      title: 'Emirates ID',
      description: 'Application, renewal & replacement services',
      icon: <FileText className="w-6 h-6 text-primary" />,
      path: '/services/emirates-id'
    },
    {
      title: 'Business Setup',
      description: 'Company registration & trade license services',
      icon: <FileText className="w-6 h-6 text-primary" />,
      path: '/services/business-setup'
    },
    {
      title: 'Document Processing',
      description: 'All types of document processing & attestation',
      icon: <FileText className="w-6 h-6 text-primary" />,
      path: '/services/document-processing'
    },
  ];

  const popularServices = [
    {
      title: 'Visa Stamping',
      price: 'AED 599',
      timeframe: '3-4 working days',
      path: '/services/immigration/visa-stamping'
    },
    {
      title: 'Emirates ID Renewal',
      price: 'AED 370',
      timeframe: '1-2 working days',
      path: '/services/emirates-id/renewal'
    },
    {
      title: 'Legal Translation',
      price: 'AED 80/page',
      timeframe: 'Same day',
      path: '/services/document-processing/legal-translation'
    },
    {
      title: 'Company Registration',
      price: 'AED 4,500',
      timeframe: '5-7 working days',
      path: '/services/business-setup/company-registration'
    },
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white pt-6 pb-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <img 
            src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
            alt="Adnan Ali Typing Logo" 
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-3">
            Document & Government Services
          </h1>
          <p className="mb-6 opacity-90">
            Your trusted partner for professional typing, translation, 
            and document services in Dubai with over 25 years of excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link 
              to="/services" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Browse Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/needs-wizard" 
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Service Finder
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Service Categories</h2>
          
          <div className="grid grid-cols-1 gap-3">
            {serviceCategories.map((category, index) => (
              <Link 
                key={index} 
                to={category.path} 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="px-4 py-6 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Popular Services</h2>
            <Link to="/services" className="text-primary text-sm font-medium flex items-center">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.path} 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900 mb-2">{service.title}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-primary font-medium">{service.price}</span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.timeframe}</span>
                  </div>
                </div>
                <button className="w-full bg-primary/10 text-primary text-sm py-2 rounded-lg font-medium hover:bg-primary/20">
                  View Details
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">Why Choose Us</h2>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 py-3 border-b">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">25+ Years Experience</h3>
                <p className="text-sm text-gray-500">Trusted service since 1998</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-3 border-b">
              <div className="bg-blue-100 p-2 rounded-full">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Fast Turnaround</h3>
                <p className="text-sm text-gray-500">Express and same-day options available</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Government Approved</h3>
                <p className="text-sm text-gray-500">Official partner with UAE authorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto bg-primary/10 rounded-lg p-5 text-center">
          <h2 className="font-bold mb-2">Need help with your documents?</h2>
          <p className="text-gray-700 mb-4">Our team is ready to assist you with any service</p>
          <a 
            href="https://api.whatsapp.com/send?phone=971552636961" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
