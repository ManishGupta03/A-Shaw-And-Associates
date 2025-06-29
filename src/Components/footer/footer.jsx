import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./footer.css";

const FooterContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }

    // Replace these with your EmailJS service info
    const serviceID = "service_vfgujpx";
    const templateID = "template_vjxqbub";
    const userID = "KVBjROsY-k6N2a8j9";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus({ type: "success", message: "Thank you! Your message has been sent." });
        setFormData({ name: "", phone: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ type: "error", message: "Oops! Something went wrong. Please try again." });
      });
  };

  return (
    <footer className="footer-container" id="contact-section">
      <div className="footer-content">
        <h2 className="footer-heading">Get in Touch</h2>
        <p className="footer-subheading">Have questions or feedback? We'd love to hear from you!</p>
        
        <form className="contact-form" onSubmit={handleSubmit} >
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Feedback or Question *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>

          {status && (
            <p className={`status-message ${status.type === "success" ? "success" : "error"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default FooterContact;
// 3. How to set up EmailJS (quick guide):
// Go to emailjs.com, create an account.

// Add an email service (like Gmail, Outlook, etc.).

// Create an email template with variables for name, phone, email, message.

// Copy your Service ID, Template ID, and Public Key.

// Replace placeholders in the React code with these IDs:

// js
// Copy
// Edit
// const serviceID = "your_service_id"; -> service_vfgujpx
// const templateID = "your_template_id"; -> template_vjxqbub
// const userID = "your_public_key"; -> KVBjROsY-k6N2a8j9
// Add variables in your EmailJS template matching your form data keys (name, phone, email, message).

// Name -> Gmail
