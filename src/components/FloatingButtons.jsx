export default function FloatingButtons() {
  return (
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
  icon: {
    width: "60%",
    height: "60%",
    objectFit: "contain",
    borderRadius: "4px",
  },
};