import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getAllBlogs,
  getBlogBySlug,
} from "@/data/blogs";

import ShareButtons from "@/components/blogs/ShareButtons";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import styles from "./BlogDetail.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle ?? blog.title,
    description:
      blog.seoDescription ?? blog.excerpt,

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.category}>
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <p>{blog.excerpt}</p>

        <div className={styles.meta}>
          <span>{blog.author}</span>

          <span>•</span>

          <span>{blog.publishedAt}</span>

          <span>•</span>

          <span>{blog.readingTime}</span>
        </div>

        <img
          src={blog.coverImage}
          alt={blog.title}
          className={styles.cover}
        />
      </section>

      <article className={styles.article}>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

        <ShareButtons
          title={blog.title}
          url={`https://primedigitor.com/blogs/${blog.slug}`}
        />
      </article>

      <RelatedBlogs currentBlog={blog} />
    </main>
  );
}
