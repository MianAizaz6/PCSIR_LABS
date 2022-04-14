import React , {useState,useEffect} from 'react'
import TopSection from '../../Components/TopSection';
import Header from '../../Components/Header/Header';
import Team from '../../Components/Team';
import LabComponent from '../../Components/LabComponent';
import FooterComponent from '../../Components/FooterComponent';
import IframeSection from '../../Components/Iframes/IframeSection';
import InfoSection from '../../Components/InfoSection/InfoSection';
import Slider from '../../Components/Slider';
import axios from 'axios';
import { BaseURL } from '../../constants';



function Home() {
    const [team, setTeam] = useState([]);
    const [lab, setLab] = useState([]);
    const [news, setNews] = useState([]);
    const [slide, setSlider] = useState([]);
    const [center, setCenter] = useState([]);


    const showTeam = () => {
        axios.get(`${BaseURL}/pcsir_team`).then((response) => {
            console.log(response.data+'data'); 
            setTeam(response.data);
        }).catch((err) => {
            console.log(err);
        })  
        }

    const showLabs = () => {
        axios.get(`${BaseURL}/pcsir_lab`).then((res)=> {
            console.log(res.data);
            setLab(res.data);
        })
    }
    const fetchNew = () => {
        axios.get(`${BaseURL}/pcsir_news`).then((res)=> {
            console.log(res.data);
            setNews(res.data);
        });
    }

    const fetchSlider = () => {
        axios.get(`${BaseURL}/pcsir_slider`).then((res)=> {
            console.log(res.data);
            setSlider(res.data);
        });
    }
    const fetchCenter = () => {
        axios.get(`${BaseURL}/pcsir_research`).then((res)=> {
            console.log(res.data);
            setCenter(res.data);
        });
    }
       
        
        useEffect(() => {
           
            showTeam();
            showLabs();
            fetchNew();
            fetchSlider();
            fetchCenter();
            
        }, [])
    return (
        <div>
        <TopSection />
         <Header />
            <Slider />
                <Team  team={team} />
            
                <LabComponent lab={lab}/>
                <IframeSection news={news}/>
                <InfoSection slide={slide}/>

            
        <FooterComponent />
        </div>
    )
}

export default Home
