import React from 'react'
import imgP from '../../img/globe.png'
import imgH from '../../img/hero-img.png'


function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <img src={imgP} alt="" />
        </div>

        <div className="hero-text">
          <div
            className=""
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h1 className="">
              Find the perfect job that you deserve.
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="hero-text-img">
              <img src={imgH} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero