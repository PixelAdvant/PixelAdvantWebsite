import BlogCommentForm from "@/components/sections/blogs/blogCommentForm"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import BlogInteractions from "@/components/sections/blogs/blogInteractions"
import PageTitle from "@/components/sections/pageTitle"
import { Link } from "react-router-dom"

const BlogDetails = () => {
    const blogTitle = "Establishing Your Global Capability Centre in India"
    const blogUrl = window.location.href
    return (
        <>
            <PageTitle currentPage="Blog Details" title="Blog Post" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/blogs/post-4.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By PixelAdvant
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    22 Feb, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    GCC Setup
                                                </li>
                                            </ul>
                                            <h3>Establishing Your Global Capability Centre in India</h3>
                                            <p className="mb-3">
                                                Setting up a Global Capability Centre (GCC) in India has become a strategic imperative for multinational corporations looking to optimize costs while maintaining quality. PixelAdvant specializes in helping organizations navigate this complex journey, from initial planning through full operational deployment. Our comprehensive approach ensures your GCC is positioned for sustainable growth and success in the competitive Indian market.
                                            </p>
                                            <p className="mb-3">
                                                The Indian talent pool offers unparalleled opportunities for organizations seeking to build high-performing teams. With a deep understanding of local regulations, cultural nuances, and best practices, PixelAdvant ensures your GCC setup is seamless and aligned with your organizational goals. Our experienced team has successfully facilitated numerous GCC establishments across various industries including IT, finance, HR, and customer support.
                                            </p>
                                            <p>
                                                One of the critical success factors for GCC operations is building the right team from day one. This requires careful selection of local talent, clear communication of organizational expectations, and robust training programs. PixelAdvant provides end-to-end recruitment and talent management services, ensuring your GCC gets access to the best available talent in India.
                                            </p>
                                            <div className="hilight-text mt-4 mb-4">
                                                <p>Key Benefits of Establishing GCC in India:
                                                    <br />- 30-40% cost savings compared to onshore operations
                                                    <br />- Access to a large and highly skilled talent ecosystem
                                                    <br />- Strong English proficiency across professional roles
                                                    <br />- Proven business infrastructure and regulatory framework</p>
                                                <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#77B80F" />
                                                    <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#77B80F" />
                                                </svg>
                                            </div>
                                            <p className="mt-4 mb-5">
                                                PixelAdvant's proven methodology for GCC setup includes comprehensive market research, site selection support, regulatory compliance guidance, talent acquisition, team development, operational framework design, and continuous optimization. A successful GCC is not only about cost efficiency; it is about creating a sustainable competitive advantage through capability, governance, and scale.
                                            </p>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <img src="/img/blogs/post-5.jpg" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <img src="/img/blogs/post-6.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="pt-5">
                                                GCC success depends on disciplined execution across people, process, and technology. Organizations that invest in leadership alignment, data-driven hiring, and measurable operating governance consistently outperform in delivery quality, speed, and long-term resilience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row tag-share-wrap mt-4 mb-5">
                                        <div className="col-lg-8 col-12">
                                            <div className="tagcloud">
                                                <Link to="/blog">Technology</Link>
                                                <Link to="/blog">Innovation</Link>
                                                <Link to="/blog">GCC</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <BlogInteractions blogTitle={blogTitle} blogUrl={blogUrl} />
                                    <BlogComments/>
                                    <BlogCommentForm blogTitle={blogTitle} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <BlogSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogDetails
