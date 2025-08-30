import React from 'react';
import './SocialMedia.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="social-icon" />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram className="social-icon" />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter className="social-icon" />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin className="social-icon" />, url: '#' },
    { name: 'YouTube', icon: <FaYoutube className="social-icon" />, url: '#' }
  ];

  return (
    <section className="social-media">
      <div className="container">
        <h2 className="section-title">Connect With Us</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Follow us on social media for the latest updates and culinary inspiration</p>
        
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className="social-link"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;