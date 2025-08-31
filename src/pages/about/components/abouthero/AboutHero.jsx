import React, { useState, useEffect } from 'react';
import { Award, Users, Calendar, MapPin, Play, ArrowRight, CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const companyValues = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Excellence',
      description: 'Delivering superior water solutions with precision',
      color: 'emerald'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Integrity',
      description: 'Honest, transparent service you can trust',
      color: 'sky'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Innovation',
      description: 'Using modern technology for sustainable water access',
      color: 'amber'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Calendar className="w-5 h-5" /> },
    { number: '500+', label: 'Projects Done', icon: <Award className="w-5 h-5" /> },
    { number: '50+', label: 'Team Members', icon: <Users className="w-5 h-5" /> },
    { number: '5', label: 'Provinces Served', icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-sky-700 text-white overflow-hidden mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-sky-400 opacity-10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              Established 2009 • Harare, Zimbabwe
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                <span className="block">Pioneering</span>
                <span className="block text-emerald-200">Water Solutions</span>
                <span className="block text-lg md:text-xl font-light text-sky-200 mt-2">
                  Since 2009
                </span>
              </h1>

              <p className="text-sm md:text-base text-emerald-100 leading-relaxed max-w-xl">
                We’re Zimbabwe’s leading borehole specialists, blending traditional expertise 
                with modern technology to deliver lasting water solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-base font-semibold mb-2 text-emerald-200">Our Mission</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To provide reliable, sustainable water access to communities across Zimbabwe 
                through expert craftsmanship and innovation.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-emerald-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-1 shadow-md text-sm">
                Our Story <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-1 text-sm">
                <Play className="w-4 h-4" /> Watch Work
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-center mb-4 text-emerald-200">By The Numbers</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-emerald-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-md p-3 text-center">
                <div className="text-sm font-bold">Industry Leader</div>
                <div className="text-emerald-100 text-xs">
                  Recognized for excellence in sustainable water solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Our Core Values</h2>
            <p className="text-emerald-100 text-sm max-w-xl mx-auto">
              The principles that guide every project and drive our excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {companyValues.map((value, idx) => (
              <div key={idx} className="group text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-lg mb-3`}>
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-emerald-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-2">Ready to Experience the Difference?</h3>
            <p className="text-emerald-100 text-sm mb-4 max-w-xl mx-auto">
              Join hundreds of satisfied customers who trust us for their water needs. 
              Let’s discuss how we can solve your water challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-400 transition-colors font-semibold shadow-md text-sm">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-emerald-700 transition-colors font-semibold text-sm">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
