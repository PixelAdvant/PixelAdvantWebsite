import { useState } from "react"
import BlogCard from "@/components/sections/blogs/blogCard"
import BlogSubscription from "@/components/sections/blogs/blogSubscription"
import PageTitle from "@/components/sections/pageTitle"
import { blogPostsThreeData } from "@/db/blogPostsThreeData"
import { Link } from "react-router-dom"

const allCategories = ['All', ...Array.from(new Set(blogPostsThreeData.map(p => p.category)))]

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const featured = blogPostsThreeData[0]
    const filtered = blogPostsThreeData
        .slice(1)
        .filter(p => activeCategory === 'All' || p.category === activeCategory)

    return (
        <>
            <PageTitle currentPage="Blogs" title="Blog" />

            <section style={{ backgroundColor: '#fff', padding: '60px 0 80px' }}>
                <div className="container">

                    {/* ── Featured Post ── */}
                    <div style={{ marginBottom: '56px' }}>
                        <Link
                            to={featured.link}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '0',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #e5e7eb',
                                textDecoration: 'none',
                                transition: 'box-shadow 0.25s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.10)')}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                        >
                            {/* Image side */}
                            <div style={{ overflow: 'hidden', height: '380px' }}>
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                                />
                            </div>
                            {/* Text side */}
                            <div style={{
                                padding: '48px 44px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor: '#fff'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    backgroundColor: '#eff6ff',
                                    color: '#2563eb',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    marginBottom: '18px',
                                    width: 'fit-content'
                                }}>
                                    Featured · {featured.category}
                                </span>
                                <h2 style={{
                                    fontSize: '26px',
                                    fontWeight: '800',
                                    color: '#111827',
                                    lineHeight: '1.35',
                                    marginBottom: '16px',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {featured.title}
                                </h2>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#6b7280',
                                    lineHeight: '1.7',
                                    marginBottom: '28px'
                                }}>
                                    {featured.description}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '13px',
                                    color: '#9ca3af'
                                }}>
                                    <i className="fa-regular fa-calendar" />
                                    <span>{featured.date.day} {featured.date.month} {featured.date.year}</span>
                                    <span style={{ margin: '0 6px' }}>·</span>
                                    <i className="fa-regular fa-user" />
                                    <span>{featured.author}</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* ── Category Filters ── */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '36px',
                        borderBottom: '1px solid #e5e7eb',
                        paddingBottom: '20px'
                    }}>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '7px 18px',
                                    borderRadius: '20px',
                                    border: activeCategory === cat ? '1.5px solid #2563eb' : '1.5px solid #e5e7eb',
                                    backgroundColor: activeCategory === cat ? '#2563eb' : '#fff',
                                    color: activeCategory === cat ? '#fff' : '#374151',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Blog Grid ── */}
                    <div className="row g-4">
                        {filtered.length === 0 ? (
                            <div className="col-12" style={{ textAlign: 'center', padding: '40px 0', color: '#9ca3af' }}>
                                No posts in this category yet.
                            </div>
                        ) : (
                            filtered.map(post => (
                                <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <BlogCard news={post} />
                                </div>
                            ))
                        )}
                    </div>

                    {/* ── Subscribe Banner ── */}
                    <div className="row mt-5">
                        <div className="col-lg-8 col-12 mx-auto">
                            <BlogSubscription />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog