import React, { useEffect } from 'react';

interface ChatbotIntegrationProps {
  isEnabled?: boolean;
}

const ChatbotIntegration: React.FC<ChatbotIntegrationProps> = ({ isEnabled = true }) => {
  useEffect(() => {
    if (!isEnabled) return;

    // Tawk.to integration script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/688d02dfc7960319223cf916/1j1jd6epe';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Initialize Tawk API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // Add script to page
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Customize Tawk.to widget positioning to avoid WhatsApp button conflicts
    const customizeWidget = () => {
      if ((window as any).Tawk_API) {
        // Position the widget with custom styling to ensure proper spacing
        (window as any).Tawk_API.customStyle = {
          visibility: {
            desktop: {
              position: 'br', // bottom-right
              xOffset: '20px',
              yOffset: '120px' // Leave space for WhatsApp button (60px + some buffer)
            },
            mobile: {
              position: 'br',
              xOffset: '20px', 
              yOffset: '120px'
            }
          }
        };

        // Set widget to minimize by default to reduce visual clutter
        (window as any).Tawk_API.onLoad = function() {
          (window as any).Tawk_API.hideWidget();
          
          // Show a subtle indicator that chat is available
          setTimeout(() => {
            (window as any).Tawk_API.showWidget();
          }, 3000);
        };
      }
    };

    // Wait for script to load then customize
    script.onload = customizeWidget;

    // Cleanup function
    return () => {
      // Remove script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Clean up Tawk API
      if ((window as any).Tawk_API) {
        delete (window as any).Tawk_API;
        delete (window as any).Tawk_LoadStart;
      }
    };
  }, [isEnabled]);

  // This component doesn't render anything visible
  return null;
};

export default ChatbotIntegration;