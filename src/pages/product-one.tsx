import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const click100Modules = [
  {
    title: "Talent Network",
    description:
      "Create curated talent pools across skills, locations, and experience bands for always-on hiring.",
  },
  {
    title: "AI/ML Recruiting Intelligence",
    description:
      "Use predictive matching, role fit scoring, and pipeline analytics to improve quality of hire.",
  },
  {
    title: "Automation",
    description:
      "Automate screening, interview workflows, and communication touchpoints to reduce hiring cycle time.",
  },
];

const click100Flow = [
  {
    title: "Discover",
    description: "Map hiring goals, demand plans, and role priorities.",
  },
  {
    title: "Design",
    description: "Configure workflows, scorecards, and data inputs for your teams.",
  },
  {
    title: "Deploy",
    description: "Launch recruitment operations with guided onboarding and governance.",
  },
  {
    title: "Scale",
    description: "Track performance metrics and optimize continuously with AI insights.",
  },
];

const ProductOne = () => {
  return (
    <>
      <PageTitle title="Click 100" currentPage="Click 100" />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Click 100 Product</span>
            <h2 className="wow slideUp" data-delay=".3">
              AI-Driven Workforce Intelligence Platform
            </h2>
          </div>
          <div className="row g-4">
            {click100Modules.map((module, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow slideUp" data-delay=".3">
                <div className="service-box-items box-shadow h-100">
                  <div className="content mt-0">
                    <h4>{module.title}</h4>
                    <p>{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Implementation Approach</span>
            <h2 className="wow slideUp" data-delay=".3">
              How Click 100 Is Delivered
            </h2>
          </div>
          <div className="row g-4">
            {click100Flow.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow slideUp" data-delay=".3">
                <div className="service-box-items box-shadow h-100">
                  <div className="content mt-0">
                    <h4>{`Step ${index + 1}: ${step.title}`}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-5">
            <Link to="/contact" className="theme-btn">
              <span>Request Click 100 Demo</span>
            </Link>
            <Link to="/products" className="theme-btn hover-white">
              <span>Back to Products <i className="fa-solid fa-arrow-right-long" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Business Impact</span>
            <h2 className="wow slideUp" data-delay=".3">
              Outcomes Teams Typically Track
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow slideUp" data-delay=".3">
              <div className="service-box-items box-shadow h-100">
                <div className="content mt-0">
                  <h4>Faster Time-to-Hire</h4>
                  <p>Reduce cycle times using automation and intelligent shortlisting.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow slideUp" data-delay=".5">
              <div className="service-box-items box-shadow h-100">
                <div className="content mt-0">
                  <h4>Better Quality of Hire</h4>
                  <p>Improve role fit with data-led screening and structured evaluation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow slideUp" data-delay=".7">
              <div className="service-box-items box-shadow h-100">
                <div className="content mt-0">
                  <h4>Higher Recruiter Productivity</h4>
                  <p>Allow teams to focus on candidate experience and strategic hiring.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOne;
