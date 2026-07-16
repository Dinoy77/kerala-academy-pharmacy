import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width < 768;
}

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/kerala.academy.of.pharmacy.trivandrum/" },
  { label: "Instagram", href: "https://www.instagram.com/keralaacdemyofpharmacy/" },
  { label: "YouTube", href: "https://www.youtube.com/@keralaacademyofpharmacy585" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kerala-academy-of-pharmacy-trivandrum/" },
];

const linksColumn = [
  { label: "B Pharmacy", to: "/b-pharm" },
  { label: "D Pharmacy", to: "/d-pharm" },
  { label: "B Pharm (Lateral Entry)", to: "/b-pharm-lateral-entry" },
  { label: "Fee Structure", to: "/fee-structure" },
  { label: "Achievements", to: "/achievements" },
];

const exploreColumn = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Alumni", to: "/alumni" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Faculty & Staff", to: "/faculty" },
  { label: "Affidavit", to: "/affidavit" },
  { label: "Department-wise Faculty Groups", to: "/departments" },
];

export default function Footer() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <footer style={styles.footer}>
      <style>{`
        .footer-link:hover { color: #f8ecc9 !important; }
        .footer-social:hover { background: #c9a227 !important; color: #2a0e11 !important; }
        .footer-cta-btn:hover { background: #e0b830 !important; }
      `}</style>
      <div style={styles.ctaStrip}>
        <div style={styles.ctaStripInner}>
          <div>
            <h2 style={styles.ctaHeading}>Ready to begin your journey?</h2>
            <p style={styles.ctaSub}>Admissions for 2026 are now open.</p>
          </div>
          <Link to="/apply" style={styles.ctaButton} className="footer-cta-btn">Apply Now</Link>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Logo + social */}
        <div style={styles.logoSection}>
          <div style={styles.logoRow}>
            <div style={styles.logoCircle}>KA</div>
            <div>
              <div style={styles.logoTitle}>Kerala Academy</div>
              <div style={styles.logoSub}>of Pharmacy</div>
            </div>
          </div>
          <div style={styles.socialRow}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                className="footer-social"
                aria-label={s.label}
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 style={styles.heading}>Links</h3>
          <ul style={styles.list}>
            {linksColumn.map((l) => (
              <li key={l.label} style={styles.listItem}>
                <Link to={l.to} style={styles.link} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 style={styles.heading}>Explore</h3>
          <ul style={styles.list}>
            {exploreColumn.map((l) => (
              <li key={l.label} style={styles.listItem}>
                <Link to={l.to} style={styles.link} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.heading}>Get in Touch</h3>
          <p style={styles.contactLine}>
            Kerala Academy of Pharmacy<br />
            Kandala, Near Kattakada<br />
            Trivandrum, Kerala – 695512
          </p>
          <p style={styles.contactLine}>info@kap.ac.in</p>
          <p style={styles.contactLine}>+91-8951220590</p>
          <p style={styles.contactLine}>+91-7736952425</p>
          <p style={styles.contactLine}>
            +91-9567508816
            <br />
            <span style={styles.contactNote}>(For appointments with Principal)</span>
          </p>
          <p style={styles.contactLine}>0471-2297501</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} Kerala Academy of Pharmacy. All rights reserved.
      </div>
    </footer>
  );
}

const getStyles = (isMobile) => ({
  footer: {
    background: "#2a0e11",
    color: "#e8dcc4",
    fontFamily: "system-ui, sans-serif",
    borderTop: "3px solid #c9a227",
  },
  ctaStrip: {
    background: "linear-gradient(135deg, #58191f, #3a1418)",
  },
  ctaStripInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: isMobile ? "32px 24px" : "40px 40px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    gap: "18px",
  },
  ctaHeading: {
    fontSize: isMobile ? "18px" : "22px",
    color: "#f8ecc9",
    margin: "0 0 6px",
  },
  ctaSub: {
    fontSize: "13.5px",
    color: "#d8c8a8",
    margin: 0,
  },
  ctaButton: {
    background: "#c9a227",
    color: "#2a0e11",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "14px",
    padding: "12px 26px",
    borderRadius: "6px",
    whiteSpace: "nowrap",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.3fr 1fr 1.3fr 1.3fr",
    gap: isMobile ? "28px" : "32px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: isMobile ? "32px 24px 32px" : "48px 40px 40px",
  },

  logoSection: {},
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "18px",
  },
  logoCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#c9a227",
    color: "#2a0e11",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 700,
  },
  logoTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#f8ecc9",
  },
  logoSub: {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#c9a227",
  },
  socialRow: {
    display: "flex",
    gap: "10px",
  },
  socialLink: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    color: "#f8ecc9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
  },

  heading: {
    fontSize: "14px",
    color: "#f8ecc9",
    marginBottom: "14px",
    fontWeight: 600,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "#c9bba0",
    textDecoration: "none",
    fontSize: "13px",
  },

  contactLine: {
    fontSize: "13px",
    color: "#c9bba0",
    lineHeight: 1.6,
    marginBottom: "10px",
  },
  contactNote: {
    fontSize: "11.5px",
    color: "#9c8b70",
  },

  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    fontSize: "12px",
    color: "#9c8b70",
    padding: "18px 20px",
  },
});