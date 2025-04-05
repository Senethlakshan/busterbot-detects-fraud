
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BusterBot from '@/components/BusterBot';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about FraudBuster? Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-fraudbuster-darkBlue">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center py-8">
                  <BusterBot emotion="happy" size="md" className="mb-4" />
                  <h3 className="text-xl font-bold text-fraudbuster-darkBlue mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thanks for reaching out! We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fraudbuster-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fraudbuster-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fraudbuster-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fraudbuster-blue"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full button-primary">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-fraudbuster-darkBlue">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-fraudbuster-darkBlue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">support@fraudbuster.com</p>
                      <p className="text-gray-600">sales@fraudbuster.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-fraudbuster-darkBlue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Monday-Friday, 9am-6pm ET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-fraudbuster-darkBlue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Office</h3>
                      <p className="text-gray-600">
                        123 Tech Boulevard<br />
                        Suite 456<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-fraudbuster-blue/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-fraudbuster-darkBlue">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">How quickly can I set up FraudBuster?</h4>
                    <p className="text-sm text-gray-600">
                      Most clients are up and running within 48 hours of signing up.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">Do you offer enterprise solutions?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, we have custom enterprise packages. Contact our sales team for details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">Is there a free trial available?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, we offer a 14-day free trial with full access to all features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
