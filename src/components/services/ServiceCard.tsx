
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Check,
  ChevronRight,
  ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import useCartStore, { CartItem } from '@/store/useCartStore';
import { SubService } from '@/types/services';

interface ServiceCardProps {
  service: SubService;
  categoryId: string | undefined;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, categoryId }) => {
  const { addItem, items } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);
  
  const isInCart = (serviceId: string) => {
    return items.some(item => item.id === serviceId);
  };
  
  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: service.id || 'unknown',
      title: service.title,
      price: null,
      isCustomPrice: true,
      categoryId: categoryId || 'unknown',
      urgency: 'standard'
    };
    
    addItem(newItem);
    
    toast({
      title: "Added to cart",
      description: `${service.title} has been added to your cart.`,
    });
    
    // Show temporary "Added" state
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
    >
      <div className="p-4">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="font-medium">{service.title}</h3>
          {service.officialService && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-600 hover:bg-blue-200 text-xs h-5">
              <Award className="h-3 w-3 mr-1" />
              Official
            </Badge>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {service.tags && service.tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="bg-gray-50 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500 gap-3">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{service.timeframe || '24-48h'}</span>
            </div>
            {service.governmentAuthority && (
              <span>{service.governmentAuthority}</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="text-xs h-8"
        >
          <Link to={`/services/${categoryId}/${service.id}`}>
            <span>View Details</span>
            <ChevronRight className="h-3 w-3 ml-1" />
          </Link>
        </Button>
        
        <Button 
          size="sm"
          className="text-xs h-8"
          onClick={handleAddToCart}
          disabled={isInCart(service.id) && !isAdded}
        >
          {isAdded ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              <span>Added</span>
            </>
          ) : isInCart(service.id) ? (
            <>
              <ShoppingCart className="h-3 w-3 mr-1" />
              <span>In Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-3 w-3 mr-1" />
              <span>Add to Cart</span>
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
