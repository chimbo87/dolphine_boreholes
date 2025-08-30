import React from 'react';

const WhyChooseUs = () => {
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 via-transparent to-sky-50"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 transform translate-x-32"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-sky-100 rounded-full opacity-20 transform -translate-x-24"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Your Trusted Water
            <span className="block text-emerald-600">Solution Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of experience with cutting-edge technology to deliver 
            reliable water solutions that stand the test of time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    {benefit.stat}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Water Project?
              </h3>
              <p className="text-emerald-100 text-lg mb-6">
                Join hundreds of satisfied customers who trust us for their water needs. 
                Get your free consultation and detailed quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Start Free Consultation
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Call Now: +27 11 123 4567
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
                <div className="text-emerald-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">15+</div>
                <div className="text-emerald-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">95%</div>
                <div className="text-emerald-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">24/7</div>
                <div className="text-emerald-100">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;