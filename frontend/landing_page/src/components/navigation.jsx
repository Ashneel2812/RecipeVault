import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'; // Relative path to the image


export const Navigation = () => {
  const navStyles = {
    backgroundColor: '#f8f9fa', // Light background color for navbar
  };

  const navbarNavStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto', // Aligns the nav items to the right
  };

  const navItemStyles = {
    marginLeft: '15px', // Space between nav items
  };

  const navLinkStyles = {
    color: '#000', // Text color for nav links
    padding: '10px 15px', // Padding around text
    textDecoration: 'none', // Remove underline from links
    fontSize : '18px'
    
  };

  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light" style={navStyles}>
      <div className="container">
        {/* <a className="navbar-brand" href="#page-top" style={{ color: '#000', padding: '10px 15px' }}>
          My Project
        </a> */}
        {/* <img className="navbar-brand" src={logo} alt="logo" style={{width:"250px"}}/> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={navbarNavStyles}>
            <li className="nav-item" style={navItemStyles}>
              <a className="nav-link" href="#about" style={navLinkStyles}>About</a>
            </li>
            <li className="nav-item" style={navItemStyles}>
              <a className="nav-link" href="#receipes" style={navLinkStyles}>Receipes</a>
            </li>
            <li className="nav-item" style={navItemStyles}>
              <a className="nav-link" href="#testimonials" style={navLinkStyles}>Testimonials</a>
            </li>
            <li className="nav-item" style={navItemStyles}>
              <a className="nav-link" href="#team" style={navLinkStyles}>Team</a>
            </li>
            <li className="nav-item" style={navItemStyles}>
              <a className="nav-link" href="#contact" style={navLinkStyles}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
