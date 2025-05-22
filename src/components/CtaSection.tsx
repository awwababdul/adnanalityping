
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  onGetStarted?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/90 to-primary text-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let us take care of your government transactions—so you can focus on your business
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            Our team of experts ensures hassle-free processing of all your documentation needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upload-documents">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-blue-50"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload My Document
              </Button>
            </Link>
            
            <Link to="/get-quote">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Callback
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=MOL" 
                alt="MOL Approved" 
                className="h-10 mr-2 opacity-80"
              />
              <span className="text-sm opacity-75">MOL Approved</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=GDRFA" 
                alt="GDRFA Certified" 
                className="h-10 mr-2 opacity-80"
              />
              <span className="text-sm opacity-75">GDRFA Certified</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=DHA" 
                alt="DHA Partner" 
                className="h-10 mr-2 opacity-80"
              />
              <span className="text-sm opacity-75">DHA Partner</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=EIDA" 
                alt="EIDA Authorized" 
                className="h-10 mr-2 opacity-80"
              />
              <span className="text-sm opacity-75">EIDA Authorized</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
