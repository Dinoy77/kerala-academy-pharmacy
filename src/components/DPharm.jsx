import CourseProgram from "./CourseProgram";

const navItems = [
  { id: "Overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "opportunities", label: "Opportunities After D-Pharmacy" },
  { id: "fees", label: "D-Pharmacy Fees" },
];

const sections = [
  {
    id: "Overview",
    heading: "Overview",
    paragraphs: [
      "Diploma in Pharmacy (D. Pharm.) is a two-year career-oriented Diploma Program which is the minimum qualification to register as a pharmacist in India. The core curriculum delivers basic knowledge in pharmaceutical sciences across all pharmacy departments such as Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Pharmacology, and Pharmacy Practice.",
      "It provides training and skills development in Hospital and Community Pharmacy activities including Drug Store Management, Prescription handling, Skills in Dispensing of Drugs, Inventory, Drug procurement, and Pharma Business. Learning outcomes of this program support Diploma in Pharmacy holders to register as a Pharmacist with the Pharmacy Council, which helps them work in both Government and Private sectors such as Hospital and Community pharmacies, Long-term care facilities (Old age homes, Palliative care for HIV/Cancer, rehabilitation centers, etc.). This program is suitable for those who seek higher pharmacy education through B. Pharm lateral entry (Bachelor of Pharmacy) in 3 years.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    paragraphs: [
      "Candidates who have passed two years +2 examination of Kerala/CBSE/ICSE/NIOS Board or any equivalent examination of any other approved Board or university with passing marks in any combination comprising P.C.M or P.C.B (minimum eligibility should be based on the aggregate of PCM or P.C.B) or P.C.M.B, PC and Computer Sciences, PC and Electronics.",
    ],
  },
  {
    id: "opportunities",
    heading: "Opportunities After D-Pharmacy",
    paragraphs: [
      "After completion of the D-Pharmacy Program, the professional can work in many profiles:",
    ],
    list: [
      "Pharmaceutical Marketing (Medical Representative — AM/RM/MM)",
      "Quality Analyst",
      "Quality Controller (Supervisor / Sr Supervisor / Production Manager)",
      "Medical Underwriting (Medical Scribes / Medical Coder)",
      "Own Business or Self Employment as Pharmaceutical Distributor",
      "Lab Technicians",
    ],
  },
  {
    id: "fees",
    heading: "D-Pharmacy Fees (Merit Quota)",
    table: {
      headers: ["No", "Description", "1st year", "2nd year"],
      rows: [
        [1, "Tuition fees", "40000", "40000"],
        [2, "Special fees", "3000", "2000"],
        [3, "Admission Fees", "1000", "0"],
        [4, "Stationary fees", "500", "500"],
        [5, "Health Insurance", "500", "500"],
        [6, "Caution Deposit", "1000", "0"],
        [7, "ID Cards", "500", "500"],
        [8, "Miscellaneous", "0", "3000"],
        [9, "Total", "46500", "46500"],
      ],
    },
    note: "*NB — fees mentioned above are subject to change as per orders from Govt. of Kerala & Admission Supervisory & Fee Regulatory Committee.",
  },
];

export default function DPharm() {
  return (
    <CourseProgram
      title="D-Pharm"
      heroImage="/assets/images/dpharm.png"
      navItems={navItems}
      sections={sections}
    />
  );
}