
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const ImmigrationPage = () => {
  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-secondary">
        {/* Background elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-white hover:text-primary/90 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">Immigration Services</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Comprehensive immigration services for individuals and families in the UAE
            </p>
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full animate-glow"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Plane className="w-8 h-8" />,
                title: "Visa Services",
                description: "Tourist, business, and residence visa processing"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family Sponsorship",
                description: "Sponsorship services for family members"
              },
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: "Status Change",
                description: "Visa status modification and extensions"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-card glass-card bg-white/5 backdrop-blur-lg p-8 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Immigration Process</span>
            </h2>
            <p className="text-gray-600">Streamlined process for all your immigration needs</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Discuss your requirements and eligibility"
                },
                {
                  step: "02",
                  title: "Documentation",
                  description: "Complete document preparation and submission"
                },
                {
                  step: "03",
                  title: "Visa Processing",
                  description: "Track and complete your visa processing"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-6 glass-card rounded-xl"
                >
                  <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-gradient">Ready to start your immigration process?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our team of experts will guide you through every step of the immigration process.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 mx-auto animate-glow"
              onClick={handleGetStarted}
            >
              Start Your Immigration Process Now
            </Button>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default ImmigrationPage;
