
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronLeft, Filter, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AppHeader: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            {canGoBack && (
              <Button
                onClick={() => window.history.back()}
                variant="ghost"
                size="icon"
                className="mr-2"
                aria-label="Go back"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
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
          
          <div className="flex items-center space-x-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full p-0">
                <div className="p-4 pb-0">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Search for services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost">Cancel</Button>
                    </SheetClose>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-2">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Visa Renewal', 'Emirates ID', 'Translation', 'Business Setup', 'Typing Services'].map(tag => (
                      <div 
                        key={tag} 
                        className="py-1 px-3 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Filter">
                  <Filter className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Services</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">By Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Visa', 'Business', 'Documents', 'Translation', 'Medical'].map((category) => (
                          <div 
                            key={category}
                            className="py-1 px-3 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">By Processing Time</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Express', 'Standard', 'Economy'].map((speed) => (
                          <div 
                            key={speed}
                            className="py-1 px-3 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                          >
                            {speed}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">By Government Entity</h3>
                      <div className="flex flex-wrap gap-2">
                        {['ICA', 'MOHRE', 'DHA', 'DLD', 'Dubai Courts'].map((entity) => (
                          <div 
                            key={entity}
                            className="py-1 px-3 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                          >
                            {entity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 mt-4">
                  <SheetClose asChild>
                    <Button variant="outline">Reset</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User account">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/my-services" className="flex w-full">My Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/upload-documents" className="flex w-full">My Documents</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/about" className="flex w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/contact" className="flex w-full">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
