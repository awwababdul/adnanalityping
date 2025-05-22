
import { motion } from "framer-motion";
import { MapPin, Phone, Search, Check, ArrowRight, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SearchDialog from "./SearchDialog";
import { Link } from "react-router-dom";

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

  const handleWizardClick = () => {
    window.location.href = '/needs-wizard';
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=971552636961', '_blank');
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary/90 to-primary">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center">
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100">
              No More Paperwork Headaches. We Handle It All.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Trusted Government Services Since 2000
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {["24+ Years of Experience", "GDRFA, DHA & EIDA Authorized", "Fastest Turnaround", "Total Confidentiality", "Multilingual Support"].map((tag, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Check className="w-4 h-4 mr-1.5 text-green-400" />
                <span className="text-sm text-white">{tag}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              size="lg" 
              onClick={handleWizardClick}
              className="rounded-full w-full sm:w-auto px-8 bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/20 transition-all"
            >
              <span>✔ Start My Visa Process</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppClick}
              className="rounded-full w-full sm:w-auto px-8 text-white border-white/20 backdrop-blur-sm hover:bg-white/10"
            >
              <span>💬 WhatsApp Us Now</span>
            </Button>
          </motion.div>
          
          {/* Service Finder Wizard */}
          <motion.div 
            className="max-w-lg mx-auto mb-10 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">What do you need help with?</h3>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for visa, Emirates ID, business setup..."
                className="w-full h-14 pl-12 pr-4 rounded-full text-lg bg-white/20 text-white placeholder:text-gray-300 border-none focus-visible:ring-2 focus-visible:ring-blue-300 backdrop-blur-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleSearchClick}
                onKeyPress={handleSearchKeyPress}
                aria-label="Search government services"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-12 px-6" onClick={handleSearchClick}>
                Find Services
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setSearchQuery("Visa")}>Visa Services</Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setSearchQuery("Emirates ID")}>Emirates ID</Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setSearchQuery("Business")}>Business Setup</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 mt-6"
          >
            <Link
              to="/upload-documents"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full transition-all"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Documents for Quick Quote</span>
            </Link>
            
            <a 
              href="https://maps.app.goo.gl/DbxyAfj3s6AQ5R8A7?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Visit Our Dubai Office</span>
            </a>
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
            className="absolute w-2 h-2 rounded-full bg-blue-400/30"
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
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} initialQuery={searchQuery} />
    </div>
  );
};

export default HeroSection;
