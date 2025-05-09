
import { motion } from "framer-motion";
import { MapPin, Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const HeroSection = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearchOpen(true);
    }
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1) 0%, transparent 50%)"
          }}
        />

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
            className="mb-8 relative"
          >
            <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse blur-xl"></div>
            <img 
              src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
              alt="Adnan Ali Typing - Professional Documentation Services in Dubai" 
              className="w-32 h-32 mx-auto relative"
            />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient">Adnan Ali Typing</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your trusted partner for professional typing, translation, and document services in Dubai with over 25 years of excellence.
          </motion.p>

          <motion.div 
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for typing services, documents, or FAQs..."
                className="w-full h-14 pl-12 pr-4 rounded-full text-lg bg-white/10 text-white placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-primary backdrop-blur-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleSearchClick}
                onKeyPress={handleSearchKeyPress}
                aria-label="Search documents, services and FAQs"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-12 px-6" onClick={handleSearchClick}>
                Search
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300"
          >
            <a 
              href="https://maps.app.goo.gl/DbxyAfj3s6AQ5R8A7?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Visit Our Office in Dubai</span>
            </a>
            <div className="flex items-center gap-6">
              <a 
                href="tel:+971552636961" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+971 55 263 6961</span>
              </a>
              <a 
                href="tel:+971545535013" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+971 54 553 5013</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated floating particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>
      
      {/* Search Dialog */}
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} />
    </div>
  );
};

export default HeroSection;
