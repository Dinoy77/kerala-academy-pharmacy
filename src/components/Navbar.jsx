import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const utilityLinks = [
  { label: "Campus", to: "/campus" },
  { label: "Contact", to: "/contact" },
  { label: "Career", to: "/career" },
  { label: "FAQ", to: "/faq" },
  { label: "Travel Information", to: "/travel-information" },
];

const mainLinks = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Message from Chairman", to: "/about/chairman" },
      { label: "Principal's Message", to: "/about/principal" },
      { label: "Vision and Mission", to: "/about/vision-mission" },
    ],
  },
  {
    label: "Why KAP",
    to: "/pharmacy",
    children: [
      { label: "Pharmacy", to: "/pharmacy" },
      { label: "Career Openings", to: "/career" },
    ],
  },
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
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

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
          {mainLinks.map((link) =>
            link.children ? (
              <div className="navbar-item-dropdown" key={link.label}>
                <Link
                  to={link.to}
                  className={`navbar-link ${
                    location.pathname.startsWith(link.to) ? "active" : ""
                  }`}
                  onClick={(e) => {
                    if (open) {
                      // On mobile, tap toggles the submenu instead of navigating away
                      e.preventDefault();
                      setMobileSubOpen(
                        mobileSubOpen === link.label ? null : link.label
                      );
                    } else {
                      setOpen(false);
                    }
                  }}
                >
                  {link.label}
                  <span className="navbar-caret">▾</span>
                </Link>
                <div
                  className={`navbar-dropdown ${
                    mobileSubOpen === link.label ? "mobile-open" : ""
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="navbar-dropdown-link"
                      onClick={() => {
                        setOpen(false);
                        setMobileSubOpen(null);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
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
            )
          )}
        </div>

        <Link to="/apply" className="navbar-cta">
          Apply now
        </Link>
      </nav>
    </header>
  );
}