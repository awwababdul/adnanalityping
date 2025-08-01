import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Get saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') as 'en' | 'ar' || 'en';
    setCurrentLanguage(savedLanguage);
    setIsRTL(savedLanguage === 'ar');
    
    // Apply RTL/LTR to document
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    setIsRTL(newLanguage === 'ar');
    
    // Save preference
    localStorage.setItem('preferred-language', newLanguage);
    
    // Apply to document
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: newLanguage, isRTL: newLanguage === 'ar' } 
    }));
  };

  const getLanguageText = () => {
    return currentLanguage === 'en' ? 'عربي' : 'English';
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 h-9 px-3 text-sm font-medium hover:bg-primary-50 transition-all duration-200 focus-ring"
        aria-label={`Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{getLanguageText()}</span>
      </Button>
      
      {/* Accessibility indicator */}
      <div className="sr-only" aria-live="polite">
        Current language: {currentLanguage === 'en' ? 'English' : 'Arabic'}
      </div>
    </motion.div>
  );
};

// Hook for other components to use language state
export const useLanguage = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Get initial language
    const currentLang = (localStorage.getItem('preferred-language') as 'en' | 'ar') || 'en';
    setLanguage(currentLang);
    setIsRTL(currentLang === 'ar');

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
      setIsRTL(event.detail.isRTL);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  return { language, isRTL };
};

export default LanguageToggle;