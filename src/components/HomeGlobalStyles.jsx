// Global CSS (keyframes + utility classes) shared across multiple Home sections.
// Rendered once from Home.jsx.
export default function HomeGlobalStyles() {
  return (
    <style>{`
      /* --- BRAND SPLASH OVERLAY KEYFRAMES --- */
      @keyframes splashZoomIn {
        0% { transform: scale(0.85); opacity: 0; }
        50% { transform: scale(1.02); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes splashRingGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 209, 102, 0.4); }
        50% { box-shadow: 0 0 50px rgba(255, 209, 102, 0.8), 0 0 90px rgba(196, 30, 30, 0.6); }
      }
      @keyframes splashShimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

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

      .kap-lift { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
      .kap-lift:hover { 
        transform: translateY(-6px); 
        box-shadow: 0 16px 32px rgba(196, 30, 30, 0.12);
        border-color: #FEE2E2;
      }

      .kap-icon { transition: transform 0.3s ease; }
      .kap-lift:hover .kap-icon { transform: rotate(-8deg) scale(1.12); }

      .kap-course-card:hover .kap-course-img {
        transform: scale(1.06);
      }
      .kap-course-img {
        transition: transform 0.4s ease;
      }
      .kap-reason-card:hover img {
        transform: scale(1.08);
      }

      .kap-blog-card:hover .kap-blog-img {
        transform: scale(1.06);
      }
      .kap-blog-img {
        transition: transform 0.4s ease;
      }

      .kap-text-link { position: relative; display: inline-flex; align-items: center; gap: 4px; }
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
  );
}