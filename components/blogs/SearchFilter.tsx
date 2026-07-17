"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import type { Blog } from "@/data/blogs";
import styles from "./SearchFilter.module.css";

type Props = {
  blogs: Blog[];
};

export default function SearchFilter({ blogs }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((b) => b.category)),
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

  return (
    <>
      <div className={styles.toolbar}>
        <input
          type="text"
          aria-label="Search articles"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        <select
          aria-label="Filter articles by category"
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className={styles.result}>
        {filteredBlogs.length} article
        {filteredBlogs.length !== 1 && "s"} found
      </div>

      <div className={styles.grid}>
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className={styles.empty}>
          <h3>No articles found</h3>
          <p>Try another keyword or category.</p>
        </div>
      )}
    </>
  );
}
