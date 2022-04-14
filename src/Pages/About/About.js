import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header';
import FooterComponent from '../../Components/FooterComponent';
import '../../assets/scss/about.scss'
import TopSection from '../../Components/TopSection';
import ImagesSection from './ImagesSection';
import FooterSlider from '../../Components/FooterSlider'
import axios from 'axios';
import { BaseURL } from '../../constants';



function About() {

    const [about, setAbout] = useState([]);

    const fetchAboutData = () => {
        axios.get(`${BaseURL}/pcsir_about`).then((response) => {
            console.log(response.data); 
            setAbout(response.data);
        }).catch((err) => {
            console.log(err);
        })  
        }

    useEffect(() => {
        fetchAboutData();
    },[]);
    return (
        <div>
            <TopSection />
             <Header />
                
                    
                <div className="MainContainer">
                <ImagesSection/>
                    <div className="container about-section">
                        {about.map((data)=> (
                            <div>
                                <h3>{data.about_title}</h3>
                                <p className="text"  dangerouslySetInnerHTML={{__html:data.about_discription}}></p>
                            </div>
                        ))}
                    {/* <h1 className="title">{AboutData.Heading}</h1>
                    <p className="text">{AboutData.p1}</p>
                    <p className="text">{AboutData.p2}</p>
                    <p className="text">{AboutData.p3}</p>
                    <p className="text">{AboutData.p4}</p>
                    <p className="text">{AboutData.p5}</p> */}

                    </div>

                </div>
                <FooterSlider />
             <FooterComponent />
            
        </div>
    )
}

export default About
