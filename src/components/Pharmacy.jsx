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

// Every content block from the original page, in original order.
// type: "list" | "paragraphs"
const blocks = [
  {
    heading: "Detailed Analysis of All the Integrated Streams in Pharmacy",
    type: "list",
    items: [
      "Learning about all these streams is all about the courses offered in pharmacy — let's look at a couple of the favourites among the following:",
      "Pharmacognosy (study of obtaining drugs from plants and other natural sources) — Probiotics",
      "Pharmaceutical Chemistry or Medicinal Chemistry (chemical synthesis and development for market of pharmaceutical agents, or bio-active molecules)",
      "Pharmaceutical Analysis (a branch of practical chemistry involving identification, determination, quantification and purification of a substance, separation of the components of a solution or mixture, or determination of structure of chemicals)",
      "Pharmacology (the study of drugs and their actions on living systems)",
      "Pharmaceutics (the discipline of pharmacy dealing with turning a new chemical entity or old drugs into a medication to be used safely and effectively by patients — the science of dosage form design)",
    ],
    image: "/assets/images/ad8.jpg",
  },
  {
    heading: "Synopsis: Key Points to Address",
    type: "list",
    items: [
      "Definition and introduction to Pharmacy and it's myriad uses in the medical sector",
      "Pharmacy as an indispensable amenity to the public and hospitals",
      "Pharmacy as an educational course",
      "Pharmacy Courses offered to students in Kerala Academy Of Pharmacy",
      "What option fits me based on my choice in pharmacy based on your personality and dedication.",
      "Types of affordable pharmacy courses for our students at Kerala academy of Pharmacy (Approved by Pharmacy Council of India AICTE New Delhi & DME) ( Affiliated to Kerala University of Health Science)",
      "Affiliated to Kerala University of Health Science",
      "B-Pharmacy and D-Pharmacy courses and it's scope and job",
      "Conclusion (suggestion to students based on their preference)",
      "Report",
    ],
    image: "/assets/images/ad7.jpg",
    reverse: true,
  },
  {
    heading: "Introduction and Definition to Pharmaceutical Science",
    type: "paragraphs",
    paragraphs: [
      `Pharmacy broadly falls under the category of health science. Without pharmaceuticals, health science as we know it would be an impossible dream. Without pharmaceutical sectors and their students, hospitals would struggle, and people would lack access to antibiotics and essential treatments. As Mark Twain once teased, "Be careful when you take an antibiotic — you may die of a misprint."`,
    ],
    image: "/assets/images/lab.jpeg",
  },
  {
    heading: "Understanding the Definition and Meaning of Pharmacy",
    type: "paragraphs",
    paragraphs: [
      "Pharmacy is the clinical health science that links medical science with chemistry, and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs. The practice of pharmacy requires excellent knowledge of drugs, their mechanism of action, side effects, interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process.",
    ],
    image: "/assets/images/lab2.jpeg",
    reverse: true,
  },
  {
    heading: "Pharmacy as an Indispensable Factor in Our Life",
    type: "paragraphs",
    paragraphs: [
      "Monsieur! Madame! Let's agree on one thing — medicines are our lifeline between life and death. Louis XIV once quoted the Bible, saying: \"Even if you err, err on the side of living!\"",
      "This has never sounded truer than today, when we are amidst a pandemic killing millions, with new variants like Delta and Omicron (SARS-CoV-2) on the verge of taking precious lives from humankind.",
    ],
    image: "/assets/images/ad11.jpeg",
  },
  {
    heading: "Scope of Pharmacy As of Now",
    type: "paragraphs",
    paragraphs: [
      "The scope of pharmacy practice includes more traditional roles such as compounding and dispensing of medications, and it also includes more modern services related to health care, including clinical services, reviewing medications for safety and efficacy, and providing drug information.",
      "This is why one who is interested in Pharmaceuticals as a subject must follow their passion and indulge in courses offered by our SXB university which has a branch of learning for pharmacy, i.e., Kerala Academy of Pharmacy — which offers two major courses in pharmacy targeting the streams in pharmacy.",
    ],
    image: "/assets/images/kap2.jpeg",
    reverse: true,
  },
  {
    heading: "B-Pharmacy (B-Pharm) & D-Pharmacy (D-Pharm)",
    type: "paragraphs",
    paragraphs: [
      "Streams are plentiful in pharmacy, as described above, and such courses are based on an integrated learning approach taught by a quality faculty of teachers who not only lecture but also provide a practical approach to help students understand these subjects — taught through a hands-on, trial-and-error method.",
    ],
    image: "/assets/images/lib.jpeg",
  },
];

