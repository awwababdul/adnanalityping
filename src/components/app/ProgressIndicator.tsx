
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { name: 'Browse', path: '/' },
    { name: 'Select', path: '/services' },
    { name: 'Details', path: '/service-details' },
    { name: 'Upload', path: '/upload-documents' },
    { name: 'Checkout', path: '/cart' },
  ];

  return (
    <div className="w-full py-2 px-4 bg-white border-b">
      <div className="relative flex items-center justify-between max-w-md mx-auto">
        {/* Progress bar */}
        <div className="absolute left-0 top-1/2 h-0.5 bg-gray-200 w-full -translate-y-1/2 z-0" />
        
        {/* Filled progress bar */}
        <motion.div 
          className="absolute left-0 top-1/2 h-0.5 bg-primary -translate-y-1/2 z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Step indicators */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          
          return (
            <div 
              key={step.name} 
              className="flex flex-col items-center z-10"
            >
              <div 
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${isCompleted ? 'bg-primary text-white' : ''}
                  ${isActive ? 'border-2 border-primary bg-white text-primary' : ''}
                  ${!isCompleted && !isActive ? 'bg-gray-200 text-gray-400' : ''}
                `}
              >
                {isCompleted ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-gray-500'}`}>
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
