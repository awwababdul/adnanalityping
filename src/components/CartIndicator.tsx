
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Just a placeholder implementation, would normally connect to a cart store
const CartIndicator = () => {
  const [itemCount, setItemCount] = React.useState(0);
  const location = useLocation();
  
  // For demonstration, pretend we have 2 items in cart
  React.useEffect(() => {
    // This would come from your cart store in a real implementation
    setItemCount(2);
  }, []);
  
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
