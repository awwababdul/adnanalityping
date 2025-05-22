
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Database types
export type UserProfile = {
  id: string;
  email?: string;
  phone?: string;
  full_name?: string;
  avatar_url?: string;
  preferred_language?: string;
  notification_preferences?: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  created_at?: string;
  updated_at?: string;
}

export type SavedFavorite = {
  id: string;
  user_id: string;
  service_id: string;
  category_id: string;
  created_at: string;
}

export type ServiceHistory = {
  id: string;
  user_id: string;
  service_id: string;
  category_id: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
  notes?: string;
}

export type CartItem = {
  id: string;
  user_id: string;
  service_id: string;
  category_id: string;
  quantity: number;
  created_at: string;
  additional_details?: string;
}

export type UploadedDocument = {
  id: string;
  user_id: string;
  service_id?: string;
  file_path: string;
  file_name: string;
  file_type: string;
  file_size: number;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  summary: string;
  source: string;
  source_logo?: string;
  category: string;
  published_at: string;
  url?: string;
  is_featured: boolean;
}
