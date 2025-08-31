import React from 'react';
import { Phone, Mail, MapPin, Clock, Droplets, Wrench } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-800 overflow-hidden mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Droplets className="absolute top-16 left-8 text-white/20 animate-pulse" size={30} />
        <Wrench className="absolute top-24 right-16 text-white/20 animate-pulse delay-1000" size={28} />
        <Droplets className="absolute bottom-24 left-24 text-white/20 animate-pulse delay-500" size={24} />
        <Wrench className="absolute bottom-16 right-24 text-white/20 animate-pulse delay-1500" size={30} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Get In 
            <span className="text-amber-300"> Touch</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-emerald-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Professional borehole drilling and water solutions across South Africa. 
            <span className="text-white font-semibold"> Expert consultation</span> and 
            <span className="text-white font-semibold"> reliable service</span> you can trust.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Phone Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-emerald-500 rounded-full p-3 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">Call Us Now</h3>
                <p className="text-emerald-100 text-xs mb-2">Speak directly with our experts</p>
                <a 
                  href="tel:+27111234567" 
                  className="text-amber-300 font-bold text-sm hover:text-amber-200 transition-colors"
                >
                  +27 11 123 4567
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-sky-500 rounded-full p-3 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">Email Us</h3>
                <p className="text-emerald-100 text-xs mb-2">Get detailed information</p>
                <a 
                  href="mailto:info@boreholepro.co.za" 
                  className="text-amber-300 font-bold text-sm hover:text-amber-200 transition-colors"
                >
                  info@boreholepro.co.za
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-600 rounded-full p-3 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-emerald-100 text-xs mb-1">Located in Johannesburg</p>
                <p className="text-amber-300 font-bold text-xs">
                  123 Industrial Avenue<br />
                  Johannesburg, 2000
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 bg-amber-600/20 backdrop-blur-sm rounded-xl p-4 border border-amber-400/30">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="text-amber-300" size={20} />
              <h3 className="text-lg font-bold text-white">24/7 Emergency Service Available</h3>
            </div>
            <p className="text-amber-100 mb-2 text-sm">
              Water system failures? Pump breakdowns? We're here to help around the clock.
            </p>
            <a 
              href="tel:+27829111357" 
              className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              <Phone size={16} />
              <span>Emergency Hotline: +27 82 911 HELP</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md text-sm"
            >
              Request Quote
            </button>
            <button 
              onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactHero;
