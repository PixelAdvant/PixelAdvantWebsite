import { Link } from "react-router-dom"

const TopHeaderOne = ({ wrapperClass, className }: { wrapperClass?: string, className?: string }) => {
    return (
        <div className={`header-top-section fix ${className}`}>
            <div className="container-fluid">
                <div className={`header-top-wrapper ${wrapperClass}`}>
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to="mailto:info@pixeladvant.com" className="link">info@pixeladvant.com</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to="tel:+918904957029">+91 8904957029</Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        <div className="social-icon d-flex align-items-center">
                            <span>Follow Us:</span>
                            <Link to="https://www.facebook.com/pixeladvant" target="_blank"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#" target="_blank"><i className="fa-brands fa-x-twitter"/></Link>
                            <Link to="https://www.linkedin.com/company/pixel-advant/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                            <Link to="https://www.instagram.com/pixeladvant/" target="_blank"><i className="fa-brands fa-instagram" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderOne