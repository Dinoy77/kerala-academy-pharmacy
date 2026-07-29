import { Link } from "react-router-dom";

const blogs = [
  { image: "/assets/images/blog_ai_1.jpg", description: "Study about pharmaceutical chemistry.", tag: "Chemistry", slug: "blogh1" },
  { image: "/assets/images/blog_ai_2.jpg", description: "Study about Pharma practice.", tag: "Practice", slug: "blogh2" },
  { image: "/assets/images/blog_ai_3.jpg", description: "Study about Pharmaceutics.", tag: "Pharmaceutics", slug: "blogh3" },
  { image: "/assets/images/blog_ai_4.jpg", description: "Study about pharmacognosy and Phytochemistry.", tag: "Research", slug: "blogh4" },
  { image: "/assets/images/blog_ai_5.jpg", description: "Study about pharmacology.", tag: "Pharmacology", slug: "blogh5" },
  { image: "/assets/images/blog_ai_6.jpg", description: "Pharmacopoeia.", tag: "Guide", slug: "blogh6" },
  { image: "/assets/images/blog_ai_7.jpg", description: "How to become a Pharmacist.", tag: "Career", slug: "blogh7" },
  { image: "/assets/images/blog_ai_8.jpg", description: "Why Pharmacy is a good career.", tag: "Insights", slug: "blogh8" },
];

export default function BlogsSection({ styles }) {
  return (
    <section style={styles.sectionShaded}>
      <div style={styles.sectionInner}>
        <div style={styles.sectionHeaderLeft}>
          <div style={styles.eyebrow}>Latest News & Insights</div>
          <h2 style={styles.sectionHeadingLeft}>From our blog</h2>
          <p style={styles.sectionSubLeft}>Stay updated with news, pharmaceutical research, and campus highlights.</p>
        </div>
        <div style={styles.blogScrollOuter}>
          <div className="blog-track" style={styles.blogTrack}>
            {[...blogs, ...blogs].map((b, i) => (
              <div className="kap-blog-card kap-lift" style={styles.blogCard} key={`${b.slug}-${i}`}>
                <div style={styles.blogImageWrapper}>
                  <div className="kap-blog-img" style={{ ...styles.blogImage, backgroundImage: `url("${b.image}")` }} />
                  <span style={styles.blogCategoryTag}>{b.tag}</span>
                </div>
                <div style={styles.blogCardBody}>
                  <p style={styles.blogText}>{b.description}</p>
                  <Link to={`/blogs/${b.slug}`} style={styles.blogReadMore}>
                    Read Article <span style={{ marginLeft: "4px" }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}