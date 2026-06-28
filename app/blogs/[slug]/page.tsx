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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://primedigitor.com";

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
    return {
      title: "Blog Not Found | PrimeDigitor",
    };
  }

  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const image = `${SITE_URL}${blog.coverImage}`;

  return {
    title: blog.seoTitle || blog.title,

    description:
      blog.seoDescription || blog.excerpt,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",

      url,

      title: blog.title,

      description: blog.excerpt,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: blog.title,

      description: blog.excerpt,

      images: [image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/blogs/${blog.slug}`;
    return (
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
            {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",

            headline: blog.title,

            description: blog.excerpt,

            image: `${SITE_URL}${blog.coverImage}`,

            author: {
              "@type": "Organization",
              name: blog.author,
            },

            publisher: {
              "@type": "Organization",
              name: "PrimeDigitor",
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": articleUrl,
            },

            url: articleUrl,

            datePublished: blog.publishedAt,

            keywords: blog.tags.join(", "),
          }),
        }}
      />
    </main>
  );
}
