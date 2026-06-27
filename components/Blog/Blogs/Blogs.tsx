"use client";

import Link from "next/link";
import { blogs } from "./blogData";
import BlogCard from "./BlogCard";
import "./blogs.css";

export default function Blogs() {
  return (
    <main className="blogs-page">
      {/* Hero */}
      <section className="blogs-hero">
        <div className="container">
          <span className="blogs-eyebrow">PrimeDigitor Blog</span>

          <h1>Digital Marketing Insights</h1>

          <p>
            Learn SEO, Google Ads, Meta Ads, Content Marketing and proven
            digital growth strategies from the PrimeDigitor team.
          </p>

          <nav className="blogs-breadcrumb">
            <Link href="/">Home</Link>

            <span>/</span>

            <span>Blogs</span>
          </nav>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogs-section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blogs-cta">
        <div className="container">
          <h2>Need Help Growing Your Business?</h2>

          <p>
            From SEO to Google Ads and Meta Ads, PrimeDigitor helps businesses
            generate more traffic, leads and sales.
          </p>

          <Link href="/#contact" className="cta-btn">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
