import React, { useState } from 'react';
import { Check, Star, Calculator, Phone, Shield, Clock, Award } from 'lucide-react';

const PricingInformation = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [calculatorValues, setCalculatorValues] = useState({
    depth: 50,
    diameter: 6,
    location: 'urban'
  });

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
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Transparent Pricing
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your needs. All prices include professional installation, quality materials, and our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Packages */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden ${
                pkg.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
              } ${selectedPackage === pkg.id ? 'ring-1 ring-emerald-500' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 text-white px-4 py-1 rounded-b text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {pkg.savings && (
                <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  {pkg.savings}
                </div>
              )}

              <div className={`p-4 ${pkg.popular ? 'pt-8' : ''}`}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{pkg.name}</h3>
                  <div className="space-y-0.5">
                    <div className="text-xs text-gray-500">{pkg.period}</div>
                    <div className={`text-2xl font-bold text-${pkg.color}-600`}>{pkg.price}</div>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <Check className={`w-4 h-4 text-${pkg.color}-500 flex-shrink-0 mt-0.5`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-2 px-4 rounded-lg font-bold text-xs transition-all ${
                    pkg.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow'
                      : `border-2 border-${pkg.color}-600 text-${pkg.color}-600 hover:bg-${pkg.color}-50`
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Selected' : 'Choose'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Calculator */}
        <div className="bg-white rounded-xl shadow p-4 mb-8">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Calculator Form */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                Price Calculator
              </h3>

              <div className="space-y-4">
                {/* Depth Slider */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Drilling Depth: {calculatorValues.depth}m
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={calculatorValues.depth}
                    onChange={(e) => setCalculatorValues({...calculatorValues, depth: parseInt(e.target.value)})}
                    className="w-full h-1 bg-gray-200 rounded-lg cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${((calculatorValues.depth - 20) / 180) * 100}%, #e5e7eb ${((calculatorValues.depth - 20) / 180) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-2xs text-gray-500 mt-1">
                    <span>20m</span>
                    <span>200m</span>
                  </div>
                </div>

                {/* Diameter Selection */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Casing Diameter</label>
                  <div className="grid grid-cols-3 gap-1">
                    {[4, 6, 8].map((size) => (
                      <button
                        key={size}
                        onClick={() => setCalculatorValues({...calculatorValues, diameter: size})}
                        className={`py-1 px-2 rounded border text-xs transition-all ${
                          calculatorValues.diameter === size
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 text-gray-600 hover:border-emerald-300'
                        }`}
                      >
                        {size}"`
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Type */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Location Type</label>
                  <select
                    value={calculatorValues.location}
                    onChange={(e) => setCalculatorValues({...calculatorValues, location: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="urban">Urban Area</option>
                    <option value="suburban">Suburban Area</option>
                    <option value="rural">Rural/Remote Area</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Calculator Result */}
            <div className="bg-gradient-to-br from-emerald-600 to-sky-600 rounded-xl p-4 text-white text-sm">
              <h3 className="text-base font-bold mb-2">Estimated Cost</h3>
              <div className="text-center mb-3">
                <div className="text-2xl font-bold mb-1">R {calculateEstimate().toLocaleString()}</div>
                <div className="text-emerald-100 text-xs">Estimated total cost</div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-1 mb-3">
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
                <div className="border-t border-white/20 pt-1 flex justify-between font-bold">
                  <span>Total Estimate:</span>
                  <span>R {calculateEstimate().toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-white/20 rounded p-2 mb-2">
                <p className="text-2xs text-emerald-100">
                  * Estimate includes drilling, casing, basic pump installation, and testing. Final price may vary.
                </p>
              </div>

              <button className="w-full bg-white text-emerald-600 py-2 px-3 rounded font-bold hover:bg-gray-100 transition-colors text-xs">
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-xl shadow p-4 mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2 text-xs">
                  <h4 className="font-bold text-gray-800">{service.name}</h4>
                  <div className="text-right">
                    <div className="text-sm font-bold text-emerald-600">{service.price}</div>
                    <div className="text-2xs text-gray-500">{service.duration}</div>
                  </div>
                </div>
                <button className="w-full mt-2 border border-emerald-600 text-emerald-600 py-1 px-2 rounded text-xs hover:bg-emerald-50 transition-colors">
                  Add to Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingInformation;
