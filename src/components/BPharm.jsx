import CourseProgram from "./CourseProgram";

const navItems = [
  { id: "Overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "opportunities", label: "Opportunities After B-Pharmacy" },
  { id: "fees", label: "B-Pharmacy Fees" },
];

const sections = [
  {
    id: "Overview",
    heading: "Overview",
    paragraphs: [
      "Bachelor of Pharmacy (B. Pharm.) is a four-year Professional Undergraduate Degree program that leads to the practice of Pharmacy. The core curriculum delivers both basic and advanced knowledge in the pharmaceutical sciences in various pharmacy departments such as Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Pharmacology, and Pharmacy Practice. The modules of the curriculum comprise learning about different aspects of Natural and Synthetic drugs, including their Origin, Chemistry, Medicinal uses, and Drug Action in Animals and Humans.",
      "Also, it provides training and skills development focusing on a variety of settings including the pharmaceutical industry, Hospital pharmacy, Research, and Innovations. The learning outcome of this program is pharmacy graduates can register as a Pharmacist with the Pharmacy Council. It provides rewarding career opportunities in the areas of both Government and Private sectors such as Pharmaceutical Firms, Regulatory Bodies, Hospital and Community pharmacies, Research & Development, Drug Discovery, and Innovations. It is a promising program for those who aspire to work and advance their higher studies abroad.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    paragraphs: [
      "Candidates who have passed two years +2 examination of Kerala CBSE / ICSE/NIOS Board or any equivalent examination of any other approved Board or university with not less than 50% marks in any combination comprising P.C.M or P.C.B (minimum eligibility should be based on the aggregate of P.C.M. or P.C.B) or P.C.M.B, PC and Computer Sciences, PC and Electronics.",
    ],
  },
  {
    id: "opportunities",
    heading: "Opportunities After B-Pharmacy",
    paragraphs: [
      "After completion of the B-Pharmacy Program, the professional can work in many profiles. Endless opportunities are also available in India and abroad, mainly in the Middle East and Western countries like UK, USA, Canada and Australia. Some of the profiles are listed below:",
    ],
    list: [
      "Drug Inspector",
      "Pharmacist",
      "Pharmaceutical Marketing (Medical Representative — AM/RM/MM)",
      "Quality Analyst",
      "Academician",
      "Quality Controller (Supervisor / Sr Supervisor / Production Manager)",
      "Medical Underwriting (Medical Scribes / Medical Coder)",
      "Own Business or Self Employment as Pharmaceutical Distributor",
    ],
  },
  {
    id: "fees",
    heading: "B-Pharmacy Fees (Merit Quota)",
    table: {
      headers: ["No", "Description", "1st year", "2nd year", "3rd year", "4th year"],
      rows: [
        [1, "Tuition fees", "108827", "108827", "108827", "108827"],
        [2, "Special fees", "41760", "29160", "29160", "29160"],
        [3, "Caution Deposit (Refundable)", "10000", "0", "0", "0"],
        [4, "Total", "160587", "137987", "137987", "137987"],
      ],
    },
    note: "*NB — fees mentioned above are subject to change as per orders from Govt. of Kerala & Admission Supervisory & Fee Regulatory Committee.",
  },
];

export default function BPharm() {
  return (
    <CourseProgram
      title="B-Pharm"
      heroImage="/assets/images/bpharm.png"
      navItems={navItems}
      sections={sections}
    />
  );
}