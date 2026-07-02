export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceFeature {
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

export interface ServiceData {
  slug: string;

  category: string;

  title: string;

  subtitle: string;

  description: string;

  seoTitle?: string;

  seoDescription?: string;

  heroImage: string;

  stats: ServiceStat[];

  features: ServiceFeature[];

  benefits: string[];

  process: ServiceProcess[];

  faqs: ServiceFaq[];

  related: string[];
}
