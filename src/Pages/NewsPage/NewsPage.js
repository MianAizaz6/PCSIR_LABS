import React,{useState,useEffect} from 'react'
import { BaseURL } from '../../constants';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import FooterComponent from '../../Components/FooterComponent';
import TopSection from '../../Components/TopSection';
import Header from '../../Components/Header/Header';
import '../../assets/scss/gallery.scss';



function NewsPage() {

        const [SingleNews, setSingleNews] = useState({});
    let params = useParams();

    const fetchNew = () => {
        axios.get(`${BaseURL}/pcsir_news/${params.id}`).then((res)=> {
            console.log(res.data);
            setSingleNews(res.data);
        });
    }
    useEffect(() => {
            fetchNew();
    })


    return (
        <div>
            <TopSection />
             <Header />
             <div className="GalleryContainer container">
             <div className="header">
                <h3 style={{color:'white'}}>{SingleNews.news_title}</h3>

             </div>
             <div className="body">

            <h5>{SingleNews.news_description}</h5>
             </div>
                 </div>

            <FooterComponent />
        </div>
    )
}

export default NewsPage
