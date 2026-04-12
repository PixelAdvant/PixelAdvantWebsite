import type { ServiceIconKey } from "@/lib/serviceIcons";

export interface GCCServicePageCta {
  label: string;
  link: string;
}

export interface GCCServiceOffering {
  title: string;
  description: string;
  icon?: string;
  iconKey?: ServiceIconKey;
  items: string[];
}

export interface GCCServiceHighlight {
  title: string;
  description: string;
}

export interface GCCServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface GCCServiceFaq {
  question: string;
  answer: string;
}

export interface GCCServicePageData {
  key: string;
  pageTitle: string;
  currentPage: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  bannerImage: string;
  trustPoints: string[];
  introTitle: string;
  introParagraphs: string[];
  serviceSectionTitle: string;
  serviceSectionDescription: string;
  offerings: GCCServiceOffering[];
  whyChooseTitle: string;
  whyChooseDescription: string;
  highlights: GCCServiceHighlight[];
  industriesTitle: string;
  industriesDescription: string;
  industries: string[];
  processTitle: string;
  processDescription: string;
  processSteps: GCCServiceProcessStep[];
  faqs: GCCServiceFaq[];
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: GCCServicePageCta;
  secondaryCta: GCCServicePageCta;
}

const sharedHighlights: GCCServiceHighlight[] = [
  {
    title: "Industry-Integrated Expertise",
    description:
      "Our teams combine recruitment, GCC advisory, technology, and growth experience so recommendations stay practical and business-led.",
  },
  {
    title: "Outcome-Oriented Delivery",
    description:
      "We build plans around measurable outcomes such as leads, platform performance, hiring quality, process efficiency, and cost savings.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear status updates, documented action plans, and direct access to the team keep delivery visible from kickoff to review.",
  },
  {
    title: "Scalable Engagement Models",
    description:
      "Our delivery model flexes for startups, mid-sized businesses, and enterprise teams that need staged or multi-market execution.",
  },
  {
    title: "Data-Driven Execution",
    description:
      "Campaign, engineering, and hiring decisions are guided by analytics, market intelligence, testing, and performance review loops.",
  },
  {
    title: "Integrated Service Delivery",
    description:
      "When businesses need technology, talent, and go-to-market support together, we coordinate those workstreams under one plan.",
  },
];

const sharedIndustries = [
  "Technology & SaaS",
  "Banking, Financial Services & Insurance",
  "Healthcare & MedTech",
  "E-commerce & Retail",
  "Manufacturing & Industrial",
  "Education & EdTech",
  "Real Estate & PropTech",
  "Startups & Venture-Backed Businesses",
  "Global Capability Centers & MNCs",
];

const sharedProcessSteps: GCCServiceProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a focused discussion to understand business goals, current blockers, delivery expectations, and success metrics.",
  },
  {
    step: "02",
    title: "Strategy and Proposal",
    description:
      "You receive a tailored strategy with service scope, timelines, priorities, and recommended outcomes for your context.",
  },
  {
    step: "03",
    title: "Onboarding and Kickoff",
    description:
      "We align teams, tools, access, communication rhythms, and execution ownership so delivery starts without friction.",
  },
  {
    step: "04",
    title: "Execution and Delivery",
    description:
      "Our specialists execute, optimise, launch, and iterate with precision while keeping your team involved at the right moments.",
  },
  {
    step: "05",
    title: "Reporting and Reviews",
    description:
      "Regular reports and review calls help us assess progress, refine priorities, and keep performance aligned to business goals.",
  },
  {
    step: "06",
    title: "Scale and Grow",
    description:
      "As outcomes improve, we expand the engagement with new workstreams, new markets, or deeper transformation initiatives.",
  },
];

export const itServicesPageData: GCCServicePageData = {
  key: "it-services",
  pageTitle: "IT Services",
  currentPage: "IT Services",
  heroLabel: "End-to-End Technology Services",
  heroTitle: "End-to-End IT Services for Startups and Enterprises",
  heroDescription:
    "We design, develop, and deliver digital products that actually perform. Whether you are a founder with a new idea or a business that needs to modernize, our IT services practice in India works with you from the very start through launch and beyond.",
  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  bannerImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  trustPoints: [
    "Early-stage startups building their first product",
    "Growth-stage companies scaling their platforms",
    "Enterprises modernizing old systems",
    "Teams looking for a long-term tech partner",
  ],
  introTitle: "Built to Perform. Delivered on Time.",
  introParagraphs: [
    "We design, develop, and deliver digital products that actually perform. Whether you are a founder with a new idea or a business that needs to modernize, our IT services practice in India works with you from the very start through launch and beyond.",
    "We work with early-stage startups building their first product, small and medium businesses expanding online, growth-stage companies scaling their platforms, enterprises modernizing old systems, founders who need an MVP fast, and teams looking for a long-term tech partner.",
  ],
  serviceSectionTitle: "Our IT Services",
  serviceSectionDescription:
    "From product development to UI/UX design, our IT services are built to reduce friction and create long-term technology capability that grows with your organisation.",
  offerings: [
    {
      title: "Product Development",
      description:
        "We build products people actually use, on time and within budget. Whether you have a rough idea or a detailed spec, our product development team takes it from concept to a live working product. We work in short sprints so you always know what is happening and you see real progress every two weeks, not after six months.",
      iconKey: "development",
      items: [
        "Discovery session to understand your goals and users",
        "Right tech stack planned for your budget and timeline",
        "Development in two-week sprints with demos at the end of each",
        "Every feature tested before release",
        "Cloud setup, deployment, and go-live support included",
        "Post-launch fixes and improvements",
      ],
    },
    {
      title: "Website Design and Development",
      description:
        "Fast, good-looking websites that are built to convert visitors into customers. Your website is your most important sales tool. Our web development services team builds websites that look professional, load quickly, and are designed to get results. Every decision we make has a reason behind it.",
      iconKey: "web",
      items: [
        "Mobile-first responsive design",
        "Basic SEO setup",
        "Page speed optimization",
        "SSL and daily backups",
        "CMS so you can edit your own content",
        "Analytics and conversion tracking",
        "Contact forms and CTAs",
        "30 days of support after launch",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "iOS, Android, and cross-platform apps that people enjoy using. We build apps that are fast, stable, and intuitive. Our mobile app development practice handles consumer apps, internal tools, and marketplaces, covering the full process from the first conversation through to submission on the App Store or Play Store.",
      iconKey: "mobile",
      items: [
        "Define core features, user flows, and monetization before writing any code",
        "Design and prototype the experience to catch problems early",
        "React Native or Flutter for most projects, saving around 80 percent of cost vs two native apps",
        "Native Swift or Kotlin when performance demands it",
        "Test on 30 or more real devices before submission",
        "Handle OS updates, security patches, and new features after launch",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Design that is research-backed, easy to use, and built to convert. Good design is not just about how something looks. It is about making your product easy to use, keeping people from leaving, and building trust. Our UI UX design services combine user research with strong visual craft to create experiences that work for your users and your business.",
      iconKey: "design",
      items: [
        "User research and interviews",
        "Information architecture",
        "Wireframes and low-fidelity prototypes",
        "High-fidelity UI design with a full design system",
        "Interactive clickable prototypes",
        "Usability testing",
        "Clean handoff files for developers with all specs and assets",
      ],
    },
  ],
  whyChooseTitle: "Why Businesses Choose Pixel Advant for IT Services",
  whyChooseDescription:
    "We are a technology company that understands your product and your users. That makes our delivery more relevant and more effective than working with a vendor who only sees the technical side.",
  highlights: sharedHighlights,
  industriesTitle: "Industries We Support",
  industriesDescription:
    "Our IT services support SaaS and B2B software, e-commerce, healthcare, fintech, EdTech, real estate, logistics, and consumer apps.",
  industries: sharedIndustries,
  processTitle: "How We Work",
  processDescription:
    "We use a simple, transparent operating model that keeps decisions fast and delivery structured from discovery to scale.",
  processSteps: sharedProcessSteps,
  faqs: [
    {
      question: "What IT services does Pixel Advant provide?",
      answer:
        "Pixel Advant provides product development, website design and development, mobile app development, and UI/UX design. We cover the full process from the first conversation through to launch and beyond.",
    },
    {
      question: "How do you manage project timelines?",
      answer:
        "We work in two-week sprints so you always know what is happening and you see real progress regularly, not after six months. Every sprint ends with a demo so you can review progress and give feedback.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Yes. We work with founders who need an MVP fast, startups building their first product, and teams looking for a long-term tech partner. We tailor the engagement model to your stage and budget.",
    },
    {
      question: "What mobile platforms do you develop for?",
      answer:
        "We build for iOS, Android, and cross-platform. We use React Native or Flutter for most projects, saving around 80 percent of cost compared to two native apps. We use native Swift or Kotlin when performance demands it.",
    },
  ],
  ctaTitle: "Ready to Build Something?",
  ctaDescription:
    "Whether you are looking for a product development company you can build a long-term relationship with, or you need web or mobile development for a fast turnaround, tell us about your project and we will come back with a proposal within 48 hours. No commitment needed for the first call.",
  primaryCta: {
    label: "Get in Touch",
    link: "/contact",
  },
  secondaryCta: {
    label: "Email Our Team",
    link: "mailto:info@pixeladvant.com",
  },
};

export const digitalMarketingServicesPageData: GCCServicePageData = {
  key: "digital-marketing-services",
  pageTitle: "Digital Marketing Services",
  currentPage: "Digital Marketing Services",
  heroLabel: "Performance-Driven Marketing",
  heroTitle: "Digital Marketing That Delivers Measurable Results",
  heroDescription:
    "From SEO and paid ads to content, social media, and email, our digital marketing services help businesses of all sizes grow online, reach the right people, and turn clicks into customers.",
  heroImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  bannerImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  trustPoints: [
    "SEO that keeps growing traffic over time",
    "Paid campaigns focused on cost per acquisition",
    "Content that builds trust and ranks in search",
    "Email and automation for reliable revenue",
  ],
  introTitle: "Marketing That Works as Hard as You Do",
  introParagraphs: [
    "From SEO and paid ads to content, social media, and email, our digital marketing services help businesses of all sizes grow online, reach the right people, and turn clicks into customers.",
    "Most businesses build a great product and then struggle to get noticed. We make sure that does not happen. We work as part of your team, understand your market and goals, and build campaigns that generate real trackable growth.",
  ],
  serviceSectionTitle: "Our Digital Marketing Services",
  serviceSectionDescription:
    "We focus on channels and content systems that improve discoverability, lead quality, and conversion efficiency across the full customer journey.",
  offerings: [
    {
      title: "Search Engine Optimization",
      description:
        "Rank higher on Google and grow traffic that keeps growing over time. SEO gives the best long-term return on investment for most businesses. We work on the technical side, the content side, and on building your website's authority with Google.",
      iconKey: "seo",
      items: [
        "SEO audit and competitor analysis",
        "Keyword research mapped to your pages",
        "Technical SEO covering site speed, Core Web Vitals, and schema markup",
        "On-page work on titles, headings, and internal links",
        "Content strategy and blog writing",
        "Link building through outreach and PR",
        "Local SEO and Google Business Profile optimization",
        "Monthly ranking and traffic reports",
      ],
    },
    {
      title: "Paid Advertising",
      description:
        "Targeted ads that reach the right people at the right time. We manage paid campaigns on Google, YouTube, Meta, and LinkedIn. Everything is focused on cost per acquisition and return on ad spend. We audit existing accounts or set them up from scratch, produce all ad creatives, test continuously, and send a full report monthly.",
      iconKey: "paidMedia",
      items: [
        "Google Search Ads for high-intent buyers",
        "Display and Remarketing campaigns",
        "YouTube video ads",
        "Meta campaigns using interest and lookalike audiences",
        "LinkedIn campaigns targeting by job title and industry",
        "Performance Max campaigns",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Content that builds trust, ranks in search, and brings in leads over time. We create content that works hard for your business. It ranks in search, speaks to your audience, and moves people toward buying.",
      iconKey: "content",
      items: [
        "Content strategy and editorial calendar",
        "Blog posts and thought leadership articles",
        "Long-form guides and whitepapers",
        "Case studies and customer stories",
        "Website copy and landing pages",
        "Email newsletters",
        "Video scripts",
        "Infographics",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Build a real presence on social that drives actual business results. We manage your channels with strategy and consistency across LinkedIn, Instagram, Facebook, Twitter/X, YouTube, and others where they make sense for your business. It is not just about posting — it is about building a following that trusts you.",
      iconKey: "social",
      items: [
        "Social audit and competitor review",
        "Monthly content calendar",
        "Original posts, graphics, and short videos for each platform",
        "Community management with responses within 24 hours",
        "Hashtag and discoverability strategy",
        "Monthly report on reach, engagement, and follower growth",
      ],
    },
    {
      title: "Email Marketing and Automation",
      description:
        "Make your email list your most reliable revenue channel. Email delivers the best ROI of any marketing channel when done properly. We build and manage programs that nurture leads, onboard new customers, and bring back people who have gone quiet.",
      iconKey: "email",
      items: [
        "Email strategy and list segmentation",
        "Welcome and onboarding sequences",
        "Lead nurturing drip campaigns",
        "Promotional campaigns for launches and events",
        "Regular newsletters",
        "Marketing automation setup on HubSpot, Mailchimp, ActiveCampaign, or Klaviyo",
        "Subject line testing and deliverability work",
      ],
    },
    {
      title: "Employer Branding and GCC Brand Building",
      description:
        "Attract the best talent in India by building a brand people want to work for. For GCC companies hiring in India, how you are perceived as an employer is your greatest advantage in a competitive talent market. We bring together GCC expertise and digital marketing to help you stand out where the right candidates are looking.",
      iconKey: "reputation",
      items: [
        "Employee Value Proposition development",
        "LinkedIn employer branding campaigns",
        "Glassdoor and Indeed profile management",
        "Careers page design and copy",
        "Employee advocacy programs",
        "Targeted recruitment marketing across Bangalore, Hyderabad, Pune, and NCR",
      ],
    },
  ],
  whyChooseTitle: "Why Pixel Advant for Marketing?",
  whyChooseDescription:
    "We are not a generic agency. We are a technology company that also handles marketing, which means we understand your product and your users in ways most digital marketing agencies do not. That makes our campaigns more relevant and more effective. No long-term contracts. You own all your accounts and data. You get a dedicated account manager, not a support queue. Reports are written in plain language without vanity metrics. We always start with strategy before we touch execution.",
  highlights: sharedHighlights,
  industriesTitle: "Industries We Serve",
  industriesDescription:
    "Our digital marketing services are built to support both B2B and B2C growth models, especially where trust, expertise, and lead quality matter.",
  industries: sharedIndustries,
  processTitle: "How Do We Work with You?",
  processDescription:
    "We offer three engagement tiers so you can start at the right level and scale as your results grow.",
  processSteps: [
    {
      step: "01",
      title: "Starter",
      description:
        "For businesses getting started. One channel focus — either SEO, paid ads, or social media. A monthly content calendar with 8 posts per month. Monthly performance report. Dedicated account manager. Best for startups and small businesses.",
    },
    {
      step: "02",
      title: "Growth",
      description:
        "For businesses ready to scale. Two or three channels covered — typically SEO, paid ads, social, and content. Full content production including blogs, social, and email. Calls every two weeks. Conversion rate optimization included. Best for SMEs, GCCs, and growth-stage companies.",
    },
    {
      step: "03",
      title: "Enterprise",
      description:
        "For complex multi-channel needs. All channels covered including the employer branding GCC India program. Dedicated team with a strategist, content writer, designer, and analyst. Weekly reporting and executive dashboards. Custom service agreement. Best for large enterprises and GCCs.",
    },
    {
      step: "04",
      title: "Free Marketing Audit",
      description:
        "Start with a free marketing audit. We will look at your website, social channels, SEO, and ad accounts, and tell you exactly where the biggest opportunities are. No charge and no commitment.",
    },
    {
      step: "05",
      title: "Strategy and Execution",
      description:
        "Once aligned on priorities, we build the strategy, set up the channels, produce all content and creatives, and begin execution — all within one coordinated team.",
    },
    {
      step: "06",
      title: "Report and Optimize",
      description:
        "Regular performance reports in plain language without vanity metrics. We review results together and optimize continuously so campaigns compound over time.",
    },
  ],
  faqs: [
    {
      question: "Does Pixel Advant offer digital marketing services for B2B companies?",
      answer:
        "Yes. We support B2B digital marketing with SEO, LinkedIn campaigns, account-focused content, and lead generation programmes for competitive industries.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Paid campaigns can show movement within the first few weeks, while SEO usually builds steadily over three to six months before compounding further.",
    },
    {
      question: "What makes Pixel Advant different from other digital marketing agencies?",
      answer:
        "We are a technology company that also handles marketing, which means we understand your product and your users in ways most agencies do not. No long-term contracts, you own all your accounts and data, and reports are written in plain language without vanity metrics.",
    },
    {
      question: "Do you offer customised digital marketing packages for startups?",
      answer:
        "Yes. We tailor channel mix, content cadence, and reporting depth to match startup budgets, stage, and growth priorities. The Starter tier is the best place to begin.",
    },
  ],
  ctaTitle: "Let Us Grow Your Digital Presence Together",
  ctaDescription:
    "Start with a free marketing audit. We will look at your website, social channels, SEO, and ad accounts, and tell you exactly where the biggest opportunities are. No charge and no commitment.",
  primaryCta: {
    label: "Get a Free Marketing Audit",
    link: "/contact",
  },
  secondaryCta: {
    label: "Mail the Team",
    link: "mailto:info@pixeladvant.com",
  },
};
