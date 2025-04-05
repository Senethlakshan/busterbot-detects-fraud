
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import BusterBot from '@/components/BusterBot';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    // Simulate password reset request
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Password reset link sent to your email');
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
            <BusterBot emotion="thinking" size="md" />
            <CardTitle className="text-2xl font-bold text-center text-fraudbuster-darkBlue mt-4">
              Forgot your password?
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full button-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </Button>

                <div className="text-center">
                  <Link to="/login" className="text-sm font-medium text-fraudbuster-darkBlue hover:underline">
                    Back to Login
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-green-600 mb-4">
                  Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
                </p>
                <Link to="/login">
                  <Button variant="outline" className="button-secondary">
                    Return to Login
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
