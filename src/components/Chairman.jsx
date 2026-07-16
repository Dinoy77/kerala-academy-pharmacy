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

export default function Chairman() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <div style={styles.eyebrow}>About KAP</div>
      <h1 style={styles.heading}>Message from the Chairman</h1>

      <div style={styles.content}>
        <div style={styles.imageWrap}>
          <div
            style={{
              ...styles.image,
              backgroundImage: "url(/assets/images/chairman.png)",
            }}
          />
        </div>
        <div style={styles.textWrap}>
          <p style={styles.message}>
            It gives me great pleasure to present a profile of our institution —
            a unique place with people from diverse cultures and regions. At
            Kerala Academy of Pharmacy, students can expect an enriching and
            life-turning learning experience which will enable them to reach
            incredible heights in their professional life. We foster the
            sharpening of skills and enhancement of knowledge base in our
            students through various extra-curricular, co-curricular, and
            curricular activities, through faculty who not only keep themselves
            at par with current developments but also contribute to the
            expansion of the body of knowledge in their field of expertise.
          </p>
          <p style={styles.message}>
            Our highly qualified faculty, rigorous academic programs, and
            vibrant atmosphere provide the perfect place for you to continue
            your education. This updated and professional environment makes a
            distinctive contribution not only to students but to academia
            through publications, seminars, and conferences, apart from
            quality education. It provides an intellectually inspiring
            atmosphere and superb infrastructure to propagate excellent
            pharmacy health education and service systems for community
            development.
          </p>
          <div style={styles.signature}>
            <div style={styles.signName}>Mohammed Samsheer</div>
            <div style={styles.signTitle}>Chairman, Academic Council</div>
            <div style={styles.signOrg}>Kerala Academy of Pharmacy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: "1000px",
    margin: "0 auto",
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
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "24px" : "40px",
    alignItems: isMobile ? "center" : "flex-start",
  },
  imageWrap: {
    flex: "0 0 auto",
  },
  image: {
    width: isMobile ? "220px" : "260px",
    height: isMobile ? "280px" : "340px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.15)",
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
  signature: {
    marginTop: "20px",
    textAlign: isMobile ? "center" : "left",
    borderTop: "1px solid #ece6d8",
    paddingTop: "16px",
  },
  signName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#3a1418",
  },
  signTitle: {
    fontSize: "13px",
    color: "#6b625a",
    marginTop: "2px",
  },
  signOrg: {
    fontSize: "13px",
    color: "#6b625a",
  },
});