import { React, useState, useEffect } from 'react'
import Slider from "react-slick";
import logovid from "../files/logo2.mp4"
import firebase from "./firebase"
import YouTube from 'react-youtube';
import Scrollbutton from "./scrolltobottom"
import VideoThumbnail from 'react-video-thumbnail';
import Logo from '../files/Logo_Low.png';
export default function Homepage({ vid }) {
  const settings = {

    infinite: true,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    arrows: false,
    pauseOnHover: true,



  }
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
  }

  const _onEnd = (event) => {
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
  const [link, setlink] = useState()
  const [thumblink,setthumblink] = useState()
  
  const loadContent = () => {
    const todoRef = firebase.database().ref();
    todoRef.on('value', (snapshot) => {
     
      setlink(snapshot.val().vala.settings.homepage.landingvideo)
      setthumblink(snapshot.val().vala.settings.homepage.thumb)
      console.log(link)

    });
  }

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await loadContent();
    }
    // Execute the created function directly
    anyNameFunction();
    console.log("")

  }, [link]);
  return (
    <div>{!!link ?

      <div>
        <div className="vidcon ">
        <img
        src={thumblink}
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />      
          <img className="middle" width="200px" src={Logo} />
          <div className="">

            <div className="" id="myVideo">
              <video autoPlay muted loop id="myVideo" style={{ opacity: isVideoLoaded ? 1 : 0 }} onLoadedData={onLoadedData}>
                <source src={`${link}`} type="video/mp4" />
              </video>
            </div>
          </div>


        </div> <br />
        <br />


        <Slider {...settings}>
        <div className="slidecontent">
            <div className="wrapper">
                <h2>Who We ARE</h2>

                <p class="hometext"><font color = "#c1872b">We</font> are a group of creatives, just like you.</p>
                <p className="hometext"><font color = "#c1872b">We</font> seek to create opportunities for people like us in the movie production industry.</p>
            </div>
          </div>
          <div className="slidecontent">
            <div className="wrapper">
                <h2>VALAFILMS</h2>

                <p className="hometext"><font color = "#c1872b">VALA</font> means <font color = "#c1872b">SUPREME</font> in Farsi, the language spoken in Iran. </p>
                <p className="hometext"><font color = "#c1872b">SUPREME</font> means something very great,remarkable or extraordinary. </p>
                <p class="hometext"><font color = "#c1872b">SUPREME</font> is what we aim to achieve.</p>
            </div> 
          </div>
          
          <div className="slidecontent">
            <div className="wrapper">
                <h2>OUR MISSION</h2>

                <p class="hometext">To connect creatives.</p>
                <p className="hometext">To guide and enhance the quality of content by connecting creatives with the best teams.</p>
                <p className="hometext">To create and find opportunities that empower.</p>
                <p className="hometext">To improve the entire entertainment space together.</p>
              </div></div>
          <div className="slidecontent">
            <div className="wrapper">
                <h2>HOW YOU FIT IN</h2>

                <p className="hometext">Are you a writer? An actor? A cinematographer?</p>
                <p className="hometext">Are you involved in any aspect of filmmaking and seeking opportunities to share your gifts with the world?</p>
                <p className="hometext">Do you have ideas that require the best teams to execute?</p>
                <p className="hometext">Send an Email to <font color = "#c1872b">info@valafilms@gmail.com</font>  and hop on board.</p>
            </div>
          </div>
          <div className="slidecontent">
            <div className="wrapper">
              <h2>WHAT WE DO</h2>

              <p class="hometext"><font color = "#c1872b">Valafilms</font> is a bridge for film creatives to collaborate and create together.</p>
              <p class="hometext"><font color = "#c1872b">We</font> create platforms for different facets of the film industry (in Abuja especially)</p>
              <p className="hometext">to meet and combine their skills and gifts to create content, while protecting your own rights and the integrity of your content.</p> 
            </div> 
          </div>

        </Slider>

      </div> : <div className="moblepre" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '3%',
        minWidth: '100vw', backgroundColor: 'black'
      }} >   <video autoPlay muted loop id="loading" style={{ maxWidth: '35vw', zIndex: '4000' }}>
          <source src={logovid} type="video/mp4" />
        </video></div>}








      <Scrollbutton />
      <br />
      <br />
    </div>
  )
}
