
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, FileText } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface LeadCaptureModalProps {
  scrollThreshold?: number;
  timeDelay?: number;
}

const LeadCaptureModal = ({
  scrollThreshold = 50,
  timeDelay = 10000
}: LeadCaptureModalProps) => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [selectedOffer, setSelectedOffer] = useState<'resume' | 'fine'>('resume');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenLeadModal');
    if (hasSeenModal) return;

    // Show modal after time delay
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setOpen(true);
        setHasShown(true);
      }
    }, timeDelay);

    // Show modal on scroll
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= scrollThreshold) {
        setOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, scrollThreshold, timeDelay]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      localStorage.setItem('hasSeenLeadModal', 'true');
      setIsSubmitting(false);
      setOpen(false);
      
      toast({
        title: "Thank you for your submission!",
        description: selectedOffer === 'resume' 
          ? "Your free resume review request has been sent."
          : "Your fine status report request has been received.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 opacity-20 z-0"></div>
          
          {/* Close button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          
          <div className="p-6 relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Exclusive Offer!</h3>
              <p className="text-gray-600">Select your free service</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                className={`relative overflow-hidden rounded-lg p-4 border-2 transition-all ${
                  selectedOffer === 'resume'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                onClick={() => setSelectedOffer('resume')}
              >
                <div className="flex flex-col items-center">
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm text-center">Free Resume Review & Template</span>
                </div>
                {selectedOffer === 'resume' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-3 w-3 text-white" />
                    </div>
                  </motion.div>
                )}
              </button>
              
              <button
                className={`relative overflow-hidden rounded-lg p-4 border-2 transition-all ${
                  selectedOffer === 'fine'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                onClick={() => setSelectedOffer('fine')}
              >
                <div className="flex flex-col items-center">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm text-center">Instant Fine Status Report</span>
                </div>
                {selectedOffer === 'fine' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-3 w-3 text-white" />
                    </div>
                  </motion.div>
                )}
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971XXXXXXXXX"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Get Your Free Service Now'}
                </Button>
              </div>
            </form>
            
            <p className="text-xs text-center mt-4 text-gray-500">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
