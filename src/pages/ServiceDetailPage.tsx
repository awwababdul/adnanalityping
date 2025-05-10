
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, Award, FileCheck, ShoppingCart, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import MobileAppLayout from "@/components/MobileAppLayout";
import { services } from "@/data/services";
import useCartStore, { CartItem } from "@/store/useCartStore";

const ServiceDetailPage = () => {
  const { categoryId, serviceId } = useParams();
  const [selectedUrgency, setSelectedUrgency] = useState<"standard" | "express" | "same-day">("standard");
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addItem, items } = useCartStore();
  
  const category = services.find(s => s.id === categoryId);
  const service = category?.subServices.find(ss => ss.id === serviceId);

  if (!category || !service) {
    return (
      <MobileAppLayout>
        <div className="p-4">Service not found</div>
      </MobileAppLayout>
    );
  }

  const isInCart = items.some(item => item.id === serviceId);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: serviceId || 'unknown',
      title: service.title,
      price: null,
      isCustomPrice: true,
      categoryId: categoryId || 'unknown',
      urgency: selectedUrgency
    };
    
    addItem(newItem);
    
    toast({
      title: "Added to cart",
      description: `${service.title} has been added to your cart.`,
    });
    
    setAddedToCart(true);
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const getUrgencyTimeframe = (urgency: string) => {
    switch(urgency) {
      case 'express':
        return '4-8 hours';
      case 'same-day':
        return '1-3 hours';
      default:
        return '24-48 hours';
    }
  };

  const getUrgencyPriceModifier = (urgency: string) => {
    switch(urgency) {
      case 'express':
        return '50% additional fee';
      case 'same-day':
        return '100% additional fee';
      default:
        return 'Standard price';
    }
  };

  return (
    <MobileAppLayout>
      <div className="px-4 py-6">
        <Link to={`/services/${categoryId}`} className="inline-flex items-center text-primary mb-4 hover:underline text-sm">
          <ArrowLeft className="w-3 h-3 mr-1" />
          Back to {category.title}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-xl font-bold">{service.title}</h1>
            {service.officialService && (
              <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>Official</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{service.description}</p>
          
          {service.governmentAuthority && (
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="font-medium text-gray-700 mr-2">Authority:</span>
              <span>{service.governmentAuthority}</span>
            </div>
          )}
        </motion.div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Select Service Urgency</h3>
                <Select 
                  value={selectedUrgency} 
                  onValueChange={(value) => setSelectedUrgency(value as "standard" | "express" | "same-day")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (24-48h)</SelectItem>
                    <SelectItem value="express">Express (4-8h)</SelectItem>
                    <SelectItem value="same-day">Same Day (1-3h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex gap-3 text-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{getUrgencyTimeframe(selectedUrgency)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-gray-500" />
                  <span>{getUrgencyPriceModifier(selectedUrgency)}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full"
              onClick={handleAddToCart}
              disabled={isInCart && !addedToCart}
            >
              {addedToCart ? (
                <Check className="mr-2 h-4 w-4" />
              ) : (
                <ShoppingCart className="mr-2 h-4 w-4" />
              )}
              {isInCart && !addedToCart ? 'Already in cart' : (addedToCart ? 'Added to cart' : 'Add to cart')}
            </Button>
          </CardFooter>
        </Card>

        {service.requirements && (
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Requirements</h2>
            <Card>
              <CardContent className="p-4">
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  {service.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {service.process && (
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Process</h2>
            <Card>
              <CardContent className="p-4">
                <ol className="list-decimal list-inside space-y-3 text-sm">
                  {service.process.map((step, index) => (
                    <li key={index} className="text-gray-600">
                      <span className="font-medium text-gray-800">{`Step ${index + 1}: `}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        )}

        {service.documents && (
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Required Documents</h2>
            <Card>
              <CardContent className="p-4">
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  {service.documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {service.governmentLink && (
          <div className="mb-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(service.governmentLink, '_blank')}
            >
              View Official Government Page
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex flex-col items-center text-center">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Need assistance with this service?</h3>
          <p className="text-xs text-blue-600 mb-3">Our team is ready to help you complete this service quickly and correctly.</p>
          <Button 
            variant="secondary"
            size="sm"
            className="bg-white"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
          >
            Chat with us on WhatsApp
          </Button>
        </div>
      </div>
    </MobileAppLayout>
  );
};

export default ServiceDetailPage;
