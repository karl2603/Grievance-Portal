import React, { useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Submit.css";

function Submit() {
  const [grievance, setGrievance] = useState({
    name : "",
    phoneNumber : "",
    emailAddress : "",
    district : "",
    category : "",
    desc : "",
    status : "Received",
    officer : "",
    department : ""
  })
  function handleChange(e){
    const {name, value} = e.target
    setGrievance((prev)=>({
      ...prev,
      [name] : value
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(grievance);
  }
  return (
    <>
      <Navbar />
      <div className="submitText">
        <h1 className="maintext"><strong>Submit Grievance</strong></h1>
        <p className="subtext">
          Submit your grievance with complete details. We ensure every complaint is
          <br />
          addressed with care and transparency.
        </p>
      </div>
      <div className="container" id="formContainer">
        <h2>📄 Grievance Details</h2>
        <p className="note">
          Please fill in all required fields marked with{" "}
          <span className="required-star">*</span>
        </p>

        <form id="grievanceForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="namephninput">
              <label htmlFor="name">
                Full Name <span className="required-star">*</span>
              </label>
              <input
                className="inputbox"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                value={grievance.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="namephninput">
              <label htmlFor="phone">
                Phone Number <span className="required-star">*</span>
              </label>
              <input
                className="inputbox"
                placeholder="Enter your phone number"
                type="text"
                id="phone"
                pattern="\d{10}"
                name="phoneNumber"
                value={grievance.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="email">
            Email Address <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            name="emailAddress"
            value={grievance.emailAddress}
            onChange={handleChange}
            required
          />

          <div className="row">
            <div>
              <label htmlFor="district">
                Select District <span className="required-star">*</span>
              </label>
              <select id="district" name="district" value={grievance.district} onChange={handleChange} required>
                <option value="">Select your district</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chengalpattu">Chengalpattu</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kallakurichi">Kallakurichi</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Mayiladuthurai">Mayiladuthurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukkottai">Pudukkottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Ranipet">Ranipet</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Tenkasi">Tenkasi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tirupathur">Tirupathur</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Viluppuram">Viluppuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </div>

            <div>
              <label htmlFor="category">
                Grievance Category <span className="required-star">*</span>
              </label>

              <select id="category" name="category" value={grievance.category} onChange={handleChange} required>
                <option value="">Select grievance category</option>

                <option value="Roads and Transportation">Roads and Transportation</option>
                <option value="Water Supply and Drainage">Water Supply and Drainage</option>
                <option value="Electricity and Power">Electricity and Power</option>
                <option value="Sanitation and Waste Management">Sanitation and Waste Management</option>
                <option value="Healthcare Services">Healthcare Services</option>
                <option value="Education System">Education System</option>
                <option value="Government Staff Behavior">Government Staff Behavior</option>
                <option value="Public Distribution System (PDS)">Public Distribution System (PDS)</option>
                <option value="Revenue and Land Records">Revenue and Land Records</option>
                <option value="Police Services">Police Services</option>
                <option value="Municipal Services">Municipal Services</option>
                <option value="Public Works Department">Public Works Department</option>
                <option value="Agriculture and Farmers Welfare">Agriculture and Farmers Welfare</option>
                <option value="Employment and Labor">Employment and Labor</option>
                <option value="Social Welfare Schemes">Social Welfare Schemes</option>
                <option value="Environment and Pollution">Environment and Pollution</option>
                <option value="Housing and Urban Development">Housing and Urban Development</option>
                <option value="Forest Department">Forest Department</option>
                <option value="Fire and Rescue Services">Fire and Rescue Services</option>
                <option value="Other Government Services">Other Government Services</option>
                <option value="Certificate Services">Certificate Services</option>
                <option value="Corruption Complaints">Corruption Complaints</option>
                <option value="Land Grabbing">Land Grabbing</option>
                <option value="Encroachment">Encroachment</option>
                <option value="Patta and Land Ownership Issues">Patta and Land Ownership Issues</option>
                <option value="FIR and Police Inaction">FIR and Police Inaction</option>
                <option value="Custodial Violence">Custodial Violence</option>
                <option value="Traffic Issues">Traffic Issues</option>
                <option value="Court Order Implementation">Court Order Implementation</option>
                <option value="Unauthorized Constructions">Unauthorized Constructions</option>
                <option value="Street Lighting">Street Lighting</option>
                <option value="Sewer Overflow and Blockage">Sewer Overflow and Blockage</option>
                <option value="Power Cuts or Fluctuation">Power Cuts or Fluctuation</option>
                <option value="Bribery in TANGEDCO">Bribery in TANGEDCO</option>
                <option value="Delay in School Admission">Delay in School Admission</option>
                <option value="Mid-Day Meal Issues">Mid-Day Meal Issues</option>
                <option value="Hospital Negligence">Hospital Negligence</option>
                <option value="Lack of Medicines in PHC">Lack of Medicines in PHC</option>
                <option value="Delay in Ambulance Services">Delay in Ambulance Services</option>
                <option value="Subsidy or Pension Delay">Subsidy or Pension Delay</option>
                <option value="Ration Card Issues">Ration Card Issues</option>
                <option value="Wrong Ration Shop Billing">Wrong Ration Shop Billing</option>
                <option value="Labor Exploitation">Labor Exploitation</option>
                <option value="Unemployment Allowance Delay">Unemployment Allowance Delay</option>
                <option value="Child Labor Reporting">Child Labor Reporting</option>
                <option value="SC/ST Atrocities">SC/ST Atrocities</option>
                <option value="Dowry Harassment">Dowry Harassment</option>
                <option value="Domestic Violence">Domestic Violence</option>
                <option value="Illegal Mining">Illegal Mining</option>
                <option value="Tree Cutting or Forest Encroachment">
                  Tree Cutting or Forest Encroachment
                </option>
                <option value="Noise or Industrial Pollution">Noise or Industrial Pollution</option>
                <option value="Fire Safety Complaint">Fire Safety Complaint</option>
                <option value="RTI Violation">RTI Violation</option>
                <option value="Online Portal Complaint">Online Portal Complaint</option>
                <option value="Aadhaar Related Issues">Aadhaar Related Issues</option>
                <option value="CSC/eSevai Malpractice">CSC/eSevai Malpractice</option>
                <option value="Manual Scavenging">Manual Scavenging</option>
                <option value="Gender Discrimination in Government Services">
                  Gender Discrimination in Government Services
                </option>
              </select>
            </div>
          </div>

          <label htmlFor="description">
            Describe your grievance <span className="required-star">*</span>
          </label>
          <textarea
            id="description"
            placeholder="Describe your grievance in detail..."
            name="desc"
            value={grievance.desc}
            onChange={handleChange}
            required
          />

          <div className="upload-box" id="uploadBox">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <p>Click to upload supporting image or drag and drop</p>
            <small>JPG, PNG up to 5MB</small>
            <input type="file" id="imageUpload" accept="image/png, image/jpeg" />

            <img id="previewImage" className="preview" style={{ display: "none" }} />
          </div>

          <button type="submit" className="btn">Submit Grievance</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Submit