import React from 'react'
import '../css/joblisting.css'
import JobCard from '../components/joblisting/JobCard'

function JobListing() {
    return (
        <>
            <div className='jobList'>
                <div className='head text-white'>
                    <h1 className='pt-xl-3 pt-5'>Find Your Job</h1>
                </div>
                <div className='job-grid mt-4'>
                    <div className='job-card m-3'>
                        <JobCard />
                    </div>

                    <div className='job-card m-3'>
                        <JobCard />
                    </div>

                    <div className='job-card m-3'>
                        <JobCard />
                    </div>

                    <div className='job-card m-3'>
                        <JobCard />
                    </div>

                    <div className='job-card m-3'>
                        <JobCard />
                    </div>

                    <div className='job-card m-3'>
                        <JobCard />
                    </div>
                </div>
            </div>

            <footer className="d-flex flex-wrap justify-content-center py-3 border-top mt-4">
                <p className="col-md-4 mb-0 text-center text-body-secondary mx-auto">&copy; 2023 Company, Inc</p>
            </footer>
        </>
    )
}

export default JobListing