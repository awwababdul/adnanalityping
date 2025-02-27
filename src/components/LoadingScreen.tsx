
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
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
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

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-secondary via-secondary/90 to-secondary/80 z-50"
        >
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-primary/20 animate-pulse blur-2xl"></div>
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <img 
                src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
                alt="Adnan Ali Typing Logo" 
                className="w-32 h-32 mx-auto"
              />
            </motion.div>
          </div>

          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-center mt-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              Adnan Ali Typing
            </h1>
            <p className="text-xl text-gray-300">
              Professional Documentation Services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
