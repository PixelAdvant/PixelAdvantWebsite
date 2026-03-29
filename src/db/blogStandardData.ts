import { BlogPostDataType } from "./blogPostsThreeData";

export const blogStandardData:BlogPostDataType[] = [
    {
        id:1,
        image: '/img/news/article-gcc-trends.jpg',
        date: { day: '17', month: 'Feb', year:'2025' },
        author: 'PixelAdvant',
        category: 'Industry Trends',
        title: 'Top GCC Trends Reshaping Global Talent',
        description:
            'Discover the emerging trends in Global Capability Centers and how they\'re transforming the talent acquisition landscape. From AI-driven hiring to hybrid work models, explore what\'s next.',
        link: '/blog-details',
        delay:'0.2s'
    },
    {
        id:2,
        image: '/img/news/article-talent-market.jpg',
        date: { day: '19', month: 'Feb', year:'2025' },
        author: 'PixelAdvant',
        category: 'Market Insights',
        title: 'Understanding the Global Talent Market',
        description:
            'Gain deep insights into global talent markets and employment trends. Learn how macro-economic factors, technology adoption, and skill trends are shaping recruitment strategies.',
        link: '/blog-details',
        delay:'0.2s'
    },
    {
        id:3,
        image: '/img/news/article-recruitment-ai.jpg',
        date: { day: '28', month: 'Feb', year:'2025' },
        author: 'PixelAdvant',
        category: 'AI & Technology',
        title: 'AI-Powered Recruitment: Finding Top Talent',
        description:
            'Explore how artificial intelligence is revolutionizing recruitment by identifying top talent faster and more accurately. Discover tools and techniques that leading organizations are using.',
        link: '/blog-details',
        delay:'0.2s'
    },
];
