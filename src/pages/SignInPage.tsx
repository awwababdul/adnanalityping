
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Phone } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SignInPage: React.FC = () => {
  const { signIn, signInWithPhone, loading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [otp, setOtp] = useState('');
  
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) return;
    
    await signIn(email, password);
    navigate('/');
  };
  
  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) return;
    
    await signInWithPhone(phone);
    setVerificationSent(true);
  };
  
  return (
    <div className="container max-w-lg mx-auto px-4 py-16">
      <Helmet>
        <title>Sign In | Adnan Ali Typing</title>
        <meta name="description" content="Sign in to your Adnan Ali Typing account" />
      </Helmet>
      
      <div className="flex flex-col items-center mb-8">
        <img
          src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
          alt="Adnan Ali Typing Logo"
          className="w-20 h-20 mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600 text-center">
          Sign in to your account to access your services
        </p>
      </div>
      
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="phone">Phone</TabsTrigger>
        </TabsList>
        
        <TabsContent value="email">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-4 h-4 text-gray-500" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="phone">
          {!verificationSent ? (
            <form onSubmit={handlePhoneSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-4 h-4 text-gray-500" />
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971XXXXXXXXX"
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Enter your phone number with country code (e.g., +971XXXXXXXXX)
                </p>
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending code...' : 'Send Verification Code'}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-green-50 p-4 rounded-lg text-green-700 text-sm mb-4">
                A verification code has been sent to your phone number.
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp">Verification Code</Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                />
              </div>
              
              <Button className="w-full" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Sign In'}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-primary hover:underline text-sm"
                  onClick={() => setVerificationSent(false)}
                >
                  Change phone number
                </button>
              </div>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={() => navigate('/')}
        >
          Continue as Guest <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
