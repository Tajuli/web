import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogLayout from "@/components/Blog/Blogs/BlogLayout";
import { blogPosts } from "@/components/Blog/Blogs/blogData";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const blog = blogPosts.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | PrimeDigitor",
    };
  }

  return {
    title: `${blog.title} | PrimeDigitor`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.cover],
      type: "article",
    },
    alternates: {
      canonical: `https://primedigitor.com/blogs/${blog.slug}`,
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: Props) {
  const blog = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!blog) {
    notFound();
  }

  return <BlogLayout blog={blog} />;
}
