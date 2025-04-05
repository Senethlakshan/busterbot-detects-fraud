
import React from 'react';
import { Shield, Bot, MessageSquare, Lock } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Our Powerful Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FraudBuster leverages cutting-edge AI technology to protect your business from fraud with these powerful features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-fraudbuster-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Real-Time Fraud Detection</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced AI monitors transactions and communications in real-time, identifying suspicious patterns before they become problems.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Instant alerts for suspicious activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Continuous learning from new fraud patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 monitoring across all channels</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-fraudbuster-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Explainable AI</h3>
                <p className="text-gray-600 mb-4">
                  Unlike black-box AI solutions, FraudBuster provides clear explanations for why activity was flagged as suspicious.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Plain-language explanations of AI decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visual risk indicators showing confidence levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Detailed audit trails for compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-fraudbuster-pink/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Sentiment Insights</h3>
                <p className="text-gray-600 mb-4">
                  Analyze communication patterns to detect subtle emotional cues and language patterns that may indicate fraudulent intent.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced natural language processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Detection of urgency and pressure tactics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Identification of suspicious communication patterns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Privacy First</h3>
                <p className="text-gray-600 mb-4">
                  Our privacy-focused approach ensures your data remains secure while still providing powerful fraud protection.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>End-to-end encryption for all data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>GDPR and CCPA compliant by design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Selective data processing with minimal storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Feature Highlights */}
          <div className="bg-fraudbuster-blue/10 rounded-2xl p-8 mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center text-fraudbuster-darkBlue">Additional Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">Custom Rule Engine</h4>
                <p className="text-gray-600">Create customized detection rules specific to your business needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">Multi-channel Protection</h4>
                <p className="text-gray-600">Unified fraud detection across all customer touchpoints.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">API Integration</h4>
                <p className="text-gray-600">Easily integrate with your existing systems via our secure API.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">Customizable Alerts</h4>
                <p className="text-gray-600">Configure how and when you receive fraud alerts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">Historical Analysis</h4>
                <p className="text-gray-600">Analyze past data to identify patterns and improve detection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-fraudbuster-darkBlue">Team Collaboration</h4>
                <p className="text-gray-600">Tools for teams to review and respond to fraud alerts together.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
