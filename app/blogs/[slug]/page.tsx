import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  getAllBlogs,
  getBlogBySlug,
} from "@/data/blogs";

import ShareButtons from "@/components/blogs/ShareButtons";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import styles from "./BlogDetail.module.css";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { JsonLd, articleSchema, breadcrumbSchema, webpageSchema } from "@/lib/jsonLd";

type PageProps = {
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
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return createMetadata({ title: "Blog Not Found", path: `/blogs/${slug}`, noIndex: true });
  }

  return createMetadata({
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    path: `/blogs/${blog.slug}`,
    image: blog.coverImage,
    type: "article",
    publishedTime: blog.publishedAt,
    authors: [blog.author],
    keywords: blog.tags,
  });
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/blogs/${blog.slug}`);

  return (
    <>
      <main className={styles.page}>
        {/* Hero */}
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

          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={1200}
            height={700}
            priority
            className={styles.cover}
          />
        </section>

        {/* Article */}
        <article className={styles.article}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

          <ShareButtons
            title={blog.title}
            url={articleUrl}
          />
        </article>

        <RelatedBlogs currentBlog={blog} />

        <JsonLd data={[articleSchema(blog), articleSchema(blog, "Article"), webpageSchema(blog.title, blog.excerpt, `/blogs/${blog.slug}`), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }, { name: blog.title, path: `/blogs/${blog.slug}` }])]} />
      </main>
    </>
  );
}
