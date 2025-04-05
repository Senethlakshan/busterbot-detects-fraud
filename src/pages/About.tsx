import React from 'react';
import { Shield, Users, Award, Calendar, GraduationCap, University } from 'lucide-react';
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
          
          {/* University Project Section - Featured prominently */}
          <div className="bg-gradient-to-br from-white to-fraudbuster-blue/10 rounded-3xl p-8 mb-20 shadow-lg border border-fraudbuster-blue/20">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <BusterBot emotion="happy" size="xl" className="drop-shadow-xl" />
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-center text-fraudbuster-darkBlue">
                About This Project
              </h2>
              
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-fraudbuster-darkBlue border-b pb-2 border-fraudbuster-purple/30">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-fraudbuster-blue/20 p-2 rounded-full">
                        <Calendar className="w-6 h-6 text-fraudbuster-darkBlue" />
                      </div>
                      <p className="text-gray-700"><strong>Submitted:</strong> February 2025</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-fraudbuster-purple/20 p-2 rounded-full">
                        <GraduationCap className="w-6 h-6 text-fraudbuster-darkBlue" />
                      </div>
                      <p className="text-gray-700"><strong>Degree:</strong> BSc (Hons) Software Engineering</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-fraudbuster-pink/20 p-2 rounded-full">
                        <University className="w-6 h-6 text-fraudbuster-darkBlue" />
                      </div>
                      <p className="text-gray-700"><strong>University:</strong> University of Westminster</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="w-6 h-6 text-fraudbuster-darkBlue" />
                      </div>
                      <p className="text-gray-700">
                        <strong>In Collaboration With:</strong> Informatics Institute of Technology (IIT)
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-fraudbuster-darkBlue/5 p-4 rounded-lg border border-fraudbuster-darkBlue/10">
                    <h3 className="font-bold mb-2 text-fraudbuster-darkBlue">Dissertation By</h3>
                    <p className="text-gray-700 font-medium">
                      Thenuk Wijesinghe
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-fraudbuster-darkBlue border-b pb-2 border-fraudbuster-purple/30 mb-4">
                      Project Aim
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The aim of this project is to develop an Explainable Artificial Intelligence (XAI) system that improves transparency and trust in digital marketing and fraud detection. The focus is on analyzing biases in social media sentiment, providing clear and interpretable insights into how AI makes decisions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-fraudbuster-darkBlue border-b pb-2 border-fraudbuster-purple/30 mb-4">
                      Dissertation Title
                    </h3>
                    <p className="italic text-gray-700 font-medium">
                      "FraudBuster: Developing an Explainable AI Model for Detecting Bias in Social Media Sentiment Analysis"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Mission - Keeping this section */}
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
          
          {/* Our Values - Keeping this section */}
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
