import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "E-Commerce Web App",
    category: "Software Development",
    description:
      "Custom-built online store with payment integration and inventory management.",
    image: "/images/ecommerce.png",
  },
  {
    title: "Company IT Infrastructure Setup",
    category: "IT Support",
    description:
      "Setup and secured network, servers, and devices for a mid-sized company.",
    image: "/images/networking.png",
  },
  {
    title: "Automated Workflow Solution",
    category: "Digital Transformation",
    description:
      "Designed and implemented automated workflows to reduce manual tasks by 70%.",
    image: "/images/automation.png",
  },
  {
    title: "Business Analytics Dashboard",
    category: "Consulting / Software Development",
    description:
      "Interactive dashboard for monitoring KPIs and business metrics in real time.",
    image: "/images/dashboard.png",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header text-center">
        <h1>Our Portfolio</h1>
        <p>
          Explore some of our recent projects where we delivered innovative
          digital solutions for businesses across various industries.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="contact-btn">
          Work with Us
        </a>
      </div>
    </section>
  );
}
