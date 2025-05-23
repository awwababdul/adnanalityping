
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">UAE Government Services Made Simple</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert assistance with all documentation and government procedures in Dubai and across the UAE
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-5 max-w-3xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <Input
              type="text"
              placeholder="Search for a service (e.g., visa renewal, Emirates ID, business license...)"
              className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-blue-200 h-12 rounded-lg focus-visible:ring-white/30 focus-visible:border-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-lg">
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['visa', 'emirates id', 'business license', 'medical', 'tasheel'].map((tag) => (
              <Button 
                key={tag} 
                variant="ghost" 
                className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-full"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
