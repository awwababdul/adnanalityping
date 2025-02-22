
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-secondary mb-8">Oops! Page not found</p>
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
            <p className="text-gray-600 mt-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
