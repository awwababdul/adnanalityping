
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg hover:shadow-xl transition-shadow duration-300 animate-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <span className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-75"></span>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;
