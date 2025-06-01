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
  return <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary/95 to-primary">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-400/15 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      
      <div className="container-modern relative z-10 py-20 md:py-28 flex flex-col items-center justify-center">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2
      }} className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)"
      }} />

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }} className="text-center max-w-5xl">
          <motion.div initial={{
          scale: 0.5,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2
        }} className="mb-10 relative">
            <div className="absolute -inset-8 rounded-full bg-white/5 animate-glow-pulse blur-2xl"></div>
            <img src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" alt="Adnan Ali Typing - Professional Documentation Services in Dubai" className="w-36 h-36 mx-auto relative drop-shadow-2xl" />
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight leading-none text-balance" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeOut"
        }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-sm text-lg">
              No More Paperwork Headaches. We Handle It All.
            </span>
          </motion.h1>
          
          <motion.p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }}>
            Trusted Government Services Since 2000
          </motion.p>
          
          <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }}>
            {["24+ Years of Experience", "GDRFA, DHA & EIDA Authorized", "Fastest Turnaround", "Total Confidentiality", "Multilingual Support"].map((tag, index) => <motion.div key={index} className="flex items-center glass px-4 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.8 + index * 0.1,
            duration: 0.5
          }} whileHover={{
            scale: 1.05
          }}>
                <Check className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-medium text-white">{tag}</span>
              </motion.div>)}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1,
          duration: 0.8
        }}>
            <Button size="xl" onClick={handleWizardClick} className="w-full sm:w-auto px-8 bg-gradient-to-r from-success to-success-600 hover:shadow-glow-lg hover:shadow-success/30 font-semibold">
              <span>✔ Start My Visa Process</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="xl" variant="glass" onClick={handleWhatsAppClick} className="w-full sm:w-auto px-8 font-semibold">
              <span>💬 WhatsApp Us Now</span>
            </Button>
          </motion.div>
          
          {/* Enhanced Service Finder */}
          <motion.div className="max-w-2xl mx-auto mb-12 glass-card p-8 rounded-2xl border border-white/10" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }}>
            <h3 className="text-white text-2xl font-semibold mb-6 text-balance">What do you need help with?</h3>
            <div className="relative mb-6">
              <Input type="text" placeholder="Search for visa, Emirates ID, business setup..." className="w-full h-16 pl-14 pr-4 rounded-2xl text-lg bg-white/15 text-white placeholder:text-blue-200 border-white/20 focus-visible:ring-2 focus-visible:ring-white/30 backdrop-blur-md font-medium" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onClick={handleSearchClick} onKeyPress={handleSearchKeyPress} aria-label="Search government services" />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-200 h-6 w-6" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl h-12 px-6 font-semibold" onClick={handleSearchClick}>
                Find Services
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[{
              label: "Visa Services",
              query: "Visa"
            }, {
              label: "Emirates ID",
              query: "Emirates ID"
            }, {
              label: "Business Setup",
              query: "Business"
            }].map((item, index) => <Button key={item.label} variant="ghost" className="text-white hover:bg-white/15 border border-white/10 rounded-xl h-12 font-medium transition-all duration-300" onClick={() => setSearchQuery(item.query)}>
                  {item.label}
                </Button>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.4,
          duration: 0.8
        }} className="flex flex-col md:flex-row items-center justify-center gap-8 text-blue-100">
            <Link to="/upload-documents" className="flex items-center gap-3 glass px-6 py-3 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 font-medium">
              <Upload className="w-6 h-6" />
              <span>Upload Documents for Quick Quote</span>
            </Link>
            
            <a href="https://maps.app.goo.gl/DbxyAfj3s6AQ5R8A7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors duration-300 font-medium">
              <MapPin className="w-6 h-6" />
              <span>Visit Our Dubai Office</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced floating particles */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.6
    }} transition={{
      delay: 1.5,
      duration: 1
    }}>
        {Array.from({
        length: 15
      }).map((_, i) => <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-blue-300/20" initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
      }} animate={{
        y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
        x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
        opacity: [0.2, 0.8, 0.2]
      }} transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }} />)}
      </motion.div>
      
      {/* Search Dialog */}
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} initialQuery={searchQuery} />
    </div>;
};
export default HeroSection;