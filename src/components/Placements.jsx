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

const infoBoxes = [
  {
    title: "Networking and Trust",
    text: "With our impeccable impression, trustworthiness and extensive networking throughout the year, we bring placement opportunities to our students from top companies in India and abroad. The resources and functions which we provide help the students for networking. Students will get the connections through the Experts who come from industry.",
  },
  {
    title: "Guest Talks by Industry and Academic Experts",
    text: "Guest/Expert talks are an integral part of education, especially in Pharmacy colleges. They provide students with opportunities to learn from experts and professionals with practical industry experience. These experts help students to gain knowledge about the latest trends and technologies in the pharmaceutical industry. One such college that focuses on providing the best education to its students is Kerala Academy of Pharmacy — we ensure that students get exposed to the industry through various events, workshops, and lectures. Expert Talks help students develop their skills and knowledge and enhance their professional network. These lectures provide an opportunity for students to ask questions and clarify their doubts from the experts in the industry. Our guest lectures keep students updated on the latest developments in the field and equip them with the skills needed to succeed in their careers.",
  },
];

const internshipPoints = [
  "KAP includes visits to industries, internships and team assignments to reinforce practical skills.",
  "Industry internship program which enhances the knowledge, awareness and skills of the students by letting them apply their learning to real world problems.",
  "After the classroom training and internship is complete, a corporate mentorship program is initiated wherein the students get to work under the guidance of leading management professionals in prestigious companies. This helps them to form professional networks and gain practical abilities.",
];

const trainingPoints = [
  "Soft Skill Training",
  "Resume Writing",
  "Mock Interviews",
  "Communication Workshops",
  "Entrepreneurship Development Program",
  "Foreign Language Course",
  "Pre-placement Talks",
  "Interviewing Techniques",
  "Case Studies",
  "Job Application Preparation",
  "Resume Writing",
  "Workshops",
  "Personal Effectiveness",
  "Seminars",
  "Industry Interactions",
  "Professional Portfolio Development",
];

export default function Placements() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Careers</div>
          <h1 style={styles.heroHeading}>Placements</h1>
        </div>
      </section>

      {/* Career Guidance & Placement Cell */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Career Guidance & Placement Cell</h2>
        <p style={styles.paragraph}>
          The placement program at KAP is focused on providing candidates with
          the most suitable jobs from leading employers. We uphold our
          position amongst the best Pharmacy colleges in India by ensuring
          that the recruiters get the best talent that adds significant value
          to their organization.
        </p>

        <h2 style={styles.sectionHeading}>How Do We Ensure Maximum Placements?</h2>
        <p style={styles.paragraph}>
          To ensure high placements, we train our students to build
          knowledge, skills and attitude that are required for the industry.
          Concurrently we form connections with leading companies to provide
          the best opportunities for them. This venture is undertaken by our
          specialized training and placement cell, which consists of
          competent professionals and Academic Experts. This is how our
          training and placement cell ensure the best career avenues for our
          students and prepare them to reap the best job opportunities.
        </p>
      </section>

      {/* Info boxes + center image */}
      <section style={styles.violetSection}>
        <div style={styles.violetInner}>
          <div style={styles.infoGrid}>
            {infoBoxes.map((box) => (
              <div style={styles.infoBox} key={box.title}>
                <h3 style={styles.infoBoxTitle}>{box.title}</h3>
                <p style={styles.infoBoxText}>{box.text}</p>
              </div>
            ))}
          </div>

          <div style={styles.centerImageWrap}>
            <div
              style={{
                ...styles.centerImage,
                backgroundImage: `url("/assets/images/kap2.jpeg")`,
              }}
            />
          </div>

          <div style={styles.infoGrid}>
            <div style={styles.infoBox}>
              <h3 style={styles.infoBoxTitle}>Internships and Externship Programs</h3>
              <p style={styles.infoBoxText}>
                The curriculum at Kerala Academy of Pharmacy also includes
                programs where the students get to work in the industry and
                gain practical knowledge and skills. This makes them
                industry-ready and also provides greater employment
                opportunities. Here are the key programs that form a bridge
                between classroom tutoring and professional practice:
              </p>
              <ul style={styles.infoList}>
                {internshipPoints.map((p, i) => (
                  <li key={i} style={styles.infoListItem}>{p}</li>
                ))}
              </ul>
            </div>

            <div style={styles.infoBox}>
              <h3 style={styles.infoBoxTitle}>Placement Preparation and Training</h3>
              <p style={styles.infoBoxText}>
                Lastly, the preparation for the placements at KAP begins.
                Multiple career guidance and training programs are conducted
                during this phase. These include:
              </p>
              <ul style={styles.infoListInline}>
                {trainingPoints.map((p, i) => (
                  <li key={i} style={styles.infoListItem}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Recruitment */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Campus Recruitment</h2>
        <p style={styles.paragraph}>
          The training and placement cell then invites leading companies from
          across India to take part in the recruitment process. Our trained
          Pharmacy candidates go on to ace the placement process.
        </p>

        <h2 style={styles.sectionHeading}>Outcome</h2>
        <p style={styles.paragraph}>
          In this manner, the practical experience gained during the
          Internships and Industrial mentorship programs comes together with
          our comprehensive classroom training to create industry-ready
          professionals. Our Pharmacy students avail the superior job
          opportunities that we provide, leading to high placements.
        </p>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: "url(/assets/images/placement.jpg)",
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
  heroHeading: { fontSize: isMobile ? "24px" : "32px", margin: 0 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#c9a227",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },

  section: {
    padding: isMobile ? "28px 20px" : "48px 40px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: isMobile ? "17px" : "20px",
    color: "#6b1f27",
    marginBottom: "12px",
    marginTop: "24px",
  },
  paragraph: {
    fontSize: isMobile ? "13px" : "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "14px",
  },

  violetSection: {
    background: "#f3ecff",
    padding: isMobile ? "32px 20px" : "48px 40px",
  },
  violetInner: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "24px",
  },
  infoBox: {
    background: "#fff",
    borderRadius: "12px",
    padding: isMobile ? "20px" : "26px",
    boxShadow: "0 4px 20px rgba(107,31,140,0.08)",
  },
  infoBoxTitle: {
    fontSize: "15px",
    color: "#3a1418",
    marginBottom: "10px",
    fontWeight: 700,
  },
  infoBoxText: {
    fontSize: "13px",
    lineHeight: 1.7,
    color: "#4a433e",
    marginBottom: "10px",
  },
  infoList: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: "12.5px",
    color: "#4a433e",
    lineHeight: 1.8,
  },
  infoListInline: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: "12.5px",
    color: "#4a433e",
    lineHeight: 1.9,
    display: isMobile ? "block" : "grid",
    gridTemplateColumns: isMobile ? "none" : "repeat(2, 1fr)",
    columnGap: "16px",
  },
  infoListItem: {
    marginBottom: "6px",
  },
  centerImageWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },
  centerImage: {
    width: isMobile ? "100%" : "500px",
    height: isMobile ? "200px" : "260px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#e6dcf5",
    boxShadow: "0 10px 30px rgba(107,31,140,0.15)",
  },
});