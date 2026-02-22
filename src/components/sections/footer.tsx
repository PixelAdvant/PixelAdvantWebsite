import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 24/7",
        value: "+91 8904957029",
        link: "tel:+918904957029",
    },
    {
        icon: <SuEmail />,
        label: "Email Us",
        value: "info@pixeladvant.com",
        link: "mailto:info@pixeladvant.com",
    },
    {
        icon: <SuLocation />,
        label: "Headquarters",
        value: "India & United States",
    },
];

const quickLinks = [
    { text: "About Us", link: "/about" },
    { text: "Solutions", link: "/service" },
    { text: "Models", link: "/project" },
    { text: "Insights", link: "/blog" },
    { text: "Contact Us", link: "/contact" },
];

const services = [
    { text: "Consulting & Advisory", link: "/service-details" },
    { text: "Smart Talent Acquisition", link: "/service-details" },
    { text: "Talent Management", link: "/service-details" },
    { text: "Managed Services", link: "/service-details" },
    { text: "Workspace Solutions", link: "/service-details" },
];

const recentPosts = [
    {
        image: "/img/blogs/pp1.jpg",
        date: "20 Feb, 2025",
        title: "Global Capability Centers - Future of Work",
        link: "/news-details",
    },
    {
        image: "/img/blogs/pp2.jpg",
        date: "15 Dec, 2025",
        title: "AI-Led Talent Acquisition Excellence",
        link: "/news-details",
    },
];

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/img/logo/white-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        PixelAdvant is your trusted partner in Global Capability Centers. With 400+ years of collective expertise, we provide innovative solutions for consulting, talent acquisition, and managed services.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link to="https://www.facebook.com/pixeladvant" target="_blank">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                        <Link to="https://www.linkedin.com/company/pixel-advant/" target="_blank">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link to="https://www.instagram.com/pixeladvant/" target="_blank">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Services</h3>
                                </div>
                                <ul className="list-area">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".7"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="recent-post-area">
                                    {recentPosts.map((post, index) => (
                                        <div
                                            key={index}
                                            className={`recent-post-items ${index === recentPosts.length - 1 ? "mb-0" : ""
                                                }`}
                                        >
                                            <div className="thumb">
                                                <img src={post.image} alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        {post.date}
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link to={post.link}>{post.title}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2025 by <Link to="index">PixelAdvant</Link> {" "}
                             • A brand of <Link to="https://pixeladvant.com" target="_blank">Maticube Innovation LLP</Link>
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="contact">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link to="contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;