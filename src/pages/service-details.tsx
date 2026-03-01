import PageTitle from "@/components/sections/pageTitle"
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import { SolutionDetailKey, solutionDetailsData } from "@/db/solutionDetailsData"

const faq = [
    {
        question: "How do you select the right GCC location?",
        answer: "We evaluate talent availability, cost structures, infrastructure, compliance requirements, and scalability before recommending the best-fit location strategy.",
        delay: ".3"
    },
    {
        question: "How long does GCC setup usually take?",
        answer: "Timelines vary by model and scope, but most programs begin with a 4-12 week design and transition phase followed by structured rollout milestones.",
        delay: ".5"
    },
    {
        question: "What is included in your solutions?",
        answer: "Our services include strategy, talent acquisition, managed operations, compliance support, workspace planning, governance, and performance optimization.",
        delay: ".7",
        expanded: true
    },
    {
        question: "Can services be customized by business function?",
        answer: "Yes. We tailor each engagement by function, hiring demand, maturity stage, and growth goals to ensure practical and measurable outcomes.",
        delay: ".7"
    }
]
type ServiceDetailsProps = {
    title?: string
    currentPage?: string
    serviceTitle?: string
    solutionKey?: SolutionDetailKey
}

const ServiceDetails = ({
    title = "Services Details",
    currentPage = "Services Details",
    serviceTitle = "GCC Solutions Overview",
    solutionKey,
}: ServiceDetailsProps) => {
    const solutionData = solutionKey ? solutionDetailsData[solutionKey] : undefined

    const resolvedTitle = solutionData?.pageTitle || title
    const resolvedCurrentPage = solutionData?.pageTitle || currentPage
    const resolvedServiceTitle = solutionData?.heading || serviceTitle
    const resolvedBannerImage = solutionData?.bannerImage || "/img/service/image1.jpg"
    const resolvedOverview = solutionData?.overview || [
        "PixelAdvant provides end-to-end GCC services focused on faster setup, stronger talent outcomes, and sustainable operational scale.",
        "Our approach combines strategic planning, AI-led hiring workflows, governance frameworks, and continuous performance optimization.",
    ]
    const resolvedBenefits = solutionData?.benefits || [
        "Clear GCC roadmap with phased milestones",
        "Faster hiring outcomes through structured workflows",
        "Operational visibility through KPI-based governance",
    ]
    const resolvedFocusAreas = solutionData?.focusAreas || []
    const resolvedPrimaryList = resolvedFocusAreas.length
        ? resolvedFocusAreas.map((area) => `${area.title}: ${area.description}`)
        : resolvedBenefits
    const resolvedDeliverables = solutionData?.deliverables || [
        "Service delivery roadmap and execution scope",
        "Weekly operating cadence and governance",
        "Performance tracking with measurable outcomes",
    ]
    const resolvedQuickFacts = solutionData?.quickFacts || [
        { label: "Engagement Model", value: "Consulting" },
        { label: "Best For", value: "Business Growth" },
        { label: "Typical Timeline", value: "6-10 Weeks" },
    ]

    return (
        <>
            <PageTitle title={resolvedTitle} currentPage={resolvedCurrentPage} backgroundImage={resolvedBannerImage} />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1">
                                <ServiceSidebar />
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image">
                                        <img src={resolvedBannerImage} alt={resolvedServiceTitle} />
                                    </div>
                                    <div className="details-content">
                                        <h3>{resolvedServiceTitle}</h3>
                                        {
                                            resolvedOverview.map((paragraph, index) => (
                                                <p key={index} className="mt-3">
                                                    {paragraph}
                                                </p>
                                            ))
                                        }
                                        <div className="details-video-items">
                                            <ServiceDetailsVideoPopup/>
                                            <div className="content">
                                                <h4>{resolvedFocusAreas.length ? "Solution Focus Areas" : "Benefits With Our Service"}</h4>
                                                <ul className="list">
                                                    {
                                                        resolvedPrimaryList.map((benefit, index) => (
                                                            <li key={index}>
                                                                <i className="fa-regular fa-circle-check" />
                                                                {benefit}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <h3>Key Deliverables</h3>
                                        <ul className="list mt-3">
                                            {
                                                resolvedDeliverables.map((deliverable, index) => (
                                                    <li key={index}>
                                                        <i className="fa-regular fa-circle-check" />
                                                        {deliverable}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="image-area">
                                            <div className="row g-4">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <img src={resolvedBannerImage} alt={`${resolvedServiceTitle} banner`} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <img src="/img/service/image3.avif" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Quick Facts</h3>
                                        <div className="row g-4 mt-2">
                                            {
                                                resolvedQuickFacts.map((fact, index) => (
                                                    <div key={index} className="col-lg-4 col-md-6">
                                                        <div className="service-box-items box-shadow mt-0 h-100">
                                                            <div className="content mt-0">
                                                                <h5>{fact.label}</h5>
                                                                <p>{fact.value}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="faq-content style-3">
                                        <div className="faq-accordion">
                                            <div className="accordion" id="accordion">
                                                {faq.map((item, index) => (
                                                    <div className={`accordion-item mb-3 wow slideUp`} data-delay={item.delay} key={index}>
                                                        <h5 className="accordion-header">
                                                            <button className={`accordion-button ${item.expanded ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded={item.expanded ? "true" : "false"} aria-controls={`faq${index}`}>
                                                                {item.question}
                                                            </button>
                                                        </h5>
                                                        <div id={`faq${index}`} className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                {item.answer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default ServiceDetails
