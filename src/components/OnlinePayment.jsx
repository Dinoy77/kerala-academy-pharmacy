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

const feeAmounts = {
  "B-pharmacy LE": "135000.00",
  "Confirmation Fees B-pharm": "50000.00",
  "Confirmation Fees D-pharm": "25000.00",
};

const modalContent = {
  about: {
    title: "About Us",
    // NOTE: this text has some garbled characters in the original source
    // (likely an encoding issue on the live site) — worth cleaning up separately.
    text: "Kerala Academy of Pharmacy is located in Kattakada, Trivandrum, which is prevalently known as the soul of Kerala, India, established under the TRUST of Pankajakasthuri Herbal Research Foundation — a foundation laid by a young and dynamic Ayurveda physician and entrepreneur, Dr. J. Hareendran Nair, Founder and Managing Director of the Pankajakasthuri group of enterprises, also honoured with a Padma Shri by the Government of India for his services to the cause of Ayurveda. In 1996, he began manufacturing Ayurveda products sold under the brand name Pankajakasthuri. His first self-financed Ayurveda Medical College in Kerala, Pankajakasthuri Ayurveda Medical College, was the only group in the state to achieve ISO 9002 certification. Our Kerala Academy of Pharmacy, approved by the Pharmacy Council of India and AICTE New Delhi, is committed to excellence in teaching, research & innovation. The college offers two major programs: B-Pharmacy and D-Pharmacy.",
  },
  contact: {
    title: "Contact Us",
    text: "Pankajakasthuri Herbal Research Foundation, Kerala Academy of Pharmacy, Kandala, Neyyattinkara, Kattakada Road, Trivandrum, 695571. Phone: 9241330444",
  },
  privacy: {
    title: "Privacy Policy",
    text: "1. In general, you may browse our website without providing any data or information. However, to access classified information, you need to use the credentials provided to you as a Parent or Staff user. 2. Information provided by the user on this website shall be kept confidential and shall not be shared with anyone unless specifically provided for. 3. We may share your personal information with our bankers for clearing necessary fee payments. This information shall be strictly limited to what is legally permissible.",
  },
  terms: {
    title: "Terms & Conditions",
    text: "Usage of this website and all the online facilities provided by this domain, including the online payment facility, are governed by this Terms of Use Document. This document is published in accordance with the provisions of Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011. Users are responsible for the confidentiality of their login credentials. If any information provided is untrue or inaccurate, we reserve the right to deactivate the account immediately.",
  },
  refund: {
    title: "Refund & Cancellation Policy",
    text: "Registration fees (cost of the application form) once paid will not be refunded under any circumstances. Other refunds and cancellations will be processed as per the institution's rules.",
  },
  qr: {
    title: "QR Code",
    text: "You can scan this QR code using any QR code scanner. If you do not have one, you can download a free one from your app store.",
    image: "/assets/images/QR.png",
  },
};

