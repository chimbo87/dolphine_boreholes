import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+27 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@boreholepro.co.za</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={14} />
            <span>Serving Gauteng & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-emerald-600">AquaDrill</span>
              <span className="text-sky-600">Pro</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
                <ChevronDown size={16} className="ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
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

            {/* CTA Button */}
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
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
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium w-full transition-colors"
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
