import React, { useState } from 'react';
import { Check, Star, ArrowRight, Calculator, Phone, Shield, Clock, Award } from 'lucide-react';

const PricingInformation = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [calculatorValues, setCalculatorValues] = useState({
    depth: 50,
    diameter: 6,
    location: 'urban'
  });

  // Pricing packages
  const pricingPackages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: 'R 15,000',
      period: 'Starting from',
      description: 'Essential borehole drilling for residential properties',
      features: [
        'Site assessment included',
        'Up to 50m drilling depth',
        '4" casing installation',
        'Basic pump installation',
        'Water quality testing',
        '6-month warranty'
      ],
      popular: false,
      color: 'sky',
      savings: null
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: 'R 25,000',
      period: 'Starting from',
      description: 'Complete solution for homes and small businesses',
      features: [
        'Comprehensive site survey',
        'Up to 100m drilling depth',
        '6" casing installation',
        'Quality pump & pressure tank',
        'Electrical connections',
        'Water treatment system',
        '12-month warranty',
        'Free maintenance check'
      ],
      popular: true,
      color: 'emerald',
      savings: 'Save R 5,000'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 'R 45,000',
      period: 'Starting from',
      description: 'Advanced system for commercial and large properties',
      features: [
        'Advanced geological survey',
        'Up to 200m drilling depth',
        '8" casing installation',
        'High-capacity pump system',
        'Solar pump option',
        'Advanced filtration system',
        'Remote monitoring',
        '24-month warranty',
        'Annual maintenance plan'
      ],
      popular: false,
      color: 'amber',
      savings: 'Save R 10,000'
    }
  ];

  // Additional services pricing
  const additionalServices = [
    { name: 'Site Assessment Only', price: 'R 2,500', duration: '1-2 days' },
    { name: 'Emergency Repair Service', price: 'R 1,500', duration: 'Same day' },
    { name: 'Pump Replacement', price: 'R 8,000', duration: '1 day' },
    { name: 'Water Quality Testing', price: 'R 500', duration: '2-3 days' },
    { name: 'System Upgrade', price: 'R 12,000', duration: '2-3 days' },
    { name: 'Annual Maintenance Plan', price: 'R 3,000', duration: 'Year-round' }
  ];

  const calculateEstimate = () => {
    const basePrice = 15000;
    const depthCost = calculatorValues.depth * 200;
    const diameterMultiplier = calculatorValues.diameter === 4 ? 1 : calculatorValues.diameter === 6 ? 1.3 : 1.6;
    const locationMultiplier = calculatorValues.location === 'urban' ? 1 : calculatorValues.location === 'suburban' ? 1.1 : 1.25;
    
    return Math.round((basePrice + depthCost) * diameterMultiplier * locationMultiplier);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your needs. All prices include professional installation, 
            quality materials, and our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-4 ring-emerald-500 ring-opacity-20 scale-105' : ''
              } ${selectedPackage === pkg.id ? 'ring-2 ring-emerald-500' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 text-white px-6 py-2 rounded-b-lg text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {pkg.savings && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {pkg.savings}
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">{pkg.period}</div>
                    <div className={`text-4xl font-bold text-${pkg.color}-600`}>{pkg.price}</div>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 text-${pkg.color}-500 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg'
                      : `border-2 border-${pkg.color}-600 text-${pkg.color}-600 hover:bg-${pkg.color}-50`
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Selected Package' : 'Choose Package'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-emerald-600" />
                Price Calculator
              </h3>
              
              <div className="space-y-6">
                {/* Depth Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Drilling Depth: {calculatorValues.depth}m
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={calculatorValues.depth}
                    onChange={(e) => setCalculatorValues({...calculatorValues, depth: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${((calculatorValues.depth - 20) / 180) * 100}%, #e5e7eb ${((calculatorValues.depth - 20) / 180) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20m</span>
                    <span>200m</span>
                  </div>
                </div>

                {/* Diameter Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Casing Diameter</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[4, 6, 8].map((size) => (
                      <button
                        key={size}
                        onClick={() => setCalculatorValues({...calculatorValues, diameter: size})}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                          calculatorValues.diameter === size
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 text-gray-600 hover:border-emerald-300'
                        }`}
                      >
                        {size}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Location Type</label>
                  <select
                    value={calculatorValues.location}
                    onChange={(e) => setCalculatorValues({...calculatorValues, location: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="urban">Urban Area</option>
                    <option value="suburban">Suburban Area</option>
                    <option value="rural">Rural/Remote Area</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Calculator Result */}
            <div className="bg-gradient-to-br from-emerald-600 to-sky-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Estimated Cost</h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">R {calculateEstimate().toLocaleString()}</div>
                <div className="text-emerald-100 text-sm">Estimated total cost</div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between opacity-90">
                  <span>Base drilling cost:</span>
                  <span>R 15,000</span>
                </div>
                <div className="flex justify-between opacity-90">
                  <span>Depth ({calculatorValues.depth}m):</span>
                  <span>R {(calculatorValues.depth * 200).toLocaleString()}</span>
                </div>
                <div className="flex justify-between opacity-90">
                  <span>Diameter ({calculatorValues.diameter}"):</span>
                  <span>+{Math.round((calculatorValues.diameter === 4 ? 0 : calculatorValues.diameter === 6 ? 30 : 60))}%</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                  <span>Total Estimate:</span>
                  <span>R {calculateEstimate().toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="text-xs text-emerald-100">
                  * Estimate includes drilling, casing, basic pump installation, and testing. 
                  Final price may vary based on geological conditions.
                </p>
              </div>

              <button className="w-full bg-white text-emerald-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Request Detailed Quote
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gray-800">{service.name}</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{service.price}</div>
                    <div className="text-xs text-gray-500">{service.duration}</div>
                  </div>
                </div>
                <button className="w-full mt-4 border border-emerald-600 text-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium">
                  Add to Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Guarantee Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Payment Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Flexible Payment Options</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-800">Full Payment</div>
                  <div className="text-sm text-gray-600">Pay in full and save 5%</div>
                </div>
                <div className="text-emerald-600 font-bold">5% Off</div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-800">50/50 Split</div>
                  <div className="text-sm text-gray-600">50% deposit, 50% on completion</div>
                </div>
                <div className="text-sky-600 font-bold">Standard</div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-800">Payment Plan</div>
                  <div className="text-sm text-gray-600">Custom payment arrangements available</div>
                </div>
                <div className="text-amber-600 font-bold">Available</div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">What's Included in All Packages</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• Free initial consultation</li>
                <li>• Professional site assessment</li>
                <li>• Quality materials and equipment</li>
                <li>• Professional installation team</li>
                <li>• Post-installation testing</li>
              </ul>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Our Guarantees</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Quality Guarantee</h4>
                  <p className="text-gray-300 text-sm">All work guaranteed to meet industry standards with full warranty coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">On-Time Completion</h4>
                  <p className="text-gray-300 text-sm">Projects completed within agreed timeframes or receive compensation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Water Yield Promise</h4>
                  <p className="text-gray-300 text-sm">Guaranteed minimum water yield or we'll drill deeper at no extra cost.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-gray-300 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-emerald-100 mb-4">
                Get a personalized quote based on your specific requirements. Our experts will 
                assess your site and provide detailed pricing with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call for Quote
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                  Schedule Site Visit
                </button>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-emerald-100 text-sm mb-4">Initial Consultation</div>
                <div className="text-xs text-emerald-200">
                  No obligation • Expert advice • Site assessment included
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
            <div className="text-center">
              <div className="text-xl font-bold">15+</div>
              <div className="text-emerald-200 text-xs">Years</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">500+</div>
              <div className="text-emerald-200 text-xs">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">24/7</div>
              <div className="text-emerald-200 text-xs">Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">100%</div>
              <div className="text-emerald-200 text-xs">Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Financing Information */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
          <h4 className="font-bold text-amber-800 mb-2 flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5" />
            Financing Available
          </h4>
          <p className="text-amber-700 text-sm">
            Ask about our flexible financing options for larger projects. 
            Terms available from 6-36 months with competitive rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingInformation;