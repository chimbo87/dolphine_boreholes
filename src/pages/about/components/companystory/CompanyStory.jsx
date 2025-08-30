import React from 'react';
import { Calendar, Users, TrendingUp, Heart } from 'lucide-react';
import banner01 from "../../../../assets/images/abtbanner.jpg";
import './CompanyStory.css';

const CompanyStory = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize hospitality staffing',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: '2017',
      title: '100+ Staff Network',
      description: 'Expanded our professional network across multiple cities',
      icon: <Users className="w-6 h-6" />
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched our advanced matching platform and mobile app',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: '2024',
      title: '1000+ Happy Clients',
      description: 'Serving businesses nationwide with excellence and dedication',
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="company-story section">
      <div className="container">
        <div className="story-grid">
          <div className="story-content">
            <div className="section-header-left">
              <h2>Our Story</h2>
              <p>Building Excellence, One Event at a Time</p>
            </div>
            
            <div className="story-text">
              <p>
                Founded in 2014 by hospitality veterans Sarah Mitchell and James Rodriguez, 
                our company emerged from a simple observation: the hospitality industry 
                needed a more reliable, professional approach to staffing.
              </p>
              
              <p>
                Having worked in high-end restaurants and luxury hotels for over 15 years 
                combined, they understood the critical importance of having the right people 
                in the right positions. What started as a small local operation has grown 
                into a trusted partner for businesses nationwide.
              </p>
              
              <p>
                Today, we pride ourselves on our rigorous vetting process, ongoing training 
                programs, and commitment to matching businesses with professionals who don't 
                just fill positions—they elevate experiences.
              </p>
            </div>
            
            <div className="founders-quote">
              <blockquote>
                "Every event is someone's special moment. Our job is to ensure that our 
                professionals help make those moments unforgettable."
              </blockquote>
              <cite>— Sarah Mitchell & James Rodriguez, Co-Founders</cite>
            </div>
          </div>
          
          <div className="story-image">
            <img 
              src={banner01}
              alt="Our founders and team"
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <h3>10+ Years</h3>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="timeline-section">
          <h3>Our Journey</h3>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">
                  {milestone.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;