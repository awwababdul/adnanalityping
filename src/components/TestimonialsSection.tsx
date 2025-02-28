
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "The team's professionalism and attention to detail made the entire visa process smooth and stress-free. Highly recommended!",
    author: "Mohammed Al Qasimi",
    position: "Business Owner",
    company: "Al Qasimi Enterprises",
    image: "/lovable-uploads/testimonial-1.jpg",
  },
  {
    id: 2,
    content: "Thank you for the exceptional service in setting up my business. Your expertise and guidance were invaluable throughout the process.",
    author: "Sarah Williams",
    position: "CEO",
    company: "Innovate Digital",
    image: "/lovable-uploads/testimonial-2.jpg",
  },
  {
    id: 3,
    content: "The document processing was lightning fast and the team was always available to answer my questions. A truly outstanding service!",
    author: "Raj Patel",
    position: "General Manager",
    company: "Global Solutions LLC",
    image: "/lovable-uploads/testimonial-3.jpg",
  },
  {
    id: 4,
    content: "Working with your team made navigating the complex documentation process simple and straightforward. I couldn't be happier with the results.",
    author: "Fatima Al Mansoori",
    position: "Operations Director",
    company: "Falcon Investments",
    image: "/lovable-uploads/testimonial-4.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // For showing 3 testimonials at once with active in middle
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + testimonials.length) % testimonials.length;
      result.push({
        ...testimonials[index],
        position: i // -1: left, 0: center, 1: right
      });
    }
    return result;
  };

  return (
    <section 
      className="py-24 relative overflow-hidden bg-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background gradient blobs */}
      <motion.div 
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl"
      />
      
      <motion.div 
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-3xl"
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            whileInView={{
              backgroundPosition: ["0% 0%", "100% 0%"],
              opacity: [0.5, 1]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <span className="text-gradient">What Our Clients Say</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="relative px-12 max-w-5xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial) => {
                const isActive = testimonial.position === 0;
                const isLeft = testimonial.position === -1;
                const isRight = testimonial.position === 1;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isLeft ? '-100%' : '100%',
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.3,
                      zIndex: isActive ? 10 : 0,
                      rotateY: isActive ? 0 : isLeft ? 15 : -15
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.4
                    }}
                    className={cn(
                      "absolute top-0 left-0 w-full h-full px-4",
                      isActive ? "pointer-events-auto" : "pointer-events-none"
                    )}
                  >
                    <motion.div 
                      className={cn(
                        "h-full flex flex-col items-center justify-center p-8 rounded-2xl text-center glass-card",
                        isActive ? "shadow-xl" : ""
                      )}
                      whileHover={isActive ? { scale: 1.03 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isActive ? [0, 5, 0, -5, 0] : 0 }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <Quote className="text-primary w-12 h-12 mb-6 opacity-20" />
                      </motion.div>
                      
                      <p className="text-xl mb-8 italic">"{testimonial.content}"</p>
                      <motion.div 
                        className="flex items-center"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div 
                          className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              // Fallback to placeholder image
                              target.onerror = null;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=0070F3&color=fff`;
                            }}
                          />
                        </motion.div>
                        <div className="text-left">
                          <motion.h4
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-semibold"
                          >
                            {testimonial.author}
                          </motion.h4>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm text-gray-600"
                          >
                            {testimonial.position}, {testimonial.company}
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full w-10 h-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full w-10 h-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Dots indicator with animations */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
