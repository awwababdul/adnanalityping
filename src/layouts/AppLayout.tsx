
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from '@/components/app/AppHeader';
import AppNavigation from '@/components/app/AppNavigation';
import { useToast } from '@/hooks/use-toast';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Create a loading effect when navigating between pages
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="flex-1 pt-14 pb-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      
      <AppNavigation />
    </div>
  );
};

export default AppLayout;
