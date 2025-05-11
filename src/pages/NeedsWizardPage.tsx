
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check, ArrowRight, Briefcase, Plane, FileText, Home, User, ShoppingBag, Upload, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { documentServices } from '@/data/documentServices';
import useCartStore from '@/store/useCartStore';
import useServiceStore from '@/store/useServiceStore';
import { toast } from '@/components/ui/use-toast';

// Combine all services
const allServices = [...services, ...documentServices];

const NeedsWizardPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<any[]>([]);
  
  // Get user profile from store
  const { userProfile, updateUserProfile, setRecommendedServices } = useServiceStore();
  const { addItem } = useCartStore();
  
  // Use any existing profile data
  useEffect(() => {
    if (userProfile.userType) {
      setAnswers({
        q1: userProfile.userType,
        q2: userProfile.urgency || '',
        q3: userProfile.status || ''
      });
    }
  }, [userProfile]);
  
  const handleAnswer = (question: number, answer: string) => {
    setAnswers({ ...answers, [`q${question}`]: answer });
    
    // Update user profile in store
    if (question === 1) updateUserProfile({ userType: answer });
    if (question === 2) updateUserProfile({ urgency: answer });
    if (question === 3) updateUserProfile({ status: answer });
    
    // Move to next step
    if (question < 3) {
      setStep(step + 1);
    } else {
      // Final question, show results
      const recommendedServices = getRecommendedServices();
      setResults(recommendedServices);
      setRecommendedServices(recommendedServices);
      setStep(4);
    }
  };
  
  const getRecommendedServices = () => {
    const userType = answers.q1;
    const urgencyLevel = answers.q2;
    const nationality = answers.q3;
    
    let recommendations: any[] = [];
    
    // Find all subservices that match the user profile
    allServices.forEach(serviceCategory => {
      serviceCategory.subServices.forEach(subService => {
        let score = 0;
        
        // Check user type match
        if (subService.userTypes && subService.userTypes.includes(userType)) {
          score += 3;
        }
        
        // Check urgency match
        if (subService.urgencyLevels && subService.urgencyLevels.includes(urgencyLevel)) {
          score += 2;
        }
        
        // Special handling for expatriates needing visa services
        if (nationality === 'non-uae' && serviceCategory.id === 'visa-services') {
          score += 2;
        }
        
        // Boost score for business owners needing business setup
        if (userType === 'business-owner' && serviceCategory.id === 'business-setup') {
          score += 3;
        }
        
        // Boost score for family sponsors needing family visa services
        if (userType === 'family-sponsor' && subService.id.includes('family')) {
          score += 4;
        }
        
        // Boost score for job seekers needing employment services
        if (userType === 'job-seeker' && (subService.id.includes('employment') || subService.id === 'cv-resume')) {
          score += 4;
        }
        
        // Add to recommendations if score is good enough
        if (score >= 3) {
          recommendations.push({
            ...subService,
            score,
            categoryId: serviceCategory.id,
            categoryName: serviceCategory.title
          });
        }
      });
    });
    
    // Sort by score (highest first)
    recommendations.sort((a, b) => b.score - a.score);
    
    // Take top 6 recommendations
    return recommendations.slice(0, 6);
  };
  
  const handleAddToCart = (service: any) => {
    addItem({
      id: service.id,
      title: service.title,
      price: service.price ? parseFloat(service.price.toString().replace(/[^0-9.]/g, '')) : null,
      isCustomPrice: !service.price || typeof service.price === 'string',
      categoryId: service.categoryId,
      urgency: answers.q2
    });
    
    toast({
      title: "Added to cart",
      description: `${service.title} has been added to your cart.`,
    });
  };
  
  const getCtaText = () => {
    const userType = answers.q1;
    const urgency = answers.q2;
    
    if (urgency === 'urgent') {
      return "I Need This Urgently";
    }
    
    if (userType === 'business-owner') {
      return "Add to Business Services";
    }
    
    if (userType === 'family-sponsor') {
      return "Select for My Family";
    }
    
    if (userType === 'job-seeker') {
      return "Help With My Career";
    }
    
    return "Add to Cart";
  };

  const questions = [
    {
      question: "What best describes you?",
      options: [
        { id: 'business-owner', label: 'Business Owner or Manager', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'family-sponsor', label: 'Family Sponsor', icon: <User className="w-5 h-5" /> },
        { id: 'job-seeker', label: 'Job Seeker', icon: <ShoppingBag className="w-5 h-5" /> },
        { id: 'individual', label: 'Individual Needs', icon: <User className="w-5 h-5" /> }
      ]
    },
    {
      question: "How urgent is your request?",
      options: [
        { id: 'urgent', label: 'Urgent (1-2 days)', icon: <Clock className="w-5 h-5" /> },
        { id: 'standard', label: 'Standard (3-5 days)', icon: <Clock className="w-5 h-5" /> },
        { id: 'flexible', label: 'Flexible (1+ week)', icon: <Clock className="w-5 h-5" /> }
      ]
    },
    {
      question: "Are you a UAE national?",
      options: [
        { id: 'uae', label: 'Yes, UAE National', icon: <Shield className="w-5 h-5" /> },
        { id: 'gcc', label: 'GCC National', icon: <Shield className="w-5 h-5" /> },
        { id: 'non-uae', label: 'Expatriate/Visitor', icon: <Plane className="w-5 h-5" /> }
      ]
    }
  ];
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>Find Your Services | Adnan Ali Typing</title>
        <meta name="description" content="Answer a few questions to find the perfect services for your needs in the UAE." />
      </Helmet>
      
      <div className="container mx-auto max-w-md px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Service Finder</h1>
          <p className="text-gray-500">Tell us what you need and we'll recommend the best services for you</p>
        </div>
        
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 text-sm ${
                  step > num 
                    ? 'bg-primary text-white' 
                    : step === num 
                    ? 'border-2 border-primary bg-white text-primary' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > num ? <Check className="h-4 w-4" /> : num}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500 px-1">
            <span>About You</span>
            <span>Urgency</span>
            <span>Nationality</span>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <QuestionStep
              key="question-1"
              question={questions[0].question}
              options={questions[0].options}
              onSelect={(answer) => handleAnswer(1, answer)}
              variants={pageVariants}
            />
          )}
          
          {step === 2 && (
            <QuestionStep
              key="question-2"
              question={questions[1].question}
              options={questions[1].options}
              onSelect={(answer) => handleAnswer(2, answer)}
              variants={pageVariants}
            />
          )}
          
          {step === 3 && (
            <QuestionStep
              key="question-3"
              question={questions[2].question}
              options={questions[2].options}
              onSelect={(answer) => handleAnswer(3, answer)}
              variants={pageVariants}
            />
          )}
          
          {step === 4 && (
            <motion.div
              key="results"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Recommended For You</h2>
                <p className="text-sm text-gray-600">Based on your needs, we've carefully selected these services:</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {results.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="border-b p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg">{service.title}</h3>
                        <div className="flex items-center text-amber-500">
                          <Star className="w-4 h-4 fill-amber-500" />
                          <span className="text-sm font-medium ml-1">{service.rating || 4.8}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      {/* Timeline */}
                      {service.timeframe && (
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <span className="font-medium">Timeline: </span>
                            <span className="text-gray-600">{service.timeframe}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Required Documents */}
                      {(service.requiredDocuments || service.requirements) && (
                        <div className="flex items-start text-sm">
                          <FileText className="w-4 h-4 text-gray-400 mr-2 mt-1" />
                          <div>
                            <span className="font-medium">Required Documents: </span>
                            <span className="text-gray-600">
                              {(service.requiredDocuments || service.requirements)?.slice(0, 2).join(', ')}
                              {(service.requiredDocuments || service.requirements)?.length > 2 && '...'}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* Price */}
                      {service.price && (
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <span className="font-medium text-primary text-lg">{service.price}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/services/${service.categoryId}/${service.id}`)}
                            >
                              Details
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => handleAddToCart(service)}
                            >
                              {getCtaText()}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button 
                  onClick={() => navigate('/cart')}
                  className="w-full gap-2"
                  variant="default"
                >
                  View Cart <ShoppingBag className="w-4 h-4" />
                </Button>
                
                <Button 
                  onClick={() => navigate('/services')}
                  className="w-full gap-2"
                  variant="outline"
                >
                  Browse All Services <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button 
                  onClick={() => navigate('/upload-documents')}
                  className="w-full gap-2"
                  variant="ghost"
                >
                  Upload Documents <Upload className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface QuestionStepProps {
  question: string;
  options: Array<{id: string, label: string, icon: React.ReactNode | string}>;
  onSelect: (answer: string) => void;
  variants: any;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ question, options, onSelect, variants }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{question}</h2>
        <p className="text-sm text-gray-600">Select the option that best describes your situation</p>
      </div>
      
      <div className="space-y-3">
        {options.map((option) => (
          <motion.div
            key={option.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelect(option.id)}
          >
            <div className="flex items-center">
              <div className="mr-3 text-xl flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">{option.label}</h3>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NeedsWizardPage;
