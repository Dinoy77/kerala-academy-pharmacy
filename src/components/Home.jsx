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

const reasons = [
  { title: "World Class Faculty", desc: "Outstanding and highly qualified faculty members with an excellent curriculum framed with academics and industry experts.", icon: "🎓" },
  { title: "Pioneering Research", desc: "Hands-on opportunities to work under expert guidance, using the latest facilities and tools to discover and publish.", icon: "🔬" },
  { title: "Global Exposure", desc: "Collaborations with top national and international universities through transformative exchange programmes.", icon: "🌍" },
];

const courses = [
  { title: "B-Pharm — 4 Years", image: "/assets/images/lab.jpeg", link: "/bpharm" },
  { title: "D-Pharm — 2 Years", image: "/assets/images/lab2.jpeg", link: "/dpharm" },
  { title: "B-Pharm (Lateral Entry) — 3 Years", image: "/assets/images/kap2.jpeg", link: "/mpharm" },
];

const blogs = [
  { image: "/assets/images/lab.jpeg", description: "Study about pharmaceutical chemistry.", slug: "blogh1" },
  { image: "/assets/images/lab2.jpeg", description: "Study about Pharma practice.", slug: "blogh2" },
  { image: "/assets/images/kap2.jpeg", description: "Study about Pharmaceutics.", slug: "blogh3" },
  { image: "/assets/images/kap3.jpeg", description: "Study about pharmacognosy and Phytochemistry.", slug: "blogh4" },
  { image: "/assets/images/lab.jpeg", description: "Study about pharmacology.", slug: "blogh5" },
  { image: "/assets/images/cls.jpeg", description: "Pharmacopoeia.", slug: "blogh6" },
  { image: "/assets/images/lab2.jpeg", description: "How to become a Pharmacist.", slug: "blogh7" },
  { image: "/assets/images/b17.jpg", description: "Why Pharmacy is a good career.", slug: "blogh8" },
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
    const timer = setInterval(() => setIndex((i) => (i + 1) % tvmImages.length), 5000);
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
            backgroundImage: `url("${img}")`,
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
          things differently. Come discover what makes this city so special.
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

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatBlob { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(14px) scale(1.06); } }
        @keyframes floatCardBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes ctaPulse { 0%, 100% { box-shadow: 0 6px 16px rgba(0,0,0,0.15); } 50% { box-shadow: 0 6px 22px rgba(255,209,102,0.5); } }
        .hero-fade-1 { animation: fadeUp 0.6s ease both; }
        .hero-fade-2 { animation: fadeUp 0.6s ease 0.1s both; }
        .kap-blob { animation: floatBlob 6s ease-in-out infinite; }
        .kap-float-card { animation: floatCardBounce 3.5s ease-in-out infinite; }
        .kap-btn-white { animation: ctaPulse 2.4s ease-in-out infinite; transition: transform 0.15s ease, background 0.15s ease; }
        .kap-btn-white:hover { animation-play-state: paused; background: #FFF3D6; transform: translateY(-2px); }
        .kap-btn-outline { transition: background 0.15s ease, transform 0.15s ease; }
        .kap-btn-outline:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
        .kap-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .kap-lift:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(196,30,30,0.16); }
        .kap-icon { transition: transform 0.25s ease; }
        .kap-lift:hover .kap-icon { transform: rotate(-8deg) scale(1.1); }
        .kap-text-link { position: relative; }
        .kap-text-link::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 0; height: 1.5px; background: currentColor; transition: width 0.2s ease; }
        .kap-text-link:hover::after { width: 100%; }
      `}</style>

      {/* Hero */}
      <section style={styles.hero}>
        <div className="kap-blob" style={styles.heroBlob} />
        <div style={styles.heroInner}>
          <div className="hero-fade-1" style={styles.heroText}>
            <div style={styles.heroTag}>
              <span style={{ marginRight: "6px" }}>✦</span>Admissions 2026 open
            </div>
            <h1 style={styles.heroHeading}>
              Build your future in <span style={styles.heroAccent}>pharmacy</span>
            </h1>
            <p style={styles.heroSub}>
              India's leading academy for industry-integrated pharmacy
              education, with placement support in the heart of Kerala.
            </p>
            <div style={styles.heroActions}>
              <Link to="/apply" className="kap-btn-white" style={styles.btnWhite}>Apply now →</Link>
              <Link to="/academics" className="kap-btn-outline" style={styles.btnOutline}>Explore programs</Link>
            </div>
          </div>

          <div className="hero-fade-2" style={styles.heroMediaWrap}>
            <video
              style={styles.heroVideo}
              src="/assets/videos/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/college.jpeg"
            />
            {!isMobile && (
              <div className="kap-float-card" style={styles.floatCard}>
                <div style={styles.floatStat}>
                  <div style={styles.floatValue}>100%</div>
                  <div style={styles.floatLabel}>Placement</div>
                </div>
                <div style={styles.floatDivider} />
                <div style={styles.floatStat}>
                  <div style={styles.floatValue}>1000+</div>
                  <div style={styles.floatLabel}>Alumni</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Wave transition */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={styles.wave}
        >
          <path d="M0,32 C360,80 1080,-16 1440,32 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* About */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutText}>
          <div style={styles.eyebrow}>About KAP</div>
          <h2 style={styles.aboutHeading}>Welcome to Kerala Academy of Pharmacy</h2>
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
          </p>
          <Link to="/about" className="kap-text-link" style={styles.textLink}>Read more about KAP →</Link>
        </div>
        <div style={styles.aboutImageWrap}>
          <div style={{ ...styles.aboutImage, backgroundImage: `url("/assets/images/college.jpeg")` }} />
        </div>
      </section>

      {/* Reasons to study */}
      <section style={styles.sectionShaded}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeaderLeft}>
            <div style={styles.eyebrow}>Why KAP</div>
            <h2 style={styles.sectionHeadingLeft}>Reasons to study at KAP</h2>
            <p style={styles.sectionSubLeft}>
              Equipped with years of rich legacy, KAP imparts high quality,
              interdisciplinary education at an affordable cost.
            </p>
          </div>
          <div style={styles.grid3}>
            {reasons.map((r) => (
              <div className="kap-lift" style={styles.reasonCard} key={r.title}>
                <div className="kap-icon" style={styles.iconCircle}>{r.icon}</div>
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
          <h2 style={styles.sectionHeadingLeft}>Our courses</h2>
          <p style={styles.sectionSubLeft}>
            Explore the variety of courses offered by KAP, catering to aspiring
            pharmacists and healthcare professionals.
          </p>
        </div>
        <div style={styles.grid3}>
          {courses.map((c) => (
            <div className="kap-lift" style={styles.courseCard} key={c.title}>
              <div style={{ ...styles.courseImage, backgroundImage: `url("${c.image}")` }} />
              <h3 style={styles.courseTitle}>{c.title}</h3>
              <Link to={c.link} className="kap-text-link" style={styles.courseLink}>Read More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section style={styles.sectionShaded}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeaderLeft}>
            <div style={styles.eyebrow}>Blog</div>
            <h2 style={styles.sectionHeadingLeft}>From our blog</h2>
          </div>
          <style>{`
            @keyframes blogScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .blog-track { animation: blogScroll 35s linear infinite; }
            .blog-track:hover { animation-play-state: paused; }
          `}</style>
          <div style={styles.blogScrollOuter}>
            <div className="blog-track" style={styles.blogTrack}>
              {[...blogs, ...blogs].map((b, i) => (
                <div style={styles.blogCard} key={`${b.slug}-${i}`}>
                  <div style={{ ...styles.blogImage, backgroundImage: `url("${b.image}")` }} />
                  <div style={styles.blogCardBody}>
                    <p style={styles.blogText}>{b.description}</p>
                    <Link to={`/blogs/${b.slug}`} style={styles.blogReadMore}>Read More →</Link>
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
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f", overflowX: "hidden" },

  hero: {
    position: "relative",
    background: "linear-gradient(135deg, #C41E1E 0%, #8E1616 100%)",
    padding: isMobile ? "40px 20px 50px" : "60px 48px 90px",
    overflow: "hidden",
  },
  heroBlob: {
    position: "absolute",
    top: "-70px",
    right: "-70px",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.06)",
  },
  heroInner: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: isMobile ? "28px" : "48px",
  },
  heroText: { flex: 1.1 },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  heroHeading: {
    fontSize: isMobile ? "28px" : "42px",
    color: "#fff",
    lineHeight: 1.15,
    margin: "0 0 18px",
  },
  heroAccent: { color: "#FFD166" },
  heroSub: {
    color: "#FBD5D5",
    fontSize: isMobile ? "13.5px" : "15px",
    lineHeight: 1.6,
    maxWidth: "420px",
    margin: "0 0 30px",
  },
  heroActions: { display: "flex", gap: "12px", flexWrap: "wrap" },
  btnWhite: {
    background: "#fff",
    color: "#C41E1E",
    textDecoration: "none",
    padding: "13px 26px",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: 700,
  },
  btnOutline: {
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 26px",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: 700,
    border: "1.5px solid rgba(255,255,255,0.5)",
  },

  heroMediaWrap: { flex: 1, width: "100%", position: "relative" },
  heroVideo: {
    width: "100%",
    height: isMobile ? "220px" : "270px",
    objectFit: "cover",
    borderRadius: "20px",
    display: "block",
    border: "3px solid rgba(255,255,255,0.2)",
  },
  floatCard: {
    position: "absolute",
    bottom: "-20px",
    left: "-18px",
    background: "#fff",
    borderRadius: "14px",
    padding: "14px 20px",
    boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  floatStat: { textAlign: "center" },
  floatValue: { fontSize: "18px", fontWeight: 800, color: "#C41E1E" },
  floatLabel: { fontSize: "10px", color: "#6b625a" },
  floatDivider: { width: "1px", height: "28px", background: "#eee" },

  wave: {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "100%",
    height: isMobile ? "30px" : "50px",
    display: "block",
  },

  aboutSection: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: isMobile ? "24px" : "48px",
    padding: isMobile ? "36px 20px" : "64px 48px",
  },
  aboutText: { flex: 1 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#C41E1E",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "10px",
  },
  aboutHeading: {
    fontSize: isMobile ? "21px" : "26px",
    color: "#1a1615",
    marginBottom: "16px",
    lineHeight: 1.3,
  },
  paragraphLeft: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "16px",
  },
  textLink: { color: "#C41E1E", fontSize: "13.5px", fontWeight: 700, textDecoration: "none" },
  aboutImageWrap: { flex: 1, width: "100%" },
  aboutImage: {
    width: "100%",
    height: isMobile ? "220px" : "340px",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f1e5e5",
    boxShadow: "0 14px 34px rgba(196,30,30,0.15)",
  },

  section: { padding: isMobile ? "32px 20px" : "56px 48px" },
  sectionShaded: { background: "#FFF6EF" },
  sectionInner: { padding: isMobile ? "32px 20px" : "56px 48px" },
  sectionHeaderLeft: { marginBottom: "32px", maxWidth: "560px" },
  sectionHeadingLeft: { fontSize: isMobile ? "20px" : "26px", color: "#1a1615", marginBottom: "10px" },
  sectionSubLeft: { color: "#6b625a", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.6 },

  grid3: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "14px" : "22px",
  },
  reasonCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px 22px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(196,30,30,0.08)",
    cursor: "default",
  },
  iconCircle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #C41E1E, #8E1616)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: "22px",
  },
  cardTitle: { fontSize: "15px", color: "#1a1615", marginBottom: "8px", fontWeight: 700 },
  cardText: { fontSize: "13px", color: "#6b625a", lineHeight: 1.65 },

  courseCard: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "18px",
    boxShadow: "0 4px 20px rgba(196,30,30,0.08)",
  },
  courseImage: { width: "100%", height: isMobile ? "160px" : "140px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#f1e5e5" },
  courseTitle: { fontSize: "14.5px", color: "#1a1615", margin: "14px 12px 8px" },
  courseLink: { color: "#C41E1E", fontSize: "13px", textDecoration: "none", fontWeight: 700 },

  blogScrollOuter: { overflow: "hidden", width: "100%" },
  blogTrack: { display: "flex", gap: "20px", width: "max-content" },
  blogCard: {
    flex: "0 0 auto",
    width: isMobile ? "220px" : "280px",
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(196,30,30,0.1)",
  },
  blogImage: { width: "100%", height: isMobile ? "140px" : "170px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#f1e5e5" },
  blogCardBody: { padding: "16px" },
  blogText: { fontSize: "13.5px", color: "#1a1615", margin: "0 0 12px", lineHeight: 1.55, minHeight: "40px" },
  blogReadMore: {
    display: "inline-block",
    fontSize: "12.5px",
    fontWeight: 700,
    color: "#fff",
    background: "#C41E1E",
    padding: "7px 14px",
    borderRadius: "20px",
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
    background: "linear-gradient(180deg, rgba(142,22,22,0.55) 0%, rgba(80,19,19,0.85) 100%)",
  },
  studyOverlay: {
    position: "relative",
    zIndex: 1,
    padding: isMobile ? "40px 20px" : "64px 48px",
    textAlign: "center",
    color: "#fff",
    maxWidth: "700px",
    margin: "0 auto",
  },
  studyHeading: { fontSize: isMobile ? "18px" : "22px", marginBottom: "4px" },
  studySubheading: { fontSize: isMobile ? "20px" : "26px", letterSpacing: "0.05em", color: "#FFD166", marginBottom: "16px" },
  studyText: { fontSize: isMobile ? "13px" : "14px", lineHeight: 1.7, color: "#FCEBEB" },
});