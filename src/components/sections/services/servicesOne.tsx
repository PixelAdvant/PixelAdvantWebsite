import { serviceOneData } from "@/db/serviceOneData"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const ServicesOne = ({ onDemoClick }: { onDemoClick?: () => void }) => {
  return (
    <section id="services" className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}>
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>
              Comprehensive GCC<br /> Solutions & Services
            </SectionTitle.Title>
          </SectionTitle>
          <div className="array-button">
            <button className="array-prev"><i className="fa fa-arrow-right" /></button>
            <button className="array-next"><i className="fa fa-arrow-left" /></button>
          </div>
        </div>
        <div className="service-wrapper">
          <Swiper
            spaceBetween={30}
            speed={1500}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-prev",
              prevEl: ".array-next",
            }}

            breakpoints={{
              1199: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation]}
          >
            {serviceOneData.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="service-text wow slideUp" data-delay=".4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <h6>
              Explore Our Solutions.  <Link to="/service">View All Services </Link>
            </h6>
            <button className="theme-btn" onClick={onDemoClick} style={{ whiteSpace: 'nowrap' }}>
              Request Demo <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div >
    </section >

  )
}

export default ServicesOne