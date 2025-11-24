import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/View.css";

function View() {
  return (
    <>
    <Navbar />
      <div className="ViewText">
  <h1 className="maintext"><strong>View Status</strong></h1>
  <p className="subtext">
    Enter your Reference ID to check the current status of your grievance.
  </p>
</div>

<div className="ViewContainer">
  <input
    type="text"
    className="viewinput"
    placeholder="Enter Reference ID (e.g., TN09-CZ06393416)"
  />

  <button className="ViewBtn">
    <i className="fi fi-rr-search"></i>
    <span>Search</span>
  </button>
</div>  
    </>
  )
}

export default View