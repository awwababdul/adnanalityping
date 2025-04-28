
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '@/components/AnimatedSection';
import { CalendarClock, MapPin, Award, Users } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Helmet>
        <title>About Us - Adnan Ali Typing | Document Services Dubai</title>
        <meta name="description" content="Learn about Adnan Ali Typing - Dubai's trusted document processing center with over 25 years of experience providing visa, Emirates ID, and business setup services." />
        <meta name="keywords" content="Adnan Ali Typing center Dubai, document services Dubai, visa processing company Dubai, typing center Hor Al Anz" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            <span className="text-gradient">About Adnan Ali Typing</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your trusted partner for document processing in Dubai for over two decades
          </p>
        </AnimatedSection>

        {/* Company History */}
        <AnimatedSection variant="fadeInUp" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Adnan Ali Typing was established in 1998 with a clear mission: to simplify document processing for businesses and individuals in Dubai. What began as a small typing center has evolved into a comprehensive document processing hub, serving thousands of satisfied clients across the UAE.
              </p>
              <p className="text-gray-600 mb-4">
                Over our 25+ years of operation, we have developed deep expertise in UAE's regulatory landscape and built strong relationships with government departments, allowing us to process documents efficiently and accurately.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold our founding principles of reliability, efficiency, and customer satisfaction, making document processing stress-free for our diverse clientele.
              </p>
            </div>
            <div className="order-first md:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png" 
                  alt="Adnan Ali Typing Office" 
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{height: "350px"}}
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key facts */}
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarClock className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">25+ Years</h3>
              <p className="text-gray-600">Of trusted service in document processing</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">350,000+</h3>
              <p className="text-gray-600">Satisfied clients served</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">100%</h3>
              <p className="text-gray-600">Success rate in document approvals</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Strategic Location</h3>
              <p className="text-gray-600">Centrally located in Hor Al Anz, Dubai</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection variant="fadeInUp" delay={0.3}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every document we process, ensuring accuracy, compliance with regulations, and timely delivery.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty with our clients.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Client Focus</h3>
                <p className="text-gray-600">
                  We prioritize our clients' needs, providing personalized service and going the extra mile to ensure their satisfaction.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Location */}
        <AnimatedSection variant="fadeInUp" delay={0.4}>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  We are conveniently located in Hor Al Anz, Dubai, easily accessible via public transportation and with ample parking nearby.
                </p>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Address:</h3>
                  <p className="text-gray-600">
                    Adnan Ali Typing<br />
                    Near Al Mamzar Center<br />
                    Hor Al Anz<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Working Hours:</h3>
                  <p className="text-gray-600">
                    Saturday - Thursday: 9:00 AM - 9:00 PM<br />
                    Friday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Contact:</h3>
                  <p className="text-gray-600">
                    Phone: <a href="tel:+971552636961" className="text-primary hover:underline">+971 55 263 6961</a><br />
                    Email: <a href="mailto:info@adnanalityping.ae" className="text-primary hover:underline">info@adnanalityping.ae</a>
                  </p>
                </div>
              </div>
              <div className="h-72 lg:h-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.577881336268!2d55.325132!3d25.278490799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5d51d6ac93%3A0x3910c76442d39ab0!2sHor%20Al%20Anz%2C%20Dubai!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adnan Ali Typing Office Location"
                  className="rounded-lg shadow-sm"
                ></iframe>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
