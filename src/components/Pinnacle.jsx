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

const quickNav = [
  { label: "International Study Tour", id: "tour" },
  { label: "Industrial Visit", id: "iv" },
  { label: "Business English", id: "business-english" },
  { label: "ALP", id: "ALP" },
  { label: "Internship & Externship", id: "internship" },
  { label: "Placement Cell", id: "placement" },
];

const sections = [
  {
    id: "tour",
    heading: "International Study Tour for Our Toppers",
    image: "/assets/images/international.jpg",
    content: [
      { type: "bold", text: "When you learn at KAP, you can lead anywhere in the world." },
      { type: "p", text: "Pharmacy sector as we all are aware of is the fact that it primarily belongs to the essential service sector but nothing comes without a cost in this world because workers depend on the manufacturing, packing, transport sales and distribution of medicines and there involves a industrial and business process until it reaches the drug stores and hospitals as a life and pain saving product. This is where Pharmacy as a service sector becomes a business and eventually turns as an industrial sector and vice versa." },
      { type: "p", text: "Pharmacy Business is now a global affair, and KAP'S commitment to international engagement prepares you for every challenge in the international business environment. At KAP, you can learn the language of a good business, get a close view of complex interconnected global issues, gain opportunities to study and travel abroad, and become an empowered global citizen." },
      { type: "p", text: "The international study tour is an elective program, which is designed to provide the toppers with a first-hand experience of the economic, cultural and geopolitical drivers in regions integral to the global economy." },
      { type: "p", text: `Every year, KAP organizes an international study tour to a defined location of international recognition. Students get a chance to perform activities like attending training programs at the respective university, visiting headquarters or prime facilities owned by several leading industrial brands, and undertaking a guided cultural and heritage exposure tour. The programme is composed of an on-campus session, one-week study tour, written assignments and report submission. This elaborate study tour also comprises management learning as a brief concept inside the pharmacy sector that is to see and implement such infrastructure and business processes in our nation after grasping concepts of new technologies and machinery advancements used in the pharmacy sector abroad. Our topper student group activities involving several industrial visits to great pharmaceutical companies hospitals and industries is for their field advantage to learn by experience and practicality. It's the old medicinal knowledge saying that comes to mind that, "Practice along with Practical Experience is the best teacher in the world" that is the theme everytime when we organise such study trips on a level 2 semester basis for all our students here at KAP. The students opting for the study tour will get opportunities to learn from a group of professionals and perform leadership activities while immersing themselves in another culture and building strong relationships.` },
    ],
  },
  {
    id: "iv",
    heading: "Industrial Visit",
    image: "/assets/images/visit.png",
    content: [
      { type: "p", text: "Kerala Academy Of Pharmacy organizes industrial visits for students' to update with latest updates on the industrial profession and to provide knowledge of new modern techniques used in the Pharmaceutical industry. Our students at KAP eagerly visit the worldwide reputed Pharma industries which helps them to develop innovative ideas among the students for the research on modern day pandemics." },
      { type: "p", text: "The Training Manager and the officials of these industries explain the happenings in detail to our students about the various Compounding, Dispensing, and packaging department. KAP students often have good interaction with them. They are also briefed about the business process, chernical flow and Quality assurance Departmental works. The students find this learning often very informative and a casual learning experience. Our students are often exposed to the manufacturing facilities so that they can greatly benefit from the interaction with the company professionals, giving them a real world experience in pharmaceutical industries." },
      { type: "p", text: "This outworldly chance to analyse the inside workings of regular pharmacy products and grasp concepts from the very basic till the end result, this is why it is a natural boon guaranteed by our learned faculty at KAP, who are trained in excellence to choose the best pharmaceutical for industrial visits." },
    ],
  },
  {
    id: "business-english",
    heading: "Introduction to Business English Training Program",
    image: "/assets/images/ad7.jpg",
    content: [
      { type: "p", text: "KAP'S Business English Training Programme in Pharmacy is a specialized course for our students intending to work in the pharmaceutical industry." },
      { type: "p", text: "You will learn industry vocabulary, discuss pharmaceutical topics, and review essential language. This business based language course covers many aspects of the industry including drug dosage forms, categories of drugs, laboratory safety systems, packaging challenges, and more." },
      { type: "p", text: "This business course in pharmacy, we are offering to the working professional too. If you are now working in the pharmaceutical industry or if you plan to work there in the future, this is the best course for you." },
      { type: "bold", text: "According to the syllabus, We teach a wide range of units that cover key aspects of the pharmaceutical industry" },
      { type: "list", items: ["The kickoff meeting;", "Drug delivery and development;", "Quality assurance;", "Clinical testing;", "Drug safety:", "Production and packaging."] },
      { type: "p", text: "Each unit includes grammar, vocabulary, listening, reading and discussion." },
      { type: "bold", text: "Overview of subject areas:" },
      { type: "list", items: ["The Pharmaceutical industry", "Active ingredient research and drug development", "Testing procedures in the pharmaceutical industry", "Quality assurance and audits", "Medication safety and regulations", "Products and packaging", "Products sold in pharmacies, both medicinal and non-medicinal products."] },
      { type: "h4", text: "Importance of English Training in Pharmacy" },
      { type: "p", text: "A particular focus of this training course could be communicating in the pharmaceutical industry or in pharmacies themselves, for instance, every subject is addressed in detail, from the correct way to greet people and small talk through to active listening. Particular attention is paid to preparing reports and presenting test results. Further topics include consultancy, giving recommendations and the right way to deal with questions." },
      { type: "p", text: "Participants also practise the proper way to present the advantages and side effects of particular drugs in English, which is of paramount importance to public. The seminar also covers weighing up pros and cons." },
    ],
  },
  {
    id: "ALP",
    heading: "ALP — Adventure Learning Programme at KAP",
    image: "/assets/images/adventure.png",
    content: [
      { type: "bold", text: "Introduction to ALP:" },
      { type: "p", text: "KAP distinguishes itself as an institution for practical & well-rounded learning. Adventure Learning Programme is designed to help develop our Students in the following areas ie. Trust, Support, Planning, Delegation, Leadership, Communication, Problem Solving, Time Management, Building Relationships, Creativity & Innovation. It might be bit un-orthodox to advocate the concept of Adventure Learning in Pharmacy School, but modern workplace requires an individual to portrait self-determination, problem solving ability, restraint, team working and poise and an adventurous activity quality develops such necessary traits in a pharmacist." },
      { type: "p", text: "This also helps a Pharmacy course aspirant to have a dynamic personality to face global corporate world. Therefore, it becomes essential for a pharmacist student to be introduced to adventure programs that offer ample scope for developing distinctive management ethos, personality traits, and cross-cultural demands of corporate world." },
      { type: "p", text: "They are intended to build a stronger sense of unity as well as promoting a broad spectrum of essential life skills, such as:" },
      { type: "h4", text: "Communication" },
      { type: "list", items: ["Increased group effectiveness and awareness.", "Individual awareness.", "Goal setting, planning and strategizing.", "Decision-making skills.", "Leadership,", "Trust", "Respect for others", "And more"] },
      { type: "bold", text: "KAP-ALP-Adventure Learning Programme" },
      { type: "p", text: "KAP Adventure Learning Programs promote adventure-based pragmatic activities. They are intended to build a stronger sense of unity as well as promoting a broad spectrum of essential life skills." },
    ],
  },
  {
    id: "internship",
    heading: "Internship, Externship and Research Opportunities at KAP",
    image: "/assets/images/kap3.jpeg",
    content: [
      { type: "p", text: "We, at Kerala Academy of Pharmacy offer compulsory internship and externship for our B-Pharmacy students. Our faculty at KAP collaborates with outstanding pharmaceutical business partners to offer experiences exclusively to student pharmacists at top pharmaceutical companies who have a specific interest in pursuing non-traditional pharmacy careers, such as medical affairs and managed care. Research, Externship and internship opportunities allow students to work closely with individuals having expertise in these areas. Specific tasks and responsibilities vary by experience. A competitive stipend is offered for all experiences." },
    ],
  },
  {
    id: "placement",
    heading: "Extensive Training Programme and Placement Cell",
    image: "/assets/images/ad7.jpg",
    content: [
      { type: "p", text: "The goal of the Placement Cell of KAP Institute is to provide employment opportunities and world class training to students in leading organizations and Industry. It further provides ample opportunities to the students to develop their personality by conducting programs regularly on communication, interpersonal, technical and business skills and other soft skills, so that they can face the global challenges of today and the future." },
      { type: "bold", text: "Goals in this course:" },
      { type: "p", text: "To achieve its goal, the Training & Placement Cell works towards recognizing the core competencies of students. The Training & Placement Cell firmly believes in 'Industry-Institute Interaction'. In order to accomplish 'Industry-Institute Interaction', it organizes technical talks and serninars to provide a platform for the budding students to interact with professionals from various industries. It encourages visits to the industries. The Placement Cell promotes extensive links with professional world and works towards creating relationships with various organizations in varied sectors of Pharmaceutical Industry." },
    ],
  },
];

