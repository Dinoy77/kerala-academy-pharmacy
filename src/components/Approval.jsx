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

export default function Approval() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Breadcrumb */}
      <section style={styles.breadcrumbSection}>
        <div style={styles.eyebrow}>Kerala Academy of Pharmacy, Trivandrum</div>
        <div style={styles.breadcrumbRow}>
          <Link to="/" style={styles.breadcrumbLink}>Home</Link>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbCurrent}>Approval</span>
        </div>
      </section>

      {/* Certificate image */}
      <section style={styles.imageSection}>
        <img
          src="/assets/images/approval.png"
          alt="KAP Approval Certificate"
          style={styles.image}
        />
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  breadcrumbSection: {
    background: "#fbf8f3",
    borderBottom: "1px solid #ece6d8",
    padding: isMobile ? "20px 20px" : "24px 40px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    color: "#9c7a22",
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: "8px",
  },
  breadcrumbRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13.5px",
  },
  breadcrumbLink: {
    color: "#6b1f27",
    textDecoration: "none",
    fontWeight: 600,
  },
  breadcrumbSep: {
    color: "#9c7a22",
  },
  breadcrumbCurrent: {
    color: "#6b625a",
  },

  imageSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "24px 16px 48px" : "48px 40px 64px",
    background: "#fff",
  },
  image: {
    maxWidth: "100%",
    width: isMobile ? "100%" : "800px",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid #ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.1)",
  },
});