
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  minDisplayTime?: number;
}

const LoadingScreen = ({ minDisplayTime = 2000 }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minTimer = setTimeout(() => {
      setIsLoading(false);
    }, minDisplayTime);
    
    return () => {
      clearTimeout(minTimer);
    };
  }, [minDisplayTime]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0, rotateY: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotateY: [0, 360],
      transition: { 
        duration: 1.2,
        ease: "easeOut",
        rotateY: {
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.2,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    }
  };

  const scanlineVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.1, 0.2, 0.1],
      y: [0, 500],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        },
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }
      }
    }
  };

  const particleVariants = {
    initial: { opacity: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 0.8, 0],
      y: [0, -80],
      x: i % 2 === 0 ? [0, 20, 0, -20, 0] : [0, -20, 0, 20, 0],
      transition: {
        repeat: Infinity,
        duration: 2 + (i * 0.2),
        delay: i * 0.1,
        ease: "easeOut",
      }
    })
  };

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: `${Math.random() * 80 + 10}%`,
    delay: Math.random() * 2
  }));

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-secondary via-secondary/90 to-secondary/80 z-50 overflow-hidden"
        >
          {/* Futuristic grid pattern */}
          <motion.div
            variants={gridVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(0,112,243,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,112,243,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)"
            }}
          />

          {/* Animated scanline effect */}
          <motion.div
            variants={scanlineVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            style={{ height: "100px" }}
          />

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              custom={particle.id}
              variants={particleVariants}
              initial="initial"
              animate="animate"
              className="absolute bg-primary rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: particle.left,
                bottom: "30%",
                boxShadow: "0 0 10px rgba(0,112,243,0.8), 0 0 20px rgba(0,112,243,0.5)",
                filter: "blur(1px)"
              }}
            />
          ))}

          {/* Glow effect */}
          <div className="relative">
            <motion.div 
              className="absolute -inset-12 rounded-full bg-primary/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="relative"
              style={{
                perspective: "1000px"
              }}
            >
              <img 
                src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
                alt="Adnan Ali Typing Logo" 
                className="w-32 h-32 mx-auto"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(0,112,243,0.8))"
                }}
              />
            </motion.div>
          </div>

          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-center mt-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2 relative">
              <span className="relative">
                Adnan Ali Typing
                <motion.span 
                  className="absolute inset-0 bg-primary/20"
                  animate={{
                    opacity: [0, 0.5, 0],
                    width: ["0%", "100%", "0%"],
                    left: ["0%", "0%", "100%"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </h1>
            <motion.p 
              className="text-xl text-gray-300"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Professional Documentation Services
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <div className="flex justify-center space-x-3">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 rounded-full bg-primary"
                  style={{
                    boxShadow: "0 0 10px rgba(0,112,243,0.8), 0 0 20px rgba(0,112,243,0.5)"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Digital circuit lines animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="rgba(0,112,243,0.15)" strokeWidth="1">
              {[...Array(5)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${Math.random() * 100},0 Q${Math.random() * 100 + 50},${Math.random() * 100 + 50} ${Math.random() * 100 + 100},${Math.random() * 100 + 200}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0, 0.8, 0],
                    strokeDasharray: ["0, 1", "1, 0"] 
                  }}
                  transition={{
                    duration: 3 + i,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </g>
          </svg>

          {/* Animated corners */}
          {[
            "top-0 left-0", 
            "top-0 right-0", 
            "bottom-0 left-0", 
            "bottom-0 right-0"
          ].map((position, index) => (
            <motion.div 
              key={index}
              className={`absolute w-8 h-8 ${position} border-primary`}
              style={{
                borderWidth: position.includes("top") && position.includes("left") ? "2px 0 0 2px" :
                           position.includes("top") && position.includes("right") ? "2px 2px 0 0" :
                           position.includes("bottom") && position.includes("left") ? "0 0 2px 2px" :
                           "0 2px 2px 0",
                margin: "20px",
                opacity: 0.8
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1, 0.8],
                rotate: position.includes("left") ? [-5, 0, -5] : [5, 0, 5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
