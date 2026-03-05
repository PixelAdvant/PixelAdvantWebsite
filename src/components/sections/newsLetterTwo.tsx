import { Link } from "react-router-dom"

const NewsLetterTwo = () => {
    return (
        <div className="cta-banner-2 section-padding">
            <div className="container">
                <div className="cta-wrapper-2">
                    <div className="author-icon">
                        <div className="icon">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div className="content">
                            <span>Call Us Now</span>
                            <h4>
                                <Link to="tel:+918904957029">+91 8904957029</Link>
                            </h4>
                        </div>
                    </div>
                    <h3>
                        GCC solutions that<br /> drive business outcomes
                    </h3>
                    <Link to="/contact" className="theme-btn bg-white">
                        Get a Consultation
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterTwo
