
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/data/services';

interface ServiceCategoryGridProps {
  limit?: number;
  showViewAll?: boolean;
}

const ServiceCategoryGrid: React.FC<ServiceCategoryGridProps> = ({ 
  limit,
  showViewAll = true
}) => {
  const displayedCategories = limit ? serviceCategories.slice(0, limit) : serviceCategories;
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Link 
              to={`/services/${category.id}`}
              className="block h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div className={`bg-${category.color || 'blue'}-50 text-${category.color || 'blue'}-600 rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {category.subServices.length} services
                    </span>
                    <div className="flex items-center text-primary font-medium text-sm">
                      <span>Explore</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {showViewAll && limit && serviceCategories.length > limit && (
        <div className="mt-8 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-full text-primary font-medium transition-colors"
          >
            <span>View all service categories</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCategoryGrid;
