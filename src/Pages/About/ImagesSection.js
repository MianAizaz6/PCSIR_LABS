import React from 'react'
import About1 from '../../assets/Images/about1.jpeg'


import '../../assets/scss/about.scss'


function ImagesSection() {
    return (
        <div>
             <div className="row gx-0">
                 <div className="col-lg-2 col-md-3 col-sm-6">
                 <img src={About1} alt="about1" className="imageFluid" />
                 </div>
                
                    
             </div>
        </div>
    )
}

export default ImagesSection
