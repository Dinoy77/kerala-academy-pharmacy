import { useState, useEffect, useRef } from "react";

export default function RevealCard({ children, index = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1) rotate(0deg)"
          : "translateY(60px) scale(0.9) rotate(-3deg)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
    >
      {children}
    </div>
  );
}