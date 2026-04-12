import { useState } from 'react'
import PageTitle from "@/components/sections/pageTitle"
import JobListings from "@/components/sections/jobs/jobListings"
import JobApplicationForm from "@/components/sections/jobs/jobApplicationForm"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const Jobs = () => {
    const [selectedJob, setSelectedJob] = useState<number | null>(null)

    return (
        <>
            <SEO {...pageSEOConfig.careers} />
            <PageTitle currentPage="Jobs" title="Job Openings" />
            <section className="jobs-section fix section-padding">
                <div className="container">
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                        <div style={{ flex: '1 1 50%', minWidth: 0 }}>
                            <JobListings 
                                selectedJobId={selectedJob}
                                onSelectJob={setSelectedJob}
                            />
                        </div>
                        <div style={{ flex: '1 1 50%', minWidth: 0, position: 'sticky', top: '100px' }}>
                            <div style={{ maxHeight: 'calc(100vh - 140px)', overflowY: 'auto', paddingRight: '4px' }}>
                                {selectedJob ? (
                                    <JobApplicationForm jobId={selectedJob} />
                                ) : (
                                    <div style={{ 
                                        padding: '40px', 
                                        backgroundColor: '#f8f9fa', 
                                        borderRadius: '8px',
                                        textAlign: 'center'
                                    }}>
                                        <h3>Select a position to apply</h3>
                                        <p>Choose a job opening from the list to get started with your application.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobs
