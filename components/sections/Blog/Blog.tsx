"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { blogs } from "@/data/blogs";

import styles from "./Blog.module.css";

export default function Blog() {
  const recentBlogs = blogs.slice(0, 6);

  return (
    <section id="blog" className="section">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Blog</p>

          <h2 className="section-title">
            Insights, tips and strategies to help your business grow online.
          </h2>
        </div>

        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>Recent Posts</h3>

          <Link href="/blogs" className={styles.viewAll}>
            View All
          </Link>
        </div>

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn} blog-prev`}
            aria-label="Previous blog"
          >
            ‹
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            className={styles.blogSwiper}
            loop
            speed={900}
            grabCursor
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {recentBlogs.map((blog) => (
              <SwiperSlide key={blog.slug}>
                <article className={styles.card}>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className={styles.imageWrapper}
                  >
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={800}
                      height={500}
                      className={styles.image}
                    />
                  </Link>

                  <div className={styles.content}>
                    <span className={styles.badge}>
                      {blog.category}
                    </span>

                    <h3 className={styles.title}>
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    <p className={styles.excerpt}>
                      {blog.excerpt}
                    </p>

                    <div className={styles.footer}>
                      <div className={styles.meta}>
                        <span>{blog.publishedAt}</span>
                        <span>•</span>
                        <span>{blog.readingTime}</span>
                      </div>

                      <Link
                        href={`/blogs/${blog.slug}`}
                        className={styles.readMore}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.nextBtn} blog-next`}
            aria-label="Next blog"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
