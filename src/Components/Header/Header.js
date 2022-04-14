import React from 'react'
import ListItems from './ListItems'
import "../../assets/scss/header.scss"
import { HeaderData } from './HeaderData';
import HoverList from './HoverList';




function Header({centers}) {

    return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"><i class="fa fa-bars" style={{color:'white',cursor:'pointer'}} aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul 
                      className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">

                        <ListItems content="Home" link={""}/>
                        <ListItems content="ABOUT US" link={"About"}/>
                        <ListItems content="Research Centers" >
                            <HoverList dataArray={["Home", "Something","Hello world"]}/>
                        </ListItems>
                        <ListItems content="R & D ACTIVITIES" link={"About"}/>
                        <ListItems content="Services" link={"About"}/>
                        <ListItems content="Gallery" link={"Gallery"}/>
                        <ListItems content="Contact Us" link={"Contact-us"}/>

                        {/* {
                          HeaderData.map((item, index) => (
                            <ListItems data={item} />
                          ))
                        } */}
                    </ul>
                </div>
            </div>
          </nav>      
        </div>
    )
}

export default Header
