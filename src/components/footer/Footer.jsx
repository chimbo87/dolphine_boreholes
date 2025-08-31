import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Droplets, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Award,
  Shield,
  Wrench
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Service Areas', href: '#coverage' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'Borehole Drilling', href: '#drilling' },
    { name: 'Water Source Location', href: '#location' },
    { name: 'Pump Installation', href: '#pumps' },
    { name: 'Maintenance Services', href: '#maintenance' },
    { name: 'Water Quality Testing', href: '#testing' },
    { name: 'Emergency Response', href: '#emergency' }
  ];

  const certifications = [
    { name: 'Licensed Drilling Contractor', icon: Award },
    { name: 'Fully Insured Operations', icon: Shield },
    { name: 'Certified Water Technicians', icon: Wrench }
  ];

  const serviceAreas = [
    'Harare Province',
    'Manicaland Province', 
    'Mashonaland Province',
    'Midlands Province'
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-3 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 rounded-md p-1.5 mr-2">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dolphine Borehole</h3>
                <p className="text-emerald-400 text-xs">Water Solutions Expert</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Zimbabwe's trusted partner for reliable water access. With over 25 years 
              of experience, we deliver sustainable borehole solutions that transform communities 
              and businesses.
            </p>

            <div className="space-y-2">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="flex items-center text-xs text-gray-300">
                    <IconComponent className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                    {cert.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Information</h4>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <Phone className="w-4 h-4 text-emerald-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">+27 11 123 4567</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-4 h-4 text-sky-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">info@dolphines.co.zw</p>
                  <p className="text-gray-400 text-xs">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-amber-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">123 Drilling Street</p>
                  <p className="text-gray-300 text-sm">Harare, Budiriro 2001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-emerald-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium text-sm">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-400 text-xs">Emergency services 24/7</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-4">
              <h5 className="font-semibold text-gray-300 text-sm mb-2">Service Areas:</h5>
              <div className="grid grid-cols-2 gap-1.5">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    • {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-gray-300 text-sm mb-2">Follow Us:</h5>
              <div className="flex space-x-2">
                {[
                  { icon: Facebook, color: 'hover:text-blue-400' },
                  { icon: Twitter, color: 'hover:text-sky-400' },
                  { icon: Linkedin, color: 'hover:text-blue-500' },
                  { icon: Instagram, color: 'hover:text-pink-400' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-emerald-600 py-3">
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-1.5 sm:mb-0">
              <Phone className="w-4 h-4 text-emerald-200 mr-1.5" />
              <span className="text-white font-semibold text-sm">Emergency Water Services Available 24/7</span>
            </div>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-1.5 px-4 rounded-md transition-colors duration-200 text-sm">
              Call Now: +263 77 295 1768
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-1.5 md:space-y-0 md:space-x-4 mb-3 md:mb-0">
              <p className="text-gray-400 text-xs">
                © {currentYear} Dolphines. All rights reserved.
              </p>
              <div className="flex space-x-3 text-xs">
                <a href="#privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-xs">Powered by sustainable drilling practices</span>
              <div className="flex items-center">
                <Droplets className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                <span className="text-emerald-400 text-xs font-medium">Clean Water for All</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;