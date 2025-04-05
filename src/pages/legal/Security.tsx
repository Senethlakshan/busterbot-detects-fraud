
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Shield, Lock, Server, AlertTriangle } from 'lucide-react';

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Security Practices
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              At FraudBuster, security isn't just a feature—it's the foundation of everything we do. Learn about our comprehensive approach to keeping your data safe.
            </p>
          </div>
          
          {/* Security Overview */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-fraudbuster-darkBlue mb-4">Our Security Commitment</h2>
                <p className="text-gray-600 mb-4">
                  As a fraud detection platform, we understand the critical importance of security. We've built our systems from the ground up with security as a core principle, not an afterthought.
                </p>
                <p className="text-gray-600">
                  Our team includes cybersecurity experts with decades of combined experience protecting sensitive financial and personal data across various industries.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-fraudbuster-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="w-24 h-24 text-fraudbuster-darkBlue opacity-80" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Data Encryption */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-fraudbuster-blue/20 p-3 rounded-full mr-4">
                  <Lock className="w-6 h-6 text-fraudbuster-darkBlue" />
                </div>
                <h2 className="text-xl font-bold text-fraudbuster-darkBlue">Data Encryption</h2>
              </div>
              <p className="text-gray-600 mb-4">
                All data is encrypted both in transit and at rest using industry-standard encryption protocols:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>TLS 1.3 for all data in transit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Secure key management with regular rotation</span>
                </li>
              </ul>
            </div>
            
            {/* Infrastructure Security */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-fraudbuster-blue/20 p-3 rounded-full mr-4">
                  <Server className="w-6 h-6 text-fraudbuster-darkBlue" />
                </div>
                <h2 className="text-xl font-bold text-fraudbuster-darkBlue">Infrastructure Security</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our infrastructure is designed with multiple layers of security:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>SOC 2 Type II compliant data centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Network segmentation and firewalls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Continuous vulnerability scanning and patching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>DDoS protection and mitigation</span>
                </li>
              </ul>
            </div>
            
            {/* Access Controls */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-fraudbuster-purple/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-fraudbuster-darkBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-fraudbuster-darkBlue">Access Controls</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We implement strict access controls to protect your data:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Role-based access control (RBAC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Multi-factor authentication (MFA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Principle of least privilege</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regular access reviews and audits</span>
                </li>
              </ul>
            </div>
            
            {/* Incident Response */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-fraudbuster-pink/20 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-fraudbuster-darkBlue" />
                </div>
                <h2 className="text-xl font-bold text-fraudbuster-darkBlue">Incident Response</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We maintain a comprehensive incident response program:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>24/7 security monitoring and alerting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Documented incident response procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regular incident response drills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Transparent communication for security events</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Compliance & Certifications */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-6">Compliance & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-fraudbuster-darkBlue font-bold mb-2">SOC 2 Type II</div>
                <p className="text-sm text-gray-600">Audited annually for security, availability, and confidentiality</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-fraudbuster-darkBlue font-bold mb-2">ISO 27001</div>
                <p className="text-sm text-gray-600">Certified information security management system</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-fraudbuster-darkBlue font-bold mb-2">GDPR & CCPA</div>
                <p className="text-sm text-gray-600">Compliant with global privacy regulations</p>
              </div>
            </div>
          </div>
          
          {/* Security FAQs */}
          <div className="bg-fraudbuster-blue/10 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-6">Frequently Asked Security Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-fraudbuster-darkBlue mb-2">How is my data stored and protected?</h3>
                <p className="text-gray-600">
                  All customer data is encrypted at rest and in transit. We use industry-leading cloud providers with robust physical and network security measures. Our systems are regularly audited and tested for vulnerabilities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-fraudbuster-darkBlue mb-2">Do you perform regular security testing?</h3>
                <p className="text-gray-600">
                  Yes, we conduct regular security assessments including vulnerability scanning, penetration testing, and code reviews. We also maintain a bug bounty program to identify and address potential security issues.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-fraudbuster-darkBlue mb-2">How are security updates handled?</h3>
                <p className="text-gray-600">
                  We follow a rigorous patch management process to ensure that security updates are applied promptly. Critical security patches are deployed within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-fraudbuster-darkBlue mb-2">What happens if there is a security incident?</h3>
                <p className="text-gray-600">
                  We have a comprehensive incident response plan. In the event of a confirmed data breach affecting your information, we will notify you promptly and provide guidance on steps to take.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Security Team */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4">Contact Our Security Team</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              If you have specific security questions or concerns, or if you would like to report a potential vulnerability, please reach out to our dedicated security team.
            </p>
            <p className="font-medium">
              Email: security@fraudbuster.com
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
