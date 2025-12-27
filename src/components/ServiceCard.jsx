import React from 'react';
import { ChevronRight } from 'lucide-react';

function ServiceCard({ title, description, onClick, icon: Icon }) {
  return (
    <button onClick={onClick} className="service-card">
      <div className="service-card-icon">
        {Icon && <Icon className="icon" />}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <div className="service-card-link">
        <span>Learn more</span>
        <ChevronRight size={16} className="arrow-icon" />
      </div>
    </button>
  );
}

export default ServiceCard;
