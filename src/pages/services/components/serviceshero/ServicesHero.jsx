import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, ArrowRight, Phone, Mail, MapPin,Droplets,Wrench } from 'lucide-react';

const ServiceHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Professional Borehole Drilling",
      subtitle: "Reliable Water Solutions",
      description: "Expert drilling services with state-of-the-art equipment ensuring optimal water yield for your property.",
      image: "drilling",
      stats: { number: "500+", label: "Successful Projects" }
    },
    {
      title: "Geological Site Assessment",
      subtitle: "Smart Water Location",
      description: "Advanced geological surveys to identify the perfect drilling location and maximize your investment.",
      image: "siting",
      stats: { number: "95%", label: "Success Rate" }
    },
    {
      title: "Maintenance & Repair",
      subtitle: "Long-term Performance",
      description: "Comprehensive maintenance services to keep your borehole system running efficiently year-round.",
      image: "maintenance",
      stats: { number: "24/7", label: "Emergency Support" }
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Licensed & Professional Service
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <div className="text-2xl md:text-3xl font-light text-emerald-100">
                  {heroSlides[currentSlide].subtitle}
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">{heroSlides[currentSlide].stats.number}</div>
                <div className="text-emerald-200 text-sm">{heroSlides[currentSlide].stats.label}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-emerald-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-emerald-200 text-sm">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Process Video
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-emerald-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+27 11 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@boreholeexperts.co.za</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Johannesburg, SA</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            {/* Main Visual Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {heroSlides.map((slide, idx) => (
                  <div 
                    key={idx}
                    className={`text-center cursor-pointer transition-all duration-300 ${
                      currentSlide === idx ? 'scale-110' : 'opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  >
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      currentSlide === idx 
                        ? 'bg-white text-emerald-600 shadow-xl' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}>
                      {slide.image === 'drilling' && <Droplets className="w-8 h-8" />}
                      {slide.image === 'siting' && <MapPin className="w-8 h-8" />}
                      {slide.image === 'maintenance' && <Wrench className="w-8 h-8" />}
                    </div>
                    <div className="text-xs font-medium">
                      {slide.image.charAt(0).toUpperCase() + slide.image.slice(1)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Visualization */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-center mb-4">Complete Solution Process</h3>
                <div className="flex items-center justify-between">
                  {['Assess', 'Drill', 'Install', 'Maintain'].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        idx <= currentSlide 
                          ? 'bg-white text-emerald-600' 
                          : 'bg-white/20 text-white'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="text-xs mt-2 text-center">{step}</div>
                      {idx < 3 && (
                        <div className={`w-12 h-0.5 mt-4 transition-all duration-500 ${
                          idx < currentSlide ? 'bg-white' : 'bg-white/20'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-xs text-emerald-200">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24H</div>
                  <div className="text-xs text-emerald-200">Response</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;