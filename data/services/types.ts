// ==========================================
// Prime Digitor Service Types
// Enterprise SEO Service Page Structure
// ==========================================

hero: {
    image: string;
    alt: string;
}

seo: {
    title: string;
    description: string;
    keywords: string[];
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
  title?: string;
  description?: string;
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

export interface ServiceData {
  // Basic Information
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  metaKeywords?: string[];

  // Hero
  heroImage: string;

  // Statistics
  stats: ServiceStat[];

  // Main Features
  features: ServiceFeature[];

  // Benefits
  benefits: string[];

  // Workflow
  process: ServiceProcess[];

  // Long SEO Content
  content?: string;

  // Why Choose Us
  whyChoose?: WhyChooseItem[];

  // Industries
  industries?: string[];

  // Technologies
  technologies?: Technology[];

  // Tools
  tools?: Tool[];

  // Pricing
  pricing?: PricingPlan[];

  // Case Studies
  caseStudies?: CaseStudy[];

  // Testimonials
  testimonials?: Testimonial[];

  // CTA
  cta?: CTASection;

  // FAQ
  faqs: ServiceFaq[];

  // Related Services
  related: string[];

  // Schema.org
  schema?: SchemaData[];

  // Breadcrumb
  breadcrumbs?: BreadcrumbItem[];

  // Extra SEO Sections
  targetAudience?: string[];

  serviceIncludes?: string[];

  deliverables?: string[];

  tags?: string[];

  lastUpdated?: string;
}
