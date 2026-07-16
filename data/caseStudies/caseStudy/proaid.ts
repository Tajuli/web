import { CaseStudy } from "../type";

export const proAid: CaseStudy = {
  id: 1,

  // Basic
  slug: "proaid",
  title: "ProAid – Weight, Diet & Water",

  shortDescription:
    "Designed and developed a comprehensive health and fitness mobile application featuring BMI calculation, diet planning, water tracking, protein tracking, and personalized health recommendations.",

  description:
    "ProAid is an all-in-one health and fitness mobile application designed to help users maintain a healthier lifestyle. PrimeDigitor handled the complete product lifecycle including UI/UX design, Flutter development, Firebase integration, Google Play publishing, analytics implementation, and continuous feature improvements.",

  // Classification
  category: "Mobile App",

  // Client
  client: "PrimeDigitor",
  industry: "Health & Fitness",

  // Images
  coverImage: "/images/case-studies/proaid.webp",

  gallery: [
    "/images/case-studies/proaid/1.webp",
    "/images/case-studies/proaid/2.webp",
    "/images/case-studies/proaid/3.webp",
    "/images/case-studies/proaid/4.webp",
  ],

  // Overview
  challenge:
    "Build a modern mobile application that combines BMI calculation, personalized diet planning, water tracking, protein tracking, and health monitoring into one simple and user-friendly experience.",

  solution:
    "PrimeDigitor designed and developed the complete application using Flutter. The app automatically calculates BMI, calorie requirements, daily protein intake, and water goals while providing an intuitive tracking experience with Firebase Analytics and Google Play integration.",

  // Services
  services: [
    "Mobile App Development",
    "Flutter Development",
    "UI/UX Design",
    "Firebase Integration",
    "Google Play Publishing",
    "Performance Optimization",
    "App Store Optimization",
    "Analytics Integration",
  ],

  // Technologies
  technologies: [
    "Flutter",
    "Dart",
    "Firebase",
    "Google Play Console",
    "Google Analytics",
    "Google AdMob",
    "Provider",
    "Shared Preferences",
  ],

  // Results
  results: [
    "Successfully published on Google Play.",
    "Developed a complete all-in-one health tracking solution.",
    "Implemented personalized BMI, diet, water, and protein calculations.",
    "Integrated Firebase Analytics for user insights.",
    "Optimized application performance and user experience.",
  ],

  // Statistics
  metrics: [
    {
      label: "Platform",
      value: "Android",
    },
    {
      label: "Framework",
      value: "Flutter",
    },
    {
      label: "Analytics",
      value: "Firebase",
    },
    {
      label: "Status",
      value: "Published",
    },
  ],

  // Optional Testimonial
  testimonial: {
    name: "PrimeDigitor",
    designation: "Product Development Team",
    quote:
      "ProAid demonstrates our expertise in designing and developing scalable mobile applications with a strong focus on user experience and performance.",
  },

  // SEO
  seoTitle:
    "ProAid Mobile App Development Case Study | PrimeDigitor",

  seoDescription:
    "Discover how PrimeDigitor designed and developed ProAid, a Flutter-based health and fitness application with personalized diet, BMI, water, and protein tracking.",

  // Status
  featured: true,
  published: true,

  // Dates
  completedAt: "2026-01-20",
  createdAt: "2026-07-15",
};
