import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import About from '../Pages/About/About';
import EngeneeringServiceCenter from '../Pages/ENG-Service-Center/EngineeringServiceCenter';



function Navigation() {
    return (
       <Router>
           <Routes>
               <Route  path="/" element={<Home/>}></Route>
               <Route path="/About" element={<About />} ></Route>
               <Route path="/engineering-service-center" element={<EngeneeringServiceCenter/>} ></Route>
           </Routes>
       </Router>
    )
}

export default Navigation
