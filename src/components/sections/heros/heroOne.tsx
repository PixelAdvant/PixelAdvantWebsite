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
    image: '/img/hero/image1.webp',
    title: 'EMPOWERING GLOBAL INNOVATION CENTERS',
    heading: 'Putting the Right Solutions<br /> and Methods in Place',
    description: 'Unlock the full potential of your Global Capability Center with our comprehensive consulting, talent acquisition, and managed services solutions.',
    link: '/about',
  },
  {
    id: 2,
    image: 'img/hero/image2.webp',
    title: 'TRANSFORM YOUR WORKFORCE',
    heading: 'AI-Led Smart Talent<br /> Acquisition and Supply',
    description: 'Leverage our advanced AI solutions for efficient and targeted talent acquisition with real-time insights and data-driven decision making.',
    link: '/service',
  },
  {
    id: 3,
    image: 'img/hero/image3.svg',
    title: 'SCALABLE IT SERVICES',
    heading: 'Build Secure, Modern Technology<br /> Systems That Grow With You',
    description: 'From custom software and managed cloud operations to cybersecurity and digital transformation, we help businesses create stronger IT foundations.',
    link: '/gcc-solutions/it-services',
  },
  {
    id: 4,
    image: 'img/hero/image4.svg',
    title: 'PERFORMANCE DIGITAL MARKETING',
    heading: 'Turn Visibility Into Qualified<br /> Demand and Measurable Growth',
    description: 'Our SEO, paid media, content, automation, and reputation programmes are designed to generate better traffic, stronger leads, and sustainable growth.',
    link: '/gcc-solutions/digital-marketing-services',
  },
];

const HeroOne = ({ onDemoClick }: { onDemoClick?: () => void }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="hero-section hero-1 hero-1-dark">
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
      
      {/* Smooth Animated Wave SVG at the bottom */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="wave-svg">
          {/* Back wave layer - gentle, slow */}
          <path d="M0,80 C150,50 300,110 450,80 C600,50 750,110 900,80 C1050,50 1200,110 1350,80 L1350,120 L0,120 Z" className="wave-layer wave-layer-back"/>
          {/* Middle wave layer - medium */}
          <path d="M0,90 C150,60 300,100 450,90 C600,60 750,100 900,90 C1050,60 1200,100 1350,90 L1350,120 L0,120 Z" className="wave-layer wave-layer-mid"/>
          {/* Front wave layer - most defined */}
          <path d="M0,95 C150,75 300,95 450,95 C600,75 750,95 900,95 C1050,75 1200,95 1350,95 L1350,120 L0,120 Z" className="wave-layer wave-layer-front"/>
        </svg>
      </div>
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
          {/* Left Column - Text Content */}
          <div className="col-xl-5 col-lg-6">
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
              
              {/* Keyword Tags */}
              <motion.div
                className="hero-tags"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.1,
                  ease: "linear",
                }}
              >
                <span className="tag">Software</span>
                <span className="tag">Marketing</span>
                <span className="tag">Recruitment</span>
                <span className="tag">Hiring</span>
                <span className="tag">Global Capability Center</span>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column - Image with Floating Elements */}
          <div className="col-xl-7 col-lg-6">
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
                
                {/* Floating Card - Top */}
                <motion.div
                  className="hero-float-card float-card-top"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: isActive ? 0 : 20, 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                    ease: "linear",
                  }}
                >
                  <div className="card-icon">
                    <i className="fas fa-users" />
                  </div>
                  <div className="card-info">
                    <span className="label">Specialists</span>
                    <h5>350+</h5>
                    <p>Global talent network</p>
                  </div>
                </motion.div>

                {/* Floating Card - Bottom */}
                <motion.div
                  className="hero-float-card float-card-bottom"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: isActive ? 0 : 20, 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.0,
                    ease: "linear",
                  }}
                >
                  <div className="card-icon">
                    <i className="fas fa-bullseye" />
                  </div>
                  <div className="card-info">
                    <span className="label">AI Match Score</span>
                    <h5>94%</h5>
                    <p>Shortlist accuracy</p>
                  </div>
                </motion.div>

                {/* Small Badge */}
                <motion.div
                  className="hero-badge"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isActive ? 1 : 0, 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2,
                    ease: "backOut",
                  }}
                >
                  <i className="fas fa-check-circle" />
                  <span>Verified</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
