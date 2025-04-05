
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BusterBot from '@/components/BusterBot';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate login process
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Login successful! Welcome back.');
      setIsSubmitting(false);
      // In a real app, you would redirect to dashboard here
    }, 1500);
  };
  
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Form Side */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center mb-8">
            <div className="w-10 h-10 bg-fraudbuster-darkBlue rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">FB</span>
            </div>
            <span className="font-bold text-xl text-fraudbuster-darkBlue">FraudBuster</span>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-fraudbuster-darkBlue">
                Welcome Back
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm font-medium text-fraudbuster-darkBlue hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full button-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging In...' : 'Log In'}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-fraudbuster-darkBlue hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* BusterBot Side */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-b from-fraudbuster-blue/30 to-fraudbuster-purple/30 p-8">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <BusterBot emotion="happy" size="xl" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-fraudbuster-darkBlue">
            Welcome Back!
          </h2>
          
          <p className="text-lg text-gray-700">
            Good to see you again! I've been keeping an eye on things while you were away. Log in to check the latest fraud insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
