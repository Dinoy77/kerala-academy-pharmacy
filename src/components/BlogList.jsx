import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData"; // Adjust path if needed

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

export default function BlogList() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Read & Learn</div>
          <h1 style={styles.heroHeading}>Our Blogs</h1>
        </div>
      </section>

      {/* Grid */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {blogs.map((b) => (
            <div style={styles.card} key={b.slug}>
              <div
                style={{ ...styles.cardImage, backgroundImage: `url("${b.image}")` }}
              />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{b.title}</h3>
                <p style={styles.cardDesc}>{b.desc}</p>
                <Link to={`/blogs/${b.slug}`} style={styles.readMore}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: `url("/assets/images/blog.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(58,20,24,0.85), rgba(58,20,24,0.35))",
  },
  heroContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#f8ecc9",
  },
  heroHeading: { fontSize: isMobile ? "24px" : "34px", margin: 0 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#c9a227",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },

  section: {
    padding: isMobile ? "28px 20px" : "48px 40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
    gap: isMobile ? "18px" : "22px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(58,20,24,0.07)",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
  },
  cardBody: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  cardTitle: {
    fontSize: "14px",
    color: "#3a1418",
    marginBottom: "8px",
    lineHeight: 1.35,
  },
  cardDesc: {
    fontSize: "12.5px",
    color: "#6b625a",
    lineHeight: 1.6,
    marginBottom: "14px",
    flex: 1,
  },
  readMore: {
    alignSelf: "flex-start",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#fff",
    background: "#6b1f27",
    padding: "7px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
});