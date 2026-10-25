import { ServiceItem, ShowcaseProject, JourneyStep } from '../types';

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/ikshana-sherin-328848373';
export const BRAND_NAME = 'LavanDish';
export const BRAND_TAGLINE = 'Idea into Reality';
export const MAIN_SLOGAN = 'Your Idea. Our Digital Expertise.';
export const BRAND_MESSAGE =
  'You bring the idea. You share your vision. We turn it into a professional digital experience that reflects what you imagined.';

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-page',
    number: '01',
    title: 'SIMPLE LANDING PAGE',
    subtitle: 'High-Impact Brand Presence',
    description:
      'Make a powerful first impression. We create clean, modern landing pages that introduce your brand, communicate your message, and help visitors understand what you offer.',
    priceRange: '₹1,000–₹2,500',
    deliverables: [
      'Clean modern layout crafted for your brand',
      'Fully responsive across mobile & desktop',
      'Hero section with compelling calls to action',
      'Clear messaging and visual hierarchy',
      'Fast-loading performance & SEO metadata'
    ],
    timeline: '2–4 days',
    iconName: 'Layout'
  },
  {
    id: 'website-prototype',
    number: '02',
    title: 'WEBSITE PROTOTYPE',
    subtitle: 'Interactive Design Validation',
    description:
      'See your idea before it becomes reality. We design interactive website prototypes that help you explore the layout, experience the design, and present your vision.',
    priceRange: '₹2,000–₹5,000',
    deliverables: [
      'Interactive multi-page or deep section flow',
      'Realistic component interactions & states',
      'Design exploration for layout and color scheme',
      'Presentation-ready prototype for stakeholders',
      'Clear feedback iteration cycles'
    ],
    timeline: '3–6 days',
    popular: true,
    iconName: 'Compass'
  },
  {
    id: 'mobile-app-prototype',
    number: '03',
    title: 'MOBILE APP UI PROTOTYPE',
    subtitle: 'Touch-First Product Experience',
    description:
      'Have an app idea? Let’s give it a face. We create modern mobile app screens and clickable prototypes that bring your app concept to life.',
    priceRange: '₹1,500–₹4,000',
    deliverables: [
      'Sleek modern smartphone screen mockups',
      'Intuitive touch navigation & micro-interactions',
      'Core user flows (onboarding, home, detail views)',
      'Clickable prototype simulation',
      'Consistent design system and typography'
    ],
    timeline: '3–5 days',
    iconName: 'Smartphone'
  },
  {
    id: 'web-application',
    number: '04',
    title: 'BASIC FUNCTIONAL WEB APPLICATION',
    subtitle: 'Interactive Utility & Tools',
    description:
      'Turn an idea into something people can actually use. We build simple functional web applications around your requirements, with a focus on usability and practical value.',
    priceRange: '₹3,000–₹8,000',
    deliverables: [
      'Working functional frontend logic & state handling',
      'Dynamic user input, calculators or data tools',
      'Polished modern UI with responsive views',
      'Intuitive error handling & user guidance',
      'Ready for deployment on modern web hosting'
    ],
    timeline: '5–10 days',
    iconName: 'Code2'
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    label: 'STEP 1',
    title: 'YOUR IDEA',
    description: 'Tell us what you imagine, even if it’s just a rough idea.',
    details: [
      'No formal technical specification needed',
      'Share your notes, sketches, references, or voice notes',
      'We listen actively to discover the core purpose behind your concept'
    ]
  },
  {
    stepNumber: 2,
    label: 'STEP 2',
    title: 'YOUR VISION',
    description: 'We understand your goals, preferences, and the experience you want people to have.',
    details: [
      'Aligning aesthetic preferences (modern, futuristic, minimal, luxury)',
      'Mapping out the essential user journey and key touchpoints',
      'Discussing practical possibilities openly and realistically'
    ]
  },
  {
    stepNumber: 3,
    label: 'STEP 3',
    title: 'YOUR DIGITAL REALITY',
    description:
      'We work to transform your vision into a professional digital solution that reflects your idea as closely as possible.',
    details: [
      'Crafting clean, responsive, and engaging digital interfaces',
      'Polishing interactive details, typography, and visual rhythm',
      'Delivering an experience that feels authentic to what you imagined'
    ]
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'business-landing',
    category: 'Landing Page Concept',
    title: 'Lumina Studio — Creative Agency',
    tagline: 'Refined brand showcase with high-impact typography and conversion flow',
    description:
      'An illustrative corporate showcase designed to elevate client conversion with deep midnight palettes, smooth glass surfaces, and responsive service breakdowns.',
    techHighlights: ['Modern Layout', 'Glassmorphism', 'Conversion Architecture', 'Responsive Grid'],
    deviceType: 'desktop',
    badge: 'Sample Design'
  },
  {
    id: 'mobile-app',
    category: 'Mobile UI Prototype',
    title: 'Pulse — Daily Habit & Focus Flow',
    tagline: 'Fluid mobile prototype with intuitive daily streaks and touch gestures',
    description:
      'A sleek smartphone concept built to give tactile feedback, featuring micro-interactions, streak progress rings, and frictionless goal check-ins.',
    techHighlights: ['Touch Interactions', 'Dark & Light Palettes', 'Progress Visualization', 'Thumb Zone Design'],
    deviceType: 'mobile',
    badge: 'Concept Preview'
  },
  {
    id: 'ai-assistant',
    category: 'AI Interface Prototype',
    title: 'Aura — Intelligent Workspace Assistant',
    tagline: 'Conversational assistant UI with ambient status glows and prompt suggestions',
    description:
      'A futuristic AI co-pilot interface featuring streaming message cards, intelligent action shortcuts, and balanced lavender glow accents.',
    techHighlights: ['Chat Interface', 'Context Actions', 'Ambient Lighting', 'Prompt Chips'],
    deviceType: 'desktop',
    badge: 'Concept Preview'
  },
  {
    id: 'analytics-dashboard',
    category: 'Web Application Concept',
    title: 'MetricFlow — Project Telemetry Hub',
    tagline: 'Interactive operational dashboard with live filters and metric comparisons',
    description:
      'A functional web application prototype demonstrating clean tabular figures, interactive period selectors, and responsive KPI widgets.',
    techHighlights: ['Data Visualizations', 'Interactive Filters', 'Tabular Figures', 'Zero Clutter'],
    deviceType: 'desktop',
    badge: 'Sample Design'
  }
];
