import { Link, useLocation } from "react-router-dom";

const services = [
    { name: 'Consulting & Advisory', link: '/solutions/consulting-advisory' },
    { name: 'Smart Talent Acquisition', link: '/solutions/smart-talent-acquisition' },
    { name: 'AI-Led Talent Supply', link: '/solutions/ai-led-talent-supply' },
    { name: 'Talent Management', link: '/solutions/talent-management' },
    { name: 'Managed Services', link: '/solutions/managed-services' },
    { name: 'Workspace Solutions', link: '/solutions/workspace-solutions' },
];

const openingHours = [
    { day: 'Mon - Sat', time: '10.00 AM - 4.00 PM' },
    { day: 'Sun', time: '09.00 AM - 4.00 PM' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Emergency', time: '24 hours' },
];

const ServiceSidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>All Services</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index} className={pathname === service.link ? 'active' : ''}>
                                <Link to={service.link}>{service.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Opening Hours</h3>
                </div>
                <div className="opening-category">
                    <ul>
                        {openingHours.map((hour, index) => (
                            <li key={index}>
                                <i className="fa-regular fa-clock" />
                                {hour.day}: {hour.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("/img/service/post.jpg")' }}>
                <div className="contact-text">
                    <div className="icon">
                        <i className="fa-solid fa-phone" />
                    </div>
                    <h4>Need Help? Call Here</h4>
                    <h5>
                        <Link to="tel:+2085550112">+91 8904957029</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
