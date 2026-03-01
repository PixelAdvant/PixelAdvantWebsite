import PageTitle from "@/components/sections/pageTitle"

type ProjectDetailsProps = {
    title?: string
    currentPage?: string
    modelTitle?: string
    category?: string
}

const ProjectDetails = ({
    title = "Project Details",
    currentPage = "Project Details",
    modelTitle = "GCC Model Information",
    category = "GCC Delivery Model",
}: ProjectDetailsProps) => {
    return (
        <>
            <PageTitle title={title} currentPage={currentPage} />
            <section className="Project-details-section fix section-padding">
                <div className="container">
                    <div className="project-details-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-details-items">
                                    <div className="details-image">
                                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80" alt="img" />
                                    </div>
                                    <div className="row g-4 justify-content-between">
                                        <div className="col-lg-7">
                                            <div className="details-content pt-5">
                                                <h3>{modelTitle}</h3>
                                                <p>
                                                    PixelAdvant helps organizations choose and operationalize the right GCC model based on growth goals, talent strategy, risk profile, and speed-to-value expectations. Each model is designed with clear governance, measurable outcomes, and scalable execution standards.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="project-catagory">
                                                <h3>Model Info:</h3>
                                                <ul>
                                                    <li>
                                                        Client:
                                                        <span>PixelAdvant Enterprise Partner</span>
                                                    </li>
                                                    <li>
                                                        Category:
                                                        <span>{category}</span>
                                                    </li>
                                                    <li>
                                                        Location:
                                                        <span>India & Global</span>
                                                    </li>
                                                    <li>
                                                        Share:
                                                        <span>
                                                            <i className="fa-brands fa-facebook-f me-3" />
                                                            <i className="fa-brands fa-instagram me-3" />
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-content pt-3">
                                        <h3>Scope of Engagement</h3>
                                        <p>
                                            The engagement scope includes operating model design, leadership planning, hiring engine setup, compliance alignment, process governance, and performance measurement. The objective is to establish a resilient GCC foundation that can scale across business functions.
                                        </p>
                                    </div>
                                    <div className="row g-4 pt-5">
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Operating model blueprint
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Governance and SLA framework
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Talent acquisition strategy
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Compliance readiness plan
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    KPI dashboard architecture
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Continuous optimization cycle
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details-content pt-5">
                                        <h3>Expected Outcomes</h3>
                                        <p>
                                            Organizations typically see faster setup timelines, stronger hiring quality, improved operating visibility, and better alignment between global governance and local execution. This creates a sustainable GCC capability with measurable business impact.
                                        </p>
                                    </div>
                                    <div className="row g-4 pt-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumb">
                                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumb">
                                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="preview-area">
                                    <div className="preview-item">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" alt="img" />
                                        <div className="content">
                                            <h3>Preview</h3>
                                            <p>Model Overview</p>
                                        </div>
                                    </div>
                                    <div className="preview-item">
                                        <div className="content text-right">
                                            <h3>Next</h3>
                                            <p>Implementation Roadmap</p>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=500&q=80" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProjectDetails
