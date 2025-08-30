import React from 'react';
import './BookingProcess.css';
import { FaCalendarAlt, FaPhoneAlt, FaClipboardCheck, FaUserCheck, FaGlassCheers } from 'react-icons/fa';

const BookingProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Discuss your event details and requirements with our team",
      icon: <FaPhoneAlt className="step-icon" />
    },
    {
      id: 2,
      title: "Service Selection",
      description: "Choose from our range of catering services and staff",
      icon: <FaClipboardCheck className="step-icon" />
    },
    {
      id: 3,
      title: "Customization",
      description: "Tailor the menu and service to your specific needs",
      icon: <FaUserCheck className="step-icon" />
    },
    {
      id: 4,
      title: "Confirmation",
      description: "Review and confirm your booking details",
      icon: <FaCalendarAlt className="step-icon" />
    },
    {
      id: 5,
      title: "Event Day",
      description: "Enjoy flawless execution of your catering services",
      icon: <FaGlassCheers className="step-icon" />
    }
  ];

  return (
    <section className="booking-process">
      <div className="container">
        <h2 className="section-title">Simple Booking Process</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Just a few easy steps to secure your catering services</p>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-container">
                {step.icon}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;