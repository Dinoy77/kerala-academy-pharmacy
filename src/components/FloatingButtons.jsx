import { useState } from "react";

export default function FloatingButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=918951220590&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={styles.whatsappBtn}
      >
        <img
          src="/assets/icons/watsappnew.jpg"
          alt="WhatsApp"
          style={styles.icon}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.textContent = "💬";
          }}
        />
      </a>

      <button
        onClick={() => setModalOpen(true)}
        aria-label="Enquire"
        style={styles.enquireBtn}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </button>

      {modalOpen && (
        <EnquireModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

function EnquireModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close">
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
          {success && <p style={styles.success}>Message sent successfully!</p>}

          <button type="submit" style={styles.submitBtn} disabled={sending}>
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  whatsappBtn: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    zIndex: 800,
    fontSize: "24px",
  },
  enquireBtn: {
    position: "fixed",
    bottom: "86px",
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #C41E1E, #8E1616)",
    color: "#fff",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 22px rgba(196,30,30,0.35)",
    zIndex: 800,
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
  icon: {
    width: "60%",
    height: "60%",
    objectFit: "contain",
    borderRadius: "4px",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 900,
    padding: "16px",
  },
  modalBox: {
    position: "relative",
    background: "#fff",
    borderRadius: "14px",
    padding: "24px",
    width: "100%",
    maxWidth: "340px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
  },
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#6b625a",
  },
  heading: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#C41E1E",
    marginBottom: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ece6d8",
    fontSize: "14px",
    fontFamily: "inherit",
  },
  submitBtn: {
    marginTop: "4px",
    background: "#C41E1E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "11px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  },
  error: {
    color: "#c0392b",
    fontSize: "12.5px",
    margin: 0,
  },
  success: {
    color: "#2e7d32",
    fontSize: "13px",
    margin: 0,
  },
};