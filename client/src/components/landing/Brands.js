import React from "react";

import imgB1 from "../../img/brand-logo-1.png";
import imgB2 from "../../img/brand-logo-2.png";
import imgB3 from "../../img/brand-logo-3.png";
import imgB4 from "../../img/brand-logo-4.png";
import imgB5 from "../../img/brand-logo-5.png";
import imgB6 from "../../img/brand-logo-6.png";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="brands" id="comp">
        <div className="title mb-9 text-center text-lg-left">
          <h5 className="font-size-5 font-weight-normal">
            Get hired in top companies
          </h5>
        </div>
        {/* <!-- Brand Logos --> */}
        <div className="logos">
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <img src={imgB1} alt="" />
          </div>
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <img src={imgB2} alt="" />
          </div>
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="800"
          >
            <img src={imgB3} alt="" />
          </div>
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="1100"
          >
            <img src={imgB4} alt="" />
          </div>
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="1400"
          >
            <img src={imgB5} alt="" />
          </div>
          {/* <!-- Single Brand --> */}
          <div
            className="single-brand-logo"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="1700"
          >
            <img src={imgB6} alt="" />
          </div>
        </div>
        {/* <!-- End Brand Logos --> */}
      </div>
    </>
  );
};

export default Brands;
