
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Star, Clock, Award, ShoppingCart } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import useCartStore from "@/store/useCartStore";

const popularServices = [
  {
    id: "visa-renewal",
    title: "Visa Renewal",
    description: "Complete visa renewal service with fast processing",
    price: "from AED 850",
    timeframe: "3-5 days",
    icon: <Award className="w-10 h-10" />,
    categoryId: "immigration",
    rating: 4.9
  },
  {
    id: "emirates-id",
    title: "Emirates ID Application",
    description: "Full service application and processing for Emirates ID",
    price: "from AED 370",
    timeframe: "1-2 days",
    icon: <Award className="w-10 h-10" />,
    categoryId: "emirates-id",
    rating: 5.0
  },
  {
    id: "business-license",
    title: "Business License",
    description: "New business license application and processing",
    price: "from AED 1,500",
    timeframe: "5-7 days",
    icon: <Award className="w-10 h-10" />,
    categoryId: "business-setup",
    rating: 4.8
  },
  {
    id: "document-translation",
    title: "Document Translation",
    description: "Certified translation for official documents",
    price: "from AED 80/page",
    timeframe: "24-48 hours",
    icon: <Award className="w-10 h-10" />,
    categoryId: "document-processing",
    rating: 4.9
  },
  {
    id: "ejari",
    title: "Ejari Registration",
    description: "Complete Ejari contract registration service",
    price: "from AED 220",
    timeframe: "Same day",
    icon: <Award className="w-10 h-10" />,
    categoryId: "document-processing",
    rating: 4.7
  },
  {
    id: "labor-contract",
    title: "Labor Contract",
    description: "MOHRE labor contract typing and processing",
    price: "from AED 350",
    timeframe: "1-2 days",
    icon: <Award className="w-10 h-10" />,
    categoryId: "document-processing",
    rating: 4.9
  }
];

const PopularServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();
  
  const nextSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / popularServices.length;
      carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(prev + 1, popularServices.length - 1));
    }
  };
  
  const prevSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / popularServices.length;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };
  
  const handleAddToCart = (service: any) => {
    addItem({
      id: service.id,
      title: service.title,
      price: null,
      isCustomPrice: true,
      categoryId: service.categoryId || 'services',
      urgency: 'standard'
    });
    
    toast({
      title: "Added to cart",
      description: `${service.title} has been added to your cart.`,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Services</h2>
            <p className="text-gray-500">Our most requested services with fast processing times</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextSlide}
              disabled={currentIndex >= popularServices.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {popularServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] w-[280px] snap-start"
            >
              <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-2 py-1">Popular</Badge>
                    <div className="flex items-center text-amber-500">
                      <Star className="fill-amber-500 stroke-amber-500 h-4 w-4" />
                      <span className="text-sm font-medium ml-1">{service.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.timeframe}
                    </div>
                    <div className="font-medium text-primary">{service.price}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/services/${service.categoryId}/${service.id}`}>
                      <Button variant="outline" className="w-full" size="sm">
                        Details
                      </Button>
                    </Link>
                    <Button 
                      className="w-full"
                      size="sm"
                      onClick={() => handleAddToCart(service)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Order
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/services">
            <Button variant="outline" className="rounded-full px-6">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default PopularServices;
