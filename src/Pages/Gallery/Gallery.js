import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header';
import FooterComponent from '../../Components/FooterComponent';
import TopSection from '../../Components/TopSection';
import '../../assets/scss/gallery.scss';
import GalleryCarousel from './GalleryCarousel'
import '../../assets/scss/Slider.scss';
import axios from 'axios';
import { BaseURL } from '../../constants';




function Gallery() {

    const [gallery, setGallery] = useState([]);

    const fetchAboutData = () => {
        axios.get(`${BaseURL}/pcsir_gallery`).then((response) => {
            console.log(response.data); 
            setGallery(response.data);
        }).catch((err) => {
            console.log(err);
        })  
        }

    useEffect(() => {
        fetchAboutData();
    },[]);
    return (
        <div>
             <TopSection />
             <Header />
                
                {gallery.map((data)=> (
                    <div className="GalleryContainer container">
                        
                    <div className="header">
                        <h2 className="title">{data.gallery_title}</h2>
                    </div>
                    <div className="body">
                    <p className="text">{data.gallery_description}</p>
                    </div>
                   
                    <GalleryCarousel images={data.gallery_image}/>
                </div>
                ))}
                

                
                
             <FooterComponent />
        </div>
    )
}

export default Gallery
