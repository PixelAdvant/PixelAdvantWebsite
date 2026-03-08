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
        <div style={{ paddingTop: '40px', marginTop: '8px' }}>
            <h4 style={{
                fontSize: '18px',
                fontWeight: '800',
                color: '#111827',
                letterSpacing: '-0.01em',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #f3f4f6'
            }}>
                Leave a Comment
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '11px 16px',
                                border: '1.5px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#111827',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '11px 16px',
                                border: '1.5px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#111827',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div className="col-lg-12">
                        <textarea
                            name="message"
                            placeholder="Write your comment..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '11px 16px',
                                border: '1.5px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#111827',
                                outline: 'none',
                                boxSizing: 'border-box',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: '12px 28px',
                                backgroundColor: loading ? '#a89ef4' : '#5b47e0',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'background 0.2s'
                            }}
                        >
                            {loading ? 'Posting…' : 'Post Comment'}
                        </button>
                    </div>
                </div>

                {status === 'success' && (
                    <div style={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: '#166534'
                    }}>
                        <i className="fa-solid fa-check me-2" /> Comment posted! It will appear after moderation.
                    </div>
                )}
                {status === 'error' && (
                    <div style={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: '#991b1b'
                    }}>
                        <i className="fa-solid fa-circle-exclamation me-2" /> {errorMessage}
                    </div>
                )}
            </form>
        </div>
    )
}

export default BlogCommentForm
