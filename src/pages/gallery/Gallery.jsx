import React, { useState } from 'react';
import { Filter, MapPin, Calendar, Wrench, Droplets, Search, X } from 'lucide-react';
import project01 from "../.././assets/images/projectphoto01.jpg"
import project02 from "../.././assets/images/projectphoto02.jpg"
import project03 from "../.././assets/images/photo01.jpg"
import project04 from "../.././assets/images/photo02.jpg"
import project05 from "../.././assets/images/school-project.jpg"
import project06 from "../.././assets/images/community-project.jpg"
import project07 from "../.././assets/images/farm-project.jpg"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample project data with real image URLs
  const projects = [
    {
      id: 1,
      title: "Commercial Borehole - Mining Complex",
      category: "commercial",
      location: "harare",
      image: project01,
      depth: "150m",
      date: "March 2024",
      description: "High-capacity water supply for mining operations"
    },
    {
      id: 2,
      title: "Residential Water Well",
      category: "residential", 
      location: "mazowe",
      image: project02,
      depth: "80m",
      date: "February 2024",
      description: "Sustainable water solution for family home"
    },
    {
      id: 3,
      title: "Agricultural Irrigation System",
      category: "agricultural",
      location: "mazowe",
      image: project03,
      depth: "120m", 
      date: "January 2024",
      description: "Large-scale irrigation for crop farming"
    },
    {
      id: 4,
      title: "School Water Supply Project",
      category: "institutional",
      location: "rusape",
      image: project04,
      depth: "95m",
      date: "December 2023",
      description: "Clean water access for rural school"
    },
    {
      id: 5,
      title: "Industrial Water Supply",
      category: "commercial",
      location: "harare",
      image: project05,
      depth: "200m",
      date: "November 2023", 
      description: "Industrial-grade water supply system"
    },
    {
      id: 6,
      title: "Community Borehole",
      category: "community",
      location: "mazowe",
      image: project06,
      depth: "110m",
      date: "October 2023",
      description: "Community water access point"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: Filter },
    { value: 'residential', label: 'Residential', icon: Droplets },
    { value: 'commercial', label: 'Commercial', icon: Wrench },
    { value: 'agricultural', label: 'Agricultural', icon: Droplets },
    { value: 'institutional', label: 'Institutional', icon: Wrench },
    { value: 'community', label: 'Community', icon: Droplets }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'harare', label: 'Harare' },
    { value: 'mazowe', label: 'Mazowe' },
    { value: 'rusape', label: 'Rusape' },
    { value: 'marondera', label: 'Marondera' },
    { value: 'mutare', label: 'Mutare' },
    { value: 'kadoma', label: 'Kadoma' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || project.location === selectedLocation;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-25 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Project Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Explore our comprehensive portfolio of borehole drilling projects across South Africa
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-200">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h3 className="font-semibold text-gray-800 text-base">Filters</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors text-sm"
            >
              <Filter className="w-3 h-3" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>

          {/* Search Bar */}
          <div className={`mb-4 ${showFilters || 'hidden lg:block'}`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className={`space-y-4 ${showFilters || 'hidden lg:block'}`}>
            {/* Service Categories */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Service Type
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategory === category.value;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-medium transition-all text-xs ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Location
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {locations.map((location) => {
                  const isSelected = selectedLocation === location.value;
                  return (
                    <button
                      key={location.value}
                      onClick={() => setSelectedLocation(location.value)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-medium transition-all text-xs ${
                        isSelected
                          ? 'bg-sky-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-sky-50 hover:text-sky-700'
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      {location.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters & Clear */}
            {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchTerm) && (
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs text-gray-600">Active filters:</span>
                  {selectedCategory !== 'all' && (
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">
                      {categories.find(c => c.value === selectedCategory)?.label}
                    </span>
                  )}
                  {selectedLocation !== 'all' && (
                    <span className="px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded text-xs">
                      {locations.find(l => l.value === selectedLocation)?.label}
                    </span>
                  )}
                  {searchTerm && (
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-xs">
                      "{searchTerm}"
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-600 hover:text-gray-800 underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            Showing <span className="font-semibold text-emerald-600">{filteredProjects.length}</span> of {projects.length} projects
          </p>
        </div>

        {/* Image Grid/Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                index % 3 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                    project.category === 'commercial' ? 'bg-emerald-600 text-white' :
                    project.category === 'residential' ? 'bg-sky-600 text-white' :
                    project.category === 'agricultural' ? 'bg-amber-600 text-white' :
                    project.category === 'institutional' ? 'bg-gray-700 text-white' :
                    'bg-emerald-600 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-base mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-xs mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Details */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-300">
                      <div className="flex items-center gap-1">
                        <Wrench className="w-3 h-3" />
                        <span>Depth: {project.depth}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="capitalize">
                          {locations.find(l => l.value === project.location)?.label || project.location}
                        </span>
                      </div>
                    </div>

                    {/* View Project Button */}
                    <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-3 rounded-md font-medium transition-all duration-200 text-sm">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Static Info Bar (visible without hover) */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-semibold text-gray-800 text-xs mb-1 truncate">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="capitalize text-xs">
                      {locations.find(l => l.value === project.location)?.label || project.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wrench className="w-3 h-3" />
                    <span>{project.depth}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No projects found</h3>
            <p className="text-gray-500 mb-4 text-sm">
              Try adjusting your filters or search terms to find more projects.
            </p>
            <button
              onClick={clearFilters}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Button (if you want pagination) */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 shadow-md text-sm">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;