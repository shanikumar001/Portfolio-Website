// App.jsx
import React, { useRef, useState } from "react";
import "./App.css";
import "./hero2.css";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shani from "./assets/shani2.jpeg"; // <-- make sure this path + filename are correct
import Slider from "react-slick";
import Hero from "./hero";
import Timeline from "./hero2";
import Services from "./services";
import Footer from "./footer";
import Project from "./project";
import ContactPage from "./contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const projectData = [
    { name: "first project", img: shani, rivew: "this is my first project." },
    { name: "second project", img: shani, rivew: "this is my second project." },
    { name: "third project", img: shani, rivew: "this is my third project." },
    { name: "fourth project", img: shani, rivew: "this is my fourth project." },
    { name: "fifth project", img: shani, rivew: "this is my fifth project." },
    { name: "sixth project", img: shani, rivew: "this is my sixth project." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <svg width="32" height="32" fill="white" opacity="0.3" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
            <text x="12" y="17" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
              S
            </text>
          </svg>
        </div>

        <ul className="nav-links">
          <li className={activeSlide === 0 ? "active" : ""} onClick={() => goToSlide(0)}>
            Home
          </li>
          <li className={activeSlide === 1 ? "active" : ""} onClick={() => goToSlide(1)}>
            Services
          </li>
          <li className={activeSlide === 2 ? "active" : ""} onClick={() => goToSlide(2)}>
            My Projects
          </li>
          {/* reviews is slide index 3 — uncomment if you add that slide */}
          <li className={activeSlide === 4 ? "active" : ""} onClick={() => goToSlide(4)}>
            Contact
          </li>
        </ul>

        <button className="btn-contact" onClick={() => alert("Successfully Connect")}>
          Contact
        </button>
      </nav>

      <div className="slide-section">
        <Slider ref={sliderRef} {...settings}>
          <div className="hero-section">
            <Hero />
          </div>

          <div className="hero-section">
            <Services />
          </div>

          <div className="hero-section">
            <Project projectData={projectData} />
          </div>

          <div className="hero-section">
            <h1>Reviews</h1>
          </div>

          <div className="hero-section">
            <ContactPage />
          </div>
        </Slider>

        <div className="slide-buttons" style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="prev-btn"
          >
            ⬅ Prev
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="next-btn"
            style={{ marginLeft: "10px" }}
          >
            Next ➡
          </button>
        </div>
      </div>

      <Timeline />

      <div className="app">
        <ContactPage />
        <main className="footer-section">
          <Footer />
        </main>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
