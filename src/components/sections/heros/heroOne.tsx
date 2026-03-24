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
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    title: 'EMPOWERING GLOBAL INNOVATION CENTERS',
    heading: 'Putting the Right Solutions<br /> and Methods in Place',
    description: 'Unlock the full potential of your Global Capability Center with our comprehensive consulting, talent acquisition, and managed services solutions.',
    link: '/about',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    title: 'TRANSFORM YOUR WORKFORCE',
    heading: 'AI-Led Smart Talent<br /> Acquisition and Supply',
    description: 'Leverage our advanced AI solutions for efficient and targeted talent acquisition with real-time insights and data-driven decision making.',
    link: '/service',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    title: 'SCALABLE IT SERVICES',
    heading: 'Build Secure, Modern Technology<br /> Systems That Grow With You',
    description: 'From custom software and managed cloud operations to cybersecurity and digital transformation, we help businesses create stronger IT foundations.',
    link: '/gcc-solutions/it-services',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    title: 'PERFORMANCE DIGITAL MARKETING',
    heading: 'Turn Visibility Into Qualified<br /> Demand and Measurable Growth',
    description: 'Our SEO, paid media, content, automation, and reputation programmes are designed to generate better traffic, stronger leads, and sustainable growth.',
    link: '/gcc-solutions/digital-marketing-services',
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
      className="hero-slide-inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 col-lg-6">
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
          <div className="col-xl-6 col-lg-6">
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
