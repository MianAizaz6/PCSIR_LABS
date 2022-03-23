import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FooterSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 150,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]

    };
  return (
      <div className='row gx-0 px-lg-4 my-4'>
        <Slider {...settings}>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/mygov.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/aarogyapath1.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/pg-portal_0.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/cyber.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/Integrity_Pledge_1_0.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/services_portal.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/img-1.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/img-3.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/img-4.png" alt="" />
            </div>
            <div>
                <img src="https://www.csir.res.in/sites/default/files/india-gov_0.png" alt="" />
            </div>
        </Slider>
      </div>
  )
}

export default FooterSlider