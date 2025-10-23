import React from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Minha App</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Sobre</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;