import { useState } from 'react'
import PageTitle from "@/components/sections/pageTitle"
import JobListings from "@/components/sections/jobs/jobListings"
import JobApplicationForm from "@/components/sections/jobs/jobApplicationForm"

const Jobs = () => {
    const [selectedJob, setSelectedJob] = useState<number | null>(null)

    return (
        <>
            <PageTitle currentPage="Jobs" title="Job Openings" />
            <section className="jobs-section fix section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <JobListings 
                                selectedJobId={selectedJob}
                                onSelectJob={setSelectedJob}
                            />
                        </div>
                        <div className="col-lg-6">
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
            </section>
        </>
    )
}

export default Jobs
