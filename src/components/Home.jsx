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

// Slides: "banner" mode = full image, no overlay text (ads/certificates/posters).
// Default mode = cover image with dark overlay + heading/description/CTA.
const slides = [
  { image: "/assets/images/toppers.png", mode: "banner" },
  { image: "/assets/images/ad1.jpeg", mode: "banner" },
  { image: "/assets/images/BE.png", mode: "banner" },
  {
    image: "/assets/images/college.jpeg",
    heading: "Extensive Training and Placement Program",
    link: "/pinnacle",
  },
  {
    image: "/assets/images/ad5.jpeg",
    heading: "Get a Head Start to Your Career",
    description:
      "Learn how to prepare, preserve, compound and dispense medical drugs, with rigorous inspection and quality evaluation.",
    link: "/contact",
  },
  {
    image: "/assets/images/trucking.jpg",
    heading: "ALP — Adventure Learning Program",
    link: "/pinnacle#alp",
  },
  {
    image: "/assets/images/ad8.jpg",
    heading: "Internship & Externship",
    link: "/pinnacle#internship",
  },
  {
    image: "/assets/images/newind.jpg",
    heading: "Industrial Visit",
    link: "/pinnacle#iv",
  },
  {
    image: "/assets/images/international.jpg",
    heading: "International Study Tour for Toppers",
    link: "/pinnacle#tour",
  },
  { image: "/assets/images/approval.png", mode: "banner" },
];

