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

const ourTeam = [
  { src: IMG + "team.png", title: "Team KAP" },
  { src: IMG + "faculty.png", title: "Total Faculties" },
  { src: IMG + "dfaculty.png", title: "D-Pharm Faculties" },
  { src: IMG + "office.png", title: "Office Administration" },
  { src: IMG + "technicians.png", title: "Lab Technicians" },
  { src: IMG + "house.png", title: "House Keeping" },
];

const onam = ["onam1.png","onam2.png","onam3.png","onam4.png","onam5.png","onam6.png","onam7.png","onam8.png","onam9.png","onam10.png","onam11.png","onam13.png","onam14.png","onam15.png","onam13.png","onam16.jpg","onam21.jpg","onam18.jpg","onam19.jpg","onam20.jpg","onam17.jpg"].map(f => IMG + f);

const christmas = ["e2.jpg","e3.jpg","e4.jpg","e5.jpg","e6.jpg","e7.jpg","e8.jpg","C24.png","C241.png","C242.png","C243.png"].map(f => IMG + f);

const otherCelebrations = ["e23.jpg","e24.jpg","e25.jpg","e27.jpg","e28.jpg","e9.jpg","e10.jpg","e11.jpg","e12.jpg","e13.jpg","e14.jpg","e15.jpg","e16.jpg","e17.jpg","e18.jpg","e19.jpg","e20.jpg","e21.jpg","e22.jpg"].map(f => IMG + f);

const industrialVisits = ["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","FV1.png","FV2.png","FV3.png","FV4.png","FV5.png"].map(f => IMG + f);

const pharmacyWeek = ["f2.png","f1.png","f3.png","f4.png","f5.png","f6.png","f7.png"].map(f => IMG + f);

const aidsDay = ["Screenshot 2026-02-02 121116.png","Screenshot 2026-02-02 122115.png","Screenshot 2026-02-02 122131.png","Screenshot 2026-02-02 122140.png","mime.jpeg","mime2..jpeg","mime1.png"].map(f => IMG + f);

const diabetesDay = Array.from({ length: 12 }, (_, i) => `${IMG}D${i + 1}.png`);

const bloodDonation = ["Screenshot 2026-03-26 200345.png","bd1.jpeg","Screenshot 2026-03-26 191604.png","Screenshot 2026-03-26 191554.png","Screenshot 2026-03-26 191545.png","Screenshot 2026-03-26 191529.png"].map(f => IMG + f);

const orientation = [
  "WhatsApp Image 2026-01-14 at 11.22.29 AM.jpeg","WhatsApp Image 2026-01-14 at 11.22.37 AM.jpeg","WhatsApp Image 2026-01-14 at 11.22.38 AM (2).jpeg","WhatsApp Image 2026-01-14 at 11.22.35 AM.jpeg","WhatsApp Image 2026-01-14 at 11.22.35 AM (1).jpeg","WhatsApp Image 2026-01-14 at 11.22.37 AM (1).jpeg","WhatsApp Image 2026-01-14 at 11.22.24 AM (1).jpeg","WhatsApp Image 2026-01-14 at 11.22.24 AM (2).jpeg","WhatsApp Image 2026-01-14 at 11.22.26 AM.jpeg",
  "O1.png","O2.png","O3.png","O4.png","O5.png","or1.png","or2.png","or3.png",
  "IMG-20260318-WA0003.jpg","IMG-20260318-WA0004.jpg","IMG-20260318-WA0005.jpg","IMG-20260318-WA0007.jpg","IMG-20260318-WA0006.jpg","IMG-20260318-WA0011.jpg",
].map(f => IMG + f);

const seminars = [
  "seminar1.jpeg","seminar2.jpeg","seminar3.jpeg","seminar4.jpeg","seminar5.jpeg",
  "sem1.png","sem2.png","sem3.png","sem4.png","sem5.png",
  "p.1.png","p.2.png","p.3.png","p.4.png",
  "PIC 1.jpg","PIC 2.jpg","PIC 3.jpg","PIC 4.jpg","PIC 5.jpg","PIC 6.jpg",
].map(f => IMG + f);

const facultyDevelopment = ["fdp4.jpeg","fdp3.jpeg","fdp2.jpeg","fdp1.jpeg"].map(f => IMG + f);

const tours = ["Screenshot 2026-02-02 122619.png","Screenshot 2026-02-02 122630.png","tt.png","tt1.png","tt2.png","tt3.png","WhatsApp Image 2026-01-28 at 4.03.14 PM.jpeg","WhatsApp Image 2026-01-28 at 4.03.14 PM (2).jpeg","WhatsApp Image 2026-01-28 at 4.02.42 PM (1).jpeg","WhatsApp Image 2026-01-28 at 4.02.42 PM.jpeg","WhatsApp Image 2026-01-28 at 4.02.43 PM.jpeg"].map(f => IMG + f);

const staffTours = ["WhatsApp Image 2026-01-26 at 9.51.36 PM.jpeg","WhatsApp Image 2026-01-26 at 9.51.47 PM.jpeg","WhatsApp Image 2026-01-25 at 5.24.47 PM.jpeg","WhatsApp Image 2026-01-25 at 5.24.43 PM.jpeg","WhatsApp Image 2026-01-25 at 5.24.42 PM.jpeg","WhatsApp Image 2026-01-29 at 12.06.32 PM.jpeg"].map(f => IMG + f);

