
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Upload, Clock, User, Building, FileText, Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
} from '@/components/ui/card';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('individuals');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  const tabs = [
    { id: 'individuals', label: 'Individuals', icon: <User className="w-4 h-4" /> },
    { id: 'businesses', label: 'Businesses', icon: <Building className="w-4 h-4" /> },
    { id: 'job-seekers', label: 'Job Seekers', icon: <FileText className="w-4 h-4" /> },
    { id: 'new-to-uae', label: 'New to UAE', icon: <Globe className="w-4 h-4" /> }
  ];
  
  const userTypeServices = {
    'individuals': [
      { id: 'visa-services', title: 'Visa Services', icon: '🛂', description: 'Application, renewal, and amendments' },
      { id: 'emirates-id', title: 'Emirates ID', icon: '🆔', description: 'New and renewal services' },
      { id: 'document-typing', title: 'Document Typing', icon: '📝', description: 'Professional typing services' },
      { id: 'translation', title: 'Translation', icon: '🗣️', description: 'Certified translation services' }
    ],
    'businesses': [
      { id: 'business-setup', title: 'Business Setup', icon: '🏢', description: 'Mainland and freezone options' },
      { id: 'trade-license', title: 'Trade License', icon: '📋', description: 'New and renewal services' },
      { id: 'ejari', title: 'Ejari Registration', icon: '🏠', description: 'Tenancy contract registration' },
      { id: 'pro-services', title: 'PRO Services', icon: '👨‍💼', description: 'Government relations services' }
    ],
    'job-seekers': [
      { id: 'cv-writing', title: 'CV Writing', icon: '📄', description: 'Expert resume building' },
      { id: 'job-contract', title: 'Job Contract', icon: '📜', description: 'Review and typing' },
      { id: 'work-permit', title: 'Work Permit', icon: '🛠️', description: 'Application processing' },
      { id: 'labor-card', title: 'Labor Card', icon: '💳', description: 'New and renewal services' }
    ],
    'new-to-uae': [
      { id: 'welcome-package', title: 'Welcome Package', icon: '🎁', description: 'Essential documents and guides' },
      { id: 'visa-assistance', title: 'Visa Assistance', icon: '✈️', description: 'End-to-end visa processing' },
      { id: 'accommodation', title: 'Accommodation', icon: '🏨', description: 'Ejari and tenancy services' },
      { id: 'banking-setup', title: 'Banking Setup', icon: '🏦', description: 'Documentation for bank accounts' }
    ]
  };
  
  const recentlyCompleted = [
    { service: 'Visa Renewal', time: '2 mins ago', location: 'Dubai' },
    { service: 'Emirates ID Typing', time: '5 mins ago', location: 'Abu Dhabi' },
    { service: 'Business License', time: '12 mins ago', location: 'Sharjah' },
  ];
  
  // Popular services - highlight high value and commonly used services
  const popularServices = services.reduce((acc: any[], service) => {
    const topSubServices = service.subServices
      .filter(subService => subService.tags?.includes('popular'))
      .slice(0, 2); // Take only top 2 popular services from each category
      
    return [
      ...acc,
      ...topSubServices.map(subService => ({
        id: subService.id,
        title: subService.title,
        description: subService.description,
        categoryId: service.id,
        icon: service.icon,
        price: subService.price,
        timeframe: subService.timeframe
      }))
    ];
  }, []).slice(0, 6); // Limit to 6 total

  return (
    <div className="pb-16">
      <Helmet>
        <title>Adnan Ali Typing | Government Service Assistant</title>
        <meta name="description" content="Your trusted partner for all government services, visa assistance, and document processing in the UAE. Fast, reliable, and stress-free." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-br from-primary/90 via-primary to-primary-dark pt-14 pb-10 px-4 text-white">
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold mb-2">
                UAE Government Services Made Easy
              </h1>
              <p className="text-white/80 mb-6">
                All your document and typing needs handled by experts with 25+ years of experience
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <Button 
                onClick={() => navigate('/needs-wizard')}
                className="bg-white text-primary hover:bg-white/90 w-full gap-2 py-6 text-base"
              >
                <Search className="w-5 h-5" />
                Find the Right Service for You
              </Button>
              
              <Button 
                onClick={() => navigate('/upload-documents')}
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 w-full gap-2 py-6 text-base"
              >
                <Upload className="w-5 h-5" />
                Upload Documents & Get Quote
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Live activity indicator */}
        <div className="px-4 -mt-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Recently Completed Services</h3>
                <div className="text-xs text-gray-500 mt-1">
                  {recentlyCompleted.map((item, index) => (
                    <div key={index} className="flex justify-between mt-1">
                      <span>{item.service}</span>
                      <span>{item.time} • {item.location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User type category tabs */}
      <section className="mt-6 px-4 mb-6">
        <h2 className="font-semibold mb-3 text-lg">I need services for...</h2>
        
        <div className="grid grid-cols-4 gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex flex-col h-auto py-3 px-2 ${activeTab === tab.id ? 'bg-primary text-white' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
            </Button>
          ))}
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          {userTypeServices[activeTab as keyof typeof userTypeServices].map((service) => (
            <Card 
              key={service.id} 
              className="border-none shadow-md hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-medium text-sm">{service.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="px-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Popular Services</h2>
          <Button variant="link" className="flex items-center gap-1 text-sm" onClick={() => navigate('/services')}>
            View all <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {popularServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card 
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
                onClick={() => navigate(`/services/${service.categoryId}/${service.id}`)}
              >
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-3">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{service.title}</h3>
                          <p className="text-gray-500 text-sm mt-0.5 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        {service.timeframe && (
                          <span className="text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full flex items-center mr-2">
                            <Clock className="w-3 h-3 mr-1" /> {service.timeframe}
                          </span>
                        )}
                        
                        {service.price && (
                          <span className="text-xs font-semibold">
                            {typeof service.price === 'number' ? `AED ${service.price}` : service.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Why Choose Us */}
      <section className="px-4 mb-6">
        <h2 className="font-semibold text-lg mb-4">Why Choose Us</h2>
        
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                {
                  title: "25+ Years of Experience",
                  description: "Trusted by thousands of clients in the UAE"
                },
                {
                  title: "Fast Turnaround Times", 
                  description: "Same-day service available for urgent requests"
                },
                {
                  title: "Government Approved",
                  description: "Licensed and authorized service provider"
                },
                {
                  title: "Best-in-class Support",
                  description: "Dedicated agents for your needs"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button 
                onClick={() => navigate('/about')}
                variant="outline" 
                className="w-full"
              >
                Learn More About Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Satisfaction Guarantee */}
      <section className="px-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                🛡️
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">100% Satisfaction Guarantee</h3>
              <p className="text-sm text-blue-700 mt-1">
                We ensure your documents are processed correctly and on time. If not, we'll fix it at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
