import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Leaf, 
  Users, 
  Award, 
  Shield, 
  Zap,
  CheckCircle,
  Droplets
} from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver consistent, dependable water solutions that communities and businesses can count on for years to come.',
      color: 'emerald'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Every project is designed with environmental responsibility in mind, ensuring minimal ecological impact and long-term viability.',
      color: 'sky'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We prioritize community needs and work closely with local leaders to ensure our solutions serve everyone effectively.',
      color: 'amber'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in equipment, training, and service delivery, reflected in our 98% success rate.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and ethical business practices guide every interaction with our clients.',
      color: 'sky'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously invest in cutting-edge technology and techniques to provide more efficient and effective drilling solutions.',
      color: 'amber'
    }
  ];

  const commitments = [
    'Zero environmental damage guarantee',
    'Complete project transparency',
    'Local community job creation',
    'Ongoing maintenance support',
    'Water quality assurance',
    'Emergency response availability'
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        icon: 'text-emerald-600',
        border: 'border-emerald-200',
        accent: 'bg-emerald-600'
      },
      sky: {
        bg: 'bg-sky-50',
        icon: 'text-sky-600',
        border: 'border-sky-200',
        accent: 'bg-sky-600'
      },
      amber: {
        bg: 'bg-amber-50',
        icon: 'text-amber-600',
        border: 'border-amber-200',
        accent: 'bg-amber-600'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 rounded-full p-3 mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-emerald-600">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  "To provide reliable, sustainable water access solutions that empower communities, 
                  support agricultural growth, and drive economic development across South Africa."
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">We achieve this by:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                      <span className="text-gray-700">Delivering 98% successful water location accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                      <span className="text-gray-700">Using environmentally responsible drilling practices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                      <span className="text-gray-700">Providing comprehensive maintenance and support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                      <span className="text-gray-700">Training local communities in water management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                alt="Community water access"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=600&h=400&fit=crop" 
                alt="Sustainable water future"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-sky-600 rounded-full p-3 mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-sky-600">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  "To be Africa's leading water solutions provider, where every community has 
                  access to clean, reliable water, and no one has to worry about water security."
                </p>
                
                <div className="bg-sky-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sky-800 mb-3">By 2030, we envision:</h4>
                  <ul className="space-y-2 text-sky-700">
                    <li>• 10,000+ successful borehole installations</li>
                    <li>• 1 million people with improved water access</li>
                    <li>• Expansion into neighboring African countries</li>
                    <li>• 100% renewable energy powered operations</li>
                    <li>• Industry-leading water conservation programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const colors = getColorClasses(value.color);
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`${colors.bg} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-gray-600">
              Every project comes with our comprehensive service guarantee
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{commitment}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;