// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #00c6ff, #0072ff, #c471ed, #f64f59)',
    padding: '1rem',
    flexWrap: 'wrap',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const brandStyle = {
    color: '#fff',
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  };

  const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const linkItemStyle = {
    margin: 0,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#fff',
    color: '#0072ff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0072ff',
    color: '#fff',
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-brand">
        <h1 style={brandStyle}>Raz-Pay</h1>
      </div>
      <div style={linksContainerStyle}>
        <ul style={linksStyle}>
          <li style={linkItemStyle}>
            <Link
              to="/"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Home
            </Link>
          </li>
          <li style={linkItemStyle}>
            <Link
              to="/payment"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Payment
            </Link>
          </li>
        </ul>
      </div>
      {/* <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.color = buttonHoverStyle.color;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.color = buttonStyle.color;
        }}
      >
        Sign Up
      </button> */}
    </nav>
  );
};

export default Navbar;
