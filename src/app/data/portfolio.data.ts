export interface HomeSection {
  id: string;
  order: number;
  label: string;
}

export const HOME_SECTIONS: HomeSection[] = [
  { id: 'home', order: 1, label: 'Hero' },
  { id: 'works', order: 2, label: 'Selected Works' },
  { id: 'case-study', order: 3, label: 'Case Study' },
  { id: 'capabilities', order: 4, label: 'What I Do' },
  { id: 'toolkit', order: 5, label: 'Tech Stack' },
  { id: 'experience', order: 6, label: 'Experience' },
  { id: 'about', order: 7, label: 'About' },
  { id: 'beyond', order: 8, label: 'Beyond Code' },
  { id: 'contact', order: 9, label: 'Contact' },
];

export const HOME_SECTION_COUNT = HOME_SECTIONS.length;

/** Flagship builds surfaced in Selected Works + expanded in Case Studies. */
export const FEATURED_PROJECTS: { name: string; platform: 'web' | 'mobile' }[] = [
  { name: 'Blooms & Brews', platform: 'mobile' },
  { name: 'BagVision', platform: 'web' },
  { name: 'BurgerBot', platform: 'web' },
];

export interface CaseStudySpotlight {
  name: string;
  tagline: string;
  role: string;
  platforms: string;
  stack: string[];
  year: string;
  summary: string;
}

// Spotlight built from the real BagVision web + mobile project entries below —
// summary merges their actual descriptions/highlights rather than inventing new claims.
export const CASE_STUDY_SPOTLIGHT: CaseStudySpotlight = {
  name: 'BagVision',
  tagline: 'Container Inspection & Warehouse Logistics Platform',
  role: 'Developer',
  platforms: 'Web · Mobile',
  stack: ['Vue 3', 'TypeScript', 'GraphQL', 'Apollo Client', 'Flutter', 'Dart', 'Auth0'],
  year: 'TODO: confirm project year', // not present in source data — replace with the real year
  summary:
    'Warehouse and logistics teams needed visibility into shipment containers as they moved through loading, sealing, and inspection, plus an on-site way for staff to count and inspect containers with photo evidence. Built a multi-stage container tracking workflow (loading → sealing → inspection → shipment) on a GraphQL-first web platform with Apollo Client, role-based access for operators/managers/logistics staff, and a companion Flutter mobile app for offline-resilient container counting and defect photo capture — giving every role, from warehouse floor to management, real-time logistics insight.',
};

export interface CapabilityGroup {
  title: string;
  icon: string;
  bullets: string[];
}

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: 'Web',
    icon: '</>',
    bullets: ['Angular · Vue.js · TypeScript', 'Responsive UI · Design Systems', 'GraphQL'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    bullets: ['Flutter · Dart', 'iOS · Android', 'Clean Architecture'],
  },
  {
    title: 'Product',
    icon: '💡',
    bullets: ['Architecture · API Integration', 'Technical Planning', 'Technical Leadership'],
  },
];

export interface BeyondCodeItem {
  label: string;
  description: string;
  icon: string;
}

// TODO: replace with your real interests — this is generic placeholder copy.
export const BEYOND_CODE: BeyondCodeItem[] = [
  { label: 'Coffee', description: 'Good coffee, better days.', icon: '☕' },
  { label: 'Flowers', description: 'Because life is more colorful with flowers.', icon: '💐' },
  { label: 'Photography', description: 'Capturing moments off-screen.', icon: '📷' },
  { label: 'Building Things', description: 'Side projects and tinkering for the fun of it.', icon: '🛠️' },
];

export interface ExtraTool {
  name: string;
  abbr: string;
  color: string;
  dark?: boolean;
}

export const EXTRA_TOOLS: ExtraTool[] = [
  { name: 'GraphQL', abbr: 'GQ', color: '#E535AB' },
  { name: 'Firebase', abbr: 'FB', color: '#FFCA28', dark: true },
  { name: 'Auth0', abbr: 'A0', color: '#EB5424' },
  { name: 'Nx', abbr: 'Nx', color: '#143055' },
];

