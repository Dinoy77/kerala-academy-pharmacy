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

export default function Library() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Academics</div>
          <h1 style={styles.heroHeading}>Library</h1>
        </div>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <div style={styles.textWrap}>
          <p style={styles.paragraph}>
            The Kerala Academy of Pharmacy library provides a temple of
            knowledge with a valuable treasure on various subjects, not
            limited to pharmacy. The library provides students with extensive
            facilities to maximize their knowledge in the field of pharmacy.
          </p>
          <p style={styles.paragraph}>
            The library is open to all members of the college from 9.00 AM to
            4.30 PM on all working days. The entire library is maintained with
            Libsoft (Library Management Software) and the Dewey Decimal
            Classification Scheme. Library patrons are free to discuss their
            information needs with the librarian to borrow books, use
            internet resources, and study quietly in the library.
          </p>
          <p style={styles.paragraph}>
            The library building is covered with CCTV cameras located at
            vantage points in and around the library.
          </p>
        </div>
        <div style={styles.imageWrap}>
          <div
            style={{ ...styles.image, backgroundImage: "url(/assets/images/library.png)" }}
          />
        </div>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "200px" : "280px",
    backgroundImage: "url(/assets/images/LIBRARY.webp)",
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
  heroHeading: {
    fontSize: isMobile ? "24px" : "32px",
    margin: 0,
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#c9a227",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },

  content: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "24px" : "48px",
    alignItems: "center",
    padding: isMobile ? "32px 20px" : "56px 40px",
  },
  textWrap: {
    flex: 1.2,
  },
  paragraph: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "14px",
  },
  imageWrap: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: isMobile ? "220px" : "320px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.12)",
  },
});