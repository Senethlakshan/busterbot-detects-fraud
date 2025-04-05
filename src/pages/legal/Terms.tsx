
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last Updated: April 5, 2025
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4">1. Introduction</h2>
              <p>
                Welcome to FraudBuster. These Terms of Service ("Terms") govern your access to and use of our website, APIs, and fraud detection services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">2. Definitions</h2>
              <ul className="list-disc pl-5 mb-4">
                <li><strong>Service</strong>: The FraudBuster fraud detection platform, including all features, tools, content, and user interfaces.</li>
                <li><strong>User</strong>: Any individual or entity that accesses or uses the Service.</li>
                <li><strong>Account</strong>: A registered profile created by a User to access and use the Service.</li>
                <li><strong>Subscription</strong>: A paid plan that provides access to specific features and capabilities of the Service.</li>
                <li><strong>Content</strong>: All information, data, text, software, graphics, and other materials submitted, posted, or displayed on the Service.</li>
              </ul>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">3. Account Registration</h2>
              <p>
                To use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">4. Subscriptions and Payments</h2>
              <p>
                Some aspects of the Service may be available only with a paid Subscription. You agree to pay all fees associated with your selected Subscription plan. All fees are exclusive of taxes, which you are also responsible for paying.
              </p>
              <p>
                Subscription fees are billed in advance on a monthly or annual basis based on your selected plan. We may change the fees for any Subscription with 30 days' notice prior to the start of a new billing cycle.
              </p>
              <p>
                Subscriptions automatically renew unless canceled before the end of the current billing period. You may cancel your Subscription at any time, but no refunds will be provided for any unused portion of the current billing cycle.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">5. Acceptable Use</h2>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Use the Service in any way that violates any applicable law or regulation</li>
                <li>Use the Service to transmit harmful code, interfere with, or disrupt the Service</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Use the Service to collect or harvest personal information about other users</li>
                <li>Use the Service in a manner that could disable, overburden, damage, or impair the Service</li>
                <li>Use any automated means to access the Service without our express written permission</li>
              </ul>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">6. Intellectual Property Rights</h2>
              <p>
                The Service and its original content (excluding Content provided by users) are and will remain the exclusive property of FraudBuster and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service solely for your business or personal purposes.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">7. User Content</h2>
              <p>
                You retain ownership of any Content you submit, post, or display on or through the Service. By providing Content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, process, store, and analyze your Content solely for the purpose of providing the Service to you.
              </p>
              <p>
                You represent and warrant that you have all rights, power, and authority necessary to grant the rights granted herein to any Content that you submit.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">8. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">9. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">10. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL FRAUDBUSTER, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of such changes by posting the updated Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">12. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the State of California without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-xl font-bold text-fraudbuster-darkBlue mb-4 mt-8">13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
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

export default Terms;
