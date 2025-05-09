
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LeadMagnetForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would typically be an API call to your backend
    // For now we'll simulate a successful submission after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Your guide is on its way to your inbox.",
        duration: 5000,
      });

      // In a real implementation, you might open a WhatsApp message or trigger a follow-up
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=971552636961&text=Hello, I just downloaded your UAE Document Guide. I'm interested in learning more about your typing and document services.`, '_blank');
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Download className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="font-bold text-lg mb-2">Thank You!</h4>
        <p className="text-gray-600 mb-4">Your guide has been emailed to you and will arrive shortly.</p>
        <a 
          href="/downloads/uae-document-typing-guide.pdf" 
          download
          className="text-primary hover:underline font-medium"
        >
          Click here if download doesn't start automatically
        </a>
        <p className="mt-4 text-sm text-gray-500">
          We've also sent you a WhatsApp message to help with any questions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Enter your email"
          required
        />
      </div>
      <Button 
        className="w-full"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            Download Guide
          </>
        )}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default LeadMagnetForm;
