export interface GCCServicePageCta {
  label: string;
  link: string;
}

export interface GCCServiceOffering {
  title: string;
  description: string;
  icon: string;
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
  heroLabel: "Managed Technology Services",
  heroTitle: "Your Trusted Partner for IT Services in India",
  heroDescription:
    "Pixel Advant helps businesses strengthen technology infrastructure, modernise applications, secure digital operations, and scale with the right engineering and support models.",
  heroImage: "/img/project/gcc-it-services.jpg",
  bannerImage: "/img/project/gcc-it-services.jpg",
  trustPoints: [
    "Managed IT and cloud solutions",
    "Secure and scalable infrastructure",
    "Custom software and web delivery",
    "Business-aligned digital transformation",
  ],
  introTitle: "Technology Meets Strategy at Pixel Advant",
  introParagraphs: [
    "Businesses today need more than technical vendors. They need partners who connect engineering decisions to commercial outcomes, operational resilience, and long-term scale.",
    "Pixel Advant brings its GCC and talent expertise into IT delivery so startups, mid-sized firms, and enterprise teams can build platforms, modernise systems, and strengthen infrastructure with a single accountable partner.",
  ],
  serviceSectionTitle: "Our IT Services",
  serviceSectionDescription:
    "Our IT services are designed to reduce friction in business operations and create long-term technology capability that grows with your organisation.",
  offerings: [
    {
      title: "Custom Software Development",
      description:
        "We build business-critical software that supports internal operations, customer experience, and workflow automation.",
      icon: "/img/service/icon/s-icon-1.svg",
      items: [
        "Custom web application development",
        "Enterprise software and workflow platforms",
        "API development and third-party integrations",
        "SaaS product development",
        "Legacy system modernisation",
      ],
    },
    {
      title: "Web Design and Development",
      description:
        "Our web teams deliver high-performance websites built for credibility, conversion, and long-term manageability.",
      icon: "/img/service/icon/s-icon-2.svg",
      items: [
        "Responsive website design and development",
        "E-commerce builds on Shopify, WooCommerce, and similar platforms",
        "CMS development on WordPress and headless stacks",
        "Landing pages designed for conversion",
        "Website audit, redesign, and optimisation",
      ],
    },
    {
      title: "IT Staffing and Tech Talent Acquisition",
      description:
        "We help businesses secure high-value technical talent for permanent, contract, remote, and leadership requirements.",
      icon: "/img/service/icon/s-icon-3.svg",
      items: [
        "IT contract staffing",
        "Permanent IT staffing",
        "Dedicated development teams",
        "Remote IT talent acquisition",
        "C-suite and GCC technology hiring",
      ],
    },
    {
      title: "Cloud Solutions and Managed IT Services",
      description:
        "We support migration, infrastructure management, compliance, and operational continuity across modern cloud estates.",
      icon: "/img/service/icon/s-icon-10.svg",
      items: [
        "Cloud migration consulting for AWS, Azure, and Google Cloud",
        "Managed IT infrastructure services",
        "Cloud security and compliance services",
        "DevOps and CI/CD setup",
        "24x7 helpdesk and remote support services",
      ],
    },
    {
      title: "IT Consulting and Digital Transformation",
      description:
        "Our consultants help identify technology gaps, prioritise investments, and build a practical roadmap for transformation.",
      icon: "/img/service/icon/s-icon-11.svg",
      items: [
        "IT strategy and roadmap consulting",
        "Digital transformation advisory",
        "Technology vendor evaluation and selection",
        "Process automation and workflow digitisation",
        "IT governance and risk management",
      ],
    },
    {
      title: "Cybersecurity Services",
      description:
        "We help protect digital assets through assessments, controls, compliance readiness, and response planning.",
      icon: "/img/service/icon/s-icon-12.svg",
      items: [
        "Vulnerability assessment and penetration testing",
        "Security audits for ISO 27001 and SOC 2 readiness",
        "Endpoint security and threat monitoring",
        "Data privacy consulting",
        "Incident response and business continuity planning",
      ],
    },
  ],
  whyChooseTitle: "Why Businesses Choose Pixel Advant for IT Services",
  whyChooseDescription:
    "Our technology engagements are built around business clarity, execution discipline, and measurable progress rather than isolated technical delivery.",
  highlights: sharedHighlights,
  industriesTitle: "Industries We Support",
  industriesDescription:
    "Our IT services are flexible enough to support platform modernisation, secure operations, and scalable delivery across multiple business environments.",
  industries: sharedIndustries,
  processTitle: "How We Work",
  processDescription:
    "We use a simple, transparent operating model that keeps decisions fast and delivery structured from discovery to scale.",
  processSteps: sharedProcessSteps,
  faqs: [
    {
      question: "What IT services does Pixel Advant provide?",
      answer:
        "Pixel Advant provides custom software development, web design and development, cloud solutions, managed IT services, IT staffing, cybersecurity, and digital transformation consulting.",
    },
    {
      question: "Can Pixel Advant handle both IT staffing and technology delivery at the same time?",
      answer:
        "Yes. We can support technical hiring, dedicated teams, implementation, infrastructure, and advisory work under one coordinated engagement model.",
    },
    {
      question: "What sets Pixel Advant apart from other IT service providers?",
      answer:
        "Our strength comes from combining GCC advisory, hiring expertise, and technology delivery, which helps us design systems and teams around commercial reality, not just technical output.",
    },
    {
      question: "Do you offer customised IT service packages for startups?",
      answer:
        "Yes. We tailor IT engagement models for startups and growth-stage businesses so they can prioritise outcomes while staying aligned to budget and stage.",
    },
  ],
  ctaTitle: "Ready to Build Stronger Technology Foundations?",
  ctaDescription:
    "Whether you need custom software, cloud support, cybersecurity, or a scalable engineering team, we can help you shape the right delivery plan.",
  primaryCta: {
    label: "Schedule a Strategy Call",
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
  heroTitle: "Digital Marketing Services Built for Measurable Growth",
  heroDescription:
    "Pixel Advant helps businesses attract the right traffic, convert demand into qualified leads, and build sustainable digital visibility with channel strategies tied to outcomes.",
  heroImage: "/img/project/gcc-digital-transformation.jpg",
  bannerImage: "/img/project/gcc-digital-transformation.jpg",
  trustPoints: [
    "SEO and AI search visibility",
    "Paid campaigns focused on qualified leads",
    "Content and social strategies for brand growth",
    "Automation and reporting for continuous improvement",
  ],
  introTitle: "Performance Marketing with Business Context",
  introParagraphs: [
    "Digital growth works best when marketing strategy is aligned with business goals, buyer behaviour, and operational readiness. That is the approach we bring to every engagement.",
    "From B2B lead generation to full-funnel visibility and brand reputation, Pixel Advant builds digital marketing programmes that support both immediate performance and long-term market presence.",
  ],
  serviceSectionTitle: "Our Digital Marketing Services",
  serviceSectionDescription:
    "We focus on channels and content systems that improve discoverability, lead quality, and conversion efficiency across the customer journey.",
  offerings: [
    {
      title: "Search Engine Optimization",
      description:
        "Our SEO services combine technical strength, content planning, and AI-search visibility to improve discoverability across search journeys.",
      icon: "/img/service/icon/s-icon-4.svg",
      items: [
        "Technical SEO audit and optimisation",
        "On-page and off-page SEO services",
        "Local SEO campaigns",
        "Keyword research and content strategy",
        "AI search optimisation for modern discovery platforms",
      ],
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "We manage paid campaigns with a focus on spend efficiency, conversion quality, and channel-to-pipeline visibility.",
      icon: "/img/service/icon/s-icon-5.svg",
      items: [
        "Google Ads management",
        "Meta Ads and LinkedIn Ads",
        "Retargeting and remarketing",
        "Landing page optimisation for paid traffic",
        "PPC audit and competitor analysis",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Our social strategies help businesses strengthen brand reputation, audience engagement, and thought leadership across the right platforms.",
      icon: "/img/service/icon/s-icon-7.svg",
      items: [
        "Social media strategy and content calendar",
        "Content creation services",
        "Community management and engagement",
        "Influencer and collaboration support",
        "LinkedIn thought leadership for B2B teams",
      ],
    },
    {
      title: "Content Marketing and Strategy",
      description:
        "We create content systems that educate audiences, improve search visibility, and support conversion across campaigns and sales journeys.",
      icon: "/img/service/icon/s-icon-8.svg",
      items: [
        "SEO blog and article writing",
        "Website copy and landing page content",
        "Email marketing copy and newsletters",
        "Case studies and whitepapers",
        "Video scripting and content audits",
      ],
    },
    {
      title: "Email Marketing and Automation",
      description:
        "We design lifecycle campaigns and automation workflows that keep leads engaged and improve conversion over time.",
      icon: "/img/service/icon/s-icon-9.svg",
      items: [
        "Email campaign strategy and execution",
        "Drip campaigns and workflow automation",
        "CRM integration with HubSpot, Zoho, and Salesforce",
        "A/B testing and performance optimisation",
        "Deliverability and subscriber growth support",
      ],
    },
    {
      title: "Online Reputation Management",
      description:
        "We help businesses monitor brand perception, strengthen review profiles, and improve what prospects see when they research you online.",
      icon: "/img/service/icon/s-icon-13.svg",
      items: [
        "Brand monitoring and sentiment analysis",
        "Negative content suppression guidance",
        "Review generation and management",
        "Crisis communication and PR support",
        "Personal branding for founders and executives",
      ],
    },
  ],
  whyChooseTitle: "Why Businesses Choose Pixel Advant for Digital Marketing",
  whyChooseDescription:
    "We focus on marketing systems that are transparent, measurable, and closely connected to sales, brand, and growth goals.",
  highlights: sharedHighlights,
  industriesTitle: "Industries We Serve",
  industriesDescription:
    "Our digital marketing services are built to support both B2B and B2C growth models, especially where trust, expertise, and lead quality matter.",
  industries: sharedIndustries,
  processTitle: "How We Execute Growth Programmes",
  processDescription:
    "Our marketing process keeps strategy, launch, optimisation, and reporting tightly connected so improvements compound over time.",
  processSteps: sharedProcessSteps,
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
        "We combine market understanding, business context, technology capability, and transparent reporting so strategy is tied to outcomes rather than vanity metrics.",
    },
    {
      question: "Do you offer customised digital marketing packages for startups?",
      answer:
        "Yes. We tailor channel mix, content cadence, and reporting depth to match startup budgets, stage, and growth priorities.",
    },
  ],
  ctaTitle: "Ready to Grow Your Digital Presence?",
  ctaDescription:
    "Whether you need SEO, paid demand generation, content systems, or marketing automation, we can help build a focused strategy around your growth targets.",
  primaryCta: {
    label: "Get a Marketing Strategy Call",
    link: "/contact",
  },
  secondaryCta: {
    label: "Mail the Team",
    link: "mailto:info@pixeladvant.com",
  },
};
