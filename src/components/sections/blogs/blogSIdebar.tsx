import React from "react";
import { Link } from "react-router-dom";
import BlogSubscription from "./blogSubscription";

const categories = [
    { name: "GCC Strategy", count: 8 },
    { name: "Talent Solutions", count: 11 },
    { name: "Managed Services", count: 12, active: true },
    { name: "Workforce Analytics", count: 18 },
    { name: "Compliance", count: 7 },
];

const recentPosts = [
    {
        imgSrc: "/img/blogs/pp3.jpg",
        date: "18 Dec, 2025",
        title: "How GCC Advisory Improves Launch Readiness",
    },
    {
        imgSrc: "/img/blogs/pp4.jpg",
        date: "18 Dec, 2025",
        title: "AI-Led Hiring Models for Faster Team Buildout",
    },
    {
        imgSrc: "/img/blogs/pp5.jpg",
        date: "18 Dec, 2025",
        title: "Managed Services for Scalable GCC Operations",
    },
];

const tags = [
    "GCC",
    "Talent",
    "Operations",
    "Expansion",
    "Compliance",
    "Advisory",
    "Workforce",
];

const sidebarBlock: React.CSSProperties = {
    marginBottom: "32px",
    paddingBottom: "32px",
    borderBottom: "1px solid #f3f4f6",
};

const sidebarHeading: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#111827",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "16px",
};

const BlogSidebar = () => {
    return (
        <div style={{ position: "sticky", top: "100px" }}>
            {/* Search */}
            <div style={sidebarBlock}>
                <p style={sidebarHeading}>Search</p>
                <div style={{ position: "relative" }}>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        style={{
                            width: "100%",
                            padding: "10px 40px 10px 14px",
                            border: "1.5px solid #e5e7eb",
                            borderRadius: "8px",
                            fontSize: "14px",
                            color: "#374151",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />
                    <i
                        className="fa-solid fa-magnifying-glass"
                        style={{
                            position: "absolute",
                            right: "14px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#9ca3af",
                            fontSize: "14px",
                        }}
                    />
                </div>
            </div>

            {/* Categories */}
            <div style={sidebarBlock}>
                <p style={sidebarHeading}>Categories</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {categories.map((cat, i) => (
                        <li
                            key={i}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                                borderBottom: i < categories.length - 1 ? "1px solid #f3f4f6" : "none",
                            }}
                        >
                            <Link
                                to="/blog"
                                style={{
                                    fontSize: "14px",
                                    color: cat.active ? "#2563eb" : "#374151",
                                    fontWeight: cat.active ? "600" : "400",
                                    textDecoration: "none",
                                }}
                            >
                                {cat.name}
                            </Link>
                            <span
                                style={{
                                    fontSize: "12px",
                                    color: "#9ca3af",
                                    backgroundColor: "#f9fafb",
                                    padding: "2px 8px",
                                    borderRadius: "10px",
                                }}
                            >
                                {cat.count}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts */}
            <div style={sidebarBlock}>
                <p style={sidebarHeading}>Recent Posts</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {recentPosts.map((post, i) => (
                        <Link
                            to="/blog-details"
                            key={i}
                            style={{
                                display: "flex",
                                gap: "12px",
                                textDecoration: "none",
                                alignItems: "flex-start",
                            }}
                        >
                            <img
                                src={post.imgSrc}
                                alt={post.title}
                                style={{
                                    width: "64px",
                                    height: "48px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                    flexShrink: 0,
                                }}
                            />
                            <div>
                                <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}>{post.date}</p>
                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: "#111827",
                                        fontWeight: "600",
                                        margin: 0,
                                        lineHeight: "1.45",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {post.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div style={sidebarBlock}>
                <p style={sidebarHeading}>Tags</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {tags.map((tag, i) => (
                        <Link
                            to="/blog"
                            key={i}
                            style={{
                                padding: "5px 12px",
                                borderRadius: "20px",
                                border: "1.5px solid #e5e7eb",
                                fontSize: "12px",
                                color: "#374151",
                                textDecoration: "none",
                                fontWeight: "500",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#2563eb";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.borderColor = "#2563eb";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#374151";
                                e.currentTarget.style.borderColor = "#e5e7eb";
                            }}
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Subscribe */}
            <BlogSubscription />
        </div>
    );
};

export default BlogSidebar;
