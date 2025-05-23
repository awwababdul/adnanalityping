
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Check } from 'lucide-react';

interface PremiumServiceCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  timeframe: string;
  price?: string;
  popular?: boolean;
  features?: string[];
  icon?: React.ReactNode;
  delay?: number;
}

const PremiumServiceCard: React.FC<PremiumServiceCardProps> = ({
  id,
  category,
  title,
  description,
  timeframe,
  price,
  popular = false,
  features = [],
  icon,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl overflow-hidden ${
        popular 
          ? 'bg-gradient-to-br from-primary/5 via-primary/10 to-blue-500/5 border-2 border-primary/20' 
          : 'bg-white border border-gray-100'
      } transition-all duration-300 hover:shadow-lg relative group`}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
          Popular Choice
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className={`${popular ? 'bg-primary/20' : 'bg-primary/10'} rounded-xl p-3 text-primary`}>
              {icon}
            </div>
          )}
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">{category}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{timeframe}</span>
          </div>
          {price && (
            <div className="text-sm font-medium text-gray-900">
              Starting from <span className="text-primary">{price}</span>
            </div>
          )}
        </div>
        
        {features.length > 0 && (
          <div className="mt-4 space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className={`mt-6 pt-4 ${popular ? 'border-t border-primary/20' : 'border-t border-gray-100'}`}>
          <Link
            to={`/services/${category}/${id}`}
            className={`flex items-center justify-between ${
              popular 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
            } py-3 px-4 rounded-lg transition-colors group`}
          >
            <span className="font-medium">Learn more</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PremiumServiceCard;
