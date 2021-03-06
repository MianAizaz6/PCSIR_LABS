import React from 'react';
import { Link } from 'react-router-dom';



function IframeSection({news}) {
  return (
    <div className='row gx-0 mt-4'>
        {/* <div className="col-lg-1"></div> */}
        <div className='col-lg-5 col-md-5 col-sm-12 p-0 me-3'> 
        <div className='iframe-div'>
        <div>
          <span>
            Facebook
          </span>
          </div>
          <div  class="fb-page" data-href="https://www.facebook.com/Friends-of-PCSIR-496779703828642/" 
           data-tabs="timeline" data-width="500" data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Friends-of-PCSIR-496779703828642/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Friends-of-PCSIR-496779703828642/">Friends of PCSIR</a></blockquote></div>
         </div>  
        </div>

        
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h3 className='py-0  text-center'> Latest Updates</h3>
                    
                    <div className='news-section d-flex flex-column marquee'>
                    {news.map((data)=> {
                        return(
                          <div className='news-block'>
                          <Link className="link" to={`/news/${data.id}`}>
                             {data.news_title}
                          </Link>
                          </div>
                        );
                    })}
                  


                    </div>
        </div>
        
      
    </div>
  )
}

export default IframeSection