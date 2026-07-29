import { Link } from "react-router-dom";

export default function AboutSection({ styles }) {
  return (
    <section style={styles.aboutSection}>
      <div style={styles.aboutText}>
        <div style={styles.eyebrow}>About KAP</div>
        <h2 style={styles.aboutHeading}>Welcome to Kerala Academy of Pharmacy</h2>
        <p style={styles.paragraphLeft}>
          KAP is beautifully located in Kattakada, Trivandrum — often referred to as
          the soul of Kerala. It boasts a well-designed campus with modern amenities
          and facilities. The faculty, accomplished in their respective fields,
          provide an excellent blend of rigor and relevance in their teaching,
          supported by staff who are always ready to assist.
        </p>
        <p style={styles.paragraphLeft}>
          KAP's mission is to equip students with pharmacy healthcare knowledge and
          skills, foster global competencies, instill strong values, and provide
          outstanding pharmacy education and services for community development.
        </p>
        <Link to="/about" className="kap-text-link" style={styles.textLink}>Read more about KAP →</Link>
      </div>
      <div style={styles.aboutImageWrap}>
        <div style={{ ...styles.aboutImage, backgroundImage: `url("/assets/images/college.jpeg")` }} />
      </div>
    </section>
  );
}