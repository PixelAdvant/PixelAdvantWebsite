import PageTitle from "@/components/sections/pageTitle"
import ServiceCard from "@/components/sections/services/serviceCard"
import { serviceOneData } from "@/db/serviceOneData"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const Service = () => {
    return (
        <>
            <SEO {...pageSEOConfig.service} />
            <PageTitle title="Services" currentPage="Services" />
            <section className="service-section fix section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow slideUp">Comprehensive Solutions</span>
                        <h2 className="wow slideUp" data-delay=".3">
                            Our Solutions &<br /> Services
                        </h2>
                    </div>
                    <div className="service-wrapper mb-0">
                        <div className="row">
                            {
                                serviceOneData.map((service) => (
                                    <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-delay=".3">
                                        <ServiceCard service={service} className="box-shadow" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service