import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomerHappinessPopupProps {
  delay?: number;
  showOnHomepageOnly?: boolean;
}

const CustomerHappinessPopup: React.FC<CustomerHappinessPopupProps> = ({ 
  delay = 4000, 
  showOnHomepageOnly = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('customer-happiness-popup-seen');
    if (hasSeenPopup) return;

    // Check if we should show on this page
    if (showOnHomepageOnly && window.location.pathname !== '/') return;

    // Show popup after delay
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnHomepageOnly, hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('customer-happiness-popup-seen', 'true');
  };

  const handleStartChat = () => {
    // Open Tawk.to chat if available
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    } else {
      // Fallback to WhatsApp
      window.open('https://api.whatsapp.com/send?phone=971552636961&text=Hi! I saw your Customer Happiness Agent message. Can you help me?', '_blank');
    }
    handleClose();
  };

  const handleLearnMore = () => {
    // Scroll to services section or navigate to about page
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/about';
    }
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-popup"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-80 md:w-96 z-modal"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-neutral-200/50 overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-success-50 opacity-60" />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-neutral-100 transition-colors focus-ring"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>

                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse-glow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 text-lg">
                      Meet our Customer Happiness Agent
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      We're here to assist you instantly
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    <strong>No delays, no waiting.</strong> Get seamless support aligned with Dubai's world-class customer service standards. Our team is ready to help with all your document needs.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleStartChat}
                    className="flex-1 h-12 bg-gradient-to-r from-primary to-primary-600 hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Chat
                  </Button>
                  <Button 
                    onClick={handleLearnMore}
                    variant="outline"
                    className="flex-1 h-12 border-primary-200 text-primary hover:bg-primary-50 transition-all duration-300"
                    size="lg"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Learn More
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-4 pt-4 border-t border-neutral-200/50">
                  <div className="flex items-center justify-center gap-4 text-xs text-neutral-600">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span>24+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span>Instant Response</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/30 via-success/30 to-primary/30 opacity-50 animate-gradient-x" 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomerHappinessPopup;