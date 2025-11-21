import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./contact.css";
// import Navbar from './App';
import { Link } from "react-router-dom";
import Navbar from './nav';


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.message.trim()) errs.message = "Message can't be empty.";
    return errs;
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    setStatus("error");
  }
};


  return (
    <>
    <div className="contact-container">
        
      <div className="contact-wrapper">
        {/* Left section */}
        <aside className="contact-info">
          <div>
            <h2>Get in touch</h2>
            <p>I’m open for new projects — send a message and I’ll reply within 1–2 business days.</p>
          </div>

          <div className="info-item">
            <FiMail />
            <div>
              <p>Email</p>
              <p>shanikumar00321@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone />
            <div>
              <p>Phone</p>
              <p>+91 6201970584</p>
            </div>
          </div>

          <div className="info-item">
            <FiMapPin />
            <div>
              <p>Location</p>
              <p>Assam, India</p>
            </div>
          </div>
        </aside>

        {/* Right section */}
        <main className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <span className="status-error">{errors.name}</span>}
            </label>

            <label>
              <span>Email</span>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <span className="status-error">{errors.email}</span>}
            </label>

            <label>
              <span>Subject</span>
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <span className="status-error">{errors.message}</span>}
            </label>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="status-message status-success">Thanks! I’ll reply soon.</p>}
            {status === "error" && <p className="status-message status-error">Something went wrong.</p>}
          </form>
        </main>
      </div>
              {/* Call To Action */}
        <div className="cta-section mb-30">
          <h2 className="cta-text">Let Me Get You A Beautiful Website.</h2>
          <a className="cta-btn">Click here ➤</a>
        </div>
    </div>
    </>
  );
}
