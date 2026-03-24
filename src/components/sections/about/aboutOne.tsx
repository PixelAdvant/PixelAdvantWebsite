import SectionTitle from "@/components/ui/sectionTitle"
import { ServiceIcon } from "@/lib/serviceIcons"
import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup"
import { Link } from "react-router-dom"

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <ServiceIcon iconKey="talent" />
                  </div>
                  <div className="content">
                    <h3><span className="count">6,561</span>+</h3>
                  </div>
                </div>
                <AboutRoundedTextVideoPopup/>
                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/image2.avif")' }}>
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img/about/image1.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title> An Integral, Trusted Partner in GCC</SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  Our leaders have a collective experience of 400 years in cross-functional domain areas. Across every critical touchpoint in the GCC journey, we provide innovative solutions and services that positively impact outcomes for all stakeholders.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <ServiceIcon iconKey="strategy" />
                    </div>
                    <div className="content">
                      <h4>Expert Solutions</h4>
                      <p>
                        Flexible and scalable solutions customized to suit your organization's complex GCC challenges
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <ServiceIcon iconKey="security" />
                    </div>
                    <div className="content">
                      <h4>End-to-End Support</h4>
                      <p>
                        Complete support from legal compliance to workspace design, talent acquisition, and operations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/about" className="theme-btn">
                      Learn More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>Leadership Team</h6>
                      <p>400+ Years Combined Expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutOne
