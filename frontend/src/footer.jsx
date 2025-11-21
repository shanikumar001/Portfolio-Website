// Footer.jsx
import React from 'react';
import './footer.css';
import './App.css';
import facebook from './assets/facebook.png'
import twiter from './assets/twitter.png'
import email from './assets/email.png'
import youtube from './assets/youtube.png'
import linkdin from './assets/linkdin.png'


const Footer = () => {
  return (
    <div className="footer-container">
      <h3 className="footer-heading">
        Full-Stack Web & App Developer | Blockchain Enthusiast | UI/UX Designer
        </h3>
      <p className="footer-description">
          I am a passionate Web and App Developer with expertise in building scalable digital solutions. As a Blockchain enthusiast, I explore decentralized technologies while strengthening my problem-solving skills in Data Structures and Algorithms. With a strong eye for UI/UX design, I craft user-friendly and engaging experiences.
      </p>

      <div className="footer-icons">
        <a href="#" className="footer-icon-link" aria-label="Facebook">
          <i className="fab fa-facebook-f">
            <img src={facebook}/>
          </i>
        </a>

        <a href="#" className="footer-icon-link" aria-label="Twitter">
          <i className="fab fa-twitter">
            <img src={twiter}/>
          </i>
        </a>

        <a href="#" className="footer-icon-link" aria-label="Google Plus">
          <i className="fab fa-google-plus-g">
            <img src={email}/>
          </i>
        </a>

        <a href="#" className="footer-icon-link" aria-label="YouTube">
          <i className="fab fa-youtube">
            <img src={youtube}/>
          </i>
        </a>

        <a href="#" className="footer-icon-link" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in">
            <img src={linkdin}/>
          </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
