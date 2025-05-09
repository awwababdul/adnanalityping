
import React from 'react';
import { MapPin } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";

const LocalServiceAreas = () => {
  const dubaiAreas = [
    "Bur Dubai", "Deira", "Business Bay", "Downtown Dubai", "Dubai Marina", 
    "Jumeirah", "Sheikh Zayed Road", "Al Quoz", "Al Barsha", "Jumeirah Lake Towers",
    "Dubai Silicon Oasis", "Dubai Production City", "Mirdif", "International City",
    "Dubai Sports City", "Motor City", "Remraam", "Arabian Ranches", "Dubai Hills",
    "Emirates Hills"
  ];
  
  const emirates = [
    "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"
  ];
  
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Serving All Areas in Dubai & UAE</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional typing services are available across Dubai and all Emirates. 
              We provide fast, reliable, and certified document services wherever you are.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection variant="fadeInLeft">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                Dubai Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dubaiAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-3 text-center hover:bg-primary/5 transition-colors"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeInRight">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                Other Emirates
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {emirates.map((emirate, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-3 text-center hover:bg-primary/5 transition-colors"
                  >
                    {emirate}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-gray-700">
                  <strong>Remote Services Available:</strong> Can't visit us in person? No problem! 
                  We offer remote document services throughout the UAE. Simply contact us via WhatsApp 
                  or call, and we'll assist you with your documentation needs from anywhere.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocalServiceAreas;
