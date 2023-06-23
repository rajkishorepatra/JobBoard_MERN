import { Button } from '@nextui-org/react'
import React from 'react'

function Content2() {
    return (
        <>
            <div
                className='content1'
                data-aos="fade-in"
                data-aos-duration="2000"
                id='post'
            >
                <div className='cont1-data my-4'>
                    <h5>Looking for an expert for your company?</h5>
                    <h2>Get applications from the world best talents.</h2>
                    <div className='cont1-p'>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.<br /> Override the digital divide with additional clickthroughs from DevOps.</p>
                    </div>
                    <div className='d-flex justify-content-center text-center'>
                        <Button>Post a Job</Button>
                    </div>
                </div>

                <div className='cont1-img'>
                    <img src='https://th.bing.com/th/id/OIG.pyGD1eyDU9URKfETmyt4?pid=ImgGn' alt='' />
                </div>
            </div>
        </>
    )
}

export default Content2