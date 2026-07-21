import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  {
    label: "Academics",
    to: "/pinnacle",
    children: [
      { label: "Pinnacles of KAP", to: "/pinnacle" },
      { label: "Library", to: "/library" },
    ],
  },
  {
    label: "Admission",
    to: "/bpharm",
    children: [
      {
        label: "Courses",
        children: [
          { label: "B-Pharm", to: "/bpharm" },
          { label: "D-Pharm", to: "/dpharm" },
          { label: "B-Pharm (Lateral Entry)", to: "/mpharm" },
        ],
      },
      { label: "Departments", to: "/department" },
      { label: "Online Admission Registration", to: "/online-admission" },
      { label: "Online Payment", to: "/online-payment" },
    ],
  },
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
      <style>{`
        /* ==========================================
           RED & WHITE NAVBAR STYLES
           ========================================== */
        .site-header {
          font-family: system-ui, -apple-system, sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(196, 30, 30, 0.06);
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 32px;
          background: #ffffff;
          border-bottom: 2px solid #FEE2E2;
          position: relative;
        }

        /* Brand / Logo */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .navbar-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .navbar-logo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C41E1E 0%, #8E1616 100%);
          color: #ffffff;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(196, 30, 30, 0.2);
        }

        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .navbar-brand-title {
          font-size: 16px;
          font-weight: 800;
          color: #1A1615;
          letter-spacing: -0.01em;
        }

        .navbar-brand-sub {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C41E1E;
          font-weight: 700;
        }

        /* Nav Links */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1 1 auto;
          justify-content: center;
        }

        .navbar-link {
          font-size: 13.5px;
          font-weight: 600;
          color: #4A433E;
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
          white-space: nowrap;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar-link:hover {
          color: #C41E1E;
          background: #FEF2F2;
        }

        .navbar-link.active {
          color: #C41E1E;
          background: #FEF2F2;
          font-weight: 700;
        }

        .navbar-caret {
          font-size: 9px;
          color: #9CA3AF;
          transition: transform 0.2s ease;
        }

        .navbar-item-dropdown:hover .navbar-caret {
          color: #C41E1E;
          transform: translateY(1px);
        }

        /* Dropdowns */
        .navbar-item-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .navbar-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border: 1px solid #FEE2E2;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(196, 30, 30, 0.12);
          min-width: 230px;
          padding: 8px;
          z-index: 20;
          animation: fadeUp 0.2s ease;
        }

        .navbar-item-dropdown:hover .navbar-dropdown {
          display: block;
        }

        .navbar-dropdown-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #2D0B0E;
          text-decoration: none;
          border-radius: 8px;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .navbar-dropdown-link:hover {
          background: #FEF2F2;
          color: #C41E1E;
          padding-left: 18px;
        }

        /* Sub-dropdowns */
        .navbar-subitem-dropdown {
          position: relative;
        }

        .navbar-subdropdown {
          display: none;
          position: absolute;
          top: 0;
          left: 100%;
          background: #ffffff;
          border: 1px solid #FEE2E2;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(196, 30, 30, 0.12);
          min-width: 210px;
          padding: 8px;
          margin-left: 6px;
        }

        .navbar-subitem-dropdown:hover .navbar-subdropdown {
          display: block;
        }

        .navbar-caret-right {
          font-size: 10px;
          color: #9CA3AF;
        }

        /* Primary Call To Action Button */
        .navbar-cta {
          background: linear-gradient(135deg, #C41E1E 0%, #9B1818 100%);
          color: #ffffff;
          border: none;
          border-radius: 24px;
          padding: 10px 22px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(196, 30, 30, 0.25);
          transition: all 0.25s ease;
        }

        .navbar-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(196, 30, 30, 0.4);
          background: linear-gradient(135deg, #D62222 0%, #B01B1B 100%);
        }

        /* Mobile Hamburger Toggle */
        .navbar-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .navbar-toggle:hover {
          background: #FEF2F2;
        }

        .navbar-toggle span {
          width: 22px;
          height: 2px;
          background: #C41E1E;
          border-radius: 2px;
          transition: all 0.25s ease;
        }

        .navbar-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .navbar-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .navbar-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .navbar-links {
            gap: 8px;
          }
          .navbar-link {
            font-size: 12.5px;
            padding: 6px 8px;
          }
        }

        @media (max-width: 900px) {
          .navbar {
            padding: 12px 20px;
          }

          .navbar-toggle {
            display: flex;
          }

          .navbar-cta {
            display: none; /* Hidden on tiny header, available inside drawer if preferred */
          }

          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            flex-direction: column;
            align-items: stretch;
            padding: 16px 20px 24px;
            gap: 8px;
            display: none;
            border-bottom: 2px solid #FEE2E2;
            box-shadow: 0 16px 30px rgba(0,0,0,0.08);
            z-index: 100;
          }

          .navbar-links.open {
            display: flex;
          }

          .navbar-link {
            font-size: 15px;
            padding: 10px 14px;
            width: 100%;
            justify-content: space-between;
          }

          .navbar-dropdown {
            position: static;
            box-shadow: none;
            border: none;
            background: #FEF2F2;
            display: none;
            margin: 4px 0 8px 12px;
            padding: 6px;
            border-left: 2px solid #C41E1E;
            border-radius: 4px;
          }

          .navbar-dropdown.mobile-open {
            display: block;
          }

          .navbar-item-dropdown:hover .navbar-dropdown {
            display: none;
          }

          .navbar-item-dropdown:hover .navbar-dropdown.mobile-open {
            display: block;
          }

          .navbar-subdropdown {
            position: static;
            display: block;
            box-shadow: none;
            border: none;
            background: transparent;
            padding-left: 12px;
            margin-left: 0;
          }

          .navbar-caret-right {
            transform: rotate(90deg);
          }
        }
      `}</style>

      {/* Main Nav Container */}
      <nav className="navbar">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand">
          <img
            src="/assets/images/logonew.png"
            alt="KAP Logo"
            className="navbar-logo-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <span className="navbar-logo" style={{ display: "none" }}>
            KA
          </span>
          <span className="navbar-brand-text">
            <span className="navbar-brand-title">Kerala Academy</span>
            <span className="navbar-brand-sub">of Pharmacy</span>
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggle ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation Links */}
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
                  {link.children.map((child) =>
                    child.children ? (
                      <div className="navbar-subitem-dropdown" key={child.label}>
                        <span className="navbar-dropdown-link navbar-dropdown-parent">
                          {child.label}
                          <span className="navbar-caret-right">▸</span>
                        </span>
                        <div className="navbar-subdropdown">
                          {child.children.map((grandchild) => (
                            <Link
                              key={grandchild.to}
                              to={grandchild.to}
                              className="navbar-dropdown-link"
                              onClick={() => {
                                setOpen(false);
                                setMobileSubOpen(null);
                              }}
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
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
                    )
                  )}
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

        {/* Call to Action Button */}
        <Link to="/apply" className="navbar-cta">
          Apply now
        </Link>
      </nav>
    </header>
  );
}