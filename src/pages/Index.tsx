
import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Shield, Clock, UserCheck, MessageCircle, Award, Users } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleGetStarted = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Your Trusted Document Services Partner</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience, we've successfully processed more than 50,000 documents, serving 10,000+ satisfied clients in Dubai. Our commitment to excellence makes us your ideal partner for all documentation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Government-Authorized",
                description: "Licensed and certified by Dubai authorities, ensuring full legal compliance"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "24-Hour Processing",
                description: "Swift document processing with most services completed within 24 hours"
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "15+ Years Experience",
                description: "Extensive expertise in UAE documentation and government services"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Comprehensive Documentation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From visa processing to legal document translation, we offer end-to-end documentation services tailored to your needs. Our expert team ensures accuracy, speed, and compliance with UAE regulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                {service.subServices.map((subService) => (
                  <div
                    key={subService.id}
                    className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <h4 className="font-medium text-secondary">{subService.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{subService.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
