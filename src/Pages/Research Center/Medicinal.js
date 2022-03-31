import React from 'react'
import FooterComponent from '../../Components/FooterComponent';
import '../../assets/scss/about.scss'
import TopSection from '../../Components/TopSection';

import FooterSlider from '../../Components/FooterSlider'
import Header from '../../Components/Header/Header';
import ImagesSection from '../About/ImagesSection';

import '../../assets/scss/medicinal.scss';
import {Fade} from 'react-reveal';




function Medicinal() {
    return (
        <div>
            <TopSection />
             <Header />
            
                <div className="MainContainer">
                <ImagesSection/>
                    <div className="container about-section">

                        <h1 className="title">Medicinal Botanic Center</h1>

                        <Fade right>
                        <h1 className="subTitle">Main Functions</h1>

                        <ul className="dataList">
                            <li>To undertake experimental cultivation of medicinal and aromatic plants</li>
                            <li>To improve the quality of herbs through genetic/tissue culture techniques.</li>
                            <li>To develop new processes and products based on indigenous plants.</li>
                            <li>To undertake the pharmacological activities of herbs and their products.</li>
                            <li>Pilot plant scale production of herbal products.</li>

                            
                        </ul>
                        </Fade>

                        <Fade right>
                        <h1 className="subTitle">Test Capabilities</h1>

                        <ul className="dataList">
                           <li>Fatty acid components profile.</li>
                           <li>Quantitative analysis of pesticides residues</li>
                           <li>Peroxide, Acid , Iodine and Saponification through taxonomic markers</li>
                           <li>Antimicrobial activities against specific pathogens</li>
                           <li>Pharmacological/Therapeutic Tests</li>
                           <li>Pyrogen/Sterility Test</li>
                           <li>Acute Toxicity Test</li>

                            
                        </ul>
                        </Fade>

                    </div>

                </div>    
                
                <FooterSlider />
             <FooterComponent />
        </div>
    )
}

export default Medicinal
