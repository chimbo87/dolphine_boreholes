import React from 'react';
import './ServiceDetails.css';
import { FaCheck, FaUtensils, FaUsers, FaClock, FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
  const services = [
    {
      id: 1,
      title: "Private Chef Experience",
      description: "Enjoy a personalized dining experience with our expert chefs who will design and prepare a custom menu in your home or venue.",
      features: [
        "Custom menu planning",
        "Grocery shopping included",
        "Meal preparation and service",
        "Kitchen clean-up"
      ],
      icon: <FaUtensils className="service-icon" />
    },
    {
      id: 2,
      title: "Event Staffing",
      description: "Professional waitstaff and bartenders to ensure your event runs smoothly with impeccable service.",
      features: [
        "Uniformed professionals",
        "Food and beverage service",
        "Table setting and clearing",
        "Custom staffing ratios"
      ],
      icon: <FaUsers className="service-icon" />
    }
  ];

  return (
    <section className="service-details">
      <div className="container">
        <h2 className="section-title">Our Signature Services</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Tailored solutions for unforgettable culinary experiences</p>
        
        <div className="services-container">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>Service Includes:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-meta">
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <span>Minimum 4 hours</span>
                </div>
                <div className="meta-item">
                  <FaStar className="meta-icon" />
                  <span>5-star rated</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;