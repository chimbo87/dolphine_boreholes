import React from 'react';
import { Phone, MapPin, Award, Droplets, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 text-white min-h-screen flex items-center mt-12 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(34,197,94,0.1),transparent)]"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-24 right-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-80"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse delay-300 opacity-70"></div>
        
        {/* Larger floating elements */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-emerald-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 py-12">
        <div className="text-center space-y-6">
          {/* Main Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1 text-xs font-medium">
              <Droplets className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-300">Professional Water Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
                Expert Borehole
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Drilling Services
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Cutting-edge water siting technology meets decades of drilling expertise. 
              Your reliable water source is just one call away.
            </p>
          </div>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">15+</div>
              <div className="text-xs text-gray-300 group-hover:text-white transition-colors">Years Experience</div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">500+</div>
              <div className="text-xs text-gray-300 group-hover:text-white transition-colors">Boreholes Drilled</div>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">95%</div>
              <div className="text-xs text-gray-300 group-hover:text-white transition-colors">Success Rate</div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">24/7</div>
              <div className="text-xs text-gray-300 group-hover:text-white transition-colors">Emergency Service</div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span className="text-xs font-medium">Advanced Water Siting</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <Zap className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium">High-Yield Drilling</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <Award className="w-3 h-3 text-amber-400" />
              <span className="text-xs font-medium">Quality Guaranteed</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105 shadow-xl hover:shadow-amber-500/40">
              <span className="relative z-10">Get Free Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <button className="group relative border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105">
              <span className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>Call Now: +27 82 123 4567</span>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs text-gray-300">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <span>Same Day Response</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse delay-1000"></div>
              <span>Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
        <div className="text-xs text-gray-400 font-medium">Discover More</div>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-2 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;