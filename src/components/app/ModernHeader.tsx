
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, ChevronDown, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ModernHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Solutions',
      subItems: [
        { name: 'For Businesses', path: '/services/business-setup' },
        { name: 'For Individuals', path: '/services/emirates-id' },
        { name: 'For Families', path: '/services/immigration' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
              alt="Adnan Ali Typing Logo"
              className="h-10 w-auto"
            />
            <div className="flex flex-col items-start">
              <span className="font-serif font-bold text-xl text-primary">Adnan Ali</span>
              <span className="text-xs text-gray-500">Document Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.subItems ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link to={subItem.path}>{subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary transition-colors ${
                    location.pathname === link.path ? 'text-primary font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                    <div className="relative">
                      <User className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 bg-primary w-2 h-2 rounded-full"></span>
                    </div>
                    <span className="font-medium">My Account</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/favorites">Saved Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-services">My Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/upload-documents">Uploaded Documents</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link to="/sign-in">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {user && (
              <Link to="/notifications" className="relative">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-primary w-2 h-2 rounded-full"></span>
              </Link>
            )}
            
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute top-0 right-0 bottom-0 w-3/4 bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif font-bold text-xl text-primary">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {user ? (
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{user.email}</p>
                        <p className="text-xs text-gray-500">Logged in</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/profile"
                        className="text-center py-2 bg-white border border-gray-200 rounded-md text-sm"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="py-2 bg-white border border-gray-200 rounded-md text-sm"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Button asChild>
                      <Link to="/sign-in">Sign In</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/sign-up">Register</Link>
                    </Button>
                  </div>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-500" />
                  </div>
                  <input
                    type="search"
                    className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Search services..."
                  />
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => 
                    !link.subItems ? (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`block py-3 px-4 rounded-lg ${
                          location.pathname === link.path
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div key={link.name} className="space-y-1">
                        <p className="py-3 px-4 font-medium text-gray-700">{link.name}</p>
                        <div className="ml-4 border-l border-gray-200 pl-4 space-y-1">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </nav>

                <div className="pt-6 border-t border-gray-200">
                  <a
                    href="https://api.whatsapp.com/send?phone=971552636961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 px-4 bg-green-500 text-white text-center rounded-lg font-medium"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ModernHeader;
