
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  ChevronRight, FileText, MessageCircle, CheckCircle,
  AlertCircle, DollarSign, Building2, Users, 
  BadgeCheck, Globe2, Printer, FileCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MobileAppLayout from '@/components/MobileAppLayout';

const GetQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: '',
    specificService: '',
    message: '',
    urgency: 'standard'
  });
  const [step, setStep] = useState(1);
  const [successDialog, setSuccessDialog] = useState(false);
  
  const serviceCategories = [
    { 
      id: 'immigration', 
      name: 'Immigration & Visa Services',
      icon: <Users className="w-5 h-5 text-blue-500" />,
      services: [
        'Visa Stamping',
        'Visa Renewal',
        'Change Status',
        'Golden Visa',
        'Visit Visa',
        'Other Visa Services'
      ]
    },
    { 
      id: 'emirates-id', 
      name: 'Emirates ID Services',
      icon: <BadgeCheck className="w-5 h-5 text-green-500" />,
      services: [
        'Emirates ID New Application',
        'Emirates ID Renewal',
        'Emirates ID Replacement',
        'Card Collection'
      ]
    },
    { 
      id: 'typing', 
      name: 'Typing Services',
      icon: <Printer className="w-5 h-5 text-purple-500" />,
      services: [
        'Legal Document Typing',
        'Contract & Agreement Typing',
        'Form Filling Services',
        'Application Typing'
      ]
    },
    { 
      id: 'translation', 
      name: 'Translation Services',
      icon: <Globe2 className="w-5 h-5 text-indigo-500" />,
      services: [
        'Legal Translation',
        'Document Translation',
        'Certificate Translation',
        'Website Translation'
      ]
    },
    { 
      id: 'business', 
      name: 'Business Setup Services',
      icon: <Building2 className="w-5 h-5 text-orange-500" />,
      services: [
        'Company Formation',
        'Trade License',
        'PRO Services',
        'Document Clearing'
      ]
    },
    { 
      id: 'document', 
      name: 'Document Processing',
      icon: <FileCheck className="w-5 h-5 text-red-500" />,
      services: [
        'Document Authentication',
        'Certificate Attestation',
        'Document Clearance',
        'Notary Services'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your server
    
    // Show success dialog
    setSuccessDialog(true);
    
    // After showing the dialog, you might want to redirect or reset the form
    setTimeout(() => {
      const selectedCategory = serviceCategories.find(cat => cat.id === formData.serviceCategory);
      const categoryName = selectedCategory ? selectedCategory.name : formData.serviceCategory;
      
      const message = `Hi, I'm ${formData.name} requesting a quote for ${
        formData.specificService || categoryName
      } with ${formData.urgency} urgency. My contact number is ${formData.phone}. ${formData.message}`;
      
      window.open(`https://api.whatsapp.com/send?phone=971552636961&text=${encodeURIComponent(message)}`, "_blank");
    }, 2000);
  };

  // Get services for selected category
  const getServicesForCategory = () => {
    const category = serviceCategories.find(cat => cat.id === formData.serviceCategory);
    return category ? category.services : [];
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>Get a Custom Quote | Adnan Ali Typing</title>
        <meta name="description" content="Request a custom quote for document services, visa processing, Emirates ID, translation, and business setup services in UAE." />
      </Helmet>

      <div className="px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">Get a Custom Quote</h1>
          <p className="text-sm text-gray-600">
            Tell us what you need and we'll provide a personalized quote for our services.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2].map((stepNum) => (
              <div 
                key={stepNum} 
                className="flex flex-col items-center"
                style={{ width: step === 3 ? '33.33%' : '50%' }}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    step === stepNum ? 'bg-primary text-white' :
                    step > stepNum ? 'bg-green-500 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                </div>
                <span className="text-xs mt-1 text-center">
                  {stepNum === 1 ? 'Select Service' : 'Your Details'}
                </span>
              </div>
            ))}
          </div>
          <div className={`h-1 w-full ${step > 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Select Service Category</h2>
                
                <div className="grid grid-cols-2 gap-3">
                  {serviceCategories.map((category) => (
                    <Card 
                      key={category.id}
                      className={`border cursor-pointer transition-all hover:border-primary/50 hover:shadow-md ${
                        formData.serviceCategory === category.id ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleSelectChange('serviceCategory', category.id)}
                    >
                      <CardContent className="p-3 flex flex-col items-center text-center">
                        <div className="p-2 rounded-full bg-gray-100 mb-2">
                          {category.icon}
                        </div>
                        <h3 className="text-sm font-medium">{category.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {formData.serviceCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <h2 className="text-lg font-semibold mb-4">Select Specific Service</h2>
                  
                  <div className="space-y-2">
                    {getServicesForCategory().map((service, index) => (
                      <Card 
                        key={index}
                        className={`border cursor-pointer hover:border-primary/50 transition-all ${
                          formData.specificService === service ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => handleSelectChange('specificService', service)}
                      >
                        <CardContent className="p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="text-sm">{service}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </CardContent>
                      </Card>
                    ))}
                    
                    <Card 
                      className={`border cursor-pointer hover:border-primary/50 transition-all ${
                        formData.specificService === 'Other' ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleSelectChange('specificService', 'Other')}
                    >
                      <CardContent className="p-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm">Other / Not Listed</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}
              
              {formData.specificService && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <h2 className="text-lg font-semibold mb-4">Service Urgency</h2>
                  
                  <div className="space-y-2">
                    {['standard', 'urgent', 'express'].map((urgency) => (
                      <Card 
                        key={urgency}
                        className={`border cursor-pointer hover:border-primary/50 transition-all ${
                          formData.urgency === urgency ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => handleSelectChange('urgency', urgency)}
                      >
                        <CardContent className="p-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium capitalize">{urgency}</h3>
                            <p className="text-xs text-gray-500">
                              {urgency === 'standard' && 'Regular processing time (1-2 business days)'}
                              {urgency === 'urgent' && 'Faster processing (24 hours)'}
                              {urgency === 'express' && 'Same-day processing (additional fees apply)'}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  onClick={handleNextStep} 
                  disabled={!formData.serviceCategory || !formData.specificService || !formData.urgency}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}
          
          {/* Step 2: Contact Information */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-4">Your Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Additional Details (Optional)</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Please provide any specific requirements or questions about the service"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-3">Service Summary</h2>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">
                        {serviceCategories.find(cat => cat.id === formData.serviceCategory)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{formData.specificService}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Urgency:</span>
                      <span className="font-medium capitalize">{formData.urgency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mb-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePreviousStep}
                >
                  Back
                </Button>
                <Button 
                  type="submit"
                  disabled={!formData.name || !formData.phone}
                >
                  Submit Quote Request
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-center text-xs text-gray-500 mb-6">
                <MessageCircle className="w-3 h-3" />
                <p>A team member will contact you within 30 minutes during business hours</p>
              </div>
            </motion.div>
          )}
        </form>
        
        <div className="space-y-4">
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Transparent Pricing</h3>
                  <p className="text-xs text-gray-600">
                    We provide clear, detailed quotes with no hidden fees. All government and service charges are itemized separately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Need Immediate Assistance?</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    For urgent requirements or complex services, connect directly with our customer service team.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat with Us Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={successDialog} onOpenChange={setSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quote Request Received</DialogTitle>
            <DialogDescription>
              Thank you for your request. Our team will process your quote and contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center py-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="mt-4 font-medium">Quote Request Submitted!</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              A confirmation has been sent to your WhatsApp.
              Our team will get back to you within 30 minutes during business hours.
            </p>
          </div>
          <div className="mt-4">
            <Button 
              className="w-full"
              onClick={() => {
                setSuccessDialog(false);
                // In a real app, you might redirect back to home or another appropriate page
              }}
            >
              Return to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </MobileAppLayout>
  );
};

export default GetQuotePage;
