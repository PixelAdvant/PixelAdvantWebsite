import { SEOProps } from '@/components/SEO';

type PageSEOConfig = Omit<SEOProps, 'additionalSchemas'> & {
  breadcrumbs: Array<{ name: string; url: string }>;
};

export const pageSEOConfig: Record<string, PageSEOConfig> = {
  home: {
    title: 'Home',
    description:
      'Pixel Advant — India\'s leading GCC setup and consulting firm. We help global enterprises establish, scale, and optimise Global Capability Centres (GCCs) across Bengaluru, Hyderabad, Pune, Chennai, and Delhi NCR.',
    keywords:
      'GCC setup consulting India, global capability center India, GCC advisory firm, GCC as a service India, GCC establishment India, Pixel Advant',
    canonical: '/',
    breadcrumbs: [],
    faqSchema: [
      {
        question: 'What is a Global Capability Centre (GCC)?',
        answer:
          'A GCC (Global Capability Centre) is an offshore unit wholly owned by a parent company, set up to deliver technology, business operations, and innovation services. Unlike outsourcing, GCCs offer full control over operations, IP, and talent.',
      },
      {
        question: 'How does Pixel Advant help with GCC setup in India?',
        answer:
          'Pixel Advant provides end-to-end GCC setup services including strategy consulting, location selection, legal entity formation, talent acquisition, infrastructure setup, and ongoing operational management across major Indian cities.',
      },
      {
        question: 'Which cities does Pixel Advant operate in?',
        answer:
          'Pixel Advant helps set up GCCs in Bengaluru, Hyderabad, Pune, Chennai, Delhi NCR, and Mumbai — India\'s top technology hubs with deep talent pools.',
      },
      {
        question: 'How long does it take to set up a GCC in India?',
        answer:
          'A typical GCC setup in India takes 3–6 months depending on scale, legal requirements, and talent needs. Pixel Advant\'s accelerated model can fast-track initial operations in as little as 8–12 weeks.',
      },
      {
        question: 'What industries does Pixel Advant serve?',
        answer:
          'Pixel Advant serves clients in Fintech/BFSI, Healthcare, Technology/SaaS, Manufacturing, Retail/E-commerce, and AdTech/Media industries.',
      },
    ],
  },

  about: {
    title: 'About Us',
    description:
      'Learn about Pixel Advant — a trusted GCC consulting company in India helping global enterprises establish and optimise their Global Capability Centres. Meet our expert leadership team.',
    keywords:
      'about Pixel Advant, GCC expert India, GCC consulting company, Pixel Advant GCC consulting, global capability center expert',
    canonical: '/about',
    breadcrumbs: [{ name: 'About Us', url: '/about' }],
  },

  leadershipTeam: {
    title: 'Leadership Team',
    description:
      'Meet the leadership team at Pixel Advant — experienced GCC consultants, technology leaders, and recruitment strategists driving innovation in Global Capability Centre services.',
    keywords:
      'Pixel Advant team, GCC leadership, GCC consultants India, Pixel Advant leadership',
    canonical: '/about/leadership-team',
    breadcrumbs: [
      { name: 'About Us', url: '/about' },
      { name: 'Leadership Team', url: '/about/leadership-team' },
    ],
  },

  contact: {
    title: 'Contact Us',
    description:
      'Contact Pixel Advant for GCC setup consultation in India. Talk to our experts about establishing, scaling, or optimising your Global Capability Centre. Get a free GCC assessment today.',
    keywords:
      'GCC consulting contact India, talk to GCC expert, free GCC assessment, GCC consultation India, Pixel Advant contact',
    canonical: '/contact',
    breadcrumbs: [{ name: 'Contact Us', url: '/contact' }],
  },

  gccSolutions: {
    title: 'GCC Solutions - Global Capability Centre Services',
    description:
      'Comprehensive GCC solutions by Pixel Advant — from consulting & advisory to talent acquisition, workspace setup, and legal services. End-to-end Global Capability Centre services in India.',
    keywords:
      'GCC solutions India, global capability centre services, GCC consulting, GCC setup India, GCC advisory services',
    canonical: '/gcc-solutions',
    breadcrumbs: [{ name: 'GCC Solutions', url: '/gcc-solutions' }],
    faqSchema: [
      {
        question: 'What GCC services does Pixel Advant offer?',
        answer:
          'Pixel Advant offers comprehensive GCC services including consulting & advisory, talent acquisition, workspace solutions, legal services, engagement model design, and ongoing managed services for Global Capability Centres in India.',
      },
      {
        question: 'What are the different GCC engagement models?',
        answer:
          'Pixel Advant supports three GCC engagement models: Captive Model (fully owned by parent company), Shared Services Model (centralised operations for multiple functions), and Build-Operate-Transfer (BOT) where Pixel Advant sets up and operates the GCC before transferring ownership.',
      },
      {
        question: 'How much does GCC setup cost in India?',
        answer:
          'GCC setup costs in India vary based on location, size, and service scope. A small GCC (50-100 employees) typically costs $500K-$1.5M to establish. Contact Pixel Advant for a customised cost assessment tailored to your requirements.',
      },
    ],
  },

  gccConsultingAdvisory: {
    title: 'GCC Consulting & Advisory Services',
    description:
      'Expert GCC consulting and advisory services in India. Strategic roadmapping, location benchmarking, GCC maturity assessment, and end-to-end advisory for Global Capability Centres.',
    keywords:
      'GCC advisory services India, GCC strategy consulting, GCC roadmap India, GCC location selection, consulting advisory',
    canonical: '/gcc-solutions/consulting-advisory',
    breadcrumbs: [
      { name: 'GCC Solutions', url: '/gcc-solutions' },
      { name: 'Consulting & Advisory', url: '/gcc-solutions/consulting-advisory' },
    ],
  },

  gccEngagementModels: {
    title: 'GCC Engagement Models',
    description:
      'Explore GCC engagement models — Captive Model, Shared Services, and Build-Operate-Transfer (BOT). Choose the right GCC operating model for your business with Pixel Advant.',
    keywords:
      'GCC engagement models, captive model GCC, BOT model GCC, shared services GCC, GCC operating model India',
    canonical: '/gcc-solutions/engagement-models',
    breadcrumbs: [
      { name: 'GCC Solutions', url: '/gcc-solutions' },
      { name: 'Engagement Models', url: '/gcc-solutions/engagement-models' },
    ],
  },

  gccTalentWorkspace: {
    title: 'GCC Talent & Workspace Solutions',
    description:
      'GCC workspace solutions in India — physical and virtual workspace setup, managed office spaces, and infrastructure for Global Capability Centres across top Indian tech hubs.',
    keywords:
      'GCC workspace India, GCC office setup, managed office GCC, workspace solutions India',
    canonical: '/gcc-solutions/talent-workspace',
    breadcrumbs: [
      { name: 'GCC Solutions', url: '/gcc-solutions' },
      { name: 'Talent & Workspace', url: '/gcc-solutions/talent-workspace' },
    ],
  },

  gccItServices: {
    title: 'IT Services India',
    description:
      'IT services by Pixel Advant â€” custom software development, managed cloud services, cybersecurity, IT staffing, and digital transformation support for growth-focused businesses in India.',
    keywords:
      'IT services company India, managed IT services India, custom software development India, cloud services India, cybersecurity services India',
    canonical: '/digital-engineering/it-services',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'IT Services', url: '/digital-engineering/it-services' },
    ],
  },

  gccDigitalMarketingServices: {
    title: 'Digital Marketing Services India',
    description:
      'Digital marketing services by Pixel Advant â€" SEO, PPC, social media, content marketing, email automation, and online reputation management for measurable business growth in India.',
    keywords:
      'digital marketing agency India, SEO services India, PPC management India, content marketing India, social media marketing India',
    canonical: '/digital-engineering/digital-marketing-services',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'Digital Marketing Services', url: '/digital-engineering/digital-marketing-services' },
    ],
  },

  gccLegalServices: {
    title: 'GCC Legal Services India',
    description:
      'GCC legal services in India including company registration, FEMA compliance, tax advisory, and legal structuring for Global Capability Centres. Ensure regulatory compliance with Pixel Advant.',
    keywords:
      'GCC legal services India, GCC company registration, FEMA GCC, GCC compliance India, GCC tax India',
    canonical: '/gcc-solutions/legal-services',
    breadcrumbs: [
      { name: 'GCC Solutions', url: '/gcc-solutions' },
      { name: 'Legal Services', url: '/gcc-solutions/legal-services' },
    ],
  },

  recruitment: {
    title: 'Recruitment Solutions',
    description:
      'Smart recruitment solutions by Pixel Advant — AI-led talent supply, workforce strategy, and specialised GCC recruitment services in India. Find top talent for your Global Capability Centre.',
    keywords:
      'GCC recruitment India, talent acquisition GCC, hiring GCC India, recruitment solutions, workforce strategy India',
    canonical: '/recruitment',
    breadcrumbs: [{ name: 'Recruitment', url: '/recruitment' }],
  },

  recruitmentAdvisory: {
    title: 'Recruitment Advisory & Consultancy',
    description:
      'Expert recruitment advisory and consultancy services for GCCs in India. Strategic hiring plans, talent market insights, and workforce planning by Pixel Advant.',
    keywords:
      'recruitment advisory India, hiring consultancy GCC, talent strategy GCC India',
    canonical: '/recruitment/advisory-consultancy',
    breadcrumbs: [
      { name: 'Recruitment', url: '/recruitment' },
      { name: 'Advisory & Consultancy', url: '/recruitment/advisory-consultancy' },
    ],
  },

  recruitmentHireGlobal: {
    title: 'Hire Global Talent for GCC',
    description:
      'Hire top global talent for your GCC in India. Smart talent acquisition services powered by AI — sourcing, screening, and onboarding by Pixel Advant.',
    keywords:
      'hire global talent GCC, smart talent acquisition India, GCC hiring services',
    canonical: '/recruitment/hire-global-talent',
    breadcrumbs: [
      { name: 'Recruitment', url: '/recruitment' },
      { name: 'Hire Global Talent', url: '/recruitment/hire-global-talent' },
    ],
  },

  recruitmentWorkforceStrategy: {
    title: 'Workforce Strategy for GCC',
    description:
      'Strategic workforce planning and talent management for GCCs in India. Retention strategies, upskilling programs, and organisational design by Pixel Advant.',
    keywords:
      'workforce strategy GCC, talent management India, GCC workforce planning',
    canonical: '/recruitment/workforce-strategy',
    breadcrumbs: [
      { name: 'Recruitment', url: '/recruitment' },
      { name: 'Workforce Strategy', url: '/recruitment/workforce-strategy' },
    ],
  },

  digitalEngineering: {
    title: 'Digital Engineering Services',
    description:
      'Digital engineering services by Pixel Advant — application engineering, quality engineering, architecture, and product development for GCCs and enterprises in India.',
    keywords:
      'digital engineering India, application engineering, quality engineering, product development GCC, software development India',
    canonical: '/digital-engineering',
    breadcrumbs: [{ name: 'Digital Engineering', url: '/digital-engineering' }],
  },

  applicationEngineering: {
    title: 'Application Engineering Services',
    description:
      'Enterprise application engineering services — custom software development, modernisation, and cloud-native applications by Pixel Advant for GCCs in India.',
    keywords:
      'application engineering India, custom software development, cloud applications GCC',
    canonical: '/digital-engineering/application-engineering',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'Application Engineering', url: '/digital-engineering/application-engineering' },
    ],
  },

  qualityEngineering: {
    title: 'Quality Engineering Services',
    description:
      'Quality engineering and testing services — automated testing, QA strategy, and test automation frameworks by Pixel Advant for GCCs in India.',
    keywords:
      'quality engineering India, QA testing services, test automation GCC',
    canonical: '/digital-engineering/quality-engineering',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'Quality Engineering', url: '/digital-engineering/quality-engineering' },
    ],
  },

  architecture: {
    title: 'Business Architecture Services',
    description:
      'Enterprise and business architecture consulting — solution architecture, cloud infrastructure design, and technology strategy by Pixel Advant.',
    keywords:
      'business architecture India, solution architecture GCC, enterprise architecture consulting',
    canonical: '/digital-engineering/architecture',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'Architecture', url: '/digital-engineering/architecture' },
    ],
  },

  productDevelopment: {
    title: 'Product Development Services',
    description:
      'End-to-end product development services — from ideation to launch. MVP development, product engineering, and scaling by Pixel Advant for GCCs and startups.',
    keywords:
      'product development India, MVP development, product engineering GCC',
    canonical: '/digital-engineering/product-development',
    breadcrumbs: [
      { name: 'Digital Engineering', url: '/digital-engineering' },
      { name: 'Product Development', url: '/digital-engineering/product-development' },
    ],
  },

  captiveModel: {
    title: 'Captive Model - GCC Engagement Model',
    description:
      'Learn about the Captive Model for GCC setup in India. A fully owned Global Capability Centre giving you complete control over operations, IP, and talent. Set up by Pixel Advant.',
    keywords:
      'captive model GCC, fully owned GCC India, captive center India, GCC captive model',
    canonical: '/models/captive-model',
    breadcrumbs: [
      { name: 'Models', url: '/models/captive-model' },
      { name: 'Captive Model', url: '/models/captive-model' },
    ],
  },

  sharedServicesModel: {
    title: 'Shared Services Model - GCC Engagement Model',
    description:
      'Shared Services Model for GCCs in India — centralised operations serving multiple business units. Cost-effective GCC model setup and management by Pixel Advant.',
    keywords:
      'shared services model GCC, centralised GCC India, shared services center India',
    canonical: '/models/shared-services-model',
    breadcrumbs: [
      { name: 'Models', url: '/models/shared-services-model' },
      { name: 'Shared Services Model', url: '/models/shared-services-model' },
    ],
  },

  buildOperateTransfer: {
    title: 'Build-Operate-Transfer (BOT) Model',
    description:
      'Build-Operate-Transfer (BOT) model for GCC setup in India. Pixel Advant builds and operates your GCC before transferring full ownership to your organisation.',
    keywords:
      'BOT model GCC, build operate transfer India, GCC BOT model, GCC transition India',
    canonical: '/models/build-operate-transfer',
    breadcrumbs: [
      { name: 'Models', url: '/models/build-operate-transfer' },
      { name: 'Build-Operate-Transfer', url: '/models/build-operate-transfer' },
    ],
  },

  products: {
    title: 'Products',
    description:
      'Explore Pixel Advant\'s product suite — Click 100 recruitment platform, Advantage Plus, and more. Tools designed to accelerate GCC operations and talent acquisition in India.',
    keywords:
      'Pixel Advant products, Click 100, Advantage Plus, GCC tools, recruitment platform',
    canonical: '/products',
    breadcrumbs: [{ name: 'Products', url: '/products' }],
  },

  click100: {
    title: 'Click 100 - Recruitment Platform',
    description:
      'Click 100 by Pixel Advant — an AI-powered recruitment platform designed for fast, efficient talent acquisition for GCCs in India.',
    keywords:
      'Click 100, recruitment platform, AI hiring, talent acquisition tool',
    canonical: '/products/click-100',
    breadcrumbs: [
      { name: 'Products', url: '/products' },
      { name: 'Click 100', url: '/products/click-100' },
    ],
  },

  advantagePlus: {
    title: 'Advantage Plus',
    description:
      'Advantage Plus by Pixel Advant — premium recruitment and workforce management solution for enterprises and GCCs in India.',
    keywords:
      'Advantage Plus, workforce management, Pixel Advant products',
    canonical: '/products/advantage-plus',
    breadcrumbs: [
      { name: 'Products', url: '/products' },
      { name: 'Advantage Plus', url: '/products/advantage-plus' },
    ],
  },

  blog: {
    title: 'Blog - GCC Insights & Industry News',
    description:
      'Read the latest insights on GCC setup, talent acquisition, digital engineering, and global capability centre trends in India. Expert articles by Pixel Advant.',
    keywords:
      'GCC blog, global capability center insights, GCC India news, talent acquisition articles, digital engineering blog',
    canonical: '/blog',
    breadcrumbs: [{ name: 'Blog', url: '/blog' }],
  },

  blogDetails: {
    title: 'Blog Article',
    description:
      'Read expert insights on GCC setup, consulting, and global capability centre trends from Pixel Advant\'s knowledge hub.',
    keywords:
      'GCC insights, global capability center, GCC India',
    canonical: '/blog-details',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Blog', url: '/blog' },
      { name: 'Article', url: '/blog-details' },
    ],
  },

  resources: {
    title: 'Resources - Whitepapers, Case Studies & Brochures',
    description:
      'Access Pixel Advant\'s resource library — whitepapers on GCC trends, case studies of successful GCC setups, and downloadable brochures.',
    keywords:
      'GCC resources, whitepapers, case studies, GCC brochure, Pixel Advant resources',
    canonical: '/resources',
    breadcrumbs: [{ name: 'Resources', url: '/resources' }],
  },

  whitepapers: {
    title: 'Whitepapers & Reports',
    description:
      'Download Pixel Advant\'s whitepapers on GCC setup, global capability centre trends, talent strategies, and industry reports for India.',
    keywords:
      'GCC whitepapers, global capability center reports, GCC India research',
    canonical: '/resources/whitepapers',
    breadcrumbs: [
      { name: 'Resources', url: '/resources' },
      { name: 'Whitepapers', url: '/resources/whitepapers' },
    ],
  },

  caseStudies: {
    title: 'Case Studies - GCC Success Stories',
    description:
      'Explore Pixel Advant\'s GCC case studies — real success stories of Global Capability Centre establishments, scaling, and optimisation in India.',
    keywords:
      'GCC case studies, GCC success stories, global capability center India, Pixel Advant case studies',
    canonical: '/resources/case-studies',
    breadcrumbs: [
      { name: 'Resources', url: '/resources' },
      { name: 'Case Studies', url: '/resources/case-studies' },
    ],
  },

  brochure: {
    title: 'Company Brochure',
    description:
      'Download Pixel Advant\'s company brochure — learn about our GCC setup services, recruitment solutions, digital engineering, and more.',
    keywords:
      'Pixel Advant brochure, company brochure, GCC services brochure',
    canonical: '/resources/brochure',
    breadcrumbs: [
      { name: 'Resources', url: '/resources' },
      { name: 'Brochure', url: '/resources/brochure' },
    ],
  },

  careers: {
    title: 'Careers at Pixel Advant',
    description:
      'Join the Pixel Advant team. Explore career opportunities in GCC consulting, recruitment, digital engineering, and technology services. Work with India\'s leading GCC firm.',
    keywords:
      'Pixel Advant careers, GCC jobs India, consulting careers, technology jobs India',
    canonical: '/careers',
    breadcrumbs: [{ name: 'Careers', url: '/careers' }],
  },

  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about GCC setup, Pixel Advant\'s services, pricing, engagement models, and global capability centre consulting in India.',
    keywords:
      'GCC FAQ, Pixel Advant FAQ, global capability center questions, GCC setup questions',
    canonical: '/faq',
    breadcrumbs: [{ name: 'FAQ', url: '/faq' }],
  },

  service: {
    title: 'Our Services',
    description:
      'Explore Pixel Advant\'s comprehensive service offerings — GCC consulting, recruitment solutions, digital engineering, managed services, and workspace solutions in India.',
    keywords:
      'Pixel Advant services, GCC services, recruitment services India, digital engineering services',
    canonical: '/service',
    breadcrumbs: [{ name: 'Services', url: '/service' }],
  },

  consultingAdvisory: {
    title: 'Consulting & Advisory Services',
    description:
      'Strategic consulting and advisory services for GCC setup in India. Location selection, GCC roadmap, cost modelling, and governance design by Pixel Advant.',
    keywords:
      'GCC consulting India, advisory services, GCC strategy, location selection India',
    canonical: '/solutions/consulting-advisory',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'Consulting & Advisory', url: '/solutions/consulting-advisory' },
    ],
  },

  smartTalentAcquisition: {
    title: 'Smart Talent Acquisition',
    description:
      'AI-powered smart talent acquisition for GCCs in India. Source, screen, and hire top tech talent efficiently with Pixel Advant\'s data-driven recruitment approach.',
    keywords:
      'smart talent acquisition GCC, AI hiring India, GCC recruitment, talent sourcing India',
    canonical: '/solutions/smart-talent-acquisition',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'Smart Talent Acquisition', url: '/solutions/smart-talent-acquisition' },
    ],
  },

  aiLedTalentSupply: {
    title: 'AI-Led Talent Supply',
    description:
      'Leverage AI-led talent supply chains for your GCC in India. Predictive talent analytics, automated matching, and rapid workforce deployment by Pixel Advant.',
    keywords:
      'AI talent supply GCC, predictive hiring India, automated recruitment, talent supply chain',
    canonical: '/solutions/ai-led-talent-supply',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'AI-Led Talent Supply', url: '/solutions/ai-led-talent-supply' },
    ],
  },

  talentManagement: {
    title: 'Talent Management Services',
    description:
      'Comprehensive talent management services for GCCs — employee engagement, retention strategies, upskilling programmes, and performance management by Pixel Advant.',
    keywords:
      'talent management GCC, employee retention India, GCC workforce management, upskilling GCC',
    canonical: '/solutions/talent-management',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'Talent Management', url: '/solutions/talent-management' },
    ],
  },

  managedServices: {
    title: 'Managed Services for GCC',
    description:
      'End-to-end managed services for Global Capability Centres in India. Operations management, infrastructure support, and continuous optimisation by Pixel Advant.',
    keywords:
      'managed services GCC, GCC operations India, infrastructure management, GCC optimisation',
    canonical: '/solutions/managed-services',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'Managed Services', url: '/solutions/managed-services' },
    ],
  },

  workspaceSolutions: {
    title: 'Workspace Solutions for GCC',
    description:
      'Flexible workspace solutions for GCCs in India — managed offices, co-working spaces, and fully equipped tech infrastructure setup by Pixel Advant.',
    keywords:
      'workspace solutions GCC, managed office India, GCC office setup, co-working GCC',
    canonical: '/solutions/workspace-solutions',
    breadcrumbs: [
      { name: 'Solutions', url: '/service' },
      { name: 'Workspace Solutions', url: '/solutions/workspace-solutions' },
    ],
  },

  error404: {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist. Return to Pixel Advant homepage.',
    canonical: '/404',
    noIndex: true,
    breadcrumbs: [],
  },

  dashboardLogin: {
    title: 'Dashboard Login',
    description: 'Login to Pixel Advant admin dashboard.',
    canonical: '/dashboard-login',
    noIndex: true,
    breadcrumbs: [],
  },

  dashboard: {
    title: 'Dashboard',
    description: 'Pixel Advant admin dashboard.',
    canonical: '/dashboard',
    noIndex: true,
    breadcrumbs: [],
  },
};
