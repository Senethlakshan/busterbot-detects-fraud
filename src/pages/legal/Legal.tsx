
import React from 'react';
import { Link } from 'react-router-dom';
import { File, FileText, Shield } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Legal Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important legal documents and information about FraudBuster's services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Privacy Policy */}
            <Link to="/privacy" className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="bg-fraudbuster-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-fraudbuster-blue/30 transition-colors">
                  <FileText className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Privacy Policy</h3>
                <p className="text-gray-600 mb-4">
                  Learn about how we collect, use, and protect your personal information when using our services.
                </p>
                <div className="text-fraudbuster-darkBlue flex items-center">
                  <span className="story-link">Read our Privacy Policy</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            
            {/* Terms of Service */}
            <Link to="/terms" className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="bg-fraudbuster-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-fraudbuster-purple/30 transition-colors">
                  <File className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Terms of Service</h3>
                <p className="text-gray-600 mb-4">
                  Review the agreement that governs your use of FraudBuster's services and website.
                </p>
                <div className="text-fraudbuster-darkBlue flex items-center">
                  <span className="story-link">Read our Terms of Service</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            
            {/* Security */}
            <Link to="/security" className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="bg-fraudbuster-pink/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-fraudbuster-pink/30 transition-colors">
                  <Shield className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Security Practices</h3>
                <p className="text-gray-600 mb-4">
                  Understand how we protect your data and maintain the security of our platform.
                </p>
                <div className="text-fraudbuster-darkBlue flex items-center">
                  <span className="story-link">Learn about our Security</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Additional Legal Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-fraudbuster-darkBlue">Additional Legal Information</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3 text-fraudbuster-darkBlue">Intellectual Property</h3>
              <p className="text-gray-600 mb-2">
                FraudBuster and its logo are trademarks of FraudBuster, Inc. All other trademarks, service marks, and logos used on our website are the property of their respective owners.
              </p>
              <p className="text-gray-600">
                The content, design, and layout of the FraudBuster website are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3 text-fraudbuster-darkBlue">Data Processing Agreements</h3>
              <p className="text-gray-600 mb-2">
                For enterprise customers who require a Data Processing Agreement (DPA) for GDPR compliance or other regulatory requirements, please contact our legal team at legal@fraudbuster.com.
              </p>
              <p className="text-gray-600">
                We're committed to helping our customers meet their compliance obligations and can provide custom agreements as needed.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-fraudbuster-darkBlue">Contact Our Legal Team</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about our legal documents or need further information, please reach out to our legal department:
              </p>
              <p className="text-gray-600">
                Email: legal@fraudbuster.com<br />
                Address: 123 Tech Boulevard, Suite 456, San Francisco, CA 94105<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
