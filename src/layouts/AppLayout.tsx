
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppHeader from '@/components/app/AppHeader';
import AppNavigation from '@/components/app/AppNavigation';
import HumanAssistModal from '@/components/app/HumanAssistModal';
import ProgressIndicator from '@/components/app/ProgressIndicator';
import ServiceAssistant from '@/components/app/ServiceAssistant';
import { useToast } from '@/hooks/use-toast';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [showAssistModal, setShowAssistModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Create a loading effect when navigating between pages
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Show human assistance modal after 45 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      // Don't show on cart or checkout pages
      if (!location.pathname.includes('/cart') && !location.pathname.includes('/checkout')) {
        setShowAssistModal(true);
      }
    }, 45000);
    
    const resetTimer = () => {
      clearTimeout(timer);
    };
    
    // Reset timer on user interaction
    window.addEventListener('click', resetTimer);
    window.addEventListener('touchstart', resetTimer);
    window.addEventListener('keydown', resetTimer);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [location.pathname]);
  
  // Track progress through the service flow
  const getProgressStep = () => {
    if (location.pathname === '/') return 0;
    if (location.pathname.startsWith('/services') && !location.pathname.includes('/')) return 1;
    if (location.pathname.includes('/:categoryId/:serviceId')) return 2;
    if (location.pathname === '/upload-documents') return 3;
    if (location.pathname === '/cart') return 4;
    return -1; // No progress indicator
  };
  
  const progressStep = getProgressStep();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AppHeader />
      
      {progressStep >= 0 && (
        <ProgressIndicator currentStep={progressStep} />
      )}
      
      <main className="flex-1 pt-14 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <Outlet />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <ServiceAssistant />
      <AppNavigation />
      
      <AnimatePresence>
        {showAssistModal && (
          <HumanAssistModal onClose={() => setShowAssistModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppLayout;