export default function OnlinePayment() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [selectedFee, setSelectedFee] = useState("");
  const [amount, setAmount] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  const handleFeeChange = (e) => {
    const value = e.target.value;
    setSelectedFee(value);
    if (feeAmounts[value]) {
      setAmount(feeAmounts[value]);
    } else {
      setAmount("0.00");
    }
  };

  const isAmountReadonly = selectedFee && selectedFee !== "custom";

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <img src="/assets/images/logo.jpeg" alt="College Logo" style={styles.logo} />
        <h1 style={styles.headerTitle}>Kerala Academy of Pharmacy</h1>
      </div>

      <div style={styles.container}>
        <form action="https://kap.ac.in/payments/process.php" method="POST" style={styles.form}>
          <div style={styles.row}>
            <Field label="First Name" required>
              <input type="text" name="buyerFirstName" placeholder="First Name" required style={styles.input} />
            </Field>
            <Field label="Last Name" required>
              <input type="text" name="buyerLastName" placeholder="Last Name" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row}>
            <Field label="Email" required>
              <input type="email" name="buyerEmail" placeholder="Email" required style={styles.input} />
            </Field>
            <Field label="Phone" required>
              <input type="tel" name="buyerPhone" placeholder="Phone" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row}>
            <Field label="Address">
              <input type="text" name="address" placeholder="Address" required style={styles.input} />
            </Field>
            <Field label="City">
              <input type="text" name="city" placeholder="City" required style={styles.input} />
            </Field>
          </div>
          <div style={styles.row}>
            <Field label="Select Fees" required>
              <select
                name="selectFees"
                value={selectedFee}
                onChange={handleFeeChange}
                required
                style={styles.input}
              >
                <option value="" disabled>Select fee</option>
                <option value="B-pharmacy LE">B-pharmacy LE</option>
                <option value="Confirmation Fees B-pharm">Confirmation Fees B-pharm</option>
                <option value="Confirmation Fees D-pharm">Confirmation Fees D-pharm</option>
                <option value="custom">Custom</option>
              </select>
            </Field>
          </div>
          <div style={styles.row}>
            <Field label="Amount" required>
              <input
                type="number"
                name="amount"
                placeholder="INR Amount"
                min="100.00"
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                readOnly={isAmountReadonly}
                style={{
                  ...styles.input,
                  ...(isAmountReadonly ? styles.inputReadonly : {}),
                }}
              />
            </Field>
          </div>

          <input type="hidden" name="form-page" value="fee-payment" />
          <button type="submit" style={styles.submitBtn}>SUBMIT</button>
        </form>
      </div>

      <div style={styles.footer}>
        <button style={styles.footerLink} onClick={() => setActiveModal("about")}>About Us</button>
        {" | "}
        <button style={styles.footerLink} onClick={() => setActiveModal("contact")}>Contact Us</button>
        {" | "}
        <button style={styles.footerLink} onClick={() => setActiveModal("privacy")}>Privacy Policy</button>
        {" | "}
        <button style={styles.footerLink} onClick={() => setActiveModal("terms")}>Terms & Conditions</button>
        {" | "}
        <button style={styles.footerLink} onClick={() => setActiveModal("refund")}>Refund & Cancellation Policy</button>
        {" | "}
        <button style={styles.footerLink} onClick={() => setActiveModal("qr")}>QR Code</button>
      </div>

      {activeModal && (
        <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={() => setActiveModal(null)}>×</button>
            <h2 style={styles.modalTitle}>{modalContent[activeModal].title}</h2>
            <p style={styles.modalText}>{modalContent[activeModal].text}</p>
            {modalContent[activeModal].image && (
              <img
                src={modalContent[activeModal].image}
                alt="QR Code"
                style={styles.modalImage}
              />
            )}
          </div>
        </div>
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
  label: { fontSize: "12.5px", color: "#333", fontWeight: 600 },
  required: { color: "red" },
};

const getStyles = (isMobile) => ({
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f8f9fa",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "20px",
    background: "#eceff4",
    color: "#0f74d2",
  },
  logo: {
    display: "block",
    margin: "0 auto",
    maxWidth: "80px",
    height: "auto",
  },
  headerTitle: { fontSize: isMobile ? "18px" : "22px", margin: "10px 0 0" },

  container: {
    maxWidth: "800px",
    margin: isMobile ? "24px 16px" : "40px auto",
    padding: isMobile ? "20px" : "28px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  form: { display: "flex", flexDirection: "column" },
  row: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputReadonly: {
    background: "#e3e3e3",
    cursor: "default",
  },
  submitBtn: {
    display: "block",
    width: isMobile ? "100%" : "50%",
    padding: "15px",
    fontSize: "18px",
    color: "#fff",
    background: "#073ea3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px auto 0",
  },

  footer: {
    textAlign: "center",
    margin: "20px 0 40px",
    fontSize: "13px",
    color: "#555",
  },
  footerLink: {
    background: "none",
    border: "none",
    color: "#073ea3",
    cursor: "pointer",
    fontSize: "13px",
    padding: 0,
    textDecoration: "none",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 900,
    padding: "20px",
  },
  modalContent: {
    position: "relative",
    background: "#fff",
    borderRadius: "8px",
    padding: isMobile ? "24px 20px" : "30px",
    width: "100%",
    maxWidth: "520px",
    maxHeight: "80vh",
    overflowY: "auto",
    textAlign: "center",
  },
  modalClose: {
    position: "absolute",
    top: "10px",
    right: "16px",
    fontSize: "24px",
    color: "red",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  modalTitle: { fontSize: "18px", color: "#073ea3", marginBottom: "12px" },
  modalText: { fontSize: "13.5px", color: "#333", lineHeight: 1.7, textAlign: "left" },
  modalImage: { marginTop: "15px", maxWidth: "200px", height: "auto" },
});