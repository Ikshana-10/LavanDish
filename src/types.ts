export type Theme = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  priceRange: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
  popular?: boolean;
}

export interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  techHighlights: string[];
  deviceType: 'desktop' | 'mobile';
  badge: string;
}

export interface JourneyStep {
  stepNumber: number;
  label: string;
  title: string;
  description: string;
  details: string[];
}
