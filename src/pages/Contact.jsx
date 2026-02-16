import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_v6v2ouz",
        "template_0im57q7",
        formData,
        "xAPVifGqz3W4Juzxg"
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Whether you have a question, want
            to discuss a project, or need support, our team is ready to assist.
          </p>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject / Service Interested In"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>

            {submitted && (
              <p className="success-msg">Message sent successfully!</p>
            )}
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <p>📞 Phone: +255 767561157</p>
            <p>✉️ Email: bridgetechsolution111@gmail.com</p>
            <p>📍 Address: Dar es Salaam, Tanzania</p>
          </div>
        </div>
      </div>
    </section>
  );
}
