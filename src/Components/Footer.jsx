import React from 'react';
import "../Style/Footer.css";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footercontainer">

                    <div className="logodiv footerbox">
                        <img
                            src="Images/removelogofooter.png"
                            alt="TN Government Logo"
                            width="75px"
                            height="75px"
                        />
                        <h3>தமிழ்நாடு அரசு</h3>
                        <h3>Tamil Nadu Government</h3>
                    </div>

                    <div className="quicklinkdiv footerbox">
                        <h3 className="footerhead">Quick Links</h3>
                        <div className="quicklinks">
                            <span><a href="/Home">Home</a></span>
                            <span><a href="/Submit">Submit Grievance</a></span>
                            <span><a href="/View">View Status</a></span>
                            <span><a href="/Faq">FAQ</a></span>
                            <span><a href="/Contact">Contact Us</a></span>
                        </div>
                    </div>

                    <div className="governmentdiv footerbox">
                        <h3 className="footerhead">Government Links</h3>
                        <div className="governmentlinks">
                            <span><a href="https://www.tn.gov.in/">Tamil Nadu Govt Official Portal</a></span>
                            <span><a href="https://cmhelpline.tnega.org/portal/en/home">CM Helpline</a></span>
                            <span><a href="https://www.tnesevai.tn.gov.in/">e-Sevai</a></span>
                            <span><a href="https://tnhealth.tn.gov.in/">TN Health & Welfare Dept</a></span>
                            <span><a href="https://www.tangedco.org/en/tangedco/">TANGEDCO</a></span>
                        </div>
                    </div>

                    <div className="contactfooter footerbox">
                        <h3 className="footerhead">Contact Information</h3>

                        <div className="phnfooter footericondiv">
                            <p>
                                <i className="fi fi-sr-phone-call"></i>+91 7550196803
                            </p>
                        </div>

                        <div className="mailfooter footericondiv">
                            <p>
                                <i className="fi fi-ss-envelope"></i>grievance@tn.gov.in
                            </p>
                        </div>

                        <div className="locationfooter footericondiv">
                            <i className="fi fi-sr-marker"></i>
                            <p>
                                Rajaji Salai,
                                <br />
                                Chennai – 600 001
                            </p>
                        </div>

                        <div className="footericons">
                            <a href="https://www.instagram.com/_._karl_._/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/karlarvindraj/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.facebook.com/tnegaofficial/?locale=ta_IN"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://x.com/tnega_official?lang=mr"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div className="ccunderline"></div>

                <div className="cc">
                    <p className="cctxt">© 2025 Tamil Nadu Grievance Portal. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer