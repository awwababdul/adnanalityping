
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    // Get page view count from localStorage
    const storedPageViewCount = parseInt(localStorage.getItem('pageViewCount') || '0');
    const newPageViewCount = storedPageViewCount + 1;
    localStorage.setItem('pageViewCount', newPageViewCount.toString());

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
      setShowPrompt(false);
      console.log('PWA was installed');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // The prompt can only be used once, so clear it
    setDeferredPrompt(null);
    setShowPrompt(false);
    
    // Record install choice
    if (outcome === 'dismissed') {
      localStorage.setItem('dismissedInstallTime', Date.now().toString());
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for a while
    localStorage.setItem('dismissedInstallTime', Date.now().toString());
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-x-0 bottom-20 z-50 px-4 mx-auto">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="relative p-5">
          <button 
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1"
            aria-label="Close"
          >
            ✕
          </button>
          
          <h4 className="text-lg font-semibold mb-1">Add to Home Screen</h4>
          <p className="text-gray-600 text-sm mb-4">
            Install Adnan Ali Typing on your phone for faster access and a seamless experience.
          </p>
          
          <button 
            onClick={handleInstallClick}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium"
          >
            Install Now
          </button>
          
          <button 
            onClick={handleDismiss}
            className="w-full text-center text-sm text-gray-500 mt-3"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
