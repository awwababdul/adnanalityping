
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Adnan Ali Typing</h3>
            <div className="flex flex-col space-y-3">
              <a href="https://maps.app.goo.gl/DbxyAfj3s6AQ5R8A7" target="_blank" rel="noopener noreferrer" className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                <span>Near Al Mamzar Center,<br />Hor Al Anz, Dubai, UAE</span>
              </a>
              <a href="tel:+971552636961" className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+971 55 263 6961</span>
              </a>
              <a href="tel:+971545535013" className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+971 54 553 5013</span>
              </a>
              <a href="mailto:info@adnanalityping.ae" className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@adnanalityping.ae</span>
              </a>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 text-primary" />
                <div>
                  <p>Mon-Thu, Sat-Sun: 9:00 - 21:00</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/typing-services-dubai" className="hover:text-primary transition-colors">Typing Services</Link></li>
              <li><Link to="/translation-services-dubai" className="hover:text-primary transition-colors">Translation Services</Link></li>
              <li><Link to="/legal-document-typing-dubai" className="hover:text-primary transition-colors">Legal Document Typing</Link></li>
              <li><Link to="/resume-typing-services-dubai" className="hover:text-primary transition-colors">Resume Typing</Link></li>
              <li><Link to="/services/business-setup" className="hover:text-primary transition-colors">Business Setup</Link></li>
              <li><Link to="/services/immigration" className="hover:text-primary transition-colors">Visa Services</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Service Areas</h4>
              <p className="text-sm">Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} Adnan Ali Typing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
