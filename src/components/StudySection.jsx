import { useState, useEffect } from "react";

const tvmImages = [
  "/assets/images/tvm1.jpg",
  "/assets/images/tvm2.jpg",
  "/assets/images/tvm3.jpg",
  "/assets/images/tvm4.jpg",
];

export default function StudySection({ styles }) {
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