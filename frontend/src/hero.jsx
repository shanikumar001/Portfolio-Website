import React from 'react';
import './App.css';
import './hero2.css';
import shani from './assets/shani2.jpeg';
import Footer from './footer'
import facebook2 from './assets/facebook2.png'
import twiter2 from './assets/twitter2.png'
import gmail from './assets/gmail.png'
import youtube2 from './assets/youtube2.png'
import linkdin2 from './assets/linkdin2.png'
import instagram2 from './assets/instagram2.png'

const Hero = () => {
    return(
      <main className="hero">
        <section className="hero-text">
          <p className="welcome">WELCOME TO MY WORLD ✨</p>
          <h1>
            <span className="hi">Hi,</span>
            <span className="intro"> I'm <strong>Shani Kumar</strong></span>
          </h1>
          <h2><span className="ui-ux">WEB &amp; APP</span> <span className="designer">Developer</span></h2>
          <p className="description">
            Passionate UI/UX designer, I create intuitive and visually appealing digital
            experiences. I transform ideas into seamless designs that meet users' expectations.
          </p>

          <div className="btn-group">
            <button className="btn-projects">My Projects</button>
            <button className="btn-download">Download CV</button>
          </div>

          <div className="social-icons">
            {/* Simple placeholders for social icons */}
            <a href="#" aria-label="Instagram" className="social-icon">
              <img src={youtube2}/>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <img src={instagram2}/>
            </a>
            <a href="#" aria-label="Email" className="social-icon">
              ✉️
              </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <img src={linkdin2}/>
            </a>
          </div>
        </section>

        <section className="hero-image-frame">
          <div className="image-border">
            <img src={shani} alt="shaniKumar" className="avatar" />
          </div>
        </section>
      </main>
    )
}

export default Hero;