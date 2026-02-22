import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const AboutTwo = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("/img/service/gcc-service-bg.jpg")' }}>
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <div className="counter-shape float-bob-y">
                                    <div className="icon">
                                        <img src="/img/about/icon-1.svg" alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h3><span className="count">400</span>Years+</h3>
                                        <p>Collective Expertise</p>
                                    </div>
                                </div>
                                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/gcc-operations.png")' }}>
                                    <div className="about-image-2 wow slideUp" data-delay=".5">
                                        <img src="/img/about/image1.avif" alt="about-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                                    <SectionTitle.Title>An Integral, Trusted<span> Partner in GCC</span></SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Our leaders have a collective experience of 400 years in cross-functional domain areas. We provide comprehensive solutions for Global Capability Centers at every critical touchpoint.
                                </p>
                                <div className="about-icon-items">
                                    <div className="icon-items wow slideUp" data-delay=".7">
                                        <div className="icon">
                                            <img src="/img/about/icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>Expert Solutions</h4>
                                            <p>
                                                Flexible and scalable solutions customized to your needs
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <img src="/img/about/icon-5.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>End-to-End Support</h4>
                                            <p>
                                                Complete support from legal compliance to operations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow slideUp" data-delay=".5">
                                        <Link to="/about" className="theme-btn">
                                            Learn More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                    <div className="author-image wow slideUp" data-delay=".7">
                                        <img src="/img/about/author.png" alt="author-img" />
                                        <div className="content">
                                            <h6>Leadership Team</h6>
                                            <p>400+ Years Expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutTwo