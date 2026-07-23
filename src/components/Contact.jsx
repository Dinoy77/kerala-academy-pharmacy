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

export default function Contact() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your real backend/email handler
    setSent(true);
  };

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>KAP</div>
          <h1 style={styles.heroHeading}>Contact Us</h1>
        </div>
      </section>

      <section style={styles.content}>
        {/* Contact details */}
        <div style={styles.detailsCard}>
          <h2 style={styles.detailsHeading}>Get in Touch</h2>

          <div style={styles.detailRow}>
            <span style={styles.detailIcon}>📍</span>
            <p style={styles.detailText}>
              Kerala Academy of Pharmacy<br />
              Kandala, Near Kattakada<br />
              Trivandrum – 695572
            </p>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailIcon}>📱</span>
            <p style={styles.detailText}>Mobile: 9567508816</p>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailIcon}>📞</span>
            <p style={styles.detailText}>Helpline: 8957220590</p>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailIcon}>✉️</span>
            <p style={styles.detailText}>
              info@keralaacademyofpharmacy.com<br />
              info@kap.ac.in
            </p>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailIcon}>☎️</span>
            <p style={styles.detailText}>Ph: 0471-2297501</p>
          </div>
        </div>

        {/* Contact form */}
        <div style={styles.formCard}>
          <h2 style={styles.detailsHeading}>Get In Touch</h2>
          {sent ? (
            <p style={styles.successMsg}>Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Select Course</option>
                <option value="B-PHARM">B-PHARM</option>
                <option value="D-PHARM">D-PHARM</option>
              </select>
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={form.message}
                onChange={handleChange}
                style={{ ...styles.input, minHeight: "110px", resize: "vertical" }}
              />
              <button type="submit" style={styles.submitBtn}>Submit</button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section style={styles.mapSection}>
        <iframe
          title="KAP Location"
          src="https://www.google.com/maps?q=Kerala+Academy+of+Pharmacy,+Kandala,+Kattakada,+Trivandrum+695572&output=embed"
          style={styles.map}
          loading="lazy"
        />
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "240px",
    background: "#3a1418",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(107,31,39,0.9), rgba(58,20,24,0.9))",
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

  content: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "20px" : "32px",
    padding: isMobile ? "24px 20px" : "48px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  detailsCard: {
    flex: 1,
    background: "#fbf8f3",
    borderRadius: "14px",
    padding: isMobile ? "22px" : "30px",
  },
  formCard: {
    flex: 1.2,
    background: "#fff",
    border: "1px solid #ece6d8",
    borderRadius: "14px",
    padding: isMobile ? "22px" : "30px",
    boxShadow: "0 4px 20px rgba(58,20,24,0.06)",
  },
  detailsHeading: {
    fontSize: "17px",
    color: "#3a1418",
    marginBottom: "18px",
  },
  detailRow: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    marginBottom: "16px",
  },
  detailIcon: { fontSize: "16px", flexShrink: 0 },
  detailText: {
    fontSize: "13.5px",
    color: "#4a433e",
    lineHeight: 1.6,
    margin: 0,
  },
  detailNote: { fontSize: "11.5px", color: "#9c7a22" },

  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: {
    padding: "11px 14px",
    borderRadius: "8px",
    border: "1px solid #ece6d8",
    fontSize: "13.5px",
    fontFamily: "inherit",
  },
  submitBtn: {
    marginTop: "4px",
    background: "#6b1f27",
    color: "#f8ecc9",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  successMsg: {
    color: "#2e7d32",
    fontSize: "14px",
    padding: "20px 0",
  },

  mapSection: {
    width: "100%",
    height: isMobile ? "260px" : "380px",
  },
  map: {
    width: "100%",
    height: "100%",
    border: 0,
  },
});