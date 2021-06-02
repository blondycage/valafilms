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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



import Rodal from 'rodal';
import {useState,useEffect  } from "react";
import { teal, purple } from '@material-ui/core/colors';
import firebase from "./firebase"
import YoutubeEmbed from "./embed";
export default function Ads({vid}) {
  const [ind,setIndex]=useState(0)
  const [showModal,setmodal]= useState(false)
  const [showModal2,setmodal2]= useState(false)
  const [current,setcurrent]= useState("")
  const [currentitem,setcurrentitem]= useState()
  const [currentind,setcurrentind]= useState()
  const useStyles = makeStyles({
    root: {
     backgroundColor:"black",
     zIndex:8000
    },
    bg:{
      backgroundColor:'black',
      zIndex:8000
    }
  });
  const settings = {
    dots: true,
    infinite: true,
 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    arrow:true
    
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

  };
  const [sett,setsettings]=React.useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let images=[]
  const loadContent= ()=>{
    const todoRef = firebase.database().ref();
    todoRef.on('value', (snapshot) => {
     setobj(snapshot.val())
     console.log()
      setobj2(snapshot.val().ad.slides)
      setlink(snapshot.val().vala.settings.ads.landingvideo)


    }); }
    const [obj,setobj]= useState()
    const [imgs,setimgs]= useState([])
   const[obj2,setobj2]=useState()
   const [link,setlink] = useState()
   const [imgarr,setarr] = useState([])
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
const classes = useStyles()
  let movies=[{"header":"LOUD SILENCE",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"},{"header":"STILL FALLING",
"desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?"}]
    return (
      <div>

         <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
       
      >
     <div style ={{display:'flex',backgroundColor:'black'}}>
          <Button  onClick={handleClose} color="primary">
          X
          </Button>
          </div>
     
        <DialogContent  className={classes.bg}>
        <div>
       
        <Slider {...sett}>
        {!!obj2 && !!currentitem && obj2[currentitem].supprtingimages.map((imgurl, index) => (
      <div>dd
    
      < img src={`${imgurl.url}`} alt="hey" style={{maxWidth:'800px',maxHeight:'800px',margin:'0 auto'}} key={index} />
<br />


     </div>
    ))

    }
        </Slider>
      </div>
        </DialogContent>
        
      </Dialog>
        
         {!!obj?
        <div>
 <div style={{zIndex:"6000",color:"white"}}>
  
   <div>{ showModal && <div className='tint' style={{backgroundColor:'black',minWidth:'100vw',minHeight:'100vh',zIndex:'400'}}></div>}
   <Rodal customMaskStyles={{backgroundColor:'black'}} customStyles={{backgroundColor:"black",padding:"0"}} visible={showModal} width={800} height={400} enterAnimation="rotate" showMask={true} onClose={()=>{setmodal(false)}}>
       <YoutubeEmbed embedId="rokGy0huYEA" />      
                </Rodal></div>
       
               
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
  <h1 className="slideup">BLACK FRIDAY SALE</h1>
<h4> BY CHAVALA YADUMA</h4> 

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

<div className='fleximg' >
{obj2[item].supprtingimages.map((imgurl, index) => (
      <div>
     {console.log(item)}
      < img src={`${imgurl.url}`} alt="hey" key={index} onClick={()=>{
      
        setsettings({...sett,initialSlide:index})
        setcurrentitem(item)
      handleClickOpen()
        
      }}/>
<br />


     </div>
    ))

    }

    


</div>


</div>
<Rodal  customMaskStyles={{backgroundColor:'black'}} customStyles={{backgroundColor:"black",padding:"0",zIndex:'6000'}} visible={showModal2} width={1000} height={1000} enterAnimation="rotate" showMask={true} onClose={()=>{setmodal2(false)}}>


                </Rodal>

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
