import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Home.css"


function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <Navbar />
      <div className='homeContainer'>
        <div className='section1'>
          <div className='sec1Div'>
            <h1 className='header'>Your Voice. Our Duty.</h1>
            <p className='para'>Welcome to the Tamil Nadu Grievance Portal. We are committed to addressing your concerns promptly and transparently. Submit your grievance and track its resolution every step of the way.</p>
            <div className='sec1Btn'>
              <button className='submitBtn' onClick={()=>{navigate("/Submit")}}>Submit Grievance</button>
              <button className='trackBtn' onClick={()=>{navigate("/View")}}>Track Status</button>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='missionDiv'>
            <h1 className='missionHeader'>Our Mission</h1>
            <p className='missionPara'>To provide a transparent, efficient, and accessible platform for the citizens of Tamil Nadu to voice their grievances and receive timely resolutions. We believe in accountability, responsiveness, and continuous improvement in public service delivery.</p>
          </div>
          <div className='statContainer'>
            <div className='statDiv'>
              <i class="fi fi-ts-land-layer-location"></i>
              <h3 className='statHeader'>38</h3>
              <p className='statPara'>Districts Covered</p>
            </div>
             <div className='statDiv'>
              <i class="fi fi-rs-check-circle"></i>
              <h3 className='statHeader'>15,430+</h3>
              <p className='statPara'>Cases Resolved</p>
            </div>
             <div className='statDiv'>
              <i class="fi fi-rs-users"></i>
              <h3 className='statHeader'>75,344+</h3>
              <p className='statPara'>Active Users</p>
            </div>
             <div className='statDiv'>
             <i class="fi fi-rs-clock-five"></i>
              <h3 className='statHeader'>3-5 Days</h3>
              <p className='statPara'>Avg. Response Time</p>
            </div>
          </div>
        </div>
        <div className='section3'>
          <div className='sec3Head'>
            <h1 className='sec3Header'>How Can We Help?</h1>
          </div>
          <div className='sec3Container'>
            <div className='helpDiv'>
              <i class="fi fi-rs-document"></i>
              <h2 className='helpHeader'>Submit Grievance</h2>
              <p className='helpPara'>Report an issue with supporting documents. We'll assign it to the right department.</p>
              <button className='helpBtn getStarted' onClick={()=>{navigate("/Submit")}}>Get Started</button>
            </div>
             <div className='helpDiv'>
              <i class="fi fi-rs-search"></i>
              <h2 className='helpHeader'>Track Your Case</h2>
              <p className='helpPara'>Enter your grievance ID to check the current status and expected resolution time.</p>
              <button className='helpBtn getStarted' onClick={()=>{navigate("/View")}}>Track Now</button>
            </div>
             <div className='helpDiv'>
              <i class="fi fi-rs-interrogation"></i>
              <h2 className='helpHeader'>Need Help?</h2>
              <p className='helpPara'>Browse frequently asked questions or contact our support team for assistance.</p>
              <button className='helpBtn getStarted' onClick={()=>{navigate("/Faq")}}>View FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}export default Home