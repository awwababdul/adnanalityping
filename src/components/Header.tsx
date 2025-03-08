
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "Services", 
      path: "#", 
      dropdown: [
        { name: "Packages", path: "/services/packages" },
        { name: "Immigration", path: "/services/immigration" },
        { name: "Emirates ID", path: "/services/emirates-id" },
        { name: "Tas-heel", path: "/services/tas-heel" },
        { name: "DHA Services", path: "/services/dubai-health-authority" },
      ] 
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen 
            ? "bg-white/90 backdrop-blur-md shadow-md" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
                alt="Adnan Ali Typing Logo"
                className="h-10 md:h-14 w-auto"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden sm:block"
              >
                <h1 className={`font-bold text-lg md:text-xl ${isScrolled ? "text-primary" : "text-white"}`}>
                  Adnan Ali Typing
                </h1>
                <p className={`text-xs ${isScrolled ? "text-gray-600" : "text-gray-300"}`}>
                  Documentation Services
                </p>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"} group-hover:text-primary transition-colors`}>
                        {item.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 ${isScrolled ? "text-gray-800" : "text-white"} group-hover:text-primary transition-colors`} />
                      
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-2 bg-white rounded-xl shadow-xl">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link 
                              key={idx}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"} hover:text-primary transition-colors`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a href="tel:+971552636961">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 55 263 6961</span>
                </Button>
              </a>
            </div>

            {/* Mobile Call Button and Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a href="tel:+971552636961" className="mr-2" aria-label="Call us">
                <Phone className={`w-5 h-5 ${isScrolled ? "text-primary" : "text-white"}`} />
              </a>

              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 md:top-20 left-0 w-full bg-white shadow-lg z-40 md:hidden overflow-y-auto max-h-[calc(100vh-4rem)]"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link 
                            key={idx}
                            to={dropdownItem.path}
                            className="block text-gray-600 hover:text-primary transition-colors py-2"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className="block font-medium text-gray-800 hover:text-primary transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+971552636961" className="flex items-center gap-2 text-primary py-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 55 263 6961</span>
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
