import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface BlogCommentFormProps {
    blogTitle?: string
}

const BlogCommentForm = ({ blogTitle = 'Blog Post' }: BlogCommentFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setStatus('idle')

        try {
            // Send comment notification to admin
            await emailjs.send(
                'service_pixeladvant',
                'template_blog_comment',
                {
                    to_email: 'sonu.rahul4evr@gmail.com',
                    commenter_name: formData.name,
                    commenter_email: formData.email,
                    blog_title: blogTitle,
                    comment_text: formData.message,
                    request_type: 'New Blog Comment'
                }
            )

            // Send confirmation to commenter
            await emailjs.send(
                'service_pixeladvant',
                'template_confirmation',
                {
                    to_email: formData.email,
                    user_name: formData.name,
                    subject: 'Your Comment Has Been Posted - PixelAdvant',
                    request_type: 'Thank you for your comment! It will appear after moderation.'
                }
            )

            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 3000)
        } catch (error) {
            console.error('Form submission error:', error)
            setStatus('error')
            setErrorMessage('Failed to post comment. Please try again.')
            setTimeout(() => setStatus('idle'), 3000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="comment-form-wrap pt-5">
            <h3>Leave a Comment</h3>
            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="form-clt">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-clt">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-clt">
                            <textarea
                                name="message"
                                placeholder="Write your comment..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <button 
                            type="submit" 
                            className="theme-btn"
                            disabled={loading}
                            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                        >
                            {loading ? 'Posting...' : 'Post Comment'} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>

                {status === 'success' && (
                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}>
                        ✓ Comment posted successfully! Thank you for your feedback.
                    </div>
                )}

                {status === 'error' && (
                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}>
                        ✗ {errorMessage}
                    </div>
                )}
            </form>
        </div>
    )
}

export default BlogCommentForm
