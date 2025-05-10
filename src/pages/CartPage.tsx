
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, AlertCircle, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import MobileAppLayout from '@/components/MobileAppLayout';
import useCartStore from '@/store/useCartStore';

const CartPage = () => {
  const { items, removeItem, updateItem, clearCart } = useCartStore();
  const [confirmClearDialog, setConfirmClearDialog] = useState(false);
  const [checkoutDialog, setCheckoutDialog] = useState(false);

  const handleWhatsAppCheckout = () => {
    const servicesList = items.map(item => 
      `- ${item.title} (${item.urgency})`
    ).join('\n');
    
    const message = `Hello, I'd like to request the following services:\n\n${servicesList}\n\nPlease provide me with a quote. Thank you!`;
    
    window.open(`https://api.whatsapp.com/send?phone=971552636961&text=${encodeURIComponent(message)}`, "_blank");
    setCheckoutDialog(false);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.price || 0;
      return total + itemPrice;
    }, 0);
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'express': return 'Express Service';
      case 'same-day': return 'Same Day';
      default: return 'Standard';
    }
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>Your Cart | Adnan Ali Typing</title>
        <meta name="description" content="Review your selected typing and document services." />
      </Helmet>

      <div className="px-4 py-6 pb-20">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-1">Your Cart</h1>
          <p className="text-sm text-gray-600">
            {items.length > 0 
              ? `You have ${items.length} service${items.length > 1 ? 's' : ''} in your cart`
              : 'Your cart is empty'}
          </p>
        </div>

        {items.length > 0 ? (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                            {getUrgencyLabel(item.urgency)}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 p-1 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="mt-3">
                      {item.isCustomPrice ? (
                        <div className="text-sm text-gray-600">Custom pricing</div>
                      ) : (
                        <div className="text-sm">
                          {item.price ? (
                            <span className="font-semibold">AED {item.price.toFixed(2)}</span>
                          ) : (
                            <span className="text-gray-600">Pricing on request</span>
                          )}
                        </div>
                      )}
                    </div>

                    {(item.fileUrls && item.fileUrls.length > 0) && (
                      <div className="mt-3">
                        <div className="text-xs text-gray-500 mb-1">Attached files:</div>
                        <div className="flex flex-wrap gap-2">
                          {item.fileUrls.map((url, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 rounded"
                            >
                              <FileText className="w-3 h-3" />
                              <span className="truncate max-w-[100px]">File {idx + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-3">
                      <Textarea 
                        placeholder="Add notes for this service..."
                        value={item.notes || ''}
                        onChange={(e) => updateItem(item.id, { notes: e.target.value })}
                        className="text-sm h-20 resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="sticky bottom-16 bg-white pt-3 pb-3 border-t">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">Total:</span>
                <span className="font-bold">
                  {getTotalPrice() > 0 
                    ? `AED ${getTotalPrice().toFixed(2)}` 
                    : 'Custom pricing'}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  onClick={() => setConfirmClearDialog(true)}
                >
                  Clear Cart
                </Button>

                <Button 
                  className="w-full"
                  onClick={() => setCheckoutDialog(true)}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-sm text-gray-500 mb-6">
              Browse our services and add items to your cart
            </p>
            <Button asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Confirm Clear Dialog */}
      <Dialog open={confirmClearDialog} onOpenChange={setConfirmClearDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Clear your cart?</DialogTitle>
            <DialogDescription>
              This will remove all services from your cart. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setConfirmClearDialog(false)}
              className="sm:w-full"
            >
              Cancel
            </Button>
            <Button 
              variant="destructive"
              onClick={() => {
                clearCart();
                setConfirmClearDialog(false);
              }}
              className="sm:w-full"
            >
              Clear Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Checkout Dialog */}
      <Dialog open={checkoutDialog} onOpenChange={setCheckoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Order</DialogTitle>
            <DialogDescription>
              Choose how you'd like to proceed with your order.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            <Button 
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Checkout via WhatsApp
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">or</span>
              </div>
            </div>
            
            <Button 
              variant="outline"
              onClick={() => {
                setCheckoutDialog(false);
                // In a real implementation, redirect to quote form
                window.location.href = '/get-quote';
              }}
              className="w-full"
            >
              Request Detailed Quote
            </Button>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium mb-1">Need assistance?</h4>
              <p className="text-xs text-gray-600">
                For complex orders or special requirements, our team is ready to help you directly.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </MobileAppLayout>
  );
};

export default CartPage;
