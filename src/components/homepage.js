import {React ,useState,useEffect}from 'react'
import Slider from "react-slick";
import img from "../files/Guzape1.jpeg"
import firebase from "./firebase"
import img14 from "./1.jpg"
import img15 from "./2.jpg"
import img16 from "./3.jpg"
import img17 from "./4.jpg"
export default function Homepage({vid}) {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   autoplay:true,
    speed: 3000,
    arrows:false
   
    
  };
  const [link,setlink] = useState("")
 
  const loadContent= ()=>{
    const todoRef = firebase.database().ref('vala/settings/homepage/landingvideo');
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
  }, []);
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
          <h1>MORE ABOUT US</h1>
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
        <h2 style={{textAlign:"center",color:'teal'}}>MEET THE TEAM</h2>
        <br/>
        <div className="workers">
   <div> <img src={img14} alt=""/>
   <h4 style={{textAlign:"center",color:'white'}}>Mike Surloff</h4>
     <small style={{textAlign:"center",color:'white'}}>CSO & Head of Markets</small></div>
     <div style={{textAlign:"center",color:'white'}}>  <img src={img15} alt=""/>
     <h4 style={{textAlign:"center",color:'white'}}>Jonathan Turner</h4>
     <small style={{textAlign:"center",color:'white'}}>CFO </small>
     
     </div>
   
    <div>  <img src={img16} alt=""/>
    <h4 style={{textAlign:"center",color:'white'}}> Amanda Benedict</h4>
     <small style={{textAlign:"center",color:'white'}}>I.T lead & Social media Manager</small></div>
   <div>  <img src={img17} alt=""/> <h4 >Paul Rife</h4>
     <small style={{textAlign:"center",color:'white'}}>Financial Manager</small>
     </div>
   
   </div>
        </div>
    )
}
