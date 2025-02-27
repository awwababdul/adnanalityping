
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card p-12 rounded-xl"
        >
          <motion.h1 variants={itemVariants} className="text-8xl font-bold text-gradient mb-4">404</motion.h1>
          <motion.p variants={itemVariants} className="text-2xl text-white mb-8">Oops! Page not found</motion.p>
          <motion.div variants={itemVariants} className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
            <motion.p variants={itemVariants} className="text-gray-300 mt-4">
              The page you're looking for doesn't exist or has been moved.
            </motion.p>
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
        {Array.from({ length: 15 }).map((_, i) => (
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
    </div>
  );
};

export default NotFound;
