
import { useEffect } from "react";
import { Building2, CheckCircle, FileText, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

const BusinessSetupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactNow = () => {
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  const features = [
    "Trade License Application & Processing",
    "Business Name Registration",
    "Initial Approval Certificate",
    "Office Space Registration",
    "Banking & Financial Setup Assistance",
    "Corporate Tax Registration",
    "Visa Quota Application"
  ];

  const packages = [
    {
      title: "Starter Package",
      price: "AED 12,000",
      description: "Basic business setup for small enterprises",
      features: ["Trade License", "Initial Approvals", "Business Name Registration", "Basic Documentation"]
    },
    {
      title: "Professional Package",
      price: "AED 18,000",
      description: "Comprehensive setup for medium businesses",
      features: ["All Starter Features", "Office Registration", "Banking Assistance", "5 Visa Quotas", "Tax Registration"]
    },
    {
      title: "Enterprise Package",
      price: "AED 25,000+",
      description: "Complete solution for large businesses",
      features: ["All Professional Features", "Premium Location Options", "Unlimited Visa Quotas", "Full Legal Compliance", "Dedicated PRO Service"]
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
                <span className="text-gradient">Business Setup</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive business formation services to help you establish and grow your business in the UAE
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
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Packages
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Comprehensive Business Setup</span> Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our expert team provides end-to-end services to ensure your business is set up correctly and efficiently
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection variant="fadeInLeft" delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trade License Acquisition</h3>
                <p className="text-gray-600">We handle the entire process of obtaining your trade license, from application to approval, ensuring full compliance with local regulations.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeInRight" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Corporate Services</h3>
                <p className="text-gray-600">From company registration to visa processing, we provide comprehensive corporate services to streamline your business operations.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeInUp" delay={0.3} className="mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Business Setup</span> Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the package that best suits your business needs and requirements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative group overflow-hidden h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-primary mt-2">{pkg.price}</div>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                  </div>
                  <div className="mt-4 flex-grow">
                    <h4 className="font-medium mb-2">Features:</h4>
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
                    Get Started
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Our Business Setup</span> Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure a smooth and efficient business setup
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              { title: "Initial Consultation", description: "We understand your business needs and provide tailored advice" },
              { title: "Documentation Preparation", description: "Our team prepares all necessary documents for your business setup" },
              { title: "Application Submission", description: "We submit applications to relevant authorities and follow up" },
              { title: "License Issuance", description: "Once approved, we collect your trade license and other documents" },
              { title: "Additional Services", description: "We assist with bank account opening, visa processing, and more" }
            ].map((step, index) => (
              <AnimatedSection key={index} variant="fadeInLeft" delay={index * 0.1}>
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our expert team today to discuss your business setup requirements
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                onClick={handleContactNow}
              >
                Contact Us Now
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
                Explore our other services that complement your business setup
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Visa Services", description: "Complete visa processing for business owners and employees", link: "/services/immigration" },
              { title: "Emirates ID", description: "Assistance with Emirates ID application and renewal", link: "/services/emirates-id" },
              { title: "Document Processing", description: "Professional handling of all necessary documentation", link: "/services/tas-heel" }
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

export default BusinessSetupPage;
