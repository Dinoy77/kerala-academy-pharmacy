import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const utilityLinks = [
  { label: "Campus", to: "/campus" },
  { label: "Contact", to: "/contact" },
  { label: "Career", to: "/career" },
  { label: "FAQ", to: "/faq" },
];

const travelInfoHref =
  "https://kap.ac.in/assets/images/travel%20information.pdf";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Why KAP", to: "/why-kap" },
  { label: "Academics", to: "/academics" },
  { label: "Admission", to: "/admission" },
  { label: "Approval", to: "/approval" },
  { label: "Events", to: "/events" },
  { label: "Blogs", to: "/blogs" },
  { label: "Information Center", to: "/information-center" },
  { label: "Placements", to: "/placements" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="navbar-utility">
        <div className="navbar-utility-links">
          {utilityLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <a href={travelInfoHref} target="_blank" rel="noreferrer">
            Travel Information
          </a>
        </div>
        <div className="navbar-helpline">Helpline: +91-8951220590</div>
      </div>

      {/* Main nav */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">KA</span>
          <span className="navbar-brand-text">
            <span className="navbar-brand-title">Kerala Academy</span>
            <span className="navbar-brand-sub">of Pharmacy</span>
          </span>
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`navbar-link ${
                location.pathname === link.to ? "active" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/apply" className="navbar-cta">
          Apply now
        </Link>
      </nav>
    </header>
  );
}