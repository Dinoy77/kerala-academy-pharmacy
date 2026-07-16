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
  "Pharmaceutical Chemistry",
  "Pharmaceutical Analysis",
  "Pharmacognosy",
  "Pharmacology",
  "Pharmaceutics",
];

const teachingPositions = [
  { position: "Professor", qualification: "M.Pharmacy / PhD", experience: "10+ years" },
  { position: "Associate Professor", qualification: "M.Pharmacy / Pharm-D", experience: "5–8 years" },
  { position: "Assistant Professor", qualification: "M.Pharmacy / Pharm-D", experience: "0–3 years" },
  { position: "Faculty", qualification: "M.Pharmacy / Pharm-D", experience: "—" },
];

const nonTeachingPositions = [
  { position: "Librarian", qualification: "MLISc", experience: "0–5 years" },
  { position: "Assistant Librarian", qualification: "BLISc / CLISc", experience: "0–2 years" },
  { position: "Lab Assistant", qualification: "SSLC / +2", experience: "0–3 years" },
  { position: "Lab Technician", qualification: "D-Pharm / B.Sc Chemistry", experience: "—" },
];

function PositionTable({ title, rows, styles }) {
  return (
    <div style={styles.tableBlock}>
      <h3 style={styles.tableHeading}>{title}</h3>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Position</th>
              <th style={styles.th}>Qualification</th>
              <th style={styles.th}>Experience</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.position}>
                <td style={styles.td}>{r.position}</td>
                <td style={styles.td}>{r.qualification}</td>
                <td style={styles.td}>{r.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Career() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <div style={styles.eyebrow}>Why KAP</div>
      <h1 style={styles.heading}>Career Openings</h1>

      <div style={styles.deptCard}>
        <h2 style={styles.deptHeading}>Departments</h2>
        <div style={styles.deptTags}>
          {departments.map((d) => (
            <span style={styles.deptTag} key={d}>{d}</span>
          ))}
        </div>
      </div>

      <PositionTable title="Teaching Positions" rows={teachingPositions} styles={styles} />
      <PositionTable title="Non-Teaching Positions" rows={nonTeachingPositions} styles={styles} />

      <div style={styles.contactCard}>
        <p style={styles.contactText}>
          Candidates with relevant qualifications can apply with their latest
          resume and photo to:
        </p>
        <p style={styles.contactEmail}>careers@keralaacademyofpharmacy.com</p>
        <p style={styles.contactPhone}>Ph: 9746662136 (11 AM – 4 PM)</p>
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: isMobile ? "32px 20px 48px" : "56px 40px 64px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#9c7a22",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
    textAlign: "center",
  },
  heading: {
    fontSize: isMobile ? "22px" : "28px",
    color: "#3a1418",
    textAlign: "center",
    marginBottom: isMobile ? "28px" : "40px",
  },

  deptCard: {
    background: "#fbf8f3",
    borderRadius: "12px",
    padding: isMobile ? "20px" : "26px 30px",
    marginBottom: "28px",
  },
  deptHeading: {
    fontSize: "16px",
    color: "#3a1418",
    marginBottom: "14px",
  },
  deptTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  deptTag: {
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#6b1f27",
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "20px",
    padding: "6px 14px",
  },

  tableBlock: {
    marginBottom: "28px",
  },
  tableHeading: {
    fontSize: "16px",
    color: "#3a1418",
    marginBottom: "12px",
  },
  tableWrap: {
    overflowX: "auto",
    borderRadius: "10px",
    border: "1px solid #ece6d8",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: isMobile ? "12.5px" : "13.5px",
  },
  th: {
    background: "#6b1f27",
    color: "#f8ecc9",
    textAlign: "left",
    padding: "10px 14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  td: {
    padding: "10px 14px",
    borderTop: "1px solid #ece6d8",
    color: "#4a433e",
  },

  contactCard: {
    background: "#3a1418",
    borderRadius: "12px",
    padding: isMobile ? "24px 20px" : "30px 36px",
    textAlign: "center",
    marginTop: "12px",
  },
  contactText: {
    fontSize: "13.5px",
    color: "#e8dcc4",
    marginBottom: "10px",
  },
  contactEmail: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#c9a227",
    marginBottom: "6px",
  },
  contactPhone: {
    fontSize: "13px",
    color: "#e8dcc4",
    margin: 0,
  },
});