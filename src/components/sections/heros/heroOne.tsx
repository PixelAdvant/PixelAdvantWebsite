import { useRef } from "react"
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Link } from "react-router-dom";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/hero/image1.jpg',
    title: 'EMPOWERING GLOBAL INNOVATION CENTERS',
    heading: 'Putting the Right<br /> Solutions and Methods<br /> in Place',
    description: 'Unlock the full potential of your Global Capability Center with our comprehensive consulting, talent acquisition, and managed services solutions.',
    link: '/about',
  },
  {
    id: 2,
    image: '/img/hero/image2.webp',
    title: 'TRANSFORM YOUR WORKFORCE',
    heading: 'AI-Led Smart Talent<br /> Acquisition & Supply<br /> Process',
    description: 'Leverage our advanced AI solutions for efficient and targeted talent acquisition with real-time insights and data-driven decision making.',
    link: '/service',
  },
];

const HeroOne = ({ onDemoClick }: { onDemoClick?: () => void }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button type="button" className="array-prev" onClick={() => swiperRef.current?.slidePrev()}><i className="fa fa-arrow-left" /></button>
        <button type="button" className="array-next" onClick={() => swiperRef.current?.slideNext()}><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        modules={[EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} onDemoClick={onDemoClick} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive, onDemoClick }: { slide: SlideType; isActive: boolean; onDemoClick?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
                }}
                className="hero-button"
              >
                <Link to={slide.link} className="theme-btn">
                  Learn More <i className="fas fa-chevron-right" />
                </Link>
                {onDemoClick ? (
                  <button type="button" className="theme-btn-outline" onClick={onDemoClick}>
                    Request Demo <i className="fas fa-calendar-check" />
                  </button>
                ) : (
                  <Link to="/contact" className="theme-btn-outline">
                    Request Demo <i className="fas fa-calendar-check" />
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <motion.div
              className="hero-visual"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: isActive ? 0 : 60, opacity: isActive ? 1 : 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "linear",
              }}
            >
              <div className="hero-visual-main">
                <img src={slide.image} alt={slide.title} />
              </div>

              <motion.div
                className="hero-float-card card-one"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.9,
                  ease: "linear",
                }}
              >
                <span className="label">Specialists</span>
                <h5>350+</h5>
                <p>Global talent network</p>
              </motion.div>

              <motion.div
                className="hero-float-card card-two"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: 0.45,
                  delay: 1.1,
                  ease: "linear",
                }}
              >
                <span className="label">AI Match Score</span>
                <h5>94%</h5>
                <p>Shortlist accuracy rate</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
