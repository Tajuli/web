
import BlogCard from "./BlogCard";
import {
  getRelatedBlogs,
  type Blog,
} from "@/data/blogs";

type Props = {
  currentBlog: Blog;
};

export default function RelatedBlogs({
  currentBlog,
}: Props) {
  const relatedBlogs = getRelatedBlogs(
    currentBlog.slug,
    currentBlog.category,
    3
  );

  if (relatedBlogs.length === 0) return null;

  return (
    <section className="relatedBlogs">
      <div className="sectionHeader">
        <span className="eyebrow">
          KEEP READING
        </span>

        <h2>You May Also Like</h2>

        <p>
          Explore more insights, strategies and
          practical guides from our latest blogs.
        </p>
      </div>

      <div className="relatedGrid">
        {relatedBlogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}
