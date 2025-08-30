import React from 'react';
import './LocationMap.css';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

const LocationMap = () => {
  return (
    <section className="location-map">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Visit our headquarters or get in touch</p>
        
        <div className="map-container">
          <div className="map-wrapper">
            <iframe 
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.041379390716!2d28.03412331502891!3d-26.194497983441454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6e3d49e5%3A0x3a8ef6e5c0f1b5a5!2sSandton%20City!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>123 Culinary Street, Food District, Johannesburg, 2196</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+27 123 456 789</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>info@gourmetcatering.co.za</span>
            </div>
            <div className="info-item">
              <FaClock className="info-icon" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM</span>
            </div>
            
            <button className="direction-btn">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;