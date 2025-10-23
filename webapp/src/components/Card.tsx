import React from 'react';
import '../styles/card.css';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">Saiba mais</button>
    </div>
  );
};

export default Card;