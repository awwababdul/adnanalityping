
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const CartIndicator = () => {
  const { items, itemCount } = useCartStore();
  const [showAnimation, setShowAnimation] = useState(false);
  const count = itemCount();
  
  // Show animation when item count changes
  useEffect(() => {
    if (count > 0) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-5 h-5" />
      
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
      
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-1 -right-1 w-8 h-8 bg-primary/20 rounded-full"
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

export default CartIndicator;