const midParagraphs = [
  "Like Agatha Christie, who was also a student of Pharmacy, used in her mystery novels various types of drugs and poisons as a means to an end. She used her understanding of pharmaceutical chemistry and pharmacology in all her novels as a magical understanding of pharmaceuticals, and bridged the gap between dosage-based prescription drugs and life-saving concoctions. Sometimes we humans take things for granted, but we must always remember that without the pharmacy and pharmaceuticals industry, doctors wouldn't be able to suggest any anti-depressants and anti-psychotic drugs, or pain killers and antibiotics, and life support systems would be unknown to humanity.",
  "Without anti-psychotics, crime and violence would skyrocket, and murders per city would reach a number impossible to fathom. Without anti-depressants, suicides would also go over the roof, and such situations would cause mayhem in the country — in the USA, mass shootings in schools and theatres are such examples.",
  "Some streams in pharmacy are Pharmacology, Pharmacognosy, Pharmaceutical Chemistry, Pharmacognosy and Pharmaceuticals, each specializing in a field of elaborate study dedicated to the health science sector, and these integrated courses are offered in our Kerala Academy of Pharmacy, which is ably administered by professionals who are easy-going, talented and friendly lecturers who guide you on the path to success and improvement in your career.",
];

const kapCoursesBlock = {
  heading: "Pharmacy Courses Under Kerala Academy of Pharmacy",
  paragraphs: [
    "KAP is an elite university approved by Pharmacy Council of India and AICTE New Delhi & DME, and we are also affiliated to Kerala University of Health Science. Under the able stewardship of our excellent faculty led by senior and junior tutors, we have been making rounds in pharmaceutical science by prepping students of remarkable talent into the health science sector. Compared to our competition, we are offering students these remarkable courses at a discount.",
  ],
  image: "/assets/images/ad8.jpg",
  reverse: true,
};

const bPharmDetails = {
  heading: "B-Pharmacy Course Details",
  meta: "We offer dual integrated courses in our university, at an affordable cost of ₹1,25,000/- PA — 4 yrs course",
  description:
    "Bachelor of Pharmacy (B.Pharm) is an under graduate course in the field of Pharmacy. This field mainly concerns with the preparation and dispensing of drugs and medicines. It is a course of 4 years duration. The program covers practical experiments along with theory classes.",
  roles: [
    "Drug Inspector",
    "Pharmacist",
    "Pharmaceutical Marketing (Medical Representative — AM/RM/MM)",
    "Quality Analyst",
    "Academician",
    "Quality Controller (Supervisor / Sr. Supervisor / Production Manager)",
    "Medical Underwriting (Medical Scribe / Medical Coder)",
    "Own Business or Self-Employment as a Pharmaceutical Distributor",
  ],
};

const dPharmDetails = {
  heading: "D-Pharmacy Course Details",
  meta: "Average of ₹48,000/- PA fee structure — 2 yrs diploma in pharm. (2 yrs under 1 Lakh)",
  description:
    "Diploma in Pharmacy — the course of study extends over a period of two academic years, and the course offers the students practical oriented training in various subjects. The basic pre-requisite for the registration to practice as a Pharmacist in our country.",
  roles: [
    "Pharmacist",
    "Pharmaceutical Marketing (Medical Representative — AM/RM/MM)",
    "Quality Analyst",
    "Quality Controller (Supervisor / Sr. Supervisor / Production Manager)",
    "Medical Underwriting (Medical Scribe / Medical Coder)",
    "Own Business or Self-Employment as a Pharmaceutical Distributor",
    "Lab Technician",
  ],
};

const closingBlocks = [
  {
    heading: "Conclusion and Report",
    type: "paragraphs",
    paragraphs: [
      "So now we have submitted to the students and pharmaceuticals aspirants details of these courses and the detailed fee structure from Kerala Academy Of Pharmacy. Like I have mentioned before, our university has great placement opportunities and internships with leading pharmaceutical firms, hence we charge some money — but it's the famous phrase from the movie The Schindler's List that comes to my mind:",
      `"Nice things cost good money."`,
      "Investing in learning is an investment in yourself.",
      "You pay for the quality and quality does not come without a cost. Hence an aspiring pharmacist or a future drug inspector must know what kind of course they sign up for, because such investments in ourselves are truly an asset to our future.",
      "So if you are a student who has a passion for pharmacy then hesitate no further — even diplomas can get you great placement in great companies, guaranteed by our institute.",
    ],
    image: "/assets/images/lab.jpeg",
  },
  {
    heading: "Final Report",
    type: "paragraphs",
    paragraphs: [
      "My favourite choice is Pharmacology (Biology + Pharmacy + Natural Resources), overlapping with biomedical science that studies the effects of drugs on animals and living organisms. Why is this most necessary? The current pandemic has been a threat to our lives, and such analysis and tests of natural pharmaceuticals on living organisms is a necessity to arrive at conclusions that can save mankind from unforeseen hazards.",
      "Such is the use of these pharmaceuticals — direly important to us — and all these streams are now gaining massive momentum to reach excellence in the future of biochemistry, biomedical and biopharmaceutical sectors, which will help us obtain tablets and injections faster than done before. This is why we must encourage our youth to take up a course in pharmacy, as they alone have the strength in their veins and agility in their bodies to dedicate a life in service to humans.",
      "After all, isn't service to mankind service to God?!",
    ],
    image: "/assets/images/lib.jpeg",
    reverse: true,
  },
];

