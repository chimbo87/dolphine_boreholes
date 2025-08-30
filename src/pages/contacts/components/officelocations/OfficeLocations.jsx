import React from 'react';
import './OfficeLocations.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const OfficeLocations = () => {
  const locations = [
    {
      id: 1,
      city: "Johannesburg",
      address: "123 Culinary Street, Food District",
      phone: "+27 123 456 789",
      email: "jhb@gourmetcatering.co.za"
    },
    {
      id: 2,
      city: "Cape Town",
      address: "456 Seafood Avenue, Waterfront",
      phone: "+27 987 654 321",
      email: "ct@gourmetcatering.co.za"
    },
    {
      id: 3,
      city: "Durban",
      address: "789 Spice Road, Coastal Area",
      phone: "+27 456 789 123",
      email: "dbn@gourmetcatering.co.za"
    }
  ];

  return (
    <section className="office-locations">
      <div className="container">
        <h2 className="section-title">Our Office Locations</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Visit us at one of our branches across South Africa</p>
        
        <div className="locations-grid">
          {locations.map(location => (
            <div key={location.id} className="location-card">
              <div className="location-header">
                <FaMapMarkerAlt className="location-icon" />
                <h3>{location.city}</h3>
              </div>
              <div className="location-details">
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Phone:</strong> {location.phone}</p>
                <p><strong>Email:</strong> {location.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;