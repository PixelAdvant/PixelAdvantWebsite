import { BlogPostDataType } from "@/db/blogPostsThreeData"
import { Link } from "react-router-dom"

const BlogCard = ({ news }: { news: BlogPostDataType, className?: string }) => {
    return (
        <Link
            to={news.link}
            style={{
                display: 'block',
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                textDecoration: 'none',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                height: '100%',
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.10)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
        >
            {/* Image */}
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
            </div>

            {/* Content */}
            <div style={{ padding: '20px 22px 24px' }}>
                {/* Category pill */}
                <span style={{
                    display: 'inline-block',
                    backgroundColor: '#f0eefb',
                    color: '#5b47e0',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    marginBottom: '12px'
                }}>
                    {news.category}
                </span>

                {/* Title */}
                <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#111827',
                    lineHeight: '1.45',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em'
                }}>
                    {news.title}
                </h3>

                {/* Description */}
                <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    lineHeight: '1.65',
                    marginBottom: '18px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {news.description}
                </p>

                {/* Footer meta */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    color: '#9ca3af',
                    borderTop: '1px solid #f3f4f6',
                    paddingTop: '14px'
                }}>
                    <i className="fa-regular fa-calendar" style={{ fontSize: '11px' }} />
                    <span>{news.date.day} {news.date.month} {news.date.year}</span>
                    <span style={{ margin: '0 4px' }}>·</span>
                    <i className="fa-regular fa-user" style={{ fontSize: '11px' }} />
                    <span>{news.author}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard