import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CongratsPopup from "./CongratsPopup";

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
  { image: "/assets/images/college.jpeg" },
  { image: "/assets/images/ad5.jpeg" },
  { image: "/assets/images/trucking.jpg" },
  { image: "/assets/images/ad8.jpg" },
  { image: "/assets/images/newind.jpg" },
  { image: "/assets/images/international.jpg" },
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
      height: isMobile ? "220px" : "440px",
      overflow: "hidden",
      background: "#f3ecdd",
      marginTop: isMobile ? "16px" : "24px",
      marginBottom: isMobile ? "16px" : "24px",
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
    icon: "🎓",
  },
  {
    title: "Pioneering Research",
    desc: "Ample opportunity for students to get involved in research under the guidance of experts, using the latest facilities and tools to discover and publish.",
    icon: "🔬",
  },
  {
    title: "Global Exposure",
    desc: "Collaborations with top national and international universities create learning opportunities through transformative exchange programmes.",
    icon: "🌍",
  },
];

const blogs = [
  { image: "/assets/images/lab.jpeg", description: "Study about pharmaceutical chemistry." },
  { image: "/assets/images/lab2.jpeg", description: "Study about Pharma practice." },
  { image: "/assets/images/kap2.jpeg", description: "Study about Pharmaceutics." },
  { image: "/assets/images/kap3.jpeg", description: "Study about pharmacognosy and Phytochemistry." },
  { image: "/assets/images/lab.jpeg", description: "Study about pharmacology." },
  { image: "/assets/images/cls.jpeg", description: "Pharmacopoeia." },
  { image: "/assets/images/lab2.jpeg", description: "How to become a Pharmacist." },
  { image: "/assets/images/b1.jpg", description: "12 June — World Day Against Child Labour." },
  { image: "/assets/images/brain.jpg", description: "8 June — World Brain Tumour Day." },
  { image: "/assets/images/cancer.png", description: "World Cancer Day and KAP's cancer awareness campaign." },
];

const courses = [
  { title: "B-Pharm — 4 Years", image: "/assets/images/lab.jpeg", link: "/b-pharm" },
  { title: "D-Pharm — 2 Years", image: "/assets/images/lab2.jpeg", link: "/d-pharm" },
  { title: "B-Pharm (Lateral Entry) — 3 Years", image: "/assets/images/kap2.jpeg", link: "/b-pharm-lateral-entry" },
];

const tvmImages = [
  "/assets/images/tvm1.jpg",
  "/assets/images/tvm2.jpg",
  "/assets/images/tvm3.jpg",
  "/assets/images/tvm4.jpg",
];

function StudySection({ styles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % tvmImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.study}>
      {tvmImages.map((img, i) => (
        <div
          key={img}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        />
      ))}
      <div style={styles.studyDim} />
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
  );
}

