import { Link } from "react-router-dom";
import BlogSubscription from "./blogSubscription";

const categories = [
    { name: 'GCC Strategy', count: 8 },
    { name: 'Talent Solutions', count: 11 },
    { name: 'Managed Services', count: 12, active: true },
    { name: 'Workforce Analytics', count: 18 },
    { name: 'Compliance', count: 7 },
];

const recentPosts = [
    {
        imgSrc: '/img/blogs/pp3.jpg',
        date: '18 Dec, 2025',
        title: 'How GCC Advisory Improves Launch Readiness',
    },
    {
        imgSrc: '/img/blogs/pp4.jpg',
        date: '18 Dec, 2025',
        title: 'AI-Led Hiring Models for Faster Team Buildout',
    },
    {
        imgSrc: '/img/blogs/pp5.jpg',
        date: '18 Dec, 2025',
        title: 'Managed Services for Scalable GCC Operations',
    },
];

const tags = [
    'GCC',
    'Talent',
    'Operations',
    'Expansion',
    'Compliance',
    'Advisory',
    'Workforce',
];

const BlogSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Search</h3>
                </div>
                <div className="search-widget">
                    <form action="#">
                        <input type="text" placeholder="Search here" />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className={category.active ? 'active' : ''}>
                                <Link to="/news-details">{category.name}</Link>
                                <span>({category.count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                    {recentPosts.map((post, index) => (
                        <div className="recent-items" key={index}>
                            <div className="recent-thumb">
                                <img src={post.imgSrc} alt="img" />
                            </div>
                            <div className="recent-content">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-calendar-days" />
                                        {post.date}
                                    </li>
                                </ul>
                                <h6>
                                    <Link to="/news-details">{post.title}</Link>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                    <div className="tagcloud">
                        {tags.map((tag, index) => (
                            <Link to="/news-details" key={index}>
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <BlogSubscription/>
        </div>
    );
};

export default BlogSidebar;
