import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Award, 
  GraduationCap, 
  Briefcase, 
  MapPin,
  Heart,
  Users,
  Wrench,
  Target,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Define the getColorClasses function
const getColorClasses = (color) => {
  switch (color) {
    case 'emerald':
      return {
        bg: 'bg-emerald-100',
        icon: 'text-emerald-600',
        accent: 'bg-emerald-600'
      };
    case 'sky':
      return {
        bg: 'bg-sky-100',
        icon: 'text-sky-600',
        accent: 'bg-sky-600'
      };
    case 'amber':
      return {
        bg: 'bg-amber-100',
        icon: 'text-amber-600',
        accent: 'bg-amber-600'
      };
    default:
      return {
        bg: 'bg-gray-100',
        icon: 'text-gray-600',
        accent: 'bg-gray-600'
      };
  }
};

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Johan van Rooyen',
      position: 'Founder & CEO',
      department: 'Executive Leadership',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      experience: '25+ Years',
      education: 'MSc Hydrogeology, University of the Witwatersrand',
      certifications: ['Professional Engineer (ECSA)', 'Water Resource Management', 'Geological Survey Specialist'],
      expertise: ['Hydrogeological Assessment', 'Water Resource Planning', 'Team Leadership'],
      bio: 'Founded BoreholePro in 1999 with a vision to solve South Africa\'s water access challenges. Johan\'s expertise in hydrogeology and passion for community development has guided the company through 25 years of growth and innovation.',
      achievements: ['1,250+ successful projects overseen', 'Water Industry Excellence Award 2024', 'Community Impact Recognition'],
      email: 'johan@boreholepro.co.za',
      phone: '+27 11 123 4567'
    },
    {
      id: 2,
      name: 'Sarah Mthembu',
      position: 'Chief Operations Officer',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b787?w=300&h=300&fit=crop&crop=face',
      experience: '18 Years',
      education: 'BSc Civil Engineering, University of Cape Town',
      certifications: ['Project Management Professional', 'Safety Management Systems', 'Environmental Impact Assessment'],
      expertise: ['Project Management', 'Quality Assurance', 'Environmental Compliance'],
      bio: 'Sarah oversees all drilling operations across our four provinces, ensuring every project meets our exacting standards for quality, safety, and environmental responsibility.',
      achievements: ['Led 500+ successful drilling projects', 'Zero safety incidents record', 'Environmental Excellence Award'],
      email: 'sarah@boreholepro.co.za',
      phone: '+27 11 123 4568'
    },
    {
      id: 3,
      name: 'Dr. Michael Nkomo',
      position: 'Head of Geological Services',
      department: 'Technical',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      experience: '22 Years',
      education: 'PhD Geology, University of Johannesburg',
      certifications: ['Professional Geologist (SAGC)', 'Advanced Geological Mapping', 'Groundwater Specialist'],
      expertise: ['Geological Survey', 'Water Table Analysis', 'Site Assessment'],
      bio: 'Dr. Nkomo leads our geological assessment team, using advanced surveying techniques to achieve our industry-leading 98% success rate in water location.',
      achievements: ['98% water location accuracy', 'Published researcher in hydrogeology', '15+ geological patents'],
      email: 'michael@boreholepro.co.za',
      phone: '+27 11 123 4569'
    },
    {
      id: 4,
      name: 'Lisa Botha',
      position: 'Customer Relations Manager',
      department: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      experience: '12 Years',
      education: 'BA Communications, Rhodes University',
      certifications: ['Customer Experience Management', 'Conflict Resolution', 'Business Communications'],
      expertise: ['Client Relations', 'Project Coordination', 'Customer Support'],
      bio: 'Lisa ensures every client receives exceptional service from initial consultation through project completion and ongoing maintenance support.',
      achievements: ['99% customer satisfaction rate', 'Customer Service Excellence Award', '1,000+ happy clients'],
      email: 'lisa@boreholepro.co.za',
      phone: '+27 11 123 4570'
    },
    {
      id: 5,
      name: 'Thabo Molefe',
      position: 'Senior Drilling Technician',
      department: 'Field Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      experience: '15 Years',
      education: 'Diploma Mechanical Engineering, TUT',
      certifications: ['Advanced Drilling Operations', 'Heavy Equipment Operation', 'Safety Management'],
      expertise: ['Drilling Operations', 'Equipment Maintenance', 'Field Safety'],
      bio: 'Thabo leads our field drilling teams with unmatched expertise in equipment operation and site safety, ensuring every project is completed efficiently and safely.',
      achievements: ['300+ successful drilling operations', 'Perfect safety record', 'Equipment innovation contributions'],
      email: 'thabo@boreholepro.co.za',
      phone: '+27 11 123 4571'
    },
    {
      id: 6,
      name: 'Jennifer Adams',
      position: 'Environmental Compliance Officer',
      department: 'Environmental',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
      experience: '10 Years',
      education: 'MSc Environmental Science, Stellenbosch University',
      certifications: ['Environmental Impact Assessment', 'Water Quality Management', 'Sustainable Development'],
      expertise: ['Environmental Assessment', 'Regulatory Compliance', 'Sustainability Planning'],
      bio: 'Jennifer ensures all our operations meet the highest environmental standards, protecting local ecosystems while delivering essential water infrastructure.',
      achievements: ['Zero environmental violations', 'Sustainability program development', 'Environmental best practices implementation'],
      email: 'jennifer@boreholepro.co.za',
      phone: '+27 11 123 4572'
    }
  ];

  const departments = [
    { name: 'Executive Leadership', count: 1, color: 'emerald', icon: Target },
    { name: 'Operations', count: 1, color: 'sky', icon: Users },
    { name: 'Technical', count: 1, color: 'amber', icon: Wrench },
    { name: 'Customer Service', count: 1, color: 'emerald', icon: Heart },
    { name: 'Field Operations', count: 1, color: 'sky', icon: Zap },
    { name: 'Environmental', count: 1, color: 'amber', icon: Shield }
  ];

  const toggleMemberDetails = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Meet Our Expert Team
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our success comes from the dedication and expertise of our talented professionals. 
            Each team member brings years of specialized experience in water resource management 
            and borehole drilling technology.
          </p>
        </div>

        {/* Department Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            Our Departments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              const colors = getColorClasses(dept.color);
              
              return (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className={`${colors.bg} rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs mb-1">{dept.name}</h3>
                  <p className="text-gray-600 text-xs">{dept.count} Expert{dept.count > 1 ? 's' : ''}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => {
            const isExpanded = expandedMember === member.id;
            const colors = getColorClasses(member.department === 'Executive Leadership' || member.department === 'Customer Service' ? 'emerald' : 
                                         member.department === 'Operations' || member.department === 'Field Operations' ? 'sky' : 'amber');
            
            return (
              <div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Profile Header */}
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-emerald-300 font-medium text-sm">{member.position}</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${colors.bg} px-2 py-1 rounded-full`}>
                      <span className={`text-xs font-medium ${colors.icon}`}>
                        {member.department}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-3 h-3 mr-1" />
                      <span className="text-xs">{member.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-1 mb-3">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <div key={index} className="bg-gray-50 rounded px-1 py-1 text-center">
                        <span className="text-xs text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleMemberDetails(member.id)}
                    className={`w-full ${colors.accent} hover:opacity-90 text-white font-medium py-1.5 px-3 rounded-md transition-all duration-200 flex items-center justify-center text-sm`}
                  >
                    {isExpanded ? 'Show Less' : 'View Full Profile'}
                    {isExpanded ? 
                      <ChevronUp className="w-3 h-3 ml-1" /> : 
                      <ChevronDown className="w-3 h-3 ml-1" />
                    }
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-3 space-y-3 border-t pt-3">
                      <div>
                        <div className="flex items-center mb-1">
                          <GraduationCap className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="font-semibold text-gray-800 text-xs">Education</span>
                        </div>
                        <p className="text-gray-600 text-xs pl-5">{member.education}</p>
                      </div>

                      <div>
                        <div className="flex items-center mb-1">
                          <Award className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="font-semibold text-gray-800 text-xs">Certifications</span>
                        </div>
                        <div className="pl-5 space-y-1">
                          {member.certifications.map((cert, index) => (
                            <div key={index} className="text-gray-600 text-xs flex items-center">
                              <div className="w-1 h-1 bg-emerald-600 rounded-full mr-1"></div>
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center mb-1">
                          <Target className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="font-semibold text-gray-800 text-xs">Key Achievements</span>
                        </div>
                        <div className="pl-5 space-y-1">
                          {member.achievements.map((achievement, index) => (
                            <div key={index} className="text-gray-600 text-xs flex items-center">
                              <div className="w-1 h-1 bg-sky-600 rounded-full mr-1"></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3 pt-1">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 text-xs"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          <span>Email</span>
                        </a>
                        <a 
                          href={`tel:${member.phone}`}
                          className="flex items-center text-sky-600 hover:text-sky-700 transition-colors duration-200 text-xs"
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Our Team by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-emerald-100 text-xs">Team Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-emerald-100 text-xs">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">25+</div>
              <div className="text-emerald-100 text-xs">Certified Specialists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">15</div>
              <div className="text-emerald-100 text-xs">Advanced Degrees</div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Join Our Growing Team</h2>
            </div>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm">
              We're always looking for passionate professionals who share our commitment 
              to providing excellent water solutions and serving South African communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-emerald-50 rounded-md">
                <GraduationCap className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Continuous Learning</h4>
                <p className="text-xs text-gray-600">Professional development and training opportunities</p>
              </div>
              
              <div className="text-center p-3 bg-sky-50 rounded-md">
                <Award className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Career Growth</h4>
                <p className="text-xs text-gray-600">Clear advancement paths and leadership opportunities</p>
              </div>
              
              <div className="text-center p-3 bg-amber-50 rounded-md">
                <Heart className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Meaningful Impact</h4>
                <p className="text-xs text-gray-600">Work that directly improves communities and lives</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 text-sm shadow-md">
                View Open Positions
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md transition-colors duration-200 text-sm">
                Submit Your CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;