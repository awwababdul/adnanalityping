
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase, SavedFavorite } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import useCartStore from '@/store/useCartStore';
import { services } from '@/data/services';
import { documentServices } from '@/data/documentServices';

// Combine all services for easy lookup
const allServices = [...services, ...documentServices];

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<SavedFavorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [serviceDetails, setServiceDetails] = useState<any[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCartStore();
  
  useEffect(() => {
    fetchFavorites();
  }, []);
  
  // Fetch user's favorites from Supabase
  const fetchFavorites = async () => {
    setLoading(true);
    
    try {
      const { data: session } = await supabase.auth.getSession();
      
      if (!session?.session?.user) {
        // Not logged in, redirect to sign in
        navigate('/sign-in', { state: { returnTo: '/favorites' } });
        return;
      }
      
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', session.session.user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setFavorites(data || []);
      
      // Map favorites to actual service details
      const details = (data || []).map(favorite => {
        // Find the service category
        const category = allServices.find(c => c.id === favorite.category_id);
        
        // Find the specific service
        const service = category?.subServices.find(s => s.id === favorite.service_id);
        
        return {
          ...favorite,
          serviceDetails: service,
          categoryName: category?.title
        };
      }).filter(item => item.serviceDetails); // Filter out any that couldn't be found
      
      setServiceDetails(details);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      toast({
        title: "Failed to load favorites",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const removeFavorite = async (id: string) => {
    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      // Update local state
      setFavorites(favorites.filter(fav => fav.id !== id));
      setServiceDetails(serviceDetails.filter(item => item.id !== id));
      
      toast({
        title: "Removed from favorites",
        description: "Service removed from your favorites"
      });
    } catch (error) {
      console.error('Error removing favorite:', error);
      toast({
        title: "Failed to remove",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };
  
  const addToCart = (service: any) => {
    addItem({
      id: service.serviceDetails.id,
      title: service.serviceDetails.title,
      price: service.serviceDetails.price ? parseFloat(service.serviceDetails.price.toString().replace(/[^0-9.]/g, '')) : null,
      isCustomPrice: !service.serviceDetails.price || typeof service.serviceDetails.price === 'string',
      categoryId: service.category_id,
      urgency: "standard" // Default urgency
    });
    
    toast({
      title: "Added to cart",
      description: `${service.serviceDetails.title} added to your cart`
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <Helmet>
        <title>Your Favorites | Adnan Ali Typing</title>
        <meta name="description" content="View and manage your favorite services from Adnan Ali Typing." />
      </Helmet>
      
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Heart className="mr-2 h-6 w-6 text-primary" />
        Your Favorites
      </h1>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </CardContent>
              <CardFooter>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : serviceDetails.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Heart className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-6">
            Save your favorite services for quick access later
          </p>
          <Button 
            onClick={() => navigate('/services')}
            className="gap-2"
          >
            Browse Services <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {serviceDetails.map(service => (
              <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-gray-50 pb-3">
                  <CardTitle className="text-lg flex justify-between items-start">
                    <span>{service.serviceDetails.title}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFavorite(service.id)}
                      className="h-8 w-8 text-gray-500 hover:text-destructive -mt-1 -mr-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <p className="text-sm text-gray-500">{service.categoryName}</p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {service.serviceDetails.description || "Get professional assistance with this service."}
                  </p>
                  
                  {service.serviceDetails.price && (
                    <div className="mt-2 font-medium text-primary">
                      {service.serviceDetails.price}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="border-t bg-gray-50 gap-2 flex justify-between">
                  <Button 
                    variant="outline" 
                    className="w-1/2"
                    onClick={() => navigate(`/services/${service.category_id}/${service.service_id}`)}
                  >
                    Details
                  </Button>
                  <Button 
                    className="w-1/2"
                    onClick={() => addToCart(service)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => navigate('/services')}
              className="gap-2"
            >
              Browse More Services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
