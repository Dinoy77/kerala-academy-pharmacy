import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroSection({ styles, isMobile, videoRef, muted, toggleMute }) {
  // BRAND SPLASH OVERLAY STATE (Triggers on every mount/page load)
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  useEffect(() => {
    // Start fading after 1.8 seconds
    const fadeTimer = setTimeout(() => {
      setSplashFading(true);
    }, 1800);

    // Completely remove overlay after 2.4 seconds
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const dismissSplash = () => {
    setSplashFading(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  };

  return (
    <section style={styles.hero}>

      {/* BRAND SPLASH OVERLAY */}
      {showSplash && (
        <div
          onClick={dismissSplash}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 99,
            background: "radial-gradient(circle at center, #8E1616 0%, #4A0808 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            opacity: splashFading ? 0 : 1,
            transform: splashFading ? "scale(1.05)" : "scale(1)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease-out",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              textAlign: "center",
              animation: "splashZoomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            {/* Logo Emblem */}
            <div
              style={{
                width: isMobile ? "80px" : "100px",
                height: isMobile ? "80px" : "100px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFD166 0%, #C41E1E 100%)",
                padding: "3px",
                animation: "splashRingGlow 2.5s infinite ease-in-out",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/images/logonew.png"
                  alt="KAP Logo"
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) e.target.nextSibling.style.display = "block";
                  }}
                />
                <span
                  style={{
                    display: "none",
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "#C41E1E",
                  }}
                >
                  KAP
                </span>
              </div>
            </div>

            {/* Splash Title */}
            <h2
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "22px" : "32px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                margin: "0 0 6px",
              }}
            >
              KERALA ACADEMY OF PHARMACY
            </h2>
            <div
              style={{
                color: "#FFD166",
                fontSize: isMobile ? "11px" : "13px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Excellence in Healthcare & Research
            </div>

            {/* Shimmering Line Divider */}
            <div
              style={{
                width: "120px",
                height: "2px",
                margin: "0 auto",
                background:
                  "linear-gradient(90deg, transparent, #FFD166, transparent)",
                backgroundSize: "200% 100%",
                animation: "splashShimmer 1.5s infinite linear",
              }}
            />
          </div>
        </div>
      )}

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
  );
}