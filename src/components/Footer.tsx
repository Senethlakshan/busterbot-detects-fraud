
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fraudbuster-darkBlue text-white py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-fraudbuster-darkBlue font-bold">FB</span>
              </div>
              <span className="font-bold text-xl">FraudBuster</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Your AI sidekick in the fight against fraud. Smart detection powered by cutting-edge artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition">Features</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition">Terms of Service</Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-300 hover:text-white transition">Security</Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white transition">Legal Overview</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                123 Tech Boulevard<br />
                San Francisco, CA 94105
              </li>
              <li>
                <a href="mailto:info@fraudbuster.com" className="text-gray-300 hover:text-white transition">info@fraudbuster.com</a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} FraudBuster. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 mt-4 md:mt-0">
            Made with ❤️ by the FraudBuster Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
