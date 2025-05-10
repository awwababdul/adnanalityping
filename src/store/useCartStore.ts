
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  title: string;
  price: number | null;
  isCustomPrice: boolean;
  governmentFees?: number;
  serviceFees?: number;
  fileUrls?: string[];
  notes?: string;
  categoryId: string;
  urgency: 'standard' | 'express' | 'same-day';
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<CartItem>) => void;
  addFileToItem: (id: string, fileUrl: string) => void;
  clearCart: () => void;
  itemCount: () => number;
  totalAmount: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        // Check if item already exists
        const existingItemIndex = state.items.findIndex(i => i.id === item.id);
        
        if (existingItemIndex >= 0) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            ...item,
          };
          return { items: updatedItems };
        }
        
        return { items: [...state.items, item] };
      }),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      
      updateItem: (id, updates) => set((state) => ({
        items: state.items.map(item => 
          item.id === id ? { ...item, ...updates } : item
        )
      })),
      
      addFileToItem: (id, fileUrl) => set((state) => ({
        items: state.items.map(item => {
          if (item.id === id) {
            const fileUrls = item.fileUrls ? [...item.fileUrls, fileUrl] : [fileUrl];
            return { ...item, fileUrls };
          }
          return item;
        })
      })),
      
      clearCart: () => set({ items: [] }),
      
      itemCount: () => get().items.length,
      
      totalAmount: () => get().items.reduce(
        (sum, item) => sum + (item.price || 0), 0
      )
    }),
    {
      name: 'adnan-typing-cart'
    }
  )
);

export default useCartStore;
