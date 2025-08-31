import React, { useState } from 'react';
import { Calendar, Users, Award, TrendingUp, Droplets, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const CompanyStory = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const milestones = [
    {
      year: '1999',
      title: 'The Beginning',
      subtitle: 'Founded with a Vision',
      description: 'Started by water engineer Johan van Rooyen after witnessing rural communities struggling with water access during the drought of 1998.',
      details: 'What began as a one-man operation with a single drilling rig has grown into South Africa\'s most trusted borehole drilling company. Our founder\'s background in hydrogeology and passion for community service laid the foundation for our success.',
      icon: Droplets,
      color: 'emerald'
    },
    {
      year: '2005',
      title: 'Major Expansion',
      subtitle: 'Growing Our Reach',
      description: 'Expanded operations to serve four provinces and completed our 500th successful borehole project.',
      details: 'This milestone marked our transition from a local service provider to a regional leader. We invested in advanced geological surveying equipment and expanded our team to include specialized hydrogeologists and certified drilling technicians.',
      icon: MapPin,
      color: 'sky'
    },
    {
      year: '2012',
      title: 'Technology Innovation',
      subtitle: 'Advanced Equipment',
      description: 'Introduced state-of-the-art drilling technology and geological surveying equipment, improving our success rate to 95%.',
      details: 'We became one of the first companies in South Africa to implement GPS-guided drilling systems and real-time geological analysis. This investment reduced drilling time by 40% and significantly improved our water location accuracy.',
      icon: TrendingUp,
      color: 'amber'
    },
    {
      year: '2018',
      title: 'Community Impact',
      subtitle: '1000+ Projects Milestone',
      description: 'Reached 1,000 completed projects, providing water access to over 100,000 people across rural South Africa.',
      details: 'This achievement represented more than just numbers – it meant clean water for schools, hospitals, farms, and entire communities. We established our community outreach program, providing free water education and maintenance training.',
      icon: Users,
      color: 'emerald'
    },
    {
      year: '2024',
      title: 'Excellence Recognition',
      subtitle: 'Industry Leadership',
      description: 'Achieved 98% success rate and received the South African Water Industry Excellence Award for outstanding service.',
      details: 'Today, we operate 15 mobile drilling rigs across four provinces with a team of 50+ certified professionals. Our commitment to innovation, sustainability, and community service continues to drive everything we do.',
      icon: Award,
      color: 'sky'
    }
  ];

  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        accent: 'bg-emerald-600'
      },
      sky: {
        bg: 'bg-sky-100',
        text: 'text-sky-600',
        border: 'border-sky-200',
        accent: 'bg-sky-600'
      },
      amber: {
        bg: 'bg-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200',
        accent: 'bg-amber-600'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-10 bg-white px-4 md:px-8 lg:px-16"> 
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-emerald-600 rounded-full p-2 mr-3">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Our Story</h1>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            For over 25 years, we've been transforming lives through reliable water access. 
            From humble beginnings to industry leadership, our journey is defined by innovation, 
            dedication, and an unwavering commitment to serving South African communities.
          </p>
        </div>

        {/* Founding Story Highlight */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Born from Necessity, Driven by Purpose
              </h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Our founder, Johan van Rooyen, witnessed firsthand the devastating impact of the 1998 
                drought on rural communities. Families were walking kilometers for water, crops were 
                failing, and schools were closing due to lack of basic sanitation.
              </p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                With a background in hydrogeology and a determination to make a difference, Johan 
                invested his life savings in a single drilling rig and started what would become 
                South Africa's most trusted water solutions company.
              </p>
              <div className="flex items-center text-emerald-600 font-medium text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Founded: March 15, 1999
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop" 
                alt="Borehole drilling operation"
                className="rounded-lg shadow-md w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-2 left-3 text-white text-xs">
                <p className="font-semibold">Our first drilling project</p>
                <p className="opacity-90">Mpumalanga, 1999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-8">
            25 Years of Excellence
          </h2>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-sky-600 to-amber-600 rounded-full hidden md:block"></div>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const colors = getColorClasses(milestone.color);
                const isExpanded = expandedMilestone === index;
                
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute left-3 w-6 h-6 ${colors.accent} rounded-full flex items-center justify-center shadow-md hidden md:flex transform -translate-x-1/2`}>
                      <IconComponent className="w-3 h-3 text-white" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="md:ml-12 bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`${colors.bg} rounded-md p-1 mr-3 md:hidden`}>
                            <IconComponent className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className={`text-lg font-bold ${colors.text}`}>
                                {milestone.year}
                              </span>
                              <h3 className="text-base font-semibold text-gray-800">
                                {milestone.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-xs font-medium">
                              {milestone.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleMilestone(index)}
                          className={`${colors.bg} ${colors.text} p-1 rounded-md hover:opacity-80 transition-opacity duration-200`}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {isExpanded && (
                        <div className={`${colors.bg} rounded-md p-3 border-l-4 ${colors.border}`}>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {milestone.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Stats */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-6">
            Where We Stand Today
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-xl font-bold text-emerald-400 mb-1">25+</div>
              <div className="text-gray-300 text-xs">Years Experience</div>
            </div>
            <div>
              <div className="text-xl font-bold text-sky-400 mb-1">1,250+</div>
              <div className="text-gray-300 text-xs">Projects Completed</div>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-400 mb-1">98%</div>
              <div className="text-gray-300 text-xs">Success Rate</div>
            </div>
            <div>
              <div className="text-xl font-bold text-emerald-400 mb-1">150K+</div>
              <div className="text-gray-300 text-xs">People Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
