import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData"; // Adjust path if blogsData.js is placed elsewhere

export default function BlogsSection({ styles }) {
  // Filter or take the specific featured home blogs (slugs starting with blogh)
  const homeFeaturedBlogs = blogs.filter((b) => b.slug.startsWith("blogh"));

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
            {[...homeFeaturedBlogs, ...homeFeaturedBlogs].map((b, i) => (
              <div className="kap-blog-card kap-lift" style={styles.blogCard} key={`${b.slug}-${i}`}>
                <div style={styles.blogImageWrapper}>
                  <div className="kap-blog-img" style={{ ...styles.blogImage, backgroundImage: `url("${b.image}")` }} />
                  <span style={styles.blogCategoryTag}>{b.tag}</span>
                </div>
                <div style={styles.blogCardBody}>
                  <p style={styles.blogText}>{b.title || b.desc}</p>
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