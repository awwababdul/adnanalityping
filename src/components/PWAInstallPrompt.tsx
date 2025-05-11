
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const [pageViewCount, setPageViewCount] = useState(0);

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsPWAInstalled(true);
      return;
    }

    // Get page view count from localStorage
    const storedPageViewCount = parseInt(localStorage.getItem('pageViewCount') || '0');
    const newPageViewCount = storedPageViewCount + 1;
    localStorage.setItem('pageViewCount', newPageViewCount.toString());
    setPageViewCount(newPageViewCount);

    // Check if the prompt was dismissed recently
    const dismissedTime = parseInt(localStorage.getItem('dismissedInstallTime') || '0');
    const showAgainAfter = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
    const isDismissedRecently = dismissedTime && (Date.now() - dismissedTime < showAgainAfter);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent default to avoid the browser showing its own prompt
      e.preventDefault();
      
      // Store the event for later use
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Only show prompt after 2 page views and if not dismissed recently
      if (newPageViewCount >= 2 && !isDismissedRecently) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 3000); // Show after 3 seconds
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsPWAInstalled(true);
      setShowPrompt(false);
      console.log('PWA was installed');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // The prompt can only be used once, so clear it
    setDeferredPrompt(null);
    setShowPrompt(false);
    
    // Record install choice
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
      localStorage.setItem('dismissedInstallTime', Date.now().toString());
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for a while
    localStorage.setItem('dismissedInstallTime', Date.now().toString());
  };

  // If the app is already installed or no prompt is available, don't show anything
  if (isPWAInstalled || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-20 z-50 px-4 mx-auto md:max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="relative">
              {/* Header image */}
              <div className="h-28 bg-gradient-to-r from-blue-500 to-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
                
                <button 
                  onClick={handleDismiss}
                  className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded-full p-1"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1">Add to Home Screen</h4>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                  Install Adnan Ali Typing on your phone for faster access and a seamless experience.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-50 p-1 rounded-full text-blue-600 mt-0.5">
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Access all services even without internet</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-50 p-1 rounded-full text-blue-600 mt-0.5">
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Faster document uploads and processing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-50 p-1 rounded-full text-blue-600 mt-0.5">
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Get notifications when your services update</p>
                  </div>
                </div>
                
                <Button 
                  onClick={handleInstallClick}
                  className="w-full gap-2"
                >
                  Install Now <ArrowRight className="h-4 w-4" />
                </Button>
                
                <button 
                  onClick={handleDismiss}
                  className="w-full text-center text-sm text-gray-500 mt-3"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Simple check icon component
const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default PWAInstallPrompt;
