import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/dolphine-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // WhatsApp functionality
  const handleWhatsAppClick = () => {
    const phoneNumber = "+27677366141";
    const message = "Hello Dolphine Boreholes, i want to enquire about your services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-emerald-600 text-white py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={12} />
              <span>+27 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={12} />
              <span>info@boreholepro.co.za</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={12} />
            <span>Serving Gauteng & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src={logo}
              alt="Dolphine Logo"
              className="h-8 w-auto sm:h-9 md:h-10" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Services
                <ChevronDown size={14} className="ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <button
                    onClick={() => navigate('/services')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  >
                    Borehole Drilling
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  >
                    Water Siting & Surveying
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  >
                    Pump Installation
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  >
                    Maintenance & Repair
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/gallery')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Contact
            </button>

            {/* CTA Button - Updated with WhatsApp functionality */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-1.5 rounded-md font-medium transition-colors"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  navigate('/');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('/services');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate('/gallery');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Contact
              </button>
              {/* Mobile CTA Button - Updated with WhatsApp functionality */}
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-1.5 rounded-md font-medium w-full transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;