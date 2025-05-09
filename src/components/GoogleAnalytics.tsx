
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  useEffect(() => {
    // This is where initialization would typically happen if using gtag.js directly
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-MEASUREMENT_ID'); // Replace with your actual measurement ID
  }, []);

  return (
    <Helmet>
      {/* Google Analytics GA4 Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MEASUREMENT_ID'); // Replace with your actual measurement ID
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
