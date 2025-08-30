import React from 'react';
import './OurValues.css';
import { FaHeart, FaLeaf, FaAward, FaUsers } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      id: 1,
      title: "Passion",
      description: "We pour our hearts into every dish, creating culinary experiences that delight.",
      icon: <FaHeart className="value-icon" />
    },
    {
      id: 2,
      title: "Sustainability",
      description: "We source ingredients responsibly and minimize our environmental impact.",
      icon: <FaLeaf className="value-icon" />
    },
    {
      id: 3,
      title: "Excellence",
      description: "From preparation to presentation, we maintain the highest standards.",
      icon: <FaAward className="value-icon" />
    },
    {
      id: 4,
      title: "Teamwork",
      description: "Our collaborative approach ensures seamless events and happy clients.",
      icon: <FaUsers className="value-icon" />
    }
  ];

  return (
    <section className="our-values">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>
        <div className="divider"></div>
        <p className="section-subtitle">The principles that guide everything we do</p>
        
        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <div className="icon-container">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;