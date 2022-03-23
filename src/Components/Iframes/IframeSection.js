import React from 'react'
import IframeComponent from './IframeComponent'

function IframeSection() {
  return (
    <div className='row gx-0'>
      <div className='col-lg-3 col-md-2'></div>
        <div className='col-lg-6 col-md-8 col-sm-12 p-0'> 
        <div className='iframe-div'>
        <div>
          <span>
            Facebook
          </span>
          </div>
          <div  class="fb-page" data-href="https://www.facebook.com/Friends-of-PCSIR-496779703828642/" 
           data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Friends-of-PCSIR-496779703828642/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Friends-of-PCSIR-496779703828642/">Friends of PCSIR</a></blockquote></div>

    </div>  
        </div>
        {/* <div className='col-lg-6 col-md-6 p-0'>
        <IframeComponent source={"https://www.youtube.com/embed/X8ipUgXH6jw"} title={"Facebook"}/>
        </div> */}
    </div>
  )
}

export default IframeSection