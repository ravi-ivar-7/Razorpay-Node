// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
  };

  const brandStyle = {
    color: '#fff',
    margin: 0,
  };

  const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  };

  const linkItemStyle = {
    margin: 0,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-brand">
        <h1 style={brandStyle}>MyApp</h1>
      </div>
      <ul style={linksStyle}>
        <li style={linkItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={linkItemStyle}>
          <Link to="/payment" style={linkStyle}>Payment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
