
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gyetchcmggemjqbdkiwy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZXRjaGNtZ2dlbWpxYmRraXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MjI5OTksImV4cCI6MjA2MzQ5ODk5OX0.A521NsFvnGyeHXyR0AeYaBPn4s5hvKw52SExxCpTvYg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
