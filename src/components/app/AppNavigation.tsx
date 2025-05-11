
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, Upload, ShoppingCart, MessageCircle } from "lucide-react";
import CartIndicator from "@/components/CartIndicator";

const AppNavigation = () => {
  const location = useLocation();
  
  const navigationItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home className="w-5 h-5" /> 
    },
    { 
      name: 'Services', 
      path: '/services', 
      icon: <Search className="w-5 h-5" /> 
    },
    { 
      name: 'Upload', 
      path: '/upload-documents', 
      icon: <Upload className="w-5 h-5" /> 
    },
    { 
      name: 'Cart', 
      path: '/cart', 
      icon: <CartIndicator />,
      isCart: true
    },
    { 
      name: 'Chat', 
      path: 'https://api.whatsapp.com/send?phone=971552636961', 
      icon: <MessageCircle className="w-5 h-5" />,
      isExternal: true
    }
  ];

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://api.whatsapp.com/send?phone=971552636961", "_blank");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => {
          const isActive = 
            item.path === location.pathname || 
            (item.path === '/services' && location.pathname.startsWith('/services'));
          
          if (item.isExternal) {
            return (
              <a 
                key={item.name}
                href={item.path}
                onClick={handleChatClick}
                className="flex flex-col items-center justify-center py-2 px-3 relative"
              >
                <div className={`${isActive ? 'text-primary' : 'text-gray-500'}`}>
                  {item.icon}
                </div>
                <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-gray-500'}`}>
                  {item.name}
                </span>
              </a>
            );
          }
          
          return (
            <Link 
              key={item.name}
              to={item.path}
              className="flex flex-col items-center justify-center py-2 px-3 relative"
            >
              <div className={`${isActive ? 'text-primary' : 'text-gray-500'}`}>
                {item.icon}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-gray-500'}`}>
                {item.name}
              </span>
              
              {isActive && (
                <motion.div 
                  layoutId="navigation-indicator"
                  className="absolute -top-2 w-12 h-1 bg-primary rounded-b-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AppNavigation;
