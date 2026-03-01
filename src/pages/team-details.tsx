import PageTitle from "@/components/sections/pageTitle"
import { Link } from "react-router-dom"

const TeamDetails = () => {
    return (
        <>
            <PageTitle currentPage="Team Details" title="Team Details" />
            <section className="team-details-section fix section-padding">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-5">
                                <div className="team-details-image">
                                    <img src="/img/team/details.jpg" alt="team-img" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <div className="details-info">
                                        <h3>Leadership Team Member</h3>
                                        <span>GCC Strategy & Operations</span>
                                    </div>
                                    <p className="mt-3">
                                        Our leadership team combines deep experience across GCC setup, talent strategy, and operational governance. We partner with clients to build scalable capabilities, improve hiring outcomes, and accelerate execution maturity.
                                    </p>
                                    <div className="progress-area mt-4">
                                        <div className="progress-wrap">
                                            <div className="pro-items">
                                                <div className="pro-head">
                                                    <h6 className="title">
                                                        Web Development
                                                    </h6>
                                                    <span className="point">
                                                        90%
                                                    </span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-value" />
                                                </div>
                                            </div>
                                            <div className="pro-items">
                                                <div className="pro-head">
                                                    <h6 className="title">
                                                        Technology Consultant
                                                    </h6>
                                                    <span className="point">
                                                        95%
                                                    </span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-value style-two" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-icon">
                                        <span>Social Media:</span>
                                        <Link to="#"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link to="#" className="active"><i className="fa-brands fa-twitter" /></Link>
                                        <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                        <Link to="#"><i className="fa-brands fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-single-history pt-5">
                            <div className="title">
                                <h3>Professional Background</h3>
                            </div>
                            <h5 className="pt-5">GCC Advisory & Transformation <span>2012 - 2016</span></h5>
                            <p className="mt-3">
                                Led multiple GCC launch programs across talent, compliance, and process governance. Built structured operating models that improved hiring velocity and quality while aligning global and local stakeholders.
                            </p>
                            <h5 className="pt-5">Global Delivery Leadership <span>2017 - Present</span></h5>
                            <p className="mt-3">
                                Currently driving end-to-end GCC programs focused on scalable talent supply, managed services, and measurable business impact. The team emphasizes data-led decisions, execution discipline, and long-term client value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TeamDetails
