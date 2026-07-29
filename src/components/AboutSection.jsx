import { Link } from "react-router-dom";

export default function AboutSection({ styles }) {
  return (
    <section style={styles.aboutSection}>
      <style>{`
        /* About Image & Card Hover Animations */
        .about-image-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .about-image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(196, 30, 30, 0.15) !important;
        }
        .about-image-bg {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-image-card:hover .about-image-bg {
          transform: scale(1.06);
        }
        .about-cta-btn {
          transition: all 0.25s ease;
        }
        .about-cta-btn:hover {
          transform: translateX(4px);
          color: #8E1616 !important;
        }
      `}</style>

      {/* Left Column: Text Content */}
      <div style={styles.aboutText}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowDot} />
          <span>About KAP</span>
        </div>
        
        <h2 style={styles.aboutHeading}>
          Welcome to <span style={styles.headingAccent}>Kerala Academy</span> of Pharmacy
        </h2>
        
        <p style={styles.paragraphLeft}>
          KAP is beautifully located in Kattakada, Trivandrum — often referred to as
          the soul of Kerala. It boasts a well-designed campus with modern amenities
          and world-class facilities.
        </p>

        {/* Feature Highlights Grid */}
        <div style={styles.aboutPillsGrid}>
          <div style={styles.aboutPill}>
            <span style={styles.aboutPillIcon}>🏛️</span>
            <div>
              <div style={styles.aboutPillTitle}>PCI Approved</div>
              <div style={styles.aboutPillSub}>Recognized Standards</div>
            </div>
          </div>
          <div style={styles.aboutPill}>
            <span style={styles.aboutPillIcon}>👨‍🔬</span>
            <div>
              <div style={styles.aboutPillTitle}>Expert Faculty</div>
              <div style={styles.aboutPillSub}>Industry Leaders</div>
            </div>
          </div>
        </div>

        <p style={styles.paragraphLeft}>
          Our mission is to equip students with pharmacy healthcare knowledge,
          foster global competencies, and provide outstanding education for community development.
        </p>

        {/* Styled Link CTA */}
        <Link to="/about" className="about-cta-btn" style={styles.aboutCta}>
          <span>Discover Our Campus & Legacy</span>
          <span style={styles.aboutCtaArrow}>→</span>
        </Link>
      </div>

      {/* Right Column: Image with Floating Glassmorphic Badge */}
      <div style={styles.aboutImageWrap}>
        <div className="about-image-card" style={styles.aboutImageCard}>
          <div
            className="about-image-bg"
            style={{
              ...styles.aboutImage,
              backgroundImage: `url("/assets/images/college.jpeg")`,
            }}
          />
          {/* Bottom Gradient Overlay */}
          <div style={styles.aboutImageOverlay} />

          {/* Floating Metric Badge */}
          <div style={styles.aboutGlassBadge}>
            <div style={styles.badgeNumber}>10+</div>
            <div style={styles.badgeText}>Years of Academic Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}