function HeroSlideshow({ isMobile }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    wrap: {
      position: "relative",
      width: "100%",
      maxWidth: "1100px",
      margin: isMobile ? "16px auto" : "24px auto",
      height: isMobile ? "220px" : "440px",
      overflow: "hidden",
      background: "#f3ecdd",
      borderRadius: isMobile ? "10px" : "16px",
      boxShadow: "0 8px 30px rgba(58,20,24,0.15)",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(0deg, rgba(58,20,24,0.75) 0%, rgba(58,20,24,0.1) 65%)",
      display: "flex",
      alignItems: "flex-end",
      padding: isMobile ? "16px" : "44px",
    },
    content: {
      color: "#f8ecc9",
      maxWidth: "520px",
    },
    heading: {
      fontSize: isMobile ? "16px" : "26px",
      margin: "0 0 8px",
      lineHeight: 1.25,
    },
    description: {
      fontSize: isMobile ? "12px" : "14px",
      color: "#e8dcc4",
      marginBottom: "14px",
      lineHeight: 1.6,
      display: isMobile ? "none" : "block",
    },
    link: {
      display: "inline-block",
      background: "#c9a227",
      color: "#3a1418",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: 600,
      padding: "8px 16px",
      borderRadius: "6px",
    },
    dots: {
      position: "absolute",
      bottom: "12px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "6px",
      zIndex: 2,
    },
    dot: (active) => ({
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: active ? "#c9a227" : "rgba(255,255,255,0.55)",
      cursor: "pointer",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
    }),
  };

  return (
    <div style={styles.wrap}>
      {slides.map((s, i) => (
        <div
          key={s.image}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          {s.mode === "banner" ? (
            <>
              {/* Blurred fill layer so there's no plain empty bars around the ad graphic */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(24px) brightness(0.85)",
                  transform: "scale(1.15)",
                }}
              />
              {/* Sharp centered image on top */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </>
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#3a1418",
              }}
            >
              <div style={styles.overlay}>
                <div style={styles.content}>
                  {s.heading && <h2 style={styles.heading}>{s.heading}</h2>}
                  {s.description && (
                    <p style={styles.description}>{s.description}</p>
                  )}
                  {s.link && (
                    <Link to={s.link} style={styles.link}>
                      Know More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div style={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={styles.dot(i === index)}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

const reasons = [
  {
    title: "World Class Faculty",
    desc: "Outstanding and highly qualified faculty members with an excellent curriculum framed in consultation with top academics and industry experts.",
  },
  {
    title: "Pioneering Research",
    desc: "Ample opportunity for students to get involved in research under the guidance of experts, using the latest facilities and tools to discover and publish.",
  },
  {
    title: "Global Exposure",
    desc: "Collaborations with top national and international universities create learning opportunities through transformative exchange programmes.",
  },
];

const courses = [
  { title: "B-Pharm — 4 Years", image: "/assets/images/lab.jpeg", link: "/b-pharm" },
  { title: "D-Pharm — 2 Years", image: "/assets/images/lab2.jpeg", link: "/d-pharm" },
  { title: "B-Pharm (Lateral Entry) — 3 Years", image: "/assets/images/kap2.jpeg", link: "/b-pharm-lateral-entry" },
];

export default function Home() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <HeroSlideshow isMobile={isMobile} />

      {/* About */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Welcome to Kerala Academy of Pharmacy</h2>
        <p style={styles.paragraph}>
          KAP is beautifully located in Kattakada, Trivandrum — often referred to as
          the soul of Kerala. It boasts a well-designed campus with modern amenities
          and facilities. The faculty, accomplished in their respective fields,
          provide an excellent blend of rigor and relevance in their teaching,
          supported by staff who are always ready to assist. KAP fosters strong
          industry interactions, conducts research focused on solving real-world
          problems, and has an exemplary track record in career counseling and
          placement support.
        </p>
        <p style={styles.paragraph}>
          KAP's mission is to equip students with pharmacy healthcare knowledge and
          skills, foster global competencies, instill strong values, and provide
          outstanding pharmacy education and services for community development.
          Key highlights include international study tours for top-performing
          students, industrial visits, business English programs, extensive
          placement training, and the Advanced Learning Program (ALP) for skill
          enhancement.
        </p>
      </section>

      {/* Reasons to study */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Reasons to Study at Kerala Academy of Pharmacy</h2>
        <p style={styles.sectionSub}>
          Equipped with years of rich legacy, KAP imparts high quality,
          interdisciplinary education at an affordable cost.
        </p>
        <div style={styles.grid3}>
          {reasons.map((r) => (
            <div style={styles.card} key={r.title}>
              <h3 style={styles.cardTitle}>{r.title}</h3>
              <p style={styles.cardText}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Courses</h2>
        <p style={styles.sectionSub}>
          Explore the variety of courses offered by KAP, catering to aspiring
          pharmacists and healthcare professionals.
        </p>
        <div style={styles.grid3}>
          {courses.map((c) => (
            <div style={styles.courseCard} key={c.title}>
              <div
                style={{ ...styles.courseImage, backgroundImage: `url(${c.image})` }}
              />
              <h3 style={styles.courseTitle}>{c.title}</h3>
              <Link to={c.link} style={styles.courseLink}>Read More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Study in Trivandrum */}
      <section style={styles.study}>
        <div style={styles.studyOverlay}>
          <h2 style={styles.studyHeading}>Study in the Capital of Kerala</h2>
          <h3 style={styles.studySubheading}>Trivandrum</h3>
          <p style={styles.studyText}>
            The multi-cultural population and progressive attitude of Kerala make
            it one of the most contemporary cities for young minds who hope to do
            things differently. Come discover what makes this city so special, and
            enjoy the benefits during your study at Kerala Academy of Pharmacy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div>
          <h2 style={styles.ctaHeading}>Ready to begin your journey?</h2>
          <p style={styles.ctaText}>Apply now for the 2026 academic year at KAP.</p>
        </div>
        <Link to="/apply" style={styles.btnPrimary}>
          Apply Now
        </Link>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  btnPrimary: {
    background: "#6b1f27",
    color: "#f8ecc9",
    border: "none",
    borderRadius: "6px",
    padding: isMobile ? "11px 20px" : "12px 24px",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    display: "inline-block",
  },

  section: {
    padding: isMobile ? "32px 20px" : "48px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: isMobile ? "19px" : "22px",
    color: "#3a1418",
    textAlign: "center",
    marginBottom: "16px",
  },
  sectionSub: {
    textAlign: "center",
    color: "#6b625a",
    fontSize: isMobile ? "13px" : "14px",
    maxWidth: "560px",
    margin: "0 auto 28px",
    lineHeight: 1.6,
  },
  paragraph: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.75,
    color: "#4a433e",
    marginBottom: "14px",
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "14px" : "18px",
  },
  card: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "10px",
    padding: "22px 18px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "15px",
    color: "#6b1f27",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "13px",
    color: "#6b625a",
    lineHeight: 1.6,
  },

  courseCard: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "16px",
  },
  courseImage: {
    width: "100%",
    height: isMobile ? "160px" : "140px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
  },
  courseTitle: {
    fontSize: "14.5px",
    color: "#3a1418",
    margin: "14px 12px 8px",
  },
  courseLink: {
    color: "#6b1f27",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: 500,
  },

  study: {
    background: "#3a1418 url(/assets/images/tvm1.jpg) center/cover no-repeat",
    backgroundBlendMode: "multiply",
  },
  studyOverlay: {
    padding: isMobile ? "40px 20px" : "64px 40px",
    textAlign: "center",
    color: "#f8ecc9",
    maxWidth: "700px",
    margin: "0 auto",
  },
  studyHeading: {
    fontSize: isMobile ? "18px" : "22px",
    marginBottom: "4px",
  },
  studySubheading: {
    fontSize: isMobile ? "20px" : "26px",
    letterSpacing: "0.05em",
    color: "#e8c95f",
    marginBottom: "16px",
  },
  studyText: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.7,
    color: "#e8dcc4",
  },

  cta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
    textAlign: isMobile ? "center" : "left",
    background: "#f3ecdd",
    padding: isMobile ? "28px 20px" : "36px 48px",
  },
  ctaHeading: {
    fontSize: isMobile ? "17px" : "19px",
    margin: "0 0 6px",
    color: "#3a1418",
  },
  ctaText: {
    fontSize: "13.5px",
    color: "#6b625a",
    margin: 0,
  },
});