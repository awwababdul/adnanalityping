
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';
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
      
      // Show thank you toast or notification
      const thankYouElement = document.createElement('div');
      thankYouElement.textContent = 'Thanks for installing our app!';
      thankYouElement.style.position = 'fixed';
      thankYouElement.style.bottom = '80px';
      thankYouElement.style.left = '50%';
      thankYouElement.style.transform = 'translateX(-50%)';
      thankYouElement.style.background = '#0070F3';
      thankYouElement.style.color = 'white';
      thankYouElement.style.padding = '8px 16px';
      thankYouElement.style.borderRadius = '20px';
      thankYouElement.style.zIndex = '9999';
      document.body.appendChild(thankYouElement);
      
      setTimeout(() => {
        document.body.removeChild(thankYouElement);
      }, 3000);
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
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Hide the prompt regardless of outcome
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for a while
    localStorage.setItem('dismissedInstallPrompt', 'true');
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
          className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-4 md:bottom-4 md:w-80"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Install App</h4>
                </div>
                <Button 
                  size="icon"
                  variant="ghost"
                  onClick={handleDismiss}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use Adnan Ali Typing like a native app! Add to home screen for faster access.
              </p>
              
              <div className="flex gap-2 justify-end">
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={handleDismiss}
                >
                  Not Now
                </Button>
                <Button 
                  onClick={handleInstallClick}
                  size="sm"
                  className="gap-1"
                >
                  <Download className="h-4 w-4" />
                  Install
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
