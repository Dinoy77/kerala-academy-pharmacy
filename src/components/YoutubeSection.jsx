import { useState, useEffect, useRef } from "react";

const YOUTUBE_VIDEO_ID = "VykeKtk4854";

export default function YoutubeSection({ styles }) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&playsinline=1`;

  return (
    <section style={styles.videoSection}>
      <style>{`
        /* Continuous Falling & Rotating Animations */
        @keyframes fallCardLeft {
          0% {
            transform: translateY(-350px) rotate(-15deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translateY(650px) rotate(10deg);
            opacity: 0;
          }
        }

        @keyframes fallCardCenter {
          0% {
            transform: translateY(-380px) rotate(8deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(680px) rotate(-12deg);
            opacity: 0;
          }
        }

        @keyframes fallCardRight {
          0% {
            transform: translateY(-320px) rotate(12deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(620px) rotate(-8deg);
            opacity: 0;
          }
        }

        /* Continuous Looping Animations */
        .falling-card-1 {
          animation: fallCardLeft 12s linear infinite;
        }
        .falling-card-2 {
          animation: fallCardCenter 15s linear infinite 3s; /* 3s Delay */
        }
        .falling-card-3 {
          animation: fallCardRight 11s linear infinite 1.5s; /* 1.5s Delay */
        }

        .kap-video-3d:hover {
          transform: translateY(-6px);
          box-shadow: 0 35px 70px rgba(0,0,0,0.18) !important;
        }
      `}</style>

      {/* --- FALLING BACKGROUND CARDS --- */}
      
      {/* 1. Left Falling Card */}
      <div
        className="falling-card-1"
        style={{
          position: "absolute",
          top: "0",
          left: "3%",
          width: "210px",
          height: "270px",
          background: "#ffffff",
          borderRadius: "18px",
          padding: "14px 14px 40px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.08)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", height: "100%", background: "#FAF9F8", borderRadius: "10px", border: "1px solid #F0ECE6" }} />
      </div>

      {/* 2. Center Falling Card */}
      <div
        className="falling-card-2"
        style={{
          position: "absolute",
          top: "0",
          left: "44%",
          width: "230px",
          height: "290px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "16px 16px 44px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.09)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", height: "100%", background: "#FAF9F8", borderRadius: "12px", border: "1px solid #F0ECE6" }} />
      </div>

      {/* 3. Right Falling Card */}
      <div
        className="falling-card-3"
        style={{
          position: "absolute",
          top: "0",
          right: "4%",
          width: "240px",
          height: "300px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "16px 16px 46px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 22px 48px rgba(0, 0, 0, 0.08)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", height: "100%", background: "#FAF9F8", borderRadius: "12px", border: "1px solid #F0ECE6" }} />
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div style={{ ...styles.videoSectionInner, position: "relative", zIndex: 2 }}>
        <div style={styles.eyebrow}>Campus Life</div>
        <h2 style={styles.sectionHeadingLeft}>Watch Our Story</h2>

        <div ref={wrapperRef} className="kap-video-3d" style={styles.videoWrapper}>
          {isVisible && (
            <iframe
              src={embedUrl}
              title="Kerala Academy of Pharmacy"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}