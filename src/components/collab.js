import React from 'react'
import img1 from "../files/Guzape1.jpeg"
import img2 from "../files/Guzape2.jpeg"
import img3 from "../files/Guzape3.jpeg"
import img4 from "../files/Guzape4.jpeg"
import img5 from "../files/Guzape5.jpeg"
export default function collab({vid}) {
    return (
        <div>
                 <div className="vidcon">
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">GUZAPE <br/>
 OF EARTH AND DUST
</h1>
</div>

</div>
<div className="content"> 
<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci delectus.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?</p>
</div>
<div className="projects">
<div className="linearcont">
  <div className="pcard">
  <img src={img1}alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, error!</h3>
</div>
<div className="pcard">
  <img src={img2}alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
</div>
</div>

<div className="linearcont"><div className="pcard">
  <img src={img3} alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, error!</h3>
</div>
<div className="pcard">
  <img src={img4} alt="img"/>
  <h3>Lorem ipsum dolor sit amet.</h3>
</div>
</div>

</div>
        </div>
    )
}
