import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const infoLinks = [
  { title: "College Rules & Regulations", href: "/documents/THE_RULES_AND_REGULATION_OF_KAP.pdf", external: true },
  { title: "Hostel Fees Information", href: "#hostel-fee-structure" },
  { title: "Exam Notifications", href: "#exam-notifications" },
  { title: "University Results", href: "#university-results" },
  { title: "D-Pharm Results", href: "#dpharm-results" },
  { title: "Other Fees Collected by College", href: "#other-fee-structure" },
  { title: "Events", href: "/events", isRoute: true },
  { title: "Procedure for Releasing Original Documents", href: "/documents/PROCEDURE_FOR_RELEASING_ORIGINAL_DOCUMENTS.pdf", external: true },
  { title: "Procedure for Collecting Transfer Certificate (TC)", href: "/documents/PROCEDURE_FOR_COLLECTING_TRANSFER_CERTIFICATE.pdf", external: true },
  { title: "Uniform Details", href: "#uniform-fee-structure" },
  { title: "College Transportation Details", href: "#transportation-details" },
];

export default function InformationCenter() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>KAP</div>
          <h1 style={styles.heroHeading}>Information Center</h1>
        </div>
      </section>

      {/* Links grid */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Information Links</h2>
        <div style={styles.grid}>
          {infoLinks.map((link) =>
            link.isRoute ? (
              <div style={styles.card} key={link.title}>
                <h3 style={styles.cardTitle}>{link.title}</h3>
                <Link to={link.href} style={styles.knowMore}>Know More</Link>
              </div>
            ) : (
              <div style={styles.card} key={link.title}>
                <h3 style={styles.cardTitle}>{link.title}</h3>
                <a
                  href={link.href}
                  style={styles.knowMore}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  Know More
                </a>
              </div>
            )
          )}
        </div>
      </section>

      {/* Hostel Fee Structure */}
      <section id="hostel-fee-structure" style={styles.tableSection}>
        <h2 style={styles.tableHeading}>Hostel Fee Structure</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>No</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>1</td>
                <td style={styles.td}>Caution Deposit (Refundable)</td>
                <td style={styles.td}>₹10,000</td>
              </tr>
              <tr>
                <td style={styles.td}>2</td>
                <td style={styles.td}>Monthly Fees (Food & Accommodation)</td>
                <td style={styles.td}>₹6,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={styles.note}>
          <strong>NB:</strong> The hostel fee structure is the same for Boys & Girls.
        </p>
      </section>

      {/* Other Fee Structure */}
      <section id="other-fee-structure" style={styles.tableSectionShaded}>
        <h2 style={styles.tableHeading}>Other Fees Collected by College</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>No</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>1</td><td style={styles.td}>Industrial Visits</td><td style={styles.td}>₹3,000</td></tr>
              <tr><td style={styles.td}>2</td><td style={styles.td}>Records Fees</td><td style={styles.td}>₹160 – ₹250</td></tr>
              <tr><td style={styles.td}>3</td><td style={styles.td}>Uniform with ID Card</td><td style={styles.td}>₹4,500 + ₹500</td></tr>
              <tr><td style={styles.td}>4</td><td style={styles.td}>Stationery Items</td><td style={styles.td}>₹1,000</td></tr>
              <tr><td style={styles.td}>5</td><td style={styles.td}>Books</td><td style={styles.td}>₹3,000</td></tr>
              <tr><td style={styles.td}>6</td><td style={styles.td}>Library Charges</td><td style={styles.td}>₹500</td></tr>
            </tbody>
          </table>
        </div>
        <p style={styles.note}>
          <strong>NB:</strong> The fee structure is subject to change in accordance with the college's regulations.
        </p>
      </section>

      {/* Uniform Fee Structure */}
      <section id="uniform-fee-structure" style={styles.tableSection}>
        <h2 style={styles.tableHeading}>Uniform Fee Structure</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>No</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>1</td>
                <td style={styles.td}>Boys — Shirt, Pant</td>
                <td style={styles.td}>₹4,000</td>
              </tr>
              <tr>
                <td style={styles.td}>2</td>
                <td style={styles.td}>Girls — Shirt, Pant, Coat</td>
                <td style={styles.td}>₹4,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={styles.note}>
          <strong>NB:</strong> The uniform fee structure is the same for both B-Pharm and D-Pharm students.
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
    backgroundImage: "url(/assets/images/information.jpg)",
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
  },
  sectionHeading: {
    fontSize: isMobile ? "18px" : "22px",
    color: "#3a1418",
    textAlign: "center",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "16px",
  },
  card: {
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(58,20,24,0.06)",
  },
  cardTitle: {
    fontSize: "14px",
    color: "#3a1418",
    marginBottom: "14px",
    lineHeight: 1.4,
    minHeight: "40px",
  },
  knowMore: {
    display: "inline-block",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#fff",
    background: "#6b1f27",
    padding: "8px 18px",
    borderRadius: "6px",
    textDecoration: "none",
  },

  tableSection: {
    padding: isMobile ? "32px 20px" : "48px 40px",
    scrollMarginTop: "80px",
  },
  tableSectionShaded: {
    background: "#fbf8f3",
    padding: isMobile ? "32px 20px" : "48px 40px",
    scrollMarginTop: "80px",
  },
  tableHeading: {
    fontSize: isMobile ? "17px" : "20px",
    color: "#3a1418",
    marginBottom: "16px",
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
  note: {
    fontSize: "12.5px",
    color: "#9c7a22",
    marginTop: "12px",
  },
});