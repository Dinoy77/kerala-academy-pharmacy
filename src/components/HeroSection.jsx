import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroSection({ styles, isMobile, videoRef, muted, toggleMute }) {

  return (
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
            <Link to="/registration" className="kap-btn-primary" style={styles.btnPrimary}>
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