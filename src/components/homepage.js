import {React ,useState,useEffect}from 'react'
import Slider from "react-slick";
import logovid from "../files/logo2.mp4"
import firebase from "./firebase"
import YouTube from 'react-youtube';
export default function Homepage({vid}) {
  const settings = {
   
    infinite: true,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   autoplay:true,
    speed: 1000,
   
    pauseOnHover:true,
   
   
    
  };
  const _onReady=(event)=>{
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
  }
  
  const _onEnd =(event)=> {
    event.target.playVideo();
  }
  const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0
    }
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
              <div className="vidcon ">
              <div className="">
        <div className="" id="myVideo">
        <video autoPlay muted loop id="myVideo">
  <source src={`${link}`} type="video/mp4"/>
</video>
        </div>
      </div>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">SHORTS,ADS,<br/>
  CREATIVE VIDEOGRAPHY<br/>   </h1>
</div>
</div> <br/>
<br/>

<Slider {...settings}>
          <div>
          <div className="slidecontent">
          <div style={{margin:'auto'}}>
          <h2>Who We ARE</h2>
          <p className='hometext'>We are a Grooup of creatives,just like you,seeking to create opportunities for people like us in the movie production industry</p>
          </div> </div>
          </div>
          <div>
          <div className="slidecontent">
            <div>
         
          <h2>VALA FILMS</h2>
          <p className='hometext'>VALA means "supreme" in Farsi,the language spoken in iran,the definition of SUPREME is something very great,remarkable or extraordinary which is what we aim to achieve</p>
          </div> </div>
          </div>
          <div>
          <div className="slidecontent">
          <div>
          <h2>OUR MISSION IS TO:</h2>
         
             <p className='hometext'>* Connect Creatives</p>
          <p className='hometext'> * Guide and Enhance the quality of content by connecting creatives with the best teams</p>
          <p className='hometext'>* Create and find opportunities that empower</p>
          <p className='hometext'>* improve the entire entertainment space together</p></div></div>
          
          </div>
          <div>
          
          <div className="slidecontent">
<div>
<h2>HOW YOU FIT IN</h2>
<p className='hometext'>Are you a Writer? <br/> An actor A Cinematographer <br/> or are you involved in any aspect of filmmaking and seeking opportunities to share your gifts with the world? Do you have ideas that require the best teams to execute? Send an Email to info@valafilms@gmail.com and hop on board </p></div>
</div>
</div>
<div className="slidecontent">
        <div className="wrapper">
          <h2>WhAT WE DO</h2>
          <p className='hometext'>Vala films is a bridge for film creatives to collaborateand create together.We create platforms for different facets of the film industry (in Abuja especially) to meet and combine  their skills and gifts to createcontent while protecting your own rights and the integrity of your content</p>
          </div> </div>
         
        </Slider>
        
        </div>:<div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'3%',
     minWidth:'100vw',backgroundColor:'black'}} >   <video autoPlay muted loop id="loading"  style={{maxWidth:'35vw',zIndex:'4000'}}>
     <source src={logovid} type="video/mp4"/>
   </video></div> }
        </div>
    )
}
