
import React from 'react';
import { Shield, Users, Award } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BusterBot from '@/components/BusterBot';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <section className="container mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-fraudbuster-darkBlue mb-4">
              About FraudBuster
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make the digital world safer for businesses and consumers through innovative AI technology.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-fraudbuster-darkBlue">Our Story</h2>
              <p className="text-gray-600 mb-4">
                FraudBuster was born out of a simple observation: as digital transactions became more common, so did sophisticated fraud attempts. Traditional rule-based systems weren't keeping up with increasingly clever tactics.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023 by a team of AI researchers and cybersecurity experts, we set out to create a more intelligent approach to fraud detection—one that learns and adapts in real-time.
              </p>
              <p className="text-gray-600">
                Today, FraudBuster helps businesses of all sizes protect themselves and their customers from evolving fraud threats, using advanced AI that explains its reasoning in plain language.
              </p>
            </div>
            <div className="flex justify-center">
              <BusterBot emotion="happy" size="xl" className="drop-shadow-xl" />
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-fraudbuster-blue/10 rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-fraudbuster-darkBlue">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <Shield className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Protect</h3>
                <p className="text-gray-600">
                  Secure businesses and consumers from ever-evolving fraud threats with intelligent, adaptive technology.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <Users className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Empower</h3>
                <p className="text-gray-600">
                  Give organizations of all sizes access to enterprise-grade fraud detection capabilities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  <Award className="w-8 h-8 text-fraudbuster-darkBlue" />
                </div>
                <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Innovate</h3>
                <p className="text-gray-600">
                  Continuously advance our AI technology to stay ahead of sophisticated fraud techniques.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-fraudbuster-darkBlue">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-fraudbuster-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">JD</span>
                  </div>
                  <h3 className="font-bold text-lg text-fraudbuster-darkBlue">Jane Doe</h3>
                  <p className="text-gray-500 mb-2">CEO & Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    Former AI research lead at Tech University with 15 years in cybersecurity.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-fraudbuster-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">JS</span>
                  </div>
                  <h3 className="font-bold text-lg text-fraudbuster-darkBlue">John Smith</h3>
                  <p className="text-gray-500 mb-2">CTO & Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    Machine learning expert with previous experience at major fintech companies.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-fraudbuster-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SC</span>
                  </div>
                  <h3 className="font-bold text-lg text-fraudbuster-darkBlue">Sarah Chen</h3>
                  <p className="text-gray-500 mb-2">Head of Product</p>
                  <p className="text-sm text-gray-600">
                    Product visionary with expertise in UX design and customer-focused solutions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MJ</span>
                  </div>
                  <h3 className="font-bold text-lg text-fraudbuster-darkBlue">Michael Johnson</h3>
                  <p className="text-gray-500 mb-2">Chief Security Officer</p>
                  <p className="text-sm text-gray-600">
                    Cybersecurity specialist with background in banking security infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-fraudbuster-darkBlue">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-fraudbuster-blue/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-fraudbuster-darkBlue">01</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Transparency</h3>
                  <p className="text-gray-600">
                    We believe AI should explain its reasoning. That's why our technology always tells you why something was flagged—in plain language.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fraudbuster-purple/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-fraudbuster-darkBlue">02</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Privacy</h3>
                  <p className="text-gray-600">
                    We're committed to handling data responsibly, with strong security measures and respect for privacy regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fraudbuster-pink/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-fraudbuster-darkBlue">03</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Accessibility</h3>
                  <p className="text-gray-600">
                    Advanced fraud protection shouldn't be limited to big companies. We design our solutions to be accessible to businesses of all sizes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-fraudbuster-darkBlue">04</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    Fraud tactics evolve, and so do we. We're committed to continuous learning and improving our technology.
                  </p>
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

export default About;
