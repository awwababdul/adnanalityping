
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  onGetStarted?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/90 to-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.05]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let us take care of your government transactions—so you can focus on what matters
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            Our team of experts ensures hassle-free processing of all your documentation needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upload-documents">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-primary-900 hover:text-primary-900 shadow-gold px-8 rounded-full font-medium transition-all group"
              >
                <Upload className="mr-2 h-5 w-5" />
                <span>Upload My Document</span>
                <motion.div 
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -5, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
            
            <Link to="/get-quote">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 px-8 rounded-full backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Request Callback</span>
              </Button>
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=MOL" 
                alt="MOL Approved" 
                className="h-10 mr-2 opacity-80 rounded-md"
              />
              <span className="text-sm opacity-75">MOL Approved</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=GDRFA" 
                alt="GDRFA Certified" 
                className="h-10 mr-2 opacity-80 rounded-md"
              />
              <span className="text-sm opacity-75">GDRFA Certified</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=DHA" 
                alt="DHA Partner" 
                className="h-10 mr-2 opacity-80 rounded-md"
              />
              <span className="text-sm opacity-75">DHA Partner</span>
            </div>
            <div className="flex items-center">
              <img 
                src="https://placehold.co/80x40/eee/ccc?text=EIDA" 
                alt="EIDA Authorized" 
                className="h-10 mr-2 opacity-80 rounded-md"
              />
              <span className="text-sm opacity-75">EIDA Authorized</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
