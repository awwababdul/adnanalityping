
import { useEffect } from "react";
import { HeartPulse, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

const DubaiHealthAuthorityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactNow = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  const services = [
    {
      title: "Medical Fitness Test",
      description: "Complete processing of medical fitness tests required for visa applications and renewals",
      features: [
        "Application preparation and submission",
        "Appointment scheduling at DHA centers",
        "Blood test and X-ray arrangement",
        "Result collection and processing",
        "Urgent services available"
      ]
    },
    {
      title: "Health Insurance",
      description: "Assistance with mandatory health insurance requirements for residents and employees",
      features: [
        "Insurance plan selection and advice",
        "Application processing and submission",
        "Document verification and compliance check",
        "Policy renewal assistance",
        "Claims support services"
      ]
    },
    {
      title: "DHA Licensing",
      description: "Professional assistance for healthcare professionals seeking DHA licenses",
      features: [
        "Eligibility assessment",
        "Application preparation and submission",
        "Document verification and processing",
        "Dataflow report arrangement",
        "License renewal services"
      ]
    },
    {
      title: "Health Card Services",
      description: "Processing of health cards for residents and visitors",
      features: [
        "Application preparation and submission",
        "Document verification and processing",
        "Fee payment assistance",
        "Card collection and delivery",
        "Renewal services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Dubai Health Authority</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete DHA services including medical fitness tests, health cards, and healthcare licensing
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full animate-glow"
                  onClick={handleContactNow}
                >
                  Contact Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Our DHA</span> Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive Dubai Health Authority related services to meet all your healthcare documentation needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <HeartPulse className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2 text-gray-900">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Medical Fitness</span> Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures a smooth medical fitness test experience
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Application",
                  description: "We prepare and submit your medical fitness application with all required documents",
                  icon: <div className="text-3xl font-bold text-primary">1</div>
                },
                {
                  title: "Testing",
                  description: "We schedule and coordinate your medical tests at the designated DHA center",
                  icon: <div className="text-3xl font-bold text-primary">2</div>
                },
                {
                  title: "Result Collection",
                  description: "We collect your test results and process them for your visa application",
                  icon: <div className="text-3xl font-bold text-primary">3</div>
                }
              ].map((step, index) => (
                <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Benefits of Our</span> DHA Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience a hassle-free process with our expert assistance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Fast-track processing with priority appointments",
              "Dedicated PRO to handle all documentation",
              "Regular updates on application status",
              "Door-to-door service available",
              "Expert guidance on DHA requirements",
              "Complete document preparation assistance",
              "Urgent and same-day services available",
              "Post-processing support and follow-up"
            ].map((benefit, index) => (
              <AnimatedSection key={index} variant="fadeInLeft" delay={index * 0.05}>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Service</span> Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the service package that best suits your needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Standard",
                price: "AED 250",
                description: "Basic medical fitness processing",
                features: [
                  "Application processing",
                  "Regular appointment scheduling",
                  "Standard processing time",
                  "Result collection"
                ]
              },
              {
                title: "Express",
                price: "AED 350",
                description: "Faster processing with priority",
                features: [
                  "All standard features",
                  "Priority appointment",
                  "Expedited processing",
                  "SMS notifications",
                  "48-hour turnaround"
                ]
              },
              {
                title: "VIP",
                price: "AED 550",
                description: "Premium service with maximum convenience",
                features: [
                  "All express features",
                  "VIP center appointment",
                  "Door-to-door service",
                  "Same-day processing",
                  "Dedicated PRO",
                  "Direct delivery"
                ]
              }
            ].map((pkg, index) => (
              <AnimatedSection key={index} variant="zoomIn" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-primary my-3">{pkg.price}</div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mt-4 flex-grow">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    onClick={handleContactNow}
                  >
                    Select Package
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variant="fadeInUp" delay={0.3} className="mt-10 text-center">
            <p className="text-gray-600">
              Note: Government fees are not included in the package prices.
              <br />Contact us for company packages and special rates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Your Medical Fitness Test?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our DHA services experts today for efficient processing
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                onClick={handleContactNow}
              >
                Book Your Service Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Related</span> Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our other services that complement your DHA requirements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Visa Services", description: "Complete visa processing and immigration services", link: "/services/immigration" },
              { title: "Emirates ID", description: "Emirates ID application and renewal services", link: "/services/emirates-id" },
              { title: "Document Processing", description: "Comprehensive document processing services", link: "/services/document-processing" }
            ].map((service, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                <Link to={service.link} className="block h-full">
                  <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mt-auto flex items-center text-primary font-medium">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default DubaiHealthAuthorityPage;
