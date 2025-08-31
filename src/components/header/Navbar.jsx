import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Droplets } from 'lucide-react';

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

  // Custom Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
      <div className="relative">
        {/* Water droplet design */}
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Droplets className="w-6 h-6 text-white" />
        </div>
        {/* Small drill bit accent */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 leading-tight">Dolphine</span>
        <span className="text-xs text-emerald-600 font-medium leading-tight">Borehole Solutions</span>
      </div>
    </div>
  );

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
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
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
            </div>
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
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
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('/services');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate('/gallery');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Contact
              </button>
              {/* Mobile CTA Button */}
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md font-medium w-full transition-colors mt-3"
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