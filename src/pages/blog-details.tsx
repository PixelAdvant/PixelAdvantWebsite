import BlogCommentForm from "@/components/sections/blogs/blogCommentForm";
import BlogComments from "@/components/sections/blogs/blogComments";
import BlogSidebar from "@/components/sections/blogs/blogSIdebar";
import BlogInteractions from "@/components/sections/blogs/blogInteractions";
import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const blogTitle = "Establishing Your Global Capability Centre in India";
    const blogUrl = window.location.href;

    return (
        <>
            <PageTitle currentPage="Blog Details" title="Blog Post" />
            <section style={{ backgroundColor: "#fff", padding: "60px 0 80px" }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "32px", height: "440px" }}>
                                <img
                                    src="/img/blogs/post-4.jpg"
                                    alt="Blog Hero"
                                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>

                            <div style={{ marginBottom: "20px" }}>
                                <span
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: "#eff6ff",
                                        color: "#2563eb",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        padding: "5px 12px",
                                        borderRadius: "20px",
                                        marginBottom: "16px",
                                    }}
                                >
                                    GCC Setup
                                </span>
                                <h1
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: "800",
                                        color: "#111827",
                                        lineHeight: "1.3",
                                        letterSpacing: "-0.02em",
                                        marginBottom: "16px",
                                    }}
                                >
                                    {blogTitle}
                                </h1>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontSize: "13px",
                                        color: "#9ca3af",
                                        paddingBottom: "24px",
                                        borderBottom: "1px solid #f3f4f6",
                                    }}
                                >
                                    <i className="fa-regular fa-user" />
                                    <span>PixelAdvant</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <i className="fa-regular fa-calendar" />
                                    <span>22 Feb, 2025</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <i className="fa-regular fa-clock" />
                                    <span>6 min read</span>
                                </div>
                            </div>

                            <div style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
                                <p style={{ marginBottom: "20px" }}>
                                    Setting up a Global Capability Centre (GCC) in India has become a strategic imperative for multinational corporations looking to optimize costs while maintaining quality. PixelAdvant specializes in helping organizations navigate this complex journey, from initial planning through full operational deployment. Our comprehensive approach ensures your GCC is positioned for sustainable growth and success in the competitive Indian market.
                                </p>
                                <p style={{ marginBottom: "20px" }}>
                                    The Indian talent pool offers strong opportunities for organizations seeking to build high-performing teams. With a deep understanding of local regulations, cultural nuances, and best practices, PixelAdvant ensures your GCC setup is seamless and aligned with your organizational goals. Our team has successfully supported GCC establishments across IT, finance, HR, and customer support functions.
                                </p>
                                <p style={{ marginBottom: "32px" }}>
                                    One of the critical success factors for GCC operations is building the right team from day one. This requires careful selection of local talent, clear communication of organizational expectations, and robust training programs. PixelAdvant provides end-to-end recruitment and talent management services, ensuring your GCC gets access to the best available talent in India.
                                </p>

                                <blockquote
                                    style={{
                                        borderLeft: "4px solid #2563eb",
                                        backgroundColor: "#f8faff",
                                        padding: "24px 28px",
                                        borderRadius: "0 10px 10px 0",
                                        margin: "0 0 32px",
                                    }}
                                >
                                    <p style={{ fontSize: "15px", color: "#1e40af", fontWeight: "500", lineHeight: "1.75", margin: 0 }}>
                                        Key Benefits of Establishing GCC in India:
                                        <br />- 30-40% cost savings compared to onshore operations
                                        <br />- Access to a large and highly skilled talent ecosystem
                                        <br />- Strong English proficiency across professional roles
                                        <br />- Proven business infrastructure and regulatory framework
                                    </p>
                                </blockquote>

                                <p style={{ marginBottom: "32px" }}>
                                    PixelAdvant's GCC setup methodology includes comprehensive market research, site selection support, regulatory compliance guidance, talent acquisition, team development, operating model design, and continuous optimization. A successful GCC is not only about cost efficiency; it is about creating a sustainable competitive advantage through capability, governance, and scale.
                                </p>

                                <div className="row g-3" style={{ marginBottom: "32px" }}>
                                    <div className="col-lg-6">
                                        <img
                                            src="/img/blogs/post-5.jpg"
                                            alt="GCC setup"
                                            style={{ width: "100%", borderRadius: "10px", display: "block" }}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <img
                                            src="/img/blogs/post-6.jpg"
                                            alt="Team collaboration"
                                            style={{ width: "100%", borderRadius: "10px", display: "block" }}
                                        />
                                    </div>
                                </div>

                                <p style={{ marginBottom: "20px" }}>
                                    GCC success depends on disciplined execution across people, process, and technology. Organizations that invest in leadership alignment, data-driven hiring, and measurable governance consistently improve delivery quality, speed, and long-term resilience.
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                    margin: "32px 0 0",
                                    paddingTop: "24px",
                                    borderTop: "1px solid #f3f4f6",
                                }}
                            >
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6b7280", marginRight: "4px" }}>Tags:</span>
                                {[
                                    "GCC India",
                                    "Talent Strategy",
                                    "Operations",
                                ].map((tag) => (
                                    <Link
                                        key={tag}
                                        to="/blog"
                                        style={{
                                            padding: "5px 14px",
                                            borderRadius: "20px",
                                            border: "1.5px solid #e5e7eb",
                                            fontSize: "12px",
                                            color: "#374151",
                                            fontWeight: "500",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>

                            <BlogInteractions blogTitle={blogTitle} blogUrl={blogUrl} />
                            <BlogComments />
                            <BlogCommentForm blogTitle={blogTitle} />
                        </div>

                        <div className="col-12 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
