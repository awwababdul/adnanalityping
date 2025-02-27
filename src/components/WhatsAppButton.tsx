
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+971552636961", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@example.com", "_blank");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-50 flex flex-col-reverse items-end gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-2"
            >
              <Button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
                size="icon"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="text-white w-6 h-6" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="mb-2"
            >
              <Button
                onClick={handleCallClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
                size="icon"
                aria-label="Call us"
              >
                <Phone className="text-white w-6 h-6" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-2"
            >
              <Button
                onClick={handleEmailClick}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg"
                size="icon"
                aria-label="Email us"
              >
                <Mail className="text-white w-6 h-6" />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={toggleMenu}
          className={`flex items-center justify-center w-16 h-16 rounded-full ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
          } shadow-lg transition-colors duration-300`}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        >
          {isOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <MessageSquare className="text-white w-8 h-8" />
          )}
          {!isOpen && (
            <span className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-75"></span>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
