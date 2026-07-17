import CourseProgram from "./CourseProgram";

const navItems = [
  { id: "Overview", label: "Overview" },
  { id: "duration", label: "Duration" },
  { id: "eligibility", label: "Eligibility" },
];

const sections = [
  {
    id: "Overview",
    heading: "Overview",
    paragraphs: [
      "B-Pharm Lateral Entry program is designed for students who have successfully completed the 2-year D-Pharmacy. The duration of the program is 3 years. Students will have more knowledge in the field of pharmacy when compared to the 4-year B-Pharmacy.",
    ],
  },
  {
    id: "duration",
    heading: "Duration",
    paragraphs: ["3 Years"],
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    paragraphs: ["All Pass in D-Pharm"],
  },
];

export default function MPharm() {
  return (
    <CourseProgram
      title="B-Pharm (Lateral Entry)"
      heroImage="/assets/images/lateralentry.png"
      navItems={navItems}
      sections={sections}
    />
  );
}