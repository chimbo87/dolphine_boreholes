import React from 'react';
import './TeamShowcase.css';

const TeamShowcase = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chef Michael",
      role: "Head Chef",
      bio: "With 15 years of culinary experience, Chef Michael creates unforgettable dining experiences.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Event Coordinator",
      bio: "Sarah ensures every event runs smoothly with her exceptional organizational skills.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Master Bartender",
      bio: "David crafts signature cocktails that perfectly complement our culinary creations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Pastry Chef",
      bio: "Emily's desserts are works of art that delight both the eyes and the palate.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="team-showcase">
      <div className="container">
        <h2 className="section-title">Meet Our Culinary Team</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Passionate professionals dedicated to creating exceptional dining experiences</p>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="card-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="card-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;