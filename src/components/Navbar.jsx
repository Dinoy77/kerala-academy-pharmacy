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
  const [mobileNestedOpen, setMobileNestedOpen] = useState(null);

  // Helper to scroll to top smoothly
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="site-header">
      <style>{`
        .site-header {
          font-family: system-ui, -apple-system, sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        /* TIER 1: TOP RED STRIP */
        .top-tier {
          background: linear-gradient(90deg, #8E1616 0%, #C41E1E 50%, #8E1616 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .top-tier-container {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
        }

        .navbar-links-desktop {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .top-link {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          padding: 9px 12px;
          white-space: nowrap;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .top-link:hover,
        .top-link.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.2);
        }

        .navbar-caret {
          font-size: 8px;
          opacity: 0.8;
        }

        /* Desktop Dropdowns */
        .navbar-item-dropdown {
          position: relative;
        }

        .navbar-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border: 1px solid #FEE2E2;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(196, 30, 30, 0.12);
          min-width: 220px;
          padding: 6px;
          z-index: 100;
          animation: fadeUp 0.18s ease;
        }

        .navbar-item-dropdown:hover > .navbar-dropdown {
          display: block;
        }

        .navbar-dropdown-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #2D0B0E;
          text-decoration: none;
          border-radius: 6px;
          white-space: nowrap;
          transition: all 0.15s ease;
          cursor: pointer;
        }

        .navbar-dropdown-link:hover {
          background: #FEF2F2;
          color: #C41E1E;
        }

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
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(196, 30, 30, 0.12);
          min-width: 200px;
          padding: 6px;
          margin-left: 4px;
        }

        .navbar-subitem-dropdown:hover > .navbar-subdropdown {
          display: block;
        }

        .navbar-caret-right {
          font-size: 9px;
          color: #9CA3AF;
        }

        /* TIER 2: MAIN BRAND & APPLY ROW */
                .main-tier {
          background: #ffffff;
          padding: 12px 16px;
          border-bottom: 1px solid #FEF2F2;
        }

        @media (max-width: 767px) {
          .main-tier {
            padding: 10px 12px;
          }
        }

        .main-tier-container {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

                .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 1;
          min-width: 0;
          cursor: pointer;
        }

                .navbar-logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .navbar-logo-img {
            width: 38px;
            height: 38px;
          }
        }

        .navbar-logo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C41E1E 0%, #8E1616 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
        }

               .navbar-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          min-width: 0;
        }

        .navbar-brand-title {
          font-size: 20px;
          font-weight: 800;
          color: #1A1615;
          letter-spacing: -0.01em;
        }

         @media (max-width: 480px) {
          .navbar-brand-title {
            font-size: 13px;
          }
        }

        @media (min-width: 481px) and (max-width: 767px) {
          .navbar-brand-title {
            font-size: 15px;
          }
        }

        .navbar-brand-sub {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C41E1E;
          font-weight: 700;
        }

        .navbar-brand-accent {
          color: #C41E1E;
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
        }

        .navbar-cta {
          background: linear-gradient(135deg, #C41E1E 0%, #9B1818 100%);
          color: #ffffff;
          border: none;
          border-radius: 30px;
          padding: 10px 28px;
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(196, 30, 30, 0.3);
          transition: all 0.25s ease;
        }

        .navbar-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(196, 30, 30, 0.45);
          background: linear-gradient(135deg, #D62222 0%, #B01B1B 100%);
        }

        /* MOBILE MENU TOGGLE */
        .navbar-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .navbar-toggle span {
          width: 24px;
          height: 2px;
          background: #C41E1E;
          border-radius: 2px;
          transition: all 0.25s ease;
        }

        .navbar-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .navbar-toggle.open span:nth-child(2) { opacity: 0; }
        .navbar-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-drawer {
          display: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1199px) {
          .top-tier { display: none; }
          .navbar-cta-desktop { display: none; }
          .navbar-toggle { display: flex; }

          .mobile-drawer {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            flex-direction: column;
            padding: 16px 20px 24px;
            gap: 4px;
            border-bottom: 3px solid #C41E1E;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            max-height: calc(100vh - 80px);
            overflow-y: auto;
            z-index: 1000;
          }

          .mobile-drawer.open { display: flex; }

          .mobile-link {
            font-size: 15px;
            font-weight: 600;
            color: #2D0B0E;
            text-decoration: none;
            padding: 10px 12px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
          }

          .mobile-link:hover { background: #FEF2F2; color: #C41E1E; }

          .mobile-dropdown {
            display: none;
            background: #FEF2F2;
            margin: 4px 0 6px 12px;
            padding: 6px;
            border-left: 3px solid #C41E1E;
            border-radius: 4px;
          }

          .mobile-dropdown.open { display: block; }

          .mobile-nested-dropdown {
            display: none;
            padding-left: 12px;
            margin-top: 4px;
            border-left: 2px dashed #C41E1E;
          }

          .mobile-nested-dropdown.open { display: block; }

          .mobile-cta {
            display: block;
            text-align: center;
            margin-top: 14px;
            width: 100%;
          }
        }
      `}</style>

      {/* TIER 1: TOP RED STRIP */}
      <div className="top-tier">
        <div className="top-tier-container">
          <div className="navbar-links-desktop">
            {mainLinks.map((link) =>
              link.children ? (
                <div className="navbar-item-dropdown" key={link.label}>
                  <Link
                    to={link.to}
                    className={`top-link ${location.pathname.startsWith(link.to) ? "active" : ""
                      }`}
                  >
                    {link.label}
                    <span className="navbar-caret">▾</span>
                  </Link>

                  <div className="navbar-dropdown">
                    {link.children.map((child) =>
                      child.children ? (
                        <div
                          className="navbar-subitem-dropdown"
                          key={child.label}
                        >
                          <span className="navbar-dropdown-link">
                            {child.label}
                            <span className="navbar-caret-right">▸</span>
                          </span>
                          <div className="navbar-subdropdown">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.to}
                                to={grandchild.to}
                                className="navbar-dropdown-link"
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
                  className={`top-link ${location.pathname === link.to ? "active" : ""
                    }`}
                  onClick={() => {
                    if (link.to === "/") handleHomeClick();
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* TIER 2: MAIN BAR (LOGO CLICK SCROLLS TO TOP) */}
      <div className="main-tier">
        <div className="main-tier-container">
          <Link to="/" className="navbar-brand" onClick={handleHomeClick}>
            <img
              src="/assets/images/logonew.png"
              alt="KAP Logo"
              className="navbar-logo-img"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = "flex";
                }
              }}
            />
            <span className="navbar-logo" style={{ display: "none" }}>
              KA
            </span>
            <span className="navbar-brand-text">
              <span className="navbar-brand-title">
                KERALA ACADEMY <span className="navbar-brand-accent">OF PHARMACY</span>
              </span>
            </span>
          </Link>

          <Link to="/apply" className="navbar-cta navbar-cta-desktop">
            Apply Now
          </Link>

          <button
            className={`navbar-toggle ${open ? "open" : ""}`}
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE ACCORDION DRAWER */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        {mainLinks.map((link) =>
          link.children ? (
            <div key={link.label}>
              <div
                className="mobile-link"
                onClick={() =>
                  setMobileSubOpen(
                    mobileSubOpen === link.label ? null : link.label
                  )
                }
              >
                <span>{link.label}</span>
                <span>▾</span>
              </div>
              <div
                className={`mobile-dropdown ${mobileSubOpen === link.label ? "open" : ""
                  }`}
              >
                {link.children.map((child) =>
                  child.children ? (
                    <div key={child.label}>
                      <div
                        className="navbar-dropdown-link"
                        onClick={() =>
                          setMobileNestedOpen(
                            mobileNestedOpen === child.label
                              ? null
                              : child.label
                          )
                        }
                      >
                        <span>{child.label}</span>
                        <span>▾</span>
                      </div>
                      <div
                        className={`mobile-nested-dropdown ${mobileNestedOpen === child.label ? "open" : ""
                          }`}
                      >
                        {child.children.map((grandchild) => (
                          <Link
                            key={grandchild.to}
                            to={grandchild.to}
                            className="navbar-dropdown-link"
                            onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
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
              className="mobile-link"
              onClick={() => {
                if (link.to === "/") handleHomeClick();
                else setOpen(false);
              }}
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          to="/apply"
          className="navbar-cta mobile-cta"
          onClick={() => setOpen(false)}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}