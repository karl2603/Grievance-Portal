import React from "react";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Left Section: Logo & Title */}
        <div className="navbar-brand">
          <img 
            // Using a placeholder for the TN Emblem. 
            // Replace this URL with your local file path (e.g., /assets/tn-logo.png)
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1200px-TamilNadu_Logo.svg.png" 
            alt="Government of Tamil Nadu Emblem" 
            className="navbar-logo" 
          />
          <div className="brand-text">
            <h1 className="brand-title">Grievance Redressal Portal</h1>
            <p className="brand-subtitle">Government of Tamil Nadu</p>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <ul className="navbar-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/Submit">Submit Grievance</a></li>
          <li><a href="/View">View Status</a></li>
          <li><a href="/Faq">FAQ</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>

        {/* Right Section: Language Toggles */}
        <div className="navbar-lang">
          <button className="lang-btn active">English</button>
          <button className="lang-btn">தமிழ்</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
