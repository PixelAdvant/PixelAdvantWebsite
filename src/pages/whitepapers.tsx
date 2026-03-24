import PageTitle from "@/components/sections/pageTitle"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const Whitepapers = () => {
  return (
    <>
      <SEO {...pageSEOConfig.whitepapers} />
      <PageTitle title="Whitepapers" currentPage="Whitepapers" />
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="wow slideUp">Knowledge Hub</span>
            <h2 className="wow slideUp" data-delay=".3">
              Whitepapers &amp; Research
            </h2>
            <p className="wow slideUp" data-delay=".5">
              In-depth research and thought leadership on GCC strategy, talent trends, and digital transformation.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow slideUp" data-delay=".3">
              <div style={{ padding: "60px 40px", background: "#f8f7ff", borderRadius: "16px", border: "1px solid #e9e6ff" }}>
                <i className="fa-solid fa-file-lines" style={{ fontSize: "64px", color: "#5b47e0", marginBottom: "20px", display: "block" }} />
                <h4 style={{ color: "#0f172a", marginBottom: "12px" }}>Whitepapers Coming Soon</h4>
                <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto" }}>
                  We are curating expert whitepapers on GCC setup, workforce strategies, and technology trends. Check back soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Whitepapers
