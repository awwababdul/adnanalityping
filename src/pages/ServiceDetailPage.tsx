
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ChevronLeft, Star, Clock, CheckCircle, 
  FileCheck, ShieldCheck, MessageCircle, DollarSign,
  ArrowRight, AlertCircle, Calendar, CircleCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MobileAppLayout from '@/components/MobileAppLayout';

const ServiceDetailPage = () => {
  const { categoryId, serviceId } = useParams<{ categoryId: string; serviceId: string }>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  // In a real app, this would be fetched based on categoryId and serviceId
  const service = {
    id: serviceId || "visa-stamping",
    title: serviceId === "visa-stamping" ? "Visa Stamping" : 
           serviceId === "emirates-id-renewal" ? "Emirates ID Renewal" :
           "Service Name",
    categoryId: categoryId || "immigration",
    categoryTitle: categoryId === "immigration" ? "Immigration & Visa Services" :
                   categoryId === "emirates-id" ? "Emirates ID Services" :
                   "Service Category",
    description: "Complete visa stamping service for all visa types in UAE including employment, family, tourist, and visit visas. Our service ensures your application is processed efficiently and correctly.",
    price: "Starting from AED 150",
    timeEstimate: "1-2 working days",
    authority: categoryId === "immigration" ? "ICA" :
               categoryId === "emirates-id" ? "ICA" :
               "UAE Government",
    authorityLogo: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 124,
    popular: true,
    express: true,
    color: categoryId === "immigration" ? "bg-blue-500" :
           categoryId === "emirates-id" ? "bg-green-500" :
           "bg-primary",
    requirementsList: [
      "Original passport with minimum 6 months validity",
      "Visa approval from relevant authority",
      "Passport-sized photographs with white background",
      "Application form (we can assist with filling this)",
      "Required fees (government + service charges)"
    ],
    processList: [
      "Submit required documents for verification",
      "Application processing by our experts",
      "Submit to immigration authorities",
      "Visa stamping process",
      "Collection and delivery of stamped passport"
    ],
    faqs: [
      {
        question: "How long does visa stamping take?",
        answer: "The standard processing time is 1-2 working days for normal applications. We also offer express service which can be completed within the same day in many cases (additional charges apply)."
      },
      {
        question: "What documents do I need for visa stamping?",
        answer: "You'll need your original passport with at least 6 months validity, visa approval, passport-sized photographs, and the application form. Our team will guide you through specific requirements based on your visa type."
      },
      {
        question: "Can you process visa stamping if I'm outside the UAE?",
        answer: "Yes, we can process visa stamping while you're outside the UAE through our power of attorney service. This allows us to handle the entire process on your behalf."
      },
      {
        question: "What government fees are applicable for visa stamping?",
        answer: "Government fees vary depending on the visa type, duration, and category. Our team will provide you with a detailed breakdown of all applicable fees before processing."
      }
    ],
    testimonials: [
      {
        name: "Mohammed A.",
        comment: "Fantastic service! Got my visa stamping done in just one day. Very professional staff.",
        rating: 5,
        date: "2 weeks ago"
      },
      {
        name: "Sarah T.",
        comment: "Very efficient and knowledgeable. They handled all the paperwork perfectly.",
        rating: 5,
        date: "1 month ago"
      },
      {
        name: "John D.",
        comment: "Great experience. They made the visa stamping process simple and stress-free.",
        rating: 4,
        date: "3 months ago"
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted:", formData);
    // Then redirect to WhatsApp with prefilled message
    const message = `Hi, I'm ${formData.name} and I'm interested in ${service.title}. Please contact me at ${formData.phone}. ${formData.message}`;
    window.open(`https://api.whatsapp.com/send?phone=971552636961&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>{service.title} | {service.categoryTitle} | Adnan Ali Typing</title>
        <meta name="description" content={`Professional ${service.title} service in Dubai. Fast, reliable and government-approved with 25+ years experience. Get a quote today!`} />
      </Helmet>

      {/* Service Header */}
      <div className={`relative text-white pb-6 pt-4 px-4 overflow-hidden ${service.color}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="relative z-10">
          <Link to={`/services/${service.categoryId}`} className="inline-flex items-center text-white/90 mb-2">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to {service.categoryTitle}
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-bold">
                  {service.title}
                </h1>
                {service.popular && (
                  <Badge className="bg-yellow-400/20 text-yellow-100 border-yellow-400/30 text-[10px]">
                    Popular
                  </Badge>
                )}
              </div>
              
              <p className="text-xs text-white/90 mb-2">
                Official service authorized by {service.authority}
              </p>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs">{service.rating} • {service.reviewCount} Reviews</span>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <img 
                src={service.authorityLogo} 
                alt={service.authority} 
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <Clock className="w-3 h-3" />
              <span>{service.timeEstimate}</span>
            </div>
            <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Official</span>
            </div>
            {service.express && (
              <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                <FileCheck className="w-3 h-3" />
                <span>Express Available</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="px-4 py-3 bg-white shadow-sm border-b sticky top-14 z-30">
        <div className="flex gap-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 text-xs h-9"
              >
                <Calendar className="w-3 h-3 mr-1" /> Schedule
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4 max-w-md mx-auto">
                <DrawerHeader>
                  <DrawerTitle>Schedule Service</DrawerTitle>
                  <DrawerDescription>
                    Choose a convenient time for your {service.title} service
                  </DrawerDescription>
                </DrawerHeader>
                
                <div className="py-4">
                  <p className="text-sm text-gray-500 mb-4">Available appointment slots this week:</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {["Today, 2:00 PM", "Today, 4:30 PM", "Tomorrow, 10:00 AM", "Tomorrow, 3:00 PM"].map((slot, index) => (
                      <Button 
                        key={index} 
                        variant="outline"
                        className="text-xs justify-start"
                      >
                        <CircleCheck className="w-3 h-3 mr-2" />
                        {slot}
                      </Button>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    * Scheduling an appointment reserves your slot but does not guarantee service completion if documents are incomplete
                  </p>
                </div>
                
                <DrawerFooter>
                  <Button onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}>
                    Continue to Booking
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          
          <Button 
            size="sm" 
            className="flex-1 text-xs h-9"
            onClick={() => window.open(`https://api.whatsapp.com/send?phone=971552636961&text=Hi,%20I'm%20interested%20in%20${service.title}%20service.%20Could%20you%20please%20provide%20more%20information%20and%20pricing?`, "_blank")}
          >
            <MessageCircle className="w-3 h-3 mr-1" /> Chat Now
          </Button>
          
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="secondary" 
                size="sm" 
                className="flex-1 text-xs h-9"
              >
                <DollarSign className="w-3 h-3 mr-1" /> Get Quote
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4 max-w-md mx-auto">
                <DrawerHeader>
                  <DrawerTitle>Request a Quote</DrawerTitle>
                  <DrawerDescription>
                    Fill in your details to get a personalized quote for {service.title}
                  </DrawerDescription>
                </DrawerHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Input 
                      id="message"
                      name="message"
                      placeholder="Any specific requirements or questions?"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-yellow-50 text-yellow-800 text-xs rounded-md">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <p>Providing your details helps us prepare an accurate quote</p>
                  </div>
                
                  <DrawerFooter className="px-0">
                    <Button type="submit">
                      Submit Quote Request
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline" type="button">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </form>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      {/* Service Details */}
      <Tabs defaultValue="details" className="px-4 mt-4">
        <TabsList className="w-full h-auto bg-transparent border-b overflow-x-auto flex-nowrap justify-start rounded-none pb-2">
          <TabsTrigger value="details" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Details
          </TabsTrigger>
          <TabsTrigger value="process" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Process
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Reviews
          </TabsTrigger>
          <TabsTrigger value="faq" className="text-xs py-1 px-3 h-auto rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            FAQ
          </TabsTrigger>
        </TabsList>
        
        {/* Details Tab */}
        <TabsContent value="details" className="mt-4 space-y-4">
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <h2 className="font-medium mb-2">Service Overview</h2>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border rounded-lg p-3">
                  <h3 className="text-xs font-medium mb-1">Processing Time</h3>
                  <p className="text-sm">{service.timeEstimate}</p>
                </div>
                <div className="border rounded-lg p-3">
                  <h3 className="text-xs font-medium mb-1">Pricing</h3>
                  <p className="text-sm">{service.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <h2 className="font-medium mb-3">Requirements</h2>
              <ul className="space-y-2">
                {service.requirementsList.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <p>Not sure if you have all the requirements? Chat with our experts for guidance.</p>
                </div>
                <Button 
                  className="w-full mt-3 text-xs"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
                >
                  Chat with Document Specialist
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <h2 className="font-medium mb-2">Why Choose Us</h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <FileCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Guaranteed Compliance</h3>
                    <p className="text-xs text-gray-600">All documents processed according to UAE legal standards</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Express Processing</h3>
                    <p className="text-xs text-gray-600">Fast-track options available for urgent requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Official Authorization</h3>
                    <p className="text-xs text-gray-600">Approved service provider by UAE government authorities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Process Tab */}
        <TabsContent value="process" className="mt-4 space-y-4">
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <h2 className="font-medium mb-4">Service Process</h2>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                
                <div className="space-y-6">
                  {service.processList.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative z-10">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </div>
                      </div>
                      <div className="pt-1.5">
                        <p className="text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h3 className="text-sm font-medium mb-2">Estimated Timeline</h3>
                <div className="flex items-center justify-between text-sm">
                  <span>Application</span>
                  <div className="h-1 flex-1 bg-gray-200 mx-2">
                    <div className="h-1 bg-primary w-1/3"></div>
                  </div>
                  <span>Delivery</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Standard processing: {service.timeEstimate}<br />
                  Express processing: Same day (additional charges apply)
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <h2 className="font-medium mb-3">What You'll Receive</h2>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Completed visa stamping on your passport</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Official receipt for all government payments</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Digital copy of all processed documents</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Service completion certificate</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Ready to proceed?</h3>
            <Button 
              className="w-full"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=971552636961&text=Hi,%20I%20would%20like%20to%20proceed%20with%20the%20${service.title}%20service.%20What%20are%20the%20next%20steps?`, "_blank")}
            >
              Start Your Application <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </TabsContent>
        
        {/* Reviews Tab */}
        <TabsContent value="reviews" className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Customer Reviews</h2>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">{service.rating} • {service.reviewCount} reviews</span>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Verified
            </Badge>
          </div>
          
          <div className="space-y-4">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-sm">{testimonial.name}</h3>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                  
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-3 h-3 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full text-xs"
            onClick={() => window.open("https://g.co/kgs/vLnEIZ", "_blank")}
          >
            Read more reviews on Google
          </Button>
        </TabsContent>
        
        {/* FAQ Tab */}
        <TabsContent value="faq" className="mt-4 space-y-4 pb-8">
          <h2 className="font-medium">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Card className="border-none bg-primary/5">
            <CardContent className="p-4">
              <h3 className="text-sm font-medium mb-2">Still have questions?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Our visa specialists are ready to help with any questions about {service.title}.
              </p>
              <Button 
                className="w-full text-xs"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
              >
                Chat with a Specialist
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MobileAppLayout>
  );
};

export default ServiceDetailPage;
