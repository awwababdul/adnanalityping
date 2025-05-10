
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Award, 
  Clock, 
  ShoppingCart,
  Check,
  ChevronRight
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet';
import { toast } from '@/components/ui/use-toast';
import MobileAppLayout from '@/components/MobileAppLayout';
import { services } from '@/data/services';
import useCartStore, { CartItem } from '@/store/useCartStore';

const ServiceCategoryPage = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { addItem, items } = useCartStore();
  const [addedServiceIds, setAddedServiceIds] = useState<{[key: string]: boolean}>({});
  
  const category = services.find(s => s.id === categoryId);
  
  if (!category) {
    return (
      <MobileAppLayout>
        <div className="p-4">Category not found</div>
      </MobileAppLayout>
    );
  }
  
  const filteredServices = category.subServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || 
                         (service.tags && service.tags.some(tag => selectedFilters.includes(tag)));
    
    return matchesSearch && matchesFilters;
  });

  const handleAddToCart = (service: any) => {
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
    setAddedServiceIds({
      ...addedServiceIds,
      [service.id]: true
    });
    
    setTimeout(() => {
      setAddedServiceIds({
        ...addedServiceIds,
        [service.id]: false
      });
    }, 2000);
  };

  const isInCart = (serviceId: string) => {
    return items.some(item => item.id === serviceId);
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>{category.title} | Adnan Ali Typing</title>
        <meta name="description" content={`Professional ${category.title.toLowerCase()} services in UAE. Fast, reliable and officially recognized.`} />
      </Helmet>
      
      <div className="px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-1">{category.title}</h1>
          <p className="text-sm text-gray-600">{category.description || `Browse our range of professional ${category.title.toLowerCase()} services`}</p>
        </div>
        
        <div className="flex gap-3 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4 mb-6">
          {category.subServices && category.subServices.length > 0 ? (
            filteredServices.map((service) => (
              <motion.div
                key={service.id}
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
                    onClick={() => handleAddToCart(service)}
                    disabled={isInCart(service.id) && !addedServiceIds[service.id]}
                  >
                    {addedServiceIds[service.id] ? (
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
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No services found in this category.</p>
            </div>
          )}
          
          {filteredServices.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <p className="text-gray-500">No services found matching "{searchQuery}"</p>
              <Button variant="link" onClick={() => setSearchQuery('')}>Clear search</Button>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Need a Custom Service?</h3>
          <p className="text-xs text-blue-600 mb-3">Don't see what you need? We can help with any document service in the UAE.</p>
          <Button 
            variant="secondary"
            size="sm"
            className="bg-white"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
          >
            Request Custom Service
          </Button>
        </div>
      </div>
    </MobileAppLayout>
  );
};

export default ServiceCategoryPage;
