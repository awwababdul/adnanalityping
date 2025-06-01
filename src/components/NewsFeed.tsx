
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, BookmarkPlus, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Define NewsItem type locally
type NewsItem = {
  id: string;
  title: string;
  content: string;
  summary: string;
  source: string;
  source_logo?: string;
  category: string;
  published_at: string;
  url?: string;
  is_featured: boolean;
}

// Placeholder news data
const placeholderNews: NewsItem[] = [
  {
    id: '1',
    title: 'New visa rules announced for remote workers',
    content: 'The UAE government has announced new visa regulations for remote workers, allowing them to live in the UAE while working for companies abroad.',
    summary: 'New 1-year visa for remote workers',
    source: 'ICA',
    source_logo: 'https://placeholder.com/150x150',
    category: 'visa',
    published_at: '2023-04-15T10:00:00Z',
    url: 'https://u.ae',
    is_featured: true
  },
  {
    id: '2',
    title: 'Emirates ID renewal process simplified',
    content: 'The Federal Authority for Identity and Citizenship has simplified the Emirates ID renewal process, reducing the required documentation and processing time.',
    summary: 'Emirates ID renewal now faster',
    source: 'Emirates ID Authority',
    source_logo: 'https://placeholder.com/150x150',
    category: 'emirates-id',
    published_at: '2023-04-10T14:30:00Z',
    url: 'https://u.ae',
    is_featured: false
  },
  {
    id: '3',
    title: 'New business licensing requirements in Dubai',
    content: 'Dubai Department of Economic Development has updated the licensing requirements for certain business activities, effective next month.',
    summary: 'Updated business license requirements',
    source: 'DED',
    source_logo: 'https://placeholder.com/150x150',
    category: 'business',
    published_at: '2023-04-05T09:15:00Z',
    url: 'https://u.ae',
    is_featured: false
  },
  {
    id: '4',
    title: 'Labor law amendments for private sector employees',
    content: 'The Ministry of Human Resources and Emiratisation has announced several amendments to the UAE Labor Law, affecting private sector employees.',
    summary: 'Important changes to labor laws',
    source: 'MOHRE',
    source_logo: 'https://placeholder.com/150x150',
    category: 'legal',
    published_at: '2023-04-01T11:45:00Z',
    url: 'https://u.ae',
    is_featured: true
  },
];

const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  const date = new Date(news.published_at);
  const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
              {news.source.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{news.source}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {formattedDate}
          </div>
        </div>
        
        <h3 className="font-medium text-lg mb-2">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {news.summary}
        </p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/news/${news.id}`}
            className="text-primary text-sm font-medium flex items-center hover:underline"
          >
            Read More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <div className="flex items-center gap-2">
            <button 
              className="text-gray-500 hover:text-primary"
              aria-label="Save"
            >
              <BookmarkPlus className="w-4 h-4" />
            </button>
            {news.url && (
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label="External link"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>(placeholderNews);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const categories = [
    { id: 'all', label: 'All Updates' },
    { id: 'visa', label: 'Visa & Immigration' },
    { id: 'emirates-id', label: 'Emirates ID' },
    { id: 'business', label: 'Business' },
    { id: 'legal', label: 'Legal' },
  ];
  
  const filteredNews = activeCategory === 'all'
    ? news
    : news.filter(item => item.category === activeCategory);
  
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                <div className="h-4 w-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-serif font-bold">UAE Service Updates</h2>
        <Link 
          to="/news" 
          className="text-primary text-sm font-medium flex items-center"
        >
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-auto inline-flex">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4 mt-4">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No updates available for this category.</p>
                <Button onClick={() => setActiveCategory('all')}>View All Updates</Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsFeed;
