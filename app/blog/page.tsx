import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Blogs.module.css";

const blogs = [
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
  {
    category: "Branding",
    title: "How Strong Branding Builds Customer Trust",
    desc: "A memorable brand creates credibility and long-term customer loyalty.",
    date: "Jun 2026",
  },
  {
    category: "Social Media",
    title: "Social Media Strategies That Actually Work",
    desc: "Simple yet powerful strategies to grow your audience and engagement.",
    date: "Jun 2026",
  },
  {
    category: "Web Design",
    title: "Website Design Trends for Modern Businesses",
    desc: "Explore the latest UI/UX trends that improve conversions and user experience.",
    date: "Jun 2026",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.blogs}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>BLOGS</span>

          <h1 className={styles.title}>
            Insights & Marketing Guides
          </h1>

          <p className={styles.subtitle}>
            Explore practical articles on SEO, Google Ads, branding, website
            design and digital marketing.
          </p>

          <div className={styles.grid}>
            {blogs.map((blog, index) => (
              <article key={index} className={styles.card}>
                <span className={styles.badge}>{blog.category}</span>

                <h3>{blog.title}</h3>

                <p>{blog.desc}</p>

                <div className={styles.footer}>
                  <span>{blog.date}</span>

                  <Link href="/blog">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
