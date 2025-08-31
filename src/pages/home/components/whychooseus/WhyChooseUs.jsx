import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with 15+ years of drilling experience and geological expertise.",
      icon: "👥",
      stat: "15+ Years"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art drilling rigs and geophysical equipment for maximum efficiency.",
      icon: "🚛",
      stat: "Latest Tech"
    },
    {
      title: "Success Guarantee",
      description: "95% success rate with comprehensive site analysis and water yield guarantee.",
      icon: "✅", 
      stat: "95% Success"
    },
    {
      title: "Full Service",
      description: "Complete solutions from initial survey to pump installation and ongoing maintenance.",
      icon: "🔄",
      stat: "End-to-End"
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed, insured, and compliant with all South African drilling regulations.",
      icon: "🛡️",
      stat: "Fully Licensed"
    },
    {
      title: "Emergency Support",
      description: "24/7 emergency response for urgent water system failures and repairs.",
      icon: "🚨",
      stat: "24/7 Support"
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 via-transparent to-sky-50"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-emerald-100 rounded-full opacity-20 transform translate-x-24"></div>
        <div className="absolute bottom-1/4 left-0 w-36 h-36 bg-sky-100 rounded-full opacity-20 transform -translate-x-18"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Your Trusted Water
            <span className="block text-emerald-600">Solution Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine decades of experience with cutting-edge technology to deliver 
            reliable water solutions that stand the test of time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">
                    {benefit.stat}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-6 lg:p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start Your Water Project?
              </h3>
              <p className="text-emerald-100 text-base mb-4">
                Join hundreds of satisfied customers who trust us for their water needs. 
                Get your free consultation and detailed quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm" onClick={() => navigate('/contact')}>
                  Start Free Consultation
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                  Call Now: +263 77 295 1768
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300 mb-1">500+</div>
                <div className="text-emerald-100 text-xs">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300 mb-1">10+</div>
                <div className="text-emerald-100 text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300 mb-1">95%</div>
                <div className="text-emerald-100 text-xs">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300 mb-1">24/7</div>
                <div className="text-emerald-100 text-xs">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;