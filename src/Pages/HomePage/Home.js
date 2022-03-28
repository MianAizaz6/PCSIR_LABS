import React from 'react'
import TopSection from '../../Components/TopSection';
import Header from '../../Components/Header/Header';
import Team from '../../Components/Team';
import LabComponent from '../../Components/LabComponent';
import FooterComponent from '../../Components/FooterComponent';
import IframeSection from '../../Components/Iframes/IframeSection';
import InfoSection from '../../Components/InfoSection/InfoSection';
import Slider from '../../Components/Slider'

function Home() {
    return (
        <div>
        <TopSection />
       <Header />
            <Slider />
                <Team />
            
                <LabComponent/>
                <IframeSection/>
                <InfoSection/>
            
        <FooterComponent />
        </div>
    )
}

export default Home
