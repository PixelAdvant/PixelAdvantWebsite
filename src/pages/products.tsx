import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import SEO from '@/components/SEO';
import { pageSEOConfig } from '@/lib/seoConfig';

const products = [
  {
    title: "Click 100",
    description: "Pioneering value-centric workforces with AI and analytics.",
    link: "/products/click-100",
  },
  {
    title: "Advantage Plus",
    description: "Advanced workforce intelligence for scalable hiring outcomes.",
    link: "/products/advantage-plus",
  },
];

const Products = () => {
  return (
    <>
      <SEO {...pageSEOConfig.products} />
      <PageTitle title="Products" currentPage="Products" />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow slideUp">Our Products</span>
            <h2 className="wow slideUp" data-delay=".3">
              Product Suite
            </h2>
          </div>
          <div className="row g-4">
            {products.map((product, index) => (
              <div key={index} className="col-lg-6 wow slideUp" data-delay=".3">
                <div className="service-box-items box-shadow h-100">
                  <div className="content mt-0">
                    <h4>
                      <Link to={product.link}>{product.title}</Link>
                    </h4>
                    <p>{product.description}</p>
                    <Link to={product.link} className="theme-btn-2 mt-3">
                      View Product
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
