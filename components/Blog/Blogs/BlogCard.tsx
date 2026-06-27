import Link from "next/link";
import { BlogMeta } from "./types";
import "./blogs.css";

type Props = {
  blog: BlogMeta;
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="blog-card">
      <div className="blog-card-image">
        <img src={blog.cover} alt={blog.title} />
      </div>

      <div className="blog-card-body">
        <span className="blog-category">
          {blog.category}
        </span>

        <h3>{blog.title}</h3>

        <p>{blog.excerpt}</p>

        <div className="blog-footer">
          <span className="blog-date">
            {blog.publishedAt}
          </span>

          <span className="read-more">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
