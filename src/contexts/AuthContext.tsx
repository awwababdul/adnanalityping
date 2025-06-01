
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Define the UserProfile type locally
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

type AuthContextType = {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithPhone: (phone: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user || null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      // Check if profiles table exists by attempting the query
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        
      if (error) {
        // If the table doesn't exist or other error, just log it
        console.log('Profiles table not available:', error.message);
        return;
      }
      
      if (data) {
        setProfile(data as UserProfile);
      }
    } catch (error) {
      console.log('Error fetching profile:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        title: "Authentication error",
        description: "An unexpected error occurred during sign in.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithPhone = async (phone: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        phone
      });
      
      if (error) {
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "OTP Sent",
          description: "Please check your phone for a verification code.",
        });
      }
    } catch (error) {
      console.error('Phone sign in error:', error);
      toast({
        title: "Authentication error",
        description: "An unexpected error occurred during phone sign in.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({ email, password });
      
      if (error) {
        toast({
          title: "Registration error",
          description: error.message,
          variant: "destructive"
        });
        return;
      }
      
      if (data.user) {
        // Try to create user profile, but don't fail if table doesn't exist
        try {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              { 
                id: data.user.id, 
                email, 
                full_name: fullName,
                notification_preferences: {
                  email: true,
                  push: true,
                  sms: false
                }
              }
            ]);
            
          if (profileError) {
            console.log('Could not create profile (table may not exist):', profileError.message);
          }
        } catch (profileError) {
          console.log('Profiles table not available during signup');
        }
        
        toast({
          title: "Registration successful",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error) {
      console.error('Sign up error:', error);
      toast({
        title: "Registration error",
        description: "An unexpected error occurred during registration.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Sign out error",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        title: "Sign out error",
        description: "An unexpected error occurred during sign out.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      
      if (error) {
        toast({
          title: "Password reset error",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Password reset email sent",
          description: "Please check your email for password reset instructions.",
        });
      }
    } catch (error) {
      console.error('Password reset error:', error);
      toast({
        title: "Password reset error",
        description: "An unexpected error occurred during password reset.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
        
      if (error) {
        toast({
          title: "Profile update error",
          description: error.message,
          variant: "destructive"
        });
        return;
      }
      
      // Refresh profile
      await fetchProfile(user.id);
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      console.error('Profile update error:', error);
      toast({
        title: "Profile update error",
        description: "An unexpected error occurred while updating your profile.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    profile,
    session,
    loading,
    signIn,
    signInWithPhone,
    signUp,
    signOut,
    resetPassword,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
