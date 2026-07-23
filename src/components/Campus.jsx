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

const IMG = "/assets/images/";

function GalleryImage({ src, alt, style }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div style={{ ...style, ...fallbackStyle }} title={src}>
        Image not found
      </div>
    );
  }
  return <img src={src} alt={alt || ""} style={style} onError={() => setBroken(true)} />;
}

const fallbackStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fbf8f3",
  color: "#9c8b70",
  fontSize: "11px",
  textAlign: "center",
  padding: "6px",
  border: "1px dashed #ddd0b0",
};

// Photo grid - filenames are best-guess, verify against real campus.html src attributes
const campusPhotos = [
  { caption: "College Entrance", image: IMG + "entrance.png" },
  { caption: "KAP Front View", image: IMG + "college.jpeg" },
  { caption: "Building Entrance", image: IMG + "building.png" },
  { caption: "Lounge", image: IMG + "lounge.png" },
  { caption: "Smart Class Room", image: IMG + "smart.png" },
  { caption: "Library", image: IMG + "newlibrary.png" },
  { caption: "Computer Lab", image: IMG + "cslab.png" },
  { caption: "Badminton Court", image: IMG + "batminton.png" },
  { caption: "Canteen", image: IMG + "canteen.png" },
];

export default function Campus() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroHeading}>Campus</h1>
        <p style={styles.heroSub}>
          The campus life is the most precious time of students' lives,
          always kept in our hearts. At Kerala Academy of Pharmacy, we don't
          give conventional education. We give life here.
        </p>
      </section>

      <section style={styles.gallerySection}>
        <div style={styles.grid}>
          {campusPhotos.map((p) => (
            <div style={styles.card} key={p.caption}>
              <GalleryImage src={p.image} alt={p.caption} style={styles.image} />
              <div style={styles.caption}>{p.caption.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f", background: "#fff" },

  hero: {
    textAlign: "center",
    padding: isMobile ? "36px 20px 24px" : "48px 40px 32px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroHeading: {
    fontSize: isMobile ? "26px" : "32px",
    color: "#1a1615",
    fontWeight: 700,
    marginBottom: "16px",
  },
  heroSub: {
    fontSize: isMobile ? "13.5px" : "15px",
    lineHeight: 1.7,
    color: "#6b625a",
  },

  gallerySection: {
    padding: isMobile ? "12px 20px 48px" : "12px 40px 64px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "24px",
  },
  card: {
    background: "#fbf8f3",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "18px",
    border: "1px solid #ece6d8",
  },
  image: {
    width: "100%",
    height: isMobile ? "200px" : "220px",
    objectFit: "cover",
    display: "block",
  },
  caption: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#1a1615",
    marginTop: "16px",
    letterSpacing: "0.02em",
  },
});