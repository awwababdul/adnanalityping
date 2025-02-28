
import { Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface AnniversaryEmblemProps {
  years?: number;
  className?: string;
  position?: "fixed" | "absolute" | "relative";
}

const AnniversaryEmblem = ({ 
  years = 25, 
  className = "", 
  position = "absolute" 
}: AnniversaryEmblemProps) => {
  return (
    <AnimatedSection 
      variant="shine" 
      className={`${position} ${position === "fixed" ? "top-24 right-4" : position === "absolute" ? "top-4 right-4" : ""} z-50 ${className}`}
      once={false}
    >
      <div className="relative flex items-center justify-center">
        {/* Gold star burst background */}
        <div className="absolute w-full h-full bg-[#F4B41A] rounded-full scale-75 opacity-20 animate-pulse"></div>
        
        {/* Outer ring */}
        <div className="w-24 h-24 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#F4B41A] to-[#B88A44] shadow-lg flex flex-col items-center justify-center transform -rotate-12">
          {/* Inner content */}
          <Trophy className="w-8 h-8 text-[#FFF8DC] mb-1" />
          <div className="text-center">
            <div className="font-bold text-xl text-[#FFF8DC]">{years}</div>
            <div className="text-[10px] uppercase tracking-wide text-[#FFF8DC] font-bold leading-tight">
              Years of<br />Excellence
            </div>
          </div>
          
          {/* Decorative ribbon at bottom */}
          <div className="absolute -bottom-4 w-16 h-6 bg-[#B22222] flex items-center justify-center rounded-md transform rotate-2">
            <span className="text-[8px] text-white font-bold uppercase tracking-wider">Trusted Service</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AnniversaryEmblem;
