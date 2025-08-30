import React from 'react';
import { Users, Award, Clock } from 'lucide-react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=800&fit=crop" 
          alt="Professional hospitality team" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Elevating Hospitality Through Excellence</h1>
            <p>
              With over a decade of experience, we've built our reputation on delivering 
              exceptional hospitality professionals who transform ordinary events into 
              extraordinary experiences.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Users className="w-8 h-8" />
                </div>
                <div className="stat-info">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <Award className="w-8 h-8" />
                </div>
                <div className="stat-info">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Successful Events</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="stat-info">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;