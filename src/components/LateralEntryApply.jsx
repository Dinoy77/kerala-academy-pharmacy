import { useState, useEffect, useRef } from "react";

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

export default function LateralEntryApply() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    const form = formRef.current;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.feeBox}>Application Fee: ₹800</div>

      <h1 style={styles.heading}>B-Pharm Lateral Entry Application</h1>
      <p style={styles.subheading}>
        For D-Pharm candidates applying for B-Pharm Lateral Entry *
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://kap.ac.in/payments/process.php"
        method="POST"
        encType="multipart/form-data"
        style={styles.form}
      >
        {/* Personal Details */}
        <h2 style={styles.sectionTitle}>Personal Details</h2>
        <div style={styles.row2}>
          <Field label="First Name" required>
            <input type="text" name="buyerFirstName" required style={styles.input} />
          </Field>
          <Field label="Last Name" required>
            <input type="text" name="buyerLastName" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="Email" required>
            <input type="email" name="buyerEmail" required style={styles.input} />
          </Field>
          <Field label="Phone No" required>
            <input type="tel" name="buyerPhone" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="Date of Birth" required>
            <input type="date" name="dob" required style={styles.input} />
          </Field>
          <Field label="Alternate No">
            <input type="tel" name="altPhone" style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="Address" required>
            <textarea name="address" required style={{ ...styles.input, minHeight: "70px" }} />
          </Field>
          <Field label="Pincode">
            <input type="text" name="pincode" style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="District" required>
            <input type="text" name="district" required style={styles.input} />
          </Field>
          <Field label="State" required>
            <input type="text" name="state" required style={styles.input} />
          </Field>
        </div>

        {/* Parent / Guardian Details */}
        <h2 style={styles.sectionTitle}>Parent / Guardian Details</h2>
        <div style={styles.row2}>
          <Field label="Father's Name" required>
            <input type="text" name="fatherName" required style={styles.input} />
          </Field>
          <Field label="Father's Phone No" required>
            <input type="tel" name="fathersPhone" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="Mother's Name" required>
            <input type="text" name="motherName" required style={styles.input} />
          </Field>
          <Field label="Mother's Phone No" required>
            <input type="tel" name="mothersPhone" required style={styles.input} />
          </Field>
        </div>

        {/* Documents */}
        <h2 style={styles.sectionTitle}>Documents</h2>
        <div style={styles.row2}>
          <Field label="10th Marks Card" required>
            <input type="file" name="sslc" required style={styles.input} />
          </Field>
          <Field label="12th Marks Card" required>
            <input type="file" name="plustwo" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="D-Pharm 1st Year Marks Card" required>
            <input type="file" name="dpharmYear1" required style={styles.input} />
          </Field>
          <Field label="D-Pharm 2nd Year Marks Card" required>
            <input type="file" name="dpharmYear2" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="D-Pharm Certificate" required>
            <input type="file" name="dpharmCertificate" required style={styles.input} />
          </Field>
          <Field label="Pharmacy Registration Certificate" required>
            <input type="file" name="pharmacyRegCertificate" required style={styles.input} />
          </Field>
        </div>
        <div style={styles.row2}>
          <Field label="Photo" required>
            <input type="file" name="photo" required style={styles.input} />
          </Field>
        </div>

        {/* Declaration */}
        <div style={styles.declarationRow}>
          <input type="checkbox" id="declaration" required style={styles.checkbox} />
          <label htmlFor="declaration" style={styles.declarationText}>
            I hereby solemnly affirm that the statement made and information
            furnished in my application and also in all enclosures thereto
            submitted by me are true. I declare that I will, if admitted,
            abide by the rules and regulations of the college.
          </label>
        </div>

        <input type="hidden" name="course" value="BPharmLateralEntry" />
        <input type="hidden" name="form-page" value="lateral-entry-application" />

        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label style={fieldStyles.wrap}>
      <span style={fieldStyles.label}>
        {label}
        {required && <span style={fieldStyles.required}> *</span>}
      </span>
      {children}
    </label>
  );
}

const fieldStyles = {
  wrap: { display: "flex", flexDirection: "column", gap: "6px", flex: 1 },
  label: { fontSize: "12.5px", color: "#4a433e", fontWeight: 600 },
  required: { color: "#C41E1E" },
};

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "system-ui, sans-serif",
    background: "#f4f4f9",
    position: "relative",
    padding: isMobile ? "24px 16px 48px" : "40px 40px 64px",
    overflowX: "hidden",
    maxWidth: "100vw",
    boxSizing: "border-box",
  },
  feeBox: {
    position: isMobile ? "static" : "absolute",
    top: isMobile ? "auto" : "40px",
    right: isMobile ? "auto" : "40px",
    display: isMobile ? "inline-block" : "block",
    marginBottom: isMobile ? "16px" : "0",
    background: "#3a1418",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    fontSize: isMobile ? "20px" : "26px",
    color: "#1a1615",
    marginBottom: "8px",
  },
  subheading: {
    textAlign: "center",
    fontSize: isMobile ? "12.5px" : "14px",
    color: "#6b625a",
    marginBottom: "24px",
  },
  form: {
    background: "#fff",
    borderRadius: "12px",
    padding: isMobile ? "20px" : "32px",
    maxWidth: "1100px",
    margin: "0 auto",
    border: "1px solid #000",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    fontSize: isMobile ? "15px" : "17px",
    color: "#C41E1E",
    borderBottom: "2px solid #f5e5e5",
    paddingBottom: "8px",
    margin: isMobile ? "20px 0 14px" : "28px 0 18px",
  },
  row2: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "14px",
    marginBottom: "14px",
  },
  input: {
    padding: "9px 12px",
    borderRadius: "6px",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  declarationRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    margin: "24px 0",
  },
  checkbox: { marginTop: "4px", flexShrink: 0 },
  declarationText: {
    fontSize: "12.5px",
    color: "#333",
    lineHeight: 1.6,
  },
  submitBtn: {
    display: "block",
    margin: "0 auto",
    background: "#ffc107",
    color: "#1a1615",
    border: "none",
    padding: "12px 44px",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
  },
});