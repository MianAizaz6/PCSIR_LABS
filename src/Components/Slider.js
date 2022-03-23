import React from 'react'
import '../assets/scss/Slider.scss';
import video from '../assets/Images/Website_Banner.mp4'

function Slider() {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="background">
                            <div className="content">             
                            <video id="video_player" loop autoPlay muted>
                                    <source
                                    src={video}
                                    type="video/mp4"
                                    />
                            </video>
                            </div>
                    </div>

                </div>
                {/* <div className='col-lg-4'>
                   
                </div> */}
            </div>
        </div>
    )
}

export default Slider
