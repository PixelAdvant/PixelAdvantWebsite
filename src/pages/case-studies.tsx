import PageTitle from "@/components/sections/pageTitle"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const CaseStudies = () => {
  return (
    <>
      <SEO {...pageSEOConfig.caseStudies} />
      <PageTitle title="Case Studies" currentPage="Case Studies" />
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="wow slideUp">Success Stories</span>
            <h2 className="wow slideUp" data-delay=".3">
              Client Case Studies
            </h2>
            <p className="wow slideUp" data-delay=".5">
              Real-world examples of how we have helped organizations build, scale, and optimize their GCC operations.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow slideUp" data-delay=".3">
              <div style={{ padding: "60px 40px", background: "#f8f7ff", borderRadius: "16px", border: "1px solid #e9e6ff" }}>
                <i className="fa-solid fa-chart-bar" style={{ fontSize: "64px", color: "#5b47e0", marginBottom: "20px", display: "block" }} />
                <h4 style={{ color: "#0f172a", marginBottom: "12px" }}>Case Studies Coming Soon</h4>
                <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto" }}>
                  We are documenting detailed case studies from our client engagements. These will be published here shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
