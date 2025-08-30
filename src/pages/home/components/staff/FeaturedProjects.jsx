import React from 'react';
import { MapPin, Calendar, Droplets, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Riverside Community Water Project",
      location: "Mpumalanga Province",
      date: "March 2024",
      depth: "120m",
      yield: "15,000 L/hr",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      description: "Successfully provided clean water access to over 500 families in rural Mpumalanga through precision drilling and pump installation.",
      highlights: ["Solar-powered pumping system", "Community training provided", "3-year maintenance contract"]
    },
    {
      id: 2,
      title: "Agricultural Irrigation Borehole",
      location: "Limpopo Province",
      date: "January 2024",
      depth: "85m",
      yield: "25,000 L/hr",
      image: "https://images.unsplash.com/photo-1574923354-4e5e5e5d1e4c?w=600&h=400&fit=crop",
      description: "High-yield borehole installation for large-scale farming operations, ensuring sustainable irrigation for 200 hectares of crops.",
      highlights: ["High-efficiency pump system", "Automated irrigation controls", "Water quality testing included"]
    },
    {
      id: 3,
      title: "School Water Supply Initiative",
      location: "North West Province",
      date: "February 2024",
      depth: "95m",
      yield: "12,000 L/hr",
      image: "https://images.unsplash.com/photo-1607081692251-5f0b6b4c6bea?w=600&h=400&fit=crop",
      description: "Emergency water solution for rural school serving 800 students, completed in record time during drought conditions.",
      highlights: ["Emergency response", "Student health priority", "Local job creation"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest successful borehole drilling projects that have transformed 
            communities and businesses across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-sky-600" />
                  <span className="text-sm">{project.date}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-600">{project.depth}</div>
                    <div className="text-xs text-gray-600">Depth</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-sky-600 flex items-center justify-center">
                      <Droplets className="w-5 h-5 mr-1" />
                      {project.yield}
                    </div>
                    <div className="text-xs text-gray-600">Yield</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;