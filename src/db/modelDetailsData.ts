export type ModelDetailKey = "captiveModel" | "sharedServicesModel" | "buildOperateTransfer";

export interface ModelFact {
  label: string;
  value: string;
}

export interface ModelDetailData {
  pageTitle: string;
  heading: string;
  category: string;
  heroImage: string;
  overview: string[];
  scopePoints: string[];
  outcomes: string[];
  facts: ModelFact[];
}

export const modelDetailsData: Record<ModelDetailKey, ModelDetailData> = {
  captiveModel: {
    pageTitle: "Captive Model",
    heading: "Captive Model Overview",
    category: "Captive GCC",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    overview: [
      "The Captive Model establishes a fully owned GCC entity for long-term strategic control over talent, operations, and intellectual property.",
      "This model is suitable when organizations require strong governance, dedicated capability ownership, and deep integration with global business teams."
    ],
    scopePoints: [
      "Entity setup and regulatory readiness",
      "Leadership and core team build-out",
      "Process transition planning and governance",
      "Technology, security, and compliance controls",
      "Performance management and operating cadence",
      "Continuous maturity and scale roadmap"
    ],
    outcomes: [
      "High control across operations and quality standards",
      "Strong culture alignment with parent organization",
      "Sustainable GCC growth with long-term capability ownership"
    ],
    facts: [
      { label: "Ownership", value: "Fully Owned by Parent Organization" },
      { label: "Control Level", value: "High" },
      { label: "Best Fit", value: "Long-Term Strategic GCC" }
    ]
  },
  sharedServicesModel: {
    pageTitle: "Shared Services Model",
    heading: "Shared Services Model Overview",
    category: "Shared Services",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    overview: [
      "The Shared Services Model consolidates common business functions into a centralized GCC unit to improve standardization and operational efficiency.",
      "It is ideal for organizations looking to optimize support functions while maintaining consistent service delivery across multiple business units."
    ],
    scopePoints: [
      "Function assessment and service catalog definition",
      "Shared process design and standard operating procedures",
      "SLA and internal customer governance model",
      "Cross-functional workforce planning",
      "Automation opportunities and process optimization",
      "Service quality and performance measurement framework"
    ],
    outcomes: [
      "Reduced duplication across business functions",
      "Consistent service quality and transparent SLAs",
      "Better cost efficiency through centralized operations"
    ],
    facts: [
      { label: "Ownership", value: "Centralized Shared Capability" },
      { label: "Control Level", value: "Moderate to High" },
      { label: "Best Fit", value: "Multi-Function Support at Scale" }
    ]
  },
  buildOperateTransfer: {
    pageTitle: "Build Operate Transfer",
    heading: "Build Operate Transfer (BOT) Model Overview",
    category: "BOT Model",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    overview: [
      "The Build Operate Transfer model enables rapid GCC launch through a partner-led setup and operations phase, followed by planned transfer to the parent organization.",
      "This approach reduces early-stage execution risk while allowing eventual full ownership and control once operations are stable."
    ],
    scopePoints: [
      "Initial GCC setup through partner infrastructure",
      "Operational runbook and hiring engine activation",
      "Governance checkpoints and readiness metrics",
      "Knowledge transfer and capability handover plan",
      "Transition support for leadership and process continuity",
      "Post-transfer stabilization and optimization"
    ],
    outcomes: [
      "Faster go-live with lower setup risk",
      "Structured transition into owned operations",
      "Balanced speed, quality, and long-term control"
    ],
    facts: [
      { label: "Ownership", value: "Partner to Parent Transfer" },
      { label: "Control Level", value: "Progressive" },
      { label: "Best Fit", value: "Fast Entry with Planned Handover" }
    ]
  }
};
