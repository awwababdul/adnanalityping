
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DubaiSkylineAnimationProps {
  className?: string;
}

const DubaiSkylineAnimation: React.FC<DubaiSkylineAnimationProps> = ({ className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Handle scroll for zoom effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Initialize mobile check
    checkMobile();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Calculate zoom factor based on scroll position
  // Less aggressive zoom on mobile
  const maxZoom = isMobile ? 1.3 : 1.5;
  const scrollProgress = Math.min(scrollY / (isMobile ? 400 : 500), 1); // Adjust for faster zoom on mobile
  const zoomFactor = 1 + (scrollProgress * (maxZoom - 1));
  
  // Use a higher quality Dubai skyline image
  const skylineImage = "https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
  
  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center skyline-zoom"
        style={{
          backgroundImage: `url("${skylineImage}")`,
          backgroundPosition: isMobile ? 'center 60%' : 'center 70%', // Adjust position on mobile
          transform: `scale(${zoomFactor})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      
      {/* Gold particles effect overlay */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      
      {/* Premium signature */}
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-10 opacity-80">
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
