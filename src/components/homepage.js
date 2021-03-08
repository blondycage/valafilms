import React from 'react'


export default function homepage({vid}) {

    return (
        <div>
              <div className="vidcon">
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">SHORTS,ADS,<br/>
  CREATIVE VIDEOGRAPHY<br/>   </h1>
</div>
</div>
        </div>
    )
}
