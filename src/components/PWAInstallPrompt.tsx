
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
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
        setShowPrompt(true);
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
          className="fixed bottom-20 left-4 right-4 z-50 px-4 py-3 bg-primary text-white rounded-lg shadow-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            <span className="text-sm font-medium">Use Adnan Ali Typing like an app! Add to home screen for faster access.</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleInstallClick}
              className="text-xs bg-white text-primary px-3 py-1 rounded-full font-medium"
            >
              Install
            </button>
            <button 
              onClick={handleDismiss}
              className="text-white p-1 rounded-full"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
