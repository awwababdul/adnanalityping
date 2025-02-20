
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
              alt="Adnan Ali Typing Logo" 
              className="w-32 h-32 mx-auto"
            />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Adnan Ali Typing
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Professional Documentation & Government Services Portal
          </motion.p>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for services..."
                className="w-full h-14 pl-12 pr-4 rounded-full text-lg bg-white/10 text-white placeholder:text-gray-300 border-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
