import React, { useState, useEffect } from 'react';
import { Award, Users, Calendar, MapPin, Play, ArrowRight, CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  const [currentValue, setCurrentValue] = useState(0);
  
  // Animated counter for stats
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Company values
  const companyValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Delivering superior water solutions with precision and expertise',
      color: 'emerald'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Honest, transparent service you can trust for generations',
      color: 'sky'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Using cutting-edge technology for sustainable water access',
      color: 'amber'
    }
  ];

  // Company stats
  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
    { number: '500+', label: 'Successful Projects', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '5', label: 'Provinces Served', icon: <MapPin className="w-6 h-6" /> }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-sky-400 opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-400 opacity-10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50L60 35L40 35zM50 50L65 60L35 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Established 2009 • Johannesburg, South Africa
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Pioneering</span>
                <span className="block text-emerald-200">Water Solutions</span>
                <span className="block text-2xl md:text-3xl font-light text-sky-200 mt-4">
                  Since 2009
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-2xl">
                We're South Africa's leading borehole specialists, combining traditional expertise 
                with modern technology to deliver sustainable water solutions that last generations.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-3 text-emerald-200">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide reliable, sustainable water access to every community and property across 
                South Africa through expert craftsmanship, innovative technology, and unwavering commitment 
                to environmental responsibility.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                Our Story
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-center mb-8 text-emerald-200">By The Numbers</h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="text-center group cursor-pointer"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-emerald-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Achievement Highlight */}
              <div className="bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-lg p-4 text-center">
                <div className="text-lg font-bold mb-1">Industry Leader</div>
                <div className="text-emerald-100 text-sm">
                  Recognized for excellence in sustainable water solutions
                </div>
              </div>
            </div>

            {/* Floating Value Cards */}
            <div className="absolute -top-4 -right-8 w-48 hidden lg:block">
              <div className="bg-white rounded-xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">ISO Certified</div>
                    <div className="text-gray-600 text-xs">Quality Standards</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 w-48 hidden lg:block">
              <div className="bg-white rounded-xl p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">100% Success</div>
                    <div className="text-gray-600 text-xs">Project Completion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              The principles that guide every project and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, idx) => (
              <div 
                key={idx}
                className="group text-center"
                style={{ animationDelay: `${idx * 300}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                  {value.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us for their water needs. 
              Let's discuss how we can solve your water challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition-colors font-semibold shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-emerald-700 transition-colors font-semibold">
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;