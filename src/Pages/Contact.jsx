import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Contact.css";

function Contact() {
  const submitbutton = () => {
    const messageSent = document.querySelector(".messageSent");
    messageSent.style.display = "block";
    setTimeout(() => {
      messageSent.style.display = "none";
    }, 5000);
  };

  return (
    <>
    <Navbar />
      <div className="contactustext">
        <h1 className="maintext">
          <strong>Contact Us</strong>
        </h1>
        <p className="subtext">
          Get in touch with us for any queries, support, or feedback.
          <br />
          We are here to help you 24/7.
        </p>
      </div>

      <div className="contactpage">
        <div className="getintouch-container twocontainer">
          <h3 className="getintouchtext ContainerHeadText">Get in Touch</h3>

          <div className="addressdiv div3">
            <div className="addressicon icondiv">
              <i className="fi fi-ss-marker"></i>
            </div>
            <div className="addresscontent contentdiv">
              <h4 className="contentmaintext">Address</h4>
              <p className="contentsubtext">
                Chennai District Collector Office, Rajaji Salai,
                <br />
                George Town, Chennai - 600083
              </p>
            </div>
          </div>

          <div className="phonediv div3">
            <div className="phoneicon icondiv">
              <i className="fi fi-sr-phone-call"></i>
            </div>
            <div className="phonecontent contentdiv">
              <h4 className="contentmaintext">Phone</h4>
              <p className="contentsubtext">
                Toll-Free: 1800-425-1100,
                <br />
                Office: 044-25300300
              </p>
            </div>
          </div>

          <div className="emaildiv div3">
            <div className="emailicon icondiv">
              <i className="fi fi-ss-envelope"></i>
            </div>
            <div className="emailcontent contentdiv">
              <h4 className="contentmaintext">Email</h4>
              <p className="contentsubtext">
                arvindrajkarl@gmail.com,
                <br />
                grievance@tn.gov.in
              </p>
            </div>
          </div>

          <div className="workinghourscontainer">
            <h4 className="workinghourstext">Working Hours</h4>
            <p className="workinghourssubtext">Monday to Friday: 10:00 AM - 6:30 PM</p>
            <p className="workinghourssubtext">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="workinghourssubtext">Sunday & Government Holidays: Closed</p>
          </div>
        </div>

        <div className="contactcontainer twocontainer">
          <h3 className="sendformtext ContainerHeadText">Send Us a Message</h3>

          <div className="name-phn inputdiv">
            <div className="name">
              <h4 className="nametext">
                Full Name <span className="required-star">*</span>
              </h4>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="nameinput doubleinput"
                required
              />
            </div>

            <div className="phn">
              <h4 className="phntext">
                Phone Number <span className="required-star">*</span>
              </h4>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="phninput doubleinput"
              />
            </div>
          </div>

          <div className="email inputdiv">
            <h4 className="emailtext">
              Email Address <span className="required-star">*</span>
            </h4>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="emailinput singleinput"
            />
          </div>

          <div className="subject inputdiv">
            <h4 className="subjecttext">
              Subject <span className="required-star">*</span>
            </h4>
            <input
              type="text"
              placeholder="Enter the subject of your message"
              className="subjectinput singleinput"
            />
          </div>

          <div className="message inputdiv">
            <h4 className="messagetext">
              Message <span className="required-star">*</span>
            </h4>
            <textarea
              name="messagebox"
              className="messageinput"
              placeholder="Enter your message here..."
            ></textarea>
          </div>

          <button className="submitbtn" onClick={submitbutton}>
            <i className="fa-regular fa-paper-plane"></i>
            Send Message
          </button>
        </div>
      </div>

      <div className="messageSent">
        <span className="messageSentText">
          <i className="fi fi-ss-check-circle"></i>
          Message sent to grievance@tn.gov.in
        </span>
      </div>

      <div className="mapcontainer">
        <h3 className="maptext">
          <i className="fi fi-rs-marker"></i>
          Location
        </h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0546979002966!2d80.28985101130844!3d13.095720012090366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f45c18ac5b3%3A0x547d3a64a908e469!2sChennai%20District%20Collector%20Office!5e0!3m2!1sen!2sin!4v1753281927151!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
