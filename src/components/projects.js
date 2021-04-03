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
import Slider from "react-slick";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useState} from "react"
import { teal, purple } from '@material-ui/core/colors';
export default function Projects({vid}) {
  const [ind,setIndex]=useState(0)
   const settings = {
  
    className: "slider variable-width center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll:6,
    variableWidth: true,
    autoplay:true,
    speed: 500,
  
  };
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);
  let movies=[{"header":"LOUD SILENCE",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"},{"header":"STILL FALLING",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"}]
    return (
        <div>
                 <div className="vidcon">
                   <div className="ic">
                 <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a>
</div>
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">DARK CIRCLE </h1>
<h4>a SHORT FILM BY CHAVALA YADUMA</h4> 

</div>

</div>
<Slider {...settings}>
          <div >
           <img src={sf1} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf2} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf3} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf4} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf5} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf6} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf7} className="imgs" onClick={()=>{setIndex(1)} } alt="img"/>
          </div>
          <div>
          <img src={sf8} onClick={()=>{setIndex(1)} }className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp1} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp2} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp3} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp4} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp5} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div><div>
          <img src={lsp6} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
          <div>
          <img src={lsp7} onClick={()=>{setIndex(0)}} className="imgs" alt="img"/>
          </div>
        </Slider>
      
<div className="content"> 
<h2>{movies[ind].header}</h2>
<p>{movies[ind].desc}</p>
<ColorButton className={"trailer"} variant="contained" color="secondary" >Watch Trailer</ColorButton>
</div>
<br/>
<br/>

</div>
       
    )
}
