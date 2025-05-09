
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";

interface RelatedServicesProps {
  services: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}

const RelatedServices = ({ services }: RelatedServicesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Related Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore other services we offer that might interest you
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                {service.icon && (
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
