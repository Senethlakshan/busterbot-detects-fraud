
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BusterBot from '@/components/BusterBot';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-fraudbuster-blue/10 to-fraudbuster-purple/10 p-4">
      <div className="text-center max-w-md">
        <BusterBot emotion="thinking" size="lg" className="mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-fraudbuster-darkBlue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! This page seems to have disappeared.</p>
        <p className="text-gray-500 mb-8">
          BusterBot has searched high and low, but couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button className="button-primary">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
