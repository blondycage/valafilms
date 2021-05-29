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
import logovid from "../files/logo2.mp4"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Slider from "react-slick";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Rodal from 'rodal';
import {useState,useEffect  } from "react";
import { teal, purple } from '@material-ui/core/colors';
import firebase from "./firebase"
import YoutubeEmbed from "./embed";
export default function Projects({vid}) {
  const [ind,setIndex]=useState(0)
  const [showModal,setmodal]= useState(false)
  const [showModal2,setmodal2]= useState(false)
  const [current,setcurrent]= useState("")
  const settings = {
    dots: true,
    infinite: true,
 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 15000,
  };
  let images=[]
  const loadContent= ()=>{
    const todoRef = firebase.database().ref();
    todoRef.on('value', (snapshot) => {
     setobj(snapshot.val())
     console.log()
      setobj2(snapshot.val().filmpages.slides)
      setlink(snapshot.val().vala.settings.film.landingvideo)

    }); }
    const [obj,setobj]= useState()
    const [imgs,setimgs]= useState([])
   const[obj2,setobj2]=useState()
   const [link,setlink] = useState()

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);

 
useEffect(() => {
  // Create an scoped async function in the hook
  async function anyNameFunction() {
    await loadContent();
  }
  // Execute the created function directly
  anyNameFunction();
  
 
}, []);
  let movies=[{"header":"LOUD SILENCE",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"},{"header":"STILL FALLING",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"}]
    return (
      <div> {!!obj?
        <div>
 <div style={{zIndex:"6000",color:"white"}}>
  
   <div>{ showModal && <div className='tint' style={{backgroundColor:'black',minWidth:'100vw',minHeight:'100vh',zIndex:'400'}}></div>}
   <Rodal customMaskStyles={{backgroundColor:'black'}} customStyles={{backgroundColor:"black",padding:"0"}} visible={showModal} width={800} height={400} enterAnimation="rotate" showMask={true} onClose={()=>{setmodal(false)}}>
       <YoutubeEmbed embedId="rokGy0huYEA" />      
                </Rodal></div>
       
                <Rodal  customMaskStyles={{backgroundColor:'black'}} customStyles={{backgroundColor:"black",padding:"0"}} visible={showModal2} width={800} height={400} enterAnimation="rotate" showMask={true} onClose={()=>{setmodal2(false)}}>
       <img style={{width:"100%"}}  src={`${current}`} alt=""/>      
                </Rodal>
                </div>



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
  <source src={`${link}`} type="video/mp4"/>
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
{ 
   !!obj2 && Object.keys(obj2).map((item, i) => (
      <div className="flexcol">
      <div className="flexunder">
<div className="content"> 
<h2>{obj2[item].TITLE}</h2>
<p>{obj2[item].CAPTION}</p>
<ColorButton className={"trailer"} variant="contained" color="secondary" onClick={()=>{setmodal(true)}}>Watch Trailer</ColorButton>
</div>
<div className="poster">
  <img src={obj2[item].poster} alt=""/>
</div>
</div>
<div className="flexrow">

<div >
{obj2[item].supprtingimages.map((imgurl, index) => (
      
     
      images.push({src:imgurl.url,sizes: '(max-width: 000px) 400px'})
     
    ))

    }
    

<div style={{maxWidth:"800px"}}>
        <Carousel images={images}  hasSizeButton={false} thumbnailWidth='100px' thumbnailHeight='50px' />
     
      </div>
</div>
</div>

      </div>
    ))

}  

         
        
          
        </Slider>
      

<br/>
<br/>


</div>:<div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'3%',
     minWidth:'100vw',backgroundColor:'black'}} >   <video autoPlay muted loop id="loading"  style={{maxWidth:'35vw',zIndex:'4000'}}>
     <source src={logovid} type="video/mp4"/>
   </video></div>}
</div>
       
    )
}
