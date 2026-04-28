import PageTitle from "@/components/sections/pageTitle"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const PDF_PATH = "/Pixel Advant Recruitment Deck.pdf"

const Brochure = () => {
  return (
    <>
      <SEO {...pageSEOConfig.brochure} />
      <PageTitle title="Brochure" currentPage="Brochure" />
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="wow slideUp">Resources</span>
            <h2 className="wow slideUp" data-delay=".3">
              Company Brochure
            </h2>
            <p className="wow slideUp" data-delay=".5">
              Download our company brochure to learn more about our GCC solutions, team, and service offerings.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 wow slideUp" data-delay=".3">
              <div className="brochure-card">
                <div className="brochure-card__icon">
                  <i className="fa-solid fa-file-pdf" />
                </div>
                <div className="brochure-card__info">
                  <h5>Pixel Advant Recruitment Deck</h5>
                  <span>PDF Document</span>
                </div>
                <div className="brochure-card__actions">
                  <a
                    href={PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn style-2"
                  >
                    <span>View PDF <i className="fa-solid fa-eye" /></span>
                  </a>
                  <a
                    href={PDF_PATH}
                    download="Pixel-Advant-Brochure.pdf"
                    className="theme-btn"
                  >
                    <span>Download <i className="fa-solid fa-file-arrow-down" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Brochure
