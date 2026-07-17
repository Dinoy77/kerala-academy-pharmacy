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

export default function PrincipalMessage() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <div style={styles.eyebrow}>About KAP</div>
      <h1 style={styles.heading}>Message from the Principal</h1>

      <div style={styles.content}>
        <div style={styles.textWrap}>
          <p style={styles.message}>
            Aiming for a vibrant and positive academic environment is an
            integrated effort. This calls for the integration of students in
            the qualitative processes of our college. Our aim is to make
            education an enhancing, satisfying, and enjoyable experience
            through an interdisciplinary approach, combining both theory and
            practice in pedagogy — focusing on "the way we teach rather than
            what we teach."
          </p>
          <p style={styles.message}>
            Research is a predominant pillar of academic growth; the focus has
            to be on socially relevant and globally symbolic research
            initiatives. It should be our collective attempt to promote an
            encouraging, inspiring, value-based academic environment — nurturing
            vital thinking and systematic problem-solving among students.
          </p>
          <p style={styles.message}>
            At Kerala Academy of Pharmacy, we provide an environment that
            promotes critical thinking, ethical practices, and holistic
            development. Our students are our priority, and we are committed
            to providing them with the tools they need to succeed in their
            professional careers.
          </p>
          <p style={styles.message}>
            My best wishes to all students of our college, and I hope that
            their years here will be fruitful and knowledgeable.
          </p>
        </div>
        <div style={styles.imageWrap}>
          <div
            style={{
              ...styles.image,
              backgroundImage: "url(/assets/images/kk.jpeg)",
            }}
          />
          <div style={styles.signName}>Dr. Krishna Kumar K L</div>
          <div style={styles.signTitle}>Principal</div>
        </div>
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
  content: {
    display: "flex",
    flexDirection: isMobile ? "column-reverse" : "row",
    gap: isMobile ? "24px" : "40px",
    alignItems: isMobile ? "center" : "flex-start",
  },
  textWrap: {
    flex: 1,
  },
  message: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "16px",
    textAlign: isMobile ? "center" : "left",
  },
  imageWrap: {
    flex: "0 0 auto",
    textAlign: "center",
  },
  image: {
    width: isMobile ? "220px" : "260px",
    height: isMobile ? "280px" : "340px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.15)",
    marginBottom: "12px",
  },
  signName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#3a1418",
  },
  signTitle: {
    fontSize: "13px",
    color: "#6b625a",
  },
});