import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Star, Clock, CheckCircle, 
  Building, Users, FileText, MapPin, 
  GraduationCap, FileCheck, FileSignature, BadgeCheck
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MobileAppLayout from '@/components/MobileAppLayout';
import { services } from '@/data/services';

const Home = () => {
  const featuredServices = [
    {
      id: "visa-stamping",
      title: "Visa Stamping",
      authority: "ICA",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      timeEstimate: "24-48 hours",
      reviewCount: 124,
      rating: 4.9,
      featured: true
    },
    {
      id: "emirates-id-renewal",
      title: "Emirates ID Renewal",
      authority: "ICA",
      icon: <BadgeCheck className="w-6 h-6 text-primary" />,
      timeEstimate: "Same day",
      reviewCount: 98,
      rating: 4.8,
      featured: true
    },
    {
      id: "legal-translation",
      title: "Legal Translation",
      authority: "Dubai Courts",
      icon: <FileText className="w-6 h-6 text-primary" />,
      timeEstimate: "1-3 hours",
      reviewCount: 156,
      rating: 4.9,
      featured: true
    },
    {
      id: "golden-visa",
      title: "Golden Visa",
      authority: "ICA",
      icon: <Star className="w-6 h-6 text-primary" />,
      timeEstimate: "3-5 days",
      reviewCount: 58,
      rating: 4.7,
      featured: true
    },
  ];
  
  const serviceCategories = [
    {
      id: "immigration",
      title: "Immigration & Visa",
      icon: <Users className="w-8 h-8" />,
      authority: "ICA",
      color: "bg-blue-500",
      featured: true
    },
    {
      id: "emirates-id",
      title: "Emirates ID Services",
      icon: <BadgeCheck className="w-8 h-8" />,
      authority: "ICA",
      color: "bg-green-500",
      featured: true
    },
    {
      id: "tasheel",
      title: "Tasheel Services",
      icon: <FileCheck className="w-8 h-8" />,
      authority: "MOHRE",
      color: "bg-orange-500",
      featured: false
    },
    {
      id: "dubai-courts",
      title: "Dubai Courts",
      icon: <FileSignature className="w-8 h-8" />,
      authority: "Dubai Courts",
      color: "bg-purple-500",
      featured: false
    },
    {
      id: "ded-services",
      title: "Economic Department",
      icon: <Building className="w-8 h-8" />,
      authority: "DED / DET",
      color: "bg-red-500",
      featured: false
    },
    {
      id: "dha-services",
      title: "Dubai Health Authority",
      icon: <FileCheck className="w-8 h-8" />,
      authority: "DHA",
      color: "bg-teal-500",
      featured: false
    },
    {
      id: "translation",
      title: "Certified Translation",
      icon: <FileText className="w-8 h-8" />,
      authority: "Ministry of Justice",
      color: "bg-indigo-500",
      featured: true
    },
    {
      id: "business-setup",
      title: "Business Setup",
      icon: <Building className="w-8 h-8" />,
      authority: "DED / Free Zones",
      color: "bg-amber-500",
      featured: true
    },
  ];

  const locations = [
    {
      name: "Dubai",
      count: 45,
      url: "/typing-services-dubai"
    },
    {
      name: "Abu Dhabi",
      count: 38,
      url: "/typing-services-abu-dhabi"
    },
    {
      name: "Business Bay",
      count: 24,
      url: "/typing-services-business-bay"
    }
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>Adnan Ali Typing | Document & Visa Services UAE</title>
        <meta name="description" content="Professional document processing, visa services, Emirates ID, and business setup services in Dubai with over 25 years of experience." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative bg-primary text-white pb-6 pt-4 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/100" />
        <div className="relative z-10">
          <h1 className="text-xl font-bold mb-2">
            UAE's Most Trusted<br />Document Services
          </h1>
          <p className="text-sm mb-4 text-white/90">
            Fast, certified services with 25+ years of experience
          </p>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9 • 500+ Reviews</span>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="bg-white text-primary hover:bg-white/90 flex-1"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
            >
              Chat on WhatsApp
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 flex-1"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <Tabs defaultValue="all" className="px-4 mt-4">
        <TabsList className="w-full h-auto bg-transparent border-b overflow-x-auto flex-nowrap justify-start rounded-none pb-2">
          <TabsTrigger value="all" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            All
          </TabsTrigger>
          <TabsTrigger value="popular" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Popular
          </TabsTrigger>
          <TabsTrigger value="express" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Express
          </TabsTrigger>
          <TabsTrigger value="nearby" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Nearby
          </TabsTrigger>
          <TabsTrigger value="new" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            New
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          {/* Featured Services */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Featured Services</h2>
              <Link to="/services" className="text-sm text-primary flex items-center">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4">
              {featuredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[160px] w-[160px]"
                >
                  <Card className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {service.icon}
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {service.authority}
                        </span>
                      </div>
                      
                      <h3 className="font-medium text-sm mb-1">{service.title}</h3>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{service.timeEstimate}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{service.rating} ({service.reviewCount})</span>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-7 px-2 text-xs"
                          onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961&text=Hi,%20I'm%20interested%20in%20" + service.title, "_blank")}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Service Categories */}
          <div>
            <h2 className="font-semibold mb-3">Browse by Category</h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3"
            >
              {serviceCategories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={`/services/${category.id}`}>
                    <Card className="border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className={`h-2 ${category.color}`} />
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {category.icon}
                          </div>
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {category.authority}
                          </span>
                        </div>
                        
                        <h3 className="font-medium text-sm">{category.title}</h3>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">Tap to explore</span>
                          <ChevronRight className="w-4 h-4 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Locations */}
          <div className="mt-6">
            <h2 className="font-semibold mb-3">Services by Location</h2>
            
            <div className="space-y-3">
              {locations.map((location) => (
                <Link 
                  key={location.name}
                  to={location.url}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{location.name}</h3>
                      <span className="text-xs text-gray-500">{location.count} services available</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-6 p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
            <h3 className="text-center font-semibold mb-4">Why Choose Adnan Ali Typing</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "25+ years experience" },
                { icon: <Clock className="w-5 h-5 text-primary" />, text: "Same-day service" },
                { icon: <BadgeCheck className="w-5 h-5 text-primary" />, text: "Government approved" },
                { icon: <Star className="w-5 h-5 text-primary" />, text: "4.9 star rating" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                  {item.icon}
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4">
              <Button 
                size="sm" 
                className="text-xs"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
              >
                Chat with us now
              </Button>
            </div>
          </div>
          
          {/* Recently Viewed */}
          <div className="mt-6 mb-8">
            <h2 className="font-semibold mb-3">Recently Viewed</h2>
            <Card className="border shadow-sm">
              <CardContent className="p-4 text-center text-gray-500 text-sm">
                <p>Services you view will appear here</p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-xs mt-1"
                >
                  Browse Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Other tab contents would be implemented similarly */}
        <TabsContent value="popular" className="mt-4">
          <div className="py-8 text-center text-gray-500">
            <p>Popular services content will appear here</p>
          </div>
        </TabsContent>
        <TabsContent value="express" className="mt-4">
          <div className="py-8 text-center text-gray-500">
            <p>Express services content will appear here</p>
          </div>
        </TabsContent>
        <TabsContent value="nearby" className="mt-4">
          <div className="py-8 text-center text-gray-500">
            <p>Nearby services content will appear here</p>
          </div>
        </TabsContent>
        <TabsContent value="new" className="mt-4">
          <div className="py-8 text-center text-gray-500">
            <p>New services content will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </MobileAppLayout>
  );
};

export default Home;
