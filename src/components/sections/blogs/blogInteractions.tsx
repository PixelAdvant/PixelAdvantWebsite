import { useState } from 'react'

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

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginTop: '30px',
            marginBottom: '30px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                {/* Like Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                        onClick={handleLike}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            backgroundColor: isLiked ? '#ff6b35' : '#e0e0e0',
                            color: isLiked ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <i className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart`} />
                        {likes > 0 ? ` ${likes} ${likes === 1 ? 'Like' : 'Likes'}` : 'Like'}
                    </button>
                </div>

                {/* Share Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                        <i className="fa-solid fa-share-nodes" /> Share:
                    </span>
                    <button
                        onClick={() => handleShare('facebook')}
                        title="Share on Facebook"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#3b5998'
                            ;(e.target as HTMLButtonElement).style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'white'
                            ;(e.target as HTMLButtonElement).style.color = '#333'
                        }}
                    >
                        <i className="fab fa-facebook-f" />
                    </button>

                    <button
                        onClick={() => handleShare('twitter')}
                        title="Share on Twitter"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#1da1f2'
                            ;(e.target as HTMLButtonElement).style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'white'
                            ;(e.target as HTMLButtonElement).style.color = '#333'
                        }}
                    >
                        <i className="fa-brands fa-x-twitter" />
                    </button>

                    <button
                        onClick={() => handleShare('linkedin')}
                        title="Share on LinkedIn"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#0077b5'
                            ;(e.target as HTMLButtonElement).style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'white'
                            ;(e.target as HTMLButtonElement).style.color = '#333'
                        }}
                    >
                        <i className="fab fa-linkedin-in" />
                    </button>

                    <button
                        onClick={() => handleShare('copy')}
                        title="Copy link"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#666'
                            ;(e.target as HTMLButtonElement).style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'white'
                            ;(e.target as HTMLButtonElement).style.color = '#333'
                        }}
                    >
                        <i className="fa-solid fa-link" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogInteractions
