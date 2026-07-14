export default function Placeholder({ title }) {
  return (
    <div style={{ padding: "80px 40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", color: "#3a1418", marginBottom: "8px" }}>
        {title}
      </h1>
      <p style={{ color: "#6b625a", fontSize: "14px" }}>
        This page is coming soon.
      </p>
    </div>
  );
}