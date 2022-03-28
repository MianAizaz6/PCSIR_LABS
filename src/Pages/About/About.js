import React from 'react'
import Header from '../../Components/Header/Header';
import FooterComponent from '../../Components/FooterComponent';
import '../../assets/scss/about.scss'
import TopSection from '../../Components/TopSection';
import ImagesSection from './ImagesSection';
import FooterSlider from '../../Components/FooterSlider'


import {AboutData} from './AboutData';

function About() {
    return (
        <div>
            <TopSection />
             <Header />
                
                    
                <div className="MainContainer">
                <ImagesSection/>
                    <div className="container about-section">
                    <h1 className="title">{AboutData.Heading}</h1>
                    <p className="text">{AboutData.p1}</p>
                    <p className="text">{AboutData.p2}</p>
                    <p className="text">{AboutData.p3}</p>
                    <p className="text">{AboutData.p4}</p>
                    <p className="text">{AboutData.p5}</p>

                    </div>

                </div>
                <FooterSlider />
             <FooterComponent />
            
        </div>
    )
}

export default About
