
import React from 'react';
import { Helmet } from 'react-helmet';

const WhatsAppPixel = () => {
  const FB_PIXEL_ID = "XXXXXXXXXX"; // Replace with your actual Facebook Pixel ID

  return (
    <Helmet>
      {/* Facebook Pixel Code */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');

          // Track when a user initiates WhatsApp contact
          document.addEventListener('click', function(e) {
            const target = e.target as HTMLElement;
            if (target && (target.closest('a[href*="whatsapp"]') || target.closest('button[data-whatsapp="true"]') || target.closest('[onClick*="whatsapp"]'))) {
              fbq('track', 'Contact', {method: 'WhatsApp'});
              console.log('WhatsApp contact tracked');
            }
          }, false);

          // Track when a user views a service page
          const path = window.location.pathname;
          if (path.includes('/services/') || path.includes('-services-') || path.includes('-typing-')) {
            fbq('track', 'ViewContent', {
              content_type: 'service',
              content_name: document.title
            });
            console.log('Service page view tracked');
          }
          
          // Track when a user views a location-specific page
          if (path.includes('typing-services-') || path.includes('/locations/')) {
            fbq('track', 'ViewContent', {
              content_type: 'location_service',
              content_name: document.title,
              location: path.split('typing-services-')[1] || 'unknown'
            });
            console.log('Location service page view tracked');
          }
          
          // Track when a user downloads the guide
          document.addEventListener('submit', function(e) {
            const target = e.target as HTMLFormElement;
            if (target && target.closest('#download-guide')) {
              fbq('track', 'Lead', {
                content_name: 'UAE Document Guide Download',
                content_category: 'guide'
              });
              console.log('Guide download tracked');
            }
          }, false);
          
          // Track when a user clicks on phone number
          document.addEventListener('click', function(e) {
            const target = e.target as HTMLElement;
            if (target && target.closest('a[href^="tel:"]')) {
              fbq('track', 'Contact', {method: 'Phone'});
              console.log('Phone contact tracked');
            }
          }, false);
        `}
      </script>
      <noscript>
        {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
          />
        `}
      </noscript>
    </Helmet>
  );
};

export default WhatsAppPixel;
