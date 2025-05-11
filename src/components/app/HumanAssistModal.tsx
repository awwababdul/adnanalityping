
import React from 'react';
import { motion } from 'framer-motion';
import { X, MessageSquare, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HumanAssistModalProps {
  onClose: () => void;
}

const HumanAssistModal: React.FC<HumanAssistModalProps> = ({ onClose }) => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=971552636961&text=Hello%2C%20I%20need%20assistance%20with%20government%20services.', '_blank');
    onClose();
  };

  const handlePhoneClick = () => {
    window.open('tel:+971552636961');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        className="bg-white rounded-xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Need Help with Your Documents?</h3>
              <p className="text-gray-600 text-sm">Our team is ready to assist you</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex gap-2 items-center text-sm text-amber-600 bg-amber-50 p-3 rounded-lg mb-4">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>
              <strong>Quick response guaranteed</strong> - Talk to a real assistant, not a chatbot
            </span>
          </div>
          
          <div className="space-y-3">
            <Button
              className="w-full flex justify-center items-center gap-2 py-6"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat with an Agent on WhatsApp</span>
            </Button>
            
            <Button
              variant="outline"
              className="w-full flex justify-center items-center gap-2 py-6"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Directly</span>
            </Button>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Working Hours: Sun-Thu 9am-8pm, Fri-Sat 10am-6pm GST
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 border-t">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <img 
              src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
              alt="Adnan Ali Typing Logo"
              className="h-5 w-auto"
            />
            <span>Trusted by 10,000+ customers in UAE</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HumanAssistModal;
