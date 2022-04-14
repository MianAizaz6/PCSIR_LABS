import React from 'react';
import { Fade } from 'react-reveal';
// import logoDNA from '../assets/Images/biological.png'


function LabComponent({lab}) {
    return (
        <div className="labContainer">
            <div className="container p-3">
                <h3 style={{color:'white', textAlign:'center'}}>PCSIR LABS-CLUSTERWISE</h3>
                
               <div className="cardContainer mt-4 pb-2">

                {
                    lab.map((data)=> {
                        return(
                    <Fade top>

                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={data.lab_image} alt="" />                 
                        </div>
                       
                        <h1>{data.lab_number}</h1>
                        <h5>{data.lab_name}</h5>
                    </div>
                   </Fade>
                         
                        )
                    })
                }

               </div>
            </div>
           
        </div>
    )
}

export default LabComponent
