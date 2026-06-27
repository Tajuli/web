import { BlogPost } from "./types";

export function getFeaturedBlogs(posts: BlogPost[]) {
  return posts.filter((post) => post.featured);
}

export function getLatestBlogs(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
    );
  });
}

export function getBlogBySlug(
  posts: BlogPost[],
  slug: string
) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedBlogs(
  posts: BlogPost[],
  category: string,
  currentSlug: string
) {
  return posts
    .filter(
      (post) =>
        post.category === category &&
        post.slug !== currentSlug
    )
    .slice(0, 3);
}
