export const jobListingsData = [
    {
        id: 1,
        title: 'Senior Talent Acquisition Specialist',
        department: 'Talent Solutions',
        experience: '5+ years',
        location: 'Bangalore, India',
        type: 'Full Time',
        description: 'We are looking for an experienced talent acquisition professional to lead our recruiting efforts and build high-performing teams.',
        requirements: [
            'Strong recruitment and sourcing experience in tech talent',
            'Experience with AI-powered recruitment tools',
            'History of building diverse and inclusive teams',
            'Excellent communication and negotiation skills',
            'Bachelor\'s degree in HR or related field'
        ]
    },
    {
        id: 2,
        title: 'GCC Operations Manager',
        department: 'Operations',
        experience: '7+ years',
        location: 'Mumbai, India / New Jersey, USA',
        type: 'Full Time',
        description: 'Lead and manage Global Capability Center operations, ensuring efficient service delivery and client satisfaction.',
        requirements: [
            'Experience managing GCC or large-scale operations',
            'Strong project management and process optimization skills',
            'Knowledge of ITES and BPM industry',
            'Leadership experience with diverse teams',
            'MBA or equivalent experience'
        ]
    },
    {
        id: 3,
        title: 'AI/ML Engineer - Talent Analytics',
        department: 'Technology',
        experience: '3+ years',
        location: 'Bangalore, India',
        type: 'Full Time',
        description: 'Build and maintain our AI-powered talent acquisition platform using machine learning and data analytics.',
        requirements: [
            'Strong Python and machine learning experience',
            'Experience with NLP and data science',
            'Familiarity with talent/HR tech domain',
            'Cloud platform experience (AWS/Azure)',
            'Strong problem-solving skills'
        ]
    },
    {
        id: 4,
        title: 'Business Development Manager',
        department: 'Sales',
        experience: '4+ years',
        location: 'New Jersey, USA',
        type: 'Full Time',
        description: 'Drive business growth by developing new client relationships and expanding our GCC services in North America.',
        requirements: [
            'Proven track record in B2B sales',
            'Experience selling GCC/staffing services',
            'Strong networking and relationship building skills',
            'Knowledge of talent acquisition market',
            'Bachelor\'s degree required'
        ]
    },
    {
        id: 5,
        title: 'HR Business Partner',
        department: 'Human Resources',
        experience: '4+ years',
        location: 'Bangalore, India',
        type: 'Full Time',
        description: 'Support organizational growth through strategic HR initiatives, employee development, and organizational effectiveness.',
        requirements: [
            'Experience as HRBP in relevant environment',
            'Strong understanding of labor laws',
            'Excellent communication and facilitation skills',
            'Experience with talent management systems',
            'Bachelor\'s degree in HR/related field'
        ]
    },
    {
        id: 6,
        title: 'Solutions Consultant',
        department: 'Customer Success',
        experience: '3+ years',
        location: 'New Jersey, USA / India',
        type: 'Full Time',
        description: 'Work directly with clients to understand their GCC needs and recommend optimal solutions from our service portfolio.',
        requirements: [
            'Experience in consulting or solutions role',
            'Strong analytical and presentation skills',
            'Knowledge of HR/talent management processes',
            'Excellent client management skills',
            'Bachelor\'s degree required'
        ]
    },
];

interface JobListingsProps {
    selectedJobId: number | null;
    onSelectJob: (jobId: number) => void;
}

const JobListings = ({ selectedJobId, onSelectJob }: JobListingsProps) => {
    return (
        <div className="job-listings">
            <h2 style={{ marginBottom: '24px' }}>Open Positions</h2>
            <div className="listings-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {jobListingsData.map((job) => (
                    <div
                        key={job.id}
                        className={`job-card ${selectedJobId === job.id ? 'active' : ''}`}
                        onClick={() => onSelectJob(job.id)}
                        style={{
                            padding: '20px',
                            border: selectedJobId === job.id ? '2px solid #ff6b35' : '1px solid #ddd',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backgroundColor: selectedJobId === job.id ? '#fff5f0' : '#fff'
                        }}
                    >
                        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{job.title}</h4>
                        <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '10px 0' }}>
                            <span>📍 {job.location}</span>
                            <span>👔 {job.type}</span>
                            <span>⏳ {job.experience}</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#777', margin: '8px 0 0 0' }}>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;
