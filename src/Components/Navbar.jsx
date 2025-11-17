import React from "react";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="Images/removelogofooter.png"
          alt="TN Government Logo"
          width="65px"
          height="150px"
        />
      </div>

      <h2 className="headertext" style={{ marginLeft: "-440px" }}>
        தமிழ்நாடு அரசு
      </h2>

      <div className="nav-links">
        <a href="/Home">Home</a>
        <a href="/Submit">Submit Grievance</a>
        <a href="/View">View Status</a>
        <a href="/Faq">FAQs</a>
        <a href="/Contact" className="contact-btn">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
