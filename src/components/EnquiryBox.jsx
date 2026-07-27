import { useState, useEffect } from "react";

export default function EnquiryBox() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Show the box automatically after 10 seconds, same as the original site
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || name.length < 3) {
      setError("Please enter a valid name (minimum 3 characters).");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phone || !phonePattern.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!message || message.length < 10) {
      setError("Please enter a message (minimum 10 characters).");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://kap.ac.in/send-enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong sending your enquiry. Please try again.");
      }
    } catch (err) {
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  if (!visible) return null;

  return (
    <div style={styles.box}>
      <button
        style={styles.closeBtn}
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        ✕
      </button>
      <h3 style={styles.heading}>Enquire</h3>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Write your message here"
          value={form.message}
          onChange={handleChange}
          style={{ ...styles.input, minHeight: "80px", resize: "vertical" }}
        />

        {error && <p style={styles.error}>{error}</p>}
        {success && (
          <p style={styles.success}>Message sent successfully!</p>
        )}

        <button type="submit" style={styles.submitBtn} disabled={sending}>
          {sending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  box: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 900,
    width: "280px",
    background: "#fff",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
    border: "1px solid #f5e5e5",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#6b625a",
  },
  heading: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#C41E1E",
    marginBottom: "12px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "9px 12px",
    borderRadius: "8px",
    border: "1px solid #ece6d8",
    fontSize: "13px",
    fontFamily: "inherit",
  },
  submitBtn: {
    marginTop: "4px",
    background: "#C41E1E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "13.5px",
    fontWeight: 700,
    cursor: "pointer",
  },
  error: {
    color: "#c0392b",
    fontSize: "12px",
    margin: 0,
  },
  success: {
    color: "#2e7d32",
    fontSize: "12.5px",
    margin: 0,
  },
};