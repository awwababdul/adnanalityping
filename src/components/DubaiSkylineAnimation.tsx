
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DubaiSkylineAnimationProps {
  className?: string;
}

const DubaiSkylineAnimation: React.FC<DubaiSkylineAnimationProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);
    
    // Animation elements
    const buildings: Building[] = [];
    const goldenParticles: Particle[] = [];
    let frameCount = 0;
    
    // Generate buildings (more minimal and elegant design)
    const generateBuildings = () => {
      const numBuildings = Math.floor(canvas.width / 80); // Fewer, more spaced out buildings
      
      // Find center for Burj Khalifa
      const burjIndex = Math.floor(numBuildings / 2);
      
      for (let i = 0; i < numBuildings; i++) {
        const isBurj = i === burjIndex;
        const x = (i / numBuildings) * canvas.width;
        const width = Math.random() * 10 + 10; // Thinner buildings
        
        // Height based on importance
        const height = isBurj 
          ? canvas.height * 0.65 // Burj Khalifa
          : Math.random() * (canvas.height * 0.35) + (canvas.height * 0.1);
        
        // Premium color palette
        const alphaValue = 0.7 + Math.random() * 0.3;
        const building: Building = {
          x,
          y: canvas.height,
          width,
          height,
          color: isBurj 
            ? `rgba(212, 175, 55, ${alphaValue})` // Gold for Burj Khalifa
            : `rgba(${240 + Math.random() * 15}, ${240 + Math.random() * 15}, ${240 + Math.random() * 15}, ${alphaValue})`, // Light premium colors
          isBurj
        };
        
        buildings.push(building);
      }
    };
    
    // Generate gold particles (luxury element)
    const generateGoldParticles = () => {
      const numParticles = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numParticles; i++) {
        goldenParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.5 + 0.5,
          angle: Math.random() * Math.PI * 2
        });
      }
    };
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create premium gradient background - deep blue to soft gold
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0B1026');
      gradient.addColorStop(0.6, '#1F2A51');
      gradient.addColorStop(1, '#2D305B');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle horizon glow
      const horizonGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      horizonGradient.addColorStop(0, 'rgba(212, 175, 55, 0)');
      horizonGradient.addColorStop(1, 'rgba(212, 175, 55, 0.1)');
      ctx.fillStyle = horizonGradient;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);
      
      // Draw gold particles (luxury element)
      goldenParticles.forEach(particle => {
        // Update particle position based on its angle
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        
        // Respawn particles that go off-screen
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.angle = Math.random() * Math.PI * 2;
        }
        
        // Draw particle with gold color
        const opacity = 0.3 + 0.2 * Math.sin(frameCount * 0.01 + particle.x);
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity * particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw buildings
      buildings.forEach(building => {
        // Building shape with subtle gradient
        const buildingGradient = ctx.createLinearGradient(building.x, 0, building.x + building.width, 0);
        
        if (building.isBurj) {
          // Premium gold gradient for Burj Khalifa
          buildingGradient.addColorStop(0, 'rgba(212, 175, 55, 0.9)');
          buildingGradient.addColorStop(1, 'rgba(212, 175, 55, 0.7)');
        } else {
          // Regular buildings with subtle lighting
          const baseColor = building.color.match(/\d+/g);
          if (baseColor && baseColor.length >= 3) {
            const r = parseInt(baseColor[0]);
            const g = parseInt(baseColor[1]);
            const b = parseInt(baseColor[2]);
            const a = parseFloat(baseColor[3] || "0.8");
            
            buildingGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
            buildingGradient.addColorStop(1, `rgba(${r-20}, ${g-20}, ${b-20}, ${a})`);
          } else {
            buildingGradient.addColorStop(0, building.color);
            buildingGradient.addColorStop(1, building.color);
          }
        }
        
        ctx.fillStyle = buildingGradient;
        
        // Draw building shape
        ctx.beginPath();
        ctx.rect(building.x, building.y - building.height, building.width, building.height);
        ctx.fill();
        
        // Special shape for Burj Khalifa with tapered design
        if (building.isBurj) {
          const spireHeight = building.height * 0.25;
          const baseWidth = building.width;
          
          ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
          ctx.beginPath();
          ctx.moveTo(building.x, building.y - building.height);
          ctx.lineTo(building.x + baseWidth, building.y - building.height);
          ctx.lineTo(building.x + baseWidth * 0.6, building.y - building.height - spireHeight);
          ctx.lineTo(building.x + baseWidth * 0.4, building.y - building.height - spireHeight);
          ctx.closePath();
          ctx.fill();
          
          // Add a subtle glow to Burj Khalifa
          ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(building.x + baseWidth * 0.5, building.y - building.height - spireHeight);
          ctx.arc(building.x + baseWidth * 0.5, building.y - building.height - spireHeight, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      
      // Draw reflection in water - very subtle
      ctx.globalAlpha = 0.15;
      ctx.setTransform(1, 0, 0, -0.2, 0, canvas.height * 1.2); 
      buildings.forEach(building => {
        const buildingGradient = ctx.createLinearGradient(building.x, 0, building.x + building.width, 0);
        
        if (building.isBurj) {
          buildingGradient.addColorStop(0, 'rgba(212, 175, 55, 0.4)');
          buildingGradient.addColorStop(1, 'rgba(212, 175, 55, 0.3)');
        } else {
          buildingGradient.addColorStop(0, building.color);
          buildingGradient.addColorStop(1, building.color);
        }
        
        ctx.fillStyle = buildingGradient;
        ctx.beginPath();
        ctx.rect(building.x, building.y - building.height, building.width, building.height);
        ctx.fill();
        
        if (building.isBurj) {
          const spireHeight = building.height * 0.25;
          const baseWidth = building.width;
          
          ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
          ctx.beginPath();
          ctx.moveTo(building.x, building.y - building.height);
          ctx.lineTo(building.x + baseWidth, building.y - building.height);
          ctx.lineTo(building.x + baseWidth * 0.6, building.y - building.height - spireHeight);
          ctx.lineTo(building.x + baseWidth * 0.4, building.y - building.height - spireHeight);
          ctx.closePath();
          ctx.fill();
        }
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      
      frameCount++;
      requestAnimationFrame(draw);
    };
    
    // Initialize and start animation
    generateBuildings();
    generateGoldParticles();
    draw();
    
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, []);
  
  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="absolute bottom-4 right-4 z-10 opacity-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-right"
        >
          <div className="text-[#D4AF37] text-xs tracking-[0.3em] font-light">DUBAI • EXCELLENCE</div>
        </motion.div>
      </div>
    </div>
  );
};

// Types for animation elements
interface Building {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  isBurj: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
}

export default DubaiSkylineAnimation;
