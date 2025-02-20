
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Service, SubService } from "@/types/services";

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

const ServiceCard = ({ service, delay = 0 }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
              <div className="text-primary">{service.icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
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
            <div className="mt-4 pt-4 border-t">
              <ul className="space-y-2">
                {service.subServices.map((subService) => (
                  <li key={subService.id}>
                    <Link
                      to={`/services/${service.id}/${subService.id}`}
                      className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-secondary">{subService.title}</h4>
                          <p className="text-sm text-gray-600">{subService.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
