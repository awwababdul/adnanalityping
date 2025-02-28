
import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

type AnimationVariant = 
  "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | 
  "zoomIn" | "slideUp" | "bounce" | "flip" | "rotate" | 
  "staggered" | "pulse" | "float";

interface AnimatedSectionProps {
  children?: ReactNode; // Made children optional
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  once?: boolean;
  style?: CSSProperties;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  },
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  },
  bounce: {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        duration: 1 
      } 
    }
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      } 
    }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -45 },
    visible: { 
      opacity: 1, 
      rotate: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  },
  staggered: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      } 
    }
  },
  pulse: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: [0.8, 1.1, 1], 
      transition: { 
        duration: 0.8, 
        times: [0, 0.6, 1] 
      } 
    }
  },
  float: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: [10, -10, 10], 
      transition: { 
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      } 
    }
  }
};

const AnimatedSection = ({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "",
  once = true,
  style
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
