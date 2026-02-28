export interface BlogPostDataType {
    id: number;
    date: {
        day: string;
        month: string;
        year:string
    };
    image: string;
    author: string;
    category: string;
    title: string;
    link: string;
    delay: string;
    description: string;
}


export const blogPostsThreeData:BlogPostDataType[] = [
    {
        id:1,
        date: { day: '22', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'GCC Setup',
        title: 'Establishing Your Global Capability Centre in India',
        link: '/news-details',
        description:'Complete guide to setting up a high-performing GCC in India with PixelAdvant expertise',
        delay:'.3'
    },
    {
        id:2,
        date: { day: '18', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'Recruitment',
        title: 'Top Talent Acquisition Strategies for GCC India',
        link: '/news-details',
        description:'How to build a world-class team through smart global recruitment practices',
        delay:'.3'
    },
    {
        id:3,
        date: { day: '15', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'Best Practices',
        title: 'GCC Success Stories: Lessons from Industry Leaders',
        link: '/news-details',
        description:'Real-world case studies showing how companies scale with GCC operations in India',
        delay:'.3'
    },
    {
        id:4,
        date: { day: '12', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'AI & Recruitment',
        title: 'AI-Powered Recruitment: Transforming Global Hiring',
        link: '/news-details',
        description:'Discover how PixelAdvant uses AI to streamline recruitment for multinational teams',
        delay:'.3'
    },
    {
        id:5,
        date: { day: '10', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'Talent Management',
        title: 'Retaining Top Talent: Building High-Performance Teams in India',
        link: '/news-details',
        description:'Strategic approaches to keep your best talent and reduce attrition in competitive markets',
        delay:'.3'
    },
    {
        id:6,
        date: { day: '08', month: 'Feb', year:'2025' },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        author: 'PixelAdvant',
        category: 'Managed Services',
        title: 'Managed Recruitment Services: Outsourcing for Scale',
        link: '/news-details',
        description:'Let PixelAdvant handle your complete recruitment and GCC management needs',
        delay:'.3'
    },
];
