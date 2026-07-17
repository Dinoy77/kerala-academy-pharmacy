import { useState, useEffect } from "react";

export default function CongratsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show once per browser session, not on every page navigation
    const alreadyShown = sessionStorage.getItem("congrats_popup_shown");
    if (!alreadyShown) {
      setVisible(true);
      sessionStorage.setItem("congrats_popup_shown", "1");
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay} onClick={() => setVisible(false)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          style={styles.closeBtn}
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          ×
        </button>
        <img
          src="/assets/images/congrats.jpg"
          alt="Congratulations - GPAT Qualifiers"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(42,14,17,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modal: {
    position: "relative",
    width: "340px",
    maxWidth: "85vw",
    maxHeight: "80vh",
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    border: "3px solid #c9a227",
    display: "flex",
    flexDirection: "column",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#3a1418",
    color: "#f8ecc9",
    border: "2px solid #c9a227",
    fontSize: "16px",
    cursor: "pointer",
    lineHeight: 1,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxHeight: "70vh",
    objectFit: "contain",
    display: "block",
  },
};