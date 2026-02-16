import React from "react";
import "./Services.css";
import ParticlesBg from "../components/ParticlesBg";

export default function Services() {
  return (
    <section className="services-section">
      {/* 🔹 PARTICLES BACKGROUND */}
      <ParticlesBg />

      {/* 🔹 CONTENT ABOVE PARTICLES */}
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            We deliver reliable, scalable, and innovative digital solutions
            designed to help your business grow.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-item">
            <h3>Software and Digital Systems Development</h3>
            <p>
              We build custom software and digital solutions tailored to your
              business needs, including web applications, mobile apps, and
              enterprise systems.
            </p>
          </div>

          <div className="service-item">
            <h3>IT Support and Infrastructure Services</h3>
            <p>
              Reliable IT support and infrastructure services to keep your
              business systems running smoothly with minimal downtime.
            </p>
          </div>

          <div className="service-item">
            <h3>Technology Consulting and Advisory</h3>
            <p>
              Expert advice on digital strategies, IT planning, and technology
              adoption to help your business grow efficiently.
            </p>
          </div>

          <div className="service-item">
            <h3>Digital Transformation and Automation Solutions</h3>
            <p>
              Transform your business processes with automation and modern
              digital solutions that save time, reduce errors, and improve
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
