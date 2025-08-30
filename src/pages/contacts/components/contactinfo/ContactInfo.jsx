import React from 'react';
import './ContactInfo.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="icon-container">
              <FaPhone className="icon" />
            </div>
            <h3>Phone</h3>
            <p>+27 123 456 789</p>
            <p>Emergency: +27 987 654 321</p>
          </div>
          
          <div className="info-card">
            <div className="icon-container">
              <FaEnvelope className="icon" />
            </div>
            <h3>Email</h3>
            <p>info@gourmetcatering.co.za</p>
            <p>bookings@gourmetcatering.co.za</p>
          </div>
          
          <div className="info-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Address</h3>
            <p>123 Culinary Street</p>
            <p>Food District, Johannesburg, 2196</p>
          </div>
          
          <div className="info-card">
            <div className="icon-container">
              <FaClock className="icon" />
            </div>
            <h3>Hours</h3>
            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;