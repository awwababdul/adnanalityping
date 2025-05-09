
import React from 'react';
import { Helmet } from 'react-helmet';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleTagManager = () => {
  const GTM_ID = "GTM-XXXXXXX"; // Replace with your actual GTM ID

  return (
    <Helmet>
      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </script>

      {/* Google Tag Manager (noscript) - for body */}
      <noscript>
        {`
          <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}
      </noscript>

      {/* Enhanced ecommerce tracking for location-based pages */}
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX'); // Replace with your actual GA4 measurement ID
          
          // Track location page views
          const path = window.location.pathname;
          if (path.includes('typing-services-') || path.includes('/locations/')) {
            const locationName = path.split('typing-services-')[1] || path.split('/locations/')[1] || 'unknown';
            dataLayer.push({
              'event': 'view_location_page',
              'location_name': locationName
            });
            console.log('Location page view pushed to dataLayer:', locationName);
          }
          
          // Track guide downloads
          document.addEventListener('submit', function(e) {
            const target = e.target as HTMLFormElement;
            if (target && target.closest('#download-guide')) {
              dataLayer.push({
                'event': 'guide_download',
                'guide_name': 'UAE Document Guide'
              });
              console.log('Guide download pushed to dataLayer');
            }
          }, false);
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;
