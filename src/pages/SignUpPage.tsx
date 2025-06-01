
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Check, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const SignUpPage: React.FC = () => {
  const { signUp, loading } = useAuth();
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !agreeTerms) return;
    
    try {
      await signUp(email, password, fullName);
      navigate('/');
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };
  
  // Password strength check
  const passwordStrength = {
    has8Chars: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password),
  };
  
  const passwordStrengthScore = Object.values(passwordStrength).filter(Boolean).length;
  
  const getPasswordStrengthColor = () => {
    if (passwordStrengthScore <= 2) return 'bg-red-500';
    if (passwordStrengthScore <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  return (
    <div className="container max-w-lg mx-auto px-4 py-16">
      <Helmet>
        <title>Create Account | Adnan Ali Typing</title>
        <meta name="description" content="Create an account with Adnan Ali Typing" />
      </Helmet>
      
      <div className="flex flex-col items-center mb-8">
        <img
          src="/lovable-uploads/c3a3a109-e73f-4597-ba4b-c0043c986598.png"
          alt="Adnan Ali Typing Logo"
          className="w-20 h-20 mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-gray-600 text-center">
          Join us to manage your document services easily
        </p>
      </div>
      
      <form onSubmit={handleSignUp} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="w-4 h-4 text-gray-500" />
            </div>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="pl-10"
              required
            />
          </div>
        </div>
        
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
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-4 h-4 text-gray-500" />
            </div>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
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
          
          {/* Password strength indicator */}
          {password && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2 space-y-2"
            >
              <div className="flex gap-1 h-1">
                {[1, 2, 3, 4, 5].map((segment) => (
                  <div
                    key={segment}
                    className={`h-full flex-1 rounded-full ${
                      segment <= passwordStrengthScore ? getPasswordStrengthColor() : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    passwordStrength.has8Chars ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {passwordStrength.has8Chars && <Check className="w-3 h-3" />}
                  </div>
                  <span className={passwordStrength.has8Chars ? 'text-green-700' : 'text-gray-500'}>
                    At least 8 characters
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    (passwordStrength.hasUppercase && passwordStrength.hasLowercase)
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {(passwordStrength.hasUppercase && passwordStrength.hasLowercase) && <Check className="w-3 h-3" />}
                  </div>
                  <span className={(passwordStrength.hasUppercase && passwordStrength.hasLowercase) ? 'text-green-700' : 'text-gray-500'}>
                    Mix of uppercase & lowercase
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    passwordStrength.hasNumber ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {passwordStrength.hasNumber && <Check className="w-3 h-3" />}
                  </div>
                  <span className={passwordStrength.hasNumber ? 'text-green-700' : 'text-gray-500'}>
                    At least one number
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="flex items-start space-x-2 py-2">
          <Checkbox
            id="terms"
            checked={agreeTerms}
            onCheckedChange={(checked) => setAgreeTerms(checked === true)}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{' '}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={loading || !agreeTerms || passwordStrengthScore < 3}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-primary hover:underline">
            Sign In
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

export default SignUpPage;
