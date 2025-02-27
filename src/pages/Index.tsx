
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Building2, UserCheck, FileSignature, Printer, BookCheck, ArrowRight, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const Index = () => {
  const mainServices = [
    {
      id: "packages",
      icon: <Building2 className="w-8 h-8" />,
      title: "Packages",
      description: "Complete service packages for business setup, family visas, and document processing",
      link: "/services/packages"
    },
    {
      id: "immigration",
      icon: <UserCheck className="w-8 h-8" />,
      title: "Immigration",
      description: "Comprehensive immigration services including visa processing and status change",
      link: "/services/immigration"
    },
    {
      id: "emirates-id",
      icon: <FileSignature className="w-8 h-8" />,
      title: "Emirates ID",
      description: "Emirates ID application, renewal, and replacement services",
      link: "/services/emirates-id"
    },
    {
      id: "tas-heel",
      icon: <Printer className="w-8 h-8" />,
      title: "Tas-heel",
      description: "Complete range of Tas-heel services for labor and employment needs",
      link: "/services/tas-heel"
    },
    {
      id: "dha",
      icon: <BookCheck className="w-8 h-8" />,
      title: "DHA Services",
      description: "Dubai Health Authority services including medical fitness and licensing",
      link: "/services/dubai-health-authority"
    }
  ];

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  // Animation variants
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

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Services Section with glass cards */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">What are you looking for?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional documentation and business services
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="service-card glass-card bg-white/5 backdrop-blur-lg p-8 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="inline-block">
                  <Button 
                    variant="ghost" 
                    className="group w-full justify-between text-primary hover:text-primary/90 p-0"
                  >
                    Learn More 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Offers Section */}
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
              <span className="text-gradient">Discover Latest Offers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our special promotional packages and discounted services
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Business Setup Package",
                description: "Complete business formation package including trade license and all necessary approvals",
                price: "Starting from AED 15,000",
                savings: "Save 20%"
              },
              {
                title: "Visa Services Bundle",
                description: "Family visa package including medical testing and Emirates ID",
                price: "Starting from AED 3,000",
                savings: "Save 15%"
              },
              {
                title: "Document Package",
                description: "Bundle of attestation and translation services at discounted rates",
                price: "Starting from AED 500",
                savings: "Save 25%"
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-card bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block mb-4">
                    {offer.savings}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <p className="text-primary font-semibold mb-6">{offer.price}</p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleGetStarted}
                  >
                    Get Offer Now
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Esteemed Partners Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Our Esteemed Partners</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with leading organizations and government entities to provide seamless services
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center"
          >
            {[
              { name: "Dubai Economic Department", logo: "https://www.ded.ae/images/default-source/default-album/ded-logo.png" },
              { name: "UAE Ministry of Foreign Affairs", logo: "https://www.mofaic.gov.ae/Style%20Library/theme/img/logo-new.png" },
              { name: "Dubai Courts", logo: "https://www.dc.gov.ae/PublishingImages/ManipalDubai.png" },
              { name: "Federal Authority for Identity and Citizenship", logo: "https://www.ica.gov.ae/assets/images/ica-logo-en.svg" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card bg-white p-6 rounded-xl shadow-lg glow-effect transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 bg-secondary relative overflow-hidden text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Success Story</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "50,000+", label: "Documents Processed" },
              { number: "10,000+", label: "Satisfied Clients" },
              { number: "15+", label: "Years of Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl text-center group hover:bg-primary/20 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-2 text-primary">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              <span className="text-gradient">Ready to get started?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let our team of experts handle all your documentation needs with precision and efficiency.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 animate-glow"
              onClick={handleGetStarted}
            >
              Start Your Documentation Process Now
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
