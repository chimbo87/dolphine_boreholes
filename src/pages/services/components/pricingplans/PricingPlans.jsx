import React from 'react';
import './PricingPlans.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "R1,500",
      period: "per staff/day",
      features: [
        { text: "Professional waitstaff", included: true },
        { text: "Standard uniform", included: true },
        { text: "Basic table service", included: true },
        { text: "Bartending services", included: false },
        { text: "Event coordination", included: false }
      ],
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "R2,800",
      period: "per staff/day",
      features: [
        { text: "Professional waitstaff", included: true },
        { text: "Premium uniform", included: true },
        { text: "Advanced table service", included: true },
        { text: "Bartending services", included: true },
        { text: "Event coordination", included: false }
      ],
      popular: true
    },
    {
      id: 3,
      name: "Elite",
      price: "R4,200",
      period: "per staff/day",
      features: [
        { text: "Professional waitstaff", included: true },
        { text: "Premium uniform", included: true },
        { text: "Advanced table service", included: true },
        { text: "Bartending services", included: true },
        { text: "Event coordination", included: true }
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing-plans">
      <div className="container">
        <h2 className="section-title">Transparent Pricing</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Flexible options to suit every event and budget</p>
        
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    {feature.included ? (
                      <FaCheck className="feature-icon included" />
                    ) : (
                      <FaTimes className="feature-icon excluded" />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <button className="plan-cta">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;