export default function Home() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <CongratsPopup />
      <div style={styles.heroBand}>
        <HeroSlideshow isMobile={isMobile} />
      </div>

      {/* About */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutText}>
          <div style={styles.eyebrow}>About KAP</div>
          <h2 style={styles.aboutHeading}>
            Welcome to Kerala Academy of Pharmacy
          </h2>
          <p style={styles.paragraphLeft}>
            KAP is beautifully located in Kattakada, Trivandrum — often referred to as
            the soul of Kerala. It boasts a well-designed campus with modern amenities
            and facilities. The faculty, accomplished in their respective fields,
            provide an excellent blend of rigor and relevance in their teaching,
            supported by staff who are always ready to assist.
          </p>
          <p style={styles.paragraphLeft}>
            KAP's mission is to equip students with pharmacy healthcare knowledge and
            skills, foster global competencies, instill strong values, and provide
            outstanding pharmacy education and services for community development.
            Key highlights include international study tours for top-performing
            students, industrial visits, business English programs, extensive
            placement training, and the Advanced Learning Program (ALP).
          </p>
          <Link to="/about" style={styles.textLink}>
            Read more about KAP →
          </Link>
        </div>
        <div style={styles.aboutImageWrap}>
          <div
            style={{
              ...styles.aboutImage,
              backgroundImage: "url(/assets/images/college.jpeg)",
            }}
          />
        </div>
      </section>

      {/* Reasons to study */}
      <section style={styles.sectionShaded}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeaderLeft}>
            <div style={styles.eyebrow}>Why KAP</div>
            <h2 style={styles.sectionHeadingLeft}>Reasons to Study at KAP</h2>
            <p style={styles.sectionSubLeft}>
              Equipped with years of rich legacy, KAP imparts high quality,
              interdisciplinary education at an affordable cost.
            </p>
          </div>
          <div style={styles.grid3}>
            {reasons.map((r) => (
              <div style={styles.reasonCard} key={r.title}>
                <div style={styles.iconCircle}>{r.icon}</div>
                <h3 style={styles.cardTitle}>{r.title}</h3>
                <p style={styles.cardText}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section style={styles.section}>
        <div style={styles.sectionHeaderLeft}>
          <div style={styles.eyebrow}>Programs</div>
          <h2 style={styles.sectionHeadingLeft}>Our Courses</h2>
          <p style={styles.sectionSubLeft}>
            Explore the variety of courses offered by KAP, catering to aspiring
            pharmacists and healthcare professionals.
          </p>
        </div>
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

      {/* Blogs */}
      <section style={styles.sectionShaded}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeaderLeft}>
            <div style={styles.eyebrow}>Blog</div>
            <h2 style={styles.sectionHeadingLeft}>From Our Blog</h2>
          </div>
          <style>{`
            @keyframes blogScroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .blog-track {
              animation: blogScroll 35s linear infinite;
            }
            .blog-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div style={styles.blogScrollOuter}>
            <div className="blog-track" style={styles.blogTrack}>
              {[...blogs, ...blogs].map((b, i) => (
                <div style={styles.blogCard} key={`${b.description}-${i}`}>
                  <div
                    style={{ ...styles.blogImage, backgroundImage: `url(${b.image})` }}
                  />
                  <div style={styles.blogCardBody}>
                    <p style={styles.blogText}>{b.description}</p>
                    <Link to="/blogs" style={styles.blogReadMore}>
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StudySection styles={styles} />
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  heroBand: {
    background:
      "radial-gradient(ellipse at top, #58191f 0%, #3a1418 55%, #2a0e11 100%)",
    padding: isMobile ? "1px 12px 20px" : "1px 24px 32px",
  },
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

  aboutSection: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: isMobile ? "24px" : "48px",

    padding: isMobile ? "36px 20px" : "64px 40px",
  },
  aboutText: {
    flex: 1,
  },
  aboutHeading: {
    fontSize: isMobile ? "21px" : "26px",
    color: "#3a1418",
    marginBottom: "16px",
    lineHeight: 1.3,
  },
  paragraphLeft: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "16px",
  },
  textLink: {
    color: "#6b1f27",
    fontSize: "13.5px",
    fontWeight: 600,
    textDecoration: "none",
  },
  aboutImageWrap: {
    flex: 1,
    width: "100%",
  },
  aboutImage: {
    width: "100%",
    height: isMobile ? "220px" : "340px",
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.15)",
  },

  sectionHeaderLeft: {
    marginBottom: "32px",
    maxWidth: "560px",
  },
  sectionHeadingLeft: {
    fontSize: isMobile ? "20px" : "24px",
    color: "#3a1418",
    marginBottom: "10px",
  },
  sectionSubLeft: {
    color: "#6b625a",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.6,
  },

  section: {
    padding: isMobile ? "36px 20px" : "56px 40px",

  },
  sectionShaded: {
    background: "#fbf8f3",
  },
  sectionInner: {
    padding: isMobile ? "36px 20px" : "56px 40px",

  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#9c7a22",
    textTransform: "uppercase",
    marginBottom: "10px",
    fontWeight: 600,
  },
  sectionHeading: {
    fontSize: isMobile ? "20px" : "24px",
    color: "#3a1418",
    textAlign: "center",
    marginBottom: "16px",
  },
  paragraph: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "16px",
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "16px" : "22px",
  },
  reasonCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px 22px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(58,20,24,0.06)",
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#6b1f27",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: "22px",
  },
  cardTitle: {
    fontSize: "15px",
    color: "#3a1418",
    marginBottom: "8px",
    fontWeight: 600,
  },
  cardText: {
    fontSize: "13px",
    color: "#6b625a",
    lineHeight: 1.65,
  },

  courseCard: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "18px",
    boxShadow: "0 4px 20px rgba(58,20,24,0.06)",
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

  blogScrollOuter: {
    overflow: "hidden",
    width: "100%",
  },
  blogTrack: {
    display: "flex",
    gap: "20px",
    width: "max-content",
  },
  blogCard: {
    flex: "0 0 auto",
    width: isMobile ? "220px" : "280px",
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(58,20,24,0.08)",
  },
  blogImage: {
    width: "100%",
    height: isMobile ? "140px" : "170px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
  },
  blogCardBody: {
    padding: "16px",
  },
  blogText: {
    fontSize: "13.5px",
    color: "#3a1418",
    margin: "0 0 12px",
    lineHeight: 1.55,
    minHeight: "40px",
  },
  blogReadMore: {
    display: "inline-block",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#fff",
    background: "#6b1f27",
    padding: "7px 14px",
    borderRadius: "6px",
    textDecoration: "none",
  },

  study: {
    position: "relative",
    overflow: "hidden",
    minHeight: isMobile ? "320px" : "420px",
    display: "flex",
    alignItems: "center",
  },
  studyDim: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(58,20,24,0.55) 0%, rgba(58,20,24,0.75) 100%)",
  },
  studyOverlay: {
    position: "relative",
    zIndex: 1,
    padding: isMobile ? "40px 20px" : "64px 40px",
    textAlign: "center",
    color: "#f8ecc9",

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