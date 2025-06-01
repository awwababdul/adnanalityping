
import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

type AnimationVariant = 
  "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | 
  "zoomIn" | "slideUp" | "bounce" | "flip" | "rotate" | 
  "staggered" | "pulse" | "float" | "shine" | "glow" | "modern";

interface AnimatedSectionProps {
  children?: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  once?: boolean;
  style?: CSSProperties;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  },
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  },
  bounce: {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        duration: 0.8 
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
        delayChildren: 0.2,
        ease: "easeOut"
      } 
    }
  },
  pulse: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: [0.8, 1.05, 1], 
      transition: { 
        duration: 0.8, 
        times: [0, 0.6, 1],
        ease: "easeOut"
      } 
    }
  },
  float: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: [20, -5, 20], 
      transition: { 
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5, ease: "easeOut" }
      } 
    }
  },
  shine: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      filter: [
        "drop-shadow(0 0 0px rgba(0, 102, 255, 0))",
        "drop-shadow(0 0 20px rgba(0, 102, 255, 0.6))",
        "drop-shadow(0 0 0px rgba(0, 102, 255, 0))"
      ],
      transition: {
        filter: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5, ease: "easeOut" },
        scale: { duration: 0.5, ease: "easeOut" }
      }
    }
  },
  glow: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      boxShadow: [
        "0 0 0px rgba(0, 102, 255, 0)",
        "0 0 30px rgba(0, 102, 255, 0.4)",
        "0 0 0px rgba(0, 102, 255, 0)"
      ],
      transition: {
        boxShadow: {
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut"
        },
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: 0.6, ease: "easeOut" }
      }
    }
  },
  modern: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
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
      viewport={{ once, amount: 0.2 }}
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
