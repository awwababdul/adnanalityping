
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=971552636961"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
