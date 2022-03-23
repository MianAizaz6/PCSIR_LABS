import React from 'react';
import mail from '../assets/Images/web-mail.png'
import career from '../assets/Images/career.png';
import enterprise from '../assets/Images/enterprise.png';
import network from '../assets/Images/network-icon.png'


function Services() {
    return (
        <div>
            <div className="mainBg">
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-3 col-sm-6 service">
                            <img src={mail} alt="" />
                            <h5 style={{color:'white'}}>Web Mail</h5>
                        </div>
                        
                        <div className="col-md-3 col-sm-6 service">
                            <img src={enterprise} alt="" />
                            <h5 style={{color:'white'}}>CSRI Enterprise</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 service">
                            <img src={network} alt=""  height="50px"/>
                            <h5 style={{color:'white'}}>CSIR Lab & Units</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 service">
                            <img src={career} alt="" />
                            <h5 style={{color:'white'}}>Career % Opportunities</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
