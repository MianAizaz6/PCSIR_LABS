import React from 'react'
import Header from '../../Components/Header/Header';
import FooterComponent from '../../Components/FooterComponent';
import TopSection from '../../Components/TopSection';
import InfoCarousel from '../../Components/InfoSection/InfoCarousel';
import '../../assets/scss/gallery.scss'




function Gallery() {
    return (
        <div>
             <TopSection />
             <Header />
                
                    
                <div className="GalleryContainer container">
             
                    <div className="header">
                        <h2 className="title">75 of staff of PCSIR successfully completed Microsoft Excel training..</h2>
                    </div>
                    <div className="body">
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem tempora iste adipisci unde dolores explicabo, libero similique veritatis aliquid.</p>
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio dolorum maxime necessitatibus consequuntur, voluptates, voluptatum aut, nulla enim asperiores 
                            aliquid cumque sequi. Consequuntur necessitatibus error tenetur! Natus sapiente quibusdam sit a laudantium qui eaque itaque, deleniti reiciendis aliquam autem!</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque minima, sequi iste labore itaque a, magnam delectus perferendis voluptatum optio aliquid? 
                            Exercitationem cupiditate, iusto tempora excepturi quidem consequatur. Laudantium, numquam nihil recusandae ullam explicabo consectetur tempore at. Id dolore explicabo ut delectus fuga magnam provident aliquam mollitia exercitationem illum.</p>
                    </div>
                    <InfoCarousel/>
                </div>

                <div className="GalleryContainer container">
             
                    <div className="header">
                        <h2 className="title">75 of staff of PCSIR successfully completed Microsoft Excel training..</h2>
                    </div>
                    <div className="body">
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem tempora iste adipisci unde dolores explicabo, libero similique veritatis aliquid.</p>
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio dolorum maxime necessitatibus consequuntur, voluptates, voluptatum aut, nulla enim asperiores 
                            aliquid cumque sequi. Consequuntur necessitatibus error tenetur! Natus sapiente quibusdam sit a laudantium qui eaque itaque, deleniti reiciendis aliquam autem!</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque minima, sequi iste labore itaque a, magnam delectus perferendis voluptatum optio aliquid? 
                            Exercitationem cupiditate, iusto tempora excepturi quidem consequatur. Laudantium, numquam nihil recusandae ullam explicabo consectetur tempore at. Id dolore explicabo ut delectus fuga magnam provident aliquam mollitia exercitationem illum.</p>
                    </div>
                    <InfoCarousel/>
                </div>
                
             <FooterComponent />
        </div>
    )
}

export default Gallery
