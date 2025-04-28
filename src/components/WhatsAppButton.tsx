
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const fullWelcomeMessage = "Hi, how can I help you today?";

  useEffect(() => {
    // Show typing animation and welcome message on first visit
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      setTimeout(() => {
        setShowWelcomeMessage(true);
        setIsTyping(true);
        
        // Simulate typing animation
        setTimeout(() => {
          setIsTyping(false);
          let i = 0;
          const typeMessage = setInterval(() => {
            if (i < fullWelcomeMessage.length) {
              setWelcomeMessage(prev => prev + fullWelcomeMessage.charAt(i));
              i++;
            } else {
              clearInterval(typeMessage);
            }
          }, 50);
        }, 1500);
        
        sessionStorage.setItem("hasVisited", "true");
      }, 2000);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+971552636961", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@adnanalityping.ae", "_blank");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Hide welcome message when menu is opened
    setShowWelcomeMessage(false);
  };

  const closeWelcomeMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowWelcomeMessage(false);
  };

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50 flex flex-col-reverse items-end gap-4"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <AnimatePresence>
        {showWelcomeMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs relative"
          >
            <button 
              onClick={closeWelcomeMessage}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <MessageSquare size={20} />
                </div>
              </div>
              <div>
                <p className="font-medium text-sm mb-1">Adnan Ali Typing</p>
                {isTyping ? (
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">{welcomeMessage}</p>
                )}
                {!isTyping && welcomeMessage === fullWelcomeMessage && (
                  <button 
                    onClick={handleWhatsAppClick}
                    className="mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Send a message
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

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
                className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
                size="icon"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="text-white w-7 h-7" />
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
                className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
                size="icon"
                aria-label="Call us"
              >
                <Phone className="text-white w-7 h-7" />
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
                className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg"
                size="icon"
                aria-label="Email us"
              >
                <Mail className="text-white w-7 h-7" />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={toggleMenu}
          className={`flex items-center justify-center w-18 h-18 rounded-full ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
          } shadow-lg transition-colors duration-300`}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        >
          {isOpen ? (
            <X className="text-white w-9 h-9" />
          ) : (
            <MessageSquare className="text-white w-9 h-9" />
          )}
          {!isOpen && !showWelcomeMessage && (
            <span className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-75"></span>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
