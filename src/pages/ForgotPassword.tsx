
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import BusterBot from '@/components/BusterBot';
import { Mail, Lock, ArrowRight, KeyRound } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1 = email, 2 = set new password

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    // Simulate password reset request
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2); // Move to password reset step
      toast.success('Verification code sent to your email');
    }, 1500);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      toast.error('Please enter a new password');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    // Simulate password reset
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Password has been reset successfully');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-fraudbuster-blue/10 to-fraudbuster-purple/10">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-fraudbuster-darkBlue rounded-lg flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl">FB</span>
          </div>
          <span className="font-bold text-xl text-fraudbuster-darkBlue">FraudBuster</span>
        </Link>

        <Card>
          <CardHeader className="space-y-1 flex flex-col items-center">
            <BusterBot emotion={step === 1 ? "thinking" : "happy"} size="md" />
            <CardTitle className="text-2xl font-bold text-center text-fraudbuster-darkBlue mt-4">
              {step === 1 ? 'Forgot your password?' : 'Reset your password'}
            </CardTitle>
            <CardDescription className="text-center">
              {step === 1 
                ? 'Enter your email address and we\'ll send you a verification code.'
                : 'Create a new password for your account.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              step === 1 ? (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full button-primary flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Continue'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>

                  <div className="text-center">
                    <Link to="/login" className="text-sm font-medium text-fraudbuster-darkBlue hover:underline">
                      Back to Login
                    </Link>
                  </div>
                </form>
              ) : (
                <form onSubmit={handlePasswordReset} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="password">New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field pl-10"
                        required
                        minLength={8}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full button-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Resetting...' : 'Reset Password'}
                  </Button>

                  <div className="text-center">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="text-sm font-medium text-fraudbuster-darkBlue hover:underline"
                    >
                      Back to previous step
                    </button>
                  </div>
                </form>
              )
            ) : (
              <div className="text-center py-4">
                <p className="text-green-600 mb-4">
                  Your password has been reset successfully! You can now log in with your new password.
                </p>
                <Link to="/login">
                  <Button variant="outline" className="button-secondary">
                    Go to Login
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