function ContentPiece({ item, styles }) {
  if (item.type === "p") return <p style={styles.paragraph}>{item.text}</p>;
  if (item.type === "bold") return <p style={styles.boldLine}>{item.text}</p>;
  if (item.type === "h4") return <h4 style={styles.h4}>{item.text}</h4>;
  if (item.type === "list")
    return (
      <ul style={styles.list}>
        {item.items.map((li, i) => (
          <li key={i} style={styles.listItem}>{li}</li>
        ))}
      </ul>
    );
  return null;
}

export default function Pinnacle() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Academics</div>
          <h1 style={styles.heroHeading}>Pinnacles of KAP</h1>
        </div>
      </section>

      {/* Quick nav */}
      <div style={styles.quickNavWrap}>
        {quickNav.map((q) => (
          <a href={`#${q.id}`} key={q.id} style={styles.quickNavLink}>
            {q.label}
          </a>
        ))}
      </div>

      {/* Sections */}
      <div style={styles.sectionsWrap}>
        {sections.map((s, i) => (
          <div
            id={s.id}
            key={s.id}
            style={{
              ...styles.section,
              flexDirection: isMobile ? "column" : i % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={styles.sectionText}>
              <h2 style={styles.sectionHeading}>{s.heading}</h2>
              {s.content.map((item, j) => (
                <ContentPiece item={item} styles={styles} key={j} />
              ))}
            </div>
            <div style={styles.sectionImageWrap}>
              <div
                style={{ ...styles.sectionImage, backgroundImage: `url(${s.image})` }}
              />
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
    height: isMobile ? "200px" : "300px",
    backgroundImage: "url(/assets/images/lastad.jpg)",
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
    fontSize: isMobile ? "24px" : "34px",
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

  quickNavWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    background: "#fbf8f3",
    borderBottom: "1px solid #ece6d8",
    padding: isMobile ? "16px 20px" : "18px 40px",
  },
  quickNavLink: {
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#6b1f27",
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "20px",
    padding: "6px 14px",
    textDecoration: "none",
  },

  sectionsWrap: {
    padding: isMobile ? "8px 20px" : "16px 40px",
  },
  section: {
    display: "flex",
    gap: isMobile ? "20px" : "40px",
    alignItems: "flex-start",
    padding: isMobile ? "28px 0" : "40px 0",
    borderBottom: "1px solid #ece6d8",
  },
  sectionText: {
    flex: 1.4,
  },
  sectionHeading: {
    fontSize: isMobile ? "17px" : "20px",
    color: "#3a1418",
    marginBottom: "12px",
    lineHeight: 1.3,
  },
  paragraph: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "10px",
  },
  boldLine: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.7,
    color: "#3a1418",
    fontWeight: 700,
    marginBottom: "8px",
  },
  h4: {
    fontSize: isMobile ? "13.5px" : "14.5px",
    color: "#6b1f27",
    marginTop: "12px",
    marginBottom: "6px",
  },
  list: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: isMobile ? "12.5px" : "13.5px",
    color: "#4a433e",
    lineHeight: 1.8,
    marginBottom: "10px",
  },
  listItem: {
    marginBottom: "4px",
  },

  sectionImageWrap: {
    flex: "0 0 auto",
    width: isMobile ? "100%" : "260px",
  },
  sectionImage: {
    width: "100%",
    height: isMobile ? "180px" : "220px",
    borderRadius: "12px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 8px 24px rgba(58,20,24,0.1)",
  },
});