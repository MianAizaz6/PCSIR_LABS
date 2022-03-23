import React from 'react'
import InfoCarousel from './InfoCarousel'
import "../../assets/scss/infosection.scss"
import '../../assets/scss/Slider.scss';

import img1 from "../../assets/Images/industrial-collaboration.png";
import img2 from "../../assets/Images/clinical-trial.png"
import img3 from "../../assets/Images/facility.png"
import img4 from "../../assets/Images/training.png"
import img5 from "../../assets/Images/whos-who.png"
import funnel from '../../assets/Images/funnel.png'
import Activity from '../../assets/Images/activity.jpeg'

function InfoSection() {
  return (
      <div className='container-fluid'>
    <div className='row gx-1 py-3 px-2'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <InfoCarousel/>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h1 className='py-0 display-4 text-center'> Latest Updates</h1>
                    
                    <div className='news-section d-flex flex-column marquee'>

                    <div className='news-block'>Federal Minister of Science and Technology Visit PCSIR Lab Complex </div>
                    <div className='news-block'> Award Distribution Ceremony take place for Gardeners and Sweepers by Director </div>
                    <div className='news-block'>Provincial Minister for Industries KPK visit PCSIR Lab Complex Peshawar </div>
                    <div className='news-block'>Management Committee Meeting on Internal Affairs of PCSIR lab Complex </div>
                    <div className='news-block'>Member Science and Member from Food Technology Visit </div>
                    <div className='news-block'> Member Science and Member from Food Technology Visit</div>

                    </div>
        </div>
        {/* <div className='col-lg-4 col-md-6'>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    CSIR Laboratories
                    <span>
                        <img src={img1} alt="" />
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    E-Booklets
                    <span>
                        <img src={img2} alt="" />
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    CSIR Highlights
                    <span>
                        <img src={img3} alt="" />
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    RTI
                    <span>
                        <img src={img4} alt="" />
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Who's Who
                    <span>
                        <img src={img5} alt="" />
                    </span>
                </li>
            </ul>
        </div> */}
        {/* <div className='col-lg-4  col-md-12'>
                <div className="categories_Section">
                        <div className="cat">
                            <img src={funnel} alt="funnel" />
                            <button>CSIR Technology Showcase</button>
                            
                        </div>
                        <div className="cat">
                            <img src={funnel} alt="funnel" />
                            <button>CSIR Technology Showcase</button>
                            
                        </div>
                        <div className="cat">
                            <img src={funnel} alt="funnel" />
                            <button>CSIR Technology Showcase</button>
                            
                        </div>
                        <div className="cat">
                            <img src={funnel} alt="funnel" />
                            <button>CSIR Technology Showcase</button>
                            
                        </div>
                </div>
        </div> */}
    </div>
        <div className='row'>
            <div className='col-md-12'>
                    <h4 style={{textAlign:'center'}}>Main Activities </h4>
                    <img src={Activity} alt="activity" />
            </div>
        </div>
      </div>
    
  )
}

export default InfoSection