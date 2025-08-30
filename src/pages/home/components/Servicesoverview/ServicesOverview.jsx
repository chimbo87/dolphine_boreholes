import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      title: "Borehole Drilling",
      description: "Professional drilling services with modern equipment for residential, commercial, and agricultural properties.",
      icon: "🔧",
      features: ["Up to 200m depth", "All soil types", "Quality guarantee"]
    },
    {
      title: "Water Siting & Surveying", 
      description: "Advanced geophysical surveys to locate optimal drilling positions with highest success rates.",
      icon: "🎯",
      features: ["Geophysical analysis", "Yield estimation", "Success guarantee"]
    },
    {
      title: "Pump Installation",
      description: "Complete pump system installation and setup for optimal water delivery and pressure.",
      icon: "⚡",
      features: ["Quality pumps", "Professional setup", "Performance testing"]
    },
    {
      title: "Maintenance & Repair",
      description: "Ongoing maintenance and emergency repair services to keep your water systems running smoothly.",
      icon: "🔧",
      features: ["24/7 emergency", "Preventive care", "Expert technicians"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Complete Water Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial site assessment to ongoing maintenance, we provide comprehensive 
            borehole services backed by years of expertise and modern technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Action */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;