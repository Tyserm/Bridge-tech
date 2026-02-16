import { Link } from "react-router-dom";
import logo from "../assets/bridge-tech-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
  <div className="header-inner">
    
    {/* Logo */}
    <div className="logo-brand">
      <img src={logo} alt="Bridge Tech" className="logo-icon" />
      <span className="brand-text">BridgeTech</span>
    </div>

    {/* Navigation */}
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
</header>

  );
}
