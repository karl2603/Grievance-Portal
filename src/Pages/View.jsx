import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/View.css";

function View() {
  return (
    <>
    <Navbar />
      
      <div className="grievance-page-container">
        <div className="grievance-content-wrapper">
          
          {/* Header Section */}
          <div className="grievance-header">
            <h1 className="title">Track Grievance</h1>
            <p className="subtitle">Enter your grievance ID to check the current status</p>
          </div>

          {/* Main Card */}
          <div className="grievance-card">
            <form className="grievance-form" onSubmit={(e) => e.preventDefault()}>
              
              <label htmlFor="grievanceId" className="input-label">
                Grievance ID
              </label>

              <div className="input-group">
                <input
                  type="text"
                  id="grievanceId"
                  name="grievanceId"
                  className="grievance-input"
                  placeholder="Enter your Grievance ID (e.g., TN123456)"
                  autoComplete="off"
                />
                
                <button type="submit">Search</button>
              </div>

              <p className="helper-text">
                The grievance ID was sent to your email and mobile after submission
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default View