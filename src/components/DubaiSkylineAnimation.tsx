
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DubaiSkylineAnimationProps {
  className?: string;
}

const DubaiSkylineAnimation: React.FC<DubaiSkylineAnimationProps> = ({ className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Handle scroll for zoom effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate zoom factor based on scroll position
  const maxZoom = 1.5;
  const scrollProgress = Math.min(scrollY / 500, 1); // Adjust 500 to control zoom speed
  const zoomFactor = 1 + (scrollProgress * (maxZoom - 1));
  
  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center skyline-zoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          backgroundPosition: 'center 70%',
          transform: `scale(${zoomFactor})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>
      
      {/* Gold particles effect overlay */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      
      {/* Premium signature */}
      <div className="absolute bottom-4 right-4 z-10 opacity-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-right"
        >
          <div className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] font-light">DUBAI • EXCELLENCE</div>
        </motion.div>
      </div>
    </div>
  );
};

export default DubaiSkylineAnimation;
