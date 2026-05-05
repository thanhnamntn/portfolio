export const PORTFOLIO = {
  name: 'Nguyễn Thành Nam',
  title: 'Web & Mobile Developer',
  tagline: 'Crafting seamless web & mobile experiences — from concept to deployment',
  about: `I'm a passionate Web & Mobile Developer with 7 years of experience building scalable digital products. Since joining GoldenEye Technologies from its earliest startup days, I've grown from developer into a Team Lead role — steering technical direction, mentoring teams, and owning delivery end-to-end. Beyond writing code, I bridge the gap between business and technology: gathering client requirements, shaping intuitive UX/UI, and seeing projects through from first wireframe to production release across both web and mobile platforms.`,

  contact: {
    email: 'thanhnamntn96@gmail.com',
    phone: '0976 579 731',
    linkedin: 'https://www.linkedin.com/in/nam-nguyen-thanh-11022a16b/',
    github: 'https://github.com/thanhnamntn',
  },

  stats: [
    { value: '7+', label: 'Years of Experience' },
    { value: '3+', label: 'Years as Team Lead' },
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
    { name: 'Team Leadership', abbr: 'TL', category: 'Management', color: '#8B5CF6' },
    { name: 'Client Relations', abbr: 'CR', category: 'Management', color: '#06B6D4', dark: true },
    { name: 'Project Deployment', abbr: 'PD', category: 'Management', color: '#10B981' },
  ],

  experience: [
    {
      company: 'GoldenEye Technologies',
      role: 'Team Lead',
      period: '2022 – Present',
      current: true,
      bullets: [
        'Lead a cross-functional team of developers across web and mobile projects',
        'Architect scalable solutions using Angular and Flutter for enterprise clients',
        'Collaborate directly with clients to gather and refine project requirements',
        'Oversee end-to-end delivery from planning, design, development to production',
        'Conduct code reviews and establish best practices to maintain code quality',
        'Mentor junior developers, driving team growth and technical excellence',
      ],
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
      name: 'Bloom',
      category: 'Coffee Shop & Flower Retail POS',
      platform: 'mobile',
      description:
        'A Flutter POS app for Blooms N Brews — a coffee shop and flower retail chain — supporting beverage and flower ordering, AI-powered flower recognition via computer vision, multi-method payment processing, membership management, and thermal receipt printing.',
      highlights: [
        'Integrated OpenCV and Google ML Kit for real-time camera-based flower recognition and QR/barcode scanning',
        'Built AI chat assistant with WebSocket subscription to a backend AI agent for product recommendations',
        'Implemented multi-method checkout: QR code payment with deep link redirect, cash, and credit card with order checksum validation',
        'Architected with Clean Architecture + VIPER pattern using Riverpod 3 and functional error handling (Dartz)',
      ],
      tech: ['Flutter', 'Dart', 'Riverpod', 'GraphQL', 'Auth0', 'OpenCV', 'ML Kit', 'ESC/POS Printer', 'QR Code', 'WebSocket'],
      role: 'Team Lead & Developer',
    },
    {
      name: 'BurgerBot POS',
      category: 'Restaurant Point of Sale',
      platform: 'mobile',
      description:
        'A full-featured Flutter POS app for restaurant operations — covering table management, order taking, payment processing, tip calculation, and thermal receipt/kitchen-ticket printing via Bluetooth and LAN printers.',
      highlights: [
        'Built end-to-end POS workflow: table check-in → order taking → payment → receipt printing',
        'Integrated Bluetooth & LAN thermal printers (ESC/POS + Star Xpand) for kitchen tickets and guest checks',
        'Implemented Auth0 OAuth 2.0 with multi-environment support (dev/production) and Firebase Remote Config',
        'Architected with clean architecture: Entity → Interactor → Presenter → View separation with Provider',
      ],
      tech: ['Flutter', 'Dart', 'Provider', 'GraphQL', 'Auth0', 'Firebase', 'ESC/POS Printer', 'Bluetooth'],
      role: 'Team Lead & Developer',
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
      role: 'Team Lead & Developer',
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
      role: 'Team Lead & Developer',
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
