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
        image: "/img/project/model-captive.jpg",
        category: "GCC Models",
        title: "Captive Model",
        link: "/project-details"
    },
    {
        id: 2,
        image: "/img/project/model-shared-services.jpg",
        category: "GCC Models",
        title: "Shared Services Model",
        link: "/project-details"
    },
    {
        id: 3,
        image: "/img/project/model-bot.jpg",
        category: "GCC Models",
        title: "Build Operate Transfer Model",
        link: "/project-details"
    },
    {
        id: 4,
        image: "/img/project/managed-teams.jpg",
        category: "Solutions",
        title: "Managed Teams",
        link: "/project-details"
    },
    {
        id: 5,
        image: "/img/project/workspace-solution.jpg",
        category: "Solutions",
        title: "Workspace Solutions",
        link: "/project-details"
    },
];
