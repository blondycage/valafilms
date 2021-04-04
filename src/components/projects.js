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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
<br/>
<h1 style={{color:"teal",textAlign:"center",fontSize:"35px"}}>SHORTS</h1>
<br/>
<Slider {...settings}>
<div className="flexcol">
          <div className="flexunder">
<div className="content"> 
<h2>{movies[1].header}</h2>
<p>{movies[1].desc}</p>
<ColorButton className={"trailer"} variant="contained" color="secondary" >Watch Trailer</ColorButton>
</div>
<div className="poster"><img src={lsp} alt=""/></div>
</div>
<div className="flexrow">

  <div className="fleximg">
    <img src={lsp1} alt=""/>
    <img src={lsp2} alt=""/>
    <img src={lsp3} alt=""/>
    <img src={lsp4} alt=""/>
  </div>
</div>

          </div>
          <div className="flexcol">
          <div className="flexunder">
<div className="content"> 
<h2>{movies[0].header}</h2>
<p>{movies[0].desc}</p>
<ColorButton className={"trailer"} variant="contained" color="secondary" >Watch Trailer</ColorButton>
</div>
<div className="poster"><img src={sf} alt=""/></div>
</div>
<div className="flexrow">

  <div className="fleximg">
    <img src={sf1} alt=""/>
    <img src={sf2} alt=""/>
    <img src={sf3} alt=""/>
    <img src={sf4} alt=""/>
  </div>
</div>

          </div>
        
          
        </Slider>
      

<br/>
<br/>

</div>
       
    )
}
