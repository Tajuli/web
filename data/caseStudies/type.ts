
export interface CaseStudy {
  id: number;

  // Basic
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  // Classification
  category:
    | "Website"
    | "Mobile App"
    | "Software"
    | "SEO"
    | "Google Ads"
    | "Facebook Ads"
    | "TikTok Marketing"
    | "Branding"
    | "Content Marketing"
    | "Other";

  // Client
  client: string;
  industry: string;

  // Images
  coverImage: string;
  gallery?: string[];

  // Overview
  challenge: string;
  solution: string;

  // Services
  services: string[];

  // Technologies
  technologies?: string[];

  // Results
  results: string[];

  // Optional Statistics
  metrics?: {
    label: string;
    value: string;
  }[];

  // Optional Testimonial
  testimonial?: {
    name: string;
    designation: string;
    company?: string;
    quote: string;
    avatar?: string;
  };

  // SEO
  seoTitle?: string;
  seoDescription?: string;

  // Status
  featured: boolean;
  published: boolean;

  // Dates
  completedAt: string;
  createdAt: string;
}
