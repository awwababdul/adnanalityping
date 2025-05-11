
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import useCartStore from '@/store/useCartStore';

const CartIndicator = () => {
  const { items } = useCartStore();
  const location = useLocation();
  
  // Count total items in cart
  const itemCount = items.length;
  
  const isActive = location.pathname === '/cart';
  
  return (
    <div className="relative">
      <ShoppingCart className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
      {itemCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartIndicator;
