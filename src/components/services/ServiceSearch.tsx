
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ServiceSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex gap-3 mb-6">
      <div className="relative flex-grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
        <Filter className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ServiceSearch;
