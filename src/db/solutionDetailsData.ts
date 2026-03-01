export type SolutionDetailKey =
  | "consultingAdvisory"
  | "smartTalentAcquisition"
  | "aiLedTalentSupply"
  | "talentManagement"
  | "managedServices"
  | "workspaceSolutions";

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
  }
};
