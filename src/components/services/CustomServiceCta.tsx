
import React from 'react';
import { Button } from '@/components/ui/button';

const CustomServiceCta: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col items-center text-center">
      <h3 className="text-sm font-medium text-blue-800 mb-2">Need a Custom Service?</h3>
      <p className="text-xs text-blue-600 mb-3">Don't see what you need? We can help with any document service in the UAE.</p>
      <Button 
        variant="secondary"
        size="sm"
        className="bg-white"
        onClick={() => window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank")}
      >
        Request Custom Service
      </Button>
    </div>
  );
};

export default CustomServiceCta;
