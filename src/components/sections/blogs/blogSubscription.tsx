import { useState } from 'react'
import emailjs from '@emailjs/browser'

const BlogSubscription = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setStatus('idle')

        try {
            // Send subscription email notification to admin
            await emailjs.send(
                'service_pixeladvant',
                'template_blog_subscription',
                {
                    to_email: 'sonu.rahul4evr@gmail.com',
                    subscriber_email: email,
                    subject: `New Blog Subscriber: ${email}`,
                    message: `A new user has subscribed to blog notifications.`,
                    request_type: 'Blog Subscription'
                }
            )

            // Send confirmation to subscriber
            await emailjs.send(
                'service_pixeladvant',
                'template_confirmation',
                {
                    to_email: email,
                    user_name: 'Subscriber',
                    subject: 'Blog Subscription Confirmed - PixelAdvant',
                    request_type: 'You have successfully subscribed to our blog updates!'
                }
            )

            setStatus('success')
            setEmail('')
            setTimeout(() => setStatus('idle'), 3000)
        } catch (error) {
            console.error('Subscription error:', error)
            setStatus('error')
            setErrorMessage('Failed to subscribe. Please try again.')
            setTimeout(() => setStatus('idle'), 3000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center'
            }}>
                {/* Icon */}
                <div style={{
                    fontSize: '40px',
                    marginBottom: '15px',
                    opacity: 0.9
                }}>
                    <i className="fa-solid fa-bell" />
                </div>

                {/* Title */}
                <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '10px',
                    letterSpacing: '-0.5px'
                }}>
                    Subscribe to Our Blog
                </h3>

                {/* Subtitle */}
                <p style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    marginBottom: '25px',
                    lineHeight: '1.6'
                }}>
                    Get exclusive insights on GCC setup, recruitment strategies, and industry trends delivered to your inbox.
                </p>

                {/* Subscription Form */}
                <form onSubmit={handleSubscribe} style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '8px',
                        marginBottom: '15px'
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                padding: '12px 16px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#ff6b35',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: loading ? 0.7 : 1,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {loading ? (
                                <><i className="fa-solid fa-spinner fa-spin me-2" />Subscribing</>
                            ) : (
                                <><i className="fa-solid fa-paper-plane me-2" />Subscribe</>
                            )}
                        </button>
                    </div>

                    {/* Messages */}
                    {status === 'success' && (
                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderLeft: '4px solid #4ade80',
                            borderRadius: '4px',
                            fontSize: '13px',
                            color: '#ffffff',
                            textAlign: 'left'
                        }}>
                            <i className="fa-solid fa-check me-2" />✓ Successfully subscribed! Check your email for confirmation.
                        </div>
                    )}

                    {status === 'error' && (
                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderLeft: '4px solid #ef4444',
                            borderRadius: '4px',
                            fontSize: '13px',
                            color: '#ffffff',
                            textAlign: 'left'
                        }}>
                            <i className="fa-solid fa-exclamation me-2" />✗ {errorMessage}
                        </div>
                    )}

                    {/* Footer note */}
                    <p style={{
                        fontSize: '12px',
                        opacity: 0.7,
                        marginTop: '12px',
                        marginBottom: '0'
                    }}>
                        <i className="fa-solid fa-shield me-1" /> We respect your privacy. Unsubscribe anytime.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default BlogSubscription
