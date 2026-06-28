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
      title: "Blog Not Found | PrimeDigitor",
    };
  }

  const site =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://primedigitor.com";

  return {
    title: blog.seoTitle ?? blog.title,
    description:
      blog.seoDescription ?? blog.excerpt,

    alternates: {
      canonical: `${site}/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${site}/blogs/${blog.slug}`,
      type: "article",

      images: [
        {
          url: `${site}${blog.coverImage}`,
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

      images: [`${site}${blog.coverImage}`],
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

  const site =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://primedigitor.com";

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

        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={1200}
          height={700}
          priority
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
          url={`${site}/blogs/${blog.slug}`}
        />
      </article>

      <RelatedBlogs currentBlog={blog} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",

            headline: blog.title,

            description: blog.excerpt,

            image: `${site}${blog.coverImage}`,

            author: {
              "@type": "Organization",
              name: blog.author,
            },

            publisher: {
              "@type": "Organization",
              name: "PrimeDigitor",
            },

            datePublished: blog.publishedAt,

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${site}/blogs/${blog.slug}`,
            },
          }),
        }}
      />
    </main>
  );
}