export const PORTFOLIO = {
  name: 'Nguyễn Thành Nam',
  title: 'Web & Mobile Developer',
  tagline: 'I build digital products from idea to production.',
  about: `Web & Mobile Developer delivering scalable digital products across web and mobile platforms. Progressed from developer to Tech Lead, with a track record of driving technical direction, mentoring development teams, and managing end-to-end project delivery. Experienced in client requirements gathering, UX/UI shaping, and taking products from concept through to production release.`,

  contact: {
    email: 'thanhnamntn96@gmail.com',
    phone: '0976 579 731',
    linkedin: 'https://www.linkedin.com/in/nam-nguyen-thanh-11022a16b/',
    github: 'https://github.com/thanhnamntn',
  },

  stats: [
    { value: '3+', label: 'Years as Tech Lead' },
    { value: '2', label: 'Tech Domains' },
  ],

  skills: [
    { name: 'TypeScript', abbr: 'TS', category: 'Language', color: '#3178C6' },
    { name: 'JavaScript', abbr: 'JS', category: 'Language', color: '#F7DF1E', dark: true },
    { name: 'Dart', abbr: 'Dt', category: 'Language', color: '#0175C2' },
    { name: 'Angular', abbr: 'NG', category: 'Framework', color: '#DD0031' },
    { name: 'Vue.js', abbr: 'VU', category: 'Framework', color: '#42B883' },
    { name: 'Flutter', abbr: 'FL', category: 'Framework', color: '#54C5F8', dark: true },
    { name: 'UX / UI Design', abbr: 'UX', category: 'Design', color: '#EC4899' },
    { name: 'Req. Analysis', abbr: 'RA', category: 'Management', color: '#F59E0B', dark: true },
    { name: 'Technical Leadership', abbr: 'TL', category: 'Management', color: '#8B5CF6' },
    { name: 'Client Relations', abbr: 'CR', category: 'Management', color: '#06B6D4', dark: true },
    { name: 'Project Deployment', abbr: 'PD', category: 'Management', color: '#10B981' },
  ],

  experience: [
    {
      company: 'GoldenEye Technologies',
      role: 'Tech Lead',
      period: '2022 – Present',
      current: true,
      bullets: [
        'Lead a cross-functional team of developers across web and mobile projects',
        'Architect scalable solutions using Angular and Flutter for enterprise clients',
        'Collaborate directly with clients to gather and refine project requirements',
        'Oversee end-to-end delivery from planning, design, development to production',
        'Experienced in releasing mobile apps to the Google Play Store (Android) and Apple App Store (iOS), including TestFlight distribution',
        'Conduct code reviews and establish best practices to maintain code quality',
        'Mentor junior developers, driving team growth and technical excellence',
      ],
      tech: ['Angular', 'Flutter'],
    },
    {
      company: 'GoldenEye Technologies',
      role: 'Web & Mobile Developer',
      period: '2019 – 2022',
      current: false,
      bullets: [
        'Built responsive web applications using Angular and Vue.js with TypeScript',
        'Developed cross-platform mobile applications with Flutter and Dart',
        'Contributed to UX/UI design, creating intuitive and user-centered interfaces',
        'Participated in client meetings for requirements gathering and project updates',
        'Deployed and maintained applications across production environments',
      ],
      tech: ['Angular', 'Vue.js', 'TypeScript', 'Flutter', 'Dart'],
    },
  ],

  education: [
    {
      school: 'Ho Chi Minh City University of Technology and Education',
      schoolVi: 'Đại học Sư phạm Kỹ thuật TP.HCM',
      degree: 'Bachelor of Engineering',
      field: 'Information Technology',
    },
  ],

  projects: [
    {
      name: 'Blooms & Brews',
      category: 'Mobile Ordering App — Coffee & Flower Shop Chain',
      platform: 'mobile',
      description:
        'Customer app for a coffee and flower shop chain on Android and iOS, with English and Vietnamese support.',
      highlights: [
        'Shipped to production — live on the Google Play Store (Android)',
        'Built customer features in Flutter/Dart: product browsing, order customization, cart & checkout, vouchers, order history, EN/VI localization',
        'Managed state with Riverpod 3 (Notifier, sealed states, autoDispose); Clean Architecture with a check script enforcing layer dependencies',
        'Auth0 authentication with Bearer tokens and secure storage; GraphQL/JSON responses mapped to typed models and domain entities; mock-auth/mock-data mode for backend-free development',
        'Online payment via WebView with deep-link return; delivery/pickup time rules (lead time, opening hours)',
        'Used Claude Code to accelerate and streamline the development workflow — building AI-assisted tooling for code scaffolding, layer-rule checks and review',
      ],
      tech: ['Flutter', 'Dart', 'Riverpod', 'go_router', 'GraphQL', 'Auth0', 'easy_localization', 'flutter_secure_storage', 'InAppWebView', 'flutter_test / Mocktail', 'Git', 'GitHub', 'Claude Code'],
      role: 'Tech Lead & Developer',
    },
    {
      name: 'BurgerBot POS',
      category: 'Restaurant Point of Sale',
      platform: 'mobile',
      description:
        'A full-featured Flutter POS app for restaurant operations — covering table management, order taking, payment processing, tip calculation, and thermal receipt/kitchen-ticket printing via Bluetooth and LAN printers.',
      highlights: [
        'Distributed to internal users via TestFlight (iOS) for in-house restaurant operations',
        'Built end-to-end POS workflow: table check-in → order taking → payment → receipt printing',
        'Integrated Bluetooth & LAN thermal printers (ESC/POS + Star Xpand) for kitchen tickets and guest checks',
        'Implemented Auth0 OAuth 2.0 with multi-environment support (dev/production) and Firebase Remote Config',
        'Architected with clean architecture: Entity → Interactor → Presenter → View separation with Provider',
      ],
      tech: ['Flutter', 'Dart', 'Provider', 'GraphQL', 'Auth0', 'Firebase', 'ESC/POS Printer', 'Bluetooth'],
      role: 'Tech Lead & Developer',
    },
    {
      name: 'BagVision',
      category: 'Logistics & Warehouse Counting',
      platform: 'mobile',
      description:
        'A Flutter mobile app for warehouse staff to count and inspect shipment containers on-site — capturing bag counts, recording defects with photos, and performing pre/post loading verification workflows.',
      highlights: [
        'Built container counting workflow with pre-loading and post-loading verification dialogs',
        'Integrated device camera for real-time defect photo capture during inspection',
        'Implemented offline-resilient architecture with connectivity detection and local token persistence',
        'Delivered landscape-optimized UI with pallet table views for warehouse tablet usage',
      ],
      tech: ['Flutter', 'Dart', 'Provider', 'GraphQL', 'Camera', 'SharedPreferences', 'RxDart'],
      role: 'Developer',
    },
    {
      name: 'Nexus',
      category: 'Enterprise ERP',
      platform: 'web',
      description:
        'A large-scale multi-domain ERP platform covering Sales, Quality Management, BOM, Procurement, Production Planning, and Warehouse Management — built for enterprise clients with multi-tenant architecture and internationalization.',
      highlights: [
        'Architected 9+ functional modules: Sales, QM, BOM, Procurement, Production Planning, Warehouse',
        'Implemented multi-tenant auth (Auth0) with role-based module visibility per tenant',
        'Integrated Vue i18n for multi-language support and LaunchDarkly for progressive feature rollouts',
        'Built complex inspection & non-conformance workflows with dynamic templates and timeslot scheduling',
      ],
      tech: ['Vue 3', 'TypeScript', 'GraphQL', 'Pinia', 'Auth0', 'LaunchDarkly', 'Firebase FCM', 'PrimeVue', 'Nx'],
      role: 'Tech Lead & Developer',
    },
    {
      name: 'BurgerBot',
      category: 'Restaurant Management Platform',
      platform: 'web',
      description:
        'A full-featured restaurant management and POS system with a real-time Kitchen Display System, inventory management, recipe management, 8+ analytics reports, and Square POS integration.',
      highlights: [
        'Built real-time Kitchen Display System (KDS) for live order tracking and kitchen operations',
        'Integrated Square POS for payment processing with synchronized inventory and sales data',
        'Designed 60+ service architecture using DI, use-case patterns and Supabase as BaaS',
        'Delivered 8+ report types: Sales Summary, Profitability, Item Sales, Discount, Tips and more',
      ],
      tech: ['Vue 3', 'TypeScript', 'Supabase', 'Pinia', 'Square POS', 'LaunchDarkly', 'Firebase FCM', 'ApexCharts', 'Nx'],
      role: 'Tech Lead & Developer',
    },
    {
      name: 'HRM',
      category: 'Factory HR & Production System',
      platform: 'web',
      description:
        'A Human Resource Management system tailored for factory environments — featuring worker attendance tracking, IoT device management, interactive factory floor mapping, and advanced line-balancing analytics.',
      highlights: [
        'Built interactive factory floor map editor with drag-and-drop device and zone placement',
        'Integrated IoT device APIs for real-time device status monitoring and line-balancing data',
        'Delivered line-balancing reports with advanced ApexCharts visualizations (8SPM metrics)',
        'Implemented fingerprint data upload, worker check-in management, and manpower analytics',
      ],
      tech: ['Angular 17', 'TypeScript', 'GraphQL', 'PrimeNG', 'ApexCharts', 'Auth0', 'IoT REST APIs', 'Nx'],
      role: 'Developer',
    },
    {
      name: 'BagVision',
      category: 'Logistics & Warehouse Management',
      platform: 'web',
      description:
        'A container and warehouse visibility platform tracking shipment containers through multi-stage workflows (loading, sealing, inspection), managing orders and products with real-time logistics insights.',
      highlights: [
        'Designed multi-stage container tracking workflow: loading → sealing → inspection → shipment',
        'Built container reporting system with defect tracking and detailed product specifications',
        'Implemented GraphQL-first data layer with Apollo Client and type-safe DTO mapping',
        'Delivered role-based access control for warehouse operators, managers, and logistics staff',
      ],
      tech: ['Vue 3', 'TypeScript', 'GraphQL', 'Apollo Client', 'Pinia', 'Auth0', 'PrimeVue', 'Nx'],
      role: 'Developer',
    },
  ],
};
