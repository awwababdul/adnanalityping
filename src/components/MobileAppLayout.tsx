
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Grid, Upload, MessageSquare, 
  DollarSign, ChevronRight, Search, X, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerClose
} from '@/components/ui/drawer';

interface MobileAppLayoutProps {
  children: React.ReactNode;
}

const MobileAppLayout = ({ children }: MobileAppLayoutProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Grid className="w-5 h-5" /> },
    { name: 'Upload', path: '/upload-documents', icon: <Upload className="w-5 h-5" /> },
    { name: 'Quote', path: '/get-quote', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Chat', path: '#chat', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  // Handle scroll direction for hiding/showing header
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        setScrollDirection('none');
      } else if (currentScroll > lastScroll && currentScroll > 50) {
        setScrollDirection('down');
      } else if (currentScroll < lastScroll) {
        setScrollDirection('up');
      }
      
      setLastScroll(currentScroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* App Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-sm transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
              alt="Adnan Ali Typing Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg text-primary">Adnan Ali</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            
            <Drawer>
              <DrawerTrigger asChild>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Filter"
                >
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filter Services</h2>
                    <DrawerClose className="rounded-full p-1 hover:bg-gray-100">
                      <X className="w-5 h-5" />
                    </DrawerClose>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">By Authority</h3>
                      <div className="flex flex-wrap gap-2">
                        {['ICA', 'MOHRE', 'DHA', 'Dubai Courts', 'DED'].map((authority) => (
                          <Button 
                            key={authority} 
                            variant="outline" 
                            className="rounded-full text-sm py-1 px-3 h-auto"
                          >
                            {authority}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">By Service Speed</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Express (1-2hrs)', 'Same Day', 'Standard (24-48hrs)'].map((speed) => (
                          <Button 
                            key={speed} 
                            variant="outline" 
                            className="rounded-full text-sm py-1 px-3 h-auto"
                          >
                            {speed}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4">Apply Filters</Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex flex-col"
          >
            <div className="bg-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">Popular:</span>
                {['Visa', 'Emirates ID', 'Translation', 'Golden Visa'].map((tag) => (
                  <Button 
                    key={tag}
                    variant="outline" 
                    className="text-xs py-0 px-2 h-6 rounded-full"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 bg-white p-4 overflow-auto">
              {/* Search results would go here */}
              {searchQuery ? (
                <p className="text-center text-gray-500 py-8">
                  Searching for "{searchQuery}"...
                </p>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-medium">Recently Viewed</h3>
                  <div className="space-y-2">
                    {['Visa Stamping', 'Emirates ID Renewal', 'Legal Translation'].map((service) => (
                      <Link 
                        key={service}
                        to="#" 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setSearchOpen(false)}
                      >
                        <span>{service}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pt-14 pb-16">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around">
          {navigationItems.map((item) => {
            const isActive = item.path === location.pathname || 
              (item.path === '/services' && location.pathname.startsWith('/services'));
            
            return (
              <Link
                key={item.name}
                to={item.path === '#chat' ? '#' : item.path}
                onClick={item.path === '#chat' ? handleChatClick : undefined}
                className={`flex flex-col items-center py-2 px-3 ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navigation-pill"
                    className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileAppLayout;
