import React from "react";
import { FaCode, FaUserAlt, FaBell } from "react-icons/fa";
import "./services.css";
import Navbar from "./nav"; 

// Navbar Wrapper
function PermanentNavbar() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default function Services() {
  return (
    <div className="service">
      <div className="services-section">
        {/* Title */}
        <h1 className="services-title">Our Services</h1>

        {/* Service Cards */}
        <div className="services-container">
          {/* Card 1 */}
          <div className="service-card">
            <FaCode className="service-icon" />
            <h2 className="service-heading">Web Development</h2>
            <p className="service-text">
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible.
            </p>
            <button className="service-btn">Read More</button>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <FaUserAlt className="service-icon" />
            <h2 className="service-heading">UI/UX Design</h2>
            <p className="service-text">
              Creating clean, modern, and user-friendly designs that enhance user
              experience and make websites visually engaging.
            </p>
            <button className="service-btn">Read More</button>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <FaBell className="service-icon" />
            <h2 className="service-heading">App Development</h2>
            <p className="service-text">
              Developing responsive, cross-platform apps that are optimized for
              speed, usability, and functionality.
            </p>
            <button className="service-btn">Read More</button>
          </div>
        </div>

        {/* Call To Action */}
        {/* <div className="cta-section">
          <h2 className="cta-text">Let Me Get You A Beautiful Website.</h2>
          <button className="cta-btn">Hire Me</button>
        </div> */}
      </div>
    </div>
  );
}
