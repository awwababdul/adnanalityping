
import React from 'react';
import { Button } from '@/components/ui/button';

const FaqTeaser: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
        <p className="text-gray-600 mb-8">Find answers in our comprehensive FAQ section or contact us directly</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <a href="/faq">View FAQ</a>
          </Button>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqTeaser;
