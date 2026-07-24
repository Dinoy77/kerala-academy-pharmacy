import { useState, useEffect } from "react";

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

const faqs = [
  {
    q: "What is Pharmacy?",
    type: "p",
    a: "Pharmacy is an art and science of collecting, combining, preparing, preserving and standardization of drugs and medicines either from natural or synthetic source.",
  },
  {
    q: "What is the duration of B-PHARM course?",
    type: "p",
    a: "4 year program with semester Schemes.",
  },
  {
    q: "What is the benefit of B-PHARM course?",
    type: "list",
    intro: "To become a competent:",
    items: [
      "Pharmacist",
      "Analyst",
      "Drug Inspector",
      "Marketing Manager",
      "Pharmaceutical Scientist",
      "Academician",
      "Research Fellow",
    ],
  },
  {
    q: "What are the peculiarities seen in KAP?",
    type: "list",
    items: [
      "Student-friendly campus",
      "Preparatory class room",
      "Well stocked library",
      "Hygienic cafeteria and recreation",
      "Well experienced faculty",
      "Well equipped laboratory",
    ],
  },
  {
    q: "What is the eligibility criteria for joining B-PHARM course?",
    type: "p",
    a: "For pharmacy courses, students must have passed plus two with Physics, Chemistry and Mathematics/Biology, and must have secured a minimum of 50% marks in the qualifying examination — with a separate minimum of 50% marks for Mathematics/Biology.",
  },
];

function FaqItem({ item, isOpen, onToggle, styles }) {
  return (
    <div style={styles.item}>
      <button style={styles.question} onClick={onToggle}>
        <span>{item.q}</span>
        <span style={{ ...styles.icon, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
          →
        </span>
      </button>
      <div
        style={{
          ...styles.answerWrap,
          maxHeight: isOpen ? "400px" : "0px",
        }}
      >
        {item.type === "p" ? (
          <p style={styles.answer}>{item.a}</p>
        ) : (
          <div style={styles.answer}>
            {item.intro && <p style={styles.listIntro}>{item.intro}</p>}
            <ul style={styles.bulletList}>
              {item.items.map((li, i) => (
                <li key={i} style={styles.listItem}>{li}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Faq() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>Frequently Asked Questions</h1>
        </div>
      </section>

      {/* FAQ list */}
      <section style={styles.list}>
        {faqs.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            styles={styles}
          />
        ))}
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: "url(/assets/images/faq.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(58,20,24,0.85), rgba(58,20,24,0.35))",
  },
  heroContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#f8ecc9",
    padding: "0 20px",
  },
  heroHeading: { fontSize: isMobile ? "22px" : "30px", margin: 0 },

  list: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: isMobile ? "24px 20px 48px" : "40px 40px 64px",
  },
  item: {
    borderBottom: "1px solid #ece6d8",
  },
  question: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    background: "none",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    padding: isMobile ? "16px 0" : "18px 4px",
    fontSize: isMobile ? "13.5px" : "15px",
    fontWeight: 600,
    color: "#3a1418",
  },
  icon: {
    flexShrink: 0,
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#6b1f27",
    color: "#f8ecc9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    transition: "transform 0.2s ease",
  },
  answerWrap: {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  },
  answer: {
    fontSize: isMobile ? "12.5px" : "13.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    paddingBottom: "16px",
    paddingRight: isMobile ? "0" : "40px",
  },
  listIntro: {
    margin: "0 0 8px",
  },
  bulletList: {
    margin: 0,
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "4px",
  },
});