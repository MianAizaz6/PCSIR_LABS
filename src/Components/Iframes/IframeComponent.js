import React from 'react';
import "../../assets/scss/iframe.scss"

function IframeComponent({source, title}) {
  return (
    <div className='iframe-div'>
        <div>
          <span>
            {title}
          </span>
          </div>
        <iframe src={source} title={title} ></iframe>
    </div>
  )
}

export default IframeComponent