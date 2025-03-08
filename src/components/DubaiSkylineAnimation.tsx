
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
    
    // Animation variables
    let frameCount = 0;
    const buildings: Building[] = [];
    const stars: Star[] = [];
    const drones: Drone[] = [];
    
    // Generate buildings
    const generateBuildings = () => {
      const numBuildings = Math.floor(canvas.width / 40);
      const burjIndex = Math.floor(numBuildings / 2);
      
      for (let i = 0; i < numBuildings; i++) {
        const isBurj = i === burjIndex;
        const x = (i / numBuildings) * canvas.width;
        const width = Math.random() * 20 + 20;
        const height = isBurj 
          ? canvas.height * 0.75 
          : Math.random() * (canvas.height * 0.5) + (canvas.height * 0.1);
        
        const building: Building = {
          x,
          y: canvas.height,
          width,
          height,
          color: isBurj 
            ? '#9b87f5' 
            : `rgba(${126 + Math.random() * 30}, ${105 + Math.random() * 20}, ${171 + Math.random() * 30}, ${0.7 + Math.random() * 0.3})`,
          lights: [],
          isBurj
        };
        
        // Add windows/lights
        const numLights = Math.floor(height / 15);
        for (let j = 0; j < numLights; j++) {
          const lightOn = Math.random() > 0.3;
          building.lights.push({
            x: building.x + Math.random() * building.width,
            y: building.y - (j / numLights) * height,
            size: Math.random() * 3 + 1,
            on: lightOn,
            blinkRate: Math.random() * 200 + 100
          });
        }
        
        buildings.push(building);
      }
    };
    
    // Generate stars
    const generateStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.6),
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleRate: Math.random() * 0.02 + 0.005,
          twinkleDirection: 1
        });
      }
    };
    
    // Generate drones
    const generateDrones = () => {
      const numDrones = Math.floor(canvas.width / 200);
      for (let i = 0; i < numDrones; i++) {
        drones.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.4),
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.2,
          color: Math.random() > 0.5 ? '#F97316' : '#0EA5E9',
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
    };
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1A1F2C');
      gradient.addColorStop(0.5, '#2D3555');
      gradient.addColorStop(1, '#3D4371');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        star.opacity += star.twinkleRate * star.twinkleDirection;
        if (star.opacity > 1) {
          star.opacity = 1;
          star.twinkleDirection = -1;
        } else if (star.opacity < 0.2) {
          star.opacity = 0.2;
          star.twinkleDirection = 1;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw drones
      drones.forEach(drone => {
        drone.x += drone.speed * drone.direction;
        
        if (drone.x > canvas.width + 10) {
          drone.x = -10;
        } else if (drone.x < -10) {
          drone.x = canvas.width + 10;
        }
        
        // Drone body
        ctx.fillStyle = drone.color;
        ctx.beginPath();
        ctx.arc(drone.x, drone.y, drone.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Drone light
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(drone.x, drone.y, drone.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Drone light beam
        const beamGradient = ctx.createLinearGradient(drone.x, drone.y, drone.x, drone.y + 100);
        beamGradient.addColorStop(0, `${drone.color}80`);
        beamGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = beamGradient;
        ctx.beginPath();
        ctx.moveTo(drone.x - drone.size, drone.y);
        ctx.lineTo(drone.x + drone.size, drone.y);
        ctx.lineTo(drone.x + drone.size * 3, drone.y + 100);
        ctx.lineTo(drone.x - drone.size * 3, drone.y + 100);
        ctx.closePath();
        ctx.fill();
      });
      
      // Draw buildings
      buildings.forEach(building => {
        // Building shape
        ctx.fillStyle = building.color;
        ctx.beginPath();
        ctx.rect(building.x, building.y - building.height, building.width, building.height);
        ctx.fill();
        
        // Special shape for Burj Khalifa
        if (building.isBurj) {
          ctx.fillStyle = '#8B5CF6';
          const spireHeight = building.height * 0.3;
          const baseWidth = building.width;
          
          ctx.beginPath();
          ctx.moveTo(building.x, building.y - building.height);
          ctx.lineTo(building.x + baseWidth, building.y - building.height);
          ctx.lineTo(building.x + baseWidth * 0.6, building.y - building.height - spireHeight);
          ctx.lineTo(building.x + baseWidth * 0.4, building.y - building.height - spireHeight);
          ctx.closePath();
          ctx.fill();
        }
        
        // Building windows/lights
        building.lights.forEach(light => {
          if (frameCount % light.blinkRate === 0) {
            light.on = Math.random() > 0.3;
          }
          
          if (light.on) {
            ctx.fillStyle = 'rgba(255, 247, 205, 0.9)';
            ctx.beginPath();
            ctx.rect(light.x, light.y, light.size, light.size);
            ctx.fill();
          }
        });
      });
      
      // Draw reflection in water
      ctx.fillStyle = 'rgba(25, 31, 44, 0.6)';
      ctx.fillRect(0, canvas.height, canvas.width, -canvas.height * 0.1);
      
      frameCount++;
      requestAnimationFrame(draw);
    };
    
    // Initialize and start animation
    generateBuildings();
    generateStars();
    generateDrones();
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
      <div className="absolute bottom-4 left-4 z-10 text-white text-xs md:text-sm opacity-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          DUBAI • FUTURE • INNOVATION
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
  lights: Light[];
  isBurj: boolean;
}

interface Light {
  x: number;
  y: number;
  size: number;
  on: boolean;
  blinkRate: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleRate: number;
  twinkleDirection: number;
}

interface Drone {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  direction: number;
}

export default DubaiSkylineAnimation;
