
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, Award, ThumbsUp, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Fast Processing",
      description: "We understand the value of your time. Our streamlined processes ensure quick turnaround times without compromising quality."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "25+ Years of Experience",
      description: "With over two decades in the industry, we bring unmatched expertise to handle even the most complex documentation needs."
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-primary" />,
      title: "Guaranteed Approval",
      description: "Our thorough understanding of requirements and processes leads to consistently high approval rates for all applications."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "100% Legal Compliance",
      description: "We strictly adhere to all UAE laws and regulations, ensuring your documents and processes are fully compliant."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "End-to-End Solutions",
      description: "From initial consultation to final delivery, we handle every aspect of your documentation requirements."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Multilingual Staff",
      description: "Our team speaks multiple languages to better serve our diverse clientele from around the world."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Why Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Adnan Ali Typing, we take pride in offering services that stand out from the competition
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
