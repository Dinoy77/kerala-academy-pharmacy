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

const departments = [
  {
    title: "Pharmaceutics",
    image: "/assets/images/medicine.jpg",
    paragraphs: [
      "The Department of Pharmaceutics focuses on the design, development, and evaluation of novel drug delivery systems that enhance the therapeutic efficacy and safety of medications. Students are trained in formulating various pharmaceutical dosage forms such as tablets, capsules, injectables, and transdermal systems. Emphasis is placed on the optimization of drug delivery and release through innovative technologies.",
      "The primary goal of the department is to impart knowledge about the transformation of active pharmaceutical ingredients into effective and patient-friendly formulations. Research activities in the department explore advanced areas like nanotechnology, biopharmaceutics, and targeted drug delivery systems to address unmet medical needs.",
      "The department houses state-of-the-art laboratories equipped with modern instruments such as dissolution testers, tablet compression machines, and stability chambers. It actively encourages research in collaboration with industries and academic institutions, fostering innovation in pharmaceutical sciences.",
    ],
  },
  {
    title: "Pharmacognosy",
    image: "/assets/images/pharmacognosy-definition.jpg",
    paragraphs: [
      "The Department of Pharmacognosy is dedicated to the study of medicinal plants and natural products, focusing on their identification, extraction, and therapeutic applications. It provides students with in-depth knowledge of traditional medicine, phytochemistry, and the modern analytical techniques used for standardization and quality control.",
      "The department aims to integrate traditional wisdom with contemporary science, enabling the discovery of bioactive compounds that can lead to the development of new drugs. It emphasizes the importance of biodiversity conservation and sustainable utilization of natural resources in drug discovery.",
      "The well-equipped herbal garden and laboratories allow students and researchers to explore plant taxonomy, pharmacobotany, and phytopharmacology. Collaborative research programs with national and international organizations further enrich the department's contributions to natural product research.",
    ],
  },
  {
    title: "Pharmaceutical Chemistry",
    image: "/assets/images/ad6.jpg",
    paragraphs: [
      "The Department of Pharmaceutical Chemistry is the cornerstone of drug discovery and development, focusing on the design, synthesis, and evaluation of new chemical entities with therapeutic potential. Students are trained in medicinal chemistry, analytical techniques, and molecular modeling, fostering a deep understanding of drug structures and their biological interactions.",
      "The department's primary goal is to equip students with the skills required to develop safer and more effective medicines. Research activities include computational drug design, synthesis of novel molecules, and advanced analytical studies for quality assurance.",
      "State-of-the-art laboratories equipped with sophisticated instruments such as HPLC, FTIR, and UV-Visible spectrophotometers support teaching and research activities. The department actively collaborates with pharmaceutical industries to bridge the gap between academia and practical applications in drug development.",
    ],
  },
  {
    title: "Pharmacy Practice",
    image: "/assets/images/newind.jpg",
    paragraphs: [
      "The Department of Pharmacy Practice emphasizes the role of pharmacists in providing patient-centered care and optimizing medication use. It trains students to excel in clinical pharmacy, medication therapy management, and healthcare communication, preparing them to work in hospitals, community pharmacies, and healthcare organizations.",
      "The department focuses on imparting knowledge of pharmacovigilance, clinical trials, and drug interactions to ensure the safe and effective use of medications. It also trains students in the application of evidence-based medicine and fosters interdisciplinary collaboration with healthcare professionals.",
      "The department has well-established collaborations with hospitals and healthcare institutions, offering students practical exposure through internships and clinical rotations. Research activities focus on improving therapeutic outcomes, drug utilization patterns, and healthcare services.",
    ],
  },
  {
    title: "Pharmacology",
    image: "/assets/images/pharmacology.jpg",
    paragraphs: [
      "The Department of Pharmacology focuses on studying the effects of drugs on biological systems and exploring their therapeutic potential. It aims to equip students with knowledge about drug actions, uses, doses, and toxicity. The department emphasizes experimental and research skills through preclinical and toxicological studies using in vitro and in vivo models.",
      "With a focus on discovering mechanisms of drug action, the department facilitates the development of new medications and formulations. Students gain expertise in clinical pharmacology, biopharmaceutics, and pharmacovigilance. A CPCSEA-approved animal house supports advanced research, promoting innovations in drug discovery and safety evaluation.",
    ],
  },
];

export default function Department() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Admission</div>
          <h1 style={styles.heroHeading}>Departments</h1>
        </div>
      </section>

      {/* Department rows */}
      <div style={styles.rowsWrap}>
        {departments.map((d, i) => (
          <div
            key={d.title}
            style={{
              ...styles.row,
              flexDirection: isMobile ? "column" : i % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={styles.imageWrap}>
              <div
                style={{ ...styles.image, backgroundImage: `url("${d.image}")` }}
              />
            </div>
            <div style={styles.textWrap}>
              <h2 style={styles.deptHeading}>{d.title}</h2>
              {d.paragraphs.map((p, j) => (
                <p key={j} style={styles.paragraph}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: "url(/assets/images/department.webp)",
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#f8ecc9",
  },
  heroHeading: {
    fontSize: isMobile ? "24px" : "32px",
    margin: 0,
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#c9a227",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },

  rowsWrap: {
    padding: isMobile ? "24px 20px" : "48px 40px",
  },
  row: {
    display: "flex",
    gap: isMobile ? "18px" : "40px",
    alignItems: "center",
    padding: isMobile ? "24px 0" : "36px 0",
    borderBottom: "1px solid #ece6d8",
  },
  imageWrap: {
    flex: "0 0 auto",
    width: isMobile ? "100%" : "340px",
  },
  image: {
    width: "100%",
    height: isMobile ? "200px" : "240px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 10px 30px rgba(58,20,24,0.12)",
  },
  textWrap: {
    flex: 1.4,
  },
  deptHeading: {
    fontSize: isMobile ? "18px" : "22px",
    color: "#6b1f27",
    marginBottom: "12px",
  },
  paragraph: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "10px",
  },
});