import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <svg width="32" height="32" fill="white" opacity="0.3" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
          <text
            x="12"
            y="17"
            fontSize="12"
            fill="white"
            textAnchor="middle"
            fontWeight="bold"
          >
            S
          </text>
        </svg>
      </div>
      <ul className="nav-links">
        <li className="active" onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/services')}>Services</li>
        <li onClick={() => navigate('/project')}>My Projects</li>
        <li onClick={() => navigate('/reviews')}>Reviews</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>
      <button className="btn-contact" onClick={() => alert("Successfully Connect")}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
