import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mthembu",
      position: "Community Leader",
      company: "Riverside Village",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=80&h=80&fit=crop&crop=face",
      testimonial: "The team's expertise in borehole drilling transformed our entire community. After years of water shortages, we now have reliable access to clean water. Their professional approach and ongoing support have been exceptional.",
      project: "Community Water Project"
    },
    {
      id: 2,
      name: "Michael van der Merwe",
      position: "Farm Manager",
      company: "Greenfields Agriculture",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      testimonial: "Outstanding service from start to finish. They accurately identified the best drilling location and delivered a high-yield borehole that has revolutionized our irrigation capabilities. Highly recommended for agricultural applications.",
      project: "Agricultural Irrigation System"
    },
    {
      id: 3,
      name: "Dr. Nomsa Khumalo",
      position: "Principal",
      company: "Mafikeng Primary School",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      testimonial: "When our school faced a water crisis, this team responded immediately. They not only solved our water supply issue but also educated our students about water conservation. True professionals with a heart for community service.",
      project: "School Emergency Water Supply"
    },
    {
      id: 4,
      name: "James Mokoena",
      position: "Property Developer",
      company: "Urban Development Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      testimonial: "Exceptional geological survey and drilling services for our residential development. Their accurate water table mapping saved us significant costs and ensured reliable water supply for all 150 homes in our project.",
      project: "Residential Development Water Supply"
    },
    {
      id: 5,
      name: "Elizabeth Ndlovu",
      position: "Operations Manager",
      company: "Mountain View Lodge",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
      testimonial: "Professional, efficient, and reliable. Our lodge now has a sustainable water source that supports our eco-tourism operations. The team's commitment to environmental responsibility aligns perfectly with our values.",
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
        className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about our borehole drilling services.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl p-8 mx-4 shadow-xl">
                    <div className="flex items-start mb-6">
                      <Quote className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}
                          </p>
                          <p className="text-sm text-emerald-600 font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex mb-2">
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

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-emerald-600 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-emerald-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-emerald-100 mb-6">
              Let us help you find the perfect water solution for your needs.
            </p>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;