
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, Search } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { locationPages } from '@/data/locationPages';

interface LocationSelectorProps {
  className?: string;
}

const LocationSelector = ({ className }: LocationSelectorProps) => {
  const [open, setOpen] = useState(false);

  const locations = locationPages.map(location => ({
    id: location.id,
    name: location.city,
    url: `/typing-services-${location.id.toLowerCase().replace(/\s+/g, '-')}`
  }));

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors text-primary"
            aria-expanded={open}
          >
            <MapPin className="w-4 h-4 mr-1" />
            <span>Select Location</span>
            <ChevronDown className={`w-4 h-4 transition ${open ? 'rotate-180' : ''}`} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-64" align="end">
          <Command>
            <CommandInput
              placeholder="Search locations..."
              startIcon={<Search className="w-4 h-4" />}
              className="py-2"
            />
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {locations.map((location) => (
                <CommandItem
                  key={location.id}
                  value={location.name}
                  className="cursor-pointer"
                  onSelect={() => {
                    setOpen(false);
                    // Note: We're using Link component navigation to prevent page reload
                    document.querySelector(`a[href="${location.url}"]`)?.click();
                  }}
                >
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Services in {location.name}</span>
                  <Link to={location.url} className="hidden" />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LocationSelector;
