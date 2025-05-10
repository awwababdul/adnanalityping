
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ChevronLeft, Star, Clock, CheckCircle, 
  Filter, ArrowRight, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import MobileAppLayout from '@/components/MobileAppLayout';

const ServiceCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // This would be fetched based on categoryId in a real implementation
  const category = {
    id: categoryId || "immigration",
    title: categoryId === "immigration" ? "Immigration & Visa Services" : 
           categoryId === "emirates-id" ? "Emirates ID Services" :
           categoryId === "translation" ? "Translation Services" : 
           "Service Category",
    authority: categoryId === "immigration" ? "ICA" :
               categoryId === "emirates-id" ? "ICA" :
               categoryId === "translation" ? "Ministry of Justice" :
               "UAE Government",
    description: "Official documentation services authorized and approved by the UAE government.",
    authorityLogo: "/placeholder.svg",
    color: categoryId === "immigration" ? "bg-blue-500" :
           categoryId === "emirates-id" ? "bg-green-500" :
           categoryId === "translation" ? "bg-indigo-500" :
           "bg-primary"
  };
  
  // These would be fetched based on categoryId
  const services = [
    {
      id: "visa-stamping",
      title: "Visa Stamping",
      description: "Complete visa stamping process for all visa types including employment, family, and visit visas.",
      price: "Starting from AED 150",
      timeEstimate: "1-2 working days",
      authority: "ICA",
      rating: 4.9,
      reviewCount: 124,
      popular: true,
      express: true
    },
    {
      id: "visa-renewal",
      title: "Visa Renewal",
      description: "Hassle-free visa renewal service for residents including all processing and documentation.",
      price: "Starting from AED 350",
      timeEstimate: "2-3 working days",
      authority: "ICA",
      rating: 4.8,
      reviewCount: 92,
      popular: true,
      express: false
    },
    {
      id: "visa-status-change",
      title: "Visa Status Change",
      description: "Convert your visit visa to residence visa or change visa status while in UAE.",
      price: "Starting from AED 800",
      timeEstimate: "1-3 working days",
      authority: "ICA",
      rating: 4.7,
      reviewCount: 68,
      popular: false,
      express: true
    },
    {
      id: "golden-visa",
      title: "Golden Visa Application",
      description: "Premium processing for UAE Golden Visa applications with full documentation support.",
      price: "Custom quote",
      timeEstimate: "3-4 weeks",
      authority: "ICA",
      rating: 4.9,
      reviewCount: 42,
      popular: true,
      express: false
    }
  ];
  
  const filters = [
    { id: "all", label: "All" },
    { id: "popular", label: "Popular" },
    { id: "express", label: "Express" },
    { id: "new", label: "New" }
  ];

  const filteredServices = activeFilter 
    ? services.filter(service => {
        if (activeFilter === "popular") return service.popular;
        if (activeFilter === "express") return service.express;
        if (activeFilter === "new") return false; // No new services in our mock data
        return true;
      })
    : services;

  return (
    <MobileAppLayout>
      <Helmet>
        <title>{category.title} | Adnan Ali Typing</title>
        <meta name="description" content={`Professional ${category.title.toLowerCase()} with UAE government approval. Fast, reliable service with 25+ years experience.`} />
      </Helmet>

      {/* Category Header */}
      <div className={`relative text-white pb-6 pt-4 px-4 overflow-hidden ${category.color}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center text-white/90 mb-2">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold mb-1">
                {category.title}
              </h1>
              <p className="text-xs text-white/90 mb-2">
                Official services approved by {category.authority}
              </p>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs">4.9 • 250+ Reviews</span>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <img 
                src={category.authorityLogo} 
                alt={category.authority} 
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <CheckCircle className="w-3 h-3" />
              <span>Official</span>
            </div>
            <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Verified</span>
            </div>
            <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <Clock className="w-3 h-3" />
              <span>Fast Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 border-b overflow-x-auto">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              size="sm"
              className={`text-xs rounded-full ${
                activeFilter === filter.id || (filter.id === "all" && !activeFilter)
                  ? "bg-primary/10 text-primary border-primary/30"
                  : ""
              }`}
              onClick={() => setActiveFilter(filter.id === "all" ? null : filter.id)}
            >
              {filter.label}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs rounded-full ml-auto"
          >
            <Filter className="w-3 h-3 mr-1" /> More Filters
          </Button>
        </div>
      </div>
      
      {/* Services List */}
      <div className="p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className={`h-1 ${category.color}`} />
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-base">{service.title}</h3>
                          {service.popular && (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 text-[10px] h-4 px-1">
                              Popular
                            </Badge>
                          )}
                          {service.express && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px] h-4 px-1">
                              Express
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{service.description}</p>
                      </div>
                      
                      <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {service.authority}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.timeEstimate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{service.rating} ({service.reviewCount} reviews)</span>
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="py-0 text-xs font-medium text-primary hover:no-underline">
                          View service details
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-1 text-xs space-y-2">
                            <p>
                              <strong>Requirements:</strong> Valid passport, application form, photos, existing visa (for renewals)
                            </p>
                            <p>
                              <strong>Process:</strong> Document submission, application processing, visa issuance
                            </p>
                            <p>
                              <strong>Pricing:</strong> {service.price} (excludes government fees)
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="flex items-center justify-between pt-3 border-t mt-3">
                      <p className="text-sm font-medium">{service.price}</p>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 text-xs"
                        >
                          More Info
                        </Button>
                        <Button 
                          size="sm" 
                          className="h-8 text-xs"
                          onClick={() => window.open(`https://api.whatsapp.com/send?phone=971552636961&text=Hi,%20I'm%20interested%20in%20${service.title}`, "_blank")}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredServices.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              <p>No services match your filter criteria</p>
              <Button 
                variant="link" 
                className="p-0 h-auto mt-2"
                onClick={() => setActiveFilter(null)}
              >
                View all services
              </Button>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Trust Signals */}
      <div className="px-4 pb-8 pt-2">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-4">
            <h3 className="font-medium text-sm mb-3">Why choose our services?</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <p>Officially authorized by {category.authority}</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <p>Over 25 years of experience in UAE</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <p>Full compliance with UAE regulations</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <p>Multilingual support team</p>
              </div>
            </div>
            
            <Button 
              className="w-full mt-3 gap-2"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
            >
              Chat with our experts <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </MobileAppLayout>
  );
};

export default ServiceCategoryPage;
