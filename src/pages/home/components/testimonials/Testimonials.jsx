import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Tendai Moyo",
      position: "Community Leader",
      company: "Riverside Village",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=80&h=80&fit=crop&crop=face",
      testimonial: "Dolphine Boreholes transformed our village! After months of water shortages, we now have clean, reliable water. Their professionalism and support are unmatched.",
      project: "Community Water Project"
    },
    {
      id: 2,
      name: "Chipo Ncube",
      position: "Farm Manager",
      company: "Greenfields Agriculture",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      testimonial: "Thanks to Dolphine Boreholes, our irrigation system is thriving. They drilled a high-yield borehole that now supports all our crops efficiently.",
      project: "Agricultural Irrigation System"
    },
    {
      id: 3,
      name: "Tariro Chikomo",
      position: "Principal",
      company: "Mafikeng Primary School",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      testimonial: "Our school faced a water crisis, and Dolphine Boreholes stepped in immediately. Students now have clean water, and they also taught us about water conservation.",
      project: "School Emergency Water Supply"
    },
    {
      id: 4,
      name: "Kudakwashe Dube",
      position: "Property Developer",
      company: "Urban Development Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      testimonial: "Dolphine Boreholes conducted precise geological surveys for our residential project. Reliable water supply for all homes saved us significant costs.",
      project: "Residential Development Water Supply"
    },
    {
      id: 5,
      name: "Ruvimbo Zulu",
      position: "Operations Manager",
      company: "Mountain View Lodge",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
      testimonial: "Professional and efficient service from Dolphine Boreholes. Our lodge now has a sustainable water source supporting our eco-tourism operations.",
      project: "Eco-Tourism Water Solution"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-5xl mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about our borehole drilling services.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 mx-3 shadow-lg">
                    <div className="flex items-start mb-4">
                      <Quote className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {testimonial.position}
                          </p>
                          <p className="text-xs text-emerald-600 font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex mb-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-xs text-gray-500">
                          Project: {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-1.5 rounded-full shadow-md transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-1.5 rounded-full shadow-md transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-emerald-600 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>

        <div className="text-center mt-8">
          <div className="bg-emerald-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-emerald-100 text-sm mb-4">
              Let us help you find the perfect water solution for your needs.
            </p>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md text-sm">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
