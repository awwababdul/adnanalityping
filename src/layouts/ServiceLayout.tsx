
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  canonicalUrl?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  children, 
  title, 
  description, 
  canonicalUrl = '' 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title} | Adnan Ali Typing Services Dubai</title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={`https://adnanalityping.com${canonicalUrl}`} />}
      </Helmet>
      
      <Header />
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceLayout;
