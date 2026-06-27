import styles from "./Blog.module.css";

const posts = [
  {
    category: "SEO",
    title: "10 SEO Mistakes That Are Hurting Your Rankings",
    desc: "Discover the most common SEO mistakes businesses make and how to fix them for long-term organic growth.",
    date: "Jun 2026",
  },
  {
    category: "Google Ads",
    title: "How to Reduce CPC Without Losing Conversions",
    desc: "Learn practical strategies to improve ad quality, lower costs, and increase ROI from Google Ads.",
    date: "Jun 2026",
  },
  {
    category: "Marketing",
    title: "Why Every Business Needs a High-Converting Website",
    desc: "Your website should do more than look good. Here's how to turn visitors into paying customers.",
    date: "Jun 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>BLOG</span>

          <div className={styles.row}>
            <div>
              <h2>Insights & Marketing Guides</h2>
              <p>
                Practical SEO, advertising, and digital marketing tips to help
                your business grow online.
              </p>
            </div>

            <a href="/blog" className={styles.viewAll}>
              View All →
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.badge}>{post.category}</span>

              <h3>{post.title}</h3>

              <p>{post.desc}</p>

              <div className={styles.footer}>
                <span>{post.date}</span>

                <a href="#">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
