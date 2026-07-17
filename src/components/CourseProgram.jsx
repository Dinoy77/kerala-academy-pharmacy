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
  return width < 900;
}

/**
 * Shared layout for course/program pages.
 *
 * @param {string} title - Page title (e.g. "B-Pharm")
 * @param {string} heroImage - Path to hero banner image
 * @param {Array} navItems - [{ id, label }] for the quick-jump sidebar
 * @param {Array} sections - [{ id, heading, paragraphs?, list?, table? }]
 */
export default function CourseProgram({ title, heroImage, navItems, sections }) {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Admission</div>
          <h1 style={styles.heroHeading}>{title}</h1>
        </div>
      </section>

      <div style={styles.layout}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarInner}>
            {navItems.map((n) => (
              <a href={`#${n.id}`} key={n.id} style={styles.sidebarLink}>
                {n.label}
              </a>
            ))}
            <Link to="/apply" style={styles.applyBtn}>
              Apply Now
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div style={styles.content}>
          {sections.map((s) => (
            <div id={s.id} key={s.id} style={styles.section}>
              <h2 style={styles.sectionHeading}>{s.heading}</h2>

              {s.paragraphs?.map((p, i) => (
                <p key={i} style={styles.paragraph}>{p}</p>
              ))}

              {s.list && (
                <ul style={styles.list}>
                  {s.list.map((li, i) => (
                    <li key={i} style={styles.listItem}>{li}</li>
                  ))}
                </ul>
              )}

              {s.table && (
                <div style={styles.tableWrap}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        {s.table.headers.map((h) => (
                          <th key={h} style={styles.th}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              style={
                                row.isTotal
                                  ? { ...styles.td, ...styles.tdBold }
                                  : styles.td
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.note && <p style={styles.note}>{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundColor: "#3a1418",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(58,20,24,0.85), rgba(58,20,24,0.5))",
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

  layout: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "0" : "36px",
    padding: isMobile ? "24px 20px" : "40px 40px",
  },

  sidebar: {
    flex: "0 0 auto",
    width: isMobile ? "100%" : "220px",
  },
  sidebarInner: {
    position: isMobile ? "static" : "sticky",
    top: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: isMobile ? "24px" : "0",
  },
  sidebarLink: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#3a1418",
    background: "#fbf8f3",
    border: "1px solid #ece6d8",
    borderRadius: "8px",
    padding: "10px 14px",
    textDecoration: "none",
  },
  applyBtn: {
    marginTop: "6px",
    textAlign: "center",
    background: "#6b1f27",
    color: "#f8ecc9",
    fontWeight: 600,
    fontSize: "13.5px",
    padding: "11px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  content: {
    flex: 1,
  },
  section: {
    marginBottom: isMobile ? "32px" : "44px",
    paddingTop: "8px",
  },
  sectionHeading: {
    fontSize: isMobile ? "17px" : "20px",
    color: "#6b1f27",
    marginBottom: "12px",
  },
  paragraph: {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "10px",
  },
  list: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: isMobile ? "12.5px" : "13.5px",
    color: "#4a433e",
    lineHeight: 1.9,
  },
  listItem: {
    marginBottom: "4px",
  },

  tableWrap: {
    overflowX: "auto",
    borderRadius: "10px",
    border: "1px solid #ece6d8",
    marginTop: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: isMobile ? "12px" : "13px",
  },
  th: {
    background: "#6b1f27",
    color: "#f8ecc9",
    textAlign: "left",
    padding: "9px 12px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  td: {
    padding: "9px 12px",
    borderTop: "1px solid #ece6d8",
    color: "#4a433e",
  },
  tdBold: {
    fontWeight: 700,
    color: "#3a1418",
    background: "#fbf8f3",
  },

  note: {
    fontSize: "12px",
    color: "#9c7a22",
    marginTop: "10px",
    fontStyle: "italic",
  },
});