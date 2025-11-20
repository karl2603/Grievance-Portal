import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "1. What is the Tamil Nadu Grievance Redressal Portal?",
      a: "The portal allows citizens to submit complaints or concerns related to various government services, departments, and schemes in Tamil Nadu, ensuring accountability and timely resolution."
    },
    {
      q: "2. Who can file a grievance?",
      a: "Any citizen of Tamil Nadu or individual affected by a government service or issue within the state can file a grievance, including residents, students, pensioners, and more."
    },
    {
      q: "3. How do I submit a grievance?",
      a: "Click on the “Submit Grievance” page, choose your district and department, provide relevant details, attach supporting documents, and submit the form."
    },
    {
      q: "4. Can I submit grievances for any district in Tamil Nadu?",
      a: "Yes. This portal supports all 38 districts in Tamil Nadu, ensuring no region is left out."
    },
    {
      q: "5. What types of grievances can be submitted?",
      a: "You can file grievances related to electricity, water, roads, ration cards, government employees, public health, education, welfare schemes, and more."
    },
    {
      q: "6. How can I track the status of my complaint?",
      a: "After submitting your grievance, you will receive a reference ID. Enter this ID in the “View Status” section to check updates or resolution progress."
    },
    {
      q: "7. How long does it take to resolve a grievance?",
      a: "Most grievances are addressed within 7 to 30 working days depending on the department and nature of the complaint."
    },
    {
      q: "8. Can I attach documents or images with my complaint?",
      a: "Yes. You can upload relevant documents, photos, or evidence while submitting your grievance to help authorities process it faster."
    },
    {
      q: "9. Will my personal details be kept confidential?",
      a: "Yes. Your information is securely stored and only shared with authorized government departments handling your grievance."
    },
    {
      q: "10. Is there a helpline if I face technical issues with the portal?",
      a: "Yes. If you're facing issues using the site, you can contact our support team through the “Contact Us” page or email us at support@tnhelp.gov.in."
    }
  ];

  return (
    <>
    <Navbar />
      <div className="FAQmaintext">
        <h1 className="faqtext">
          <i className="fi fi-rs-interrogation"></i>
          <strong>Frequently Asked Questions</strong>
        </h1>
        <p className="faqsubtext">
          Find answers to commonly asked questions about the Tamil Nadu Grievance Portal.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.q}
              <i
                className={`faq-arrow fi ${
                  activeIndex === index ? "fi-br-angle-up" : "fi-br-angle-down"
                }`}
              ></i>
            </h3>

            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FAQ;
