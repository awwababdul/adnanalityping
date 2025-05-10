
import { Home, FileText, Upload, ShoppingCart, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CartIndicator from "./CartIndicator";

const navItems = [
  {
    icon: Home,
    label: "Home",
    path: "/"
  },
  {
    icon: FileText,
    label: "Services",
    path: "/services"
  },
  {
    icon: Upload,
    label: "Upload",
    path: "/upload-documents"
  },
  {
    icon: ShoppingCart,
    label: "Cart",
    path: "/cart",
    isCart: true
  },
  {
    icon: MessageCircle,
    label: "Chat",
    path: "https://api.whatsapp.com/send?phone=971552636961",
    isExternal: true
  }
];

const MobileNavigation = () => {
  const location = useLocation();
  
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 z-50"
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = item.path === location.pathname;
          
          if (item.isExternal) {
            return (
              <a 
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            );
          }
          
          return (
            <Link 
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive 
                  ? "text-primary" 
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {item.isCart ? (
                <div className="relative">
                  <CartIndicator />
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              ) : (
                <>
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </>
              )}
              
              {isActive && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute top-0 w-12 h-1 bg-primary rounded-b-full"
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileNavigation;
