import { useState } from 'react'
import { sendJobApplicationEmail } from '@/lib/emailConfig'
import { jobListingsData } from './jobListings'

interface JobApplicationFormProps {
    jobId: number;
}

const JobApplicationForm = ({ jobId }: JobApplicationFormProps) => {
    const job = jobListingsData.find(j => j.id === jobId);
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        linkedIn: '',
        resume: null as File | null,
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload a PDF or Word document (DOC/DOCX)');
                return;
            }
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            setFormData(prev => ({ ...prev, resume: file }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        try {
            await sendJobApplicationEmail({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                position: job?.title || 'Job Position',
                experience: formData.experience,
                linkedIn: formData.linkedIn,
                resume: formData.resume?.name || 'No resume uploaded',
            });
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                experience: '',
                linkedIn: '',
                resume: null,
            });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setErrorMessage('Failed to submit application. Please try again.');
            setTimeout(() => setStatus('idle'), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="application-form">
            <h2>Apply Now</h2>
            {job && (
                <div style={{
                    padding: '15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    borderLeft: '4px solid #ff6b35'
                }}>
                    <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                        <strong>Position:</strong> {job.title}
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>
                        <strong>Department:</strong> {job.department}
                    </p>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                        Full Name*
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                            Phone*
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                        Years of Experience*
                    </label>
                    <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15+">15+ years</option>
                    </select>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                        LinkedIn Profile URL
                    </label>
                    <input
                        type="url"
                        name="linkedIn"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                        Upload Resume* (PDF, DOC, DOCX - Max 5MB)
                    </label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                    {formData.resume && (
                        <p style={{ fontSize: '12px', color: '#4CAF50', marginTop: '5px' }}>
                            ✓ {formData.resume.name}
                        </p>
                    )}
                </div>

                {status === 'success' && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        borderRadius: '4px',
                        marginBottom: '15px',
                        fontSize: '14px'
                    }}>
                        ✓ Application submitted successfully! We'll review your profile soon.
                    </div>
                )}

                {status === 'error' && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        borderRadius: '4px',
                        marginBottom: '15px',
                        fontSize: '14px'
                    }}>
                        ✗ {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: loading ? '#ccc' : '#ff6b35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                >
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default JobApplicationForm;
