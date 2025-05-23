
import React from 'react';
import { Button } from '@/components/ui/button';

interface NoServicesFoundProps {
  searchQuery: string;
  onClearSearch: () => void;
}

const NoServicesFound: React.FC<NoServicesFoundProps> = ({ searchQuery, onClearSearch }) => {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500">No services found matching "{searchQuery}"</p>
      <Button variant="link" onClick={onClearSearch}>Clear search</Button>
    </div>
  );
};

export default NoServicesFound;
