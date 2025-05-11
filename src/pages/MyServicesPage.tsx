
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle, FileText, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const MyServicesPage = () => {
  // Mock data for active and completed services
  const activeServices = [
    {
      id: 'srv-001',
      title: 'Visa Renewal Application',
      status: 'processing',
      lastUpdated: '2 hours ago',
      nextStep: 'Document Review',
      progress: 35,
      eta: '3 days',
      comments: 'Awaiting document verification'
    },
    {
      id: 'srv-002',
      title: 'Emirates ID Renewal',
      status: 'approval',
      lastUpdated: '1 day ago',
      nextStep: 'Biometric Appointment',
      progress: 65,
      eta: '5 days',
      comments: 'Approval received, scheduling appointment'
    }
  ];
  
  const completedServices = [
    {
      id: 'srv-003',
      title: 'Document Translation',
      completionDate: '15 Apr 2023',
      documents: ['passport_translation.pdf', 'certificate_translation.pdf']
    },
    {
      id: 'srv-004',
      title: 'Business Card Typing',
      completionDate: '10 Mar 2023',
      documents: ['business_card_design.pdf']
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'approval':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'review':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'processing':
        return 'In Progress';
      case 'approval':
        return 'Awaiting Approval';
      case 'review':
        return 'Under Review';
      default:
        return 'Processing';
    }
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>My Services | Adnan Ali Typing</title>
        <meta name="description" content="Track and manage your services with Adnan Ali Typing." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">My Services</h1>
          <p className="text-sm text-gray-600">Track and manage your active and completed services</p>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {activeServices.length > 0 ? (
              <div className="space-y-4">
                {activeServices.map((service) => (
                  <Card key={service.id} className="overflow-hidden border-none shadow-sm">
                    <CardContent className="p-0">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-medium">{service.title}</h3>
                            <div className="flex items-center gap-1 mt-1">
                              {getStatusIcon(service.status)}
                              <span className="text-sm">{getStatusLabel(service.status)}</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            Updated {service.lastUpdated}
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4 mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{service.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${service.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>ETA: {service.eta}</span>
                          </div>
                          <div>
                            Next: {service.nextStep}
                          </div>
                        </div>
                        
                        {service.comments && (
                          <div className="mt-3 text-sm bg-blue-50 p-2 rounded text-blue-700">
                            {service.comments}
                          </div>
                        )}
                      </div>
                      
                      <div className="border-t flex divide-x">
                        <Button 
                          variant="ghost" 
                          className="flex-1 rounded-none"
                          onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961&text=Hello%2C%20I'd%20like%20an%20update%20on%20my%20service%20" + service.id, "_blank")}
                        >
                          Request Update
                        </Button>
                        <Button variant="ghost" className="flex-1 rounded-none">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-3">
                  <FileText className="h-12 w-12 mx-auto opacity-20" />
                </div>
                <h3 className="text-lg font-medium mb-1">No active services</h3>
                <p className="text-sm text-gray-500 mb-4">You don't have any active services at the moment</p>
                <Button onClick={() => window.location.href = '/services'}>
                  Browse Services
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedServices.length > 0 ? (
              <div className="space-y-3">
                {completedServices.map((service) => (
                  <div 
                    key={service.id}
                    className="bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>Completed on {service.completionDate}</span>
                        </div>
                        
                        {service.documents && service.documents.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {service.documents.map((doc, idx) => (
                              <div 
                                key={idx}
                                className="bg-gray-100 text-xs py-1 px-2 rounded flex items-center"
                              >
                                <FileText className="h-3 w-3 mr-1" />
                                {doc}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-3">
                  <CheckCircle className="h-12 w-12 mx-auto opacity-20" />
                </div>
                <h3 className="text-lg font-medium mb-1">No completed services</h3>
                <p className="text-sm text-gray-500">Your completed services will appear here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 pt-4 border-t">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Need help with your services?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our customer service team is available to assist you with any questions about your services.
            </p>
            <Button 
              className="w-full"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
            >
              Contact Customer Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServicesPage;
