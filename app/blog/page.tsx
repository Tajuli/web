import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import styles from "./Blogs.module.css";

const featured = {
  category: "SEO",
  title: "10 SEO Mistakes That Are Hurting Your Rankings",
  desc: "Discover the most common SEO mistakes businesses make and how to fix them for long-term organic growth.",
  date: "June 28, 2026",
  read: "6 min read",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
};

const sideBlogs = [
  {
    category: "Google Ads",
    title: "How to Reduce CPC Without Losing Conversions",
    date: "June 28, 2026",
    read: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Branding",
    title: "Why Every Business Needs Strong Branding",
    date: "June 26, 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
];

const blogs = [
  {
    category: "SEO",
    title: "10 SEO Mistakes That Are Hurting Your Rankings",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
  {
    category: "Google Ads",
    title: "How to Reduce CPC Without Losing Conversions",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
  {
    category: "Marketing",
    title: "Why Every Business Needs A High Converting Website",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
  {
    category: "Branding",
    title: "How Strong Branding Builds Customer Trust",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
  {
    category: "Social Media",
    title: "Social Media Strategies That Actually Work",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
  {
    category: "Web Design",
    title: "Website Design Trends For Modern Businesses",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2026",
  },
];

const mostRead = [
  blogs[5],
  blogs[0],
  blogs[1],
  blogs[2],
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.blogs}>
        <div className={`site-container ${styles.container}`}>
          <span className="eyebrow">BLOG</span>

          <h1 className={styles.pageTitle}>
            Insights & Marketing Guides
          </h1>

          <p className={styles.pageDesc}>
            Actionable articles about SEO, Web Design, Branding,
            Google Ads and Digital Marketing.
          </p>

          {/* ================= HERO ================= */}

          <section className={styles.heroGrid}>
            <Link href="/blog" className={styles.heroCard}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.heroContent}>
                <span className={styles.badge}>
                  {featured.category}
                </span>

                <h2>{featured.title}</h2>

                <p>{featured.desc}</p>

                <div className={styles.meta}>
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.read}</span>
                </div>
              </div>
            </Link>

            <div className={styles.rightColumn}>
              {sideBlogs.map((item, index) => (
                <Link
                  href="/blog"
                  key={index}
                  className={styles.sideCard}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                  />

                  <div className={styles.overlay} />

                  <div className={styles.sideContent}>
                    <span className={styles.badge}>
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <div className={styles.meta}>
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.read}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ================= CONTENT ================= */}

          <section className={styles.content}>
            <div>
              <h2 className="section-title">
                Recent Posts
              </h2>

              <div className={styles.postsGrid}>
                {blogs.map((blog, index) => (
                  <Link
                    href="/blog"
                    key={index}
                    className={styles.postCard}
                  >
                    <div className={styles.thumb}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.postBody}>
                      <span className={styles.badge}>
                        {blog.category}
                      </span>

                      <h3>{blog.title}</h3>

                      <span className={styles.postDate}>
                        {blog.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <h2 className="section-title">
                Most Read
              </h2>

              {mostRead.map((blog, index) => (
                <Link
                  href="/blog"
                  key={index}
                  className={styles.sidePost}
                >
                  <div className={styles.sideThumb}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div>
                    <h4>{blog.title}</h4>
                    <span>{blog.date}</span>
                  </div>
                </Link>
              ))}
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
