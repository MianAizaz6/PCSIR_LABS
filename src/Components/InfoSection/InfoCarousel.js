import React from 'react'
import img1 from "../../assets/Images/mainImages/2.JPG"
import img2 from "../../assets/Images/mainImages/3.JPG"
import img3 from "../../assets/Images/mainImages/4.jpg"
import img4 from "../../assets/Images/mainImages/5.JPG"
import img5 from "../../assets/Images/mainImages/6.JPG"
import img6 from "../../assets/Images/mainImages/7.JPG"
import img7 from "../../assets/Images/mainImages/8.JPG"
import img8 from "../../assets/Images/mainImages/9.jpg"
import img9 from "../../assets/Images/mainImages/10.JPG"
import img10 from "../../assets/Images/mainImages/11.JPG"
import img11 from "../../assets/Images/mainImages/12.JPG"
import img12 from "../../assets/Images/mainImages/13.JPG"

import '../../assets/scss/Slider.scss';

function InfoCarousel() {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item" >
            <img src={img1} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item active">
            <img src={img7} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img10} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img11} className="d-block w-100  img-fluid" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100  img-fluid" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
</div>
    </div>
  )
}

export default InfoCarousel