const womensDay = ["IMG-20260306-WA0065.jpg","IMG-20260306-WA0055.jpg","IMG-20260306-WA0054.jpg","IMG-20260309-WA0002.jpg","Screenshot 2026-03-26 200550.png","IMG-20260306-WA0103.jpg","IMG-20260306-WA0083.jpg","IMG-20260306-WA0020.jpg","IMG-20260306-WA0039.jpg","IMG-20260306-WA0032.jpg","IMG-20260306-WA0015.jpg","IMG-20260306-WA0008.jpg","IMG-20260306-WA0043.jpg","IMG-20260306-WA0076.jpg","IMG-20260306-WA0077.jpg","IMG-20260306-WA0069.jpg","IMG-20260306-WA0067.jpg","IMG-20260306-WA0043.jpg","IMG-20260306-WA0044.jpg"].map(f => IMG + f);

const testimonialVideos = ["48_uMzlHrWw","YsAfJq2o1J4","DkOulZAyEZY","5WJKaXCcrO8","uso-Qebocdk","-Oofq2ul90k"];

// Native <img> with graceful fallback if a file is genuinely missing on the server.
function GalleryImage({ src, alt, style, onClick }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div style={{ ...style, ...fallbackStyle }} title={src}>
        Image not found
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      style={style}
      onClick={onClick}
      onError={() => setBroken(true)}
    />
  );
}

const fallbackStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f3ecdd",
  color: "#9c8b70",
  fontSize: "11px",
  textAlign: "center",
  padding: "6px",
  border: "1px dashed #ddd0b0",
  cursor: "default",
};

function GallerySection({ heading, images, styles, onImageClick, shaded }) {
  return (
    <section style={shaded ? styles.sectionShaded : styles.section}>
      <div style={styles.sectionInner}>
        <h2 style={styles.sectionHeading}>{heading}</h2>
        <div style={styles.grid}>
          {images.map((src, i) => (
            <GalleryImage
              key={i}
              src={src}
              style={styles.gridImage}
              onClick={() => onImageClick(src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Events() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Campus Life</div>
          <h1 style={styles.heroHeading}>Events</h1>
        </div>
      </section>

      {/* Our Team - special layout with captions */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionHeading}>Our Team</h2>
          <div style={styles.grid}>
            {ourTeam.map((t) => (
              <div key={t.title} style={styles.teamCard}>
                <GalleryImage
                  src={t.src}
                  alt={t.title}
                  style={styles.teamImage}
                  onClick={() => setLightboxSrc(t.src)}
                />
                <div style={styles.teamTitle}>{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection heading="Onam Celebrations" images={onam} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="Christmas Celebrations" images={christmas} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Other Celebrations" images={otherCelebrations} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="Industrial & Field Visits" images={industrialVisits} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Pharmacy Week Celebrations" images={pharmacyWeek} styles={styles} onImageClick={setLightboxSrc} shaded />

      {/* Testimonials */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionHeading}>Testimonials</h2>
          <div style={styles.videoGrid}>
            {testimonialVideos.map((id) => (
              <div key={id} style={styles.videoWrap}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Testimonial video"
                  style={styles.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection heading="AIDS Day Programs" images={aidsDay} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="World Diabetes Day" images={diabetesDay} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Blood Donation Camp 2026" images={bloodDonation} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="Orientation Programs" images={orientation} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Seminars" images={seminars} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="Faculty Development Program" images={facultyDevelopment} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Tours" images={tours} styles={styles} onImageClick={setLightboxSrc} shaded />
      <GallerySection heading="Staff Tours" images={staffTours} styles={styles} onImageClick={setLightboxSrc} />
      <GallerySection heading="Women's Day Celebration" images={womensDay} styles={styles} onImageClick={setLightboxSrc} shaded />

      {/* Lightbox */}
      {lightboxSrc && (
        <div style={styles.lightboxOverlay} onClick={() => setLightboxSrc(null)}>
          <button style={styles.lightboxClose} onClick={() => setLightboxSrc(null)}>
            ×
          </button>
          <img src={lightboxSrc} alt="" style={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: `url("${IMG}events.jpg")`,
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

  section: {},
  sectionShaded: { background: "#fbf8f3" },
  sectionInner: {
    padding: isMobile ? "28px 20px" : "40px 40px",
  },
  sectionHeading: {
    fontSize: isMobile ? "17px" : "20px",
    color: "#6b1f27",
    marginBottom: "18px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2, 1fr)"
      : "repeat(auto-fill, minmax(180px, 1fr))",
    gap: isMobile ? "10px" : "14px",
  },
  gridImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "10px",
    objectFit: "cover",
    backgroundColor: "#ece6d8",
    cursor: "pointer",
    display: "block",
  },

  teamCard: { textAlign: "center" },
  teamImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "10px",
    objectFit: "cover",
    backgroundColor: "#ece6d8",
    cursor: "pointer",
    marginBottom: "8px",
    display: "block",
  },
  teamTitle: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#3a1418",
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "16px",
  },
  videoWrap: {
    position: "relative",
    paddingTop: "56.25%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(58,20,24,0.1)",
  },
  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },

  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(20,10,10,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    padding: "24px",
  },
  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "90vh",
    borderRadius: "8px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },
  lightboxClose: {
    position: "absolute",
    top: "20px",
    right: "24px",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    fontSize: "22px",
    cursor: "pointer",
  },
});