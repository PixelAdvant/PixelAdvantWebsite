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
            backgroundColor: '#f8faff',
            border: '1px solid #dbeafe',
            borderRadius: '14px',
            padding: '40px 36px',
            textAlign: 'center'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#f0eefb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#5b47e0',
                fontSize: '20px'
            }}>
                <i className="fa-solid fa-bell" />
            </div>

            <h3 style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '8px',
                letterSpacing: '-0.02em'
            }}>
                Stay in the loop
            </h3>
            <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.65',
                marginBottom: '24px'
            }}>
                Get exclusive insights on GCC setup, recruitment strategies, and industry trends — delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} style={{ maxWidth: '420px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '12px'
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            flex: 1,
                            padding: '11px 16px',
                            border: '1.5px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '14px',
                            outline: 'none',
                            backgroundColor: '#fff',
                            color: '#111827'
                        }}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '11px 22px',
                            backgroundColor: '#5b47e0',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1,
                            whiteSpace: 'nowrap',
                            transition: 'background 0.2s'
                        }}
                    >
                        {loading ? 'Subscribing…' : 'Subscribe'}
                    </button>
                </div>

                {status === 'success' && (
                    <div style={{
                        padding: '10px 14px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#166534',
                        textAlign: 'left'
                    }}>
                        <i className="fa-solid fa-check me-2" /> Subscribed! Check your inbox for confirmation.
                    </div>
                )}
                {status === 'error' && (
                    <div style={{
                        padding: '10px 14px',
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#991b1b',
                        textAlign: 'left'
                    }}>
                        <i className="fa-solid fa-circle-exclamation me-2" /> {errorMessage}
                    </div>
                )}

                <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px', marginBottom: 0 }}>
                    <i className="fa-solid fa-lock me-1" /> No spam. Unsubscribe anytime.
                </p>
            </form>
        </div>
    )
}

export default BlogSubscription
