import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import About from '../Pages/About/About';
import Medicinal from '../Pages/Research Center/Medicinal';



function Navigation() {
    return (
       <Router>
           <Routes>
               <Route  path="/home" element={ <Home/>} ></Route>
               <Route path="/About" element={<About />} ></Route>
               <Route path="/medicinal-botanical-lab" element={<Medicinal />} ></Route>
           </Routes>
       </Router>
    )
}

export default Navigation
