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
        role: "Scrum Master",
        name: "Cameron Williamson",
        description: "Integer at sapien nec sapien sollicitudin ultrices in ut nisl.",
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
        role: "Engineering",
        name: "Leslie Alexander",
        description: "Integer at sapien nec sapien sollicitudin ultrices in ut nisl.",
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
        role: "UI/UX Designer",
        name: "Ronald Richards",
        description: "Integer at sapien nec sapien sollicitudin ultrices in ut nisl.",
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
        role: "Web Designer",
        name: "Darrell Steward",
        description: "Integer at sapien nec sapien sollicitudin ultrices in ut nisl.",
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
