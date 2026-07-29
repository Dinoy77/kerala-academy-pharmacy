import RevealCard from "./RevealCard";

const reasons = [
  {
    title: "World Class Faculty",
    desc: "Outstanding and highly qualified faculty members with an excellent curriculum framed with academics and industry experts.",
    image: "/assets/images/faculty1.jpg"
  },
  {
    title: "Pioneering Research",
    desc: "Hands-on opportunities to work under expert guidance, using the latest facilities and tools to discover and publish.",
    image: "/assets/images/research.jpg"
  },
  {
    title: "Global Exposure",
    desc: "Collaborations with top national and international universities through transformative exchange programmes.",
    image: "/assets/images/global.jpg"
  },
];

export default function ReasonsSection({ styles }) {
  return (
    <section style={styles.sectionShaded}>
      <div style={styles.sectionInner}>
        <div style={styles.sectionHeaderLeft}>
          <div style={styles.eyebrow}>Why KAP</div>
          <h2 style={styles.sectionHeadingLeft}>Reasons to study at KAP</h2>
          <p style={styles.sectionSubLeft}>
            Equipped with years of rich legacy, KAP imparts high quality,
            interdisciplinary education at an affordable cost.
          </p>
        </div>
        <div style={styles.grid3}>
          {reasons.map((r, i) => (
            <RevealCard index={i} key={r.title}>
              <div className="kap-reason-card kap-lift" style={styles.reasonCard}>
                {/* Image Banner Container */}
                <div style={styles.iconCircle}>
                  <img
                    src={r.image}
                    alt={r.title}
                    style={styles.reasonImg}
                  />
                </div>

                {/* Card Body Container */}
                <div style={styles.reasonCardBody}>
                  <h3 style={styles.cardTitle}>{r.title}</h3>
                  <p style={styles.cardText}>{r.desc}</p>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}