function ContentBlock({ block, styles }) {
  return (
    <div style={{ ...styles.contentItem, flexDirection: block.reverse ? (styles.isMobile ? "column" : "row-reverse") : (styles.isMobile ? "column" : "row") }}>
      <div style={styles.contentText}>
        <h3 style={styles.blockHeading}>{block.heading}</h3>
        {block.type === "list" ? (
          <ul style={styles.list}>
            {block.items.map((item, i) => (
              <li key={i} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        ) : (
          block.paragraphs.map((p, i) => (
            <p key={i} style={styles.paragraph}>{p}</p>
          ))
        )}
      </div>
      <div style={styles.contentImageWrap}>
        <div style={{ ...styles.contentImage, backgroundImage: `url("${block.image}")` }} />
      </div>
    </div>
  );
}

export default function Pharmacy() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  styles.isMobile = isMobile;

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Why KAP</div>
          <h1 style={styles.heroHeading}>Pharmacy</h1>
        </div>
      </section>

      {/* Topics */}
      <section style={styles.topicsSection}>
        <h2 style={styles.topicsHeading}>What This Page Covers</h2>
        <ul style={styles.topicsList}>
          <li>Pharmacy as a career option</li>
          <li>Which pharmacy stream is the better career path for our students</li>
        </ul>
      </section>

      {/* Main content blocks */}
      <section style={styles.section}>
        {blocks.map((b, i) => (
          <ContentBlock block={b} styles={styles} key={i} />
        ))}

        {midParagraphs.map((p, i) => (
          <p key={i} style={styles.standaloneParagraph}>{p}</p>
        ))}

        <ContentBlock block={kapCoursesBlock} styles={styles} />

        {/* B-Pharm details */}
        <div style={styles.courseDetailCard}>
          <h3 style={styles.blockHeading}>{bPharmDetails.heading}</h3>
          <p style={styles.courseMeta}>{bPharmDetails.meta}</p>
          <p style={styles.paragraph}>{bPharmDetails.description}</p>
          <h4 style={styles.rolesHeading}>Opportunities After B-Pharmacy</h4>
          <ul style={styles.rolesList}>
            {bPharmDetails.roles.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>

        {/* D-Pharm details */}
        <div style={styles.courseDetailCard}>
          <h3 style={styles.blockHeading}>{dPharmDetails.heading}</h3>
          <p style={styles.courseMeta}>{dPharmDetails.meta}</p>
          <p style={styles.paragraph}>{dPharmDetails.description}</p>
          <h4 style={styles.rolesHeading}>Opportunities After D-Pharmacy</h4>
          <ul style={styles.rolesList}>
            {dPharmDetails.roles.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>

        {closingBlocks.map((b, i) => (
          <ContentBlock block={b} styles={styles} key={i} />
        ))}
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "200px" : "300px",
    backgroundImage: "url(/assets/images/medicine.jpg)",
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
    fontSize: isMobile ? "26px" : "34px",
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

  topicsSection: {
    background: "#fbf8f3",
    textAlign: "center",
    padding: isMobile ? "24px 20px" : "32px 40px",
  },
  topicsHeading: {
    fontSize: isMobile ? "16px" : "18px",
    color: "#3a1418",
    marginBottom: "12px",
  },
  topicsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "13.5px",
    color: "#6b625a",
    lineHeight: 2,
  },

  section: {

    padding: isMobile ? "32px 20px" : "48px 40px",
  },

  contentItem: {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "20px" : "36px",
    marginBottom: isMobile ? "36px" : "48px",
  },
  contentText: {
    flex: 1,
  },
  blockHeading: {
    fontSize: isMobile ? "16px" : "19px",
    color: "#3a1418",
    marginBottom: "10px",
    lineHeight: 1.3,
  },
  paragraph: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "10px",
  },
  standaloneParagraph: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "16px",
  },
  list: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: isMobile ? "12.5px" : "13.5px",
    color: "#4a433e",
    lineHeight: 1.8,
  },
  listItem: {
    marginBottom: "6px",
  },

  contentImageWrap: {
    flex: "0 0 auto",
    width: isMobile ? "100%" : "280px",
  },
  contentImage: {
    width: "100%",
    height: isMobile ? "180px" : "200px",
    borderRadius: "12px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
    boxShadow: "0 8px 24px rgba(58,20,24,0.1)",
  },

  courseDetailCard: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "12px",
    padding: isMobile ? "20px" : "28px",
    marginBottom: isMobile ? "24px" : "32px",
    boxShadow: "0 4px 20px rgba(58,20,24,0.06)",
  },
  courseMeta: {
    fontSize: "12.5px",
    color: "#9c7a22",
    fontWeight: 600,
    marginBottom: "12px",
  },
  rolesHeading: {
    fontSize: "13px",
    color: "#3a1418",
    marginTop: "14px",
    marginBottom: "8px",
  },
  rolesList: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: "12.5px",
    color: "#6b625a",
    lineHeight: 1.9,
  },
});