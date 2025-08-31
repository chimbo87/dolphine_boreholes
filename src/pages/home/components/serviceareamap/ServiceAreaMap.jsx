import React, { useState } from 'react';
import { MapPin, Clock, Phone, CheckCircle, Truck, Users } from 'lucide-react';

const ServiceAreaMap = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  const provinces = [
    {
      id: 'harare',
      name: 'Harare',
      color: '#059669',
      responseTime: '24-48 hours',
      activeProjects: 45,
      completedProjects: 380,
      mainCities: ['Harare', 'Mazowe', 'Marondera'],
      coverage: '100%',
      description: 'Our primary service area with the fastest response times and largest team deployment.',
      coordinates: { x: 45, y: 65 }
    },
    {
      id: 'rusape',
      name: 'Rusape',
      color: '#0284C7',
      responseTime: '48-72 hours',
      activeProjects: 28,
      completedProjects: 210,
      mainCities: ['Makoni', 'Nyazura', 'Wedza'],
      coverage: '85%',
      description: 'Extensive rural and agricultural drilling operations with specialized equipment.',
      coordinates: { x: 70, y: 55 }
    },
    {
      id: 'kadoma',
      name: 'Kadoma',
      color: '#D97706',
      responseTime: '3-5 days',
      activeProjects: 22,
      completedProjects: 165,
      mainCities: ['Katanga', 'Sadza', 'GlenView'],
      coverage: '75%',
      description: 'Community-focused projects with emphasis on sustainable water solutions.',
      coordinates: { x: 50, y: 25 }
    },
    {
      id: 'mvuma',
      name: 'Mvuma',
      color: '#059669',
      responseTime: '3-5 days',
      activeProjects: 18,
      completedProjects: 140,
      mainCities: ['Betrece', 'Boka', 'Southly Pak'],
      coverage: '70%',
      description: 'Mining and agricultural sector specialization with heavy-duty equipment.',
      coordinates: { x: 25, y: 50 }
    }
  ];

  const handleProvinceClick = (province) => {
    setSelectedProvince(selectedProvince?.id === province.id ? null : province);
  };

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            Our Service Coverage Area
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            We provide comprehensive borehole drilling services across four key provinces in Zimbabwe. 
            Click on any region to learn more about our local capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Map Section */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                Interactive Service Map
              </h3>
              
              {/* SVG Map */}
              <div className="relative bg-gray-100 rounded-md p-3 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-64">
                  {/* Background */}
                  <rect width="100" height="100" fill="#f3f4f6" />
                  
                  {/* Province Areas */}
                  {provinces.map((province) => (
                    <g key={province.id}>
                      <circle
                        cx={province.coordinates.x}
                        cy={province.coordinates.y}
                        r="10"
                        fill={selectedProvince?.id === province.id ? province.color : `${province.color}80`}
                        stroke={province.color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300 hover:r-12"
                        onClick={() => handleProvinceClick(province)}
                      />
                      <text
                        x={province.coordinates.x}
                        y={province.coordinates.y + 18}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-700 cursor-pointer"
                        onClick={() => handleProvinceClick(province)}
                      >
                        {province.name}
                      </text>
                      {selectedProvince?.id === province.id && (
                        <circle
                          cx={province.coordinates.x}
                          cy={province.coordinates.y}
                          r="13"
                          fill="none"
                          stroke={province.color}
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {provinces.map((province) => (
                  <div 
                    key={province.id}
                    onClick={() => handleProvinceClick(province)}
                    className={`p-2 rounded-md border-2 cursor-pointer transition-all duration-200 ${
                      selectedProvince?.id === province.id 
                        ? 'border-gray-800 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <div 
                        className="w-3 h-3 rounded-full mr-1.5"
                        style={{ backgroundColor: province.color }}
                      ></div>
                      <span className="font-semibold text-xs text-gray-800">{province.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{province.coverage} Coverage</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Province Details Panel */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-5 h-full">
              {selectedProvince ? (
                <div>
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-5 h-5 rounded-full mr-2"
                      style={{ backgroundColor: selectedProvince.color }}
                    ></div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {selectedProvince.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 text-xs leading-relaxed">
                    {selectedProvince.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-emerald-600 mr-1.5" />
                        <span className="text-xs font-medium">Response Time</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        {selectedProvince.responseTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <Truck className="w-4 h-4 text-sky-600 mr-1.5" />
                        <span className="text-xs font-medium">Active Projects</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        {selectedProvince.activeProjects}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-amber-600 mr-1.5" />
                        <span className="text-xs font-medium">Completed</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        {selectedProvince.completedProjects}
                      </span>
                    </div>

                    <div className="p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center mb-1.5">
                        <MapPin className="w-4 h-4 text-emerald-600 mr-1.5" />
                        <span className="text-xs font-medium">Main Service Cities</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProvince.mainCities.map((city) => (
                          <span 
                            key={city}
                            className="bg-white px-2 py-0.5 rounded-full text-xs font-medium text-gray-700"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center text-sm">
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    Contact {selectedProvince.name} Team
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-base font-semibold text-gray-600 mb-1.5">
                    Select a Province
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Click on any province in the map or legend to view detailed service information 
                    for that region.
                  </p>
                  
                  <div className="bg-emerald-50 rounded-md p-3">
                    <h4 className="font-semibold text-emerald-800 text-xs mb-1.5">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-xl font-bold text-emerald-600">113</div>
                        <div className="text-emerald-700">Active Projects</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-emerald-600">895</div>
                        <div className="text-emerald-700">Total Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service Coverage Summary */}
        <div className="mt-8 bg-emerald-600 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Comprehensive Coverage Across All Service Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <Users className="w-6 h-6 text-emerald-200 mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-emerald-200 text-xs">Expert Technicians</div>
            </div>
            <div className="text-center">
              <Truck className="w-6 h-6 text-emerald-200 mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-emerald-200 text-xs">Mobile Drilling Rigs</div>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-emerald-200 mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-emerald-200 text-xs">Provinces Covered</div>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-emerald-200 mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-emerald-200 text-xs">Emergency Response</div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md text-sm">
              Request Service in Your Area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;