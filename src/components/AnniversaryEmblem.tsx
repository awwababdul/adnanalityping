
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
        {/* Modern glowing background */}
        <div className="absolute w-full h-full bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-full scale-95 opacity-15 blur-sm"></div>
        
        {/* Outer ring - more modern with gradient */}
        <div className="w-24 h-24 rounded-full border-2 border-[#D6BCFA] bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] shadow-lg flex flex-col items-center justify-center transform rotate-0">
          {/* Inner circle with subtle shadow */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E5DEFF] to-[#D6BCFA] shadow-inner flex flex-col items-center justify-center">
            {/* Inner content */}
            <Trophy className="w-7 h-7 text-[#8B5CF6] mb-1" />
            <div className="text-center">
              <div className="font-bold text-xl text-[#8B5CF6]">{years}</div>
              <div className="text-[9px] uppercase tracking-wide text-[#7E69AB] font-medium leading-tight">
                Years of<br />Excellence
              </div>
            </div>
          </div>
          
          {/* Modern badge ribbon */}
          <div className="absolute -bottom-3 w-16 h-5 bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5] flex items-center justify-center rounded-full shadow-md">
            <span className="text-[7px] text-white font-semibold uppercase tracking-wider">Trusted Service</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AnniversaryEmblem;
