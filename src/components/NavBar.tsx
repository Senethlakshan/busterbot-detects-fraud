
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  transparent?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-fraudbuster-darkBlue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FB</span>
            </div>
            <span className="font-bold text-xl text-fraudbuster-darkBlue">FraudBuster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Home</Link>
            <Link to="#features" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Features</Link>
            <Link to="#about" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">About</Link>
            <Link to="/login" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Login</Link>
            <Link to="/register">
              <Button className="button-primary">Register</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Home</Link>
            <Link to="#features" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Features</Link>
            <Link to="#about" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">About</Link>
            <Link to="/login" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Login</Link>
            <Link to="/register" className="block font-medium px-3 py-2">
              <Button className="w-full button-primary">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
