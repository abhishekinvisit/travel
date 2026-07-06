// Core type definitions for the Invisit platform
// All content will eventually be driven by PostgreSQL/Prisma

export interface TourPackage {
  id: string;
  title: string;
  duration: string; // e.g. "4N/5D"
  image: string;
  href: string;
  inclusions: Inclusion[];
  originalPrice: string; // display string e.g. "₹31800"
  discountLabel: string; // e.g. "30% OFF"
  price: string; // e.g. "₹27800"
  badge?: string; // e.g. "Couple Tour", "Honeymoon", "Group Tour"
  badgeIcon?: string; // optional icon class, e.g. "bi bi-heart-fill"
}

export interface Inclusion {
  icon: string; // path to icon image
  label: string;
  className?: string; // optional extra class (e.g. "car" for transport icon)
}

export interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface BlogPost {
  title: string;
  href: string;
  image: string;
  excerpt: string;
}

export interface SimilarDestination {
  title: string;
  duration: string;
  href: string;
  image: string;
  description: string;
  originalPrice: string;
  price: string;
  badge?: string;
}

export interface DestinationThumb {
  name: string;
  href: string;
  image: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface DestinationFilter {
  label: string;
  href: string;
  active?: boolean;
}
