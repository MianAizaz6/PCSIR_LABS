import React from 'react'
import InfoCarousel from './InfoCarousel'
import "../../assets/scss/infosection.scss"
import '../../assets/scss/Slider.scss';
import { Zoom } from 'react-reveal';

// import img1 from "../../assets/Images/industrial-collaboration.png";
// import img2 from "../../assets/Images/clinical-trial.png"
// import img3 from "../../assets/Images/facility.png"
// import img4 from "../../assets/Images/training.png"
// import img5 from "../../assets/Images/whos-who.png"
// import funnel from '../../assets/Images/funnel.png'
import Activity from '../../assets/Images/activity.jpeg'

function InfoSection() {
  return (
      <div className='container-fluid'>
    <div className='row gx-1 py-3 px-2'>
        <div className='col-lg-12 col-md-6 col-sm-12'>
            <InfoCarousel/>
            {/* <GalleryCarosel /> */}
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
        <div className='row gx-0'>
            <div className='col-md-12 text-center py-4'>
                    <h4 style={{textAlign:'center'}}>Main Activities </h4>
                    <Zoom right>

                    <img className='img-fluid' src={Activity} alt="activity" />
                    </Zoom>
            </div>
        </div>
      </div>
    
  )
}

export default InfoSection