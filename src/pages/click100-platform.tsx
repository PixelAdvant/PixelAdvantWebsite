import { Link } from "react-router-dom"
import { motion } from "motion/react"
import SEO from "@/components/SEO"
import PageTitle from "@/components/sections/pageTitle"

const Click100Platform = () => {
  const externalUrl = "https://pixeladvant.github.io/Click100-Landing/"

  return (
    <div className="click100-page">
      <SEO 
        title="Click-100 Platform | AI-Powered Talent Acquisition"
        description="Discover Click-100, our intelligent platform that transforms hiring with AI-driven candidate matching and global talent access."
        canonical="/click100-platform"
      />
      
      {/* Page Title / Breadcrumb - Matching other pages */}
      <PageTitle 
        title="Click-100 Platform" 
        currentPage="Click-100 Platform"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
      />

      {/* About Section - Matching site style */}
      <section className="about-section about-1 section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="about-content"
              >
                <h6>WHAT IS CLICK-100?</h6>
                <h2>Intelligent Talent Acquisition Platform</h2>
                <p>
                  Click-100 is an intelligent talent acquisition platform designed for 
                  businesses that want to hire faster and smarter. Using advanced AI 
                  algorithms, it analyzes candidate profiles, matches skills with job 
                  requirements, and provides data-driven insights to help you make 
                  better hiring decisions.
                </p>
                <p className="mt-3">
                  Reduce time-to-hire by 60% while improving quality of hire with our 
                  AI-powered matching engine and global talent network.
                </p>

                <div className="hero-button mt-4">
                  <a 
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Visit Click-100 Platform
                    <i className="fas fa-external-link-alt" />
                  </a>
                  
                  <Link to="/recruitment" className="theme-btn-outline">
                    Back to Solutions
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="about-image"
              >
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Click-100 Platform" 
                  className="img-fluid rounded-4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Matching site features style */}
      <section className="feature-section section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h6>WHY CHOOSE CLICK-100?</h6>
                <h2>Key Benefits</h2>
              </motion.div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <motion.div 
                className="feature-card p-4 bg-white rounded-4 shadow-sm h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div className="feature-icon mb-3" style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(135deg, rgba(91, 71, 224, 0.1), rgba(91, 71, 224, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-bolt" style={{ color: '#5b47e0', fontSize: '22px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Fast Hiring</h4>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Reduce time-to-hire by up to 60% with automated screening.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-3 col-md-6">
              <motion.div 
                className="feature-card p-4 bg-white rounded-4 shadow-sm h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div className="feature-icon mb-3" style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(135deg, rgba(91, 71, 224, 0.1), rgba(91, 71, 224, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-brain" style={{ color: '#5b47e0', fontSize: '22px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Smart Matching</h4>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  AI-powered algorithms that understand skills and culture fit.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-3 col-md-6">
              <motion.div 
                className="feature-card p-4 bg-white rounded-4 shadow-sm h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div className="feature-icon mb-3" style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(135deg, rgba(91, 71, 224, 0.1), rgba(91, 71, 224, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-globe" style={{ color: '#5b47e0', fontSize: '22px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Global Access</h4>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Connect with pre-vetted professionals from 50+ countries.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-3 col-md-6">
              <motion.div 
                className="feature-card p-4 bg-white rounded-4 shadow-sm h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div className="feature-icon mb-3" style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(135deg, rgba(91, 71, 224, 0.1), rgba(91, 71, 224, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-chart-line" style={{ color: '#5b47e0', fontSize: '22px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Data Insights</h4>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Real-time analytics to optimize your hiring strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching site CTA style */}
      <section className="cta-section cta-1 section-padding" style={{ background: 'linear-gradient(135deg, #5b47e0 0%, #7c6fec 100%)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-white mb-3">Ready to explore Click-100?</h2>
                <p className="text-white-50 mb-4" style={{ fontSize: '16px' }}>
                  Experience the future of intelligent hiring today.
                </p>
                
                <a 
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn bg-white text-dark"
                  style={{ padding: '14px 36px', fontWeight: '600' }}
                >
                  Go to Platform
                  <i className="fas fa-arrow-right ms-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Click100Platform