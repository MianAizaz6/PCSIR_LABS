import React,{Fragment} from 'react';
import '../assets/scss/topsection.scss';
import Logo from '../assets/Images/mainImages/PCSIRlogo.png'
import Logo1 from '../assets/Images/mini.png'

function TopSection() {
  return (
      <Fragment>
        <div className="container-fluid bg-grey">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                            <div className="col-md-6 ms-auto col-sm-10">
                                <ul className="top__section mb-0" style={{display:'flex',justifyContent:'flex-end'}}>
                                    <li>Employer Conrner</li>
                                   

                                </ul>
                            </div>
                            
                    </div>
                    
            </div>
        </div>
        <div className="container-fluid">
            <div className="">
                   
                    <div className="row p-2" style={{display:'flex', justifyContent:'flex-start'}}>
                        <div className="col-md-6 sm-12 lg-6">
                            <div className="logo-section">
                                <img src={Logo} alt=""/>
                                <p style={{fontWeight:'500', marginTop:'10px'}}>
                                PCSIR Laboratories Complex, Peshawar
</p>
                            </div>
                        </div>
                        <div className="col-md-6 sm-12 md-6" style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                            <div className="logos ">
                                <a href="##"><img className='img-fluid' src={Logo1} alt="Logo" /></a>
                               
                                
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </Fragment>
  )
}

export default TopSection
