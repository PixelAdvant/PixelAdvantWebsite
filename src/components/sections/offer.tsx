import { ServiceIcon } from "@/lib/serviceIcons"
import type { ServiceIconKey } from "@/lib/serviceIcons"
import SectionTitle from "../ui/sectionTitle";

const offerItems = [
    { id: 1, iconKey: 'strategy' as ServiceIconKey, title: 'GCC Advisory', isActive: false, delay: '.2' },
    { id: 2, iconKey: 'talent' as ServiceIconKey, title: 'Talent Solutions', isActive: false, delay: '.4' },
    { id: 3, iconKey: 'automation' as ServiceIconKey, title: 'AI Recruitment', isActive: true, delay: '.6', },
    { id: 4, iconKey: 'operations' as ServiceIconKey, title: 'Managed Services', isActive: false, delay: '.8' },
    { id: 5, iconKey: 'workspace' as ServiceIconKey, title: 'Workspace Strategy', isActive: false, delay: '.9' },
    { id: 6, iconKey: 'security' as ServiceIconKey, title: 'Compliance Ops', isActive: false, delay: '.9' },
];

const Offer = () => {
    return (
        <section className="offer-section fix section-bg-2 section-padding">
            <div className="line-shape">
                <img src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <img src="/img/team/mask-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Our Capabilities</SectionTitle.SubTitle>
                    <SectionTitle.Title className="text-white">Comprehensive GCC <br /> Services for Scalable Growth</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {offerItems.map((item) => (
                        <div
                            key={item.id}
                            className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 wow slideUp `}
                            data-delay={item.delay}
                        >
                            <div className={`offer-items ${item.isActive ? 'active' : ''}`}>
                                <div className="shape-top">
                                    <img src="/img/shape/offer-top.png" alt="shape-img" />
                                </div>
                                <div className="shape-bottom">
                                    <img src="/img/shape/offer-bottom.png" alt="shape-img" />
                                </div>
                                <div className="icon">
                                    <ServiceIcon iconKey={item.iconKey} />
                                </div>
                                <div className="content">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Offer
