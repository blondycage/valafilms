import React from 'react'
import Slider from "react-slick";
import img from "../files/Guzape1.jpeg"

export default function homepage({vid}) {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   autoplay:true,
    speed: 3000,
    arrows:false
   
    
  };
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

        </div>
    )
}
