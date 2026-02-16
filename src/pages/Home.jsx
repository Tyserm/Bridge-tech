import React from "react";
import "./Home.css";

import bgVideo from "../assets/bgv.mp4";
import fallbackImage from "../assets/fallback.png";
import introImg from "../assets/Tech.png";

import houseImg from "../assets/house.jpg";
import networkImg from "../assets/network.jpg";
import itSupportImg from "../assets/it-support.jpg";

export default function Home() {
  return (
    <div className="home-container">
      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        className="full-bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImage}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="full-bg-gradient"></div>

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>We Build Smart Tech Solutions for Your Business</h2>
          <p>Bridge Tech Company, the best choice for your business.</p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO================= */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-content">
            <h2>Empowering Businesses with Technology</h2>
            <p>
              At <strong>Bridge Tech Solution</strong>, we help businesses
              thrive with expert tech solutions, including software
              development, IT support, consulting, and digital automation.
            </p>
            <a href="/services" className="btn-primary">
              Explore Our Services
            </a>
          </div>

          <div className="intro-image">
            <img src={introImg} alt="Tech Illustration" />
          </div>
        </div>
      </section>

      {/* ================= IMAGE SHOWCASE ================= */}
      <section className="image-showcase">
        <div className="showcase-track">
          <img src={houseImg} alt="House 360 Tours" />
          <img src={networkImg} alt="Network Projects" />
          <img src={itSupportImg} alt="IT Support" />

          {/* duplicates for seamless loop */}
          <img src={houseImg} alt="House 360 duplicate" />
          <img src={networkImg} alt="Network duplicate" />
          <img src={itSupportImg} alt="IT Support duplicate" />
        </div>
      </section>

      {/* ================= RECENT PROJECTS ================= */}
      <section className="projects-section">
        <h3>Our Recent Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src={houseImg} alt="Nyumba 360" />
            <p>Nyumba 360</p>
          </div>
          <div className="project-card">
            <img src={networkImg} alt="Food Delivery App" />
            <p>Food Delivery App</p>
          </div>
          <div className="project-card">
            <img src={itSupportImg} alt="Online Clothing Shop" />
            <p>Online Clothing Shop</p>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <WhySection />
    </div>
  );
}

/* ================= WHY SECTION ================= */
function WhySection() {
  const points = [
    "Experienced and professional team",
    "Fast and reliable support",
    "Secure and affordable solutions",
    "Modern and scalable technologies",
  ];

  const [highlightIndex, setHighlightIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % points.length);
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="why-section">
      <h3>Why Choose Bridge Tech</h3>
      <div className="why-grid">
        {points.map((point, idx) => (
          <div
            key={idx}
            className={`why-item ${highlightIndex === idx ? "highlight" : ""}`}
          >
            ✔ {point}
          </div>
        ))}
      </div>
    </section>
  );
}
