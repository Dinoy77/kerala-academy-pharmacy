import { useState, useEffect } from "react";

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

export default function VisionMission() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <div style={styles.eyebrow}>About KAP</div>
      <h1 style={styles.heading}>Vision and Mission</h1>

      <div style={styles.card}>
        <div style={styles.cardLabel}>Vision</div>
        <p style={styles.cardText}>
          To raise the best pharmacy professionals for society and to develop
          quality benchmarks by leading our institute as a center of excellence
          in every aspect of Pharmacy Education and Research.
        </p>
      </div>

      <div style={styles.card}>
        <div style={styles.cardLabel}>Mission</div>
        <p style={styles.cardText}>
          To impart high-quality specialized education and practices that
          enable scholars to acquire expertise in the field of Pharmacy, to
          provide exceptional professionals and to serve humanity at large.
        </p>
        <p style={styles.cardText}>
          To mold excellent pharmacy professionals with a sound academic base
          and technical proficiency through innovative and distinguished
          academic programs, preparing them to meet the forthcoming challenges
          of academia, industry, and society.
        </p>
        <p style={styles.cardText}>
          Assuring the services of excellent academic experts, adequate
          infrastructure, and industry-relevant value-added programs — because
          we are furnishing a service that is an investment in our students'
          future.
        </p>
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "system-ui, sans-serif",

    padding: isMobile ? "32px 20px 48px" : "56px 40px 64px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#9c7a22",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
    textAlign: "center",
  },
  heading: {
    fontSize: isMobile ? "22px" : "28px",
    color: "#3a1418",
    textAlign: "center",
    marginBottom: isMobile ? "28px" : "40px",
  },
  card: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "14px",
    padding: isMobile ? "24px 20px" : "32px 36px",
    marginBottom: "20px",
    boxShadow: "0 6px 24px rgba(58,20,24,0.06)",
  },
  cardLabel: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#f8ecc9",
    background: "#6b1f27",
    padding: "5px 14px",
    borderRadius: "20px",
    marginBottom: "14px",
  },
  cardText: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "12px",
  },
});