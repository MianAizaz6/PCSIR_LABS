import React from 'react';
import '../assets/scss/topsection.scss';
// import AvatarLogo from '../assets/Images/mainImages/ChairmanPCSIR.jpeg';
// import DGLogo from '../assets/Images/dg-logo.jpeg'
import { Fade } from 'react-reveal';
 




function Team({team}) {
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-1"></div>
                        {team.map((data) => {

                            return(
                                <div className="col-md-6 col-lg-5 col-sm-12">
                                <Fade left>
                                    <div className="teamCard d-flex justify-content-center">
                                       <div className='image-team'>
                                        <img src={data.team_image} alt="avatar logo" />
                                       </div>
                                       <div>
                                           <h4>{data.team_name}</h4>
                                           <p style={{fontSize:'1rem', fontWeight:'700'}}>{data.tem_role} </p>
                                       </div>
                                        
                                    </div>
                                </Fade>
                                </div>
                            )

                        })}

                   
                    {/* <div className="col-md-6 col-lg-5 col-sm-12">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Team