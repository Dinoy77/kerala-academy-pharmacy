import { useState, useEffect, useRef } from "react";
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
  {
    title: "World Class Faculty",
    desc: "Outstanding and highly qualified faculty members with an excellent curriculum framed with academics and industry experts.",
    icon: "🎓"
  },
  {
    title: "Pioneering Research",
    desc: "Hands-on opportunities to work under expert guidance, using the latest facilities and tools to discover and publish.",
    icon: "🔬"
  },
  {
    title: "Global Exposure",
    desc: "Collaborations with top national and international universities through transformative exchange programmes.",
    icon: "🌍"
  },
];

const courses = [
  { title: "B-Pharm", duration: "4 Years", image: "/assets/images/lab.jpeg", link: "/bpharm" },
  { title: "D-Pharm", duration: "2 Years", image: "/assets/images/lab2.jpeg", link: "/dpharm" },
  { title: "B-Pharm (Lateral Entry)", duration: "3 Years", image: "/assets/images/kap2.jpeg", link: "/mpharm" },
];

const blogs = [
  { image: "/assets/images/lab.jpeg", description: "Study about pharmaceutical chemistry.", tag: "Chemistry", slug: "blogh1" },
  { image: "/assets/images/lab2.jpeg", description: "Study about Pharma practice.", tag: "Practice", slug: "blogh2" },
  { image: "/assets/images/kap2.jpeg", description: "Study about Pharmaceutics.", tag: "Pharmaceutics", slug: "blogh3" },
  { image: "/assets/images/kap3.jpeg", description: "Study about pharmacognosy and Phytochemistry.", tag: "Research", slug: "blogh4" },
  { image: "/assets/images/lab.jpeg", description: "Study about pharmacology.", tag: "Pharmacology", slug: "blogh5" },
  { image: "/assets/images/cls.jpeg", description: "Pharmacopoeia.", tag: "Guide", slug: "blogh6" },
  { image: "/assets/images/lab2.jpeg", description: "How to become a Pharmacist.", tag: "Career", slug: "blogh7" },
  { image: "/assets/images/b17.jpg", description: "Why Pharmacy is a good career.", tag: "Insights", slug: "blogh8" },
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

const YOUTUBE_VIDEO_ID = "VykeKtk4854";

function YoutubeAutoplaySection({ styles }) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&playsinline=1`;

  return (
    <section style={styles.videoSection}>
      <style>{`
        .kap-video-3d:hover {
          transform: perspective(1200px) rotateX(0deg) translateY(-6px);
          box-shadow: 0 40px 70px rgba(0,0,0,0.5), 0 20px 30px rgba(0,0,0,0.35);
        }
      `}</style>
      <div style={styles.videoSectionInner}>
        <div style={styles.eyebrow}>Campus Life</div>
        <h2 style={styles.sectionHeadingLeft}>Watch Our Story</h2>
        <div ref={wrapperRef} className="kap-video-3d" style={styles.videoWrapper}>
          {isVisible && (
            <iframe
              src={embedUrl}
              title="Kerala Academy of Pharmacy"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={styles.page}>
      <CongratsPopup />

      <style>{`
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes floatCardBounce { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-8px); } 
        }
        @keyframes pulseGlow {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        @keyframes blogScroll { 
          from { transform: translateX(0); } 
          to { transform: translateX(-50%); } 
        }
        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes drawSquiggle {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: 0; }
        }

        .hero-fade-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .kap-float-card { animation: floatCardBounce 4s ease-in-out infinite; }
        .blog-track { animation: blogScroll 35s linear infinite; }
        .blog-track:hover { animation-play-state: paused; }

        .kap-badge-glow {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .kap-btn-primary {
          background: linear-gradient(135deg, #ffffff 0%, #fff3d6 100%);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
        .kap-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(255, 209, 102, 0.4);
        }

        .kap-btn-outline { 
          transition: all 0.25s ease; 
        }
        .kap-btn-outline:hover { 
          background: rgba(255, 255, 255, 0.18); 
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px); 
        }

        /* Lift and hover animations for cards */
        .kap-lift { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .kap-lift:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 16px 32px rgba(196, 30, 30, 0.12);
          border-color: #FEE2E2;
        }

        .kap-icon { transition: transform 0.3s ease; }
        .kap-lift:hover .kap-icon { transform: rotate(-8deg) scale(1.12); }

        /* Course image zoom effect */
        .kap-course-card:hover .kap-course-img {
          transform: scale(1.06);
        }
        .kap-course-img {
          transition: transform 0.4s ease;
        }

        /* Blog image zoom effect */
        .kap-blog-card:hover .kap-blog-img {
          transform: scale(1.06);
        }
        .kap-blog-img {
          transition: transform 0.4s ease;
        }

        .kap-text-link { position: relative; display: inline-flex; alignItems: center; gap: 4px; }
        .kap-text-link::after { 
          content: ""; 
          position: absolute; 
          left: 0; 
          bottom: -2px; 
          width: 0; 
          height: 2px; 
          background: currentColor; 
          transition: width 0.25s ease; 
        }
        .kap-text-link:hover::after { width: 100%; }

        .kap-shimmer-word {
          background: linear-gradient(90deg, #FFD166 0%, #fff3c4 25%, #FFA07A 50%, #FFD166 75%, #fff3c4 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 3.5s linear infinite;
          position: relative;
          display: inline-block;
        }
        .kap-squiggle path {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: drawSquiggle 1s ease 0.6s forwards;
        }
      `}</style>

      {/* Hero — Full Background Video */}
      <section style={styles.hero}>
        <video
          ref={videoRef}
          style={styles.heroVideoBg}
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/college.jpeg"
        />


        <button
          onClick={toggleMute}
          style={styles.muteBtn}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>

        <div style={styles.heroTextScrim} />

        <div style={styles.heroInner}>
          <div className="hero-fade-1" style={styles.heroText}>

            {/* Admissions Badge */}
            <div className="kap-badge-glow" style={styles.heroTag}>
              <span style={styles.badgePulse} />
              <span style={{ marginRight: "6px", color: "#FFD166" }}>✦</span>
              <span>Admissions 2026 Open</span>
            </div>

            {/* Headline */}
            <h1 style={styles.heroHeading}>
              Build your future in{" "}
              <span style={styles.heroAccentWrap}>
                <span className="kap-shimmer-word">pharmacy</span>
                <svg
                  className="kap-squiggle"
                  viewBox="0 0 240 20"
                  style={styles.squiggleSvg}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 12 Q 30 2, 60 12 T 118 12 T 176 12 T 236 12"
                    fill="none"
                    stroke="#FFD166"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p style={styles.heroSub}>
              India's leading academy for industry-integrated pharmacy education,
              with placement support in the heart of Kerala.
            </p>

            {/* Action Buttons */}
            <div style={styles.heroActions}>
              <Link to="/apply" className="kap-btn-primary" style={styles.btnPrimary}>
                Apply now <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </Link>
              <Link to="/academics" className="kap-btn-outline" style={styles.btnOutline}>
                Explore programs
              </Link>
            </div>
          </div>

          {/* Floating Metric Card */}
          {!isMobile && (
            <div className="kap-float-card" style={styles.floatCardGlass}>
              <div style={styles.floatStat}>
                <div style={styles.floatValue}>100%</div>
                <div style={styles.floatLabel}>Placement Record</div>
              </div>
              <div style={styles.floatDivider} />
              <div style={styles.floatStat}>
                <div style={styles.floatValue}>1000+</div>
                <div style={styles.floatLabel}>Global Alumni</div>
              </div>
            </div>
          )}
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

      <YoutubeAutoplaySection styles={styles} />

      {/* Reasons to study (Why KAP) */}
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

      {/* Courses (Programs) */}
      <section style={styles.section}>
        <div style={styles.sectionHeaderLeft}>
          <div style={styles.eyebrow}>Programs</div>
          <h2 style={styles.sectionHeadingLeft}>Our Courses & Degrees</h2>
          <p style={styles.sectionSubLeft}>
            Explore the variety of accredited courses offered by KAP, catering to aspiring
            pharmacists and healthcare professionals.
          </p>
        </div>
        <div style={styles.grid3}>
          {courses.map((c) => (
            <div className="kap-lift kap-course-card" style={styles.courseCard} key={c.title}>
              <div style={styles.courseImageWrapper}>
                <div className="kap-course-img" style={{ ...styles.courseImage, backgroundImage: `url("${c.image}")` }} />
                <span style={styles.courseBadge}>{c.duration}</span>
              </div>
              <div style={styles.courseCardBody}>
                <h3 style={styles.courseTitle}>{c.title}</h3>
                <p style={styles.courseDesc}>Comprehensive hands-on training with clinical & industry integration.</p>
                <Link to={c.link} className="kap-text-link" style={styles.courseLink}>
                  Explore Program <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section style={styles.sectionShaded}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeaderLeft}>
            <div style={styles.eyebrow}>Latest News & Insights</div>
            <h2 style={styles.sectionHeadingLeft}>From our blog</h2>
            <p style={styles.sectionSubLeft}>Stay updated with news, pharmaceutical research, and campus highlights.</p>
          </div>
          <div style={styles.blogScrollOuter}>
            <div className="blog-track" style={styles.blogTrack}>
              {[...blogs, ...blogs].map((b, i) => (
                <div className="kap-blog-card kap-lift" style={styles.blogCard} key={`${b.slug}-${i}`}>
                  <div style={styles.blogImageWrapper}>
                    <div className="kap-blog-img" style={{ ...styles.blogImage, backgroundImage: `url("${b.image}")` }} />
                    <span style={styles.blogCategoryTag}>{b.tag}</span>
                  </div>
                  <div style={styles.blogCardBody}>
                    <p style={styles.blogText}>{b.description}</p>
                    <Link to={`/blogs/${b.slug}`} style={styles.blogReadMore}>
                      Read Article <span style={{ marginLeft: "4px" }}>→</span>
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
  page: { fontFamily: "system-ui, -apple-system, sans-serif", color: "#24211f", overflowX: "hidden" },

  hero: {
    position: "relative",
    minHeight: isMobile ? "480px" : "600px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  heroVideoBg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  muteBtn: {
    position: "absolute",
    bottom: "24px",
    right: "24px",
    zIndex: 3,
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "rgba(0, 0, 0, 0.45)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroTextScrim: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 70%)",
    zIndex: 1,
  },

  heroInner: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    padding: isMobile ? "48px 20px 64px" : "0 56px",
  },
  heroText: { maxWidth: "620px" },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.12)",
    color: "#ffffff",
    fontSize: "12.5px",
    fontWeight: 600,
    padding: "7px 16px",
    borderRadius: "30px",
    marginBottom: "22px",
    letterSpacing: "0.03em",
  },
  badgePulse: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#22c55e",
    marginRight: "10px",
    display: "inline-block",
    animation: "pulseGlow 2s infinite ease-in-out",
  },
  heroHeading: {
    fontSize: isMobile ? "34px" : "54px",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.14,
    margin: "0 0 20px",
    letterSpacing: "-0.01em",
    textShadow: "0 4px 20px rgba(0,0,0,0.25)",
  },
  heroAccentWrap: {
    position: "relative",
    display: "inline-block",
  },
  squiggleSvg: {
    position: "absolute",
    left: 0,
    bottom: isMobile ? "-8px" : "-12px",
    width: "100%",
    height: isMobile ? "12px" : "16px",
  },
  heroSub: {
    color: "#FCEBEB",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: 1.6,
    maxWidth: "460px",
    margin: "0 0 32px",
    textShadow: "0 1px 6px rgba(0,0,0,0.2)",
  },
  heroActions: { display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" },
  btnPrimary: {
    color: "#A21212",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "30px",
    fontSize: "14.5px",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },
  btnOutline: {
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    padding: "13px 28px",
    borderRadius: "30px",
    fontSize: "14.5px",
    fontWeight: 700,
    border: "1.5px solid rgba(255, 255, 255, 0.45)",
  },

  floatCardGlass: {
    marginTop: "40px",
    display: "inline-flex",
    background: "rgba(255, 255, 255, 0.88)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "18px",
    padding: "16px 28px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.22)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    gap: "24px",
  },
  floatStat: { textAlign: "center" },
  floatValue: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#C41E1E",
    letterSpacing: "-0.02em"
  },
  floatLabel: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#4a433e",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginTop: "2px"
  },
  floatDivider: { width: "1px", height: "32px", background: "rgba(0,0,0,0.08)" },

  wave: {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "100%",
    height: isMobile ? "30px" : "50px",
    display: "block",
    zIndex: 2,
  },

  videoSection: {
    padding: isMobile ? "40px 20px" : "64px 48px",
    background: "radial-gradient(ellipse at center, #FBD5D5 0%, #FFF6EF 65%)",
  },
  videoSectionInner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%",
    borderRadius: "18px",
    overflow: "hidden",
    marginTop: "24px",
    background: "#000",
    border: "6px solid rgba(255,255,255,0.9)",
    transform: "perspective(1200px) rotateX(3deg)",
    transformStyle: "preserve-3d",
    boxShadow:
      "0 30px 60px rgba(0,0,0,0.45), 0 15px 25px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  },

  /* About Section */
  aboutSection: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: isMobile ? "28px" : "56px",
    padding: isMobile ? "40px 20px" : "72px 56px",
    background: "#ffffff",
  },
  aboutText: { flex: 1 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.14em",
    color: "#C41E1E",
    textTransform: "uppercase",
    fontWeight: 800,
    marginBottom: "10px",
    display: "inline-block",
  },
  aboutHeading: {
    fontSize: isMobile ? "24px" : "32px",
    color: "#1a1615",
    marginBottom: "18px",
    lineHeight: 1.25,
    fontWeight: 800,
    letterSpacing: "-0.01em",
  },
  paragraphLeft: {
    fontSize: isMobile ? "14px" : "15px",
    lineHeight: 1.75,
    color: "#4a433e",
    marginBottom: "18px",
  },
  textLink: { color: "#C41E1E", fontSize: "14px", fontWeight: 700, textDecoration: "none" },
  aboutImageWrap: { flex: 1, width: "100%" },
  aboutImage: {
    width: "100%",
    height: isMobile ? "240px" : "360px",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f1e5e5",
    boxShadow: "0 16px 36px rgba(196,30,30,0.12)",
    border: "1px solid #FEE2E2",
  },

  /* Section Wrappers */
  section: { padding: isMobile ? "40px 20px" : "72px 56px", background: "#ffffff" },
  sectionShaded: { background: "#FEF2F2" }, // Soft background matching navbar tone
  sectionInner: { maxWidth: "1200px", margin: "0 auto" },
  sectionHeaderLeft: { marginBottom: "36px", maxWidth: "600px" },
  sectionHeadingLeft: { fontSize: isMobile ? "24px" : "32px", color: "#1a1615", marginBottom: "10px", fontWeight: 800, letterSpacing: "-0.01em" },
  sectionSubLeft: { color: "#6b625a", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.6 },

  grid3: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "18px" : "28px",
  },

  /* Why KAP Section */
  reasonCard: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "32px 24px",
    textAlign: "center",
    border: "1px solid #FEE2E2",
    boxShadow: "0 6px 20px rgba(196,30,30,0.05)",
    cursor: "default",
  },
  iconCircle: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #C41E1E 0%, #8E1616 100%)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "24px",
    boxShadow: "0 6px 16px rgba(196,30,30,0.25)",
  },
  cardTitle: { fontSize: "17px", color: "#1a1615", marginBottom: "10px", fontWeight: 700 },
  cardText: { fontSize: "14px", color: "#6b625a", lineHeight: 1.65 },

  /* Course / Program Cards */
  courseCard: {
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    textAlign: "left",
    border: "1px solid #FEE2E2",
    boxShadow: "0 6px 20px rgba(196,30,30,0.06)",
    display: "flex",
    flexDirection: "column",
  },
  courseImageWrapper: {
    position: "relative",
    width: "100%",
    height: isMobile ? "180px" : "200px",
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f1e5e5",
  },
  courseBadge: {
    position: "absolute",
    top: "14px",
    right: "14px",
    background: "rgba(196, 30, 30, 0.9)",
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: 700,
    padding: "5px 12px",
    borderRadius: "20px",
    backdropFilter: "blur(4px)",
    letterSpacing: "0.02em",
  },
  courseCardBody: {
    padding: "20px 22px 24px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  courseTitle: { fontSize: "18px", color: "#1a1615", marginBottom: "8px", fontWeight: 700 },
  courseDesc: { fontSize: "13.5px", color: "#6b625a", lineHeight: 1.55, marginBottom: "18px", flex: 1 },
  courseLink: { color: "#C41E1E", fontSize: "14px", textDecoration: "none", fontWeight: 700 },

  /* Blog Section */
  blogScrollOuter: { overflow: "hidden", width: "100%", padding: "10px 0 20px" },
  blogTrack: { display: "flex", gap: "24px", width: "max-content" },
  blogCard: {
    flex: "0 0 auto",
    width: isMobile ? "260px" : "310px",
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #FEE2E2",
    boxShadow: "0 6px 20px rgba(196,30,30,0.08)",
  },
  blogImageWrapper: {
    position: "relative",
    width: "100%",
    height: isMobile ? "150px" : "180px",
    overflow: "hidden",
  },
  blogImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f1e5e5",
  },
  blogCategoryTag: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
    background: "#ffffff",
    color: "#C41E1E",
    fontSize: "11px",
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  blogCardBody: { padding: "20px" },
  blogText: { fontSize: "14px", color: "#1a1615", margin: "0 0 16px", lineHeight: 1.55, fontWeight: 600, minHeight: "44px" },
  blogReadMore: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: 700,
    color: "#ffffff",
    background: "linear-gradient(135deg, #C41E1E 0%, #8E1616 100%)",
    padding: "8px 18px",
    borderRadius: "20px",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(196,30,30,0.2)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
    background: "linear-gradient(180deg, rgba(142,22,22,0.65) 0%, rgba(80,19,19,0.88) 100%)",
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
  studySubheading: { fontSize: isMobile ? "22px" : "28px", letterSpacing: "0.05em", color: "#FFD166", marginBottom: "16px", fontWeight: 800 },
  studyText: { fontSize: isMobile ? "13.5px" : "15px", lineHeight: 1.7, color: "#FCEBEB" },
});