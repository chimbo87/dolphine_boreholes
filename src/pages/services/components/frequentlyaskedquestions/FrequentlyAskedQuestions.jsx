import React, { useState } from 'react';
import './FrequentlyAskedQuestions.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How far in advance should I book catering services?",
      answer: "We recommend booking at least 4-6 weeks in advance for standard events, and 3-6 months for weddings or large events during peak season. However, we'll always try to accommodate last-minute requests when possible."
    },
    {
      question: "What areas do you service?",
      answer: "We primarily serve the greater Johannesburg area, including Pretoria and surrounding regions. For events outside this area, additional travel fees may apply. Contact us to discuss your specific location needs."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! Our chefs are experienced in preparing meals for various dietary needs including vegetarian, vegan, gluten-free, halal, kosher, and other special requirements. Please inform us of any dietary restrictions when booking."
    },
    {
      question: "What is included in your staffing services?",
      answer: "Our staffing services include professional chefs, waitstaff, and bartenders. Staff are fully trained, uniformed, and include setup, service, and cleanup. We provide all necessary serving equipment unless otherwise specified."
    },
    {
      question: "How do you handle payments and cancellations?",
      answer: "We require a 50% deposit to secure your booking, with the balance due 7 days before the event. Cancellations made more than 14 days prior receive a full refund. Between 7-14 days, the deposit is forfeited. Less than 7 days requires full payment."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Find answers to common questions about our services</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;