import { BlogPostDataType } from "./blogPostsThreeData";

export const blogPostsTwoData:BlogPostDataType[] = [
    {
        id: 1,
        image: '/img/news/blog-gcc-future.jpg',
        date: { day: '17', month: 'Feb', year:'2025' },
        author: 'PixelAdvant',
        category: 'GCC Strategy',
        title: 'The Future of Global Capability Centers in 2025',
        link: '/news-details',
        description:'Exploring emerging trends and strategic considerations for GCC development',
        delay: '.3',
    },
    {
        id: 2,
        image: '/img/news/blog-talent-acquisition.jpg',
        date: { day: '20', month: 'May', year:'2025' },
        author: 'PixelAdvant',
        category: 'Talent Solutions',
        title: 'Building High-Performance Teams Through Smart Talent Acquisition',
        link: '/news-details',
        description:'Key strategies for recruiting and retaining top talent in GCC environments',
        delay: '.5',
    },
    {
        id: 3,
        image: '/img/news/blog-managed-services.jpg',
        date: { day: '18', month: 'Mar', year:'2025' },
        author: 'PixelAdvant',
        category: 'Operations',
        title: 'Managed Services: Scaling Your GCC Operations',
        link: '/news-details',
        description:'Comprehensive guide to outsourced management and operational excellence',
        delay: '.7',
    },
];
