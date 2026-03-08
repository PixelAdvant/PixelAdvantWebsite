import React, { useState } from 'react'

interface BlogInteractionsProps {
    blogTitle?: string
    blogUrl?: string
}

const BlogInteractions = ({ blogTitle = 'Blog Post', blogUrl = 'https://pixeladvantwebsite.com/blog' }: BlogInteractionsProps) => {
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikes(isLiked ? likes - 1 : likes + 1)
    }

    const handleShare = (platform: string) => {
        const encodedTitle = encodeURIComponent(blogTitle)
        const encodedUrl = encodeURIComponent(blogUrl)

        let shareUrl = ''
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
                break
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
                break
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
                break
            case 'copy':
                navigator.clipboard.writeText(blogUrl)
                alert('Link copied to clipboard!')
                return
            default:
                break
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400')
        }
    }

    const shareBtn: React.CSSProperties = {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1.5px solid #e5e7eb',
        backgroundColor: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        color: '#6b7280',
        transition: 'all 0.2s'
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '20px 0',
            borderTop: '1px solid #f3f4f6',
            borderBottom: '1px solid #f3f4f6',
            margin: '32px 0'
        }}>
            {/* Like */}
            <button
                onClick={handleLike}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 20px',
                    backgroundColor: isLiked ? '#f0eefb' : '#f9fafb',
                    color: isLiked ? '#5b47e0' : '#374151',
                    border: isLiked ? '1.5px solid #5b47e0' : '1.5px solid #e5e7eb',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                }}
            >
                <i className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart`} style={{ color: isLiked ? '#5b47e0' : '#9ca3af' }} />
                {likes > 0 ? `${likes} ${likes === 1 ? 'Like' : 'Likes'}` : 'Like this article'}
            </button>

            {/* Share */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#6b7280', marginRight: '4px' }}>
                    Share
                </span>
                {[
                    { platform: 'facebook', icon: 'fab fa-facebook-f', hover: '#3b5998' },
                    { platform: 'twitter', icon: 'fa-brands fa-x-twitter', hover: '#000' },
                    { platform: 'linkedin', icon: 'fab fa-linkedin-in', hover: '#0077b5' },
                    { platform: 'copy', icon: 'fa-solid fa-link', hover: '#374151' },
                ].map(({ platform, icon, hover }) => (
                    <button
                        key={platform}
                        onClick={() => handleShare(platform)}
                        title={`Share on ${platform}`}
                        style={shareBtn}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = hover
                            ;(e.currentTarget as HTMLElement).style.color = '#fff'
                            ;(e.currentTarget as HTMLElement).style.borderColor = hover
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = '#fff'
                            ;(e.currentTarget as HTMLElement).style.color = '#6b7280'
                            ;(e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'
                        }}
                    >
                        <i className={icon} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BlogInteractions
