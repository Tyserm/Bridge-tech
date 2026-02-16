import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import IanImg from "../assets/IAN.png";
import TheresiaImg from "../assets/Theresia.png";
import "./About.css";
import BgImage from "../assets/about-bg.png";


const topValues = [
  {
    title: "Mission",
    description:
      "To provide innovative digital solutions that help organizations operate efficiently, communicate effectively, and achieve higher performance through professionalism, creativity, and continuous improvement",
  },
  {
    title: "Vision",
    description:
      "To become a leading and trusted technology partner recognized for delivering high-impact digital solutions that empower organizations, drive innovation, and accelerate sustainable growth in our markets and beyond.",
  },
];

const bottomValues = [
  { icon: "🚀", title: "Fast", description: "Efficient solutions built with performance in mind." },
  { icon: "🔒", title: "Secure", description: "We prioritize data protection and system reliability." },
  { icon: "🛡️", title: "Integrity", description: "Honest communication and responsible delivery." },
  { icon: "🏆", title: "Quality", description: "Focused on clean, maintainable, and scalable systems." },
  { icon: "💡", title: "Innovation", description: "Continuously improving through learning and experimentation." },
];

const teamMembers = [
  { name: "Ian Onesmo", role: "CEO", img: IanImg },
  { name: "Theresia Minga", role: "CTO", img: TheresiaImg },
  { name: "Jackson Okaka", role: "Lead Developer", img: "" }, 
  { name: "Hafsa John", role: "Product Designer", img: "" },
];

const stats = [
  { label: "Projects Delivered", value: 10 },
  { label: "Ongoing Projects", value: 4 },
  { label: "Core Team Members", value: 5 },
  { label: "Years of Experience", value: 2 },
];


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  const tickerControls = useAnimationControls();
  const tickerDuration = 30; // duration for one full scroll

  const introTitle = "What is Bridge Tech Solution?";
  const introText =
    "Bridge Tech Solution is a technology-driven company dedicated to providing innovative digital solutions that help organizations operate more efficiently, communicate better, and achieve higher levels of performance. Our work is rooted in professionalism, innovation, and the continuous pursuit of smarter and more effective ways of doing business.";

  const titleWords = introTitle.split(" ");
  const introWords = introText.split(" ");


  const tickerRef = React.useRef(null);

  const startTicker = () => {
    if (!tickerRef.current) return;

    const totalWidth = tickerRef.current.scrollWidth / 2; // half of the total duplicated width

    tickerControls.start({
      x: [0, -totalWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: tickerDuration,
        ease: "linear",
      },
    });
  };

  React.useEffect(() => {
    startTicker();
  }, []);

  return (
    <div className="about-section">

      {/* ===== HERO SECTION ===== */}
      <motion.section
        className="about-hero"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
      >
        <div className="about-hero-inner">
          <div className="hero-text">
            <h1 className="intro-title">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.12 } }}
                  className="word"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="intro-text">
              {introWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.03 } }}
                  className="word"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </motion.section>

      {/* ===== MISSION & VISION ===== */}
      <motion.div
        className="cards-container top-row modern-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {topValues.map((value, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            className="card mission-card"
          >
            <h3 className="card-title">{value.title}</h3>
            <p className="card-desc">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== CORE VALUES*/}
      <h2 className="section-title modern-section-title">Our Core Values</h2>
      <div className="core-values-ticker-wrapper" style={{ overflow: "hidden" }}>
        <motion.div
          className="core-values-ticker"
          ref={tickerRef}
          animate={tickerControls}
          onHoverStart={() => tickerControls.stop()}
          onHoverEnd={() => startTicker()}
          style={{ display: "flex", whiteSpace: "nowrap", gap: "2rem" }}
        >
          {/* Duplicate content 2x for seamless infinite scroll */}
          {[...bottomValues, ...bottomValues].map((value, index) => (
            <motion.div
              key={index}
              className="core-value-card"
              whileHover={{ y: -6, scale: 1.03 }}
              style={{ flex: "0 0 auto" }}
            >
              <div className="card-icon">{value.icon}</div>
              <h4 className="card-title">{value.title}</h4>
              <p className="card-desc">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== TEAM ===== */}
      <h2 className="section-title modern-section-title">Meet Our Team</h2>
      <div className="team-grid modern-team">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.03 }}
            className="team-card"
          >
            <img src={member.img} alt={member.name} className="team-img" />
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== STATS ===== */}
      <h2 className="section-title modern-section-title">Our Progress</h2>
      <div className="stats-grid modern-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stat-card modern-stat-card"
          >
            <h3 className="stat-value">
              {stat.label === "Years of Experience" ? stat.value : `${stat.value}+`}
            </h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="cta-section modern-cta">
        <motion.button whileHover={{ scale: 1.05 }} className="cta-button modern-cta-button">
          Work With Us
        </motion.button>
      </div>

    </div>
  );
}
