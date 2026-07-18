import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./BlogList";

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

export default function BlogDetail() {
  const { slug } = useParams();
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div style={styles.notFound}>
        <p>Blog post not found.</p>
        <Link to="/blogs" style={styles.backLink}>← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.imageWrap}>
        <div
          style={{ ...styles.image, backgroundImage: `url("${blog.image}")` }}
        />
      </div>
      <div style={styles.content}>
        <Link to="/blogs" style={styles.backLink}>← Back to Blogs</Link>
        <h1 style={styles.title}>{blog.title}</h1>
        {blog.date && <p style={styles.date}>{blog.date}</p>}

        {blog.content ? (
          blog.content.map((block, i) => {
            if (block.type === "subheading") {
              return <h3 key={i} style={styles.subheading}>{block.text}</h3>;
            }
            if (block.type === "list") {
              return (
                <ul key={i} style={styles.list}>
                  {block.items.map((item, j) => (
                    <li key={j} style={styles.listItem}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i} style={styles.desc}>{block.text}</p>;
          })
        ) : (
          <>
            <p style={styles.desc}>{blog.desc}…</p>
            <div style={styles.comingSoon}>
              Full article coming soon — check back shortly.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },
  notFound: {
    padding: "80px 20px",
    textAlign: "center",
    fontFamily: "system-ui, sans-serif",
  },
  imageWrap: {
    width: "100%",
    height: isMobile ? "220px" : "340px",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
  },
  content: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: isMobile ? "28px 20px" : "40px",
  },
  backLink: {
    display: "inline-block",
    fontSize: "13px",
    color: "#6b1f27",
    fontWeight: 600,
    textDecoration: "none",
    marginBottom: "18px",
  },
  title: {
    fontSize: isMobile ? "20px" : "26px",
    color: "#3a1418",
    marginBottom: "8px",
    lineHeight: 1.3,
  },
  date: {
    fontSize: "12.5px",
    color: "#9c7a22",
    fontWeight: 600,
    marginBottom: "20px",
  },
  subheading: {
    fontSize: isMobile ? "15px" : "16.5px",
    color: "#6b1f27",
    marginTop: "22px",
    marginBottom: "10px",
  },
  list: {
    margin: "0 0 16px",
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "13.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "14.5px",
    lineHeight: 1.8,
    color: "#4a433e",
    marginBottom: "20px",
  },
  comingSoon: {
    background: "#fbf8f3",
    border: "1px dashed #ddd0b0",
    borderRadius: "8px",
    padding: "16px",
    fontSize: "13px",
    color: "#9c7a22",
    textAlign: "center",
  },
});