import React from 'react'
import About1 from '../../assets/Images/about1.jpeg'
import About2 from '../../assets/Images/about2.jpeg'
import About3 from '../../assets/Images/about3.jpeg'
import About4 from '../../assets/Images/about4.jpeg'
import About5 from '../../assets/Images/about5.jpeg'
import About6 from '../../assets/Images/about6.jpeg'
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
