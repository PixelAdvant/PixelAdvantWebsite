import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const advantagePillars = [
  {
    title: "Strategic Workforce Planning",
    description:
      "Align workforce plans to business demand, capacity goals, and cost optimization targets.",
  },
  {
    title: "Advanced Talent Analytics",
    description:
      "Gain role-level visibility into pipeline health, conversion rates, and hiring risk indicators.",
  },
  {
    title: "Execution Governance",
    description:
      "Standardize operations with SLA tracking, reporting cadence, and performance accountability.",
  },
];

const advantageUseCases = [
  "Scale multi-location hiring with consistent quality benchmarks.",
  "Improve hiring predictability for critical and niche roles.",
  "Integrate recruiting operations with finance and workforce planning.",
  "Drive continuous optimization through KPI-led reviews.",
];

const ProductTwo = () => {
  return (
    <>
      <PageTitle title="Advantage Plus" currentPage="Advantage Plus" />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Advantage Plus Product</span>
            <h2 className="wow slideUp" data-delay=".3">
              Decision Support for Scalable Hiring Operations
            </h2>
          </div>
          <div className="row g-4">
            {advantagePillars.map((pillar, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow slideUp" data-delay=".3">
                <div className="service-box-items box-shadow h-100">
                  <div className="content mt-0">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Where It Helps</span>
            <h2 className="wow slideUp" data-delay=".3">
              Common Advantage Plus Use Cases
            </h2>
          </div>
          <div className="row g-4">
            {advantageUseCases.map((useCase, index) => (
              <div key={index} className="col-lg-6 wow slideUp" data-delay=".3">
                <div className="service-box-items box-shadow h-100">
                  <div className="content mt-0">
                    <h4>{`Use Case ${index + 1}`}</h4>
                    <p>{useCase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-5">
            <Link to="/contact" className="theme-btn">
              <span>Talk to Product Team</span>
            </Link>
            <Link to="/products" className="theme-btn hover-white">
              <span>Back to Products <i className="fa-solid fa-arrow-right-long" /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTwo;
