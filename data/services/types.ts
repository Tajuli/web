// ==========================================
// Prime Digitor Service Types
// Part 1 - Base Interfaces
// ==========================================

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroData {
  image: string;
  alt: string;
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  client?: string;
  description: string;
  result?: string;
}

export interface Testimonial {
  name: string;
  company?: string;
  designation?: string;
  image?: string;
  review: string;
  rating?: number;
}

export interface PricingPlan {
  name: string;
  description?: string;
  price?: string;
  features: string[];
  popular?: boolean;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Technology {
  name: string;
  description?: string;
}

export interface Tool {
  name: string;
  description?: string;
}

export interface SchemaData {
  type: string;
  data?: Record<string, unknown>;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}
// ==========================================
// Prime Digitor Service Types
// Part 2 - ServiceData Interface
// ==========================================

export interface ServiceData {
  // ==========================================
  // Basic Information
  // ==========================================

  slug: string;
  category: string;

  title: string;
  subtitle: string;
  description: string;

  // ==========================================
  // SEO
  // ==========================================

  seo: SeoData;

  // ==========================================
  // Hero
  // ==========================================

  hero: HeroData;

  // ==========================================
  // Statistics
  // ==========================================

  stats: ServiceStat[];

  // ==========================================
  // Overview
  // ==========================================

  benefits: ServiceBenefit[];

  // ==========================================
  // Features
  // ==========================================

  features: ServiceFeature[];

  // ==========================================
  // Working Process
  // ==========================================

  process: ServiceProcess[];

  // ==========================================
  // Why Choose Us
  // ==========================================

  whyChoose?: WhyChooseItem[];

  // ==========================================
  // Long SEO Content
  // ==========================================

  content?: string;

  // ==========================================
  // Industries
  // ==========================================

  industries?: string[];

  // ==========================================
  // Technologies
  // ==========================================

  technologies?: Technology[];

  // ==========================================
  // Tools
  // ==========================================

  tools?: Tool[];

  // ==========================================
  // Pricing
  // ==========================================

  pricing?: PricingPlan[];

  // ==========================================
  // Case Studies
  // ==========================================

  caseStudies?: CaseStudy[];

  // ==========================================
  // Testimonials
  // ==========================================

  testimonials?: Testimonial[];

  // ==========================================
  // FAQ
  // ==========================================

  faqs: ServiceFaq[];

  // ==========================================
  // CTA
  // ==========================================

  cta?: CTASection;

  // ==========================================
  // Related Services
  // ==========================================

  related: string[];

  // ==========================================
  // Breadcrumb
  // ==========================================

  breadcrumbs?: BreadcrumbItem[];

  // ==========================================
  // Schema.org
  // ==========================================

  schema?: SchemaData[];

  // ==========================================
  // Extra SEO Sections
  // ==========================================

  targetAudience?: string[];

  serviceIncludes?: string[];

  deliverables?: string[];

  tags?: string[];

  // ==========================================
  // Metadata
  // ==========================================

  lastUpdated?: string;
}
