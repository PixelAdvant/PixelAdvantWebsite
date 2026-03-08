export type SolutionDetailKey =
  | "consultingAdvisory"
  | "smartTalentAcquisition"
  | "aiLedTalentSupply"
  | "talentManagement"
  | "managedServices"
  | "workspaceSolutions"
  | "applicationEngineering"
  | "qualityEngineering"
  | "businessArchitecture"
  | "productDevelopment"
  | "legalServices";

export interface SolutionQuickFact {
  label: string;
  value: string;
}

export interface SolutionFocusArea {
  title: string;
  description: string;
}

export interface SolutionDetailData {
  pageTitle: string;
  heading: string;
  bannerImage: string;
  overview: string[];
  focusAreas: SolutionFocusArea[];
  benefits: string[];
  deliverables: string[];
  quickFacts: SolutionQuickFact[];
}

export const solutionDetailsData: Record<SolutionDetailKey, SolutionDetailData> = {
  consultingAdvisory: {
    pageTitle: "Consulting & Advisory",
    heading: "Strategic GCC Consulting & Advisory",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "Our Consulting and Advisory offering helps organizations define a practical GCC strategy aligned to business goals, cost targets, and growth plans.",
      "From location strategy and operating model design to governance setup, we provide structured guidance to reduce risk and accelerate execution."
    ],
    focusAreas: [
      {
        title: "GCC Advisory Services",
        description:
          "Define GCC vision, operating model, and location strategy aligned to enterprise priorities.",
      },
      {
        title: "Benchmarking Insights",
        description:
          "Compare cost, productivity, and talent metrics against market benchmarks to identify gaps.",
      },
      {
        title: "Market Research",
        description:
          "Use sector, competitor, and talent intelligence to support expansion and investment decisions.",
      },
    ],
    benefits: [
      "Clear GCC roadmap with phased execution plan",
      "Risk and compliance readiness from day one",
      "Improved alignment between global and local stakeholders"
    ],
    deliverables: [
      "Business case and GCC operating model blueprint",
      "Governance framework and KPI architecture",
      "Implementation plan with milestones and ownership matrix"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Advisory + Execution Support" },
      { label: "Best For", value: "New GCC Setup and Expansion" },
      { label: "Typical Timeline", value: "6-12 Weeks" }
    ]
  },

  smartTalentAcquisition: {
    pageTitle: "Smart Talent Acquisition",
    heading: "Data-Driven Smart Talent Acquisition",
    bannerImage: "/img/service/image2.webp",
    overview: [
      "Our Smart Talent Acquisition service combines market intelligence, role prioritization, and AI-assisted screening to improve hiring quality and speed.",
      "We optimize candidate pipelines across leadership, niche, and volume hiring tracks while maintaining experience standards."
    ],
    focusAreas: [
      {
        title: "Smart Talent Acquisition with AI-Led Innovation",
        description:
          "Blend AI-led matching, recruiter workflows, and market intelligence to improve hiring velocity.",
      },
    ],
    benefits: [
      "Reduced time-to-hire for critical roles",
      "Higher quality candidate shortlists",
      "Better hiring visibility through pipeline analytics"
    ],
    deliverables: [
      "Talent demand and market mapping by function",
      "Structured sourcing and screening workflow",
      "Weekly hiring dashboards and conversion insights"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Embedded Hiring Partner" },
      { label: "Best For", value: "Scale Hiring and Critical Roles" },
      { label: "Typical Timeline", value: "4-8 Weeks to Stabilize" }
    ]
  },
  aiLedTalentSupply: {
    pageTitle: "AI Led Talent Supply",
    heading: "AI Led Talent Supply Process",
    bannerImage: "/img/service/image3.webp",
    overview: [
      "AI Led Talent Supply enables continuous access to qualified candidates through predictive demand planning and automated matching.",
      "The model helps reduce sourcing bottlenecks and ensures role-ready talent flow for fast-growing GCC teams."
    ],
    focusAreas: [
      {
        title: "AI Led Talent Supply Process",
        description:
          "Build continuous role-based pipelines using predictive demand planning and intelligent matching.",
      },
    ],
    benefits: [
      "Predictable supply for priority skill clusters",
      "Lower dependency on reactive hiring cycles",
      "Improved hiring accuracy through matching logic"
    ],
    deliverables: [
      "AI-assisted role clustering and demand forecast",
      "Talent supply engine with reusable pipelines",
      "Real-time reporting for supply health and gap tracking"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Managed Talent Supply" },
      { label: "Best For", value: "High-Growth Delivery Teams" },
      { label: "Typical Timeline", value: "8-12 Weeks for Full Rollout" }
    ]
  },
  talentManagement: {
    pageTitle: "Talent Management",
    heading: "Talent Management Solutions",
    bannerImage: "/img/service/image6.jpg",
    overview: [
      "Our Talent Management Solutions focus on retention, capability development, performance calibration, and leadership pipeline readiness.",
      "We help create a measurable people strategy that supports stability, productivity, and long-term GCC maturity."
    ],
    focusAreas: [
      {
        title: "Talent Management Solutions",
        description:
          "Strengthen retention, capability progression, and leadership readiness through structured programs.",
      },
    ],
    benefits: [
      "Improved retention and employee engagement",
      "Stronger internal capability development",
      "Performance governance linked to business outcomes"
    ],
    deliverables: [
      "Capability framework and role progression paths",
      "Performance review and calibration mechanisms",
      "Retention interventions and talent risk monitoring"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Program + Advisory" },
      { label: "Best For", value: "Retention and Capability Building" },
      { label: "Typical Timeline", value: "8-16 Weeks" }
    ]
  },
  managedServices: {
    pageTitle: "Managed Services",
    heading: "End-to-End Managed Services",
    bannerImage: "/img/service/image7.webp",
    overview: [
      "Managed Services provides operational ownership for specific recruitment and GCC support workflows with SLA-backed delivery.",
      "This allows internal teams to focus on strategic priorities while we run standardized, high-quality execution."
    ],
    focusAreas: [
      {
        title: "Tax and Finance Compliance",
        description:
          "Run recurring tax, finance, and statutory processes with clear controls and reporting standards.",
      },
      {
        title: "HR Shared Services",
        description:
          "Centralize onboarding and employee lifecycle operations for consistency and scale.",
      },
      {
        title: "Support Services",
        description:
          "Deliver operational support functions with SLA governance and measurable service quality.",
      },
    ],
    benefits: [
      "Operational consistency with SLA-based tracking",
      "Lower process overhead for internal teams",
      "Faster execution through dedicated delivery pods"
    ],
    deliverables: [
      "Process ownership model and governance cadence",
      "SLA and performance scorecards",
      "Continuous optimization with monthly improvement plans"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Outcome-Based Managed Service" },
      { label: "Best For", value: "Operational Scale and Stability" },
      { label: "Typical Timeline", value: "4-6 Weeks to Go-Live" }
    ]
  },
  workspaceSolutions: {
    pageTitle: "Workspace Solutions",
    heading: "Integrated Workspace Solutions",
    bannerImage: "/img/service/image8.avif",
    overview: [
      "Workspace Solutions aligns physical infrastructure, collaboration standards, and workplace policies for GCC productivity and continuity.",
      "We support planning and setup for secure, scalable, and people-friendly workspace environments."
    ],
    focusAreas: [
      {
        title: "Innovative Workspace Strategies",
        description:
          "Define workspace models that optimize collaboration, utilization, and cost efficiency.",
      },
      {
        title: "Innovative Workspace Design Consultation",
        description:
          "Design secure and employee-friendly environments aligned to delivery and culture goals.",
      },
      {
        title: "Scalable Workspace Solutions",
        description:
          "Create repeatable workspace standards for multi-location rollout and expansion.",
      },
    ],
    benefits: [
      "Faster workspace readiness for team onboarding",
      "Improved workplace utilization and compliance",
      "Better employee experience through design and policy alignment"
    ],
    deliverables: [
      "Workspace strategy and occupancy model",
      "Readiness checklist across IT, security, and facilities",
      "Operational playbook for hybrid and on-site teams"
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Consult + Implementation" },
      { label: "Best For", value: "New Sites and Team Expansion" },
      { label: "Typical Timeline", value: "6-10 Weeks" }
    ]
  },
  applicationEngineering: {
    pageTitle: "Application Engineering",
    heading: "Application Engineering Services",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "We design, build, and modernize enterprise applications that power your digital operations.",
      "From cloud-native development to legacy modernization, our teams deliver robust, scalable, and maintainable software solutions tailored to your business needs.",
    ],
    focusAreas: [
      { title: "Cloud-Native Development", description: "Build highly scalable applications using microservices, containers, and cloud platforms." },
      { title: "API & Integration Services", description: "Design and implement RESTful and GraphQL APIs for seamless system integration." },
      { title: "Legacy Modernization", description: "Refactor and migrate legacy applications to modern, maintainable architectures." },
      { title: "DevOps Enablement", description: "Implement CI/CD pipelines and automated workflows for faster, reliable delivery." },
    ],
    benefits: [
      "Faster time-to-market with agile engineering practices",
      "Reduced technical debt through proactive modernization",
      "Higher availability and performance at scale",
    ],
    deliverables: [
      "Architecture design documents and blueprints",
      "Production-ready application code with automated tests",
      "CI/CD pipeline setup and operational runbooks",
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Project-Based or Dedicated Team" },
      { label: "Best For", value: "Product Companies & GCCs" },
      { label: "Typical Timeline", value: "8-16 Weeks" },
    ],
  },
  qualityEngineering: {
    pageTitle: "Quality Engineering",
    heading: "Quality Engineering Services",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "We embed quality at every stage of the software delivery lifecycle through automated testing, performance validation, and continuous monitoring.",
      "Our quality engineering teams ensure your software meets the highest standards for reliability, security, and user experience.",
    ],
    focusAreas: [
      { title: "Test Automation", description: "Build comprehensive automated test suites covering unit, integration, and end-to-end scenarios." },
      { title: "Performance Testing", description: "Validate system performance under load with structured benchmarking and profiling." },
      { title: "Security Testing", description: "Identify vulnerabilities through SAST, DAST, and penetration testing methodologies." },
      { title: "QA Strategy & Governance", description: "Define quality frameworks, metrics, and governance processes to sustain delivery excellence." },
    ],
    benefits: [
      "Lower defect escape rates in production",
      "Faster feedback loops through shift-left testing",
      "Compliance-ready quality documentation",
    ],
    deliverables: [
      "Automated test suite and CI/CD integration",
      "Performance benchmark reports",
      "Quality metrics dashboard and defect trend analysis",
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Embedded QA or Managed Testing" },
      { label: "Best For", value: "Agile & DevOps Teams" },
      { label: "Typical Timeline", value: "4-12 Weeks" },
    ],
  },
  businessArchitecture: {
    pageTitle: "Technical & Business Architecture",
    heading: "Technical & Business Architecture",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "We provide end-to-end architecture advisory covering enterprise systems, technical standards, and business process alignment.",
      "Our architects bridge the gap between business strategy and technology execution to deliver coherent, future-proof systems.",
    ],
    focusAreas: [
      { title: "Enterprise Architecture", description: "Define technology landscapes, integration patterns, and governance frameworks for large enterprises." },
      { title: "Solution Architecture", description: "Design scalable, secure, and cost-effective solutions aligned to business requirements." },
      { title: "Business Process Modeling", description: "Map and optimize business processes to eliminate inefficiencies and enable digital transformation." },
      { title: "Technology Roadmapping", description: "Create multi-year technology roadmaps aligned with business goals and market trends." },
    ],
    benefits: [
      "Reduced system complexity through architectural discipline",
      "Better alignment between IT investments and business outcomes",
      "Faster decision-making with clear architecture blueprints",
    ],
    deliverables: [
      "Enterprise and solution architecture diagrams",
      "Business process models and gap analysis",
      "Technology roadmap with prioritized initiatives",
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Advisory or Embedded Architect" },
      { label: "Best For", value: "Digital Transformation Programs" },
      { label: "Typical Timeline", value: "6-12 Weeks" },
    ],
  },
  productDevelopment: {
    pageTitle: "Product Development",
    heading: "End-to-End Product Development",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "We partner with businesses to design, develop, and launch digital products that users love and businesses depend on.",
      "From ideation to production, our product teams bring together design thinking, agile engineering, and data-informed iteration.",
    ],
    focusAreas: [
      { title: "Product Discovery & UX Design", description: "Validate product ideas through user research, prototyping, and iterative design sprints." },
      { title: "MVP Development", description: "Build lean, functional minimum viable products to validate assumptions and gather real-world feedback." },
      { title: "Product Scaling", description: "Grow your product with feature expansion, performance optimization, and platform scalability." },
      { title: "Product Analytics", description: "Instrument and analyze product usage to guide data-driven feature prioritization." },
    ],
    benefits: [
      "Faster time from idea to validated product",
      "Higher user adoption through research-led design",
      "Sustainable product velocity through mature engineering practices",
    ],
    deliverables: [
      "Product discovery report and UX prototype",
      "Production-deployed MVP with analytics",
      "Product backlog and roadmap for scale",
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Full-Cycle Product Team" },
      { label: "Best For", value: "Startups and Innovation Centers" },
      { label: "Typical Timeline", value: "12-24 Weeks" },
    ],
  },
  legalServices: {
    pageTitle: "Legal Services",
    heading: "GCC Legal Services",
    bannerImage: "/img/service/image1.jpg",
    overview: [
      "We provide specialized legal advisory services to support every stage of your GCC setup and operations in India.",
      "From entity registration and compliance to employment law and IP protection, our legal partners ensure your GCC operates with confidence.",
    ],
    focusAreas: [
      { title: "Entity Setup & Registration", description: "Navigate the regulatory landscape for company registration, tax structure, and statutory compliance." },
      { title: "Employment Law & HR Compliance", description: "Ensure your employment contracts, HR policies, and labor practices meet India's regulatory standards." },
      { title: "Intellectual Property Protection", description: "Secure your IP through trademarks, patents, and robust contractual frameworks." },
      { title: "Ongoing Regulatory Compliance", description: "Stay ahead of regulatory changes with proactive monitoring and compliance support." },
    ],
    benefits: [
      "Confident market entry with full regulatory compliance",
      "Reduced legal risk through expert advisory",
      "Protected intellectual property and business interests",
    ],
    deliverables: [
      "Entity setup documentation and registration",
      "Employment contract templates and HR policy framework",
      "IP registration filings and compliance calendar",
    ],
    quickFacts: [
      { label: "Engagement Model", value: "Advisory + Implementation" },
      { label: "Best For", value: "GCC Setup and Expansion" },
      { label: "Typical Timeline", value: "4-8 Weeks" },
    ],
  },
};
