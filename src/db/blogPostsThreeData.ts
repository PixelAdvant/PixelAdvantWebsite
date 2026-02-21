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
        date: { day: '17', month: 'Feb', year:'2025' },
        image: '/img/news/article-gcc-consulting.jpg',
        author: 'PixelAdvant',
        category: 'Consulting',
        title: 'Strategic Consulting: Unlocking GCC Potential',
        link: '/news-details',
        description:'Expert guidance for GCC establishment and optimization',
        delay:'.3'
    },
    {
        id:2,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/article-talent-strategy.jpg',
        author: 'PixelAdvant',
        category: 'Talent Management',
        title: 'Data-Driven Talent Strategy for GCC Success',
        link: '/news-details',
        description:'Using analytics to optimize your talent acquisition and retention',
        delay:'.3'
    },
    {
        id:3,
        date: { day: '10', month: 'Feb', year:'2025' },
        image: '/img/news/article-gcc-best-practices.jpg',
        author: 'PixelAdvant',
        category: 'Best Practices',
        title: 'GCC Best Practices: Lessons from Industry Leaders',
        link: '/news-details',
        description:'Proven strategies for establishing high-performing Global Capability Centers',
        delay:'.3'
    },
    {
        id:4,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/article-talent-acquisition-strategy.jpg',
        author: 'PixelAdvant',
        category: 'Talent Acquisition',
        title: 'AI-Powered Talent Acquisition: The Future is Now',
        link: '/news-details',
        description:'Discover how artificial intelligence is revolutionizing global recruitment',
        delay:'.3'
    },
    {
        id:5,
        date: { day: '10', month: 'Feb', year:'2025' },
        image: '/img/news/article-talent-retention.jpg',
        author: 'PixelAdvant',
        category: 'Talent Management',
        title: 'Building High-Retention Teams in Competitive Markets',
        link: '/news-details',
        description:'Strategic approaches to talent retention and career development',
        delay:'.3'
    },
    {
        id:6,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/article-managed-services.jpg',
        author: 'PixelAdvant',
        category: 'Managed Services',
        title: 'Managed Services: Outsourcing Excellence',
        link: '/news-details',
        description:'How managed services accelerate business transformation and growth',
        delay:'.3'
    },
];