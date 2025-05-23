
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after user has been on site for 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Hide tooltip after it's been shown for 5 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=971552636961&text=Hello%2C%20I%20need%20assistance%20with%20government%20services.', '_blank');
    setIsOpen(false);
  };
  
  const handleCallClick = () => {
    window.open('tel:+971552636961');
    setIsOpen(false);
  };

  const handleRequestCallback = () => {
    // This could open a form or modal in the future
    window.open('/get-quote?type=callback', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="flex flex-col gap-2 mb-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCallClick}
                className="bg-white text-primary shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRequestCallback}
                className="bg-white text-amber-500 shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Request callback"
              >
                <User className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="relative">
          <AnimatePresence>
            {showTooltip && !isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -5 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -5 }}
                className="absolute bottom-full right-0 mb-2 mr-2 bg-white rounded-lg shadow-lg p-3 w-64"
              >
                <div className="text-sm">
                  <p className="font-bold">Need help with paperwork?</p>
                  <p className="text-gray-600 text-xs mt-1">Our experts are ready to solve your visa & document issues</p>
                </div>
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(!isOpen);
              setShowTooltip(false);
            }}
            className={`${isOpen ? 'bg-gray-600' : 'bg-primary'} text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg`}
            aria-label="Support options"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <div className="relative flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ServiceAssistant;
