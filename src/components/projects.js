import React from 'react'
import lsp from "../files/LSP.jpeg"
import lsp1 from "../files/LSP1.jpeg"
import lsp2 from "../files/LSP2.png"
import lsp3 from "../files/LSP3.jpeg"
import lsp4 from "../files/LSP4.png"
import lsp5 from "../files/LSP5.jpeg"
import lsp6 from "../files/LSP6.jpeg"
import lsp7 from "../files/LSP7.png"
import sf from "../files/sf.jpeg"
import sf1 from "../files/sf1.jpeg"
import sf2 from "../files/sf2.jpeg"
import sf3 from "../files/sf3.jpeg"
import sf4 from "../files/sf4.jpeg"
import sf5 from "../files/sf5.jpeg"
import sf6 from "../files/sf6.jpeg"
import sf7 from "../files/sf7.jpeg"
import sf8 from "../files/sf8.jpeg"

import Button from '@material-ui/core/Button';
export default function projects({vid}) {
    return (
        <div>
                 <div className="vidcon">
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">DARK CIRCLE </h1>
<h4>a SHORT FILM BY CHAVALA YADUMA</h4> 

</div>

</div>
<div className="content"> 
<h2>LOUD SILENCE</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?</p>

<Button className={"trailer"} >Watch Trailer</Button>
</div>
<div className="projects">
<div className="linearcont">
  <div className="pcard">
  <img src={lsp}alt="img"/>
 
</div>
<div className="pcard">
  <img src={lsp1} alt="img"/>
 
</div>
</div>

<div className="linearcont"><div className="pcard">
  <img src={lsp2} alt="img"/>
 
</div>
<div className="pcard">
  <img src={lsp3} alt="img"/>
 
</div>
</div>
<div className="linearcont"><div className="pcard">
  <img src={lsp4} alt="img"/>
  
</div>
<div className="pcard">
  <img src={lsp5} alt="img"/>
 
</div>
</div>
<div className="linearcont"><div className="pcard">
  <img src={lsp6} alt="img"/>
 
</div>
<div className="pcard">
  <img src={lsp7} alt="img"/>

</div>
</div>

</div>
<div className="project">
<div className="content"> 
<h2>STILL FALLING</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?</p>

<Button className={"trailer"} >Watch Trailer</Button>
</div>
<div className="projects">
<div className="linearcont">
  <div className="pcard">
  <img src={sf}alt="img"/>
 
</div>
<div className="pcard">
  <img src={sf1} alt="img"/>
 
</div>
</div>

<div className="linearcont"><div className="pcard">
  <img src={sf2} alt="img"/>
 
</div>
<div className="pcard">
  <img src={sf3} alt="img"/>
 
</div>
</div>
<div className="linearcont"><div className="pcard">
  <img src={sf4} alt="img"/>
  
</div>
<div className="pcard">
  <img src={sf5} alt="img"/>
 
</div>
</div>
<div className="linearcont"><div className="pcard">
  <img src={sf6} alt="img"/>
 
</div>
<div className="pcard">
  <img src={sf7} alt="img"/>

</div>

</div>
</div>
</div>
</div>
       
    )
}
