import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
