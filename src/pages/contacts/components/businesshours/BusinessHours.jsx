import React from 'react';
import './BusinessHours.css';
import { FaClock, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

const BusinessHours = () => {
  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
    { day: "Public Holidays", time: "By appointment only" }
  ];

  return (
    <section className="business-hours">
      <div className="container">
        <div className="hours-container">
          <div className="hours-content">
            <h2 className="section-title">Our Business Hours</h2>
            <div className="divider"></div>
            
            <div className="hours-list">
              {hours.map((item, index) => (
                <div key={index} className="hours-item">
                  <FaClock className="hours-icon" />
                  <div className="hours-detail">
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="notice">
              <FaExclamationTriangle className="notice-icon" />
              <p>24/7 emergency catering services available for last-minute events</p>
            </div>
          </div>
          
          <div className="calendar-container">
            <FaCalendarAlt className="calendar-icon" />
            <button className="booking-btn">Book a Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;