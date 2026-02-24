export interface ProjectDataType {
    id: number;
    image: string;
    category: string;
    title: string;
    link: string;
    delay?: string;
}

export const projectsOneData: ProjectDataType[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
        category: "GCC Models",
        title: "Captive Model",
        link: "/project-details"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        category: "GCC Models",
        title: "Shared Services Model",
        link: "/project-details"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
        category: "GCC Models",
        title: "Build Operate Transfer Model",
        link: "/project-details"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
        category: "Solutions",
        title: "Managed Teams",
        link: "/project-details"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
        category: "Solutions",
        title: "Workspace Solutions",
        link: "/project-details"
    },
];
