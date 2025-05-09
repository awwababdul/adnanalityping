
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, X, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface SearchDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface SearchResult {
  type: 'service' | 'subService' | 'faq';
  title: string;
  description: string;
  link?: string;
  id?: string;
  serviceId?: string;
  question?: string;
  answer?: string;
}

const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Perform search when search term changes
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate a small delay for better UX
    const timer = setTimeout(() => {
      const searchResults: SearchResult[] = [];
      const lowerSearchTerm = searchTerm.toLowerCase();

      // Search in services
      services.forEach(service => {
        // Match in main service
        if (
          service.title.toLowerCase().includes(lowerSearchTerm) ||
          service.description.toLowerCase().includes(lowerSearchTerm)
        ) {
          searchResults.push({
            type: 'service',
            title: service.title,
            description: service.description,
            link: `/services/${service.id}`,
            id: service.id
          });
        }

        // Match in sub services
        service.subServices.forEach(subService => {
          if (
            subService.title.toLowerCase().includes(lowerSearchTerm) ||
            subService.description.toLowerCase().includes(lowerSearchTerm)
          ) {
            searchResults.push({
              type: 'subService',
              title: subService.title,
              description: subService.description,
              link: `/services/${service.id}/${subService.id}`,
              id: subService.id,
              serviceId: service.id
            });
          }
        });
      });

      // Search in FAQs
      faqs.forEach((faq, index) => {
        if (
          faq.question.toLowerCase().includes(lowerSearchTerm) ||
          faq.answer.toLowerCase().includes(lowerSearchTerm)
        ) {
          searchResults.push({
            type: 'faq',
            title: faq.question,
            description: faq.answer,
            link: `/faq`,
            id: `faq-${index}`,
            question: faq.question,
            answer: faq.answer
          });
        }
      });

      setResults(searchResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleResultClick = (result: SearchResult) => {
    setOpen(false);
    if (result.link) {
      navigate(result.link);
      // If it's a FAQ, we need to scroll to the specific FAQ
      if (result.type === 'faq') {
        setTimeout(() => {
          const element = document.getElementById(result.id || '');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.classList.add('highlight-faq');
            setTimeout(() => {
              element.classList.remove('highlight-faq');
            }, 3000);
          }
        }, 500);
      }
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setResults([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-2">Search Services & FAQs</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Type to search for services, information or FAQs..."
            className="w-full pl-10 pr-10 py-6 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          {searchTerm && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <ScrollArea className="flex-1 mt-4 max-h-[60vh] pr-4">
          {isSearching ? (
            <div className="py-8 text-center">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-500">Searching...</p>
            </div>
          ) : (
            <>
              {searchTerm.trim().length >= 2 && results.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-gray-500">No results found for "{searchTerm}"</p>
                  <p className="text-gray-400 text-sm mt-2">Try different keywords or check your spelling</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div 
                      key={`${result.type}-${result.id}-${index}`}
                      className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-primary">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="text-gray-400 h-4 w-4 flex-shrink-0" />
                      </div>
                      <div className="mt-2">
                        <span className="inline-block text-xs bg-gray-100 text-gray-600 rounded px-2 py-1">
                          {result.type === 'service' ? 'Service' : 
                            result.type === 'subService' ? 'Service Detail' : 'FAQ'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchTerm.trim().length < 2 && (
                <div className="py-8 text-center">
                  <p className="text-gray-500">Enter at least 2 characters to search</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Popular searches:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Visa", "Emirates ID", "Translation", "Business Setup", "Document"].map((term) => (
                        <Button 
                          key={term}
                          variant="outline" 
                          size="sm"
                          onClick={() => setSearchTerm(term)}
                        >
                          {term}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
