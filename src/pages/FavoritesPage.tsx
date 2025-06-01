
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Heart, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();

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
      
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <AlertCircle className="h-8 w-8 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Favorites feature coming soon</h2>
        <p className="text-gray-500 mb-6">
          The favorites feature will be available once the database is set up
        </p>
        <Button 
          onClick={() => navigate('/services')}
          className="gap-2"
        >
          Browse Services <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FavoritesPage;
