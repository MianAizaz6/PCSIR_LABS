import React from 'react'
import "../assets/scss/footer.scss"

function FooterComponent() {
    return (
        <div className='bg-dark footer p-3'>
            <div className='container pt-3'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <p style={{color:'white',fontWeight:'600',fontSize:'1.3rem'}}>PLC Information </p>
                  
                  
                    <p style={{color:'white',fontWeight:'600',fontSize:'0.8rem'}}>PCSIR laboratories Complex Jamrud Road Peshawar</p>
                    <p  className='footer-text'>
                    Phone: +92-91-9221400
                    </p>
                    <p  className='footer-text'>
                    Email: pcsirplc@gmail.com
                    </p>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                <p style={{color:'white',fontWeight:'600',fontSize:'1.3rem'}}>Employee Login </p>
                  
                  
                    <p  className='footer-text'>For Login Click <a href="##">Here</a></p>
                   
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                <p style={{color:'white',fontWeight:'600',fontSize:'1.3rem'}}>Senior Management  </p>
                  
                  
                    <p  className='footer-text'>Engr. Adnan Akram, Chairman </p>
                    <p  className='footer-text'>
                    Dr. Javed Abbas, Director P&D
                    </p>
                    <p  className='footer-text'>
                    Dr. Muhammad Qaiser, HOC MBC 
                    </p>
                    <p  className='footer-text'>
                    Engr. Ahmad Ali, HOC DSC
                    </p>
                    <p  className='footer-text'>
                    Engr. Muhammad Younas, HOC ESC
                    </p>
                    <p  className='footer-text'>
                    Mr. Amin Ur Rehman, HOC MSC
                    </p>
                    <p  className='footer-text'>
                    Dr. Arshid Hussain, HOC FTC
                    </p>
                    <p  className='footer-text'>
                    Dr. Mushtaq Ur Rehman, HOC CC
                    </p>
                    <p  className='footer-text'>
                    Mr. Khurshid Aslam, Senior Admin Ofiicer
                    </p>
                    <p  className='footer-text'>
                    Mr. Nasim Jan Khalil, Incharge MIS 
                    </p>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                <p style={{color:'white',fontWeight:'600',fontSize:'1.3rem'}}>Our Units </p>
                <p style={{color:'white',fontWeight:'600',fontSize:'1rem'}}>PSTC </p>
                <p style={{color:'white',fontWeight:'600',fontSize:'1.3rem'}}>Feedback </p>

                <form>
                    <input className='textField'  type="text" placeholder="Enter Email" />
                    <textarea className='textArea'  type="text" cols={31} rows={4}  placeholder="Your Message"/>
                    <button className='submitButton'>Send Message</button>              
                </form>
                  
                   
                </div>
            </div>
            </div>
            {/* <ul className='d-flex flex-wrap'>
                <li> <a href="##">Website Policies</a></li>
               
                <li> <a href="##">Feedback</a></li>
                <li> <a href="##">Web Information Manager</a></li>
                <li> <a href="##">Contact Us</a></li>
                <li> <a href="##">Disclaimer</a></li>
                <li> <a href="##">Public Grievances</a></li>
                <li> <a href="##">Forms</a></li>
                <li> <a href="##">Terms & Condition</a></li>
                <li> <a href="##">Sports Promotion Board</a></li>
                <li> <a href="##">Tenders</a></li>
                <li> <a href="##">CSIR Directory</a></li>
                <li> <a href="##">Notifications</a></li>
                <li> <a href="##">Knowledge Resource Center</a></li>
                <li> <a href="##">Archival Section</a></li>
                <li> <a href="##">FAQS</a></li>
            </ul> */}
            {/* <div className='bottom-footer d-flex justify-content-center align-items-center text-light'>
            Website Content Managed by Council of Scientific & Industrial Research
            Designed and Hosted by <a href="##"> Council of Scientific & Industrial Research ( CSIR ) </a>
            Last Updated: 15 Mar 2022
            </div> */}
        </div>
    )
}

export default FooterComponent
