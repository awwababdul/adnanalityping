
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [initialInteraction, setInitialInteraction] = useState(false);
  const [idleTimer, setIdleTimer] = useState<NodeJS.Timeout | null>(null);
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);

  const whatsappNumber = "971552636961";
  const defaultMessage = "Hi, I'm interested in your typing services. Can you help me?";

  // Track idle time and scroll position
  useEffect(() => {
    if (initialInteraction) return; // Only show auto-prompts before first interaction
    
    // Reset idle timer on user activity
    const resetIdleTimer = () => {
      if (idleTimer) clearTimeout(idleTimer);
      
      setIdleTimer(setTimeout(() => {
        setShowReminder(true);
      }, 60000)); // Show after 1 minute of inactivity
    };
    
    // Check scroll position
    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      
      setScrollTimer(setTimeout(() => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 60) {
          setShowReminder(true);
        }
      }, 1000));
    };
    
    // Event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetIdleTimer, false);
    });
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial timer setup
    resetIdleTimer();
    
    // Cleanup
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, false);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialInteraction, idleTimer, scrollTimer]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setShowReminder(false);
    setInitialInteraction(true);
  };
  
  const handleChatNow = () => {
    setInitialInteraction(true);
    setIsOpen(false);
    setShowReminder(false);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(defaultMessage)}`, '_blank');
  };
  
  const handleCloseReminder = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowReminder(false);
    setInitialInteraction(true);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-2 w-64 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="text-white w-4 h-4" />
                </div>
                <h3 className="font-semibold text-gray-800">WhatsApp Chat</h3>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Chat with our experts for instant support with your document needs.
            </p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={handleChatNow}
            >
              Chat Now
            </Button>
          </motion.div>
        )}
        
        {showReminder && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="bg-white rounded-lg shadow-lg p-3 mb-2 border border-gray-200 flex items-start"
            onClick={handleButtonClick}
          >
            <div className="flex-grow">
              <p className="text-sm font-medium">Need help with your documents?</p>
              <p className="text-xs text-gray-500">Chat with us for quick assistance!</p>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-5 w-5 p-0 ml-2 mt-1"
              onClick={handleCloseReminder}
            >
              <X className="h-3 w-3" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
