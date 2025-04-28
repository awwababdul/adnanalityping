
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { Search } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

// Function to extract search results from services
const extractServiceResults = (): SearchResult[] => {
  const results: SearchResult[] = [];
  
  services.forEach((service) => {
    // Add main service
    results.push({
      id: `service-${service.id}`,
      title: service.title,
      description: service.description,
      url: `/services/${service.id}`,
      category: "Services",
    });
    
    // Add subservices
    service.subServices.forEach((subService) => {
      results.push({
        id: `subservice-${service.id}-${subService.id}`,
        title: subService.title,
        description: subService.description,
        url: `/services/${service.id}`,
        category: "Services",
      });
    });
  });
  
  return results;
};

// Function to extract search results from FAQs
const extractFaqResults = (): SearchResult[] => {
  return faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    description: faq.answer,
    url: "/faq",
    category: "FAQ",
  }));
};

// Combine all search results
const getAllSearchResults = (): SearchResult[] => {
  return [...extractServiceResults(), ...extractFaqResults()];
};

type SearchDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
  const navigate = useNavigate();
  const searchResults = getAllSearchResults();
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>(searchResults);
  
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredResults(searchResults);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filtered = searchResults.filter(
      (result) =>
        result.title.toLowerCase().includes(lowerCaseQuery) ||
        result.description.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredResults(filtered);
  };

  const handleSelect = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search services, FAQs, and more..." 
        onValueChange={handleSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Services">
          {filteredResults
            .filter((result) => result.category === "Services")
            .map((result) => (
              <CommandItem
                key={result.id}
                onSelect={() => handleSelect(result.url)}
              >
                <Search className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{result.title}</span>
                  <span className="text-sm text-muted-foreground line-clamp-1">
                    {result.description}
                  </span>
                </div>
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandGroup heading="FAQ">
          {filteredResults
            .filter((result) => result.category === "FAQ")
            .map((result) => (
              <CommandItem
                key={result.id}
                onSelect={() => handleSelect(result.url)}
              >
                <Search className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{result.title}</span>
                  <span className="text-sm text-muted-foreground line-clamp-1">
                    {result.description}
                  </span>
                </div>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
