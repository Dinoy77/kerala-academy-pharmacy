import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

export default function OnlineAdmission() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    kapId: "",
    course: "",
    name: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.kapId.trim() || !/^[A-Za-z0-9]+$/.test(form.kapId)) {
      newErrors.kapId = "KAP ID must contain only letters and numbers.";
    }
    if (!form.course) {
      newErrors.course = "Please select a course.";
    }
    if (!form.name.trim() || !/^[A-Za-z ]+$/.test(form.name)) {
      newErrors.name = "Name must only contain letters and spaces.";
    }
    if (!form.mobile.trim() || !/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/online-payment", { state: form });
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Application for B-PHARM & D-PHARM</h1>
        <p style={styles.subheading}>Fill all the details and pay application fee</p>

        <form onSubmit={handleNext} style={styles.form}>
          <Field label="KAP ID" error={errors.kapId}>
            <input
              type="text"
              name="kapId"
              placeholder="Enter your KAP ID"
              value={form.kapId}
              onChange={handleChange}
              style={styles.input}
            />
          </Field>

          <Field label="Select Course" error={errors.course}>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select a course</option>
              <option value="bpharm">BPharm</option>
              <option value="dpharm">DPharm</option>
              <option value="bpharm-lateral">BPharm Lateral Entry</option>
            </select>
          </Field>

          <Field label="Name" required error={errors.name}>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />
          </Field>

          <Field label="Mobile" required error={errors.mobile}>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={form.mobile}
              onChange={handleChange}
              style={styles.input}
            />
          </Field>

          <Field label="Email" required error={errors.email}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
          </Field>

          <div style={styles.footer}>
            <p style={styles.footerText}>Pay application fees</p>
            <button type="submit" style={styles.nextBtn}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label style={fieldStyles.wrap}>
      <span style={fieldStyles.label}>
        {label}
        {required && <span style={fieldStyles.required}> *</span>}
      </span>
      {children}
      {error && <span style={fieldStyles.error}>{error}</span>}
    </label>
  );
}

const fieldStyles = {
  wrap: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" },
  label: { fontSize: "13.5px", color: "#3a1418", fontWeight: 600 },
  required: { color: "#C41E1E" },
  error: { fontSize: "12px", color: "#c0392b" },
};

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "system-ui, sans-serif",
    background: "#fbf8f3",
    padding: isMobile ? "32px 16px 48px" : "56px 40px 72px",
  },
  container: {
    maxWidth: "560px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "14px",
    padding: isMobile ? "24px 20px" : "40px",
    border: "1px solid #000",
    boxShadow: "0 4px 24px rgba(58,20,24,0.08)",
  },
  heading: {
    textAlign: "center",
    fontSize: isMobile ? "19px" : "24px",
    color: "#1a1615",
    marginBottom: "8px",
  },
  subheading: {
    textAlign: "center",
    fontSize: "13.5px",
    color: "#6b625a",
    marginBottom: "28px",
  },
  form: { display: "flex", flexDirection: "column" },
  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  footer: {
    textAlign: "center",
    marginTop: "12px",
  },
  footerText: {
    fontSize: "13px",
    color: "#6b625a",
    marginBottom: "14px",
  },
  nextBtn: {
    background: "linear-gradient(135deg, #C41E1E, #8E1616)",
    color: "#fff",
    border: "none",
    borderRadius: "24px",
    padding: "12px 40px",
    fontSize: "14.5px",
    fontWeight: 700,
    cursor: "pointer",
  },
});