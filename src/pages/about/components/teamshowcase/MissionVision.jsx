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
  CheckCircle
} from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver consistent, dependable water solutions that communities and businesses can count on.',
      color: 'emerald'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Every project is designed with environmental responsibility and long-term viability in mind.',
      color: 'sky'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We prioritize community needs and work closely with local leaders to ensure effective solutions.',
      color: 'amber'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in equipment, training, and service delivery.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and ethical business practices guide us.',
      color: 'sky'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously invest in technology and techniques for more efficient drilling solutions.',
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
      },
      sky: {
        bg: 'bg-sky-50',
        icon: 'text-sky-600',
      },
      amber: {
        bg: 'bg-amber-50',
        icon: 'text-amber-600',
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Mission Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-emerald-600 rounded-full p-2 mr-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-emerald-600">
                <p className="text-base text-gray-700 leading-relaxed mb-4 font-medium">
                  "To provide reliable, sustainable water access solutions that empower communities and support growth."
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">We achieve this by:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-gray-700">Delivering 98% successful water location accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-gray-700">Using environmentally responsible drilling practices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-gray-700">Providing maintenance and support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-gray-700">Training local communities in water management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                alt="Community water access"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=600&h=400&fit=crop" 
                alt="Sustainable water future"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-sky-600 rounded-full p-2 mr-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-sky-600">
                <p className="text-base text-gray-700 leading-relaxed mb-4 font-medium">
                  "To be Africa's leading water solutions provider, where every community has access to clean water."
                </p>
                
                <div className="bg-sky-50 rounded-md p-3 text-sm">
                  <h4 className="font-semibold text-sky-800 mb-2">By 2030, we envision:</h4>
                  <ul className="space-y-1 text-sky-700">
                    <li>• 10,000+ borehole installations</li>
                    <li>• 1 million people with improved water access</li>
                    <li>• Expansion into neighboring countries</li>
                    <li>• 100% renewable energy operations</li>
                    <li>• Leading water conservation programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Core Values</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const colors = getColorClasses(value.color);
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className={`${colors.bg} rounded-full w-12 h-12 flex items-center justify-center mb-3`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitments */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Our Commitment to You
            </h2>
            <p className="text-sm text-gray-600">
              Every project comes with our comprehensive service guarantee
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-emerald-50 rounded-md border border-emerald-100"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{commitment}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-5 rounded-md transition-colors duration-200 shadow-md">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
