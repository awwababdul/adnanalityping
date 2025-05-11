
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check, ArrowRight, Briefcase, Plane, FileText, Home, User, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NeedsWizardPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<any[]>([]);
  
  const handleAnswer = (question: number, answer: string) => {
    setAnswers({ ...answers, [`q${question}`]: answer });
    
    // Move to next step
    if (question < 3) {
      setStep(step + 1);
    } else {
      // Final question, show results
      const recommendedServices = getRecommendedServices();
      setResults(recommendedServices);
      setStep(4);
    }
  };
  
  const getRecommendedServices = () => {
    // This would ideally come from your backend based on answers
    // For now, provide static recommendations based on selected answers
    
    const needType = answers.q1;
    const urgencyLevel = answers.q2;
    const nationality = answers.q3;
    
    // Some example logic to demonstrate the concept
    let recommendations = [];
    
    if (needType === 'visa') {
      recommendations.push({
        title: 'Visa Application Service',
        description: 'Complete visa application processing with government fees included',
        path: '/services/immigration/visa-application',
        icon: <Plane className="w-5 h-5" />
      });
      
      recommendations.push({
        title: 'Emirates ID Processing',
        description: 'Required for all UAE residents along with visa',
        path: '/services/emirates-id/application',
        icon: <User className="w-5 h-5" />
      });
      
      if (urgencyLevel === 'urgent') {
        recommendations.push({
          title: 'Express Visa Processing',
          description: 'Fast-tracked application with 48-hour processing',
          path: '/services/immigration/express-visa',
          icon: <Plane className="w-5 h-5" />
        });
      }
    }
    
    if (needType === 'business') {
      recommendations.push({
        title: 'Business Setup Package',
        description: 'Complete business setup with license and registration',
        path: '/services/business-setup/complete-package',
        icon: <Briefcase className="w-5 h-5" />
      });
      
      if (nationality === 'non-uae') {
        recommendations.push({
          title: 'Foreign Investor Package',
          description: 'Special services for foreign business owners',
          path: '/services/business-setup/foreign-investor',
          icon: <ShoppingBag className="w-5 h-5" />
        });
      }
    }
    
    if (needType === 'documents') {
      recommendations.push({
        title: 'Document Translation',
        description: 'Professional translation with certification',
        path: '/services/document-processing/translation',
        icon: <FileText className="w-5 h-5" />
      });
      
      recommendations.push({
        title: 'Document Typing Service',
        description: 'Professional typing for all document types',
        path: '/services/document-processing/typing',
        icon: <FileText className="w-5 h-5" />
      });
    }
    
    if (needType === 'housing') {
      recommendations.push({
        title: 'Ejari Registration',
        description: 'Official tenancy contract registration',
        path: '/services/document-processing/ejari',
        icon: <Home className="w-5 h-5" />
      });
      
      if (urgencyLevel === 'urgent') {
        recommendations.push({
          title: 'Express Ejari Service',
          description: 'Same-day processing of your Ejari',
          path: '/services/document-processing/express-ejari',
          icon: <Home className="w-5 h-5" />
        });
      }
    }
    
    // Always recommend the Personal Assistant Service
    recommendations.push({
      title: 'Personal PRO Service',
      description: 'Let our expert handle everything for you',
      path: '/services/packages/pro-service',
      icon: <User className="w-5 h-5" />
    });
    
    return recommendations;
  };

  const questions = [
    {
      question: "What services do you need?",
      options: [
        { id: 'visa', label: 'Visa or Residence', icon: <Plane className="w-5 h-5" /> },
        { id: 'business', label: 'Business Setup', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'documents', label: 'Documents & Translation', icon: <FileText className="w-5 h-5" /> },
        { id: 'housing', label: 'Housing & Ejari', icon: <Home className="w-5 h-5" /> }
      ]
    },
    {
      question: "How urgent is your request?",
      options: [
        { id: 'urgent', label: 'Urgent (1-2 days)', icon: '🚨' },
        { id: 'standard', label: 'Standard (3-5 days)', icon: '📆' },
        { id: 'flexible', label: 'Flexible (1+ week)', icon: '🕒' }
      ]
    },
    {
      question: "Are you a UAE national?",
      options: [
        { id: 'uae', label: 'Yes, UAE National', icon: '🇦🇪' },
        { id: 'gcc', label: 'GCC National', icon: '🏙️' },
        { id: 'non-uae', label: 'Expatriate/Visitor', icon: '✈️' }
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
          <h1 className="text-xl font-bold">Service Finder</h1>
          <p className="text-gray-500 text-sm">Answer a few questions to find the right services for you</p>
        </div>
        
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-sm ${
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
            <span>Need</span>
            <span>Urgency</span>
            <span>Status</span>
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
                <h2 className="text-lg font-semibold mb-2">Recommended Services</h2>
                <p className="text-sm text-gray-600">Based on your needs, we recommend these services:</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {results.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
                    onClick={() => navigate(service.path)}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                      
                      <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => navigate('/services')}
                  className="gap-2"
                >
                  Browse All Services <ArrowRight className="w-4 h-4" />
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
        <h2 className="text-lg font-semibold mb-1">{question}</h2>
        <p className="text-sm text-gray-600">Select the option that best describes your situation</p>
      </div>
      
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className="bg-white border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelect(option.id)}
          >
            <div className="flex items-center">
              <div className="mr-3 text-xl flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{option.label}</h3>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NeedsWizardPage;
