
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, Filter, User } from 'lucide-react';

const AppHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  
  // Set header title based on current route
  const getHeaderTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Home';
    if (path === '/services') return 'Services';
    if (path === '/cart') return 'Your Cart';
    if (path === '/upload-documents') return 'Upload Documents';
    if (path === '/needs-wizard') return 'Service Finder';
    if (path === '/my-services') return 'My Services';
    if (path === '/about') return 'About Us';
    if (path === '/contact') return 'Contact Us';
    if (path === '/faq') return 'FAQ';
    
    // Extract from dynamic routes
    if (path.includes('/services/')) {
      const parts = path.split('/');
      if (parts.length === 3) {
        const category = parts[2].replace(/-/g, ' ');
        return category.charAt(0).toUpperCase() + category.slice(1);
      }
      if (parts.length === 4) {
        return 'Service Details';
      }
    }
    
    return 'Adnan Ali Typing';
  };
  
  const title = getHeaderTitle();
  const isRootRoute = location.pathname === '/';
  const canGoBack = !isRootRoute;
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setShowSearch(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              {canGoBack && (
                <button
                  onClick={() => navigate(-1)}
                  className="mr-2 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              
              {isRootRoute ? (
                <Link to="/" className="flex items-center">
                  <img
                    src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
                    alt="Adnan Ali Typing Logo"
                    className="h-8 w-auto mr-2"
                  />
                  <span className="font-medium text-lg text-primary">Adnan Ali</span>
                </Link>
              ) : (
                <h1 className="font-semibold text-lg">{title}</h1>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => navigate('/my-services')}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="User profile"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Simple search overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex flex-col">
          <div className="bg-white p-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button 
                type="button" 
                onClick={() => setShowSearch(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
            </form>
          </div>
          
          <div className="flex-1 bg-white p-4 overflow-auto">
            {/* Popular searches */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Visa Renewal', 'Emirates ID', 'Translation', 'Business Setup'].map((tag) => (
                  <button 
                    key={tag}
                    className="py-1 px-3 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;
