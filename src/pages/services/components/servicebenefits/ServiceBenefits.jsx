import React from 'react';
import './ServiceBenefits.css';
import { FaStar, FaShieldAlt, FaClock, FaUsers, FaLeaf } from 'react-icons/fa';

const ServiceBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "5-Star Rated",
      description: "Consistently top-rated catering services by our clients",
      icon: <FaStar className="benefit-icon" />
    },
    {
      id: 2,
      title: "Fully Insured",
      description: "Comprehensive coverage for your peace of mind",
      icon: <FaShieldAlt className="benefit-icon" />
    },
    {
      id: 3,
      title: "On Time, Every Time",
      description: "Punctual service guaranteed for your event",
      icon: <FaClock className="benefit-icon" />
    },
    {
      id: 4,
      title: "Trained Professionals",
      description: "Experienced staff with rigorous training",
      icon: <FaUsers className="benefit-icon" />
    },
    {
      id: 5,
      title: "Sustainable Practices",
      description: "Eco-friendly approach to catering",
      icon: <FaLeaf className="benefit-icon" />
    }
  ];

  return (
    <section className="service-benefits">
      <div className="container">
        <h2 className="section-title">Why Choose Our Services</h2>
        <div className="divider"></div>
        <p className="section-subtitle">The Gourmet Catering difference</p>
        
        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit-card">
              <div className="icon-wrapper">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;