import React from 'react';
import { Droplets, MapPin, Wrench, ArrowRight, Clock, Shield, Award } from 'lucide-react';

const ServiceCategoriesGrid = () => {
  // Service categories data
  const serviceCategories = [
    {
      id: 'drilling',
      title: 'Borehole Drilling',
      icon: <Droplets className="w-8 h-8" />,
      description: 'Professional water borehole drilling services with state-of-the-art equipment',
      features: ['Deep water drilling', 'Rock formation expertise', 'Quality assurance'],
      gradient: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'siting',
      title: 'Site Assessment',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Comprehensive geological surveys and optimal drilling location identification',
      features: ['Geological analysis', 'Water table mapping', 'Site optimization'],
      gradient: 'from-sky-600 to-sky-700'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Repair',
      icon: <Wrench className="w-8 h-8" />,
      description: 'Complete maintenance services to ensure long-term borehole performance',
      features: ['Pump maintenance', 'System upgrades', '24/7 emergency service'],
      gradient: 'from-amber-600 to-amber-700'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive borehole solutions backed by years of expertise and cutting-edge technology
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    // Handle navigation to detailed service page
                    console.log(`Navigate to ${service.id} details`);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 transition-all duration-300 group-hover:bg-emerald-600"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Service Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Shield className="w-6 h-6" />, title: 'Licensed & Insured', desc: 'Fully certified operations' },
            { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', desc: 'Emergency service available' },
            { icon: <Award className="w-6 h-6" />, title: 'Quality Guarantee', desc: 'All work guaranteed' },
            { icon: <Droplets className="w-6 h-6" />, title: 'Water Testing', desc: 'Free quality analysis' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Water Project Today</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Ready to secure reliable water access? Our experts are standing by to help you 
            choose the right solution for your specific needs.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoriesGrid;