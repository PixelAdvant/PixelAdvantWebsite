import { useState } from 'react';
import { sendDemoRequestEmail } from '@/lib/emailConfig';
import './demoRequestModal.scss';

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceInterest: 'smart-talent-acquisition',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        try {
            await sendDemoRequestEmail(formData);
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                companyName: '',
                serviceInterest: 'smart-talent-acquisition',
                message: '',
            });
            setTimeout(() => {
                onClose();
                setStatus('idle');
            }, 2000);
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose} />
            <div className="demo-request-modal">
                <div className="modal-header-section">
                    <button className="modal-close" onClick={onClose}>
                        <i className="fa-solid fa-times" />
                    </button>
                    <h2>Request a Product Demo</h2>
                    <p>Schedule a personalized demo of our AI-led talent acquisition platform</p>
                </div>

                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Your Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone*</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Company Name*</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Your Company"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Service Interest*</label>
                            <select
                                name="serviceInterest"
                                value={formData.serviceInterest}
                                onChange={handleChange}
                            >
                                <option value="smart-talent-acquisition">Smart Talent Acquisition</option>
                                <option value="ai-talent-supply">AI Led Talent Supply</option>
                                <option value="talent-management">Talent Management</option>
                                <option value="managed-services">Managed Services</option>
                                <option value="consulting">Consulting & Advisory</option>
                                <option value="all-services">All Services</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Additional Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell us more about your requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>

                        {status === 'success' && (
                            <div className="alert alert-success">
                                ✓ Demo request submitted! We'll contact you shortly.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="alert alert-error">
                                ✗ Error submitting request. Please try again.
                            </div>
                        )}

                        <button type="submit" className="theme-btn" disabled={loading}>
                            <span>{loading ? 'Submitting...' : 'Request Demo'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DemoRequestModal;
