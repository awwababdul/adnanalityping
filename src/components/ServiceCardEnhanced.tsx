
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Check, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Service, SubService } from "@/types/services";
import { Badge } from "@/components/ui/badge";

interface ServiceCardEnhancedProps {
  service: Service;
  delay?: number;
  featured?: boolean;
}

const ServiceCardEnhanced = ({ service, delay = 0, featured = false }: ServiceCardEnhancedProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
        featured 
          ? 'shadow-lg border-primary/20 ring-1 ring-primary/10' 
          : 'shadow-sm border-gray-100 hover:shadow-md'
      }`}
    >
      {featured && (
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-1.5 px-4 text-center text-sm font-medium">
          Popular Service
        </div>
      )}
      
      <div className="p-6">
        <div 
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${
                featured 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-primary/10 text-primary'
              } w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white`}>
                <div>{service.icon}</div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {featured && (
                    <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1">{service.description}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </motion.div>
          </div>
          
          {/* Benefits badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
              <Check className="w-3 h-3" />
              <span>Fast Processing</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
              <Award className="w-3 h-3" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-full text-xs">
              <Clock className="w-3 h-3" />
              <span>Express Options</span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <ul className="space-y-2">
                  {service.subServices.map((subService) => (
                    <li key={subService.id}>
                      <Link
                        to={`/services/${service.id}/${subService.id}`}
                        className="block p-3 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{subService.title}</h4>
                            <p className="text-sm text-gray-600">{subService.description}</p>
                          </div>
                          <div className="bg-primary/5 rounded-full p-2 text-primary">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex items-center justify-center gap-1 py-2 bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg text-primary text-sm font-medium"
                  >
                    <span>View all {service.title} services</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCardEnhanced;
