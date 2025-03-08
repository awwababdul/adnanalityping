
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface DubaiSkylineAnimationProps {
  className?: string;
}

const DubaiSkylineAnimation: React.FC<DubaiSkylineAnimationProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
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
    
    // Handle scroll for zoom effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Famous buildings of Dubai Skyline
    const famousBuildings = [
      { name: "Burj Khalifa", heightRatio: 0.65, widthRatio: 0.015, positionRatio: 0.5, color: "rgba(212, 175, 55, 0.9)", isIconic: true },
      { name: "Burj Al Arab", heightRatio: 0.4, widthRatio: 0.015, positionRatio: 0.3, color: "rgba(220, 220, 240, 0.8)", isIconic: true },
      { name: "Emirates Towers", heightRatio: 0.45, widthRatio: 0.015, positionRatio: 0.65, color: "rgba(190, 190, 210, 0.85)", isIconic: true },
      { name: "Princess Tower", heightRatio: 0.5, widthRatio: 0.015, positionRatio: 0.42, color: "rgba(200, 200, 220, 0.8)", isIconic: false },
      { name: "Cayan Tower", heightRatio: 0.48, widthRatio: 0.012, positionRatio: 0.38, color: "rgba(210, 210, 230, 0.8)", isIconic: false },
      { name: "Marina 101", heightRatio: 0.52, widthRatio: 0.014, positionRatio: 0.57, color: "rgba(200, 200, 220, 0.8)", isIconic: false },
      { name: "JW Marriott Marquis", heightRatio: 0.47, widthRatio: 0.018, positionRatio: 0.76, color: "rgba(210, 210, 230, 0.8)", isIconic: false },
      { name: "Address Boulevard", heightRatio: 0.46, widthRatio: 0.014, positionRatio: 0.22, color: "rgba(205, 205, 225, 0.8)", isIconic: false },
    ];
    
    // Generate buildings (more authentic Dubai skyline)
    const generateBuildings = () => {
      // Add the famous buildings first
      famousBuildings.forEach(building => {
        const x = building.positionRatio * canvas.width;
        const width = building.widthRatio * canvas.width;
        const height = building.heightRatio * canvas.height;
        
        const buildingObj: Building = {
          x,
          y: canvas.height,
          width,
          height,
          color: building.color,
          isBurj: building.name === "Burj Khalifa",
          isIconic: building.isIconic,
          name: building.name
        };
        
        buildings.push(buildingObj);
      });
      
      // Fill in with generic buildings
      const numGenericBuildings = Math.floor(canvas.width / 50);
      
      for (let i = 0; i < numGenericBuildings; i++) {
        const x = (i / numGenericBuildings) * canvas.width;
        const width = Math.random() * 8 + 5; // Thinner buildings
        const height = Math.random() * (canvas.height * 0.25) + (canvas.height * 0.05);
        
        // Check if too close to an iconic building
        const tooClose = buildings.some(b => 
          b.isIconic && Math.abs(b.x - x) < b.width * 5
        );
        
        if (!tooClose) {
          // Premium color palette
          const alphaValue = 0.7 + Math.random() * 0.3;
          const building: Building = {
            x,
            y: canvas.height,
            width,
            height,
            color: `rgba(${240 + Math.random() * 15}, ${240 + Math.random() * 15}, ${240 + Math.random() * 15}, ${alphaValue})`,
            isBurj: false,
            isIconic: false,
            name: "Generic Building"
          };
          
          buildings.push(building);
        }
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
      // Get zoom factor based on scroll
      const maxZoom = 1.5;
      const scrollProgress = Math.min(scrollY / 500, 1); // Adjust divisor to control zoom speed
      const zoomFactor = 1 + (scrollProgress * (maxZoom - 1));
      
      // Calculate canvas center for zoom
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply zoom transformation
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(zoomFactor, zoomFactor);
      ctx.translate(-centerX, -centerY);
      
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
        } else if (building.isIconic) {
          // Special gradient for iconic buildings
          const baseColor = building.color.match(/\d+/g);
          if (baseColor && baseColor.length >= 3) {
            const r = parseInt(baseColor[0]);
            const g = parseInt(baseColor[1]);
            const b = parseInt(baseColor[2]);
            const a = parseFloat(baseColor[3] || "0.8");
            
            buildingGradient.addColorStop(0, `rgba(${r+10}, ${g+10}, ${b+10}, ${a})`);
            buildingGradient.addColorStop(1, `rgba(${r-10}, ${g-10}, ${b-10}, ${a})`);
          }
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
        
        // Special shape for Burj Al Arab
        if (building.name === "Burj Al Arab") {
          const sailHeight = building.height * 0.8;
          const baseWidth = building.width * 1.5;
          
          ctx.fillStyle = 'rgba(220, 220, 240, 0.8)';
          ctx.beginPath();
          ctx.moveTo(building.x, building.y);
          ctx.lineTo(building.x + baseWidth, building.y);
          ctx.lineTo(building.x + baseWidth * 0.5, building.y - sailHeight);
          ctx.closePath();
          ctx.fill();
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
      ctx.restore(); // Restore the canvas state (removes zoom transformation)
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  
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
  isIconic: boolean;
  name: string;
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
