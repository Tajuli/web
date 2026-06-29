export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}
