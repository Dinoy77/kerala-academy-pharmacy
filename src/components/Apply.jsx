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

function CustomSelect({ name, options, required, placeholder = "-- Select --" }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div style={selectStyles.wrap} ref={wrapRef}>
      <button
        type="button"
        style={selectStyles.trigger}
        onClick={() => setOpen(!open)}
      >
        <span style={{ color: value ? "#1a1615" : "#888" }}>
          {value ? options.find((o) => o.value === value)?.label : placeholder}
        </span>
        <span style={{ transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>

      {/* Hidden input keeps this working with FormData collection on submit */}
      <input type="hidden" name={name} value={value} />

      {open && (
        <div style={selectStyles.panel}>
          {options.map((o) => (
            <div
              key={o.value}
              style={selectStyles.option}
              onClick={() => {
                setValue(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const selectStyles = {
  wrap: { position: "relative", width: "100%" },
  trigger: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    fontFamily: "inherit",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "left",
  },
  panel: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "6px",
    maxHeight: "220px",
    overflowY: "auto",
    zIndex: 50,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
  option: {
    padding: "10px 12px",
    fontSize: "14px",
    cursor: "pointer",
    borderBottom: "1px solid #f2f2f2",
  },
};

export default function Apply() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData(form);
      const res = await fetch("https://kap.ac.in/send-application.php", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please check your connection and try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.feeBox}>Application Fee: ₹800</div>

      <h1 style={styles.heading}>Application For B-Pharm & D-Pharm</h1>
      <p style={styles.subheading}>
        Find all the details and submit your application *
      </p>

      {status === "success" ? (
        <div style={styles.form}>
          <p style={styles.successMsg}>
            ✅ Your application has been submitted successfully. Our team will get in touch with you shortly.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
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
            <Field label="Select Course" required>
              <CustomSelect
                name="course"
                required
                options={[
                  { value: "BPharm", label: "B.Pharm" },
                  { value: "DPharm", label: "D.Pharm" },
                ]}
              />
            </Field>
          </div>
          <div style={styles.row2}>
            <Field label="Alternate No">
              <input type="tel" name="altPhone" style={styles.input} />
            </Field>
            <Field label="Address" required>
              <textarea name="address" required style={{ ...styles.input, minHeight: "70px" }} />
            </Field>
          </div>
          <div style={styles.row3}>
            <Field label="Pincode">
              <input type="text" name="pincode" style={styles.input} />
            </Field>
            <Field label="District" required>
              <input type="text" name="district" required style={styles.input} />
            </Field>
            <Field label="State" required>
              <input type="text" name="state" required style={styles.input} />
            </Field>
          </div>

          {/* Academic Details */}
          <h2 style={styles.sectionTitle}>Academic Details</h2>
          <div style={styles.row2}>
            <Field label="10th Board Percentage" required>
              <input type="number" name="tenthPercentage" required style={styles.input} />
            </Field>
            <Field label="12th Board Percentage" required>
              <input type="number" name="twelfthPercentage" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row1}>
            <Field label="Subject" required>
              <CustomSelect
                name="subject"
                required
                options={[
                  { value: "PCB", label: "PCB" },
                  { value: "PCM", label: "PCM" },
                  { value: "Others", label: "Others" },
                ]}
              />
            </Field>
          </div>
          <div style={styles.row3}>
            <Field label="Specify Subject 1" required>
              <CustomSelect
                name="subject1"
                required
                options={[{ value: "Physics", label: "Physics" }]}
              />
            </Field>
            <Field label="Subject 2">
              <CustomSelect
                name="subject2"
                required
                options={[{ value: "Chemistry", label: "Chemistry" }]}
              />
            </Field>
            <Field label="Subject 3">
              <CustomSelect
                name="subject3"
                required
                options={[
                  { value: "Biology", label: "Biology" },
                  { value: "Maths", label: "Mathematics" },
                  { value: "biotechnology", label: "Biotechnology" },
                  { value: "cs", label: "Computer Science" },
                  { value: "others", label: "Others" },
                ]}
              />
            </Field>
          </div>
          <div style={styles.row3}>
            <Field label="Marks/100 (Subject 1)" required>
              <input type="number" name="marks1" required style={styles.input} />
            </Field>
            <Field label="Marks/100 (Subject 2)" required>
              <input type="number" name="marks2" required style={styles.input} />
            </Field>
            <Field label="Marks/100 (Subject 3)" required>
              <input type="number" name="marks3" required style={styles.input} />
            </Field>
          </div>

          {/* Parent / Guardian Details */}
          <h2 style={styles.sectionTitle}>Parent / Guardian Details</h2>
          <div style={styles.row3}>
            <Field label="Father's Name" required>
              <input type="text" name="fatherName" required style={styles.input} />
            </Field>
            <Field label="Occupation" required>
              <input type="text" name="fatherOccupation" required style={styles.input} />
            </Field>
            <Field label="Annual Salary">
              <input type="text" name="fatherSalary" style={styles.input} />
            </Field>
          </div>
          <div style={styles.row2}>
            <Field label="Father's Phone No" required>
              <input type="tel" name="fathersPhone" required style={styles.input} />
            </Field>
            <Field label="Father's Email" required>
              <input type="email" name="fathersEmail" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row3}>
            <Field label="Mother's Name" required>
              <input type="text" name="motherName" required style={styles.input} />
            </Field>
            <Field label="Occupation" required>
              <input type="text" name="motherOccupation" required style={styles.input} />
            </Field>
            <Field label="Annual Salary">
              <input type="text" name="motherSalary" style={styles.input} />
            </Field>
          </div>
          <div style={styles.row2}>
            <Field label="Mother's Phone No" required>
              <input type="tel" name="mothersPhone" required style={styles.input} />
            </Field>
            <Field label="Mother's Email" required>
              <input type="email" name="mothersEmail" required style={styles.input} />
            </Field>
          </div>

          {/* Documents */}
          <h2 style={styles.sectionTitle}>Documents</h2>
          <div style={styles.row2}>
            <Field label="Photo" required>
              <input type="file" name="photo" required style={styles.input} />
            </Field>
            <Field label="Signature" required>
              <input type="file" name="signature" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row2}>
            <Field label="10th Marks Card" required>
              <input type="file" name="sslc" required style={styles.input} />
            </Field>
            <Field label="12th Marks Card" required>
              <input type="file" name="plustwo" required style={styles.input} />
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

          {status === "error" && <p style={styles.errorMsg}>{errorMsg}</p>}

          <button type="submit" style={styles.submitBtn} disabled={status === "sending"}>
            {status === "sending" ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
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
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    fontSize: isMobile ? "15px" : "17px",
    color: "#C41E1E",
    borderBottom: "2px solid #f5e5e5",
    paddingBottom: "8px",
    margin: isMobile ? "20px 0 14px" : "28px 0 18px",
  },
  row1: { display: "flex", flexDirection: "column", gap: "14px", marginBottom: "14px" },
  row2: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "14px",
    marginBottom: "14px",
  },
  row3: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "14px",
    marginBottom: "14px",
  },
  input: {
    padding: "9px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
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

  successMsg: {
    fontSize: "16px",
    color: "#2e7d32",
    textAlign: "center",
    padding: "20px",
    lineHeight: 1.7,
  },
  errorMsg: {
    fontSize: "13px",
    color: "#c0392b",
    textAlign: "center",
    marginBottom: "12px",
  },
});