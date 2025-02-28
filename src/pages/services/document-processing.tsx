
import { useEffect } from "react";
import { FileText, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

const DocumentProcessingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactNow = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  const documents = [
    { 
      title: "Legal Documents", 
      items: ["Power of Attorney", "Legal Contracts", "Affidavits", "Legal Translations"] 
    },
    { 
      title: "Personal Documents", 
      items: ["Marriage Certificates", "Birth Certificates", "Educational Certificates", "Medical Reports"] 
    },
    { 
      title: "Business Documents", 
      items: ["Trade Licenses", "Commercial Registrations", "Corporate Documents", "Financial Statements"] 
    },
    { 
      title: "Government Documents", 
      items: ["Visa Applications", "Emirates ID Applications", "Labor Cards", "Ministry Approvals"] 
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
                <span className="text-gradient">Document Processing</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional document processing, attestation, and translation services for all your needs
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
                <span className="text-gradient">Our Document</span> Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of document processing services tailored to your specific requirements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Document Attestation",
                icon: <FileText className="w-8 h-8 text-primary" />,
                description: "Official attestation of documents from relevant government authorities and embassies",
                features: ["Ministry Attestation", "Embassy Attestation", "Notary Public", "Consular Legalization"]
              },
              {
                title: "Document Translation",
                icon: <FileText className="w-8 h-8 text-primary" />,
                description: "Professional translation services for all types of documents in multiple languages",
                features: ["Legal Translation", "Technical Translation", "Certified Translation", "Rush Services Available"]
              },
              {
                title: "Document Processing",
                icon: <FileText className="w-8 h-8 text-primary" />,
                description: "Efficient processing of various documents through government departments",
                features: ["Application Processing", "Document Verification", "Document Renewal", "Error Correction"]
              }
            ].map((service, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full flex flex-col">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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
                    Get Started
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documents We Process */}
      <section className="py-20 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Documents We</span> Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We handle a wide range of documents for individuals and businesses
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((category, index) => (
              <AnimatedSection key={index} variant="fadeIn" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Our Document Processing</span> Timeline
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We ensure efficient document processing through our streamlined workflow
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            {[
              { title: "Document Submission", description: "Submit your documents in person or online", duration: "Day 1" },
              { title: "Initial Assessment", description: "We review your documents and verify requirements", duration: "Day 1" },
              { title: "Processing", description: "Your documents are processed through relevant channels", duration: "Day 2-3" },
              { title: "Verification", description: "Quality check to ensure all requirements are met", duration: "Day 3-4" },
              { title: "Completion", description: "Final processing and collection arrangements", duration: "Day 4-5" }
            ].map((step, index) => (
              <AnimatedSection key={index} variant="fadeInLeft" delay={index * 0.1}>
                <div className="flex md:items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center z-10 relative">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
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
                <span className="text-gradient">Our</span> Pricing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for all your document processing needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Standard", price: "AED 150", description: "Per document", turnaround: "3-5 business days" },
              { title: "Express", price: "AED 250", description: "Per document", turnaround: "1-2 business days" },
              { title: "Same Day", price: "AED 350", description: "Per document", turnaround: "Same business day" }
            ].map((pricing, index) => (
              <AnimatedSection key={index} variant="zoomIn" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full flex flex-col text-center">
                  <h3 className="text-xl font-semibold mb-2">{pricing.title}</h3>
                  <div className="text-3xl font-bold text-primary my-4">{pricing.price}</div>
                  <p className="text-gray-600">{pricing.description}</p>
                  <div className="bg-primary/10 text-sm rounded-full px-4 py-2 text-primary font-medium my-4">
                    Turnaround: {pricing.turnaround}
                  </div>
                  <Button 
                    className="w-full mt-auto bg-primary hover:bg-primary/90"
                    onClick={handleContactNow}
                  >
                    Select
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection variant="fadeInUp" delay={0.3} className="mt-8 text-center">
            <p className="text-gray-600">
              Note: Additional fees may apply for complex documents or special requirements.
              <br />Contact us for a customized quote.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Process Your Documents?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our document specialists today for efficient and reliable service
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                onClick={handleContactNow}
              >
                Get Started Now
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
                Explore our other services that might be useful for you
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Emirates ID Services", description: "Complete assistance with Emirates ID applications and renewals", link: "/services/emirates-id" },
              { title: "Visa Services", description: "Comprehensive visa services for all requirements", link: "/services/immigration" },
              { title: "Business Setup", description: "Complete business formation services in the UAE", link: "/services/business-setup" }
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

export default DocumentProcessingPage;
