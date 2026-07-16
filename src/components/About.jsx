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

const paragraphs = [
  "Kerala Academy of Pharmacy, prominently located in the heart of Kattakada, Trivandrum, stands as a beacon of excellence in pharmaceutical education in Kerala, India. Trivandrum, often referred to as the soul of Kerala, provides a vibrant backdrop for an institution dedicated to shaping the future of healthcare and pharmaceutical sciences.",
  "Approved by both the Pharmacy Council of India and AICTE New Delhi, the academy is unwavering in its commitment to fostering academic excellence, research, and innovation. The academy offers two flagship programs: Bachelor of Pharmacy (B-Pharmacy) and Diploma in Pharmacy (D-Pharmacy) — meticulously designed to equip students with the knowledge, skills, and ethical grounding required to excel in the dynamic field of pharmacy.",
  "Kerala Academy of Pharmacy is not just about academic rigor — it is about holistic development. The institution prides itself on its advanced infrastructure, state-of-the-art laboratories, and a well-stocked library that provides students with all the resources they need to thrive. The campus environment encourages critical thinking, hands-on learning, and collaborative research.",
  "Guided by a team of experienced and dedicated faculty members, the academy is focused on transforming passionate individuals into competent professionals, preparing them for various roles in the pharmaceutical industry, clinical research, and beyond.",
  "Kerala Academy of Pharmacy also places a strong emphasis on extracurricular activities and personal development. Students are encouraged to participate in seminars, workshops, and community outreach programs that help build leadership skills and a sense of social responsibility. The institution believes in nurturing not just future pharmacists, but also future leaders who will make a difference in the world.",
  "By choosing Kerala Academy of Pharmacy, you are embarking on a journey that will empower you to succeed in your chosen career path and meet life's challenges with confidence and resilience.",
];

const subLinks = [
  { label: "Message from Chairman", to: "/about/chairman" },
  { label: "Principal's Message", to: "/about/principal" },
  { label: "Vision and Mission", to: "/about/vision-mission" },
];

export default function About() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.eyebrow}>About KAP</div>
          <h1 style={styles.heading}>About Us</h1>
          <div style={styles.approvalTags}>
            <span style={styles.tag}>Approved by Pharmacy Council of India</span>
            <span style={styles.tag}>Approved by AICTE, New Delhi</span>
          </div>
          {paragraphs.map((p, i) => (
            <p style={styles.paragraph} key={i}>{p}</p>
          ))}
        </div>
        <div style={styles.heroImageWrap}>
          <div
            style={{
              ...styles.heroImage,
              backgroundImage: "url(/assets/images/college.jpeg)",
            }}
          />
        </div>
      </section>

      <section style={styles.subNav}>
        <div style={styles.subNavInner}>
          {subLinks.map((s) => (
            <Link to={s.to} key={s.to} style={styles.subNavCard}>
              {s.label} <span style={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "24px" : "48px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: isMobile ? "32px 20px" : "56px 40px",
    alignItems: "flex-start",
  },
  heroText: { flex: 1.6 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#9c7a22",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },
  heading: {
    fontSize: isMobile ? "24px" : "30px",
    color: "#3a1418",
    marginBottom: "16px",
  },
  approvalTags: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  tag: {
    fontSize: "12px",
    color: "#6b1f27",
    background: "#f3ecdd",
    border: "1px solid #ece6d8",
    borderRadius: "20px",
    padding: "5px 12px",
    fontWeight: 600,
  },
  paragraph: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "14px",
  },

  heroImageWrap: {
    flex: "0 0 auto",
    width: isMobile ? "100%" : "300px",
    position: "sticky",
    top: "100px",
  },
  heroImage: {
    width: "100%",
    height: isMobile ? "320px" : "420px",
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.15)",
  },

  subNav: {
    background: "#fbf8f3",
    borderTop: "1px solid #ece6d8",
  },
  subNavInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: isMobile ? "24px 20px" : "32px 40px",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "14px",
  },
  subNavCard: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "10px",
    padding: "16px 18px",
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#3a1418",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: { color: "#c9a227" },
});