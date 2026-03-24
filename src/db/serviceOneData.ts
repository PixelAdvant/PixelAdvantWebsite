import type { ServiceIconKey } from "@/lib/serviceIcons";

export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon?: string;
    iconKey?: ServiceIconKey;
    link: string;
    delay: string;
    active?:boolean;
    image?:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Consulting & Advisory",
        description: "Strategic guidance to navigate the complexities of GCC operations, from strategy development to execution and expansion",
        iconKey: "consulting",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 2,
        title: "Smart Talent Acquisition",
        description: "AI-driven Smart Talent Acquisition platform that transforms recruitment strategies with data-driven insights",
        iconKey: "talent",
        link: "/service-details",
        delay:'.5',
        active:true
    },
    {
        id: 3,
        title: "AI Led Talent Supply Process",
        description: "Our advanced AI solutions ensure efficient and targeted talent acquisition with real-time AI-based reporting",
        iconKey: "automation",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 4,
        title: "Talent Management Solutions",
        description: "Comprehensive talent management solutions designed to optimize workforce performance and engagement",
        iconKey: "management",
        link: "/service-details",
        delay:'.9'
    },
    {
        id: 5,
        title: "Managed Services",
        description: "End-to-end managed services to support your GCC operations with expert guidance and support",
        iconKey: "operations",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 6,
        title: "Workspace Solutions",
        description: "Comprehensive workspace solutions designed to create optimal working environments for your GCC",
        iconKey: "workspace",
        link: "/service-details",
        delay:'.5'
    },
    {
        id: 7,
        title: "Benchmarking Insights",
        description: "Strategic benchmarking services to compare your GCC performance against industry standards",
        iconKey: "benchmark",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 8,
        title: "Market Research & Analysis",
        description: "Data-driven market research and strategic analysis to drive informed decision-making for your business",
        iconKey: "research",
        link: "/service-details",
        delay:'.9'
    }
];
