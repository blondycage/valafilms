import {React ,useState,useEffect}from 'react'
import Slider from "react-slick";
import logovid from "../files/logo2.mp4"
import firebase from "./firebase"
import img14 from "./1.jpg"
import img15 from "./2.jpg"
import img16 from "./3.jpg"
import img17 from "./4.jpg"
export default function Homepage({vid}) {
  const settings = {
   
    infinite: true,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   autoplay:true,
    speed: 10000,
    arrows:false,
    pauseOnHover:true
   
    
  };
  const [link,setlink] = useState()
 
  const loadContent= ()=>{
    const todoRef = firebase.database().ref('/vala/settings/homepage/landingvideo');
    todoRef.on('value', (snapshot) => {
     setlink(snapshot.val())
     console.log(link)

    }); }

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await loadContent();
    }
    // Execute the created function directly
    anyNameFunction();
    console.log("")

  },[link]);
    return (
     <div>{!!link?  
    
        <div>
              <div className="vidcon">
              
      <video autoPlay muted loop id="myVideo">
  <source src={`${link}`} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">SHORTS,ADS,<br/>
  CREATIVE VIDEOGRAPHY<br/>   </h1>
</div>
</div> <br/>
<br/>
<Slider {...settings}>
          <div>
          <div className="pcontent">
          <div>
          <h1>Who We ARE</h1>
          <p>We are a Grooup of creatives,just like you,seeking to create opportunities for people like us in the movie production industry</p>
          </div> </div>
          </div>
          <div>
          <div className="pcontent">
            <div>
         
          <h2>VALA FILMS</h2>
          <p>VALA means "supreme" in Farsi,the language spoken in iran,the definition of SUPREME is something very great,remarkable or extraordinary which is what we aim to achieve</p>
          </div> </div>
          </div>
          <div>
          <div className="pcontent">
          <div>
          <h2>What we intend to accomplish</h2>
          <p>VALA means "supreme" in Farsi,the language spoken in iran,the definition of SUPREME is something very great,remarkable or extraordinary which is what we aim to achieve</p>
          <ul><li>Connect Creatives</li>
          <li>Guide and Enhance the quality of content by connecting creatives with the best teams</li>
          <li>Create and find opportunities that empower</li>
          <li>improve the entire entertainment space together</li></ul></div></div>
          
          </div>
          <div>
          
          <div className="pcontent">
<div>
<h2>How You Fit In</h2>
<p>Are you a Writer? <br/> An actor A Cinematographer <br/> or are you involved in any aspect of filmmaking and seeking opportunities to share your gifts with the world? Do you have ideas that require the best teams to execute? Send an Email to info@valafilms@gmail.com and hop on board </p></div>
</div></div>
<div className="pcontent">
        <div>
          <h2>What We Do</h2>
          <p>Vala films is a bridge for film creatives to collaborateand create together.We create platforms for different facets of the film industry (in Abuja especially) to meet and combine  their skills and gifts to createcontent while protecting your own rights and the integrity of your content</p>
          </div> </div>
         
        </Slider>
        
        </div>:<div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'3%',
     minWidth:'100vw',backgroundColor:'black'}} >   <video autoPlay muted loop id="loading"  style={{maxWidth:'35vw',zIndex:'4000'}}>
     <source src={logovid} type="video/mp4"/>
   </video></div> }
        </div>
    )
}
