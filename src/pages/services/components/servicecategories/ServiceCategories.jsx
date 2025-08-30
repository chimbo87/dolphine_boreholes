import React from 'react';
import './ServiceCategories.css';
import { FaUtensils, FaGlassCheers, FaUserTie, FaBirthdayCake, FaCalendarAlt } from 'react-icons/fa';

const ServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Chef Services",
      icon: <FaUtensils className="category-icon" />,
      description: "Professional chefs for all culinary needs"
    },
    {
      id: 2,
      title: "Bartending",
      icon: <FaGlassCheers className="category-icon" />,
      description: "Expert mixologists for your beverages"
    },
    {
      id: 3,
      title: "Wait Staff",
      icon: <FaUserTie className="category-icon" />,
      description: "Trained professionals for impeccable service"
    },
    {
      id: 4,
      title: "Special Events",
      icon: <FaBirthdayCake className="category-icon" />,
      description: "Complete solutions for weddings and parties"
    },
    {
      id: 5,
      title: "Corporate Catering",
      icon: <FaCalendarAlt className="category-icon" />,
      description: "Tailored services for business events"
    }
  ];

  return (
    <section className="service-categories">
      <div className="container">
        <h2 className="section-title">Our Service Categories</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Comprehensive solutions for all your catering needs</p>
        
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;