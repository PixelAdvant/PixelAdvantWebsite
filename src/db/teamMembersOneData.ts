export interface TeamMemberDataType {
    id: number;
    role: string;
    name: string;
    description: string;
    image: string;
    socialLinks: {
        icon: string;
        link: string;
    }[];
    delay: string;
}

export const teamMembersOneData: TeamMemberDataType[] = [
    {
        id: 1,
        role: "GCC Strategy Lead",
        name: "Aarav Mehta",
        description: "Leads enterprise GCC roadmap design and operating model transformation initiatives.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".3"
    },
    {
        id: 2,
        role: "Talent Solutions Director",
        name: "Nisha Kapoor",
        description: "Builds AI-led recruitment frameworks for high-growth GCC teams across functions.",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".5"
    },
    {
        id: 3,
        role: "Managed Services Head",
        name: "Rohit Sharma",
        description: "Owns process governance, SLA performance, and delivery optimization programs.",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".7"
    },
    {
        id: 4,
        role: "Workforce Analytics Lead",
        name: "Priya Nair",
        description: "Drives talent intelligence and KPI-led decision support for GCC scaling.",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".9"
    }
];
