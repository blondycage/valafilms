import React from 'react'
import img1 from "../files/Guzape1.jpeg"
import img2 from "../files/Guzape2.jpeg"
import img3 from "../files/Guzape3.jpeg"
import img4 from "../files/Guzape4.jpeg"
import img5 from "../files/Guzape5.jpeg"
import Button from '@material-ui/core/Button';
export default function collab({vid}) {
    return (
        <div>
                 <div className="vidcon">
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">GUZAPE </h1>
 <h4>OF EARTH AND DUST</h4>

</div>

</div>
<div className="content"> 
<h2>GUZAPE</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?</p>
<Button className="trailer" variant="containned" color="primary">Watch Trailer</Button>
</div>
<div className="projects">
<div className="linearcont">
  <div className="pcard">
  <img src={img1}alt="img"/>
 
</div>
<div className="pcard">
  <img src={img2}alt="img"/>
 
</div>
</div>

<div className="linearcont"><div className="pcard">
  <img src={img3} alt="img"/>
 
</div>
<div className="pcard">
  <img src={img4} alt="img"/>
  
</div>
</div>

</div>
        </div>
    )
}
