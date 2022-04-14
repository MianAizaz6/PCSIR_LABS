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

function InfoSection({slide}) {
  return (
      <div className='container-fluid'>
    <div className='row gx-1 py-3 px-2'>
        <div className='col-lg-12 col-md-6 col-sm-12'>
            <InfoCarousel slider={slide}/>
            {/* <GalleryCarosel /> */}
        </div>
        
        
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