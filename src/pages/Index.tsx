
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ArrowDown, MessageSquare, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BusterBot from '@/components/BusterBot';

const Index = () => {
  // Function to handle smooth scrolling for anchor links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.fade-in-section');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar transparent />

      {/* Hero Section */}
      <section className="pt-24 px-4 bg-gradient-to-b from-fraudbuster-blue/30 to-fraudbuster-purple/30 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fraudbuster-darkBlue leading-tight mb-6">
                FraudBuster: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your AI Sidekick</span> Against Fraud!
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Advanced AI-powered fraud detection that keeps you one step ahead of scammers. Simple, powerful, and designed with your security in mind.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/register">
                  <Button size="lg" className="button-primary text-lg px-8 py-6">Get Started</Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="button-secondary text-lg px-8 py-6"
                  onClick={() => scrollToSection('features')}
                >
                  Learn More <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <BusterBot emotion="happy" size="xl" className="drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BusterBot leverages cutting-edge AI to keep your business and customers safe from fraud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="feature-card fade-in-section opacity-0">
              <div className="bg-fraudbuster-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-fraudbuster-darkBlue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Real-Time Fraud Detection</h3>
              <p className="text-gray-600">
                Identify suspicious activity as it happens with our powerful real-time monitoring system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card fade-in-section opacity-0">
              <div className="bg-fraudbuster-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-fraudbuster-darkBlue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Explainable AI</h3>
              <p className="text-gray-600">
                Understand exactly why our AI flagged something as suspicious with clear, actionable insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card fade-in-section opacity-0">
              <div className="bg-fraudbuster-pink/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-fraudbuster-darkBlue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Sentiment Insights</h3>
              <p className="text-gray-600">
                Analyze communication patterns to detect subtle signs of fraudulent behavior.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card fade-in-section opacity-0">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-fraudbuster-darkBlue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fraudbuster-darkBlue">Privacy First</h3>
              <p className="text-gray-600">
                Keep your data secure with our privacy-focused approach to fraud detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-fraudbuster-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what people are saying about FraudBuster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-none shadow-lg fade-in-section opacity-0">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-fraudbuster-purple flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">JD</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-fraudbuster-darkBlue rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "FraudBuster has been a game-changer for our e-commerce business. We've reduced chargebacks by 87% since implementing it!"
                  </p>
                  <div>
                    <h4 className="font-bold text-fraudbuster-darkBlue">Jane Doe</h4>
                    <p className="text-sm text-gray-500">CEO, ShopSecure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none shadow-lg fade-in-section opacity-0">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-fraudbuster-blue flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">MS</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-fraudbuster-darkBlue rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "The explainable AI feature is brilliant. BusterBot doesn't just flag suspicious activity—it tells you exactly why, in plain English."
                  </p>
                  <div>
                    <h4 className="font-bold text-fraudbuster-darkBlue">Michael Smith</h4>
                    <p className="text-sm text-gray-500">Security Analyst, FinTrust</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none shadow-lg fade-in-section opacity-0">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-fraudbuster-pink flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">AJ</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-fraudbuster-darkBlue rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Setup was incredibly simple, and the customer support team is always there when we have questions. 10/10 would recommend!"
                  </p>
                  <div>
                    <h4 className="font-bold text-fraudbuster-darkBlue">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">CTO, PaySmart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FraudBuster makes fraud detection simple, seamless, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center fade-in-section opacity-0">
              <div className="bg-fraudbuster-blue/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-fraudbuster-darkBlue">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-fraudbuster-darkBlue">Input Data</h3>
              <p className="text-gray-600">
                Simply paste the text, transaction details, or communication you want to analyze into the FraudBuster interface.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center fade-in-section opacity-0">
              <div className="bg-fraudbuster-purple/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-fraudbuster-darkBlue">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-fraudbuster-darkBlue">AI Analyzes</h3>
              <p className="text-gray-600">
                Our sophisticated AI analyzes the data for patterns, inconsistencies, and red flags that indicate potential fraud.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center fade-in-section opacity-0">
              <div className="bg-fraudbuster-pink/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-fraudbuster-darkBlue">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-fraudbuster-darkBlue">See Results</h3>
              <p className="text-gray-600">
                Receive clear, actionable insights about your data, including risk scores, explanations, and recommended actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-fraudbuster-darkBlue text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Bust Fraud?</h2>
              <p className="text-xl">
                Join thousands of businesses protecting themselves with FraudBuster.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link to="/register">
                <Button size="lg" className="button-primary text-lg px-8">Join Now</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
