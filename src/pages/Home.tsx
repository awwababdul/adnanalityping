
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, FileText, Clock, Shield, File, Briefcase, User, FileEdit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useServiceStore from '@/store/useServiceStore';
import NewsFeed from '@/components/NewsFeed';
import { useAuth } from '@/contexts/AuthContext';

const Home = () => {
  const { recommendedServices } = useServiceStore();
  const { user } = useAuth();
  
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
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      path: '/services/business-setup'
    },
    {
      title: 'Document Services',
      description: 'Document drafting, contracts & agreements',
      icon: <FileEdit className="w-6 h-6 text-primary" />,
      path: '/services/document-services'
    },
    {
      title: 'Document Processing',
      description: 'All types of document processing & attestation',
      icon: <File className="w-6 h-6 text-primary" />,
      path: '/services/document-processing'
    },
  ];

  const popularServices = [
    {
      title: 'Visa Stamping',
      timeframe: '3-4 working days',
      path: '/services/immigration/visa-stamping'
    },
    {
      title: 'Emirates ID Renewal',
      timeframe: '1-2 working days',
      path: '/services/emirates-id/renewal'
    },
    {
      title: 'Legal Translation',
      timeframe: 'Same day',
      path: '/services/document-processing/legal-translation'
    },
    {
      title: 'CV & Resume Drafting',
      timeframe: '2-3 working days',
      path: '/services/document-services/cv-resume'
    },
  ];

  return (
    <div className="pb-16">
      <Helmet>
        <title>Adnan Ali Typing | Professional Document & Government Services in Dubai</title>
        <meta name="description" content="Professional typing services in Dubai - legal document typing, Arabic English translation, business document solutions, and certified typing services with 25+ years experience." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white pt-8 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-10"></div>
        <div className="max-w-lg mx-auto text-center relative z-10">
          <motion.img 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
            alt="Adnan Ali Typing Logo" 
            className="w-24 h-24 mx-auto mb-6"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold mb-3"
          >
            Document & Government Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 opacity-90"
          >
            Your trusted partner for professional typing, translation, 
            and document services in Dubai with over 25 years of excellence.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-4"
          >
            <Link 
              to="/needs-wizard" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Find My Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/services" 
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Browse All Services
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* User Welcome Section - Show if logged in */}
      {user && (
        <section className="px-4 py-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-medium text-lg mb-1">Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ''}!</h2>
                  <p className="text-gray-600 text-sm mb-3">Continue with your document services</p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/my-services" className="text-primary text-sm font-medium hover:underline flex items-center">
                      My Services <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link to="/upload-documents" className="text-primary text-sm font-medium hover:underline flex items-center">
                      Upload Documents <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link to="/favorites" className="text-primary text-sm font-medium hover:underline flex items-center">
                      Saved Services <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Personalized Services - Show if available */}
      {recommendedServices && recommendedServices.length > 0 && (
        <section className="px-4 py-6 bg-blue-50">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-serif font-bold">Your Recommended Services</h2>
              <Link to="/needs-wizard" className="text-primary text-sm font-medium flex items-center">
                Refine <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {recommendedServices.slice(0, 2).map((service, index) => (
                <Link 
                  key={index} 
                  to={`/services/${service.categoryId}/${service.id}`}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-900 mb-1">{service.title}</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{service.timeframe}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full text-sm py-1 h-auto">
                    Get Personalized Quote
                  </Button>
                </Link>
              ))}
              
              <Link 
                to="/needs-wizard"
                className="bg-blue-100 p-4 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors text-center"
              >
                <p className="font-medium text-primary mb-1">Find More Personalized Services</p>
                <span className="text-sm text-gray-600">Answer a few questions to get tailored recommendations</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Service Categories */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-serif font-bold mb-4">Service Categories</h2>
          
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
            <h2 className="text-xl font-serif font-bold">Popular Services</h2>
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
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.timeframe}</span>
                  </div>
                </div>
                <button className="w-full bg-primary/10 text-primary text-sm py-2 rounded-lg font-medium hover:bg-primary/20">
                  Get a Quote
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* News Feed Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <NewsFeed />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-serif font-bold mb-4 text-center">Why Choose Us</h2>
          
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
      
      {/* Service Finder CTA */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-lg p-5 text-center text-white">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8" />
          </div>
          <h2 className="font-serif font-bold text-xl mb-2">Not sure what services you need?</h2>
          <p className="text-white/90 mb-4">Answer a few quick questions and we'll recommend the right services for you</p>
          <Link 
            to="/needs-wizard"
            className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
          >
            Start Service Finder
          </Link>
        </div>
      </section>
      
      {/* WhatsApp CTA */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto bg-primary/10 rounded-lg p-5 text-center">
          <h2 className="font-serif font-bold mb-2">Need help with your documents?</h2>
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
