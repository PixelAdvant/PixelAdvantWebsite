import { useState } from 'react';
import { api } from '@/lib/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        try {
            await api.post('/contact', {
                ...formData,
                subject: 'New Client Request - ' + formData.name,
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
            setTimeout(() => setStatus('idle'), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-content">
            <h2>We'd Love to Hear From You!</h2>
            <p>
                Have a question about our services or want to discuss your GCC requirements? Get in touch with our team.
            </p>
            <form onSubmit={handleSubmit} className="contact-form-items">
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Your name*</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Your Email*</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".6">
                        <div className="form-clt">
                            <span>Phone Number</span>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Company Name</span>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                placeholder="Your Company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".8">
                        <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Write Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    {status === 'success' && (
                        <div className="col-lg-12 wow slideUp" data-delay=".9">
                            <div style={{ padding: '12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
                                ✓ Message sent successfully! We'll get back to you soon.
                            </div>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="col-lg-12 wow slideUp" data-delay=".9">
                            <div style={{ padding: '12px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
                                ✗ {errorMessage}
                            </div>
                        </div>
                    )}
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;