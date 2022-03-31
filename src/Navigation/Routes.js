import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import About from '../Pages/About/About';
import EngeneeringServiceCenter from '../Pages/ENG-Service-Center/EngineeringServiceCenter';
import Medicinal from '../Pages/Research Center/Medicinal';
import ContactUs from '../Pages/ContactUs';
import Gallery from '../Pages/Gallery/Gallery';



function Navigation() {
    return (
       <Router>
           <Routes>
               <Route  path="/" element={<Home/>}></Route>
               <Route path="/About" element={<About />} ></Route>
               <Route path="/engineering-service-center" element={<EngeneeringServiceCenter/>} ></Route>
               <Route path="/medicinal-botanical-lab" element={<Medicinal />} ></Route>
               <Route path="/contact-us" element={<ContactUs />}></Route>
               <Route path="/gallery"  element={<Gallery />} ></Route>
           </Routes>
       </Router>
    )
}

export default Navigation
