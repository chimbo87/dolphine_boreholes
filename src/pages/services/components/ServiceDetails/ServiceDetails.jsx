import React, { useState } from 'react';
import { ChevronRight, Droplets, MapPin, Wrench, Clock, Shield, Award } from 'lucide-react';

const DetailedServiceCards = ({ selectedServiceId = 'drilling' }) => {
  const [activeService, setActiveService] = useState(selectedServiceId);

  // Detailed service information
  const detailedServices = {
    drilling: {
      title: 'Professional Borehole Drilling Services',
      description: 'Our expert team provides comprehensive borehole drilling solutions using advanced equipment and proven techniques. We specialize in various geological conditions and ensure optimal water yield for your needs.',
      processes: [
        { step: '01', title: 'Site Preparation', desc: 'Clear and prepare the drilling site with proper access routes' },
        { step: '02', title: 'Drilling Operation', desc: 'Execute drilling using appropriate techniques for soil conditions' },
        { step: '03', title: 'Casing Installation', desc: 'Install protective casing to prevent contamination' },
        { step: '04', title: 'Pump Installation', desc: 'Install and test water extraction systems' }
      ],
      benefits: [
        'High-quality water source',
        'Cost-effective long-term solution',
        'Professional installation guarantee',
        'Compliance with regulations'
      ],
      specs: {
        'Depth Range': 'Up to 200 meters',
        'Diameter Options': '4" to 8" casing',
        'Geological Types': 'All soil and rock formations',
        'Completion Time': '1-3 days average'
      },
      icon: <Droplets className="w-5 h-5" />,
      color: 'emerald'
    },
    siting: {
      title: 'Geological Site Assessment & Water Location',
      description: 'Our geological experts use advanced techniques to identify the optimal drilling locations, ensuring maximum water yield and cost efficiency for your borehole project.',
      processes: [
        { step: '01', title: 'Desktop Study', desc: 'Review geological maps and historical data analysis' },
        { step: '02', title: 'Field Survey', desc: 'Conduct on-site geological and hydrological assessment' },
        { step: '03', title: 'Geophysical Testing', desc: 'Use resistivity and other methods to map subsurface' },
        { step: '04', title: 'Site Recommendation', desc: 'Provide detailed report with optimal drilling locations' }
      ],
      benefits: [
        'Maximize water yield potential',
        'Reduce drilling risks and costs',
        'Expert geological analysis',
        'Detailed site reports'
      ],
      specs: {
        'Survey Methods': 'Resistivity, geological mapping',
        'Report Delivery': '3-5 business days',
        'Accuracy Rate': '95% success rate',
        'Site Area': 'Up to 5 hectares coverage'
      },
      icon: <MapPin className="w-5 h-5" />,
      color: 'sky'
    },
    maintenance: {
      title: 'Borehole Maintenance & Repair Services',
      description: 'Keep your borehole system running efficiently with our comprehensive maintenance and repair services. We provide preventive care and emergency repairs to ensure continuous water supply.',
      processes: [
        { step: '01', title: 'System Inspection', desc: 'Comprehensive assessment of pump and borehole condition' },
        { step: '02', title: 'Cleaning & Service', desc: 'Clean borehole and service all mechanical components' },
        { step: '03', title: 'Component Replacement', desc: 'Replace worn parts with high-quality components' },
        { step: '04', title: 'Performance Testing', desc: 'Test system performance and water quality' }
      ],
      benefits: [
        'Extended equipment lifespan',
        'Consistent water quality',
        'Reduced emergency breakdowns',
        'Cost-effective maintenance plans'
      ],
      specs: {
        'Response Time': '24-48 hours',
        'Service Frequency': 'Quarterly recommended',
        'Warranty': '12 months on parts',
        'Emergency Service': '24/7 availability'
      },
      icon: <Wrench className="w-5 h-5" />,
      color: 'amber'
    }
  };

  const currentService = detailedServices[activeService];

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Service Selector */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <div className="flex flex-wrap gap-1">
              {Object.entries(detailedServices).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs transition-all duration-200 ${
                    activeService === key
                      ? `bg-${service.color}-600 text-white shadow`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {service.icon}
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Service Card */}
        <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-200">
          {/* Header */}
          <div className={`bg-gradient-to-r from-${currentService.color}-600 to-${currentService.color}-700 text-white p-6`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                {currentService.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold">{currentService.title}</h2>
            </div>
            <p className="text-sm md:text-base text-white/90 leading-snug">{currentService.description}</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 p-6">
            {/* Left Column - Process */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Our Process</h3>
              <div className="space-y-3">
                {currentService.processes.map((process, idx) => (
                  <div key={idx} className="flex gap-3 group">
                    <div className={`flex-shrink-0 w-8 h-8 bg-${currentService.color}-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:scale-105 transition-transform duration-200`}>
                      {process.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{process.title}</h4>
                      <p className="text-gray-600 text-xs leading-snug">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors text-xs">
                      <div className={`w-2 h-2 bg-${currentService.color}-500 rounded-full mt-1 flex-shrink-0`}></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Specifications and Trust */}
            <div className="space-y-4">
              {/* Specifications */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Service Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    {Object.entries(currentService.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0 text-xs">
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className={`text-${currentService.color}-600 font-semibold`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className={`bg-gradient-to-br from-${currentService.color}-600 to-${currentService.color}-700 rounded-lg p-4 text-white text-xs`}>
                <h3 className="text-sm font-bold mb-2">Why Choose Us</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <Clock className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <div className="text-lg font-bold">15+</div>
                    <div className={`text-[10px] text-${currentService.color}-100`}>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <div className="text-lg font-bold">100%</div>
                    <div className={`text-[10px] text-${currentService.color}-100`}>Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <div className="text-lg font-bold">500+</div>
                    <div className={`text-[10px] text-${currentService.color}-100`}>Projects</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className={`w-full bg-${currentService.color}-600 text-white py-2 px-4 rounded-lg hover:bg-${currentService.color}-700 transition-colors font-semibold text-sm shadow`}>
                  Get Free Quote
                </button>
                <button className={`w-full border-2 border-${currentService.color}-600 text-${currentService.color}-600 py-2 px-4 rounded-lg hover:bg-${currentService.color}-50 transition-colors font-semibold text-sm`}>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info Banner */}
          <div className="bg-gray-800 text-white p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-bold mb-1">Need Expert Advice?</h4>
                <p className="text-gray-300">
                  Our team is ready to discuss your specific requirements and provide personalized recommendations.
                </p>
              </div>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors font-semibold whitespace-nowrap text-xs">
                Contact Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceCards;
