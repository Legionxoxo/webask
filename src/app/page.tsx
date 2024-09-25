"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Send, Globe } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Enter any URL",
    "Ask questions",
    "Get AI-powered insights",
    "Explore web content effortlessly"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center text-white p-8 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(9,24,78,1) 0%, rgba(0,0,32,1) 100%)",
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Project Title */}
        <section className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-7xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent animate-pulse">
              WebAsk
            </span>
          </h1>
          <p className="text-2xl max-w-3xl text-gray-300 leading-relaxed mb-8">
            With a simple and intuitive interface, you can enter the URL of any website, and our powerful AI will provide insightful answers based on the content of that page.
          </p>
          <div className="text-3xl font-bold text-indigo-400 h-12">
            {features[currentFeature]}
          </div>
        </section>

        {/* Project Features */}
        <section className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="p-8 bg-[#000046] bg-opacity-50 backdrop-blur-sm text-white rounded-xl shadow-lg hover:shadow-indigo-800/50 hover:scale-105 transform transition-all duration-300 ease-out">
            <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
              <Globe className="mr-2" />
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                How it Works
              </span>
            </h2>
            <p className="text-gray-300 text-center mb-4">Add the URL of a webpage next to this site's URL, and you're ready to begin.</p>
            <div className="text-gray-300 text-center text-sm bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>https://webask.com/https://example.com</code>
            </div>
          </div>
          <div className="p-8 bg-[#000046] bg-opacity-50 backdrop-blur-sm text-white rounded-xl shadow-lg hover:shadow-indigo-800/50 hover:scale-105 transform transition-all duration-300 ease-out flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
                <Send className="mr-2" />
                <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Start Asking
                </span>
              </h2>
              <p className="text-gray-300 text-center mb-4">Submit your questions and get AI-driven insights instantly.</p>
            </div>
            <div className="text-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Try Now
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <ChevronDown className="animate-bounce mx-auto text-indigo-400" size={48} />
          <p className="text-xl text-gray-300 mt-4">Scroll down to learn more</p>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <p className="text-sm text-gray-400 hover:text-gray-200 transition duration-200">
            Made by Legion © 2024
          </p>
        </footer>
      </div>
    </main>
  );
}