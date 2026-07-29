import { Link } from "react-router-dom";

const courses = [
  { title: "B-Pharm", duration: "4 Years", image: "/assets/images/bpharm-student.png", link: "/bpharm" },
  { title: "D-Pharm", duration: "2 Years", image: "/assets/images/dpharm-student.png", link: "/dpharm" },
  { title: "B-Pharm (Lateral Entry)", duration: "3 Years", image: "/assets/images/lateral-student.png", link: "/mpharm" },
];

export default function CoursesSection({ styles }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeaderLeft}>
        <div style={styles.eyebrow}>Programs</div>
        <h2 style={styles.sectionHeadingLeft}>Our Courses & Degrees</h2>
        <p style={styles.sectionSubLeft}>
          Explore the variety of accredited courses offered by KAP, catering to aspiring
          pharmacists and healthcare professionals.
        </p>
      </div>
      <div style={styles.grid3}>
        {courses.map((c) => (
          <div className="kap-lift kap-course-card" style={styles.courseCard} key={c.title}>
            <div style={styles.courseImageWrapper}>
              <div className="kap-course-img" style={{ ...styles.courseImage, backgroundImage: `url("${c.image}")` }} />
              <span style={styles.courseBadge}>{c.duration}</span>
            </div>
            <div style={styles.courseCardBody}>
              <h3 style={styles.courseTitle}>{c.title}</h3>

              <Link to={c.link} className="kap-text-link" style={styles.courseLink}>
                Explore Program <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}