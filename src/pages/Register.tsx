
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BusterBot from '@/components/BusterBot';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Simulate registration process
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Registration successful! Welcome to FraudBuster.');
      setIsSubmitting(false);
      // In a real app, you would redirect to login or dashboard here
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
                Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                
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
                  <Label htmlFor="password">Password</Label>
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
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
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
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-fraudbuster-darkBlue hover:underline">
                    Log in
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
            <BusterBot emotion="waving" size="xl" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-fraudbuster-darkBlue">
            Welcome to the FraudBuster Family!
          </h2>
          
          <p className="text-lg text-gray-700">
            I'm BusterBot, your AI sidekick against fraud. Join today and let's work together to keep your business safe and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
