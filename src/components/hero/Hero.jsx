import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-700 text-white min-h-screen flex items-center mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-sky-600/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Professional
                <span className="block text-amber-400">Borehole Drilling</span>
                <span className="block text-sky-300">Solutions</span>
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed">
                Expert water siting, drilling, and installation services. 
                Reliable water solutions for homes, farms, and businesses across South Africa.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-amber-400">15+</div>
                <div className="text-xs text-gray-200">Years Experience</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-amber-400">500+</div>
                <div className="text-xs text-gray-200">Successful Projects</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-amber-400">95%</div>
                <div className="text-xs text-gray-200">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Get Free Assessment
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                View Our Work
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center space-x-3">
              <Phone className="text-amber-400" size={18} />
              <div>
                <div className="text-xs text-gray-300">24/7 Emergency Service</div>
                <div className="font-semibold">+27 82 123 4567</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center mb-4">Quick Quote Request</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Service Type</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>Select Service</option>
                      <option>Borehole Drilling</option>
                      <option>Water Siting</option>
                      <option>Pump Installation</option>
                      <option>Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter your location"
                      className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="Your phone number"
                      className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Request Free Quote
                  </button>
                </div>

                <div className="text-center text-xs text-gray-300">
                  Response within 2 hours during business hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;