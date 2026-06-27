export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;

  category: string;

  cover: string;

  author: string;

  publishedAt: string;

  readingTime: string;

  featured?: boolean;
}

export interface BlogPost extends BlogMeta {
  component: React.ComponentType;
}
