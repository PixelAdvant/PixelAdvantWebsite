import PageTitle from "@/components/sections/pageTitle"
import { Link } from "react-router-dom"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const resourceItems = [
  {
    icon: "fa-newspaper",
    title: "Blogs",
    description: "Insights, trends, and expert perspectives on GCC strategy and talent.",
    link: "/blog",
    linkLabel: "Read Blogs"
  },
  {
    icon: "fa-file-lines",
    title: "Whitepapers",
    description: "In-depth research papers on workforce strategy, GCC models, and technology.",
    link: "/resources/whitepapers",
    linkLabel: "View Whitepapers"
  },
  {
    icon: "fa-chart-bar",
    title: "Case Studies",
    description: "Real-world stories of how PixelAdvant helped businesses build successful GCCs.",
    link: "/resources/case-studies",
    linkLabel: "Explore Case Studies"
  },
  {
    icon: "fa-file-arrow-down",
    title: "Brochure",
    description: "Download our company brochure to learn about our solutions and team.",
    link: "/resources/brochure",
    linkLabel: "Get Brochure"
  }
]

const Resources = () => {
  return (
    <>
      <SEO {...pageSEOConfig.resources} />
      <PageTitle title="Resources" currentPage="Resources" />
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="wow slideUp">Knowledge Centre</span>
            <h2 className="wow slideUp" data-delay=".3">
              Resources &amp; Insights
            </h2>
            <p className="wow slideUp" data-delay=".5">
              Explore our library of thought leadership, research, and practical guides.
            </p>
          </div>
          <div className="row g-4">
            {resourceItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow slideUp" data-delay={`.${(index + 1) * 2}`}>
                <div style={{
                  padding: "36px 28px",
                  background: "#fff",
                  borderRadius: "16px",
                  border: "1px solid #e9e6ff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "box-shadow .2s"
                }}>
                  <i className={`fa-solid ${item.icon}`} style={{ fontSize: "40px", color: "#0ea5e9" }} />
                  <h5 style={{ color: "#0f172a", margin: 0 }}>{item.title}</h5>
                  <p style={{ color: "#64748b", flex: 1, margin: 0 }}>{item.description}</p>
                  <Link to={item.link} className="theme-btn" style={{ alignSelf: "flex-start", padding: "12px 22px", fontSize: "14px" }}>
                    <span>{item.linkLabel} <i className="fa-solid fa-arrow-right-long" /></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
