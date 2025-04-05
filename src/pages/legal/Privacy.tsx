
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last Updated: April 5, 2025
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4">1. Introduction</h2>
              <p>
                FraudBuster ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fraud detection service and website (the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">2. Information We Collect</h2>
              <h3 className="text-lg font-bold text-fraudbuster-darkBlue mb-2">2.1 Personal Information</h3>
              <p>
                We may collect personally identifiable information that you provide to us when you register for an account, sign up for our newsletter, respond to a survey, fill out a form, or otherwise communicate with us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Name, email address, and contact details</li>
                <li>Account credentials</li>
                <li>Billing information and payment details</li>
                <li>Company information</li>
                <li>User preferences and settings</li>
              </ul>
              
              <h3 className="text-lg font-bold text-fraudbuster-darkBlue mb-2">2.2 Data Submitted for Analysis</h3>
              <p>
                In order to provide our fraud detection services, you may submit data to us for analysis. This may include transaction details, communication logs, customer information, or other data relevant to fraud detection. We use this information solely for the purpose of providing our fraud detection service to you.
              </p>
              
              <h3 className="text-lg font-bold text-fraudbuster-darkBlue mb-2">2.3 Usage Information</h3>
              <p>
                We automatically collect certain information about how you interact with our Service. This includes:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Location information</li>
                <li>Usage patterns and preferences</li>
              </ul>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Providing, maintaining, and improving our Service</li>
                <li>Processing transactions and managing your account</li>
                <li>Responding to your requests and inquiries</li>
                <li>Sending administrative information, such as updates and security alerts</li>
                <li>With your consent, sending marketing communications</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Detecting and preventing fraudulent activity</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of all information we collect and process. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">5. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. We will securely delete your personal information when it is no longer needed for these purposes.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@fraudbuster.com<br />
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

export default Privacy;
