import React from 'react';
import '../assets/scss/topsection.scss';
import AvatarLogo from '../assets/Images/mainImages/ChairmanPCSIR.jpeg';
import DGLogo from '../assets/Images/dg-logo.jpeg'
import { Fade } from 'react-reveal';





function Team() {
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-1"></div>
                        
                    <div className="col-md-6 col-lg-5 col-sm-12">
                    <Fade left>
                        <div className="teamCard d-flex justify-content-center">
                           <div className='image-team'>
                            <img src={AvatarLogo} alt="avatar logo" />
                           </div>
                           <div>
                               <h4>Dr. Syed Hussain Abidi</h4>
                               <p style={{fontSize:'1rem', fontWeight:'700'}}>Chairman PCSIR </p>
                           </div>
                            
                        </div>
                    </Fade>
                    </div>
                    <div className="col-md-6 col-lg-5 col-sm-12">
                        <Fade right>

                            <div className="teamCard d-flex justify-content-center ">
                            <div className='image-team'>
                                <img src={DGLogo} alt=""  />
                            </div>
                            <div>
                                <h4>Engr. Adnan Akram</h4>
                                <p style={{fontSize:'1rem', fontWeight:'700'}}>Director General PCSIR Lab <br/> Complex Peshawar </p>
                            </div>
                                
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team