import React from 'react'
import FooterComponent from '../Components/FooterComponent';

import TopSection from '../Components/TopSection';

import Header from '../Components/Header/Header';
import '../assets/scss/contact.scss';
import Phone from '../assets/Images/phone.png'
import Pulse from 'react-reveal/Pulse';






function ContactUs() {
    return (
        <div>
            <TopSection />
             <Header />
            <div className="contact-container">

                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Pulse right>

                            <div className="card">
                                <img className="logo" src={Phone} alt="logo" />
                                <h4>Phone & Whatsapp</h4>
                                <h6>2314123412341</h6>
                                <h6>2314123412341</h6>

                            </div>
                            </Pulse>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Pulse right>

                            <div className="card-center">
                                <img className="logo" src={Phone} alt="logo" />
                                <h4>Phone & Whatsapp</h4>
                                <h6>2314123412341</h6>
                                <h6>2314123412341</h6>

                            </div>
                            </Pulse>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Pulse right>

                            <div className="card">
                                <img className="logo" src={Phone} alt="logo" />
                                <h4>Phone & Whatsapp</h4>
                                <h6>2314123412341</h6>
                                <h6>2314123412341</h6>

                            </div>
                            </Pulse>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="container p-4">
                    <h1>Contact Us</h1>
                    <div className="row mt-3">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                           
                                            <input type="text" name="" id="name" className="form-control field" placeholder="name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                         
                                            <input type="text" name="" id="name" className="form-control field" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                          
                                            <input type="text" name="" id="name" className="form-control field" placeholder="web"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="" id="name" className="form-control field" placeholder="Residential Bussines" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                        <div className="col-md-12">
                                        <textarea name="" id="" cols="10" rows="5" placeholder="Mesaage" className="form-control"></textarea>

                                        </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4 ms-auto">
                                          
                                          <div className="form-group">
                                          <button className="message-btn btn btn-primary">Send Message</button>
                                          </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="info">
                                <h2><span style={{color:'skyblue'}}> <i className="fa fa-location"></i> </span> Location</h2>
                                    <p className="text">Peshawar, Pakistan</p>
                                <h2><span style={{color:'skyblue'}}> <i className="fa fa-location"></i> </span> Location</h2>
                                    <p className="text">Peshawar, Pakistan</p>
                                <h2><span style={{color:'skyblue'}}> <i className="fa fa-location"></i> </span> Location</h2>
                                    <p className="text">Peshawar, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="row">
                    <div className="col-md-12">
                    <div class=" mapouter">
                                <div class="gmap_canvas"><iframe title="googleMaps" class="gmap_iframe" frameborder="0" scrolling="no"
                                        marginheight="0" marginwidth="0" 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.571207267025!2d71.39425151449385!3d34.05486878060515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9128a29517549%3A0x6412aff43881495a!2sWarsak%20Dam%20Rd%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1648711583876!5m2!1sen!2s"></iframe><a
                                        href="https://www.fridaynightfunkin.net/">FNF Download</a></div>
                            </div>
                    </div>
                </div>   
            </div>
                
               
             <FooterComponent />
        </div>
    )
}

export default ContactUs
