export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;

  heroImage: string;

  stats: {
    label: string;
    value: string;
  }[];

  features: string[];

  process: string[];

  benefits: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  related: string[];
}
