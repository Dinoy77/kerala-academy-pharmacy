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