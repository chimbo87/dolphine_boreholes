import React from 'react';
import { Droplets, MapPin, Wrench, ArrowRight, Clock, Shield, Award } from 'lucide-react';

const ServiceCategoriesGrid = () => {
  // Service categories data
  const serviceCategories = [
    {
      id: 'drilling',
      title: 'Borehole Drilling',
      icon: <Droplets className="w-6 h-6" />,
      description: 'Professional water borehole drilling services with state-of-the-art equipment',
      features: ['Deep water drilling', 'Rock formation expertise', 'Quality assurance'],
      gradient: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'siting',
      title: 'Site Assessment',
      icon: <MapPin className="w-6 h-6" />,
      description: 'Comprehensive geological surveys and optimal drilling location identification',
      features: ['Geological analysis', 'Water table mapping', 'Site optimization'],
      gradient: 'from-sky-600 to-sky-700'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Repair',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Complete maintenance services to ensure long-term borehole performance',
      features: ['Pump maintenance', 'System upgrades', '24/7 emergency service'],
      gradient: 'from-amber-600 to-amber-700'
    }
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Our Core Services
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Comprehensive borehole solutions backed by years of expertise and cutting-edge technology
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {serviceCategories.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-snug">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => console.log(`Navigate to ${service.id} details`)}
                  className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Number indicator */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Service Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Shield className="w-5 h-5" />, title: 'Licensed & Insured', desc: 'Fully certified operations' },
            { icon: <Clock className="w-5 h-5" />, title: '24/7 Support', desc: 'Emergency service available' },
            { icon: <Award className="w-5 h-5" />, title: 'Quality Guarantee', desc: 'All work guaranteed' },
            { icon: <Droplets className="w-5 h-5" />, title: 'Water Testing', desc: 'Free quality analysis' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow transition-shadow text-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-600 rounded mb-2">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Start Your Water Project Today</h3>
          <p className="text-emerald-100 mb-4 max-w-xl mx-auto text-sm">
            Ready to secure reliable water access? Our experts are standing by to help you 
            choose the right solution for your specific needs.
          </p>
          <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoriesGrid;
