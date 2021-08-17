import logo from './files/Logo_Low.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Vid from '../src/files/video.mp4'
import Vid2 from '../src/files/vid.mp4'
import Vid3 from '../src/files/ad2.mp4'
import {useState,useEffect  } from "react";
import Home from "../src/components/homepage";
import Projects from "../src/components/projects"
import Collabs from "../src/components/collab"
import Admin from "../src/components/admin"
import Ad from "../src/components/Ad"
import Ab from "../src/components/about"
import emailjs from 'emailjs-com';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rad from "../src/files/radar.png";
import Modal from "react-animated-modal";
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useWindowScroll } from "react-use";
import zIndex from '@material-ui/core/styles/zIndex';
function Appm() {
  const { y: pageYOffset } = useWindowScroll();
 const [styleCondition,setstyle]=useState(true);
 const [styleCondition2,setstyle2]=useState(true);
 const [styleCondition3,setstyle3]=useState(true);
 const [visible, setVisiblity] = useState("");
const[view,setview]=useState('home');

 function setviews(role) {
  
  switch(role) {
    case 'home':
      return <Home vid={Vid}/>
    case 'projects':
    return <Projects vid={Vid2} />
    case 'collab':
      return <Collabs vid ={Vid}/>
      case 'adverts':
        return <Ad vid ={Vid3}/>
        case 'about':
          return <Ab  />
          case 'team':
            return <Ab  />
    default:
      return <p>Your current feed</p>
  }

}
useEffect(() => {
  if (pageYOffset > 100) {
      setVisiblity("black");
  } else {
      setVisiblity("");
  }
}, [pageYOffset]);
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_oxpe34e', 'template_4eiz1bm', e.target, 'user_y8UP0RC7QPtiBCf0ynAQD')
    .then((result) => {
        console.log(result.text);
        alert('form submitted');
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
          input => (input.value = "")
        );
        setmodal(false)
    }, (error) => {
        console.log(error.text);
    });
}
const [showModal,setmodal]= useState(false)
  return (
    <div className="App">
       
        
    <div className={`navcontainer ${visible}`}></div>
      <div className="homecon">
        <img src={logo} alt=""/>
        <h1 className="valatext">V A L A F I L M S</h1>
        <div style={{zIndex:"6000",color:"white"}}>
       <Rodal className="element" customMaskStyles={{backgroundColor:'#050a05'}} customStyles={{backgroundColor:"#050a05",padding:"10px",width:"80vw",height:"auto",overflowY: 'auto'}} visible={showModal}  enterAnimation="rotate" onClose={()=>{setmodal(false)}}>
       <form  onSubmit={sendEmail}>
  <input type="text" placeholder="NAME" name="name" required />
  <input type="text" placeholder="EMAIL ADDRESS" name="email" required   />
  <input type="text" placeholder="PHONE" name="phone" required />
  <textarea required  placeholder="YOUR FIELD(S) OF SPECIALIZATION 

(Directing, Acting, Voice Acting, Cinematography, Color Grading, Sound Design, Music Production/Scoring, Screenwriting, Drone piloting, Video Editing, Art Directing, Project Management, Graphics, Photography, Animating, Set Design, Etc.)" name="field"></textarea>
  <input  type="text" placeholder="LINK TO PREVIOUS WORK" name="pw"/>
  <input required  type="text" placeholder="HOW DID YOU HEAR ABOUT US?" name="us" />
  <textarea placeholder="YOUR MESSAGE" name="message"></textarea>
  <input type="submit" value="SEND" />
</form>
                </Rodal>
                </div>
      </div>
    {setviews(view)}
        
        <div id="nav-icon2" className={styleCondition2 ? "spin circle": "spin circle open"} onClick={(e)=>{ e.preventDefault();setstyle2(!styleCondition2);setstyle3(!styleCondition3);
        setstyle(!styleCondition)}}>
  <span ></span>
  <span ></span>
  <span ></span>
  <span ></span>
  <span ></span>
  <span></span>

+
      </div>

  <div className={styleCondition ? "nav" : "nav show"}>

    <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}> <p className="cp-text">
    © Copyright 2021 Valafilms. All rights reserved. <br />
    <div style={{display:'flex',justifyContent:'center'}}> <p  className="gmail" >
   info.valafilms@gmail.com
</p></div>
</p></div>
  


<div className="radar">
  <img src={rad} alt=""/>
</div>
    <div className="navcontent">

<div className="nav-content-container">

<h1 className={styleCondition3 ? "slidedown" : "slideup"}onClick={()=>{setview('home');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}} >home </h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"} onClick={()=>{setview('projects');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>films</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"}onClick={()=>{setview('collab');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>collaborations</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"} onClick={()=>{setview('adverts');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>commercials</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"} onClick={()=>{setview('team');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>team</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"} onClick={()=>{setmodal(true);
setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}} style={{cursor:"pointer"}}> 
   JOIN US
</h1>
<div className={styleCondition3 ? "slidedown " : "slideup "} onClick={()=>{setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>
               <div className="aflex"> <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a></div> 
</div>





</div>


      
    </div>
  </div>

         
  
    </div>
  );
}

export default Appm;
