import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import About from '../Pages/About/About';



function Navigation() {
    return (
       <Router>
           <Routes>
               <Route  path="/home" element={ <Home/>} ></Route>
               <Route path="/About" element={<About />} ></Route>
           </Routes>
       </Router>
    )
}

export default Navigation
