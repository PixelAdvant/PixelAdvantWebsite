import PageTitle from "@/components/sections/pageTitle";
import ServiceCard from "@/components/sections/services/serviceCard";
import { serviceOneData } from "@/db/serviceOneData";

const ProductOne = () => {
  return (
    <>
      <PageTitle title="Product One" currentPage="Product One" />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Click 100</span>
            <h2 className="wow slideUp" data-delay=".3">
              Featured Modules
            </h2>
          </div>
          <div className="service-wrapper mb-0">
            <div className="row">
              {serviceOneData.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                  data-delay=".3"
                >
                  <ServiceCard service={service} className="box-shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOne;
