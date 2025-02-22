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

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Services Section with "What are you looking for?" */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">What are you looking for?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional documentation and business services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-primary hover:text-primary/90"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Offers Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Discover Latest Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our special promotional packages and discounted services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block mb-4">
                  {offer.savings}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-primary font-semibold mb-4">{offer.price}</p>
                <Button 
                  className="w-full"
                  onClick={handleGetStarted}
                >
                  Get Offer Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Esteemed Partners Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Esteemed Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with leading organizations and government entities to provide seamless services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              { name: "Dubai Economic Department", logo: "https://www.ded.ae/images/default-source/default-album/ded-logo.png" },
              { name: "UAE Ministry of Foreign Affairs", logo: "https://www.mofaic.gov.ae/Style%20Library/theme/img/logo-new.png" },
              { name: "Dubai Courts", logo: "https://www.dc.gov.ae/PublishingImages/ManipalDubai.png" },
              { name: "Federal Authority for Identity and Citizenship", logo: "https://www.ica.gov.ae/assets/images/ica-logo-en.svg" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-secondary mb-12">Our Success Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-gray-600">Documents Processed</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <Button
          variant="default"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
          onClick={handleGetStarted}
        >
          Start Your Documentation Process Now
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
