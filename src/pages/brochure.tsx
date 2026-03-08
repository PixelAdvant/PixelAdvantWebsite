import PageTitle from "@/components/sections/pageTitle"

const Brochure = () => {
  return (
    <>
      <PageTitle title="Brochure" currentPage="Brochure" />
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="wow slideUp">Download</span>
            <h2 className="wow slideUp" data-delay=".3">
              Company Brochure
            </h2>
            <p className="wow slideUp" data-delay=".5">
              Download our company brochure to learn more about our GCC solutions, team, and service offerings.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow slideUp" data-delay=".3">
              <div style={{ padding: "60px 40px", background: "#f8f7ff", borderRadius: "16px", border: "1px solid #e9e6ff" }}>
                <i className="fa-solid fa-file-arrow-down" style={{ fontSize: "64px", color: "#5b47e0", marginBottom: "20px", display: "block" }} />
                <h4 style={{ color: "#0f172a", marginBottom: "12px" }}>Brochure Coming Soon</h4>
                <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto 28px" }}>
                  Our downloadable brochure is being prepared. In the meantime, feel free to reach out and we will send it directly to you.
                </p>
                <a href="/contact" className="theme-btn">
                  <span>Contact Us <i className="fa-solid fa-arrow-right-long" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Brochure
