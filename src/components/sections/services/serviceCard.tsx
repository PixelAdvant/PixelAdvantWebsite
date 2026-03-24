import { ServiceDataType } from "@/db/serviceOneData";
import { ServiceIcon } from "@/lib/serviceIcons";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, className }: { service: ServiceDataType; className?: string }) => {
    return (
        <div className={`service-box-items ${className}`}>
            <div className="icon">
                {service.iconKey ? (
                    <ServiceIcon iconKey={service.iconKey} />
                ) : service.icon ? (
                    <img src={service.icon} alt={service.title || 'icon-img'} loading="lazy" decoding="async" />
                ) : null}
            </div>
            <div className="content">
                <h4>
                    <Link to={service.link}>
                        {service.title}
                    </Link>
                </h4>
                <p>
                    {service.description}
                </p>
                <Link to={service.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
