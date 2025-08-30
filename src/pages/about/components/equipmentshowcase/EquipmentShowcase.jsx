import React, { useState } from 'react';
import { 
  Settings, 
  Zap, 
  Shield, 
  Gauge, 
  Wrench, 
  Calendar,
  Cpu,
  Truck,
  Target,
  MapPin,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Award
} from 'lucide-react';

const EquipmentShowcase = () => {
  const [currentEquipment, setCurrentEquipment] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipment = [
    {
      id: 1,
      name: 'Atlas Copco T4BH',
      category: 'drilling-rigs',
      type: 'Heavy-Duty Drilling Rig',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop',
      depth: '300m',
      diameter: '150-400mm',
      power: '350HP',
      year: '2023',
      features: [
        'GPS-guided positioning system',
        'Automated depth monitoring',
        'Real-time geological analysis',
        'Environmental dust control',
        'Remote operation capability'
      ],
      specs: {
        'Maximum Depth': '300 meters',
        'Drilling Speed': '15-25 m/hour',
        'Power Output': '350 HP',
        'Fuel Consumption': '25L/hour',
        'Mobility': 'Track-mounted'
      },
      description: 'Our flagship drilling rig equipped with the latest automation technology for precision drilling in challenging geological conditions.',
      advantages: ['50% faster drilling', '30% more accurate positioning', 'Reduced environmental impact']
    },
    {
      id: 2,
      name: 'Geological Survey Pro',
      category: 'survey-equipment',
      type: 'Ground Penetrating Radar System',
      image: 'https://images.unsplash.com/photo-1558618047-3f07b6ec8c89?w=800&h=500&fit=crop',
      depth: '200m',
      accuracy: '98%',
      coverage: '10km²/day',
      year: '2024',
      features: [
        '3D underground mapping',
        'Water table identification',
        'Rock formation analysis',
        'Aquifer flow detection',
        'Digital reporting system'
      ],
      specs: {
        'Detection Depth': '200 meters',
        'Accuracy Rate': '98%',
        'Coverage Area': '10 km² per day',
        'Resolution': '0.5 meter precision',
        'Data Processing': 'Real-time analysis'
      },
      description: 'Advanced geological surveying equipment that maps underground water sources with unprecedented accuracy before drilling begins.',
      advantages: ['98% water location accuracy', 'Reduced drilling attempts', 'Comprehensive site analysis']
    },
    {
      id: 3,
      name: 'HydroMax Pump Station',
      category: 'pump-systems',
      type: 'Solar-Powered Pump System',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=500&fit=crop',
      capacity: '50,000L/day',
      power: 'Solar + Backup',
      efficiency: '95%',
      year: '2023',
      features: [
        'Solar panel array with battery backup',
        'Variable speed motor control',
        'Remote monitoring capability',
        'Automatic pressure regulation',
        'Weather-resistant housing'
      ],
      specs: {
        'Daily Capacity': '50,000 liters',
        'Solar Power': '5kW array',
        'Pump Efficiency': '95%',
        'Operating Depth': '150 meters',
        'Remote Monitoring': '24/7 connectivity'
      },
      description: 'Sustainable pumping solution combining solar power with smart technology for reliable water delivery in remote locations.',
      advantages: ['Zero operating costs', 'Environmentally friendly', '24/7 operation capability']
    },
    {
      id: 4,
      name: 'DrillMaster Compact',
      category: 'drilling-rigs',
      type: 'Mobile Drilling Unit',
      image: 'https://images.unsplash.com/photo-1571978269968-bdbcc8406a6a?w=800&h=500&fit=crop',
      depth: '150m',
      diameter: '100-250mm',
      power: '180HP',
      year: '2024',
      features: [
        'Compact design for tight spaces',
        'Quick setup and breakdown',
        'Low environmental footprint',
        'Multi-terrain capability',
        'Integrated safety systems'
      ],
      specs: {
        'Maximum Depth': '150 meters',
        'Setup Time': '30 minutes',
        'Power Output': '180 HP',
        'Weight': '8 tons',
        'Access Width': '3 meters minimum'
      },
      description: 'Versatile drilling rig designed for residential and small commercial projects where space and access are limited.',
      advantages: ['Access to confined spaces', 'Faster project completion', 'Lower site disruption']
    },
    {
      id: 5,
      name: 'AquaTest Laboratory Kit',
      category: 'testing-equipment',
      type: 'Water Quality Analysis System',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop',
      tests: '25+ Parameters',
      accuracy: '99.5%',
      speed: 'Real-time',
      year: '2024',
      features: [
        'Comprehensive chemical analysis',
        'Bacterial contamination detection',
        'Heavy metal screening',
        'pH and mineral content testing',
        'Digital certification reporting'
      ],
      specs: {
        'Test Parameters': '25+ water quality metrics',
        'Analysis Time': '15 minutes average',
        'Accuracy': '99.5%',
        'Certification': 'SABS approved',
        'Portability': 'Field-ready kit'
      },
      description: 'Professional-grade water testing equipment ensuring every borehole delivers safe, clean water that meets national standards.',
      advantages: ['Immediate results', 'Comprehensive testing', 'Certified accuracy']
    },
    {
      id: 6,
      name: 'TechFlow Monitor',
      category: 'monitoring-systems',
      type: 'IoT Water Monitoring System',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      monitoring: '24/7',
      connectivity: '4G/Satellite',
      battery: '5 Years',
      year: '2024',
      features: [
        'Real-time flow monitoring',
        'Water level tracking',
        'Pump performance analysis',
        'Predictive maintenance alerts',
        'Mobile app connectivity'
      ],
      specs: {
        'Monitoring': '24/7 continuous',
        'Data Transmission': '4G/Satellite',
        'Battery Life': '5 years',
        'Sensors': 'Multi-parameter',
        'Alerts': 'Instant notifications'
      },
      description: 'Smart monitoring system that tracks borehole performance and water quality, providing instant alerts and maintenance scheduling.',
      advantages: ['Prevent system failures', 'Optimize performance', 'Remote diagnostics']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Equipment', count: equipment.length },
    { id: 'drilling-rigs', name: 'Drilling Rigs', count: 2 },
    { id: 'survey-equipment', name: 'Survey Equipment', count: 1 },
    { id: 'pump-systems', name: 'Pump Systems', count: 1 },
    { id: 'testing-equipment', name: 'Testing Equipment', count: 1 },
    { id: 'monitoring-systems', name: 'Monitoring Systems', count: 1 }
  ];

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  const nextEquipment = () => {
    setCurrentEquipment((prev) => 
      prev === filteredEquipment.length - 1 ? 0 : prev + 1
    );
  };

  const prevEquipment = () => {
    setCurrentEquipment((prev) => 
      prev === 0 ? filteredEquipment.length - 1 : prev - 1
    );
  };

  const currentItem = filteredEquipment[currentEquipment];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-emerald-600 rounded-full p-3 mr-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Modern Equipment & Technology</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge drilling equipment and advanced technology that enables us 
            to deliver precise, efficient, and environmentally responsible borehole solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentEquipment(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Main Equipment Display */}
        {currentItem && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-96 xl:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{currentItem.name}</h3>
                    <p className="text-gray-600 font-medium">{currentItem.type}</p>
                    <div className="flex items-center mt-2">
                      <Calendar className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-sm text-gray-600">Latest {currentItem.year} Model</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevEquipment}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={nextEquipment}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Details Section */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{currentItem.name}</h2>
                    <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      Latest Technology
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentItem.description}
                  </p>

                  {/* Key Advantages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Advantages:</h4>
                    <div className="space-y-2">
                      {currentItem.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Gauge className="w-5 h-5 text-sky-600 mr-2" />
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(currentItem.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white rounded border">
                        <span className="text-sm font-medium text-gray-600">{key}</span>
                        <span className="text-sm font-bold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Cpu className="w-5 h-5 text-amber-600 mr-2" />
                    Advanced Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {currentItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <Zap className="w-4 h-4 text-amber-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </button>
                  <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch in Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Equipment Grid Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Complete Equipment Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setCurrentEquipment(index)}
                className={`cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  currentEquipment === index ? 'ring-4 ring-emerald-500 ring-opacity-50' : ''
                }`}
              >
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {item.year}
                  </div>
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.type}</p>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{Object.keys(item.specs).length} Specs</span>
                    <span>{item.features.length} Features</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Technology That Sets Us Apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <Target className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">GPS Precision</h3>
              <p className="text-sm text-gray-600">Centimeter-accurate positioning for optimal borehole placement</p>
            </div>
            
            <div className="text-center p-6 bg-sky-50 rounded-xl">
              <Cpu className="w-10 h-10 text-sky-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">Machine learning algorithms for geological pattern recognition</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <Shield className="w-10 h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Safety Systems</h3>
              <p className="text-sm text-gray-600">Advanced safety protocols and automated emergency stops</p>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Remote Monitoring</h3>
              <p className="text-sm text-gray-600">Real-time equipment tracking and performance monitoring</p>
            </div>
          </div>
        </div>

        {/* Fleet Statistics */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our Equipment Fleet
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <Truck className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <div className="text-gray-300 text-sm">Mobile Drilling Rigs</div>
            </div>
            <div>
              <Settings className="w-8 h-8 text-sky-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Specialized Tools</div>
            </div>
            <div>
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300 text-sm">Equipment Uptime</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Maintenance Support</div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-300 mb-6">
              Ready to see our equipment in action? Schedule a site visit or equipment demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Schedule Equipment Demo
              </button>
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Request Technical Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;