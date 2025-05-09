
import React from 'react';
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from 'react-router-dom';

const SEOContentBlock = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-gradient">Professional Typing Services in Dubai & UAE</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                <strong>Adnan Ali Typing</strong> stands as Dubai's premier destination for comprehensive 
                <strong> typing services</strong>, <strong>document processing</strong>, and <strong>translation services</strong>. 
                With over 25 years of experience serving UAE residents and businesses, we've established ourselves as the 
                most trusted <strong>typing center in Dubai</strong> for all documentation needs.
              </p>
              
              <p className="mt-4">
                Our specialized services include <Link to="/legal-document-typing-dubai" className="text-primary hover:underline">legal document typing</Link>, 
                <Link to="/services/business-setup" className="text-primary hover:underline"> business setup documentation</Link>, 
                <Link to="/services/immigration" className="text-primary hover:underline"> visa application processing</Link>, 
                <Link to="/resume-typing-services-dubai" className="text-primary hover:underline"> professional resume typing</Link>, 
                and <Link to="/translation-services-dubai" className="text-primary hover:underline">certified translation services</Link> between 
                Arabic, English, and multiple other languages. Whether you need government forms, legal contracts, business proposals, 
                or personal documents, our team of expert typists ensures accuracy, confidentiality, and quick turnaround times.
              </p>

              <p className="mt-4">
                Located conveniently in Dubai, our <strong>typing services center</strong> is equipped with the latest technology 
                and staffed by multilingual professionals who understand UAE's documentation requirements across all emirates. 
                We serve individual clients, businesses, and government entities with the same level of dedication and precision.
              </p>

              <p className="mt-4">
                What sets us apart from other <strong>typing services in UAE</strong> is our comprehensive understanding of local 
                regulatory requirements, our attention to detail, and our commitment to customer satisfaction. Our 
                <strong> fast typing services</strong> ensure that your documents are processed quickly without compromising 
                on quality or accuracy. Many of our services offer same-day delivery, making us the go-to choice when time is of the essence.
              </p>

              <p className="mt-4">
                For businesses looking for <strong>professional document solutions in Dubai</strong>, our <strong>business typing services</strong> cover 
                everything from company formation documents, trade license applications, corporate contracts, to professional 
                correspondence. Our <strong>Arabic-English typing services</strong> ensure that your business communications are 
                precise and culturally appropriate.
              </p>

              <p className="mt-4">
                Contact <strong>Adnan Ali Typing Services Dubai</strong> today for all your document processing needs. 
                With our reputation for excellence and our commitment to quality, we continue to be the most trusted 
                <strong> typing center in UAE</strong> for residents, visitors, and businesses alike.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SEOContentBlock;
