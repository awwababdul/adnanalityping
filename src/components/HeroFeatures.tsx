
import { Building2, UserCheck, FileSignature, Printer, BookCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const mainServices = [
  {
    id: "business-setup",
    icon: <Building2 className="w-8 h-8" />,
    title: "Business Setup",
    description: "Complete service packages for business setup, family visas, and document processing",
    link: "/services/business-setup"
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
    id: "document-processing",
    icon: <Printer className="w-8 h-8" />,
    title: "Document Processing",
    description: "Complete range of document processing services for all your needs",
    link: "/services/document-processing"
  },
  {
    id: "dha",
    icon: <BookCheck className="w-8 h-8" />,
    title: "DHA Services",
    description: "Dubai Health Authority services including medical fitness and licensing",
    link: "/services/dubai-health-authority"
  }
];

const HeroFeatures = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">What are you looking for?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional documentation and business services
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <AnimatedSection key={service.id} variant="fadeInUp" delay={index * 0.1}>
              <div className="service-card glass-card bg-white/5 backdrop-blur-lg p-8 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button 
                    variant="ghost" 
                    className="group w-full justify-between text-primary hover:text-primary/90 p-0"
                  >
                    Learn More 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
